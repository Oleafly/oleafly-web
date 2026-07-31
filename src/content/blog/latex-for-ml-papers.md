---
title: "LaTeX for machine learning papers without the notation mess"
description: "Notation sheets, ablation tables, algorithms, figures from training runs, and Git next to the paper from first arXiv draft to camera-ready."
date: 2026-06-18
tags: [machine-learning, research, math]
---

Most ML papers fail the same way in LaTeX: the math is fine on page three and
inconsistent by page twelve. A loss is `L` in one section, `\mathcal{L}` in
another, and bold vectors appear only when the author remembered. Reviewers
notice even when they do not comment on it.

This is a practical guide for students writing workshop papers, conference
submissions, and thesis chapters that share DNA with the training code.

## Pick a notation sheet on day one

Before you write related work, write twenty lines of macros:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
\DeclareMathOperator*{\argmax}{arg\,max}
\newcommand{\loss}{\mathcal{L}}
\newcommand{\expect}{\mathbb{E}}
\newcommand{\kl}{\mathrm{KL}}
```

Paste that block into every coauthor branch. When a model invents a new symbol,
add it to the sheet first, then use it. The
[AI follow-notation lesson](/learn/ai-follow-notation/) is the same idea with a
language model in the loop: the model must obey the sheet, not invent fonts.

Live math preview in a research editor helps you catch that `\mathcal{L}` and
`L` are not the same object while you type.

## Tables that survive camera-ready

Ablation tables grow until they fall off the page. Prefer `booktabs` with no
vertical rules, `siunitx` for aligned decimals, and a caption that states the
metric and the split (ImageNet, CIFAR, in-domain vs OOD). If the table spans
pages, use `longtable` early instead of shrinking the font to 7pt.

A visual builder helps for the first draft: the
[table generator](/tools/table-generator/) runs in the browser. The final table
should still name the metric in the caption and define ± as std or se.

Report seeds and hyperparameter ranges in appendix tables when the venue allows.
Main tables stay scannable.

## Algorithms and listings

Pseudocode belongs in `algorithm2e` or `algorithmicx`, not in a monospace
paragraph. Real training snippets belong in `listings` or `minted` with a
language set so reviewers can skim. Keep the main paper short; put full configs
in the appendix or a repo link with a commit hash.

```latex
\begin{algorithm}
\caption{Training step}\label{alg:step}
...
\end{algorithm}
```

Number algorithms you cite. Do not dump five pages of PyTorch into the PDF.

## Figures from TensorBoard and matplotlib

Export PDF or SVG when you can. Raster PNGs at 300dpi are fine for UI
screenshots, not for line plots. Crop whitespace before `\includegraphics`. If a
float flees to the next section, fix size and placement before you fight `[H]`
for an hour: [float placement](/learn/figure-wrong-position/).

Multi-panel ablations: build in TeX with `subcaption`, or compose externally and
include one PDF. Keep a consistent color for "ours" across figures so skimmers
learn the legend once.

## Two-column conference classes

NeurIPS, ICML, ICLR, and CVPR-style classes change margins and float rules.
Compile against the official class early. Page limits are real; do not crush
fonts. Move proofs and extra ablations to the appendix or supplementary PDF when
the call allows.

## Related work and citations

Use stable cite keys and clean Scholar exports. Validate the `.bib`:
[BibTeX validator](/tools/bibtex-validator/). Cite the code and datasets you
depend on. Author-year vs numeric depends on the venue; use the template's
style, not a hybrid.

## Git next to the paper

Every architecture change should be a commit you can name. Treat the paper and
the code as the same project, not two separate backup habits.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) keeps the paper
in a real Git repo next to a project-aware editor with live math preview,
cross-file refs, citation completion, and SyncTeX PDF. That matches how ML code
already lives. Pair it with the [cheatsheet](/learn/cheatsheet/) when you forget
syntax under a deadline.

Tag the commit that matches the OpenReview or CMT upload. You will want it
during rebuttal.

## Rebuttal and camera-ready

Rebuttal windows are short. Keep a branch or folder for "rebuttal experiments"
so you do not pollute the submitted PDF source. Camera-ready often allows an
extra page; use it for clarity, not for dumping every failed run.

## Broader impact and limitations

Even when the venue requires a short social-impact or limitations paragraph,
write it in plain language. LaTeX will not save a vague paragraph. Put negative
results you can stand behind in the appendix if the main page limit is tight,
and say that you did in the main text so reviewers do not assume you hid them.

## Before you upload

Check that the notation sheet is consistent across sections, main tables are
readable with metrics named and ± defined, and algorithms and figures are cited
in order. Confirm the official class compiles within the page limit without font
crimes, the `.bib` is clean with code and data cited, and a commit hash is
recorded for the uploaded PDF.

ML experiments are noisy enough already. Keep the notation and tables quiet.
