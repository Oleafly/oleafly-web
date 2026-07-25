---
title: "TeX, LaTeX, and 45 years of beautiful documents"
description: "How one annoyed computer scientist in 1978 built the typesetting system research still runs on."
category: "research-101"
order: 8
level: "beginner"
tags: ["research", "basics", "latex"]
featured: false
updated: 2026-07-25
---

# TeX, LaTeX, and 45 years of beautiful documents

Every tool you will use to write papers descends from one man's frustration with ugly galley proofs. The story is short, and it explains a lot about why research writing works the way it does.

## 1978: Knuth gets annoyed

Donald Knuth, a Stanford computer scientist, was writing his epic book series *The Art of Computer Programming*. When the publisher moved from traditional metal typesetting to early digital systems, the new proofs looked terrible, especially the mathematics. Knuth's response was gloriously disproportionate: he paused the books and spent years building his own typesetting system, **TeX** (pronounced "tech", the X is a Greek chi), releasing it in 1978.

TeX was a program that took plain text with markup commands and produced typographically excellent pages: perfect math spacing, elegant paragraph line-breaking, the works. Knuth eventually froze its core and offers a bounty check for every bug found. Very few have been claimed.

## 1984: Lamport makes it usable

Raw TeX is powerful but low-level, like assembly language for pages. In 1984 Leslie Lamport (later a Turing Award winner for distributed systems) released **LaTeX**, a friendly layer on top: instead of hand-positioning things you write `\section{Introduction}` and `\cite{knuth78}` and let the system handle numbering, references, and layout. LaTeX is what nearly everyone means today when they say they "write in TeX." Your [first document](/learn/first-document/) is a LaTeX document.

## Why it survived four decades

Word processors came and went; LaTeX stayed, for boring, excellent reasons:

- **Math.** Nothing typesets equations as well, still. See [math mode](/learn/math-mode/).
- **Plain text.** A 1985 .tex file opens today, and plays perfectly with version control.
- **Automation.** Numbering, cross-references, and bibliographies just work at 300 pages.
- **Templates.** Publishers encode their exact house style as a class file, so every submission comes out identical. That is why [ACM, IEEE, and friends](/learn/acm-ieee-and-friends/) all hand you .tex templates, and why journals still want .tex sources they can compile into their own layout.

## The engine family, in one breath

The original TeX engine spawned modern successors: **pdfTeX** added direct PDF output, **XeTeX** added Unicode and system fonts, and **LuaTeX** added a scripting language inside the engine. You mostly just pick whichever your template expects; the practical differences are in [which engine for this project](/learn/engines-compared/).

## 2023: enter Typst

**Typst** is the first serious modern challenger: a new typesetting language built from scratch with cleaner syntax, instant compilation, and friendlier error messages. It is genuinely pleasant, and growing fast. Its limits are the flip side of LaTeX's strengths: forty years of packages and, crucially, publisher acceptance. Venues want .tex today, so LaTeX remains the language of submission while Typst is lovely for notes, reports, and anything you control the output of. Oleafly compiles LaTeX, Typst, and Markdown side by side, so you can use each where it shines without switching apps.

## The takeaway

TeX is the engine, LaTeX the language everyone writes, Typst the young rival, and journals the reason the old guard persists. Where these fit among Overleaf, editors, and reference managers is the subject of [the research writing toolbox, then and now](/learn/research-tools-landscape/).
