import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { MQTTNoteSettings } from './types';

export const DEFAULT_SETTINGS: MQTTNoteSettings = {
    brokerUrl: '',
    username: '',
    password: '',
    automaticPublishOnSave: false,
    outgoingPrefix: 'obsidian/',
    incomingTopic: 'homeassistant/#',
    incomingNoteFolder: 'MQTT-Inbox/'
};

export class MQTTNoteSettingTab extends PluginSettingTab {
    plugin: Plugin;

    constructor(app: App, plugin: Plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;

        containerEl.empty();

        this.addMQTTConnectionSettings();
        this.addPublishingModeSettings();
        this.addTopicConfigurationSettings();
        this.addFileManagementSettings();
    }

    private addMQTTConnectionSettings(): void {
        const { containerEl } = this;

        containerEl.createEl('h2', { text: 'MQTT Broker Connection' });

        new Setting(containerEl)
            .setName('Broker URL')
            .setDesc('MQTT broker connection URL (e.g., mqtt://192.168.1.100:1883)')
            .addText(text => text
                .setPlaceholder('mqtt://192.168.1.100:1883')
                .setValue((this.plugin as any).settings.brokerUrl)
                .onChange(async (value) => {
                    if (this.validateBrokerUrl(value)) {
                        (this.plugin as any).settings.brokerUrl = value;
                        await (this.plugin as any).saveSettings();
                    }
                }));

        new Setting(containerEl)
            .setName('Username')
            .setDesc('Leave empty if no authentication required')
            .addText(text => text
                .setPlaceholder('Leave empty if no authentication required')
                .setValue((this.plugin as any).settings.username)
                .onChange(async (value) => {
                    (this.plugin as any).settings.username = value;
                    await (this.plugin as any).saveSettings();
                }));

        new Setting(containerEl)
            .setName('Password')
            .setDesc('Leave empty if no authentication required')
            .addText(text => {
                text.inputEl.type = 'password';
                text
                    .setPlaceholder('Leave empty if no authentication required')
                    .setValue((this.plugin as any).settings.password)
                    .onChange(async (value) => {
                        (this.plugin as any).settings.password = value;
                        await (this.plugin as any).saveSettings();
                    });
            });
    }

    private addPublishingModeSettings(): void {
        const { containerEl } = this;

        containerEl.createEl('h2', { text: 'Publishing Mode' });

        new Setting(containerEl)
            .setName('Automatic publishing on save')
            .setDesc('Automatically publish notes when saved')
            .addToggle(toggle => toggle
                .setValue((this.plugin as any).settings.automaticPublishOnSave)
                .onChange(async (value) => {
                    (this.plugin as any).settings.automaticPublishOnSave = value;
                    await (this.plugin as any).saveSettings();
                }));
    }

    private addTopicConfigurationSettings(): void {
        const { containerEl } = this;

        containerEl.createEl('h2', { text: 'Topic Configuration' });

        new Setting(containerEl)
            .setName('Outgoing Prefix')
            .setDesc('Prefix for outgoing topic names')
            .addText(text => text
                .setPlaceholder('obsidian/')
                .setValue((this.plugin as any).settings.outgoingPrefix)
                .onChange(async (value) => {
                    if (this.validateOutgoingPrefix(value)) {
                        (this.plugin as any).settings.outgoingPrefix = value;
                        await (this.plugin as any).saveSettings();
                    }
                }));

        new Setting(containerEl)
            .setName('Incoming Topic')
            .setDesc('Topic pattern to subscribe to')
            .addText(text => text
                .setPlaceholder('homeassistant/#')
                .setValue((this.plugin as any).settings.incomingTopic)
                .onChange(async (value) => {
                    if (this.validateIncomingTopic(value)) {
                        (this.plugin as any).settings.incomingTopic = value;
                        await (this.plugin as any).saveSettings();
                    }
                }));
    }

    private addFileManagementSettings(): void {
        const { containerEl } = this;

        containerEl.createEl('h2', { text: 'File Management' });

        new Setting(containerEl)
            .setName('Incoming Note Folder')
            .setDesc('Folder for incoming MQTT notes')
            .addText(text => text
                .setPlaceholder('MQTT-Inbox/')
                .setValue((this.plugin as any).settings.incomingNoteFolder)
                .onChange(async (value) => {
                    if (this.validateNoteFolder(value)) {
                        (this.plugin as any).settings.incomingNoteFolder = value;
                        await (this.plugin as any).saveSettings();
                    }
                }));
    }

    private validateBrokerUrl(url: string): boolean {
        if (!url.trim()) {
            return true; // Allow empty for now, will be validated when connecting
        }
        
        try {
            const parsed = new URL(url);
            return parsed.protocol === 'mqtt:' || parsed.protocol === 'mqtts:' || 
                   parsed.protocol === 'ws:' || parsed.protocol === 'wss:';
        } catch {
            return false;
        }
    }

    private validateOutgoingPrefix(prefix: string): boolean {
        return prefix.trim().length > 0;
    }

    private validateIncomingTopic(topic: string): boolean {
        return topic.trim().length > 0;
    }

    private validateNoteFolder(folder: string): boolean {
        if (!folder.trim()) {
            return false;
        }
        
        // Basic folder path validation - no invalid characters
        const invalidChars = /[<>:"|?*]/;
        return !invalidChars.test(folder);
    }
}