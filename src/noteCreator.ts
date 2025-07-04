import { App, TFile, Notice, TFolder, normalizePath } from 'obsidian';
import { MQTTNoteSettings, MQTTMessage } from './types';

/**
 * NoteCreator handles incoming MQTT messages and creates corresponding notes in Obsidian
 * This implements the incoming data flow: MQTT Broker → MQTTClient → NoteCreator → Obsidian Notes
 */
export class NoteCreator {
    private app: App;

    constructor(app: App) {
        this.app = app;
    }

    /**
     * Main entry point for handling incoming MQTT messages
     * Orchestrates the complete note creation process with comprehensive error handling
     */
    async handleIncomingMessage(message: MQTTMessage, settings: MQTTNoteSettings): Promise<void> {
        const startTime = Date.now();
        
        try {
            console.log(`NoteCreator: Processing incoming message from topic: ${message.topic}`);

            // Validate input parameters
            if (!message.topic || message.topic.trim() === '') {
                throw new Error('Invalid MQTT topic: topic cannot be empty');
            }

            if (!settings.incomingNoteFolder) {
                throw new Error('Incoming note folder not configured in settings');
            }

            // Ensure the incoming note folder exists
            await this.ensureFolderExists(settings.incomingNoteFolder);

            // Generate note title from MQTT topic
            const noteTitle = this.generateNoteTitle(message.topic);
            console.log(`NoteCreator: Generated note title: ${noteTitle}`);

            // Check if note already exists
            const existingNote = await this.findExistingNote(noteTitle, settings.incomingNoteFolder);

            if (existingNote) {
                console.log(`NoteCreator: Updating existing note: ${existingNote.name}`);
                await this.updateExistingNote(existingNote, message);
            } else {
                console.log(`NoteCreator: Creating new note: ${noteTitle}`);
                await this.createNoteFromMessage(message, noteTitle, settings.incomingNoteFolder);
            }

            const duration = Date.now() - startTime;
            console.log(`NoteCreator: Successfully processed message from topic ${message.topic} (took ${duration}ms)`);

        } catch (error) {
            const duration = Date.now() - startTime;
            console.error(`NoteCreator: Failed to process message from topic ${message.topic} after ${duration}ms:`, error);
            
            // Show user-friendly error notification
            const errorMessage = error instanceof Error ? error.message : String(error);
            new Notice(`Failed to create note from MQTT message: ${errorMessage}`);
            
            throw error;
        }
    }

