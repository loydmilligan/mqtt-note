"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
const settings_1 = require("./settings");
const mqttClient_1 = require("./mqttClient");
const notePublisher_1 = require("./notePublisher");
class MQTTNotePlugin extends obsidian_1.Plugin {
    async onload() {
        console.log('MQTT Note Plugin: Starting initialization...');
        try {
            await this.loadSettings();
            this.mqttClient = new mqttClient_1.MQTTClient();
            this.notePublisher = new notePublisher_1.NotePublisher(this.mqttClient, this.settings, this.app);
            this.registerCommands();
            this.addSettingTab(new settings_1.MQTTNoteSettingTab(this.app, this));
            this.setupEventListeners();
            console.log('MQTT Note Plugin: Initialization completed successfully');
            if (this.settings.brokerUrl) {
                this.connectMQTTClient();
            }
        }
        catch (error) {
            console.error('MQTT Note Plugin: Failed to initialize:', error);
            new obsidian_1.Notice('MQTT Note Plugin: Failed to initialize. Check console for details.');
        }
    }
    onunload() {
        console.log('MQTT Note Plugin: Starting cleanup...');
        try {
            if (this.mqttClient) {
                this.mqttClient.disconnect();
            }
            console.log('MQTT Note Plugin: Cleanup completed');
        }
        catch (error) {
            console.error('MQTT Note Plugin: Error during cleanup:', error);
        }
    }
    async loadSettings() {
        try {
            const savedSettings = await this.loadData();
            this.settings = Object.assign({}, settings_1.DEFAULT_SETTINGS, savedSettings);
            console.log('MQTT Note Plugin: Settings loaded successfully');
        }
        catch (error) {
            console.error('MQTT Note Plugin: Failed to load settings:', error);
            this.settings = settings_1.DEFAULT_SETTINGS;
        }
    }
    async saveSettings() {
        try {
            await this.saveData(this.settings);
            if (this.notePublisher) {
                this.notePublisher.updateSettings(this.settings);
            }
            console.log('MQTT Note Plugin: Settings saved successfully');
        }
        catch (error) {
            console.error('MQTT Note Plugin: Failed to save settings:', error);
            throw error;
        }
    }
    registerCommands() {
        this.addCommand({
            id: 'publish-note-to-mqtt',
            name: 'Publish Note to MQTT',
            callback: () => this.publishCurrentNote(),
            hotkeys: []
        });
        this.addCommand({
            id: 'toggle-mqtt-connection',
            name: 'Toggle MQTT Connection',
            callback: () => this.toggleMQTTConnection(),
            hotkeys: []
        });
        console.log('MQTT Note Plugin: Commands registered successfully');
    }
    setupEventListeners() {
        if (this.mqttClient) {
            this.mqttClient.on('connected', () => {
                console.log('MQTT Note Plugin: MQTT client connected');
                new obsidian_1.Notice('MQTT client connected successfully');
            });
            this.mqttClient.on('disconnected', () => {
                console.log('MQTT Note Plugin: MQTT client disconnected');
                new obsidian_1.Notice('MQTT client disconnected');
            });
            this.mqttClient.on('error', (error) => {
                console.error('MQTT Note Plugin: MQTT client error:', error);
                new obsidian_1.Notice(`MQTT client error: ${error.message}`);
            });
        }
        console.log('MQTT Note Plugin: Event listeners set up successfully');
    }
    async connectMQTTClient() {
        try {
            if (!this.settings.brokerUrl) {
                console.log('MQTT Note Plugin: No broker URL configured, skipping connection');
                return;
            }
            console.log('MQTT Note Plugin: Attempting to connect to MQTT broker...');
            await this.mqttClient.connect(this.settings);
            console.log('MQTT Note Plugin: MQTT client connected successfully');
        }
        catch (error) {
            console.error('MQTT Note Plugin: Failed to connect to MQTT broker:', error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            new obsidian_1.Notice(`Failed to connect to MQTT broker: ${errorMessage}`);
        }
    }
    async toggleMQTTConnection() {
        try {
            if (this.mqttClient.isConnected()) {
                await this.mqttClient.disconnect();
                new obsidian_1.Notice('MQTT client disconnected');
            }
            else {
                if (!this.settings.brokerUrl) {
                    new obsidian_1.Notice('Please configure MQTT settings first');
                    return;
                }
                await this.mqttClient.connect(this.settings);
                new obsidian_1.Notice('MQTT client connected');
            }
        }
        catch (error) {
            console.error('MQTT Note Plugin: Failed to toggle MQTT connection:', error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            new obsidian_1.Notice(`Failed to toggle MQTT connection: ${errorMessage}`);
        }
    }
    async publishCurrentNote() {
        try {
            console.log('MQTT Note Plugin: Manual publish command triggered');
            const activeFile = this.getCurrentFile();
            if (!activeFile) {
                new obsidian_1.Notice('No active note to publish');
                return;
            }
            if (!this.validateSettings()) {
                return;
            }
            if (!this.mqttClient.isConnected()) {
                new obsidian_1.Notice('MQTT client not connected. Please check your settings and connection.');
                return;
            }
            if (!this.notePublisher.shouldPublishNote(activeFile)) {
                new obsidian_1.Notice('Note not published: mqtt property not set to true in frontmatter');
                return;
            }
            const progressNotice = new obsidian_1.Notice('Publishing note to MQTT...', 0);
            try {
                await this.notePublisher.publishNote(activeFile);
                const topic = this.notePublisher.generateTopic(activeFile);
                progressNotice.hide();
                new obsidian_1.Notice(`Note published successfully to topic: ${topic}`);
                console.log(`MQTT Note Plugin: Successfully published note ${activeFile.name} to topic ${topic}`);
            }
            catch (publishError) {
                progressNotice.hide();
                throw publishError;
            }
        }
        catch (error) {
            console.error('MQTT Note Plugin: Failed to publish note:', error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            new obsidian_1.Notice(`Failed to publish note: ${errorMessage}`);
        }
    }
    getCurrentFile() {
        try {
            const activeFile = this.app.workspace.getActiveFile();
            if (activeFile) {
                console.log(`MQTT Note Plugin: Active file detected: ${activeFile.name}`);
                return activeFile;
            }
            const activeView = this.app.workspace.getActiveViewOfType(obsidian_1.MarkdownView);
            if (activeView && activeView.file) {
                console.log(`MQTT Note Plugin: Active file from view: ${activeView.file.name}`);
                return activeView.file;
            }
            console.log('MQTT Note Plugin: No active file found');
            return null;
        }
        catch (error) {
            console.error('MQTT Note Plugin: Error getting current file:', error);
            return null;
        }
    }
    validateSettings() {
        try {
            if (!this.settings.brokerUrl) {
                new obsidian_1.Notice('Please configure MQTT broker URL in settings first');
                return false;
            }
            if (!this.settings.outgoingPrefix) {
                new obsidian_1.Notice('Please configure outgoing prefix in settings first');
                return false;
            }
            return true;
        }
        catch (error) {
            console.error('MQTT Note Plugin: Error validating settings:', error);
            new obsidian_1.Notice('Error validating settings. Please check plugin configuration.');
            return false;
        }
    }
    async handleAutoPublish(file) {
        try {
            if (!this.settings.automaticPublishOnSave) {
                return;
            }
            if (!this.mqttClient.isConnected()) {
                console.log('MQTT Note Plugin: Auto-publish skipped - MQTT client not connected');
                return;
            }
            if (!this.notePublisher.shouldPublishNote(file)) {
                console.log(`MQTT Note Plugin: Auto-publish skipped - note ${file.name} does not meet criteria`);
                return;
            }
            console.log(`MQTT Note Plugin: Auto-publishing note ${file.name}`);
            await this.notePublisher.publishNote(file);
            const topic = this.notePublisher.generateTopic(file);
            console.log(`MQTT Note Plugin: Auto-published note ${file.name} to topic ${topic}`);
        }
        catch (error) {
            console.error('MQTT Note Plugin: Auto-publish failed:', error);
        }
    }
}
exports.default = MQTTNotePlugin;
