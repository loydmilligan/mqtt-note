const { MQTTClient } = require('../mqttClient');

const TEST_CONFIG = {
    brokerUrl: 'mqtt://test.mosquitto.org:1883',
    username: '',
    password: '',
    testTopic: 'test/mqtt-note-plugin',
    subscribeTopics: ['test/mqtt-note-plugin/response', 'test/mqtt-note-plugin/wildcard/+'],
    timeout: 10000
};

let testResults = [];
let testClient = null;

async function testConnection() {
    console.log('🔗 Testing MQTT Connection...');
    
    try {
        testClient = new MQTTClient();
        
        const testSettings = {
            brokerUrl: TEST_CONFIG.brokerUrl,
            username: TEST_CONFIG.username,
            password: TEST_CONFIG.password
        };
        
        await testClient.connect(testSettings);
        
        if (testClient.isConnected()) {
            console.log('✅ Connection successful');
            testResults.push({ test: 'Connection', status: 'PASS' });
            return true;
        } else {
            console.log('❌ Connection failed - not connected');
            testResults.push({ test: 'Connection', status: 'FAIL', error: 'Not connected after connect()' });
            return false;
        }
    } catch (error) {
        console.log('❌ Connection failed:', error.message);
        testResults.push({ test: 'Connection', status: 'FAIL', error: error.message });
        return false;
    }
}

async function testPublish() {
    console.log('📤 Testing MQTT Publish...');
    
    if (!testClient || !testClient.isConnected()) {
        console.log('❌ Cannot test publish - not connected');
        testResults.push({ test: 'Publish', status: 'FAIL', error: 'Not connected' });
        return false;
    }
    
    try {
        const testPayload = {
            timestamp: Date.now(),
            message: 'Test message from MQTT Note Plugin',
            testId: Math.random().toString(36).substring(7)
        };
        
        console.log(`Publishing to topic: ${TEST_CONFIG.testTopic}`);
        await testClient.publish(TEST_CONFIG.testTopic, testPayload);
        
        console.log('✅ Publish successful');
        testResults.push({ test: 'Publish', status: 'PASS' });
        return true;
    } catch (error) {
        console.log('❌ Publish failed:', error.message);
        testResults.push({ test: 'Publish', status: 'FAIL', error: error.message });
        return false;
    }
}

async function testSubscribe() {
    console.log('📥 Testing MQTT Subscribe...');
    
    if (!testClient || !testClient.isConnected()) {
        console.log('❌ Cannot test subscribe - not connected');
        testResults.push({ test: 'Subscribe', status: 'FAIL', error: 'Not connected' });
        return false;
    }
    
    return new Promise((resolve) => {
        let messageReceived = false;
        let subscriptionTimeout;
        let subscribed = false;
        
        const messageHandler = (message) => {
            if (!messageReceived) {
                messageReceived = true;
                console.log('✅ Message received:', message.topic, JSON.stringify(message.payload));
                testResults.push({ test: 'Subscribe', status: 'PASS' });
                clearTimeout(subscriptionTimeout);
                resolve(true);
            }
        };
        
        try {
            console.log(`Subscribing to topic: ${TEST_CONFIG.subscribeTopics[0]}`);
            
            // Subscribe and wait for subscription confirmation
            testClient.subscribe(TEST_CONFIG.subscribeTopics[0], messageHandler).then(() => {
                subscribed = true;
                console.log('Subscription confirmed');
                
                // Wait a bit for subscription to be fully active
                setTimeout(async () => {
                    try {
                        const testPayload = {
                            timestamp: Date.now(),
                            message: 'Test response message',
                            testId: Math.random().toString(36).substring(7)
                        };
                        
                        console.log('Publishing test message to subscribed topic...');
                        await testClient.publish(TEST_CONFIG.subscribeTopics[0], testPayload);
                    } catch (error) {
                        console.log('❌ Failed to publish test message:', error.message);
                        if (!messageReceived) {
                            testResults.push({ test: 'Subscribe', status: 'FAIL', error: 'Failed to publish test message' });
                            clearTimeout(subscriptionTimeout);
                            resolve(false);
                        }
                    }
                }, 2000);
            }).catch((error) => {
                console.log('❌ Failed to subscribe:', error.message);
                testResults.push({ test: 'Subscribe', status: 'FAIL', error: error.message });
                clearTimeout(subscriptionTimeout);
                resolve(false);
            });
            
            subscriptionTimeout = setTimeout(() => {
                if (!messageReceived) {
                    const reason = subscribed ? 'No message received after publishing' : 'Subscription failed or timeout';
                    console.log(`❌ Subscribe test timed out - ${reason}`);
                    testResults.push({ test: 'Subscribe', status: 'FAIL', error: `Timeout - ${reason}` });
                    resolve(false);
                }
            }, 8000);
            
        } catch (error) {
            console.log('❌ Subscribe failed:', error.message);
            testResults.push({ test: 'Subscribe', status: 'FAIL', error: error.message });
            clearTimeout(subscriptionTimeout);
            resolve(false);
        }
    });
}

