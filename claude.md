# MQTT Note Plugin - AI Development Workflow Guide

## Project Overview

This is an Obsidian plugin that enables seamless two-way communication between Obsidian notes and an MQTT broker. The plugin allows notes with `mqtt: true` frontmatter to be published to MQTT topics, and automatically creates notes from incoming MQTT messages.

## Core Features

- **Outgoing Notes**: Publish notes to MQTT topics when saved (automatic) or via command (manual)
- **Incoming Messages**: Create/update notes from MQTT messages in specified folder
- **Settings Management**: Configure MQTT broker connection, topics, and publishing behavior

## Using the Manifest-Driven Approach

This project uses manifest-driven development where `codebase_manifest.json` acts as the "cheat sheet" for understanding the complete project structure without reading all code files.

## Available Commands

### Core Development Commands:
- **generate_manifest.md** - Analyze codebase and create/update manifests
- **process_task.md** - Prepare tasks with expected post-task manifests
- **implement_task.md** - Implement prepared tasks with full context
- **check_task.md** - Validate implementation against expected manifest
- **resolve_mismatch.md** - Handle discrepancies between expected and actual

### Workflow Management Commands:
- **commit_task.md** - Commit completed tasks with proper git history
- **update_final_manifest.md** - Update proposed final manifest based on learnings

## Complete Development Workflow

### Core Task Implementation Cycle:
1. **process_task** - Prepare task with expected manifest
2. **implement_task** - Implement with full context
3. **check_task** - Validate against expected manifest
4. **resolve_mismatch** - Handle discrepancies (if needed)
5. **commit_task** - Save progress with proper git history

### Command Usage Examples:

**Starting a new task:**
```bash
claude-code process_task "Task-2.1"
```

**Implementing prepared task:**
```bash
claude-code implement_task "tasks/prepared/Task-2.1.json"
```

**Validating implementation:**
```bash
claude-code check_task "Task-2.1"
```

**Committing completed task:**
```bash
claude-code commit_task "Task-2.1"
```

**Updating architecture understanding:**
```bash
claude-code update_final_manifest
```

## Project Structure

- `docs/mvp.md` - MVP requirements and core features
- `docs/proposed_final_manifest.json` - Target architecture and planned structure
- `docs/manifest_evolution.md` - Architecture evolution log
- `tasks/task_list.md` - Implementation task breakdown
- `tasks/prepared/` - Temporary task files with full context (gitignored)
- `tasks/completed/` - Completed task records for project history
- `codebase_manifest.json` - Current project state and architecture
- `.claude/commands/` - All development command prompts

## Architecture Overview

**Main Components:**
- `MQTTNotePlugin` - Main plugin class managing lifecycle
- `MQTTClient` - MQTT broker connection and message handling
- `NotePublisher` - Handles note-to-MQTT publishing
- `NoteCreator` - Creates notes from MQTT messages
- `MQTTNoteSettingTab` - Settings UI and configuration

**Data Flow:**
- Outgoing: Notes with mqtt:true → NotePublisher → MQTTClient → MQTT Broker
- Incoming: MQTT Broker → MQTTClient → NoteCreator → Obsidian Notes

## MCP Servers and Tools Section

- List of available MCP servers and tools
- Rules for when to use MCP tools vs. built-in commands
- Integration guidelines for MCP tools
- **Note:** This section to be expanded later with specific MCP tool details

## Future Enhancements Section

- TODO: Move commands to global ~/.claude/commands for reuse across projects
- TODO: Tasks management system (possibly integrate taskmaster-ai or similar MCP tool)
- TODO: Artifact generation integration
- TODO: Expand MCP tools integration and usage guidelines

## Development Guidelines

1. **Follow manifest structure** - All components should match the planned architecture
2. **Update manifest as needed** - Use update_final_manifest after significant changes
3. **Use complete workflow** - Don't skip validation steps
4. **Keep commits atomic** - Each task completion should be a single commit
5. **Document architectural decisions** - Update manifest_evolution.md for major changes

## Getting Started

1. **Review documentation** - Check `docs/mvp.md` and `docs/proposed_final_manifest.json`
2. **Check task list** - Review `tasks/task_list.md` for implementation plan
3. **Start with Task 1.1** - Use the complete workflow for first task
4. **Follow task-by-task approach** - Complete each task before moving to next
5. **Update manifest periodically** - Keep architecture documentation current

## Project Status

The project is bootstrapped and ready for implementation. The manifest contains the complete planned architecture extracted from MVP requirements and will be updated as development progresses.