import { TFile, CachedMetadata, parseFrontMatterEntry } from 'obsidian';
import { MQTTNoteSettings, MQTTMessage } from './types';
import { MQTTClient } from './mqttClient';

/**
 * Interface for note payload structure
 */
export interface NotePayload {
    frontmatter: Record<string, any>;
    content: string;
    title: string;
    timestamp: number;
    path: string;
}

/**
 * NotePublisher handles the conversion of Obsidian notes to MQTT messages
 * It parses frontmatter, generates topics, and publishes notes to MQTT broker
 */
export class NotePublisher {
    private mqttClient: MQTTClient;
    private settings: MQTTNoteSettings;
    private app: any; // Obsidian App instance

    constructor(mqttClient: MQTTClient, settings: MQTTNoteSettings, app: any) {
        this.mqttClient = mqttClient;
        this.settings = settings;
        this.app = app;
    }

    /**
     * Updates the settings reference when settings change
     */
    updateSettings(settings: MQTTNoteSettings): void {
        this.settings = settings;
    }

    /**
     * Determines if a note should be published based on its frontmatter
     * Checks for 'mqtt: true' property in the frontmatter
     */
    shouldPublishNote(file: TFile): boolean {
        try {
            const cache = this.app.metadataCache.getFileCache(file);
            if (!cache || !cache.frontmatter) {
                console.log(`Note ${file.name} has no frontmatter, skipping publish check`);
                return false;
            }

            const frontmatter = cache.frontmatter;
            const mqttProperty = frontmatter.mqtt;

            // Check if mqtt property exists and is explicitly set to true
            if (mqttProperty === true || mqttProperty === 'true') {
                console.log(`Note ${file.name} has mqtt: true, should be published`);
                return true;
            }

            console.log(`Note ${file.name} does not have mqtt: true (value: ${mqttProperty}), skipping publish`);
            return false;
        } catch (error) {
            console.error(`Error checking frontmatter for note ${file.name}:`, error);
            return false;
        }
    }

