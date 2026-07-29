---
title: "The research writing toolbox, then and now"
description: "From typewriters and email round-trips to Overleaf, Zotero, Typst, and local-first workspaces."
category: "research-101"
order: 9
level: "beginner"
tags: ["research", "basics", "tools"]
featured: false
updated: 2026-07-25
---

# The research writing toolbox, then and now

Every generation of researchers thinks its tools are permanent. They never are. A quick tour of how papers got written, and what the toolbox looks like today, so you can pick yours deliberately.

## The before times

Into the 1980s, papers were **typed on typewriters**, equations inked in by hand, and mailed to journals. Then came word processors: decades of **Word templates** with fragile numbering, equations pasted as images, and figure layouts that exploded when a paragraph moved. Collaboration meant **emailing files back and forth**: `paper_final_v3_REALLY_FINAL_jw_edits.docx` is not a joke, it is history. LaTeX existed through all of this (see [45 years of TeX](/learn/history-of-tex-latex/)) but you compiled it in a terminal and shared it by email too.

## Today's toolbox

| Tool | Category | What it is good at |
| --- | --- | --- |
| Overleaf | Cloud LaTeX editor | Real-time co-editing in the browser, zero setup |
| TeXstudio / TeXmaker | Local LaTeX IDE | Classic desktop editing, free |
| VS Code + LaTeX Workshop | Local IDE | Powerful if you already live in VS Code |
| Oleafly | Local-first workspace | LaTeX, Typst, and Markdown with compilers bundled |
| Zotero | Reference manager | Collecting, organizing, and exporting citations |
| Google Scholar | Discovery | Searching papers and tracking citations |
| arXiv | Discovery + preprints | Reading the newest work free, see [the preprint world](/learn/what-is-arxiv/) |
| Typst | New typesetting system | Fast, modern documents when no venue demands .tex |

**Discovery** tools find papers, **reference managers** organize what you found, and **editors** turn it all into a PDF. You will end up with one of each.

## Cloud vs local, honestly

**Overleaf** made LaTeX mainstream by removing installation entirely, and its real-time collaborative editing is genuinely its killer feature. If your coauthors want to type in the same document at the same moment, cloud tools like Overleaf are simply better at that today.

**Local-first** tools flip the trade: your files live on your machine as plain files, you can work on a train or behind a hospital firewall, nothing depends on a subscription or a server staying alive, and version history is real [Git](/learn/oleafly-workflow/), not a proprietary timeline. The classic pain of local LaTeX was installing a multi-gigabyte TeX distribution. That is the part that has changed.

## Where Oleafly fits

Oleafly is a free, open-source, local-first desktop workspace. Compilers for LaTeX and Typst come bundled so there is no distribution to install. Citations can be fetched by [DOI or arXiv ID](/learn/open-access-doi-explained/), projects are Git repositories with honest history, venue templates are built in, and an optional AI assistant helps when you want it. The goal is to make the local path as low-friction as the cloud one. To be fair about the trade: for live simultaneous co-editing, Overleaf remains the stronger choice. For ownership of your files and offline work, local-first wins. Many people use both, drafting locally and syncing via Git.

## Choosing without agonizing

Start with whatever removes the most friction for you this month. The .tex files are portable across every tool on the table. That portability is the real advantage of plain-text writing, covered in [LaTeX vs Word](/learn/latex-vs-word/). Then write your [first document](/learn/first-document/), and let the toolbox grow with the work.