async function testErrorScenarios() {
    console.log('🚨 Testing Error Scenarios...');
    
    return new Promise((resolve) => {
        const errorClient = new MQTTClient();
        let errorReceived = false;
        
        // Set up error event listener
        errorClient.on('error', (error) => {
            if (!errorReceived) {
                errorReceived = true;
                console.log('✅ Error handling working correctly:', error.message);
                testResults.push({ test: 'Error Scenarios', status: 'PASS' });
                resolve(true);
            }
        });
        
        // Timeout in case no error is received
        setTimeout(() => {
            if (!errorReceived) {
                console.log('❌ Error test failed - no error received for invalid broker');
                testResults.push({ test: 'Error Scenarios', status: 'FAIL', error: 'No error received for invalid broker' });
                resolve(false);
            }
        }, 5000);
        
        try {
            const invalidSettings = {
                brokerUrl: 'mqtt://invalid.broker.doesnotexist:1883',
                username: '',
                password: ''
            };
            
            console.log('Testing connection to invalid broker...');
            errorClient.connect(invalidSettings).catch((error) => {
                if (!errorReceived) {
                    errorReceived = true;
                    console.log('✅ Error handling working correctly:', error.message);
                    testResults.push({ test: 'Error Scenarios', status: 'PASS' });
                    resolve(true);
                }
            });
            
        } catch (error) {
            if (!errorReceived) {
                errorReceived = true;
                console.log('✅ Error handling working correctly:', error.message);
                testResults.push({ test: 'Error Scenarios', status: 'PASS' });
                resolve(true);
            }
        }
    });
}

async function testReconnection() {
    console.log('🔄 Testing Reconnection Logic...');
    
    if (!testClient || !testClient.isConnected()) {
        console.log('❌ Cannot test reconnection - not connected');
        testResults.push({ test: 'Reconnection', status: 'FAIL', error: 'Not connected' });
        return false;
    }
    
    try {
        let reconnectEventReceived = false;
        let disconnectEventReceived = false;
        
        testClient.on('disconnected', () => {
            console.log('📡 Disconnect event received');
            disconnectEventReceived = true;
        });
        
        testClient.on('connected', () => {
            console.log('📡 Reconnect event received');
            reconnectEventReceived = true;
        });
        
        console.log('Simulating disconnect...');
        await testClient.disconnect();
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log('Reconnecting...');
        const testSettings = {
            brokerUrl: TEST_CONFIG.brokerUrl,
            username: TEST_CONFIG.username,
            password: TEST_CONFIG.password
        };
        
        await testClient.connect(testSettings);
        
        if (testClient.isConnected()) {
            console.log('✅ Reconnection successful');
            testResults.push({ test: 'Reconnection', status: 'PASS' });
            return true;
        } else {
            console.log('❌ Reconnection failed');
            testResults.push({ test: 'Reconnection', status: 'FAIL', error: 'Not connected after reconnect attempt' });
            return false;
        }
    } catch (error) {
        console.log('❌ Reconnection test failed:', error.message);
        testResults.push({ test: 'Reconnection', status: 'FAIL', error: error.message });
        return false;
    }
}

async function runAllTests() {
    console.log('🧪 Starting MQTT Connectivity Test Suite');
    console.log('=====================================');
    
    const startTime = Date.now();
    testResults = [];
    
    try {
        console.log('Test Configuration:');
        console.log(`- Broker: ${TEST_CONFIG.brokerUrl}`);
        console.log(`- Test Topic: ${TEST_CONFIG.testTopic}`);
        console.log(`- Subscribe Topics: ${TEST_CONFIG.subscribeTopics.join(', ')}`);
        console.log('');
        
        await testConnection();
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        await testPublish();
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        await testSubscribe();
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        await testErrorScenarios();
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        await testReconnection();
        
    } catch (error) {
        console.log('❌ Test suite error:', error.message);
        testResults.push({ test: 'Test Suite', status: 'FAIL', error: error.message });
    } finally {
        if (testClient) {
            try {
                await testClient.disconnect();
                console.log('🔌 Test client disconnected');
            } catch (error) {
                console.log('⚠️ Error during cleanup:', error.message);
            }
        }
    }
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    console.log('');
    console.log('📊 Test Results Summary');
    console.log('======================');
    
    const passCount = testResults.filter(r => r.status === 'PASS').length;
    const failCount = testResults.filter(r => r.status === 'FAIL').length;
    
    testResults.forEach(result => {
        const icon = result.status === 'PASS' ? '✅' : '❌';
        const error = result.error ? ` (${result.error})` : '';
        console.log(`${icon} ${result.test}: ${result.status}${error}`);
    });
    
    console.log('');
    console.log(`Total Tests: ${testResults.length}`);
    console.log(`Passed: ${passCount}`);
    console.log(`Failed: ${failCount}`);
    console.log(`Duration: ${duration}ms`);
    
    if (failCount === 0) {
        console.log('🎉 All tests passed! MQTT client is working correctly.');
        return true;
    } else {
        console.log('❌ Some tests failed. Please check the MQTT client implementation.');
        return false;
    }
}

if (require.main === module) {
    runAllTests().then(success => {
        process.exit(success ? 0 : 1);
    }).catch(error => {
        console.error('Test runner error:', error);
        process.exit(1);
    });
}

module.exports = {
    testConnection,
    testPublish,
    testSubscribe,
    testErrorScenarios,
    testReconnection,
    runAllTests,
    TEST_CONFIG
};