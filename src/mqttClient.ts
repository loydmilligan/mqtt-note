import { MqttClient, connect, IClientOptions } from 'mqtt';
import { EventEmitter } from 'events';
import { MQTTNoteSettings, MQTTMessage } from './types';

export class MQTTClient extends EventEmitter {
    private client: MqttClient | null = null;
    private settings: MQTTNoteSettings | null = null;
    private reconnectAttempts = 0;
    private maxReconnectAttempts = 5;
    private reconnectDelay = 1000; // Start with 1 second

    constructor() {
        super();
    }

    async connect(settings: MQTTNoteSettings): Promise<void> {
        if (this.isConnected()) {
            return;
        }

        this.settings = settings;

        if (!settings.brokerUrl) {
            throw new Error('Broker URL is required');
        }

        const options: IClientOptions = {
            clean: true,
            connectTimeout: 30000,
            reconnectPeriod: 0, // We handle reconnection manually
        };

        if (settings.username) {
            options.username = settings.username;
        }

        if (settings.password) {
            options.password = settings.password;
        }

        return new Promise((resolve, reject) => {
            try {
                this.client = connect(settings.brokerUrl, options);

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

                this.client.on('message', (topic: string, payload: Buffer) => {
                    try {
                        const message: MQTTMessage = {
                            topic,
                            payload: this.parsePayload(payload),
                            timestamp: Date.now()
                        };
                        this.emit('message', message);
                    } catch (error) {
                        console.error('Error processing MQTT message:', error);
                        this.emit('error', error);
                    }
                });

            } catch (error) {
                reject(error);
            }
        });
    }

    async disconnect(): Promise<void> {
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
            } else {
                resolve();
            }
        });
    }

    isConnected(): boolean {
        return this.client !== null && this.client.connected;
    }

    async publish(topic: string, payload: string | Record<string, any>): Promise<void> {
        if (!this.isConnected()) {
            throw new Error('MQTT client is not connected');
        }

        const message = typeof payload === 'string' ? payload : JSON.stringify(payload);

        return new Promise((resolve, reject) => {
            this.client!.publish(topic, message, { qos: 0 }, (error) => {
                if (error) {
                    console.error('Error publishing MQTT message:', error);
                    reject(error);
                } else {
                    console.log(`Published message to topic: ${topic}`);
                    resolve();
                }
            });
        });
    }

    async subscribe(topic: string, callback: (message: MQTTMessage) => void): Promise<void> {
        if (!this.isConnected()) {
            throw new Error('MQTT client is not connected');
        }

        return new Promise((resolve, reject) => {
            this.client!.subscribe(topic, { qos: 0 }, (error) => {
                if (error) {
                    console.error('Error subscribing to MQTT topic:', error);
                    reject(error);
                } else {
                    console.log(`Subscribed to topic: ${topic}`);
                    
                    // Register callback for this specific topic
                    this.on('message', (message: MQTTMessage) => {
                        if (this.topicMatches(message.topic, topic)) {
                            callback(message);
                        }
                    });
                    
                    resolve();
                }
            });
        });
    }

    private parsePayload(payload: Buffer): string | Record<string, any> {
        const payloadStr = payload.toString();
        
        try {
            // Try to parse as JSON
            return JSON.parse(payloadStr);
        } catch {
            // If parsing fails, return as string
            return payloadStr;
        }
    }

    private topicMatches(messageTopic: string, subscriptionTopic: string): boolean {
        // Simple topic matching with wildcards
        const messageSegments = messageTopic.split('/');
        const subscriptionSegments = subscriptionTopic.split('/');

        for (let i = 0; i < subscriptionSegments.length; i++) {
            const subSegment = subscriptionSegments[i];
            const msgSegment = messageSegments[i];

            if (subSegment === '#') {
                // Multi-level wildcard - matches everything after this point
                return true;
            }

            if (subSegment === '+') {
                // Single-level wildcard - matches one segment
                if (msgSegment === undefined) {
                    return false;
                }
                continue;
            }

            if (subSegment !== msgSegment) {
                return false;
            }
        }

        // Check if message has more segments than subscription
        return messageSegments.length === subscriptionSegments.length;
    }

    private scheduleReconnect(): void {
        if (!this.settings || this.reconnectAttempts >= this.maxReconnectAttempts) {
            console.log('Max reconnection attempts reached or no settings available');
            return;
        }

        this.reconnectAttempts++;
        const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1); // Exponential backoff

        console.log(`Scheduling reconnection attempt ${this.reconnectAttempts} in ${delay}ms`);

        setTimeout(async () => {
            try {
                await this.connect(this.settings!);
            } catch (error) {
                console.error('Reconnection attempt failed:', error);
            }
        }, delay);
    }
}