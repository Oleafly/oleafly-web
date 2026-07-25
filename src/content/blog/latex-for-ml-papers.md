---
title: "LaTeX for machine learning papers without the notation mess"
description: "How ML students keep experiments, ablations, and math notation consistent from first arXiv draft to camera-ready."
date: 2026-06-18
tags: [machine-learning, research, math]
---

Most ML papers fail the same way in LaTeX: the math is fine on page three and
inconsistent by page twelve. A loss is `L` in one section, `\mathcal{L}` in
another, and bold vectors appear only when the author remembered. Reviewers
notice.

## Pick a notation sheet on day one

Before you write related work, write twenty lines of macros:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
\DeclareMathOperator*{\argmax}{arg\,max}
\newcommand{\loss}{\mathcal{L}}
\newcommand{\expect}{\mathbb{E}}
```

Paste that block into every coauthor branch. When a model invents a new
symbol, add it to the sheet first, then use it. The
[AI follow-notation lesson](/learn/ai-follow-notation/) is the same idea with
a language model in the loop.

## Tables that survive camera-ready

Ablation tables grow until they fall off the page. Prefer `booktabs` with
no vertical rules, `siunitx` for aligned decimals, and a caption that states
the metric and the split. If the table spans pages, use `longtable` early
instead of shrinking the font to 7pt.

A visual builder helps for the first draft: the
[table generator](/tools/table-generator/) runs in the browser.

## Algorithms and listings

Pseudocode belongs in `algorithm2e` or `algorithmicx`, not in a monospace
paragraph. Real training scripts belong in `listings` or `minted` with a
language set so reviewers can skim. Keep the main paper short; put full
configs in the appendix or a repo link.

## Figures from TensorBoard and matplotlib

Export PDF or SVG when you can. Raster PNGs at 300dpi are fine for photos of
interfaces, not for line plots. Crop whitespace before `\includegraphics`.
If a float flees to the next section, fix size and placement before you fight
`[H]` for an hour: see [float placement](/learn/figure-wrong-position/).

## Git next to the paper

Every architecture change should be a commit you can name. Local-first tools
like [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) treat the
project as a folder with real Git history, which matches how ML code already
lives. Pair that with the [cheatsheet](/learn/cheatsheet/) when you forget
syntax under a deadline.
