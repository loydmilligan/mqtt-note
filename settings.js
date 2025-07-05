"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MQTTNoteSettingTab = exports.DEFAULT_SETTINGS = void 0;
const obsidian_1 = require("obsidian");
exports.DEFAULT_SETTINGS = {
    brokerUrl: '',
    username: '',
    password: '',
    automaticPublishOnSave: false,
    outgoingPrefix: 'obsidian/',
    incomingTopic: 'homeassistant/#',
    incomingNoteFolder: 'MQTT-Inbox/'
};
class MQTTNoteSettingTab extends obsidian_1.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        const { containerEl } = this;
        containerEl.empty();
        this.addMQTTConnectionSettings();
        this.addPublishingModeSettings();
        this.addTopicConfigurationSettings();
        this.addFileManagementSettings();
    }
    addMQTTConnectionSettings() {
        const { containerEl } = this;
        containerEl.createEl('h2', { text: 'MQTT Broker Connection' });
        new obsidian_1.Setting(containerEl)
            .setName('Broker URL')
            .setDesc('MQTT broker connection URL (e.g., mqtt://192.168.1.100:1883)')
            .addText(text => text
            .setPlaceholder('mqtt://192.168.1.100:1883')
            .setValue(this.plugin.settings.brokerUrl)
            .onChange(async (value) => {
            if (this.validateBrokerUrl(value)) {
                this.plugin.settings.brokerUrl = value;
                await this.plugin.saveSettings();
            }
        }));
        new obsidian_1.Setting(containerEl)
            .setName('Username')
            .setDesc('Leave empty if no authentication required')
            .addText(text => text
            .setPlaceholder('Leave empty if no authentication required')
            .setValue(this.plugin.settings.username)
            .onChange(async (value) => {
            this.plugin.settings.username = value;
            await this.plugin.saveSettings();
        }));
        new obsidian_1.Setting(containerEl)
            .setName('Password')
            .setDesc('Leave empty if no authentication required')
            .addText(text => {
            text.inputEl.type = 'password';
            text
                .setPlaceholder('Leave empty if no authentication required')
                .setValue(this.plugin.settings.password)
                .onChange(async (value) => {
                this.plugin.settings.password = value;
                await this.plugin.saveSettings();
            });
        });
    }
    addPublishingModeSettings() {
        const { containerEl } = this;
        containerEl.createEl('h2', { text: 'Publishing Mode' });
        new obsidian_1.Setting(containerEl)
            .setName('Automatic publishing on save')
            .setDesc('Automatically publish notes when saved')
            .addToggle(toggle => toggle
            .setValue(this.plugin.settings.automaticPublishOnSave)
            .onChange(async (value) => {
            this.plugin.settings.automaticPublishOnSave = value;
            await this.plugin.saveSettings();
        }));
    }
    addTopicConfigurationSettings() {
        const { containerEl } = this;
        containerEl.createEl('h2', { text: 'Topic Configuration' });
        new obsidian_1.Setting(containerEl)
            .setName('Outgoing Prefix')
            .setDesc('Prefix for outgoing topic names')
            .addText(text => text
            .setPlaceholder('obsidian/')
            .setValue(this.plugin.settings.outgoingPrefix)
            .onChange(async (value) => {
            if (this.validateOutgoingPrefix(value)) {
                this.plugin.settings.outgoingPrefix = value;
                await this.plugin.saveSettings();
            }
        }));
        new obsidian_1.Setting(containerEl)
            .setName('Incoming Topic')
            .setDesc('Topic pattern to subscribe to')
            .addText(text => text
            .setPlaceholder('homeassistant/#')
            .setValue(this.plugin.settings.incomingTopic)
            .onChange(async (value) => {
            if (this.validateIncomingTopic(value)) {
                this.plugin.settings.incomingTopic = value;
                await this.plugin.saveSettings();
            }
        }));
    }
    addFileManagementSettings() {
        const { containerEl } = this;
        containerEl.createEl('h2', { text: 'File Management' });
        new obsidian_1.Setting(containerEl)
            .setName('Incoming Note Folder')
            .setDesc('Folder for incoming MQTT notes')
            .addText(text => text
            .setPlaceholder('MQTT-Inbox/')
            .setValue(this.plugin.settings.incomingNoteFolder)
            .onChange(async (value) => {
            if (this.validateNoteFolder(value)) {
                this.plugin.settings.incomingNoteFolder = value;
                await this.plugin.saveSettings();
            }
        }));
    }
    validateBrokerUrl(url) {
        if (!url.trim()) {
            return true;
        }
        try {
            const parsed = new URL(url);
            return parsed.protocol === 'mqtt:' || parsed.protocol === 'mqtts:' ||
                parsed.protocol === 'ws:' || parsed.protocol === 'wss:';
        }
        catch {
            return false;
        }
    }
    validateOutgoingPrefix(prefix) {
        return prefix.trim().length > 0;
    }
    validateIncomingTopic(topic) {
        return topic.trim().length > 0;
    }
    validateNoteFolder(folder) {
        if (!folder.trim()) {
            return false;
        }
        const invalidChars = /[<>:"|?*]/;
        return !invalidChars.test(folder);
    }
}
exports.MQTTNoteSettingTab = MQTTNoteSettingTab;
