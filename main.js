"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
class MQTTNotePlugin extends obsidian_1.Plugin {
    async onload() {
        console.log('MQTT Note Plugin loaded');
    }
    onunload() {
        console.log('MQTT Note Plugin unloaded');
    }
}
exports.default = MQTTNotePlugin;
