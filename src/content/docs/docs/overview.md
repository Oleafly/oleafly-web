---
title: "Overview"
description: "Oleafly is a free, local-first workspace for research papers, technical documents, and resumes on macOS, Windows, and Linux. Write, compile, check, and ship PDFs on your own machine."
---

Oleafly is a free, local-first workspace for research papers, technical documents, and resumes on macOS, Windows, and Linux. You get a full writing and compile loop on your machine: no account, no subscription, no upload required to produce a PDF.

Write on the left, preview on the right. Citations, Preflight checks, diagrams, Git history, and an approval-gated AI assistant sit in the same app.

![Oleafly: the editor on the left, the compiled PDF on the right](/media/hero-editor.png)

## Who it's for

- **Researchers and academics** writing papers for IEEE, ACM, Elsevier, and similar venues, with bibliography management, cross-file navigation, and SyncTeX.
- **Students and PhD candidates** writing theses, reports, homework, and Beamer talks.
- **Engineers and technical writers** shipping long-form docs, diagrams, and exports beyond PDF.
- **Job seekers** building resumes that survive applicant tracking systems, with ATS-minded templates and a Preflight panel that shows what a parser extracts.
- **Anyone who wants typeset documents** without babysitting a multi-gigabyte TeX tree: books, posters, newsletters, letters, and figures are a template away.

## What you get

### A complete document environment, zero TeX setup

The LaTeX compiler ([Tectonic](/docs/compiling/), XeTeX-based) ships inside the app. Packages download the first time you use them and stay cached, so writing and cached compiles work offline.

LaTeX is not the only engine: **Typst** projects use a bundled Typst compiler, and **Markdown** projects build to PDF through managed Pandoc. One workspace covers all three.

### A serious editor

CodeMirror 6 with LaTeX-aware [autocomplete and slash commands](/docs/autocomplete/), a formatting [toolbar](/docs/editor/), find and replace with regex, code folding, Vim mode, and offline [spelling and grammar](/docs/spellcheck-grammar/) that skips commands and math. Projects can use a **Code / Visual** toggle where a rich view is available.

### Code intelligence across the project

Go to definition, find references, and project-wide rename for labels, citations, and macros. Hover a `\ref` or `\cite` to see the target. The [project index](/docs/code-intelligence/) follows your `\input` graph across files.

### Live PDF preview with SyncTeX

A virtualized [PDF preview](/docs/pdf-preview/) with zoom, spreads, a detached window, and bidirectional [SyncTeX](/docs/synctex/): jump from the cursor into the PDF, or Cmd/Ctrl-click a word in the PDF to land on it in the source.

### Citations without copy-paste archaeology

Paste a DOI, arXiv id, or paper title. Oleafly fetches BibTeX, deduplicates against your `.bib`, and inserts `\cite` at the cursor. [Citation lookup](/docs/citations/) talks to doi.org, arXiv, and Crossref. Optional [Zotero](/docs/settings/#integrations) and alphaXiv hooks live under Integrations.

### Figures, drawn or generated

A [diagram composer](/docs/figures-diagrams/) with canvas and TikZ code, live preview, and round-trip editing. Or [draw with AI](/docs/ai-figures/): describe a figure, refine it against compile (and vision when available), then insert editable LaTeX.

### Preflight: ATS and accessibility

Before you submit, [Preflight](/docs/preflight/) scores resume-parser and screen-reader readiness, shows what an ATS extracts, flags undefined refs and duplicate labels, and can prepare tagged export flows.

### Research helpers in the app

From the home dock, **Oleafly Tools** includes a BibTeX validator, table generator, equation preview, academic lab search, PDF-to-LaTeX import, and a **conference deadlines** board. Many of the same surfaces also exist on [oleafly.com/tools](https://oleafly.com/tools/) and [oleafly.com/deadlines](https://oleafly.com/deadlines/).

### An AI assistant that does real work

Bring your own key from the built-in providers, add a custom OpenAI-compatible endpoint, or run [Ollama](/docs/ai-setup/) fully local. The [assistant](/docs/ai-chat/) reads the project, edits with red/green approval diffs, compiles, reads logs, and can search literature. Personas and a default model live in Settings.

### Your history, in real Git

Every project is a plain folder with a real Git repo. Stage, commit, diff, and restore from [Source Control](/docs/git-history/) with no GitHub account required. [Push and pull](/docs/github-sync/) when you want an off-machine remote.

### Export where the document has to go

PDF always, plus Word, HTML, Markdown, plain text via Pandoc (fetched on demand), PowerPoint for Beamer, and EPUB for books. See [Export formats](/docs/export/).

## Where everything lives

Projects sit under `~/.oleafly/projects/` as ordinary folders: `.tex`, `.bib`, images, `.git`. No proprietary lock-in. See [Where your data lives](/docs/where-your-data-lives/).

## Start here

1. [Download and install](/docs/install/) for your platform.
2. [Getting started](/docs/getting-started/): first project to first PDF in a couple of minutes.
3. Browse [templates](/docs/templates/), or walk the free [Learn](/learn/) curriculum on the web.

How Oleafly compares to Overleaf, VS Code, and TeXstudio: [Why Oleafly](/docs/why-oleafly/). Design principles: [Philosophy](/docs/philosophy/).
