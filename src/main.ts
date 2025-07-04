import { Plugin, TFile, Notice, MarkdownView } from 'obsidian';
import { MQTTNoteSettings, MQTTMessage } from './types';
import { DEFAULT_SETTINGS, MQTTNoteSettingTab } from './settings';
import { MQTTClient } from './mqttClient';
import { NotePublisher } from './notePublisher';
import { NoteCreator } from './noteCreator';

/**
 * Main plugin class that orchestrates all MQTT Note functionality
 * Handles plugin lifecycle, command registration, and component integration
 */
export default class MQTTNotePlugin extends Plugin {
    settings!: MQTTNoteSettings;
    mqttClient!: MQTTClient;
    notePublisher!: NotePublisher;
    noteCreator!: NoteCreator;
    private autoPublishDebounceMap: Map<string, NodeJS.Timeout> = new Map();

    /**
     * Plugin initialization - loads settings, initializes components, registers commands
     */
    override async onload() {
        console.log('MQTT Note Plugin: Starting initialization...');

        try {
            // Load settings
            await this.loadSettings();

            // Initialize MQTT client
            this.mqttClient = new MQTTClient();

            // Initialize note publisher
            this.notePublisher = new NotePublisher(this.mqttClient, this.settings, this.app);

            // Initialize note creator
            this.noteCreator = new NoteCreator(this.app);

            // Register commands
            this.registerCommands();

            // Add settings tab
            this.addSettingTab(new MQTTNoteSettingTab(this.app, this));

            // Set up event listeners
            this.setupEventListeners();

            console.log('MQTT Note Plugin: Initialization completed successfully');
            
            // Attempt to connect to MQTT broker if settings are configured
            if (this.settings.brokerUrl) {
                await this.connectMQTTClient();
            }

        } catch (error) {
            console.error('MQTT Note Plugin: Failed to initialize:', error);
            new Notice('MQTT Note Plugin: Failed to initialize. Check console for details.');
        }
    }

    /**
     * Plugin cleanup - disconnects MQTT client and cleans up resources
     */
    override onunload() {
        console.log('MQTT Note Plugin: Starting cleanup...');

        try {
            // Clear all debounce timers
            this.autoPublishDebounceMap.forEach((timeout) => {
                clearTimeout(timeout);
            });
            this.autoPublishDebounceMap.clear();

            // Disconnect MQTT client
            if (this.mqttClient) {
                this.mqttClient.disconnect();
            }

            console.log('MQTT Note Plugin: Cleanup completed');
        } catch (error) {
            console.error('MQTT Note Plugin: Error during cleanup:', error);
        }
    }

    /**
     * Loads plugin settings from Obsidian's data storage
     */
    async loadSettings() {
        try {
            const savedSettings = await this.loadData();
            this.settings = Object.assign({}, DEFAULT_SETTINGS, savedSettings);
            console.log('MQTT Note Plugin: Settings loaded successfully');
        } catch (error) {
            console.error('MQTT Note Plugin: Failed to load settings:', error);
            this.settings = DEFAULT_SETTINGS;
        }
    }

    /**
     * Saves plugin settings to Obsidian's data storage
     */
    async saveSettings() {
        try {
            await this.saveData(this.settings);
            
            // Update components with new settings
            if (this.notePublisher) {
                this.notePublisher.updateSettings(this.settings);
            }

            console.log('MQTT Note Plugin: Settings saved successfully');
        } catch (error) {
            console.error('MQTT Note Plugin: Failed to save settings:', error);
            throw error;
        }
    }

    /**
     * Registers all plugin commands with Obsidian
     */
    private registerCommands() {
        // Register manual publish command
        this.addCommand({
            id: 'publish-note-to-mqtt',
            name: 'Publish Note to MQTT',
            callback: () => this.publishCurrentNote(),
            hotkeys: []
        });

        // Register MQTT connection toggle command
        this.addCommand({
            id: 'toggle-mqtt-connection',
            name: 'Toggle MQTT Connection',
            callback: () => this.toggleMQTTConnection(),
            hotkeys: []
        });

        console.log('MQTT Note Plugin: Commands registered successfully');
    }

