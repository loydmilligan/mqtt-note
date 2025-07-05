"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MQTTClient = void 0;
const mqtt_1 = require("mqtt");
const events_1 = require("events");
class MQTTClient extends events_1.EventEmitter {
    constructor() {
        super();
        this.client = null;
        this.settings = null;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.reconnectDelay = 1000;
    }
    async connect(settings) {
        if (this.isConnected()) {
            return;
        }
        this.settings = settings;
        if (!settings.brokerUrl) {
            throw new Error('Broker URL is required');
        }
        const options = {
            clean: true,
            connectTimeout: 30000,
            reconnectPeriod: 0,
        };
        if (settings.username) {
            options.username = settings.username;
        }
        if (settings.password) {
            options.password = settings.password;
        }
        return new Promise((resolve, reject) => {
            try {
                this.client = (0, mqtt_1.connect)(settings.brokerUrl, options);
                this.client.on('connect', () => {
                    console.log('MQTT Client connected to broker');
                    this.reconnectAttempts = 0;
                    this.reconnectDelay = 1000;
                    this.emit('connected');
                    resolve();
                });
                this.client.on('error', (error) => {
                    console.error('MQTT Client error:', error);
                    this.emit('error', error);
                    reject(error);
                });
                this.client.on('close', () => {
                    console.log('MQTT Client disconnected');
                    this.emit('disconnected');
                    this.scheduleReconnect();
                });
                this.client.on('message', (topic, payload) => {
                    try {
                        const message = {
                            topic,
                            payload: this.parsePayload(payload),
                            timestamp: Date.now()
                        };
                        this.emit('message', message);
                    }
                    catch (error) {
                        console.error('Error processing MQTT message:', error);
                        this.emit('error', error);
                    }
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    async disconnect() {
        if (!this.client) {
            return;
        }
        return new Promise((resolve) => {
            if (this.client) {
                this.client.end(false, {}, () => {
                    console.log('MQTT Client disconnected gracefully');
                    this.client = null;
                    this.settings = null;
                    this.reconnectAttempts = 0;
                    resolve();
                });
            }
            else {
                resolve();
            }
        });
    }
    isConnected() {
        return this.client !== null && this.client.connected;
    }
    async publish(topic, payload) {
        if (!this.isConnected()) {
            throw new Error('MQTT client is not connected');
        }
        const message = typeof payload === 'string' ? payload : JSON.stringify(payload);
        return new Promise((resolve, reject) => {
            this.client.publish(topic, message, { qos: 0 }, (error) => {
                if (error) {
                    console.error('Error publishing MQTT message:', error);
                    reject(error);
                }
                else {
                    console.log(`Published message to topic: ${topic}`);
                    resolve();
                }
            });
        });
    }
    async subscribe(topic, callback) {
        if (!this.isConnected()) {
            throw new Error('MQTT client is not connected');
        }
        return new Promise((resolve, reject) => {
            this.client.subscribe(topic, { qos: 0 }, (error) => {
                if (error) {
                    console.error('Error subscribing to MQTT topic:', error);
                    reject(error);
                }
                else {
                    console.log(`Subscribed to topic: ${topic}`);
                    this.on('message', (message) => {
                        if (this.topicMatches(message.topic, topic)) {
                            callback(message);
                        }
                    });
                    resolve();
                }
            });
        });
    }
    parsePayload(payload) {
        const payloadStr = payload.toString();
        try {
            return JSON.parse(payloadStr);
        }
        catch {
            return payloadStr;
        }
    }
    topicMatches(messageTopic, subscriptionTopic) {
        const messageSegments = messageTopic.split('/');
        const subscriptionSegments = subscriptionTopic.split('/');
        for (let i = 0; i < subscriptionSegments.length; i++) {
            const subSegment = subscriptionSegments[i];
            const msgSegment = messageSegments[i];
            if (subSegment === '#') {
                return true;
            }
            if (subSegment === '+') {
                if (msgSegment === undefined) {
                    return false;
                }
                continue;
            }
            if (subSegment !== msgSegment) {
                return false;
            }
        }
        return messageSegments.length === subscriptionSegments.length;
    }
    scheduleReconnect() {
        if (!this.settings || this.reconnectAttempts >= this.maxReconnectAttempts) {
            console.log('Max reconnection attempts reached or no settings available');
            return;
        }
        this.reconnectAttempts++;
        const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);
        console.log(`Scheduling reconnection attempt ${this.reconnectAttempts} in ${delay}ms`);
        setTimeout(async () => {
            try {
                await this.connect(this.settings);
            }
            catch (error) {
                console.error('Reconnection attempt failed:', error);
            }
        }, delay);
    }
}
exports.MQTTClient = MQTTClient;