    /**
     * Creates a new note from an MQTT message
     * Handles file creation with proper error handling and validation
     */
    async createNoteFromMessage(message: MQTTMessage, noteTitle: string, folder: string): Promise<TFile> {
        try {
            // Sanitize the filename
            const sanitizedFilename = this.sanitizeFilename(noteTitle);
            const filePath = normalizePath(`${folder}/${sanitizedFilename}.md`);

            // Create note content
            const content = this.createNoteContent(message);

            // Create the file
            const file = await this.app.vault.create(filePath, content);
            
            console.log(`NoteCreator: Created new note: ${file.path}`);
            return file;

        } catch (error) {
            console.error(`NoteCreator: Failed to create note from message:`, error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            throw new Error(`Failed to create note: ${errorMessage}`);
        }
    }

    /**
     * Updates an existing note with new MQTT message content
     * Appends new content while preserving existing content
     */
    async updateExistingNote(file: TFile, message: MQTTMessage): Promise<void> {
        try {
            // Read existing content
            const existingContent = await this.app.vault.read(file);
            
            // Create new content section
            const newContentSection = this.createUpdateContent(message);
            
            // Append new content to existing content
            const updatedContent = existingContent + '\n\n---\n\n' + newContentSection;
            
            // Write updated content
            await this.app.vault.modify(file, updatedContent);
            
            console.log(`NoteCreator: Updated existing note: ${file.path}`);

        } catch (error) {
            console.error(`NoteCreator: Failed to update existing note ${file.path}:`, error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            throw new Error(`Failed to update existing note: ${errorMessage}`);
        }
    }

    /**
     * Generates a valid note title from an MQTT topic
     * Converts topic hierarchy to readable filename
     */
    generateNoteTitle(topic: string): string {
        try {
            // Split topic into segments
            const segments = topic.split('/').filter(segment => segment.trim() !== '');
            
            if (segments.length === 0) {
                return 'MQTT_Message';
            }

            // For single segment, use it directly
            if (segments.length === 1) {
                return segments[0] || 'MQTT_Message';
            }

            // For multiple segments, create hierarchical title
            // Example: "homeassistant/sensor/temperature" → "HomeAssistant Sensor Temperature"
            const title = segments
                .map(segment => this.capitalizeFirstLetter(segment))
                .join(' ');

            return title;

        } catch (error) {
            console.error('NoteCreator: Error generating note title:', error);
            return 'MQTT_Message';
        }
    }

    /**
     * Sanitizes filename to be safe for filesystem
     * Removes or replaces invalid characters and handles edge cases
     */
    private sanitizeFilename(filename: string): string {
        try {
            return filename
                // Replace invalid filesystem characters
                .replace(/[<>:"/\\|?*]/g, '_')
                // Replace multiple spaces with single space
                .replace(/\s+/g, ' ')
                // Replace spaces with underscores
                .replace(/\s/g, '_')
                // Remove leading/trailing dots and spaces
                .replace(/^[.\s]+|[.\s]+$/g, '')
                // Limit length to 100 characters
                .substring(0, 100)
                // Ensure it's not empty
                || 'MQTT_Message';
        } catch (error) {
            console.error('NoteCreator: Error sanitizing filename:', error);
            return 'MQTT_Message';
        }
    }

    /**
     * Formats payload content based on its type
     * Handles strings, numbers, and JSON objects with proper formatting
     */
    private formatPayload(payload: string | Record<string, any>): string {
        try {
            if (typeof payload === 'string') {
                return payload;
            }

            if (typeof payload === 'object' && payload !== null) {
                // Format JSON objects as code blocks for readability
                return '```json\n' + JSON.stringify(payload, null, 2) + '\n```';
            }

            // Handle any other types by converting to string
            return String(payload);

        } catch (error) {
            console.error('NoteCreator: Error formatting payload:', error);
            return String(payload);
        }
    }

    /**
     * Creates the complete note content with frontmatter and structured format
     */
    private createNoteContent(message: MQTTMessage): string {
        try {
            const timestamp = new Date(message.timestamp).toISOString();
            const formattedPayload = this.formatPayload(message.payload);

            return `---
mqtt_source: true
mqtt_topic: ${message.topic}
created: ${timestamp}
updated: ${timestamp}
---

# ${this.generateNoteTitle(message.topic)}

## Source Information
- **MQTT Topic:** \`${message.topic}\`
- **Received:** ${new Date(message.timestamp).toLocaleString()}
- **Payload Type:** ${typeof message.payload}

## Content

${formattedPayload}`;

        } catch (error) {
            console.error('NoteCreator: Error creating note content:', error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            return `# MQTT Message\n\nError creating note content: ${errorMessage}\n\nRaw message: ${JSON.stringify(message, null, 2)}`;
        }
    }

    /**
     * Creates content for updating existing notes
     */
    private createUpdateContent(message: MQTTMessage): string {
        try {
            const timestamp = new Date(message.timestamp).toISOString();
            const formattedPayload = this.formatPayload(message.payload);

            return `## Update - ${new Date(message.timestamp).toLocaleString()}

**Topic:** \`${message.topic}\`
**Payload Type:** ${typeof message.payload}

${formattedPayload}`;

        } catch (error) {
            console.error('NoteCreator: Error creating update content:', error);
            return `## Update - ${new Date().toLocaleString()}\n\nError creating update content: ${error}`;
        }
    }

    /**
     * Ensures that the specified folder exists, creating it if necessary
     */
    private async ensureFolderExists(folderPath: string): Promise<void> {
        try {
            const normalizedPath = normalizePath(folderPath);
            
            // Check if folder already exists
            const existingFolder = this.app.vault.getAbstractFileByPath(normalizedPath);
            
            if (existingFolder && existingFolder instanceof TFolder) {
                console.log(`NoteCreator: Folder already exists: ${normalizedPath}`);
                return;
            }

            // Create folder if it doesn't exist
            await this.app.vault.createFolder(normalizedPath);
            console.log(`NoteCreator: Created folder: ${normalizedPath}`);

        } catch (error) {
            // Folder might already exist, which is fine
            if (error instanceof Error && error.message.includes('already exists')) {
                console.log(`NoteCreator: Folder already exists: ${folderPath}`);
                return;
            }
            
            console.error(`NoteCreator: Failed to ensure folder exists: ${folderPath}`, error);
            throw new Error(`Failed to create folder: ${folderPath}`);
        }
    }

    /**
     * Finds an existing note with the given title in the specified folder
     */
    private async findExistingNote(title: string, folder: string): Promise<TFile | null> {
        try {
            const sanitizedFilename = this.sanitizeFilename(title);
            const filePath = normalizePath(`${folder}/${sanitizedFilename}.md`);
            
            const file = this.app.vault.getAbstractFileByPath(filePath);
            
            if (file && file instanceof TFile) {
                console.log(`NoteCreator: Found existing note: ${file.path}`);
                return file;
            }

            return null;

        } catch (error) {
            console.error(`NoteCreator: Error finding existing note:`, error);
            return null;
        }
    }

    /**
     * Capitalizes the first letter of a string
     */
    private capitalizeFirstLetter(str: string): string {
        if (!str || str.length === 0) {
            return str;
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}