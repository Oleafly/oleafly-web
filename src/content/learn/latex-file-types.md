---
title: "The files in a real project"
description: ".tex, .bib, .cls, .sty, and the generated junk you should not commit."
category: "open-the-loop"
order: 4
level: "beginner"
tags: ["basics", "files"]
featured: false
updated: 2026-07-25
---

# The files in a real project

Open the folder of any real LaTeX project after a compile and you will find far more files than you wrote. This surprises most beginners, and the fear of deleting the wrong thing keeps folders cluttered forever. The distinction that clears it up: some files are source you edit, some are styles supplied by a template or package, and the rest are generated scratch space the compiler recreates on every run.

## The files you write

Your `.tex` files hold the actual document: the text, sections, figures, and math. A `.bib` file is your bibliography database, one entry per paper or book you might cite; you can maintain it by hand or export it from a reference manager like Zotero. These are the files worth backing up and putting in version control, because everything else can be rebuilt from them.

## The files a template gives you

A `.cls` file defines a document class, the thing you name in `\documentclass{...}`. Journals and conferences ship their own so every submission looks identical, and you almost never edit one. A `.sty` file is a package: reusable macros and settings loaded with `\usepackage`. You will only write one yourself once you want to share custom commands across several documents. A `.bst` file describes a BibTeX citation style and is likewise usually just dropped in by a venue.

## The files the compiler makes

The `.aux` file stores cross-reference and citation data between compile passes; never edit it, and feel free to delete it, since the next compile rewrites it. The `.log` file records everything the compiler did and is worth opening only when something goes wrong. The `.pdf` is the output you actually wanted.

| Extension | Role | Edit by hand? |
| --- | --- | --- |
| `.tex` | Source documents and chapters | Yes |
| `.bib` | Bibliography database | Yes (or export from Zotero) |
| `.cls` | Document class | Rarely, vendor templates |
| `.sty` | Packages / style files | When writing your own macros |
| `.bst` | BibTeX style | Rarely |
| `.aux` | Cross-ref data | **No:** generated |
| `.log` | Compiler log | Read when debugging |
| `.pdf` | Output | View / submit |

## Project layout that scales

```text
paper/
 main.tex
 chapters/
 figures/
 refs.bib
```

One `main.tex` at the top level acts as the entry point, chapters live in their own folder and get pulled in with `\input` or `\include`, images sit in `figures/`, and the bibliography stays in one `refs.bib`. This layout stays manageable whether the project is a four-page paper or a thesis. [Split chapter files](/learn/split-chapter-files/) shows how the pieces connect.

If you use Git, add `*.aux`, `*.log`, and the other generated files to `.gitignore` so your history only tracks real source. Oleafly projects are plain folders on disk, so this advice applies unchanged there. The most common mistake is the reverse one: while hunting a weird compile error, deleting the `.aux` files is often the fix, because a stale one from a broken run can poison every compile after it.
