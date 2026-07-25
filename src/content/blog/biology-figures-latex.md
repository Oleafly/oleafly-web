---
title: "Biology and life-science papers: figures, multi-panel plates, and coauthors"
description: "Practical LaTeX for wet-lab and computational biology: multi-panel figures, supplements, and collaboration without overwriting each other."
date: 2026-06-24
tags: [biology, figures, collaboration]
---

Life-science manuscripts are figure-first. The text explains the plate; the
plate carries the claim. LaTeX is fine at that job if you treat figures as
first-class project files, not afterthoughts pasted at 2am.

## Multi-panel figures

Reviewers expect (a)(b)(c) panels with one shared caption. Use `subcaption`
or build the plate externally in Illustrator/Inkscape and include a single
PDF. If you build in TeX:

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{a.pdf}
    \caption{Control}\label{fig:exp-a}
  \end{subfigure}\hfill
  ...
  \caption{Overall experiment.}\label{fig:exp}
\end{figure}
```

Lesson: [panels a, b, c](/learn/subfigures-abc/).

## Resolution and color

Microscopy needs high-resolution TIFF or PDF as the archive format; for the
paper, PDF or PNG at sufficient dpi. Avoid JPEG for line annotations. Check
how the journal handles color charges before you design a six-color scheme
that only works on screen.

## Supplements that still compile

Move giant tables and extra gels to a supplement file with its own
`\documentclass` or an appendix. Cross-reference carefully: labels must be
unique across main and supplement if they share a compile, or fully separate
if they do not.

## Multi-author chaos

Biology papers often have many coauthors who edit at different skill levels.
Own files by section (`results.tex`, `methods.tex`), merge through Git, and
agree that the `.bib` is maintained by one person or a shared Zotero group
export. A local project folder is easier to zip for a collaborator than a
cloud project they cannot access after graduation.

## Methods and statistics notation

Define statistical macros once (`\pvalue`, `\ci`) so p-values do not appear
as both `$p$` and `p=` in prose. Keep a short notation list in the methods
supplement if the paper is dense.
