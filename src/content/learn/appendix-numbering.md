---
title: "Appendices that renumber cleanly"
description: "appendix, A/B chapters, counters that stay consistent."
category: "long-form"
order: 3
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Appendices that renumber cleanly

An appendix holds material that supports the main text but would interrupt it: long proofs, survey instruments, extra tables, implementation details. Readers expect appendices to be lettered A, B, C rather than continuing the chapter numbers, and expect the material inside to follow suit, so a figure in Appendix A is Figure A.1, not Figure 47. In LaTeX that is a single switch, not a restructuring job.

## The switch

```latex
\appendix
\chapter{Extra proofs} % becomes Appendix A
\section{Lemma details}
```

`\appendix` is a declaration, not an environment: there is nothing to close. From the point where it appears, the sectioning counters reset and switch to letters. In the `report` and `book` classes, every `\chapter` after it becomes Appendix A, Appendix B, and so on, and a `\section` inside becomes A.1. You still write only your own heading text; the "Appendix A" label and the lettering come from the class, exactly as chapter numbers did before the switch.

In `article`, which has no chapters, `\appendix` relabels `\section` instead: the first section after it becomes Appendix A. Everything downstream stays consistent automatically. The table of contents lists the lettered headings, and a `\label` placed in an appendix resolves through `\ref` to "A" or "A.2" without any special handling.

## What renumbers and what does not

In `report` and `book`, figures, tables, and equations are numbered within chapters, so they pick up the letter for free: the first figure of Appendix B is Figure B.1. In `article` those counters run continuously through the whole document and `\appendix` does not touch them, so equation numbering simply carries on. That is normal for a short paper; only fight it if a venue explicitly asks for A-prefixed numbers.

## When you want more

The `appendix` package adds refinements the plain switch lacks. Its `appendices` environment can print the word "Appendix" in each heading and in the table of contents (`\usepackage[toc,titletoc,title]{appendix}`), and it can insert a separator page announcing the appendices. For a thesis whose template does not already handle this, those options save manual fiddling.

One common mistake is writing the label into the heading yourself, as in `\chapter{Appendix A: Extra proofs}`. The class adds its own label, so the output reads "Appendix A Appendix A: Extra proofs". Give the heading only the title and let the numbering machinery do its one job. If you have a single appendix, the lone "Appendix A" is a style question; most venues accept it, and some prefer an unlettered `\chapter*{Appendix}`.
