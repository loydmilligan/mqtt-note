# MQTT Note Plugin - Complete Task List

## Development Workflow

**All tasks follow this manifest-driven workflow:**

1. **Process Task:** `claude-code process_task "Task-X.X"`
   - Reads task requirements from this list
   - Analyzes current manifest state
   - Creates expected post-task manifest
   - Generates task file with full context

2. **Implement Task:** `claude-code implement_task "tasks/prepared/Task-X.X.json"`
   - Uses prepared context to implement changes
   - Creates/modifies files as planned
   - Tests implementation

3. **Check Task:** `claude-code check_task "Task-X.X"`
   - Generates fresh manifest from code
   - Compares with expected manifest
   - Reports any discrepancies

4. **Resolve Mismatches:** `claude-code resolve_mismatch "Task-X.X"` (if needed)
   - Handles differences between expected and actual
   - Provides resolution options

5. **Commit Task:** `claude-code commit_task "Task-X.X"`
   - Creates clean git commit
   - Links commit to task completion
   - Updates project history

**Periodic Activities:**
- **Update Final Manifest:** `claude-code update_final_manifest`
  - After major milestones or architectural discoveries
  - Updates `docs/proposed_final_manifest.json`
  - Documents evolution in `docs/manifest_evolution.md`

## Task Implementation Notes

- Each task builds on the previous manifest state
- Implementation learnings may update the proposed final manifest
- Git history tracks both code changes and architectural decisions
- The manifest serves as the project's architectural source of truth

## Phase 1: Project Setup & Infrastructure

### Task 1.1: Initialize Project Structure
**Priority:** High  
**Estimated Time:** 30 minutes  
**Dependencies:** None

**Actions:**
- [ ] Create project directory structure
- [ ] Initialize npm project with `package.json`
- [ ] Install dependencies: `obsidian`, `mqtt`, `typescript`, `@types/node`
- [ ] Set up TypeScript configuration (`tsconfig.json`)
- [ ] Create basic build script
- [ ] Create initial `manifest.json` for Obsidian plugin

**Acceptance Criteria:**
- Project builds without errors
- All dependencies installed correctly
- Manifest matches the planned structure

**Workflow:**
1. `claude-code process_task "Task-1.1"`
2. `claude-code implement_task "tasks/prepared/Task-1.1.json"`
3. `claude-code check_task "Task-1.1"`
4. `claude-code commit_task "Task-1.1"`

### Task 1.2: Create Type Definitions
**Priority:** High  
**Estimated Time:** 20 minutes  
**Dependencies:** 1.1

**Actions:**
- [ ] Create `types.ts` file
- [ ] Define `MQTTNoteSettings` interface
- [ ] Define `MQTTMessage` interface
- [ ] Define `PublishMode` enum
- [ ] Export all types

**Acceptance Criteria:**
- All interfaces properly typed
- No TypeScript compilation errors
- Types match MVP requirements

### Task 1.3: Implement Settings System
**Priority:** High  
**Estimated Time:** 45 minutes  
**Dependencies:** 1.2

**Actions:**
- [ ] Create `settings.ts` file
- [ ] Define `DEFAULT_SETTINGS` object
- [ ] Create `MQTTNoteSettingTab` class
- [ ] Implement settings UI with form inputs:
  - MQTT broker URL
  - Username/password
  - Outgoing prefix
  - Incoming topic subscription
  - Incoming note folder
  - Auto-publish checkbox
- [ ] Add settings validation
- [ ] Add save/load functionality

**Acceptance Criteria:**
- Settings UI appears in Obsidian settings
- All settings save and load correctly
- Input validation works properly
- UI matches planned configuration options

## Phase 2: Core MQTT Functionality

### Task 2.1: Create MQTT Client
**Priority:** High  
**Estimated Time:** 60 minutes  
**Dependencies:** 1.2

