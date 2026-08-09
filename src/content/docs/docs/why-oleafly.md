---
title: "Why Oleafly"
description: "How Oleafly compares to Overleaf, VS Code with LaTeX Workshop, TeXstudio, and word processors, and when each is the right choice."
---

There are many ways to produce a LaTeX document. This page is an honest map of where Oleafly sits among them, what it does better, and what it deliberately does not try to be.

The short version: Oleafly is a local-first workspace for research papers, technical documents, and resumes. It pairs the polish of a cloud LaTeX service with files on your disk, and packs ATS and accessibility Preflight, an approval-gated AI agent (your keys or local models), DOI-to-`\cite` lookup, Zotero and research connectors, and a visual TikZ composer into one app.

## vs Overleaf

Overleaf is the reference cloud LaTeX editor, and it is excellent at real-time multi-user collaboration. Oleafly is what you reach for when the cloud is the problem rather than the solution.

| | Oleafly | Overleaf |
|---|---|---|
| Where your files live | Your disk, plain folder + Git repo | Their servers |
| Works offline | Yes: editing always, compiles with cached packages, strict Offline mode | No |
| Compile | Local, no queue, your hardware | Server-side, time limits on free tier |
| Account required | None | Yes |
| Price | Free, open source (AGPL) | Free tier + subscriptions |
| Version history | Full Git history, free | Limited on free tier |
| GitHub sync | Built in, free | Paid feature |
| AI | Your keys, custom endpoints, or local Ollama | Their AI assistant, paid tiers |
| Real-time multi-user editing | No | Yes, its core strength |
| ATS / accessibility preflight | Built in | No |

If your daily reality is "three co-authors typing in the same paragraph," Overleaf remains the right tool, and because Oleafly projects are Git repos, using both (Oleafly locally, Overleaf's Git bridge remotely) is practical.

## vs VS Code + LaTeX Workshop

The VS Code route is powerful and endlessly configurable, but you assemble it yourself: a TeX distribution (TeX Live or MiKTeX, often several gigabytes), the extension, a PDF viewer, latexmk configuration, and your own bibliography tooling.

Oleafly gives you the parts that setup never quite delivers, with zero configuration:

- The default compiler ships with the app, and packages download as needed. You can add a system TeX distribution only when a project requires it.
- Citation lookup that turns a DOI or title into a deduplicated BibTeX entry and a `\cite` at your cursor.
- A visual diagram composer that generates editable TikZ, plus AI figure generation.
- Preflight checks for resume parsers and screen readers.
- An AI assistant with project tools, approval gates, and a chat interface.
- Project-wide rename, go to definition, and hover cards tuned specifically for LaTeX labels, citations, and macros.

If you live in VS Code for code and want your thesis in the same keybindings with heavy customization, LaTeX Workshop is a fine choice. Oleafly even meets you halfway: Vim mode is one toggle away.

## vs TeXstudio / TeXmaker

TeXstudio and TeXmaker are capable, mature desktop editors. Like the VS Code route, they require you to install and maintain a TeX distribution separately, and their interaction model has aged: dialog-heavy configuration, no integrated version control, no AI, and no template gallery.

Oleafly combines bundled Tectonic, optional `latexmk`, first-class Typst and Markdown projects, templates, Git history, GitHub sync, citation lookup, and code intelligence in one desktop app.

## vs Word, Google Docs, and resume builders

For resumes specifically, word processors and web resume builders have two chronic problems: layout drift (the file looks different on someone else's machine) and ATS damage (columns, tables, text boxes, and icon fonts that silently destroy what a parser extracts).

Oleafly's answer:

- LaTeX output is deterministic. The PDF is the PDF.
- The compiler emits real selectable Unicode text with embedded fonts, which is what parsers need.
- The ATS-friendly resume templates follow single-column, linear-reading-order rules.
- [Preflight](/docs/preflight/) shows you the parsed result: name, email, phone, links, and which sections an ATS actually detected in your PDF.

For long-form academic writing, the comparison barely needs making: numbered references, cross-references, equations, and journal classes are what LaTeX exists for.

## What Oleafly does not do (yet)

Honesty cuts both ways:

- **No real-time multi-user editing.** Collaboration today is Git-based: push, pull, branch, review. Cloud sync is on the roadmap.
- **No in-app merge conflict resolver.** Conflicts appear as Git output. Resolve them with another Git tool.
- **English-only spellcheck and grammar** for now (desktop app).

The **website** is separate: oleafly.com is available in **18 languages** (English default, plus zh-cn, zh-tw, ja, ko, es, pt-br, fr, de, hi, it, nl, pl, ru, uk, tr, ar, vi) with flag + locale codes in the switcher. Details: [Overview → Website languages](/docs/overview/#website-languages).

If one of these is your hard requirement, the comparisons above should help you pick the right tool. For everything else, [get started](/docs/getting-started/): the download is free and the first PDF takes about two minutes.
