---
title: "Single, one-half, double"
description: "setspace for the whole document or a local block."
category: "the-page"
order: 2
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Single, one-half, double

By default LaTeX sets text single-spaced, with the distance between lines chosen to suit the font. That is what a finished book looks like, but plenty of documents are required to be looser: thesis regulations often demand one-and-a-half or double spacing, and journals ask for double-spaced manuscripts so reviewers have room to scribble. Change line spacing with the `setspace` package. It adjusts body text without breaking the parts of the document that should stay single-spaced.

## Document-wide spacing

```latex
\usepackage{setspace}
\onehalfspacing
% \doublespacing
% \singlespacing
```

Load the package in the preamble, then issue one of the three declarations. `\onehalfspacing` sets the whole document at one-and-a-half line spacing, `\doublespacing` doubles it, and `\singlespacing` returns to normal, which is useful if you need to switch back partway through. The declarations take effect from where they appear, so putting one in the preamble covers everything.

The reason to use setspace rather than fiddling with `\baselinestretch` or `\linespread` by hand is what it deliberately leaves alone: footnotes, figure and table captions, and floats stay single-spaced, which is exactly what thesis guidelines and typographic convention expect. A naive global stretch would double-space your footnotes too, and that reads badly.

If you need a factor the shortcuts do not cover, `\setstretch{1.25}` accepts any multiplier. Note that "double spacing" in the word-processor sense corresponds to a stretch of about 1.66 in LaTeX terms, and `\doublespacing` already accounts for that, so resist the urge to write `\setstretch{2}` unless a regulation literally demands it.

## Spacing for one block only

Sometimes only part of the document needs different spacing: a long quotation, a declaration page, or an abstract that must be double-spaced while the rest is not.

```latex
\begin{spacing}{1.2}
 ...
\end{spacing}
```

The `spacing` environment applies the given stretch factor, here 1.2, to just the text between `\begin` and `\end`, then restores whatever was in force before. The package also provides ready-made `singlespace` and `doublespace` environments for the common cases. Because the change is scoped by the environment, you cannot forget to switch back, which is the usual failure mode of issuing bare declarations mid-document.

## A word of caution

Do not use line spacing to hit a page count. Stretching to 1.1 to make a paper look longer is the oldest trick in the book, and venues with strict formatting run automated checks that catch it. The [page-limit guide](/learn/page-limits-without-crimes/) covers legitimate alternatives. Save setspace for what it is meant for: meeting an explicit spacing requirement, then switching back to single spacing for the camera-ready version.