**Actions:**
- [ ] Create `mqttClient.ts` file
- [ ] Implement `MQTTClient` class
- [ ] Add `connect()` method with error handling
- [ ] Add `disconnect()` method
- [ ] Add `publish()` method
- [ ] Add `subscribe()` method with callback support
- [ ] Add `isConnected()` status method
- [ ] Add connection retry logic
- [ ] Add proper error handling and logging

**Acceptance Criteria:**
- Successfully connects to MQTT broker
- Can publish messages
- Can subscribe to topics
- Handles connection failures gracefully
- Proper cleanup on disconnect

**Workflow:**
1. `claude-code process_task "Task-2.1"`
2. `claude-code implement_task "tasks/prepared/Task-2.1.json"`
3. `claude-code check_task "Task-2.1"`
4. `claude-code commit_task "Task-2.1"`

### Task 2.2: Test MQTT Connectivity
**Priority:** High  
**Estimated Time:** 30 minutes  
**Dependencies:** 2.1

**Actions:**
- [ ] Set up test MQTT broker (local or cloud)
- [ ] Create simple connection test
- [ ] Test publish functionality
- [ ] Test subscribe functionality
- [ ] Test connection error scenarios
- [ ] Verify reconnection logic

**Acceptance Criteria:**
- Can connect to real MQTT broker
- Messages publish successfully
- Subscriptions receive messages
- Error handling works correctly

**Milestone:** After completing Phase 2, consider running:
`claude-code update_final_manifest` to capture learnings about MQTT integration

## Phase 3: Note Publishing (Obsidian → MQTT)

### Task 3.1: Create Note Publisher
**Priority:** High  
**Estimated Time:** 45 minutes  
**Dependencies:** 2.1

**Actions:**
- [ ] Create `notePublisher.ts` file
- [ ] Implement `NotePublisher` class
- [ ] Add `shouldPublishNote()` method (check for `mqtt: true` in frontmatter)
- [ ] Add `generateTopic()` method (prefix + note title)
- [ ] Add `createPayload()` method (frontmatter + body as JSON)
- [ ] Add `publishNote()` method
- [ ] Add error handling for malformed frontmatter
- [ ] Add logging for publish attempts

**Acceptance Criteria:**
- Only publishes notes with `mqtt: true` frontmatter
- Generates correct topic format
- Creates proper JSON payload
- Handles parsing errors gracefully
- Logs publish activities

### Task 3.2: Integrate Manual Publishing
**Priority:** High  
**Estimated Time:** 30 minutes  
**Dependencies:** 3.1

**Actions:**
- [ ] Add command palette command "Publish Note to MQTT"
- [ ] Connect command to note publisher
- [ ] Add user feedback (success/error notifications)
- [ ] Test with various note formats
- [ ] Handle edge cases (empty notes, invalid frontmatter)

**Acceptance Criteria:**
- Command appears in command palette
- Successfully publishes current note
- Shows appropriate user feedback
- Works with different note formats

### Task 3.3: Implement Auto-Publishing
**Priority:** Medium  
**Estimated Time:** 30 minutes  
**Dependencies:** 3.2

**Actions:**
- [ ] Add file modification event listener
- [ ] Implement auto-publish logic
- [ ] Add settings toggle for auto-publish
- [ ] Add debouncing to prevent spam
- [ ] Test auto-publish on save

**Acceptance Criteria:**
- Auto-publishes when notes are saved
- Respects settings toggle
- Doesn't spam broker with rapid changes
- Only publishes marked notes

## Phase 4: Note Creation (MQTT → Obsidian)

### Task 4.1: Create Note Creator
**Priority:** High  
**Estimated Time:** 60 minutes  
**Dependencies:** 2.1

**Actions:**
- [ ] Create `noteCreator.ts` file
- [ ] Implement `NoteCreator` class
- [ ] Add `generateNoteTitle()` method (from MQTT topic)
- [ ] Add `createNoteFromMessage()` method
- [ ] Add `updateExistingNote()` method
- [ ] Add `handleIncomingMessage()` method
- [ ] Handle simple payloads (strings/numbers)
- [ ] Handle JSON payloads (format as code blocks)
- [ ] Add timestamp to notes
- [ ] Ensure proper file naming (sanitize special characters)

