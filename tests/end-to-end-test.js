// Mock Obsidian module before importing our classes
const obsidianMock = {
    App: class MockApp {},
    Plugin: class MockPlugin {},
    PluginSettingTab: class MockPluginSettingTab {},
    Setting: class MockSetting {},
    TFile: class MockTFile {},
    TFolder: class MockTFolder {},
    Notice: class MockNotice { constructor(message) { console.log('Notice:', message); } },
    normalizePath: (path) => path,
    parseFrontMatterEntry: (entry) => entry
};

// Mock the obsidian module
const Module = require('module');
const originalRequire = Module.prototype.require;
Module.prototype.require = function(id) {
    if (id === 'obsidian') {
        return obsidianMock;
    }
    return originalRequire.apply(this, arguments);
};

const { MQTTClient } = require('../mqttClient');
const { NoteCreator } = require('../noteCreator');
const { NotePublisher } = require('../notePublisher');
const { DEFAULT_SETTINGS } = require('../settings');

const E2E_TEST_CONFIG = {
    brokerUrl: 'mqtt://test.mosquitto.org:1883',
    username: '',
    password: '',
    outgoingPrefix: 'obsidian-e2e-test/',
    incomingTopic: 'obsidian-e2e-test/incoming/+',
    incomingNoteFolder: 'MQTT-Test-Inbox',
    testTimeout: 15000,
    roundTripTimeout: 10000,
    performanceThreshold: 100 // ms for single operations
};

let testResults = [];
let testClient = null;
let noteCreator = null;
let notePublisher = null;
let mockApp = null;
let mockVault = null;

// Mock Obsidian App and Vault for testing
function createMockApp() {
    const files = new Map();
    const folders = new Set();
    
    return {
        vault: {
            create: async (path, content) => {
                const file = {
                    path,
                    name: path.split('/').pop(),
                    basename: path.split('/').pop().replace(/\.md$/, ''),
                    content
                };
                files.set(path, file);
                console.log(`MockVault: Created file ${path}`);
                return file;
            },
            read: async (file) => {
                const fileData = files.get(file.path);
                if (fileData) {
                    return fileData.content;
                }
                throw new Error(`File not found: ${file.path}`);
            },
            modify: async (file, content) => {
                const fileData = files.get(file.path);
                if (fileData) {
                    fileData.content = content;
                    console.log(`MockVault: Modified file ${file.path}`);
                } else {
                    throw new Error(`File not found: ${file.path}`);
                }
            },
            getAbstractFileByPath: (path) => {
                if (files.has(path)) {
                    return files.get(path);
                }
                if (folders.has(path)) {
                    return { path, name: path.split('/').pop() };
                }
                return null;
            },
            createFolder: async (path) => {
                if (folders.has(path)) {
                    throw new Error(`Folder already exists: ${path}`);
                }
                folders.add(path);
                console.log(`MockVault: Created folder ${path}`);
            },
            // Method to get all files for testing
            getAllFiles: () => Array.from(files.values()),
            // Method to clear all files for testing
            clearAll: () => {
                files.clear();
                folders.clear();
            }
        },
        metadataCache: {
            getFileCache: (file) => {
                const fileData = files.get(file.path);
                if (fileData && fileData.content) {
                    // Parse frontmatter for testing
                    const frontmatter = parseFrontmatterFromContent(fileData.content);
                    return {
                        frontmatter: frontmatter
                    };
                }
                return null;
            }
        }
    };
}

function parseFrontmatterFromContent(content) {
    if (!content.startsWith('---')) {
        return null;
    }
    
    const lines = content.split('\n');
    let frontmatterEnd = -1;
    
    for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim() === '---') {
            frontmatterEnd = i;
            break;
        }
    }
    
    if (frontmatterEnd === -1) {
        return null;
    }
    
    const frontmatterText = lines.slice(1, frontmatterEnd).join('\n');
    const frontmatter = {};
    
    frontmatterText.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            const key = line.substring(0, colonIndex).trim();
            const value = line.substring(colonIndex + 1).trim();
            
            if (value === 'true') {
                frontmatter[key] = true;
            } else if (value === 'false') {
                frontmatter[key] = false;
            } else {
                frontmatter[key] = value.replace(/['"]/g, '');
            }
        }
    });
    
    return frontmatter;
}

