---
title: "One column or two"
description: "Why layouts differ by venue, what two columns do to figures and equations, and who decides."
category: "paper-anatomy"
order: 7
level: "beginner"
tags: ["structure", "formatting"]
featured: false
updated: 2026-07-25
---

# One column or two

Open ten papers and you will see two tribes: dense two-column pages that look like newsprint, and airy one-column pages that look like a book. Neither is better. Each evolved for a reason, and the choice is almost never yours to make.

## Why venues differ

Two-column layouts are conference tradition, born when proceedings were printed and page budgets were tight. Narrow columns pack more words per page, and short line lengths are easier to scan. Most CS conferences (ACM, IEEE, and friends) still use them.

One-column layouts dominate journals, preprints, and theses. They give equations, figures, and tables room to breathe, and they are friendlier for long-form reading. Preprint servers and many ML venues have drifted single-column partly for exactly this reason.

| Layout | Typical home | Personality |
|---|---|---|
| Two-column | Conference proceedings | Dense, scannable, page-limited |
| One-column | Journals, preprints, theses | Roomy, readable, equation-friendly |

## What two columns do to your figures

In a two-column document, a normal `figure` floats within one column, which is often too narrow for a detailed plot. The starred variant spans both columns:

```latex
\begin{figure*}
  \centering
  \includegraphics[width=\textwidth]{wide-results.pdf}
  \caption{A figure that needs the full page width.}
\end{figure*}
```

Same trick for wide tables with `table*`. One catch: starred floats typically land at the top of a page and cannot use bottom or here placement, so plan your wide figures early. Sizing basics live in [inserting images](/learn/insert-images/).

## Equations get cramped

A column about 3.3 inches wide is a hostile place for long equations. In two-column papers you will break equations more often, abbreviate more aggressively, and lean on multi-line environments. If your paper is equation-heavy and you have a choice of venue, single column will save you real formatting time. See [math mode](/learn/math-mode/) for the tooling.

## Screens and screen readers prefer one column

For anything that is not a formal paper submission (reports, documentation, resumes, preprints people will read on laptops and phones), single column wins. PDFs do not reflow, so two-column pages force screen readers and text extractors to guess reading order, and they force humans to scroll up and down within every page. Resume-parsing systems are notorious for scrambling multi-column layouts. Reserve two columns for venues that demand them.

## The document class decides for you

Here is the relaxing part: you almost never configure this by hand. The venue hands you a class or template, and the layout comes with it.

```latex
\documentclass{article}              % one column
\documentclass[twocolumn]{article}   % two columns
\documentclass[sigconf]{acmart}      % venue class, layout included
```

Write your content once, and switching templates reflows everything. That is what LaTeX is for: the same source compiles to a two-column conference version and a one-column preprint with a one-line change. Keep your figures in vector formats and your equations in standard environments, and the layout swap is nearly painless.