**Acceptance Criteria:**
- Creates notes from MQTT messages
- Handles different payload formats
- Generates valid file names
- Places notes in correct folder
- Updates existing notes appropriately

### Task 4.2: Integrate MQTT Subscription
**Priority:** High  
**Estimated Time:** 30 minutes  
**Dependencies:** 4.1

**Actions:**
- [ ] Connect MQTT client subscription to note creator
- [ ] Subscribe to configured topic pattern
- [ ] Route incoming messages to note creator
- [ ] Add error handling for message processing
- [ ] Test with various message types

**Acceptance Criteria:**
- Subscribes to configured topic
- Processes all incoming messages
- Creates/updates notes correctly
- Handles processing errors gracefully

### Task 4.3: Test End-to-End Flow
**Priority:** High  
**Estimated Time:** 45 minutes  
**Dependencies:** 4.2

**Actions:**
- [ ] Test complete bidirectional flow
- [ ] Publish note from Obsidian → verify MQTT message
- [ ] Send MQTT message → verify note creation
- [ ] Test with various payload formats
- [ ] Test error scenarios
- [ ] Verify no message loops

**Acceptance Criteria:**
- Complete round-trip functionality works
- No infinite loops between publish/subscribe
- Different message formats handled correctly
- Error scenarios handled properly

**Milestone:** After completing Phase 4, consider running:
`claude-code update_final_manifest` to capture learnings about bidirectional MQTT communication

## Phase 5: Main Plugin Integration

### Task 5.1: Create Main Plugin File
**Priority:** High  
**Estimated Time:** 45 minutes  
**Dependencies:** 1.3, 2.1, 3.1, 4.1

**Actions:**
- [ ] Create `main.ts` file
- [ ] Implement `MQTTNotePlugin` class extending Obsidian Plugin
- [ ] Add `onload()` method:
  - Load settings
  - Initialize MQTT client
  - Set up note publisher
  - Set up note creator
  - Register commands
  - Connect to broker
- [ ] Add `onunload()` method:
  - Disconnect MQTT client
  - Clean up resources
- [ ] Add proper error handling
- [ ] Add status indicators

**Acceptance Criteria:**
- Plugin loads successfully in Obsidian
- All components initialize correctly
- Clean shutdown on plugin disable
- Proper error handling throughout

### Task 5.2: Setup Distribution Build
**Priority:** High  
**Estimated Time:** 30 minutes  
**Dependencies:** 5.1

**Actions:**
- [ ] Configure bundling system (esbuild for dependency bundling)
- [ ] Bundle MQTT dependency into main.js distribution file
- [ ] Update build scripts in package.json for distribution
- [ ] Test plugin installation without node_modules
- [ ] Validate bundled plugin loads correctly in Obsidian
- [ ] Update .gitignore to exclude bundled artifacts if needed

**Acceptance Criteria:**
- Plugin works in Obsidian with only main.js and manifest.json
- No node_modules required in vault installation
- MQTT functionality works with bundled dependencies
- Build process is repeatable and documented
- Distribution package is vault-sync safe (no node_modules issues)

**Rationale:** Early manual testing capability is critical for AI development. This task enables real-world validation immediately after core integration, rather than waiting until Phase 6-7.

### Task 5.3: Add Command Palette Commands
**Priority:** Medium  
**Estimated Time:** 30 minutes  
**Dependencies:** 5.2

**Actions:**
- [ ] Add "Publish Note to MQTT" command
- [ ] Add "Connect to MQTT Broker" command
- [ ] Add "Disconnect from MQTT Broker" command
- [ ] Add "Show MQTT Status" command
- [ ] Add appropriate icons and descriptions