    /**
     * Generates MQTT topic name from note title and configured prefix
     * Sanitizes the title to be MQTT-topic safe
     */
    generateTopic(file: TFile): string {
        try {
            // Get the note title (filename without extension)
            const title = file.basename;
            
            // Sanitize the title for MQTT topic usage
            const sanitizedTitle = this.sanitizeTopicName(title);
            
            // Combine prefix with sanitized title
            const topic = `${this.settings.outgoingPrefix}${sanitizedTitle}`;
            
            console.log(`Generated topic for note ${file.name}: ${topic}`);
            return topic;
        } catch (error) {
            console.error(`Error generating topic for note ${file.name}:`, error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            throw new Error(`Failed to generate topic for note ${file.name}: ${errorMessage}`);
        }
    }

    /**
     * Creates JSON payload containing frontmatter, content, and metadata
     */
    async createPayload(file: TFile): Promise<NotePayload> {
        try {
            // Read the file content
            const content = await this.app.vault.read(file);
            
            // Parse frontmatter and content
            const { frontmatter, content: noteContent } = this.parseFrontmatterAndContent(content);
            
            // Create structured payload
            const payload: NotePayload = {
                frontmatter: frontmatter || {},
                content: noteContent,
                title: file.basename,
                timestamp: Date.now(),
                path: file.path
            };

            console.log(`Created payload for note ${file.name} (content length: ${noteContent.length})`);
            return payload;
        } catch (error) {
            console.error(`Error creating payload for note ${file.name}:`, error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            throw new Error(`Failed to create payload for note ${file.name}: ${errorMessage}`);
        }
    }

    /**
     * Publishes a note to MQTT broker
     * Orchestrates the entire publish process: check, generate topic, create payload, publish
     */
    async publishNote(file: TFile): Promise<void> {
        const startTime = Date.now();
        
        try {
            console.log(`Starting publish process for note: ${file.name}`);

            // Check if note should be published
            if (!this.shouldPublishNote(file)) {
                console.log(`Skipping publish for note ${file.name} - does not meet criteria`);
                return;
            }

            // Verify MQTT client is connected
            if (!this.mqttClient.isConnected()) {
                throw new Error('MQTT client is not connected');
            }

            // Generate topic
            const topic = this.generateTopic(file);

            // Create payload
            const payload = await this.createPayload(file);

            // Publish to MQTT
            await this.mqttClient.publish(topic, payload);

            const duration = Date.now() - startTime;
            console.log(`Successfully published note ${file.name} to topic ${topic} (took ${duration}ms)`);

        } catch (error) {
            const duration = Date.now() - startTime;
            console.error(`Failed to publish note ${file.name} after ${duration}ms:`, error);
            throw error;
        }
    }

    /**
     * Publishes multiple notes in sequence
     * Useful for batch publishing operations
     */
    async publishNotes(files: TFile[]): Promise<void> {
        console.log(`Starting batch publish for ${files.length} notes`);
        
        const results = {
            successful: 0,
            skipped: 0,
            failed: 0
        };

        for (const file of files) {
            try {
                await this.publishNote(file);
                results.successful++;
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                if (errorMessage.includes('does not meet criteria')) {
                    results.skipped++;
                } else {
                    results.failed++;
                    console.error(`Failed to publish note ${file.name}:`, error);
                }
            }
        }

        console.log(`Batch publish completed: ${results.successful} successful, ${results.skipped} skipped, ${results.failed} failed`);
    }

    /**
     * Sanitizes note title to be safe for MQTT topic usage
     * Removes or replaces characters that are not allowed in MQTT topics
     */
    private sanitizeTopicName(title: string): string {
        // MQTT topic level separator is '/', and wildcards are '+' and '#'
        // We'll replace these and other potentially problematic characters
        return title
            .replace(/[\/\+\#\$\*\>\?\|]/g, '_') // Replace MQTT special chars and shell chars
            .replace(/\s+/g, '_') // Replace spaces with underscores
            .replace(/[^\w\-_\.]/g, '') // Remove non-word chars except dash, underscore, dot
            .replace(/_{2,}/g, '_') // Replace multiple underscores with single
            .replace(/^_+|_+$/g, ''); // Remove leading/trailing underscores
    }

    /**
     * Parses frontmatter and content from note text
     * Handles malformed frontmatter gracefully
     */
    private parseFrontmatterAndContent(text: string): { frontmatter: Record<string, any> | null; content: string } {
        try {
            // Check if text starts with frontmatter delimiter
            if (!text.startsWith('---')) {
                return { frontmatter: null, content: text };
            }

            // Find the closing frontmatter delimiter
            const lines = text.split('\n');
            let frontmatterEnd = -1;
            
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i];
                if (line && line.trim() === '---') {
                    frontmatterEnd = i;
                    break;
                }
            }

            if (frontmatterEnd === -1) {
                // No closing delimiter found, treat as regular content
                console.warn('Malformed frontmatter: no closing delimiter found');
                return { frontmatter: null, content: text };
            }

            // Extract frontmatter and content
            const frontmatterText = lines.slice(1, frontmatterEnd).join('\n');
            const content = lines.slice(frontmatterEnd + 1).join('\n');

            // Parse frontmatter as YAML
            const frontmatter = this.parseYamlFrontmatter(frontmatterText);
            
            return { frontmatter, content };
        } catch (error) {
            console.error('Error parsing frontmatter:', error);
            return { frontmatter: null, content: text };
        }
    }

    /**
     * Simple YAML parser for frontmatter
     * Handles basic key-value pairs and common YAML structures
     */
    private parseYamlFrontmatter(yamlText: string): Record<string, any> {
        const frontmatter: Record<string, any> = {};
        
        try {
            const lines = yamlText.split('\n');
            
            for (const line of lines) {
                const trimmed = line.trim();
                if (!trimmed || trimmed.startsWith('#')) {
                    continue; // Skip empty lines and comments
                }

                const colonIndex = trimmed.indexOf(':');
                if (colonIndex === -1) {
                    continue; // Skip lines without colon
                }

                const key = trimmed.substring(0, colonIndex).trim();
                const value = trimmed.substring(colonIndex + 1).trim();

                if (key) {
                    frontmatter[key] = this.parseYamlValue(value);
                }
            }
        } catch (error) {
            console.error('Error parsing YAML frontmatter:', error);
        }

        return frontmatter;
    }

    /**
     * Parses individual YAML values, handling common types
     */
    private parseYamlValue(value: string): any {
        if (!value) {
            return '';
        }

        // Remove quotes if present
        const unquoted = value.replace(/^['"]|['"]$/g, '');

        // Handle boolean values
        if (unquoted.toLowerCase() === 'true') {
            return true;
        }
        if (unquoted.toLowerCase() === 'false') {
            return false;
        }

        // Handle null values
        if (unquoted.toLowerCase() === 'null' || unquoted === '~') {
            return null;
        }

        // Handle numbers
        if (/^-?\d+$/.test(unquoted)) {
            return parseInt(unquoted, 10);
        }
        if (/^-?\d+\.\d+$/.test(unquoted)) {
            return parseFloat(unquoted);
        }

        // Handle arrays (simple comma-separated values)
        if (unquoted.startsWith('[') && unquoted.endsWith(']')) {
            const arrayContent = unquoted.slice(1, -1);
            return arrayContent.split(',').map(item => this.parseYamlValue(item.trim()));
        }

        // Return as string
        return unquoted;
    }
}