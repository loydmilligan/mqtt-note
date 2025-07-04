"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotePublisher = void 0;
class NotePublisher {
    constructor(mqttClient, settings, app) {
        this.mqttClient = mqttClient;
        this.settings = settings;
        this.app = app;
    }
    updateSettings(settings) {
        this.settings = settings;
    }
    shouldPublishNote(file) {
        try {
            const cache = this.app.metadataCache.getFileCache(file);
            if (!cache || !cache.frontmatter) {
                console.log(`Note ${file.name} has no frontmatter, skipping publish check`);
                return false;
            }
            const frontmatter = cache.frontmatter;
            const mqttProperty = frontmatter.mqtt;
            if (mqttProperty === true || mqttProperty === 'true') {
                console.log(`Note ${file.name} has mqtt: true, should be published`);
                return true;
            }
            console.log(`Note ${file.name} does not have mqtt: true (value: ${mqttProperty}), skipping publish`);
            return false;
        }
        catch (error) {
            console.error(`Error checking frontmatter for note ${file.name}:`, error);
            return false;
        }
    }
    generateTopic(file) {
        try {
            const title = file.basename;
            const sanitizedTitle = this.sanitizeTopicName(title);
            const topic = `${this.settings.outgoingPrefix}${sanitizedTitle}`;
            console.log(`Generated topic for note ${file.name}: ${topic}`);
            return topic;
        }
        catch (error) {
            console.error(`Error generating topic for note ${file.name}:`, error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            throw new Error(`Failed to generate topic for note ${file.name}: ${errorMessage}`);
        }
    }
    async createPayload(file) {
        try {
            const content = await this.app.vault.read(file);
            const { frontmatter, content: noteContent } = this.parseFrontmatterAndContent(content);
            const payload = {
                frontmatter: frontmatter || {},
                content: noteContent,
                title: file.basename,
                timestamp: Date.now(),
                path: file.path
            };
            console.log(`Created payload for note ${file.name} (content length: ${noteContent.length})`);
            return payload;
        }
        catch (error) {
            console.error(`Error creating payload for note ${file.name}:`, error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            throw new Error(`Failed to create payload for note ${file.name}: ${errorMessage}`);
        }
    }
    async publishNote(file) {
        const startTime = Date.now();
        try {
            console.log(`Starting publish process for note: ${file.name}`);
            if (!this.shouldPublishNote(file)) {
                console.log(`Skipping publish for note ${file.name} - does not meet criteria`);
                return;
            }
            if (!this.mqttClient.isConnected()) {
                throw new Error('MQTT client is not connected');
            }
            const topic = this.generateTopic(file);
            const payload = await this.createPayload(file);
            await this.mqttClient.publish(topic, payload);
            const duration = Date.now() - startTime;
            console.log(`Successfully published note ${file.name} to topic ${topic} (took ${duration}ms)`);
        }
        catch (error) {
            const duration = Date.now() - startTime;
            console.error(`Failed to publish note ${file.name} after ${duration}ms:`, error);
            throw error;
        }
    }
    async publishNotes(files) {
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
            }
            catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                if (errorMessage.includes('does not meet criteria')) {
                    results.skipped++;
                }
                else {
                    results.failed++;
                    console.error(`Failed to publish note ${file.name}:`, error);
                }
            }
        }
        console.log(`Batch publish completed: ${results.successful} successful, ${results.skipped} skipped, ${results.failed} failed`);
    }
    sanitizeTopicName(title) {
        return title
            .replace(/[\/\+\#\$\*\>\?\|]/g, '_')
            .replace(/\s+/g, '_')
            .replace(/[^\w\-_\.]/g, '')
            .replace(/_{2,}/g, '_')
            .replace(/^_+|_+$/g, '');
    }
    parseFrontmatterAndContent(text) {
        try {
            if (!text.startsWith('---')) {
                return { frontmatter: null, content: text };
            }
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
                console.warn('Malformed frontmatter: no closing delimiter found');
                return { frontmatter: null, content: text };
            }
            const frontmatterText = lines.slice(1, frontmatterEnd).join('\n');
            const content = lines.slice(frontmatterEnd + 1).join('\n');
            const frontmatter = this.parseYamlFrontmatter(frontmatterText);
            return { frontmatter, content };
        }
        catch (error) {
            console.error('Error parsing frontmatter:', error);
            return { frontmatter: null, content: text };
        }
    }
    parseYamlFrontmatter(yamlText) {
        const frontmatter = {};
        try {
            const lines = yamlText.split('\n');
            for (const line of lines) {
                const trimmed = line.trim();
                if (!trimmed || trimmed.startsWith('#')) {
                    continue;
                }
                const colonIndex = trimmed.indexOf(':');
                if (colonIndex === -1) {
                    continue;
                }
                const key = trimmed.substring(0, colonIndex).trim();
                const value = trimmed.substring(colonIndex + 1).trim();
                if (key) {
                    frontmatter[key] = this.parseYamlValue(value);
                }
            }
        }
        catch (error) {
            console.error('Error parsing YAML frontmatter:', error);
        }
        return frontmatter;
    }
    parseYamlValue(value) {
        if (!value) {
            return '';
        }
        const unquoted = value.replace(/^['"]|['"]$/g, '');
        if (unquoted.toLowerCase() === 'true') {
            return true;
        }
        if (unquoted.toLowerCase() === 'false') {
            return false;
        }
        if (unquoted.toLowerCase() === 'null' || unquoted === '~') {
            return null;
        }
        if (/^-?\d+$/.test(unquoted)) {
            return parseInt(unquoted, 10);
        }
        if (/^-?\d+\.\d+$/.test(unquoted)) {
            return parseFloat(unquoted);
        }
        if (unquoted.startsWith('[') && unquoted.endsWith(']')) {
            const arrayContent = unquoted.slice(1, -1);
            return arrayContent.split(',').map(item => this.parseYamlValue(item.trim()));
        }
        return unquoted;
    }
}
exports.NotePublisher = NotePublisher;