async function setupTestEnvironment() {
    console.log('🔧 Setting up end-to-end test environment...');
    
    try {
        // Create mock app
        mockApp = createMockApp();
        mockVault = mockApp.vault;
        
        // Create MQTT client
        testClient = new MQTTClient();
        
        // Create test settings
        const testSettings = {
            ...DEFAULT_SETTINGS,
            brokerUrl: E2E_TEST_CONFIG.brokerUrl,
            username: E2E_TEST_CONFIG.username,
            password: E2E_TEST_CONFIG.password,
            outgoingPrefix: E2E_TEST_CONFIG.outgoingPrefix,
            incomingTopic: E2E_TEST_CONFIG.incomingTopic,
            incomingNoteFolder: E2E_TEST_CONFIG.incomingNoteFolder
        };
        
        // Connect to MQTT broker
        await testClient.connect(testSettings);
        
        if (!testClient.isConnected()) {
            throw new Error('Failed to connect to MQTT broker');
        }
        
        // Create note creator and publisher
        noteCreator = new NoteCreator(mockApp);
        notePublisher = new NotePublisher(testClient, testSettings, mockApp);
        
        console.log('✅ Test environment setup complete');
        return true;
        
    } catch (error) {
        console.error('❌ Failed to setup test environment:', error);
        testResults.push({ test: 'Environment Setup', status: 'FAIL', error: error.message });
        return false;
    }
}

async function teardownTestEnvironment() {
    console.log('🧹 Tearing down test environment...');
    
    try {
        if (testClient) {
            await testClient.disconnect();
        }
        
        if (mockVault) {
            mockVault.clearAll();
        }
        
        console.log('✅ Test environment cleanup complete');
    } catch (error) {
        console.error('⚠️ Error during cleanup:', error);
    }
}

async function testNoteToMQTT() {
    console.log('📝➡️📡 Testing Note to MQTT Flow...');
    
    try {
        const testId = Math.random().toString(36).substring(7);
        const noteContent = `---
mqtt: true
topic: test-note
---

# Test Note ${testId}

This is a test note for MQTT publishing.
Content: ${JSON.stringify({ testId, timestamp: Date.now() })}
`;
        
        // Create test note
        const testNote = await mockVault.create(`test-note-${testId}.md`, noteContent);
        
        // Set up message capture
        let messageReceived = false;
        let receivedMessage = null;
        
        const expectedTopic = `${E2E_TEST_CONFIG.outgoingPrefix}test-note-${testId}`;
        
        // Subscribe to the topic we expect the note to be published to
        await testClient.subscribe(expectedTopic, (message) => {
            messageReceived = true;
            receivedMessage = message;
            console.log(`📨 Received message from note publish: ${message.topic}`);
        });
        
        // Wait for subscription to be active
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Publish the note
        const startTime = Date.now();
        await notePublisher.publishNote(testNote);
        
        // Wait for message to be received
        await new Promise((resolve) => {
            const timeout = setTimeout(() => {
                resolve();
            }, 5000);
            
            const check = () => {
                if (messageReceived) {
                    clearTimeout(timeout);
                    resolve();
                } else {
                    setTimeout(check, 100);
                }
            };
            check();
        });
        
        if (messageReceived && receivedMessage) {
            const duration = Date.now() - startTime;
            console.log(`✅ Note to MQTT flow successful (${duration}ms)`);
            
            // Validate payload structure
            if (typeof receivedMessage.payload === 'object' && 
                receivedMessage.payload.title && 
                receivedMessage.payload.content) {
                testResults.push({ test: 'Note to MQTT', status: 'PASS', duration });
                return true;
            } else {
                testResults.push({ test: 'Note to MQTT', status: 'FAIL', error: 'Invalid payload structure' });
                return false;
            }
        } else {
            testResults.push({ test: 'Note to MQTT', status: 'FAIL', error: 'Message not received' });
            return false;
        }
        
    } catch (error) {
        console.error('❌ Note to MQTT test failed:', error);
        testResults.push({ test: 'Note to MQTT', status: 'FAIL', error: error.message });
        return false;
    }
}

