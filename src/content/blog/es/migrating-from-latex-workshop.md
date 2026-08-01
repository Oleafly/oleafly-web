---
title: "Beyond LaTeX Workshop: un editor de investigación en tu máquina"
description: "Un editor de investigación especialmente diseñado con inteligencia para todo el proyecto, SyncTeX, revisión fuera de línea, compiladores incluidos, Git real y citas. VS Code + LaTeX Workshop todavía posee recetas, control remoto y el mercado de extensiones."
date: 2026-07-31
tags: [latex-workshop, migration, local-first, research-workspace, editor]
---

[LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) in VS Code is excellent. Free, MIT, carefully maintained. If your week runs on free-form compile recipes, texdoc, Docker/WSL/remote, Live Share, or the full extension marketplace, keep that stack. It is built for that life.

This post is for when you want a document-first app: multi-file papers, compilers, PDF, Git, citations, figures, and proofreading already wired together. Free and open source (AGPL). LaTeX, Typst, Markdown. Plain folders. No account.

Feature map and shortcuts: [Coming from LaTeX Workshop](https://github.com/Oleafly/Oleafly/blob/main/docs/ComingFromLatexWorkshop.md).

## The editor

CodeMirror 6 with a project-wide index across LaTeX, Typst, Markdown, and BibTeX.

What you actually get day to day:

- Go to definition, find references, rename labels and macros (clash warnings)
- Live checks for broken refs, bad cites, missing includes (`\cref`, `\eqref`, range refs, …)
- Local + project structure views; filter and jump
- Completions for keys, paths, and macros your project defines (`\newcommand`, xparse argument shapes)
- `.tex`, `.ltx`, `.sty`, `.cls` support; argument snippets; environment checks
- TexLab for LaTeX (opt-in setup); Tinymist ships for Typst
- Unified diagnostics: syntax, compile, language service, refs, cites, spelling, grammar
- Live KaTeX math previews; source stays editable
- Harper + Hunspell offline on prose only (commands and math masked)
- Visual mode for common structures; Vim; slash commands; multi-file tabs
- Package-aware command completion from a large corpus lands next (LaTeX Workshop’s MIT data, vendored with attribution)

PDF workspace: continuous scroll, spreads, search, outline, detachable window. Bidirectional SyncTeX across chapter files. Mapping still works while a rebuild is pending. Last good PDF stays up. Undo to the compiled source set and the preview can go current without a full recompile.

Book-scale CI: ~6,200-line manuscript, multi-family math, chapters, cites, proofreading, performance budgets on scroll/type/paste/undo/complete/recompile/SyncTeX.

LaTeX Workshop is a strong extension in a general IDE. Oleafly ships this document loop already assembled, so you are not wiring the same stack from settings and marketplace picks every semester.

## Compilers in the app

Tectonic (LaTeX) and Typst ship with the app. Markdown via managed Pandoc when you need it. First compile caches packages; after that, cached builds work offline. Offline mode can lock the compiler to the cache.

Auto-compile (debounced, cancellable, latest wins). `Cmd/Ctrl-Enter` recompile. Stop button. Humanized error cards on the line. Last good PDF while a newer build runs.

Recipes, latexmk chains, shell-escape, and custom `.latexmkrc` stay in LaTeX Workshop’s wheelhouse. Most papers and theses only need a reliable supervised engine.

Templates: 23 bundled starters (IEEE, ACM, Elsevier, Beamer, thesis, resumes, Typst blanks, …) plus 99 in downloadable packs. Save any project as a template. Optional AI template generation when a model is set up.

## Library, Git, research tools

Projects as books: cover color, engine badge, fork lineage, hover preview of the last PDF page, bookmarks, `/docs` search into every document. Fork keeps full Git history for a risky rewrite beside the submission copy.

Real Git from day one. Staging, side-by-side diffs (working tree editable), discard, restore. Automatic checkpoints after successful compiles and idle edits; AI runs checkpoint before the first write. GitHub optional (PAT or device-flow OAuth). Terminal `git log` matches the app.

Paste DOI / arXiv / title → dedupe → `.bib` → `\cite`. Batch import BibTeX, RIS, EndNote, Zotero RDF. Citation Search across arXiv, Semantic Scholar, Crossref, PubMed, OpenAlex. Diagram Composer to editable TikZ. Validator, tables, equations, lab search, deadlines, PDF-to-LaTeX, image-to-LaTeX with a vision model.

## Optional AI

Off until you configure it. OpenAI, Anthropic, Z.AI, Groq, OpenRouter, DeepSeek, Mistral, xAI, Ollama. Keys encrypted on disk. Requests go to the provider you chose.

The assistant edits, compiles, reads logs, extracts PDF text, searches literature, keeps plans. Writes are approval diffs. Deletes need a separate confirm. Inline Ask-AI on a selection. Loopback MCP for Claude Code, Cursor, and friends. With AI off, the editor, compile, Git, and citations still work.

## Preflight, export, privacy

Preflight: structure, undefined refs, duplicate labels, parser-style extraction preview, screen-reader-oriented findings. Each risk flag comes with enough context that you can check it yourself instead of trusting a black-box score.

Export: PDF always; DOCX/HTML/Markdown when Pandoc is available; PowerPoint for decks; EPUB for books; source ZIP for handoff.

No Oleafly account. No product telemetry. Crash reports open a prefilled GitHub issue you review. Network for packages, templates, hosted AI, citations, updates, GitHub. Editing, cached compile, grammar, spellcheck, and local Git work offline.

## When LaTeX Workshop still fits

- Free-form recipes, latexmk, shell-escape, `.latexmkrc`
- texdoc in the editor
- Docker, WSL, remote development
- Live Share and live multi-user editing
- Living inside the VS Code marketplace for non-document work

Oleafly is public beta. Heavy publisher class files can still trip Tectonic; report them.

## Try it

1. Download from the
   [releases page](https://github.com/Oleafly/Oleafly/releases/latest)
   (macOS signed/notarized; Windows may SmartScreen once).
2. Import your `.tex`, `.bib`, and figures (or start from a template).
3. Compile once, then write on a real paper for a day.

Keep VS Code installed. Same files work in either app. If a day on a real paper goes better in Oleafly, move more projects over; if recipes and remote still win for a given tree, leave that tree in Workshop.
