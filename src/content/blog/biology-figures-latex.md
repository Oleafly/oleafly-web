---
title: "Biology and life-science papers: figures, multi-panel plates, and coauthors"
description: "Practical LaTeX for wet-lab and computational biology: multi-panel figures, resolution, supplements, statistics notation, and collaboration without overwriting each other."
date: 2026-06-24
tags: [biology, figures, collaboration]
---

Life-science manuscripts are figure-first. Reviewers skim the plate before they
read your prose, so the figure has to carry the claim without hand-waving in
the caption. LaTeX handles that fine if you treat figures as first-class
project files instead of something you paste in at 2am before the supplement
deadline.

Wet-lab and computational groups hit the same messes: panels without shared
scale bars, JPEG artifacts on blots, supplements that fail to compile, and a
dozen coauthors editing one paragraph. Below is what actually works.

## Multi-panel figures

Reviewers expect (a)(b)(c) panels under one caption. You can either:

1. Build the plate outside TeX (Illustrator, Inkscape, Fiji export) and drop
   in a single PDF or PNG, or
2. Assemble in TeX with `subcaption` when each panel is its own file:

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{a.pdf}
    \caption{Control}\label{fig:exp-a}
  \end{subfigure}\hfill
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{b.pdf}
    \caption{Treatment}\label{fig:exp-b}
  \end{subfigure}
  \caption{Overall experiment.}\label{fig:exp}
\end{figure}
```

Refer to panels as Figure~\ref{fig:exp}a in text only if the journal style
allows it. Plenty of venues prefer "Figure 2A" with one scheme applied
everywhere. More on that pattern:
[panels a, b, c](/learn/subfigures-abc/).

Name files consistently (`fig03_western_a.pdf`) so nobody invents
`final_gel_NEW.png` the week of submission.

## Resolution, color, and file formats

Keep microscopy archives as high-resolution TIFF or PDF. For the paper PDF
itself, use vector graphics for schematics and PNG/PDF at enough dpi for
raster data. Skip JPEG on line annotations and gels. Compression artifacts
read as sloppy science even when the experiment is fine.

Check color charges and print rules before you design a six-color palette that
only works on your calibrated monitor. Some journals want CMYK; others convert
badly without asking. When they request grayscale-safe versions of key
figures, give them those.

Put scale bars and intensity units on the panel, not only in the caption. If
production re-layouts figures, embedded scale bars survive; caption-only notes
often do not.

## Schematics vs data panels

Keep "cartoon of the pathway" separate from "quantification of the blot."
Cartoons can be TikZ or external vector art. Data panels should stay close to
the analysis export so you can regenerate them when a reviewer wants a
different normalization. Note the analysis script path in caption notes or a
reproducibility supplement when the journal allows it.

## Supplements that still compile

Giant tables, extra gels, and movie stills belong in a supplement with its own
document or a clear appendix. A few rules that save headaches:

Labels must be unique if main and supplement share one compile. If they are
separate projects, write "Figure S3" in plain text and do not rely on `\ref`
across PDFs. Keep a short list of which main-text claims point at which
supplement items, so nothing drifts.

A supplement that does not compile the week of submission is still your
problem, even when the main PDF looks clean.

## Multi-author chaos

Biology papers often have many coauthors at different LaTeX skill levels. Own
files by section (`results.tex`, `methods.tex`, `figs.tex`), merge through
Git, and decide who maintains the `.bib` (one person or a shared Zotero group
export).

A local project folder is easier to zip for a collaborator than a cloud
project they lose access to after graduation. Real Git history beats email
attachments named `manuscript_JM_edits_FINAL.docx` that someone converts back
to TeX by hand. Checkpoint after successful compiles; restore when a merge
goes wrong; keep a private remote.

If some coauthors only edit Word, export DOCX or PDF for them and keep `.tex`
as the source of truth. See
[coauthors who only speak Word](/learn/collaborator-uses-word/).

## Methods and statistics notation

Define statistical macros once so p-values do not show up as both `$p$` and
`p=` in the same paper:

```latex
\newcommand{\pvalue}[1]{$p = #1$}
\newcommand{\ci}[2]{95\% CI $[#1, #2]$}
```

State the test, n, and multiple-comparison correction in methods or table
notes, not only in a figure legend that gets cropped in production. Dense
papers benefit from a short notation list. Live ref/cite checking in a
research editor catches a `\ref` to a deleted panel before the reviewer does.

## Captions that carry the claim

A good caption says what was measured, in what system, and what the reader
should notice. Avoid "See text." Do not dump methods into the caption that
belong in the methods section. Panel letters (bold or parentheses) should
match house style.

## Pre-submission figure checklist

Before you hit submit, walk the figures once:

- Every main figure cited in order (or whatever order the journal allows).
- Panels labeled; scale bars where they matter.
- No JPEG mess on quantitative panels.
- Supplement compiles; S-numbers have not reshuffled.
- Color policy checked; file sizes under portal limits.
- Source images and scripts still findable in the project or lab archive.

## Westerns, gels, and contrast

Do not over-process blots for the PDF. Journals and readers watch for contrast
games. Keep raw files in the lab archive and ship panels that match what the
quantification used. If you rearrange panels, update every in-text panel
letter the same day, not "later."

## Movies and interactive supplements

When the journal allows movies, host them the way they instruct and put a
still plus caption in the PDF. Do not depend on a personal cloud link that
dies after graduation.

Figures are the backbone of these papers. LaTeX is just the frame. Make sure
the frame is not what fails the night before submission.
