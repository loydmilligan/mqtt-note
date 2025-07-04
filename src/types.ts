export interface MQTTNoteSettings {
    brokerUrl: string;
    username: string;
    password: string;
    automaticPublishOnSave: boolean;
    outgoingPrefix: string;
    incomingTopic: string;
    incomingNoteFolder: string;
}

export interface MQTTMessage {
    topic: string;
    payload: string | Record<string, any>;
    timestamp: number;
}

export enum PublishMode {
    AUTOMATIC = 'automatic',
    MANUAL = 'manual'
}