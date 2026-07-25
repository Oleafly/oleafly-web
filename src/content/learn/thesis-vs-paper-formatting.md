---
title: "Thesis formatting vs paper formatting"
description: "University classes, front matter, chapters, binding margins, and reusing paper material."
category: "venue-formats"
order: 7
level: "intermediate"
tags: ["venues", "thesis"]
featured: false
updated: 2026-07-25
---

# Thesis formatting vs paper formatting

A paper is formatted for a publisher. A thesis is formatted for a graduate school, a very different beast with very different rules. If you have only written papers, the thesis template will surprise you in specific ways.

## Who sets the rules

Papers: the venue hands you a class ([IEEEtran](/learn/ieee-format-in-practice/), [acmart](/learn/acm-format-in-practice/), llncs) and everyone worldwide uses the same one. Theses: your university mandates its own class or a page of typographic rules (margins, line spacing, title page wording), and no two universities agree. Get the official class from your department or graduate school site first, and if it is ancient and refuses to compile, that is common enough to have [its own lesson](/learn/fix-broken-template/).

## The structural differences

| Aspect | Paper | Thesis |
|---|---|---|
| Top-level unit | `\section` | `\chapter` |
| Class base | venue class | `book`/`report` derivative |
| Front matter | title + abstract | title page, declaration, abstract, TOC, lists of figures and tables |
| Length | 8 to 30 pages | 80 to 300 pages |
| Layout | often two-column | single column, generous spacing |
| Sides | one-sided PDF | often two-sided for print |

Chapters change everything downstream: numbering becomes `3.2`, figures become `Figure 3.1`, and each chapter usually opens on a fresh (sometimes right-hand) page.

## Front matter is half the battle

A thesis front matter sequence typically runs: title page, declaration of originality, abstract, acknowledgments, table of contents, list of figures, list of tables, then chapter 1. Most of it is automated:

```latex
\frontmatter          % roman page numbers i, ii, iii
\maketitle
\tableofcontents
\listoffigures
\listoftables
\mainmatter           % arabic numbers restart at 1
\chapter{Introduction}
```

The roman-then-arabic page numbering dance trips everyone once, [front matter and page numbers](/learn/front-matter-page-numbers/) covers it properly.

## Two-sided printing and binding margins

Print theses are usually two-sided (`twoside` class option), which makes margins asymmetric: the inner margin is wider to survive binding. Your university's rules will say something like "left margin 35mm, others 25mm", which in a two-sided document means *inner*, not left. Do not fight this with manual `\hspace`, the class option plus `geometry` settings handle it:

```latex
\documentclass[12pt,twoside,openright]{report}
\usepackage[inner=35mm,outer=25mm,top=25mm,bottom=25mm]{geometry}
```

`openright` forces chapters onto right-hand pages, standard for bound copies.

## Reusing your papers as chapters

Most theses absorb published papers, and most universities explicitly allow it. The mechanics: strip each paper of its venue preamble, demote its `\section`s if needed, unify notation and macros across chapters, and merge the bibliographies into one. Keeping each chapter in its own file makes this manageable, [splitting chapters into files](/learn/split-chapter-files/) shows the `\input`/`\include` setup that keeps a 200-page build sane.

One honest warning: university thesis classes tend to be package-heavy, so the first compile on a fresh machine may pull down a batch of packages before it succeeds. Let it finish once and subsequent builds are fast.
