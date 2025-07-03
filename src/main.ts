// Placeholder main.ts file for initial build test
import { Plugin } from 'obsidian';

export default class MQTTNotePlugin extends Plugin {
    override async onload() {
        console.log('MQTT Note Plugin loaded');
    }

    override onunload() {
        console.log('MQTT Note Plugin unloaded');
    }
}