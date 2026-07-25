---
title: "Figures, tables, and comparisons carry the paper"
description: "Takeaway captions, comparison tables, plots vs tables, and visual consistency."
category: "paper-anatomy"
order: 5
level: "beginner"
tags: ["writing", "figures", "tables"]
featured: false
updated: 2026-07-25
---

# Figures, tables, and comparisons carry the paper

Here is how a busy reviewer actually reads your paper: abstract, then a flip through every figure and table, then maybe the text. If your visuals tell the story on their own, you have won half the review before a single paragraph gets read. Design them like they are the paper, because for many readers they are.

## Every figure needs a takeaway caption

A caption that says "Results on Dataset A" wastes the most valuable real estate in the paper. A caption that says "Our method (blue) matches the baseline at half the cost; the gap widens with model size" tells the flipping reviewer exactly what to conclude. Write captions as claims, then let the figure prove them. A reader should be able to read only your captions and reconstruct the argument. Mechanics of captions and numbering live in [captions and labels](/learn/captions-labels/).

## Comparison tables: the reviewer's favorite

Two table patterns dominate empirical papers:

**The baselines table.** Your method against prior work, one row each, best numbers in bold. Include the obvious baselines even when they lose badly. Omitting a well-known baseline reads as hiding something.

**The checkmark matrix.** Capabilities down the side, methods across the top, checkmarks where a method has the property. It positions your work in one glance:

| Capability | Prior A | Prior B | Ours |
|---|---|---|---|
| No retraining needed | yes | no | yes |
| Works at scale | no | yes | yes |
| Open source | no | no | yes |

Keep it honest. Reviewers know the trick of choosing rows your method happens to win.

## Plot or table?

Use a plot when the shape is the message: a trend, a crossover, a scaling curve. Use a table when the exact numbers are the message: benchmark scores everyone will compare against. When in doubt, ask what the reader will do with it. If they will quote the number, table. If they will describe the trend, plot.

## Consistency is credibility

Small visual inconsistencies quietly signal carelessness:

- Same font family and size across all figures, close to the body text size after scaling.
- Same color for the same method in every plot. If your method is blue in Figure 2, it is blue everywhere.
- Same axis label conventions and units throughout.
- Legible at printed size. If you must zoom to read a tick label, it is too small.

Export vector formats (PDF, SVG) rather than screenshots wherever possible. Bitmap plots with fuzzy text are the fastest way to look unpolished.

## Building them in LaTeX

Placement, sizing, and wrangling the float system are covered in [inserting images](/learn/insert-images/), and professional-looking tables in [creating tables](/learn/create-table/). For diagrams, architecture sketches, and flowcharts, TikZ produces vector graphics that match your document fonts exactly; start with [the TikZ intro](/learn/tikz-intro/). If hand-writing TikZ feels slow, Oleafly's Diagram Composer can help draft TikZ figures visually that you then refine in code.

## The five-minute audit

Before submitting, do the reviewer flip yourself: read only the captions, in order. Do they tell the whole story? Is anything bold, colored, or starred without explanation? Would a stranger know which method is yours in every figure? Fix what fails, then submit.