**Acceptance Criteria:**
- All commands appear in command palette
- Commands execute correctly
- Appropriate user feedback provided
- Commands handle edge cases

**Milestone:** After completing Phase 5, consider running:
`claude-code update_final_manifest` to capture final plugin architecture and integration learnings

## Phase 6: Testing & Refinement

### Task 6.1: Comprehensive Testing
**Priority:** High  
**Estimated Time:** 90 minutes  
**Dependencies:** 5.3

**Actions:**
- [ ] Test all MVP features thoroughly
- [ ] Test with different MQTT brokers
- [ ] Test network disconnection scenarios
- [ ] Test with various note formats
- [ ] Test settings persistence
- [ ] Test plugin reload scenarios
- [ ] Test error conditions
- [ ] Performance testing with many messages

**Acceptance Criteria:**
- All features work as specified
- No crashes or data loss
- Good performance under load
- Proper error handling
- Settings work correctly

### Task 6.2: User Experience Polish
**Priority:** Medium  
**Estimated Time:** 60 minutes  
**Dependencies:** 6.1

**Actions:**
- [ ] Add status bar indicator for MQTT connection
- [ ] Improve error messages and user feedback
- [ ] Add help text to settings
- [ ] Add loading indicators
- [ ] Improve logging and debugging
- [ ] Add validation messages

**Acceptance Criteria:**
- Clear connection status visible
- Helpful error messages
- Good user feedback throughout
- Easy to troubleshoot issues

## Phase 7: Documentation & Deployment

### Task 7.1: Create Documentation
**Priority:** Medium  
**Estimated Time:** 60 minutes  
**Dependencies:** 6.2

**Actions:**
- [ ] Create README.md with setup instructions
- [ ] Document all settings options
- [ ] Create troubleshooting guide
- [ ] Add examples of use cases
- [ ] Document MQTT topic formats
- [ ] Create installation guide

**Acceptance Criteria:**
- Complete setup documentation
- Clear usage examples
- Troubleshooting guide
- Easy to follow instructions

### Task 7.2: Prepare for Release
**Priority:** Low  
**Estimated Time:** 30 minutes  
**Dependencies:** 7.1

**Actions:**
- [ ] Update manifest.json with final details
- [ ] Create release build
- [ ] Test installation process
- [ ] Prepare release notes
- [ ] Create distribution package

**Acceptance Criteria:**
- Clean, installable plugin package
- All metadata correct
- Installation works smoothly
- Ready for distribution

## Manifest Updates Required

Throughout development, the manifest will evolve. Key update points:

### After Each Phase Completion:
- **Phase 1:** Basic project structure and dependencies
- **Phase 2:** MQTT client integration and connection patterns
- **Phase 3:** Note publishing architecture and frontmatter handling
- **Phase 4:** Note creation and MQTT message processing
- **Phase 5:** Complete plugin integration and command system

### After Major Discoveries:
- Better architectural patterns found during implementation
- New integration requirements discovered
- Performance or security improvements identified
- Scope changes based on implementation reality

### Documentation Updates:
- `docs/proposed_final_manifest.json` - Updated with implementation learnings
- `docs/manifest_evolution.md` - Track all architectural decisions and changes
- `codebase_manifest.json` - Reflects actual current state

## Total Estimated Time: 12-15 hours

**Note:** Time estimates may vary based on implementation discoveries and architectural refinements captured through the manifest evolution process.

## Dependencies & Prerequisites

- **MQTT Broker Access:** You'll need access to an MQTT broker for testing
- **Obsidian Development Environment:** Set up for plugin development
- **TypeScript Knowledge:** For implementation
- **MQTT Protocol Understanding:** Basic knowledge helpful

## Recommended Development Order

1. Start with Phase 1 (setup) - critical foundation
2. Move to Phase 2 (MQTT) - core functionality
3. Pick either Phase 3 or 4 first based on your priority
4. Complete remaining phases in order

Would you like me to start with any specific task, or would you prefer to modify this plan first?