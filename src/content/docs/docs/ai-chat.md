---
title: "Chat & tools"
description: "Use the project-aware AI agent to read, edit, compile, inspect logs, and verify PDFs with approval controls."
---

The chat panel is the sparkles tab in the left rail. Ask it to fix LaTeX errors and it can compile, read the log, propose an edit, recompile, and report back. File changes pause for your approval first.

<video src="https://cdn.oleafly.com/videos/ai-fix.mp4" autoplay loop muted playsinline aria-label="The assistant finds and fixes a LaTeX error"></video>

## Asking

Type in the composer. Enter sends, while Shift+Enter adds a new line. You can also start from a suggestion chip such as "Fix any LaTeX errors in my document". The header shows the current model. Click it to switch to another [configured provider or model](/docs/ai-setup/) during the conversation.

## What the assistant can do

The agent has 25 file, build, research, memory, and figure tools. Its core tools are listed below.

| Tool | What it does |
|---|---|
| `read_file` | Read any project file |
| `list_files` | List the project tree |
| `search_project` | Search text across the project |
| `project_map` | The structural map: outline, labels, citations, macros, file graph, unresolved refs |
| `write_file` | Write a whole file (approval required) |
| `replace_in_file` | Targeted find-and-replace edits (approval required) |
| `create_file` | Create a file or folder (approval required) |
| `rename_file` | Rename or move (approval required) |
| `delete_file` | Delete (approval required) |
| `compile` | Build the project and report errors |
| `get_log` | Read the full compile log |
| `get_pdf_text` | Extract the compiled PDF's text to verify output |
| `verify_pdf_pages` | Rasterize chosen PDF pages and actually look at them, a vision check of the rendered layout (needs a vision model and the **Allow PDF page capture** toggle in Settings → AI) |
| `set_main_doc` | Change the compile entry point |
| `toggle_theme` | Flip light/dark mode |

Plan and memory tools keep long jobs organized:

| Tool | What it does |
|---|---|
| `update_todos` / `get_todos` | Maintain the plan checklist rendered in the panel |
| `remember_note` / `list_notes` / `forget_note` | Sticky per-project notes that survive new chats and restarts |

Research tools reach outside the project (network required):

| Tool | What it does |
|---|---|
| `literature_search` | Search the OpenAlex scholarly index in natural language |
| `verify_citation` | Check a DOI or title against Crossref and return the metadata |
| `alphaxiv_search` / `alphaxiv_paper_content` | Search alphaXiv and fetch full paper content (needs an alphaXiv API key, Settings, Integrations) |

Figure mode uses `preview_figure`, `insert_figure`, and `load_image`. See [Draw figures with AI](/docs/ai-figures/). Treat research results as leads. You still need to check that a paper supports the sentence you cite it for.

Tool calls appear in the chat as chips. Click a chip to expand its output.

## You approve every change

Any file-changing tool pauses the run and shows an approval card with the tool name, requested action, and red or green diff. You can **Approve**, **Reject**, or **Always allow** writes for the rest of the session. The tool chip records your choice. Session approval covers non-delete writes only. `delete_file` always asks.

![The approval card: a diff you approve or reject](https://cdn.oleafly.com/images/screenshots/desktop/ai-approval-diff.png)

Two more layers of safety back this up:

- Before its first edit of a run, the assistant commits an "Oleafly AI checkpoint" to your project's Git, so even approved changes can be rolled back wholesale from [history](/docs/git-history/).
- Runs cap at 50 steps, so a confused agent can't loop forever.

## Plans, progress, and cost

For a multi-step job, the assistant shows its progress:

- **A plan checklist.** When it breaks a task into steps, a todo list renders in the panel and ticks off items as it goes, so you can see what it intends to do and where it is.
- **A running cost meter.** Every reply shows input and output token counts and an estimated cost for the selected model. Provider pricing can change, so treat the amount as an estimate.
- **Sticky memory.** The agent can jot short notes to itself ("the résumé uses `moderncv`", "the intro still needs a citation"). They persist per project across new chats and app restarts, so it doesn't re-learn your document every time.

## Float it over the editor

The assistant doesn't have to stay in the rail. **Float the assistant** pops it out into a draggable, resizable card over the editor: drag it by the header, resize from the corner, and it stays put across view switches and restarts. **Dock it back** returns it to the rail. There's only ever one live conversation, floated or docked, so nothing desyncs when you move it.

## Handing off from an inline edit

Start a quick change with an [inline AI edit](/docs/ai-inline-edit/) and then decide it needs the full agent? Hand it off, and your instruction lands in the chat composer with the context carried over, ready to send.

## Attachments

The paperclip attaches up to 6 files (10 MB each): images go to vision-capable models, and PDFs, `.tex`, `.bib`, text, and Markdown ride along as documents. Handy for "make my resume look like this screenshot" or "summarize this reference PDF". Only names and types are kept in history, never the bytes.

## Reasoning models

Some models return a separate reasoning stream. Oleafly shows provider-supplied reasoning content in a collapsible **Thinking** block when the provider makes it available. Other models may return only the final answer.

## Long-running answers

Streaming shows tokens as they arrive, with a status shimmer ("Running compile…"). The send button becomes **Stop** during a run. If a provider stalls, a watchdog tells you at 20 seconds and aborts at 90 rather than hanging. Errors come back as plain guidance: an invalid key points you to Settings, an empty balance says so, a rate limit suggests waiting or switching models.

## Chats are kept, locally

The **+** button starts a new chat. The clock opens local history, which keeps up to 50 chats per project. You can search titles or delete individual chats. A chat from before a project rollback gets an "older version" badge. Hover over a message to copy it.

## What the assistant knows

Each run starts with bounded context: the project identity and engine, active file and selection, file tree, compile state, diagnostics, relevant source excerpts, notes, plan, and recent conversation. It reads anything else through tools and uses `project_map` for document structure. Your [custom instructions](/docs/ai-setup/#instructions) are included with each request. Hosted providers receive the selected context. With a local Ollama model, it stays on your machine.

## Figures are their own mode

The sparkles toggle in the chat header switches to the figure studio, where the assistant drafts TikZ, compiles it in isolation, and inspects the render. That flow has its own page: [Draw figures with AI](/docs/ai-figures/). For quick selection rewrites without a conversation, see [Inline edits](/docs/ai-inline-edit/).