async function testMQTTToNote() {
    console.log('📡➡️📝 Testing MQTT to Note Flow...');
    
    try {
        const testId = Math.random().toString(36).substring(7);
        const testTopic = `obsidian-e2e-test/incoming/${testId}`;
        
        // Clear any existing files
        mockVault.clearAll();
        
        // Create test message
        const testMessage = {
            topic: testTopic,
            payload: {
                sensor: 'temperature',
                value: 23.5,
                unit: 'celsius',
                timestamp: Date.now(),
                testId: testId
            },
            timestamp: Date.now()
        };
        
        const testSettings = {
            ...DEFAULT_SETTINGS,
            brokerUrl: E2E_TEST_CONFIG.brokerUrl,
            incomingNoteFolder: E2E_TEST_CONFIG.incomingNoteFolder
        };
        
        // Process the message through note creator
        const startTime = Date.now();
        await noteCreator.handleIncomingMessage(testMessage, testSettings);
        
        // Verify note was created
        const files = mockVault.getAllFiles();
        const createdNote = files.find(f => f.path.includes(testId));
        
        if (createdNote) {
            const duration = Date.now() - startTime;
            console.log(`✅ MQTT to Note flow successful (${duration}ms)`);
            
            // Validate note content
            if (createdNote.content.includes(testId) && 
                createdNote.content.includes('mqtt_source: true') &&
                !createdNote.content.includes('mqtt: true')) {
                testResults.push({ test: 'MQTT to Note', status: 'PASS', duration });
                return true;
            } else {
                testResults.push({ test: 'MQTT to Note', status: 'FAIL', error: 'Invalid note content or loop prevention failed' });
                return false;
            }
        } else {
            testResults.push({ test: 'MQTT to Note', status: 'FAIL', error: 'Note not created' });
            return false;
        }
        
    } catch (error) {
        console.error('❌ MQTT to Note test failed:', error);
        testResults.push({ test: 'MQTT to Note', status: 'FAIL', error: error.message });
        return false;
    }
}

async function testVariousPayloadFormats() {
    console.log('🎛️ Testing Various Payload Formats...');
    
    const testCases = [
        {
            name: 'String Payload',
            payload: 'Simple string message',
            expected: 'string'
        },
        {
            name: 'JSON Object',
            payload: { temperature: 25.5, humidity: 60, location: 'living room' },
            expected: 'object'
        },
        {
            name: 'Number Payload',
            payload: 42,
            expected: 'number'
        },
        {
            name: 'Boolean Payload',
            payload: true,
            expected: 'boolean'
        },
        {
            name: 'Array Payload',
            payload: ['sensor1', 'sensor2', 'sensor3'],
            expected: 'object'
        },
        {
            name: 'Nested Object',
            payload: {
                device: {
                    name: 'Smart Thermostat',
                    location: 'hallway',
                    sensors: [
                        { type: 'temperature', value: 22.1 },
                        { type: 'humidity', value: 45 }
                    ]
                }
            },
            expected: 'object'
        }
    ];
    
    let successCount = 0;
    const startTime = Date.now();
    
    for (const testCase of testCases) {
        try {
            const testId = Math.random().toString(36).substring(7);
            const testTopic = `obsidian-e2e-test/formats/${testId}`;
            
            const testMessage = {
                topic: testTopic,
                payload: testCase.payload,
                timestamp: Date.now()
            };
            
            const testSettings = {
                ...DEFAULT_SETTINGS,
                incomingNoteFolder: E2E_TEST_CONFIG.incomingNoteFolder
            };
            
            await noteCreator.handleIncomingMessage(testMessage, testSettings);
            
            // Verify note was created and contains expected format
            const files = mockVault.getAllFiles();
            const createdNote = files.find(f => f.path.includes(testId));
            
            if (createdNote && createdNote.content.includes(`**Payload Type:** ${testCase.expected}`)) {
                console.log(`✅ ${testCase.name} handled correctly`);
                successCount++;
            } else {
                console.log(`❌ ${testCase.name} failed`);
            }
            
        } catch (error) {
            console.error(`❌ ${testCase.name} error:`, error);
        }
    }
    
    const duration = Date.now() - startTime;
    
    if (successCount === testCases.length) {
        console.log(`✅ All payload formats handled correctly (${duration}ms)`);
        testResults.push({ test: 'Payload Formats', status: 'PASS', duration });
        return true;
    } else {
        console.log(`❌ ${successCount}/${testCases.length} payload formats handled correctly`);
        testResults.push({ test: 'Payload Formats', status: 'FAIL', error: `Only ${successCount}/${testCases.length} formats handled` });
        return false;
    }
}

