"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteCreator = void 0;
const obsidian_1 = require("obsidian");
class NoteCreator {
    constructor(app) {
        this.app = app;
    }
    async handleIncomingMessage(message, settings) {
        const startTime = Date.now();
        try {
            console.log(`NoteCreator: Processing incoming message from topic: ${message.topic}`);
            if (!message.topic || message.topic.trim() === '') {
                throw new Error('Invalid MQTT topic: topic cannot be empty');
            }
            if (!settings.incomingNoteFolder) {
                throw new Error('Incoming note folder not configured in settings');
            }
            await this.ensureFolderExists(settings.incomingNoteFolder);
            const noteTitle = this.generateNoteTitle(message.topic);
            console.log(`NoteCreator: Generated note title: ${noteTitle}`);
            const existingNote = await this.findExistingNote(noteTitle, settings.incomingNoteFolder);
            if (existingNote) {
                console.log(`NoteCreator: Updating existing note: ${existingNote.name}`);
                await this.updateExistingNote(existingNote, message);
            }
            else {
                console.log(`NoteCreator: Creating new note: ${noteTitle}`);
                await this.createNoteFromMessage(message, noteTitle, settings.incomingNoteFolder);
            }
            const duration = Date.now() - startTime;
            console.log(`NoteCreator: Successfully processed message from topic ${message.topic} (took ${duration}ms)`);
        }
        catch (error) {
            const duration = Date.now() - startTime;
            console.error(`NoteCreator: Failed to process message from topic ${message.topic} after ${duration}ms:`, error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            new obsidian_1.Notice(`Failed to create note from MQTT message: ${errorMessage}`);
            throw error;
        }
    }
    async createNoteFromMessage(message, noteTitle, folder) {
        try {
            const sanitizedFilename = this.sanitizeFilename(noteTitle);
            const filePath = (0, obsidian_1.normalizePath)(`${folder}/${sanitizedFilename}.md`);
            const content = this.createNoteContent(message);
            const file = await this.app.vault.create(filePath, content);
            console.log(`NoteCreator: Created new note: ${file.path}`);
            return file;
        }
        catch (error) {
            console.error(`NoteCreator: Failed to create note from message:`, error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            throw new Error(`Failed to create note: ${errorMessage}`);
        }
    }
    async updateExistingNote(file, message) {
        try {
            const existingContent = await this.app.vault.read(file);
            const newContentSection = this.createUpdateContent(message);
            const updatedContent = existingContent + '\n\n---\n\n' + newContentSection;
            await this.app.vault.modify(file, updatedContent);
            console.log(`NoteCreator: Updated existing note: ${file.path}`);
        }
        catch (error) {
            console.error(`NoteCreator: Failed to update existing note ${file.path}:`, error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            throw new Error(`Failed to update existing note: ${errorMessage}`);
        }
    }
    generateNoteTitle(topic) {
        try {
            const segments = topic.split('/').filter(segment => segment.trim() !== '');
            if (segments.length === 0) {
                return 'MQTT_Message';
            }
            if (segments.length === 1) {
                return segments[0] || 'MQTT_Message';
            }
            const title = segments
                .map(segment => this.capitalizeFirstLetter(segment))
                .join(' ');
            return title;
        }
        catch (error) {
            console.error('NoteCreator: Error generating note title:', error);
            return 'MQTT_Message';
        }
    }
    sanitizeFilename(filename) {
        try {
            return filename
                .replace(/[<>:"/\\|?*]/g, '_')
                .replace(/\s+/g, ' ')
                .replace(/\s/g, '_')
                .replace(/^[.\s]+|[.\s]+$/g, '')
                .substring(0, 100)
                || 'MQTT_Message';
        }
        catch (error) {
            console.error('NoteCreator: Error sanitizing filename:', error);
            return 'MQTT_Message';
        }
    }
    formatPayload(payload) {
        try {
            if (typeof payload === 'string') {
                return payload;
            }
            if (typeof payload === 'object' && payload !== null) {
                return '```json\n' + JSON.stringify(payload, null, 2) + '\n```';
            }
            return String(payload);
        }
        catch (error) {
            console.error('NoteCreator: Error formatting payload:', error);
            return String(payload);
        }
    }
    createNoteContent(message) {
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
        }
        catch (error) {
            console.error('NoteCreator: Error creating note content:', error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            return `# MQTT Message\n\nError creating note content: ${errorMessage}\n\nRaw message: ${JSON.stringify(message, null, 2)}`;
        }
    }
    createUpdateContent(message) {
        try {
            const timestamp = new Date(message.timestamp).toISOString();
            const formattedPayload = this.formatPayload(message.payload);
            return `## Update - ${new Date(message.timestamp).toLocaleString()}

**Topic:** \`${message.topic}\`
**Payload Type:** ${typeof message.payload}

${formattedPayload}`;
        }
        catch (error) {
            console.error('NoteCreator: Error creating update content:', error);
            return `## Update - ${new Date().toLocaleString()}\n\nError creating update content: ${error}`;
        }
    }
    async ensureFolderExists(folderPath) {
        try {
            const normalizedPath = (0, obsidian_1.normalizePath)(folderPath);
            const existingFolder = this.app.vault.getAbstractFileByPath(normalizedPath);
            if (existingFolder && existingFolder instanceof obsidian_1.TFolder) {
                console.log(`NoteCreator: Folder already exists: ${normalizedPath}`);
                return;
            }
            await this.app.vault.createFolder(normalizedPath);
            console.log(`NoteCreator: Created folder: ${normalizedPath}`);
        }
        catch (error) {
            if (error instanceof Error && error.message.includes('already exists')) {
                console.log(`NoteCreator: Folder already exists: ${folderPath}`);
                return;
            }
            console.error(`NoteCreator: Failed to ensure folder exists: ${folderPath}`, error);
            throw new Error(`Failed to create folder: ${folderPath}`);
        }
    }
    async findExistingNote(title, folder) {
        try {
            const sanitizedFilename = this.sanitizeFilename(title);
            const filePath = (0, obsidian_1.normalizePath)(`${folder}/${sanitizedFilename}.md`);
            const file = this.app.vault.getAbstractFileByPath(filePath);
            if (file && file instanceof obsidian_1.TFile) {
                console.log(`NoteCreator: Found existing note: ${file.path}`);
                return file;
            }
            return null;
        }
        catch (error) {
            console.error(`NoteCreator: Error finding existing note:`, error);
            return null;
        }
    }
    capitalizeFirstLetter(str) {
        if (!str || str.length === 0) {
            return str;
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
exports.NoteCreator = NoteCreator;