    /**
     * Sets up event listeners for plugin functionality
     */
    private setupEventListeners() {
        // Listen for MQTT client events
        if (this.mqttClient) {
            this.mqttClient.on('connected', () => {
                console.log('MQTT Note Plugin: MQTT client connected');
                new Notice('MQTT client connected successfully');
            });

            this.mqttClient.on('disconnected', () => {
                console.log('MQTT Note Plugin: MQTT client disconnected');
                new Notice('MQTT client disconnected');
            });

            this.mqttClient.on('error', (error: Error) => {
                console.error('MQTT Note Plugin: MQTT client error:', error);
                new Notice(`MQTT client error: ${error.message}`);
            });

            // Listen for incoming MQTT messages and route to NoteCreator
            this.mqttClient.on('message', (message: MQTTMessage) => {
                this.handleIncomingMessage(message);
            });
        }

        // Listen for file modification events for auto-publish
        this.registerEvent(
            this.app.vault.on('modify', (file) => {
                if (file instanceof TFile && file.extension === 'md') {
                    this.handleAutoPublishWithDebounce(file);
                }
            })
        );

        console.log('MQTT Note Plugin: Event listeners set up successfully');
    }

    /**
     * Attempts to connect to MQTT broker using current settings
     */
    private async connectMQTTClient() {
        try {
            if (!this.settings.brokerUrl) {
                console.log('MQTT Note Plugin: No broker URL configured, skipping connection');
                return;
            }

            console.log('MQTT Note Plugin: Attempting to connect to MQTT broker...');
            await this.mqttClient.connect(this.settings);
            console.log('MQTT Note Plugin: MQTT client connected successfully');

            // Set up subscription for incoming messages if topic is configured
            if (this.settings.incomingTopic) {
                await this.setupIncomingMessageSubscription();
            }
        } catch (error) {
            console.error('MQTT Note Plugin: Failed to connect to MQTT broker:', error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            new Notice(`Failed to connect to MQTT broker: ${errorMessage}`);
        }
    }

    /**
     * Toggles MQTT connection on/off
     */
    private async toggleMQTTConnection() {
        try {
            if (this.mqttClient.isConnected()) {
                await this.mqttClient.disconnect();
                new Notice('MQTT client disconnected');
            } else {
                if (!this.settings.brokerUrl) {
                    new Notice('Please configure MQTT settings first');
                    return;
                }
                await this.mqttClient.connect(this.settings);
                
                // Set up subscription for incoming messages if topic is configured
                if (this.settings.incomingTopic) {
                    await this.setupIncomingMessageSubscription();
                }
                
                new Notice('MQTT client connected');
            }
        } catch (error) {
            console.error('MQTT Note Plugin: Failed to toggle MQTT connection:', error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            new Notice(`Failed to toggle MQTT connection: ${errorMessage}`);
        }
    }

    /**
     * Publishes the currently active note to MQTT
     * Main command handler for manual publishing
     */
    private async publishCurrentNote() {
        try {
            console.log('MQTT Note Plugin: Manual publish command triggered');

            // Get the currently active file
            const activeFile = this.getCurrentFile();
            if (!activeFile) {
                new Notice('No active note to publish');
                return;
            }

            // Validate settings
            if (!this.validateSettings()) {
                return;
            }

            // Check MQTT connection
            if (!this.mqttClient.isConnected()) {
                new Notice('MQTT client not connected. Please check your settings and connection.');
                return;
            }

            // Check if note should be published
            if (!this.notePublisher.shouldPublishNote(activeFile)) {
                new Notice('Note not published: mqtt property not set to true in frontmatter');
                return;
            }

            // Show progress indication
            const progressNotice = new Notice('Publishing note to MQTT...', 0);

            try {
                // Publish the note
                await this.notePublisher.publishNote(activeFile);

                // Generate topic for success message
                const topic = this.notePublisher.generateTopic(activeFile);
                
                // Show success notification
                progressNotice.hide();
                new Notice(`Note published successfully to topic: ${topic}`);

                console.log(`MQTT Note Plugin: Successfully published note ${activeFile.name} to topic ${topic}`);

            } catch (publishError) {
                progressNotice.hide();
                throw publishError;
            }

        } catch (error) {
            console.error('MQTT Note Plugin: Failed to publish note:', error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            new Notice(`Failed to publish note: ${errorMessage}`);
        }
    }

    /**
     * Gets the currently active file from Obsidian
     * Handles various edge cases for file detection
     */
    private getCurrentFile(): TFile | null {
        try {
            // Try to get active file from workspace
            const activeFile = this.app.workspace.getActiveFile();
            if (activeFile) {
                console.log(`MQTT Note Plugin: Active file detected: ${activeFile.name}`);
                return activeFile;
            }

            // Try to get file from active markdown view
            const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
            if (activeView && activeView.file) {
                console.log(`MQTT Note Plugin: Active file from view: ${activeView.file.name}`);
                return activeView.file;
            }

            console.log('MQTT Note Plugin: No active file found');
            return null;

        } catch (error) {
            console.error('MQTT Note Plugin: Error getting current file:', error);
            return null;
        }
    }

    /**
     * Validates that required settings are configured
     */
    private validateSettings(): boolean {
        try {
            if (!this.settings.brokerUrl) {
                new Notice('Please configure MQTT broker URL in settings first');
                return false;
            }

            if (!this.settings.outgoingPrefix) {
                new Notice('Please configure outgoing prefix in settings first');
                return false;
            }

            return true;

        } catch (error) {
            console.error('MQTT Note Plugin: Error validating settings:', error);
            new Notice('Error validating settings. Please check plugin configuration.');
            return false;
        }
    }

    /**
     * Handles automatic publishing when notes are saved (if enabled)
     */
    private async handleAutoPublish(file: TFile) {
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

        } catch (error) {
            console.error('MQTT Note Plugin: Auto-publish failed:', error);
            // Don't show user notification for auto-publish failures to avoid spam
        }
    }

    /**
     * Handles auto-publish with debouncing to prevent spam on rapid file modifications
     * @param file The file that was modified
     */
    private handleAutoPublishWithDebounce(file: TFile) {
        const debounceKey = file.path;
        const debounceDelay = 1000; // 1 second debounce

        // Clear existing timeout for this file
        const existingTimeout = this.autoPublishDebounceMap.get(debounceKey);
        if (existingTimeout) {
            clearTimeout(existingTimeout);
        }

        // Set new timeout for auto-publish
        const newTimeout = setTimeout(() => {
            this.handleAutoPublish(file);
            this.autoPublishDebounceMap.delete(debounceKey);
        }, debounceDelay);

        this.autoPublishDebounceMap.set(debounceKey, newTimeout);
    }

    /**
     * Sets up subscription for incoming MQTT messages
     */
    private async setupIncomingMessageSubscription() {
        try {
            if (!this.settings.incomingTopic) {
                console.log('MQTT Note Plugin: No incoming topic configured, skipping subscription');
                return;
            }

            console.log(`MQTT Note Plugin: Setting up subscription for topic: ${this.settings.incomingTopic}`);
            
            // Subscribe to the incoming topic pattern
            await this.mqttClient.subscribe(this.settings.incomingTopic, (message: MQTTMessage) => {
                // The message handler is already set up in setupEventListeners
                console.log(`MQTT Note Plugin: Received message from subscribed topic: ${message.topic}`);
            });

            console.log(`MQTT Note Plugin: Successfully subscribed to topic: ${this.settings.incomingTopic}`);
        } catch (error) {
            console.error('MQTT Note Plugin: Failed to set up incoming message subscription:', error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            new Notice(`Failed to subscribe to incoming messages: ${errorMessage}`);
        }
    }

    /**
     * Handles incoming MQTT messages by routing them to the NoteCreator
     */
    private async handleIncomingMessage(message: MQTTMessage) {
        try {
            console.log(`MQTT Note Plugin: Handling incoming message from topic: ${message.topic}`);
            
            // Check if incoming note folder is configured
            if (!this.settings.incomingNoteFolder) {
                console.log('MQTT Note Plugin: No incoming note folder configured, skipping message');
                return;
            }

            // Route message to NoteCreator
            await this.noteCreator.handleIncomingMessage(message, this.settings);
            
            console.log(`MQTT Note Plugin: Successfully processed incoming message from topic: ${message.topic}`);
        } catch (error) {
            console.error('MQTT Note Plugin: Failed to handle incoming message:', error);
            // Error is already logged and shown by NoteCreator, no need to show another notice
        }
    }
}