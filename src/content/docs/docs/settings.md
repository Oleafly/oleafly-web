---
title: "Settings reference"
description: "Every Oleafly setting: General, Appearance, Dictionary, Data Storage, AI Assistant, LaTeX Engine, Downloads, Integrations, Keyboard Shortcuts, MCP, and Help & About."
---

Open Settings from the gear in the rail, `/settings` in the search omnibar, or **Open settings** in the ⌘K palette. General appears first. Advanced sections show by default in recent builds; use the navigation list to jump.

## General

| Setting | Type | Default | What it does |
|---|---|---|---|
| **Enable tour guides** | Expandable toggle | On | Home, Workspace, Settings, AI Assistant, and Diagram Composer guides. Expand to toggle each tour, see progress, or dismiss all. Re-enabling restarts the current guide. Also restart from Help & About → Start tour. |
| **Vim mode** | Toggle | Off | Full Vim keybindings in the editor. |
| **Spellcheck** | Toggle | On | Hunspell underlines; active only when Harper is off. |
| **Spelling, grammar & style (Harper)** | Toggle | On | Offline [grammar checker](/docs/spellcheck-grammar/). |
| **Regionalism suggestions** | Toggle | On | British vs American flags when Harper is on. |
| **Word-choice suggestions** | Toggle | On | Mix-ups like "too" vs "to" when Harper is on. |
| **Offline mode** | Toggle | Off | Compile with `--only-cached`; no network for the compiler. Blocks [citation lookups](/docs/citations/) that need the network. |

**Reset settings** restores Appearance and General defaults after confirmation.

## Appearance

| Setting | Type | Default | What it does |
|---|---|---|---|
| **Dark mode** | Toggle | Follows OS | Light or dark theme. Also from the rail and ⌘K. |
| **Background pattern** | Select | Dots | Includes a **None** option if you want a flat ground. |
| **Accent color** | Swatches | Blue | Highlight color: Blue, Green, Purple, Rose, Orange, Teal. Also offered on the welcome screen. |
| **Editor font size** | 11 to 20 px | 13px | Code editor text size. |
| **App font size** | 13 to 20 px | 16px | UI chrome scale. |
| **App font** | Select | System | Inter, Helvetica Neue, Segoe UI, Georgia, or system. |
| **Editor font** | Select | System | JetBrains Mono, Fira Code, Cascadia Code, SF Mono, Menlo, Consolas, or system. |
| **Open projects in** | Select | Split view | Split, Editor only, or PDF only. |
| **Show file tree on open** | Toggle | On | Reveal the Source Tree when a project opens. |
| **Preview PDF on hover** | Toggle | On | Library [hover previews](/docs/library/#hover-previews). |

## Dictionary

Words you told the [spellchecker](/docs/spellcheck-grammar/#fixing-and-ignoring) to ignore, grouped as **This project** and **All projects**. Remove a chip to flag that word again.

## Data Storage

Shows where the library lives (`~/.oleafly/projects`) and explains the local-first layout. Cloud sync is listed as coming soon. Full story: [Where your data lives](/docs/where-your-data-lives/).

## AI Assistant

Three tabs:

- **Providers and keys**: built-in providers (including Gemini and Perplexity), custom OpenAI-compatible endpoints, Ollama, live key validation, per-provider model lists, and Connected badges.
- **Instructions**: custom instructions, default chat model, tools catalog, PDF page capture toggle.
- **Personas**: named, colored instruction presets switched from chat.

Full walkthrough: [Set up AI](/docs/ai-setup/). Chat behavior: [Chat & tools](/docs/ai-chat/).

## LaTeX Engine

Tagged/accessible export engine: system LuaLaTeX detection, **Install TinyTeX**, and `tlmgr` with tagging badges. See [LaTeX engines & packages](/docs/latex-engines/).

## Downloads

On-demand assets that keep the base app small:

- **Font packs** for richer [templates](/docs/templates/#on-demand-fonts-the-setup-badge).
- **Template packs**: downloadable [template](/docs/templates/#downloadable-template-packs) packs for offline use.
- **AI-generated templates**: manage templates you generated and saved to the gallery (view and delete).

## Integrations

Three tabs. Project publish/push/pull lives in the Source Control panel and Publish dialog, not as global per-project remote editors here.

- **GitHub**: device flow or personal access token. Account connection for [GitHub sync](/docs/github-sync/).
- **alphaXiv**: API key for the assistant's alphaXiv paper tools.
- **Zotero**: user ID and API key to pull citations from your Zotero library into the project workflow. Keys stay encrypted locally like other secrets.

## Keyboard Shortcuts

Searchable shortcut reference. Record replacements for selected app actions (Recompile, Command palette, and others listed in the UI). Editor-native shortcuts stay with the editor. See [Keyboard shortcuts](/docs/keyboard-shortcuts/).

## MCP

Turn Oleafly into a local MCP server for Claude Desktop, Claude Code, Cursor, Grok, **Codex CLI**, and similar clients. **Enable MCP server**, port, bearer token, copy-paste snippets (including Codex), **approval policy**, and **Read-only mode** live here. Details: [Connect via MCP](/docs/mcp/).

## Help & About

- Version info and **Check for updates** ([Updates](/docs/updates/)).
- **Copy Info** (version and system details for bug reports).
- Resources: Start tour, **Documentation**, **Learn** ([oleafly.com/learn](https://oleafly.com/learn/)), Report a bug, Report a crash, What's new, License.

## Where settings live

App preferences are per-machine. Project name, main document, cover color, and similar sit in each project's `project.json`, so they travel with the folder.
