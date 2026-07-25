---
title: "A week of writing in Oleafly"
description: "Library, templates, compile, SyncTeX, citations, Git history, optional AI."
category: "local-studio"
order: 6
level: "beginner"
tags: ["oleafly", "workflow"]
featured: true
updated: 2026-07-25
---

# A week of writing in Oleafly

This is what a paper actually looks like day to day in Oleafly, from empty project to a draft you could send to a coauthor. The app needs no account and no server: a project is a folder of `.tex`, `.bib`, and figure files on your disk, and everything below operates on that folder.

## Day one: start from a template

Create a project in the Library, either blank or from a [template](/templates/) for common formats such as IEEE and ACM papers or a thesis skeleton. A template gives you a compiling document immediately, with the class options and preamble already sensible, which beats assembling a preamble line by line on day one. Press compile once to confirm you get a PDF before writing anything.

## Midweek: the write-compile loop

Most of the week is a loop between the editor and the PDF pane. The editor autocompletes commands, environments, and the labels and citation keys that exist in your project, and slash commands insert larger structures such as figures and tables without you memorizing their boilerplate. Compile often, because a fresh error in text you wrote two minutes ago is easy to place, while an error surfacing after an afternoon of changes is not. SyncTeX ties the two panes together: click a paragraph in the PDF to jump to its source line, or jump from source to PDF, which matters most when revising specific pages of a long document.

## Citations as you go

Keep a `.bib` file in the project and cite with `\cite{...}` as you write, letting autocomplete supply the keys. Adding references at writing time is cheap; reconstructing three weeks of "citation needed" placeholders is not. If entries come from Zotero or a publisher's export, the [BibTeX validator](/tools/bibtex-validator/) catches missing fields before they surface as odd-looking references. The full pipeline is described in [From .bib key to in-text cite](/learn/add-citations/).

## History without ceremony

Oleafly can record a Git commit automatically after each successful compile, so the week leaves behind a timeline of working states you can inspect or roll back to. When the draft is worth sharing, push the folder to a private GitHub repository; [Put the paper on GitHub](/learn/sync-with-github/) shows the setup.

## Optional: the assistant

If you add an API key for a hosted provider, or point the app at local Ollama, an assistant can answer questions about your project, propose edits behind approval diffs, and compile to check its own work. It is genuinely optional; every step above works without it. Details are in [Assistant inside Oleafly](/learn/oleafly-ai/), and the broader design intent behind the app is in [Getting started](/docs/getting-started/) and [Philosophy](/docs/philosophy/).
