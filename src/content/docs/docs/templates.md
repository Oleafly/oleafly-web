---
title: "Templates"
description: "The template gallery: 23 ready-to-edit starting points from ATS-safe resumes to IEEE papers, theses, Beamer decks, and posters, plus 99 downloadable templates in 11 packs."
---

Every Oleafly project starts from a template. The gallery gives you a real page-one preview of each one, so you pick by looking at the output, not by guessing from a name. Templates ship as plain, editable source, LaTeX, Typst, or Markdown depending on the template: what you create is yours.

![The template gallery with category rail, search, and page-one previews](https://cdn.oleafly.com/images/screenshots/desktop/project-templates.png)

## The gallery

Click **New project** in the library (or type `/create` in the search omnibar) and the two-step dialog opens:

1. **Choose a template.** Browse by category in the left rail, type in the **Search templates** box, or narrow the grid with the filters: **ATS-friendly** shows only resume templates that parse cleanly, the engine filter picks LaTeX, Typst, or Markdown, and **Offline** shows templates whose assets are already on your machine. Every card shows a preview of the compiled first page.
2. **Name your project.** You'll see the template's full details: its preview, category, an **ATS-friendly** or **Design-forward** badge for resumes, the compile engine, and its license and author. Pick a project name (each template suggests a sensible placeholder) and a cover color, then hit **Create project**.

## The catalog

| Template | Category | What you get |
|---|---|---|
| **Blank document** | Blank | A minimal LaTeX article to start from scratch. |
| **Blank Typst document** | Blank | A minimal Typst document, compiled with the bundled Typst engine. |
| **Blank Markdown document** | Blank | A Pandoc Markdown document with YAML metadata. |
| **Diagram / Figure** | Diagrams | A standalone TikZ figure project; previews as an image and pairs with the [diagram composer](/docs/figures-diagrams/). |
| **ATS Resume** | Resume | Single-column, ATS-friendly resume with clean section rules. |
| **Software Engineer Resume** | Resume | A polished one-page SWE resume, pre-filled as a senior example so you edit instead of invent. |
| **Sidebar Resume** | Resume | Design-forward two-column layout: colored sidebar, photo placeholder, skills on the left, experience on the right. |
| **Modern Resume** | Resume | Single-column ATS-friendly resume set in the Lato typeface. |
| **Typst Resume** | Resume | A clean single-column Typst resume: quick to edit, ATS-friendly, compiled offline with the bundled Typst engine. |
| **IEEE Research Paper** | Journals | Two-column IEEEtran conference paper with figures, tables, equations, and a bibliography. |
| **Academic Article** | Journals | Minimalist single-column research article with abstract and bibliography. |
| **ACM Article** | Journals | The official acmart class: authors, abstract, CCS concepts, references. |
| **Elsevier Article** | Journals | The elsarticle class: affiliations, abstract, keywords, bibliography. |
| **Homework Assignment** | Assignments | Title block, running header, numbered problems with solution space. |
| **Bibliography (natbib)** | Bibliographies | A natbib + BibTeX starter with a sample `.bib` and citation examples. |
| **Thesis / Report** | Theses & Reports | Title page, table of contents, chapters, bibliography. |
| **Typst Report** | Theses & Reports | A structured Typst report with numbered sections, an abstract, and cross-references. |
| **Book** | Books | Parts, chapters, front matter, table of contents. |
| **Beamer Presentation** | Presentations | A beamer deck: title, outline, content frames, closing slide. Exports to PowerPoint too. |
| **Newsletter** | Newsletters | Masthead, lead story, short columns in a two-column layout. |
| **Research Poster** | Posters | A tikzposter scientific poster: title banner, author block, column blocks. |
| **Monthly Calendar** | Calendars | A one-page monthly grid with roomy cells. |
| **Formal Letter** | Letters | Sender and recipient blocks, date, salutation, body, signature. |

That is 23 bundled templates. LaTeX templates compile with the bundled Tectonic engine out of the box, Typst templates with the bundled Typst engine, and Markdown templates through the managed Pandoc path. Each template includes its license text (all permissive).

## Downloadable template packs

The bundled set is deliberately compact. Eleven on-demand packs add 99 more templates across academic writing, Beamer themes, business documents, conference preprint styles, coursework, creative documents, CV and resume styles, lab and technical reports, slides and posters, and journal or conference classes. Install a pack from **Settings, Downloads** and its templates appear in the gallery like any bundled one; remove it later to free space. Pack downloads come from a public catalog, so installing one needs a network connection.

## AI-generated templates

With an [AI provider connected](/docs/ai-setup/), the **Generate a template with AI** button in the gallery takes a description of the document you want, generates the source, compiles a preview, and can save the result as a custom template that lives in the gallery alongside the bundled ones. Treat generated templates as starting points: model output and package compatibility vary, so review before relying on one.

## Resume templates and ATS

The resume templates are split honestly:

- **ATS-friendly** (green badge): ATS Resume, Software Engineer Resume, Modern Resume. Single column, linear reading order, no layout tables, real text. These are built so applicant tracking systems extract everything.
- **Design-forward** (amber badge): Sidebar Resume. It looks striking, and the badge is your heads-up that multi-column layouts can trip strict parsers.

Whichever you pick, run [Preflight](/docs/preflight/) before submitting: it simulates a resume parser against your actual PDF and shows what was extracted.

<video src="https://cdn.oleafly.com/videos/hero-editor.mp4" autoplay loop muted playsinline aria-label="Creating a resume from a template"></video>

## On-demand fonts (the Setup badge)

Templates that use premium open-source typefaces (like the Lato-based Modern Resume) show a small **Setup** badge in the gallery. Creating one triggers a one-time font download with live progress, and the fonts are copied into the project's own `fonts/` folder, so the project stays self-contained and compiles offline from then on.

You can pre-download or remove these font packs anytime in Settings, Downloads. Details in [Settings](/docs/settings/#downloads).

## After creation

The new project opens immediately with the template's structure in the [file tree](/docs/files/): the main document, any `.bib`, and assets. Compile once (**⌘↵** / Ctrl+Enter) and start replacing the sample content with your own. Nothing in a template is locked; it's ordinary LaTeX you can reshape freely.
