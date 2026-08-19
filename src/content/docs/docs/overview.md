---
title: "Overview"
description: "Oleafly is a free, local-first workspace for research papers, technical documents, and resumes on macOS, Windows, and Linux. Write, compile, check, and ship PDFs on your own machine."
---

Oleafly is a free, local-first workspace for research papers, technical documents, and resumes on macOS, Windows, and Linux. You get a full writing and compile loop on your machine: no account, no subscription, no upload required to produce a PDF.

Write on the left, preview on the right. Citations, Preflight checks, diagrams, Git history, and an approval-gated AI assistant sit in the same app.

![Oleafly: the editor on the left, the compiled PDF on the right](https://cdn.oleafly.com/images/screenshots/desktop/hero-editor.png)

## Who it's for

- **Researchers and academics** writing papers for IEEE, ACM, Elsevier, and similar venues, with bibliography management, cross-file navigation, and SyncTeX.
- **Students and PhD candidates** writing theses, reports, homework, and Beamer talks.
- **Engineers and technical writers** shipping long-form docs, diagrams, and exports beyond PDF.
- **Job seekers** building resumes that survive applicant tracking systems, with ATS-minded templates and a Preflight panel that shows what a parser extracts.
- **Anyone who wants typeset documents** without babysitting a multi-gigabyte TeX tree: books, posters, newsletters, letters, and figures are a template away.

## What you get

### A complete document environment, zero TeX setup

The default LaTeX compiler, [Tectonic](/docs/compiling/), ships with the app. Packages download when a document first needs them and stay cached for later offline use. Projects that need an Overleaf-style toolchain can use `latexmk` with pdfLaTeX, XeLaTeX, or LuaLaTeX.

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

### Preflight before submission

Before you submit, [Preflight](/docs/preflight/) checks compile and layout quality, publisher profiles, ATS parsing, accessibility, references, and privacy for blind review. It separates verified findings from advice, shows the text a machine can extract, and can prepare a tagged export flow.

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

## Website languages

[oleafly.com](https://oleafly.com/) is available in **18 languages**. English is the default at the root URL. Every other language uses a locale prefix, such as `/zh-cn/`, `/ja/`, or `/es/`. The header language switcher lists each option with a **flag and native name**.

| Flag | Code | Language | Home |
|:----:|:----:|----------|------|
| 🇺🇸 | `en` | English | [oleafly.com](https://oleafly.com/) |
| 🇨🇳 | `zh-cn` | 简体中文 | [/zh-cn/](https://oleafly.com/zh-cn/) |
| 🇹🇼 | `zh-tw` | 繁體中文 | [/zh-tw/](https://oleafly.com/zh-tw/) |
| 🇯🇵 | `ja` | 日本語 | [/ja/](https://oleafly.com/ja/) |
| 🇰🇷 | `ko` | 한국어 | [/ko/](https://oleafly.com/ko/) |
| 🇪🇸 | `es` | Español | [/es/](https://oleafly.com/es/) |
| 🇧🇷 | `pt-br` | Português (Brasil) | [/pt-br/](https://oleafly.com/pt-br/) |
| 🇫🇷 | `fr` | Français | [/fr/](https://oleafly.com/fr/) |
| 🇩🇪 | `de` | Deutsch | [/de/](https://oleafly.com/de/) |
| 🇮🇳 | `hi` | हिन्दी | [/hi/](https://oleafly.com/hi/) |
| 🇮🇹 | `it` | Italiano | [/it/](https://oleafly.com/it/) |
| 🇳🇱 | `nl` | Nederlands | [/nl/](https://oleafly.com/nl/) |
| 🇵🇱 | `pl` | Polski | [/pl/](https://oleafly.com/pl/) |
| 🇷🇺 | `ru` | Русский | [/ru/](https://oleafly.com/ru/) |
| 🇺🇦 | `uk` | Українська | [/uk/](https://oleafly.com/uk/) |
| 🇹🇷 | `tr` | Türkçe | [/tr/](https://oleafly.com/tr/) |
| 🇸🇦 | `ar` | العربية | [/ar/](https://oleafly.com/ar/) |
| 🇻🇳 | `vi` | Tiếng Việt | [/vi/](https://oleafly.com/vi/) |

Language choice is preference-based (URL, saved switcher choice, or a one-time browser-language banner on `/`). It is **not** hard-locked by geo-IP. Shared deep links keep their language. Learn, blog, templates, tools, and the landing page all follow the same prefixes (for example [Japanese Learn](https://oleafly.com/ja/learn/), [Simplified Chinese blog](https://oleafly.com/zh-cn/blog/)).

The **desktop app** UI language is separate from the website. See [Which languages does the website support?](/docs/faq/#which-languages-does-the-website-support) in the FAQ.

## Start here

1. [Download and install](/docs/install/) for your platform.
2. [Getting started](/docs/getting-started/): first project to first PDF in a couple of minutes.
3. Browse [templates](/docs/templates/), or walk the free [Learn](/learn/) curriculum on the web.

How Oleafly compares to Overleaf, VS Code, and TeXstudio: [Why Oleafly](/docs/why-oleafly/). Design principles: [Philosophy](/docs/philosophy/).