async function testLoopPrevention() {
    console.log('🔄 Testing Loop Prevention...');
    
    try {
        const testId = Math.random().toString(36).substring(7);
        const testTopic = `obsidian-e2e-test/loop-test/${testId}`;
        
        // Clear any existing files
        mockVault.clearAll();
        
        // Create test message that will create a note
        const testMessage = {
            topic: testTopic,
            payload: { test: 'loop prevention', testId },
            timestamp: Date.now()
        };
        
        const testSettings = {
            ...DEFAULT_SETTINGS,
            incomingNoteFolder: E2E_TEST_CONFIG.incomingNoteFolder
        };
        
        // Process message to create note
        await noteCreator.handleIncomingMessage(testMessage, testSettings);
        
        // Verify note was created
        const files = mockVault.getAllFiles();
        const createdNote = files.find(f => f.path.includes(testId));
        
        if (!createdNote) {
            throw new Error('Note not created for loop prevention test');
        }
        
        // Check that the created note does NOT have mqtt: true
        const frontmatter = parseFrontmatterFromContent(createdNote.content);
        
        if (frontmatter && frontmatter.mqtt === true) {
            testResults.push({ test: 'Loop Prevention', status: 'FAIL', error: 'Created note has mqtt: true - would cause loop' });
            return false;
        }
        
        // Check that it has mqtt_source: true instead
        if (!frontmatter || frontmatter.mqtt_source !== true) {
            testResults.push({ test: 'Loop Prevention', status: 'FAIL', error: 'Created note missing mqtt_source: true' });
            return false;
        }
        
        // Try to publish the created note - it should NOT be published
        const shouldPublish = notePublisher.shouldPublishNote(createdNote);
        
        if (shouldPublish) {
            testResults.push({ test: 'Loop Prevention', status: 'FAIL', error: 'Created note would be published - loop detected' });
            return false;
        }
        
        console.log('✅ Loop prevention working correctly');
        testResults.push({ test: 'Loop Prevention', status: 'PASS' });
        return true;
        
    } catch (error) {
        console.error('❌ Loop prevention test failed:', error);
        testResults.push({ test: 'Loop Prevention', status: 'FAIL', error: error.message });
        return false;
    }
}

async function testErrorScenarios() {
    console.log('🚨 Testing Error Scenarios...');
    
    const errorTests = [
        {
            name: 'Empty Topic',
            message: { topic: '', payload: 'test', timestamp: Date.now() },
            expectedError: 'empty'
        },
        {
            name: 'Invalid Folder',
            message: { topic: 'test/topic', payload: 'test', timestamp: Date.now() },
            settings: { incomingNoteFolder: '' },
            expectedError: 'folder'
        },
        {
            name: 'Malformed Message',
            message: { topic: 'test/topic', payload: null, timestamp: Date.now() },
            expectedError: null // Should handle gracefully
        }
    ];
    
    let successCount = 0;
    const startTime = Date.now();
    
    for (const errorTest of errorTests) {
        try {
            const testSettings = {
                ...DEFAULT_SETTINGS,
                incomingNoteFolder: E2E_TEST_CONFIG.incomingNoteFolder,
                ...errorTest.settings
            };
            
            let errorCaught = false;
            
            try {
                await noteCreator.handleIncomingMessage(errorTest.message, testSettings);
            } catch (error) {
                errorCaught = true;
                console.log(`✅ ${errorTest.name} correctly threw error: ${error.message}`);
            }
            
            if (errorTest.expectedError && !errorCaught) {
                console.log(`❌ ${errorTest.name} should have thrown error but didn't`);
            } else if (!errorTest.expectedError && errorCaught) {
                console.log(`❌ ${errorTest.name} should not have thrown error but did`);
            } else {
                console.log(`✅ ${errorTest.name} handled correctly`);
                successCount++;
            }
            
        } catch (error) {
            console.error(`❌ ${errorTest.name} unexpected error:`, error);
        }
    }
    
    const duration = Date.now() - startTime;
    
    if (successCount === errorTests.length) {
        console.log(`✅ All error scenarios handled correctly (${duration}ms)`);
        testResults.push({ test: 'Error Scenarios', status: 'PASS', duration });
        return true;
    } else {
        console.log(`❌ ${successCount}/${errorTests.length} error scenarios handled correctly`);
        testResults.push({ test: 'Error Scenarios', status: 'FAIL', error: `Only ${successCount}/${errorTests.length} scenarios handled` });
        return false;
    }
}

