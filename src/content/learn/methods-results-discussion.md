---
title: "Method, results, discussion: the engine room"
description: "Reproducibility, results that answer questions, ablations, and honest limitations."
category: "paper-anatomy"
order: 4
level: "intermediate"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# Method, results, discussion: the engine room

The middle of a paper is where the actual science lives. It is also where vague writing does the most damage, because these sections are graded on precision. Here is what each one owes the reader.

## Method: reproducibility is the bar

The test for a method section is blunt: could a competent peer reproduce your work from the text plus your supplementary material? That means concrete details, not vibes. Report the exact settings, data splits, preprocessing steps, and hyperparameters, or say precisely where they live ("full settings in Appendix B").

A useful discipline: as you write, keep a running list of every decision you made. Each one either goes in the method section, the appendix, or the released code. If it goes nowhere, a reviewer will find it.

## Results: answer the questions you asked

Strong experiment sections open by stating the questions the experiments answer, often literally: "We ask: (1) Does pruning preserve accuracy? (2) Where does the speedup come from?" Then each subsection answers one question. Results that do not answer a stated question are trivia, and reviewers notice the mismatch between claims and evidence faster than anything else.

## Tables vs plots

| Use a table when | Use a plot when |
|---|---|
| Exact values matter | The trend matters |
| Comparing methods on fixed benchmarks | Showing behavior across a swept variable |
| Few numbers, high precision | Many numbers, one shape |

The classic rule: tables for lookup, plots for comparison of shape. More on making both readable in [figures, tables, and comparisons](/learn/figures-tables-comparisons/), with LaTeX mechanics in [tables](/learn/create-table/) and [captions and labels](/learn/captions-labels/).

## Ablations, in one paragraph

An ablation removes one component of your method at a time to show it earns its place. If your method has three parts and the full system beats every two-part variant, each part is justified. Reviewers in empirical fields treat ablations as table stakes: a method section that introduces five components and never tests them individually reads as unsupported. One compact table usually does the job.

## Discussion vs conclusion

These get merged so often that people forget they are different. The discussion interprets: what do the results mean, where were they surprising, what do they not show? The conclusion summarizes: what should the reader remember, and what comes next? A discussion adds new thinking. A conclusion adds nothing new, on purpose. If your conclusion contains a claim that appears nowhere else, move it.

## Limitations: now standard, actually useful

Explicit limitations sections have moved from optional to expected at many venues, and some require them. Treat yours as a credibility device, not a confession. State the real boundaries: datasets you did not test, assumptions your proof needs, compute costs, failure cases you observed. Reviewers were going to find these anyway. Naming them first converts weaknesses into evidence that you understand your own work, and it is far better than a reviewer writing "the authors do not acknowledge that..." in a public review.

## One structural tip

Write the results section first, from your actual numbers. Then write the method section to explain exactly what produced those numbers, and the discussion to interpret them. Writing in reading order tempts you to describe the method you meant to run rather than the one you ran.
