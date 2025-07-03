# **MQTT Note \- MVP Plan**

## **1\. Project Goal**

To create an Obsidian plugin named "MQTT Note" that enables seamless two-way communication between Obsidian notes and an MQTT broker. The Minimum Viable Product (MVP) will focus on a simple, robust implementation of publishing notes to MQTT and subscribing to topics to create or update notes.

## **2\. Core Features**

### **2.1. Outgoing Notes: Publish from Obsidian to MQTT**

This feature allows users to send the content of a note to a specified MQTT topic.

**Trigger:**

* A note will be published if its frontmatter contains mqtt: true.  
* Publishing can be configured to happen either:  
  * **Automatically** when the note is saved.  
  * **Manually** by triggering a command from the Obsidian Command Palette.

**Topic Generation:**

* The MQTT topic will be generated from the note's title, prefixed with a user-configurable string.  
* **Format:** \<Outgoing Prefix\>/\<Note Title\>  
* **Example:** A note titled Living Room Sensor with a prefix of obsidian/ will publish to the topic obsidian/Living Room Sensor.

**Payload Format:**

* The message payload will be a single JSON object containing the note's frontmatter and body.

**Example:**

* **Note:** My Awesome Note.md  
  \---  
  mqtt: true  
  tags: \#project \#idea  
  status: "in-progress"  
  \---

  This is the first paragraph.

* **Resulting MQTT Message:**  
  * **Topic:** obsidian/My Awesome Note  
  * **Payload:**  
    {  
      "tags": \["project", "idea"\],  
      "status": "in-progress",  
      "body": "This is the first paragraph."  
    }

### **2.2. Incoming Messages: Create Notes from MQTT**

This feature allows Obsidian to listen to an MQTT topic and automatically create or update notes with the content of incoming messages. This is ideal for integrating with systems like Home Assistant or IoT devices.

**Trigger:**

* The plugin will subscribe to a user-defined base topic (e.g., homeassistant/\#).

**Note Generation:**

* When a message is received, a note will be created or updated within a specified folder (e.g., MQTT-Inbox/).  
* The note's title will be derived from the MQTT topic.  
* **Example:** A message on homeassistant/sensor/temperature/status creates a note named temperature-status.md.

**Content Handling:**

* **Simple Payload:** If the message payload is a simple string or number (e.g., 72.5), it becomes the entire body of the note.  
* **JSON Payload:** If the message payload is a JSON object, it will be placed inside a json code block within the note.

### **2.3. Settings Screen**

A dedicated settings tab will allow users to configure the plugin's behavior.

**Configuration Options:**

* **MQTT Broker Connection:**  
  * Broker URL (e.g., mqtt://192.168.1.100:1883)  
  * Username  
  * Password  
* **Publishing Mode:**  
  * A checkbox to enable/disable **Automatic publishing on save**.  
* **Topic Configuration:**  
  * **Outgoing Prefix:** (Default: obsidian/)  
  * **Incoming Topic to Subscribe to:** (e.g., homeassistant/\#)  
* **File Management:**  
  * **Incoming Note Folder:** The folder where new notes from MQTT messages will be saved (Default: MQTT-Inbox/).