async function runE2ETests() {
    console.log('🧪 Starting End-to-End Test Suite');
    console.log('=====================================');
    
    const startTime = Date.now();
    testResults = [];
    
    try {
        console.log('Test Configuration:');
        console.log(`- Broker: ${E2E_TEST_CONFIG.brokerUrl}`);
        console.log(`- Outgoing Prefix: ${E2E_TEST_CONFIG.outgoingPrefix}`);
        console.log(`- Incoming Topic: ${E2E_TEST_CONFIG.incomingTopic}`);
        console.log(`- Incoming Folder: ${E2E_TEST_CONFIG.incomingNoteFolder}`);
        console.log('');
        
        // Setup test environment
        const setupSuccess = await setupTestEnvironment();
        if (!setupSuccess) {
            console.log('❌ Test suite aborted due to setup failure');
            return false;
        }
        
        // Run all tests
        await testNoteToMQTT();
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        await testMQTTToNote();
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        await testVariousPayloadFormats();
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        await testLoopPrevention();
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        await testErrorScenarios();
        
    } catch (error) {
        console.log('❌ Test suite error:', error.message);
        testResults.push({ test: 'Test Suite', status: 'FAIL', error: error.message });
    } finally {
        await teardownTestEnvironment();
    }
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    console.log('');
    console.log('📊 End-to-End Test Results Summary');
    console.log('==================================');
    
    const passCount = testResults.filter(r => r.status === 'PASS').length;
    const failCount = testResults.filter(r => r.status === 'FAIL').length;
    
    testResults.forEach(result => {
        const icon = result.status === 'PASS' ? '✅' : '❌';
        const duration = result.duration ? ` (${result.duration}ms)` : '';
        const error = result.error ? ` - ${result.error}` : '';
        console.log(`${icon} ${result.test}: ${result.status}${duration}${error}`);
    });
    
    console.log('');
    console.log(`Total Tests: ${testResults.length}`);
    console.log(`Passed: ${passCount}`);
    console.log(`Failed: ${failCount}`);
    console.log(`Duration: ${duration}ms`);
    
    // Performance analysis
    const performanceResults = testResults.filter(r => r.duration);
    if (performanceResults.length > 0) {
        const avgTime = performanceResults.reduce((sum, r) => sum + r.duration, 0) / performanceResults.length;
        console.log(`Average operation time: ${avgTime.toFixed(2)}ms`);
        
        const slowTests = performanceResults.filter(r => r.duration > E2E_TEST_CONFIG.performanceThreshold);
        if (slowTests.length > 0) {
            console.log(`⚠️ ${slowTests.length} tests exceeded performance threshold of ${E2E_TEST_CONFIG.performanceThreshold}ms`);
        }
    }
    
    if (failCount === 0) {
        console.log('🎉 All end-to-end tests passed! The bidirectional MQTT-Note flow is working correctly.');
        console.log('✅ Loop prevention is working');
        console.log('✅ All payload formats are supported');
        console.log('✅ Error scenarios are handled gracefully');
        return true;
    } else {
        console.log('❌ Some end-to-end tests failed. Please check the implementation.');
        return false;
    }
}

if (require.main === module) {
    runE2ETests().then(success => {
        process.exit(success ? 0 : 1);
    }).catch(error => {
        console.error('Test runner error:', error);
        process.exit(1);
    });
}

module.exports = {
    testNoteToMQTT,
    testMQTTToNote,
    testVariousPayloadFormats,
    testLoopPrevention,
    testErrorScenarios,
    runE2ETests,
    E2E_TEST_CONFIG
};