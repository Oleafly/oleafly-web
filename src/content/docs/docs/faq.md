---
title: "FAQ & troubleshooting"
description: "Common questions about accounts, offline use, ATS output, compiling, AI providers, GitHub sync, backups, and what to do when something misbehaves."
head:
  - tag: script
    attrs:
      type: application/ld+json
    content: >-
      {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do I need an account to use Oleafly?","acceptedAnswer":{"@type":"Answer","text":"No. Oleafly has no accounts and no login. Install it and write."}},{"@type":"Question","name":"Does Oleafly need the internet?","acceptedAnswer":{"@type":"Answer","text":"Only for explicit actions: fetching a LaTeX package the first time a document uses it, citation and research lookups, cloud AI providers (local Ollama excepted), GitHub sync, update checks, and on-demand downloads such as template packs, fonts, pandoc, and TinyTeX. Writing, cached compilation, spellcheck, grammar, diagrams, and Preflight all run offline."}},{"@type":"Question","name":"Where are my files stored?","acceptedAnswer":{"@type":"Answer","text":"Plain folders under ~/.oleafly/projects/, each with your .tex, .bib, images, and a real .git repo. Back them up, copy them, or open them with other tools freely."}},{"@type":"Question","name":"Is the PDF output ATS-friendly?","acceptedAnswer":{"@type":"Answer","text":"It's built for it: the Tectonic engine emits real selectable Unicode text with embedded subset fonts, and the ATS-badged resume templates follow single-column, linear-reading-order rules. Preflight shows you exactly what a parser extracts from your PDF; no tool can guarantee a specific ATS outcome."}},{"@type":"Question","name":"How is Oleafly different from Overleaf?","acceptedAnswer":{"@type":"Answer","text":"Everything runs on your machine, for free, with your files in real Git repos. Editing and cached compilation work offline."}},{"@type":"Question","name":"Can I run the AI fully offline?","acceptedAnswer":{"@type":"Answer","text":"Yes: install Ollama, pull a local model, and connect it in settings. No key, no cloud."}},{"@type":"Question","name":"Does Oleafly support Typst or Markdown?","acceptedAnswer":{"@type":"Answer","text":"Yes. LaTeX, Typst, and Markdown are all first-class project engines: LaTeX compiles with the bundled Tectonic, Typst with a bundled Typst engine, and Markdown builds to PDF through a managed Pandoc. You pick the engine when creating a project."}},{"@type":"Question","name":"Can I import an existing paper or resume?","acceptedAnswer":{"@type":"Answer","text":"Yes, three ways. The PDF to LaTeX tool reconstructs text-based PDFs into editable LaTeX locally and heuristically, without OCR, so scanned pages don't convert; you review the source before a project is created. DOCX files convert through Pandoc. A photo or screenshot of a document can be transcribed by a vision-capable AI model."}},{"@type":"Question","name":"What can the AI assistant actually do?","acceptedAnswer":{"@type":"Answer","text":"It is a project-aware agent with 25 tools: it reads and edits files (every change pauses for your approval with a diff), compiles, reads logs, extracts and inspects the PDF, searches literature through OpenAlex, Crossref, and alphaXiv, and keeps a plan and per-project notes. It cannot touch files outside the open project, cannot delete without an explicit click, and cannot run shell commands. Output quality depends on the model you connect."}},{"@type":"Question","name":"How many templates does Oleafly ship?","acceptedAnswer":{"@type":"Answer","text":"23 bundled templates, plus 99 more across 11 downloadable packs, plus AI-generated custom templates you keep in the gallery."}},{"@type":"Question","name":"Can Claude Desktop or Cursor control Oleafly?","acceptedAnswer":{"@type":"Answer","text":"Yes. Oleafly runs a local MCP server on 127.0.0.1, exposing the same project tools and approval prompts as the built-in assistant, with no API key needed in Oleafly. Enable it in Settings, MCP."}},{"@type":"Question","name":"Can two people edit a project at the same time?","acceptedAnswer":{"@type":"Answer","text":"No. There is no real-time collaboration or cloud sync; collaboration is Git-based through GitHub push and pull. Every project is a normal Git repository, so standard Git workflows apply."}}]}
---

## General

### Do I need an account?
No. Oleafly has no accounts and no login. Install it and write. See the [Philosophy](/docs/philosophy/).

### Does it need the internet?
Only for explicit actions: fetching a LaTeX package the first time a document uses it, [citation lookups](/docs/citations/) and AI research searches, cloud AI providers (local Ollama excepted), GitHub sync, update checks, and on-demand downloads (template packs, fonts, pandoc, TinyTeX). Writing, compiling (after first fetch), spellcheck, grammar, diagrams, and Preflight all run offline. **Offline mode** (Settings, General) guarantees the compiler never touches the network.

### Does Oleafly support Typst or Markdown, or only LaTeX?
All three are first-class project engines. LaTeX compiles with the bundled Tectonic, Typst with a bundled Typst engine, and Markdown builds to PDF through a managed Pandoc. You pick the engine when you create the project, and the [template gallery](/docs/templates/) has starting points for each. Some features are LaTeX-specific (SyncTeX, the TikZ figure tools), and the interface hides what an engine cannot do.

### How many templates are there?
23 bundled, with real page-one previews, plus 99 more across 11 downloadable packs in Settings, Downloads. You can also generate a custom template with AI and keep it in the gallery. See [Templates](/docs/templates/).

### Where are my files?
Plain folders under `~/.oleafly/projects/`, each with your `.tex`, `.bib`, images, and a real `.git` repo. Back them up, copy them, or open them with other tools freely. See [Where your data lives](/docs/where-your-data-lives/).

### Is the PDF output ATS-friendly?
It's built for it: the Tectonic engine emits real selectable Unicode text with embedded subset fonts, and the ATS-badged resume [templates](/docs/templates/#resume-templates-and-ats) follow single-column, linear-reading-order rules. Then [Preflight](/docs/preflight/) shows you exactly what a parser extracts from your PDF, so you're not taking anyone's word for it. No tool can guarantee how a specific ATS scores you, which is exactly why the extraction preview exists.

### How is this different from Overleaf?
Short answer: everything runs on your machine, for free, with your files in real Git repos, and editing and cached compilation work offline. Long answer with tables: [Why Oleafly](/docs/why-oleafly/).

### Can I import an existing paper or resume?
Three ways:

- **PDF**: the **PDF to LaTeX** tool (home screen, Oleafly Tools) reconstructs text-based PDFs into editable LaTeX. It runs locally and heuristically, without OCR, so scanned pages do not convert, and complex layouts, equations, and tables can need manual repair. You see the generated source before a project is created, and an optional AI pass can refine it.
- **Word**: `.docx` files convert through the managed Pandoc into a normal project.
- **A photo or screenshot**: a connected vision-capable model can transcribe it into LaTeX for your review.

### Can two people edit at the same time?
No. There is no real-time collaboration and no cloud sync; collaboration is Git-based: [publish to GitHub](/docs/github-sync/), then push and pull. Because every project is a normal Git repository, standard Git workflows (branches, PRs, review) work outside the app too.

## Install

### macOS says the app is damaged or can't be checked
The builds aren't notarized yet. Right-click the app and choose **Open**, or clear the quarantine flag once; the exact commands are in the [install guide](/docs/install/#first-launch).

### Windows SmartScreen blocks it
Click **More info**, then **Run anyway**. Same cause: unsigned builds, on the roadmap.

### Which Linux distributions work?
Anything 2024-era or newer (glibc 2.39+): Ubuntu 24.04+, Fedora 40+, Debian 13+. AppImage, deb, and rpm are all published.

## Compiling

### My first compile is slow
That's the one-time package fetch: Tectonic downloads what your document needs and caches it. Every compile after that is fast and offline. See [Compiling](/docs/compiling/#packages-fetched-once-cached-forever).

### A package is missing and the compile errors out
If Offline mode is on, turn it off for one compile so the package can be fetched and cached, then turn it back on.

### The compile succeeded but with warnings. Do I care?
You still got a PDF (the amber chip tells you). Click **Logs** to read them; undefined references and citations are the warnings most worth fixing, and [Preflight](/docs/preflight/#references--assets) pinpoints those precisely.

### An error I don't understand
Open **Logs** for the parsed error list, or just ask the AI: "fix the LaTeX errors" runs a compile-read-fix-verify loop with your approval on every change.

### Word/HTML/Markdown export needs pandoc?
Yes, and Oleafly downloads it for you automatically on first use. No manual install. See [Export formats](/docs/export/).

## AI assistant

### Which providers work?
OpenAI, Anthropic, Z.AI (GLM), Groq, OpenRouter, DeepSeek, Mistral, xAI, and Ollama for fully local models. Models and setup: [Set up AI](/docs/ai-setup/).

### The AI says it has no key / errors on send
Open Settings, AI Assistant and check that a provider has a saved key and the green **Active** badge. The error messages themselves usually say what's wrong: invalid key, empty balance, or rate limit.

### Can I run it fully offline?
Yes: install Ollama, `ollama pull llama3.2`, then **Check for Ollama** in settings. No key, no cloud.

### Can the AI change my files without asking?
No. Every file-changing tool pauses for your approval with a diff, and the assistant checkpoints your project in Git before its first edit. "Always allow" is session-only and never covers deletes. See [Chat & tools](/docs/ai-chat/#you-approve-every-change).

### What can the AI actually do, and what can't it?
It is a project-aware agent with 25 tools: read and edit files (approval-gated), compile, read the log, extract PDF text, look at rendered pages with a vision model, search literature through OpenAlex, Crossref, and alphaXiv, and keep a plan checklist and sticky per-project notes. It cannot touch files outside the open project, cannot delete anything without an explicit click, and cannot run shell commands. And it is only as good as the model you connect: research results and generated citations still need your verification.

### Can Claude Desktop, Claude Code, or Cursor drive Oleafly?
Yes. Oleafly can run a local MCP server (`127.0.0.1` only) that exposes the same tools and approval prompts as the built-in assistant, with no API key needed in Oleafly; the external client brings its own model. Enable it in Settings, MCP. See [Connect via MCP](/docs/mcp/).

## GitHub sync

### I don't see a device code when connecting
Try again in a moment, or use the PAT route under "Advanced: use a personal access token" in Settings, Integrations, GitHub.

### Push fails with "No remote 'origin'"
Publish the project first (Source Control, **Publish to GitHub**). Push and Pull need a remote to exist.

### Push says the remote has commits
Pull first, then push. The ahead/behind indicator next to the branch pill warns you before this happens.

### Can I sync across two computers?
Yes: push on one, pull on the other. The workflow is spelled out in [GitHub sync](/docs/github-sync/#two-computers).

### A pull hit a merge conflict
Oleafly shows the raw Git message and leaves resolution to you: fix it with any Git tool (the project is a normal repo), then keep working in the app.

## Data & backups

### How do I back everything up?
Add `~/.oleafly/projects/` to your normal backup, export a `.zip` per project, or push to GitHub. All three, ideally. See [Where your data lives](/docs/where-your-data-lives/#backing-up).

### I deleted a project. Can I get it back?
Deleting removes the folder from disk, so: from your backup or from GitHub if you pushed it. Files deleted *inside* a project can come back via [Git history](/docs/git-history/#history-and-restore) if they were ever committed.

### Can I edit project files with another editor?
Yes, they're plain files. Do it while the project is closed in Oleafly (or reopen it afterward), so the app's autosave doesn't overwrite your external changes with what it had in memory.

## Still stuck?

- Search the [issues](https://github.com/Oleafly/Oleafly/issues).
- The app logs errors to `~/.oleafly/app.log`; include the relevant snippet in a report.
- Open a [new issue](https://github.com/Oleafly/Oleafly/issues/new) with steps to reproduce and your OS.
