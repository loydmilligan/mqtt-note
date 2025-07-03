# MQTT Note - Obsidian Plugin

Obsidian plugin enabling seamless two-way communication between notes and MQTT broker.

## Project Overview

- **Tech Stack:** TypeScript, Node.js, Obsidian Plugin API, MQTT
- **Type:** Obsidian Plugin
- **Development Status:** Initial setup complete, ready for implementation

## Core Features

- **Outgoing Notes**: Publish notes with `mqtt: true` frontmatter to MQTT topics
- **Incoming Messages**: Create/update notes from MQTT messages in specified folder
- **Settings Management**: Configure MQTT broker connection, topics, and publishing behavior

## Development Approach

This project uses manifest-driven development with task-by-task implementation. The `codebase_manifest.json` file contains complete project information including:

- Project metadata and tech stack
- Documentation references
- Architecture overview from planning documents
- Development workflow tracking

See `claude.md` for detailed AI workflow instructions.

## Quick Start

1. Review `docs/mvp.md` for project requirements
2. Check `docs/proposed_final_manifest.json` for detailed architecture
3. Review `tasks/task_list.md` for implementation plan
4. Check `codebase_manifest.json` for current project state
5. Follow development workflow in `claude.md`

## Directory Structure

- `docs/` - Project documentation (MVP, proposed manifest, evolution log)
- `tasks/` - Development task list and task processing
- `.claude/commands/` - AI command prompts for development workflow
- `codebase_manifest.json` - Complete project manifest with metadata
- `claude.md` - AI workflow documentation

## Development Workflow

1. `claude-code process_task "Task-X.X"` - Prepare task with expected manifest
2. `claude-code implement_task "tasks/prepared/Task-X.X.json"` - Implement changes
3. `claude-code check_task "Task-X.X"` - Verify implementation matches expected
4. If mismatch: `claude-code resolve_mismatch "Task-X.X"` - Handle discrepancies
5. `claude-code commit_task "Task-X.X"` - Commit with proper git history

## Project Status

The project is bootstrapped and ready for implementation. The manifest contains project information extracted from planning documents and will be updated as development progresses.

See `claude.md` for detailed instructions and `codebase_manifest.json` for current project state.