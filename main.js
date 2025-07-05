"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
const settings_1 = require("./settings");
const mqttClient_1 = require("./mqttClient");
const notePublisher_1 = require("./notePublisher");
const noteCreator_1 = require("./noteCreator");
class MQTTNotePlugin extends obsidian_1.Plugin {
    constructor() {
        super(...arguments);
        this.autoPublishDebounceMap = new Map();
        this.messageCount = 0;
    }
    async onload() {
        console.log('MQTT Note Plugin: Starting initialization...');
        try {
            await this.loadSettings();
            this.mqttClient = new mqttClient_1.MQTTClient();
            this.notePublisher = new notePublisher_1.NotePublisher(this.mqttClient, this.settings, this.app);
            this.noteCreator = new noteCreator_1.NoteCreator(this.app);
            this.registerCommands();
            this.addSettingTab(new settings_1.MQTTNoteSettingTab(this.app, this));
            this.setupEventListeners();
            console.log('MQTT Note Plugin: Initialization completed successfully');
            if (this.settings.brokerUrl) {
                await this.connectMQTTClient();
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
            // Clear all debounced auto-publish timeouts
            this.autoPublishDebounceMap.forEach((timeout) => {
                clearTimeout(timeout);
            });
            this.autoPublishDebounceMap.clear();
            
            // Cleanup MQTT client and subscriptions
            if (this.mqttClient) {
                // Disconnect will also unsubscribe from all topics
                this.mqttClient.disconnect();
                this.mqttClient = null;
            }
            
            // Reset message count
            this.messageCount = 0;
            
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
            
            // Update note publisher settings
            if (this.notePublisher) {
                this.notePublisher.updateSettings(this.settings);
            }
            
            // Re-establish MQTT subscription if connection exists and settings changed
            if (this.mqttClient && this.mqttClient.isConnected()) {
                try {
                    // Re-subscribe to handle topic changes
                    if (this.settings.incomingTopic) {
                        await this.setupIncomingMessageSubscription();
                    }
                }
                catch (error) {
                    console.error('MQTT Note Plugin: Failed to update subscription after settings change:', error);
                }
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
            this.mqttClient.on('connected', async () => {
                console.log('MQTT Note Plugin: MQTT client connected');
                new obsidian_1.Notice('MQTT client connected successfully');
                
                // Re-establish subscription after connection
                if (this.settings.incomingTopic) {
                    try {
                        await this.setupIncomingMessageSubscription();
                    }
                    catch (error) {
                        console.error('MQTT Note Plugin: Failed to re-establish subscription after connection:', error);
                    }
                }
            });
            
            this.mqttClient.on('disconnected', () => {
                console.log('MQTT Note Plugin: MQTT client disconnected');
                new obsidian_1.Notice('MQTT client disconnected');
                
                // Reset message count when disconnected
                this.messageCount = 0;
            });
            
            this.mqttClient.on('error', (error) => {
                console.error('MQTT Note Plugin: MQTT client error:', error);
                new obsidian_1.Notice(`MQTT client error: ${error.message}`);
                
                // Reset message count on error
                this.messageCount = 0;
            });
            
            this.mqttClient.on('message', (message) => {
                // Handle incoming message asynchronously to prevent blocking
                this.handleIncomingMessage(message).catch(error => {
                    console.error('MQTT Note Plugin: Unhandled error in message processing:', error);
                });
            });
        }
        
        this.registerEvent(this.app.vault.on('modify', (file) => {
            if (file instanceof obsidian_1.TFile && file.extension === 'md') {
                this.handleAutoPublishWithDebounce(file);
            }
        }));
        
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
            if (this.settings.incomingTopic) {
                await this.setupIncomingMessageSubscription();
            }
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
                if (this.settings.incomingTopic) {
                    await this.setupIncomingMessageSubscription();
                }
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
    handleAutoPublishWithDebounce(file) {
        const debounceKey = file.path;
        const debounceDelay = 1000;
        const existingTimeout = this.autoPublishDebounceMap.get(debounceKey);
        if (existingTimeout) {
            clearTimeout(existingTimeout);
        }
        const newTimeout = setTimeout(() => {
            this.handleAutoPublish(file);
            this.autoPublishDebounceMap.delete(debounceKey);
        }, debounceDelay);
        this.autoPublishDebounceMap.set(debounceKey, newTimeout);
    }
    async setupIncomingMessageSubscription() {
        try {
            if (!this.settings.incomingTopic) {
                console.log('MQTT Note Plugin: No incoming topic configured, skipping subscription');
                return;
            }

            // Validate incoming folder configuration
            if (!this.settings.incomingNoteFolder) {
                console.warn('MQTT Note Plugin: No incoming note folder configured, messages will be ignored');
                new obsidian_1.Notice('Warning: Incoming note folder not configured. Messages will be ignored.');
                return;
            }

            console.log(`MQTT Note Plugin: Setting up subscription for topic: ${this.settings.incomingTopic}`);
            console.log(`MQTT Note Plugin: Incoming notes will be created in folder: ${this.settings.incomingNoteFolder}`);
            
            await this.mqttClient.subscribe(this.settings.incomingTopic, (message) => {
                console.log(`MQTT Note Plugin: Received message from subscribed topic: ${message.topic}`);
                // The message is already handled by the 'message' event listener in setupEventListeners()
                // This callback is kept for backward compatibility and debugging
            });
            
            console.log(`MQTT Note Plugin: Successfully subscribed to topic: ${this.settings.incomingTopic}`);
            new obsidian_1.Notice(`Successfully subscribed to MQTT topic: ${this.settings.incomingTopic}`);
        }
        catch (error) {
            console.error('MQTT Note Plugin: Failed to set up incoming message subscription:', error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            new obsidian_1.Notice(`Failed to subscribe to incoming messages: ${errorMessage}`);
            
            // Log additional debugging information
            console.error('MQTT Note Plugin: Subscription error details:', {
                topic: this.settings.incomingTopic,
                brokerUrl: this.settings.brokerUrl,
                connected: this.mqttClient?.isConnected(),
                error: errorMessage
            });
            
            throw error; // Re-throw to ensure proper error handling upstream
        }
    }
    async handleIncomingMessage(message) {
        const startTime = Date.now();
        const messageId = `${message.topic}#${message.timestamp}`;
        
        try {
            console.log(`MQTT Note Plugin: Handling incoming message from topic: ${message.topic}`, {
                messageId,
                topic: message.topic,
                payloadType: typeof message.payload,
                payloadSize: JSON.stringify(message.payload).length,
                timestamp: message.timestamp
            });

            // Validate message structure
            if (!message.topic || message.topic.trim() === '') {
                throw new Error('Invalid message: topic is missing or empty');
            }

            if (message.payload === undefined || message.payload === null) {
                console.warn(`MQTT Note Plugin: Message ${messageId} has null/undefined payload, creating note anyway`);
            }

            // Validate settings
            if (!this.settings.incomingNoteFolder) {
                console.warn(`MQTT Note Plugin: No incoming note folder configured, skipping message ${messageId}`);
                return;
            }

            // Check if the message topic matches our subscription
            if (this.settings.incomingTopic && !this.topicMatchesSubscription(message.topic, this.settings.incomingTopic)) {
                console.log(`MQTT Note Plugin: Message topic ${message.topic} does not match subscription ${this.settings.incomingTopic}, skipping`);
                return;
            }

            // Route message to note creator
            await this.noteCreator.handleIncomingMessage(message, this.settings);
            
            const duration = Date.now() - startTime;
            console.log(`MQTT Note Plugin: Successfully processed incoming message ${messageId} (took ${duration}ms)`);
            
            // Show success notification for first few messages to confirm it's working
            if (this.messageCount < 3) {
                new obsidian_1.Notice(`Created note from MQTT message: ${message.topic}`);
                this.messageCount = (this.messageCount || 0) + 1;
            }
        }
        catch (error) {
            const duration = Date.now() - startTime;
            console.error(`MQTT Note Plugin: Failed to handle incoming message ${messageId} after ${duration}ms:`, error);
            
            // Log detailed error information
            console.error('MQTT Note Plugin: Message processing error details:', {
                messageId,
                topic: message?.topic,
                payloadType: typeof message?.payload,
                settings: {
                    incomingTopic: this.settings?.incomingTopic,
                    incomingNoteFolder: this.settings?.incomingNoteFolder
                },
                error: error instanceof Error ? error.message : String(error),
                stack: error instanceof Error ? error.stack : undefined
            });
            
            // Show user-friendly error notification
            const errorMessage = error instanceof Error ? error.message : String(error);
            new obsidian_1.Notice(`Failed to create note from MQTT message: ${errorMessage}`, 5000);
            
            // Don't re-throw the error to prevent stopping the entire plugin
            // Just log it and continue processing other messages
        }
    }
    
    topicMatchesSubscription(messageTopic, subscriptionTopic) {
        // Use the same topic matching logic as the MQTT client
        if (this.mqttClient) {
            return this.mqttClient.topicMatches(messageTopic, subscriptionTopic);
        }
        
        // Fallback simple matching if MQTT client is not available
        return messageTopic === subscriptionTopic;
    }
}
exports.default = MQTTNotePlugin;
