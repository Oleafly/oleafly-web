---
title: "Getting started"
description: "From install to your first compiled PDF in about two minutes: create a project from a template, write, compile, jump with SyncTeX, and export."
---

In about two minutes you can have a project open, compiled, and exported as a PDF. Everything runs locally. You do not need an account. Writing and compiling after the first package fetch work offline.

## 1. Install

Download the app for your platform from the [latest release](https://github.com/Oleafly/Oleafly/releases/latest) or the site Download button, then open it. macOS builds are signed and notarized. Windows may still show SmartScreen once. Details: [install guide](/docs/install/#first-launch).

## 2. Create your first project

On a fresh install, **Show me around** on the welcome screen walks the library, creates a real project with you, and continues in the workspace. Settings, AI Assistant, and Diagram Composer each have a guide on first visit. Manage tours under **Settings → General → Enable tour guides**, or restart from **Help & About → Start tour**.

1. On the Library home screen, click **New project**.
2. Browse the template gallery by category, search, or **ATS-friendly**. Good starters:
   - **Blank document**: minimal article.
   - **IEEE Research Paper** (or ACM / similar): conference-style paper with figures and bibliography.
   - **ATS Resume** or **Software Engineer Resume**: single-column resumes for parser-friendly output.
3. Pick a template, name the project, choose a cover color, and **Create project**.

You can also open **Oleafly Tools** from the home dock for PDF-to-LaTeX import, deadlines, and other helpers. The full template catalog is on [Templates](/docs/templates/). Free web lessons: [Learn](/learn/).

## 3. Write and compile

Type in the editor on the left. Press **⌘↵** (Ctrl+Enter on Windows/Linux) to compile. The PDF appears on the right with zoom, page navigation, and single or two-page layouts.

Prefer compile-as-you-type? Open the command palette (**⌘K** / Ctrl+K) and run **Enable auto-compile**. Compiles start about 2.5 seconds after you stop typing.

While you write: type `\` for LaTeX command completion, `/` for the slash insert menu (`/figure`, `/table`, `/section`, `/cite`, `/math`, and more), and **Ctrl+Space** for suggestions. See [Autocomplete & slash commands](/docs/autocomplete/).

## 4. Jump between source and PDF (SyncTeX)

- **Source to PDF:** cursor in the source, **⌘⇧J** (Ctrl+Shift+J). The PDF scrolls and flashes a highlight.
- **PDF to source:** hold **⌘** (Ctrl) and click a word in the PDF. The editor jumps there, including across `\input` files.

More: [SyncTeX](/docs/synctex/).

## 5. Export

Use **Export** (download icon) in the toolbar, then **Export as PDF**. Default PDF uses real selectable text with embedded fonts. The same menu exports a source `.zip`, and Word, HTML, Markdown, and plain text via Pandoc (downloaded on first use). See [Export formats](/docs/export/).

## 6. Where your files live

Every project is a plain folder under `~/.oleafly/projects/` with your `.tex`, `.bib`, images, and a real `.git` repository. Browse, copy, or back them up with any tool. See [Where your data lives](/docs/where-your-data-lives/).

## Keep going

- **Cite something:** paste a DOI or paper title for BibTeX plus `\cite`. [Citations](/docs/citations/)
- **Draw a figure:** diagram composer or AI figures. [Figures & diagrams](/docs/figures-diagrams/)
- **Connect AI:** your key, a custom endpoint, or local Ollama. [Set up AI](/docs/ai-setup/)
- **Check before you submit:** ATS and accessibility Preflight. [Preflight](/docs/preflight/)
- **Local history:** commit in Source Control without GitHub; publish when you want a remote. [Git history](/docs/git-history/), [GitHub sync](/docs/github-sync/)
