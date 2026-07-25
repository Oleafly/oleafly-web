---
title: "Introductions and related work without tears"
description: "The funnel structure, explicit contribution lists, and what related work is really for."
category: "paper-anatomy"
order: 3
level: "intermediate"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# Introductions and related work without tears

The introduction is where reviewers form their opinion of your paper, usually within two paragraphs. Related work is where they check whether you know the field. Both sections have well-worn conventions, and following them is not lazy, it is polite: readers can find what they need without hunting.

## The funnel

A good introduction narrows steadily, from a problem the reader already cares about down to the exact thing you did.

| Stage | Content |
|---|---|
| Wide | The problem area and why it matters. |
| Narrower | What existing approaches do and where they fall short. |
| Narrow | Your idea, in one or two sentences. |
| Point | Your contributions, stated explicitly. |

Each paragraph should be narrower than the last. If paragraph three is broader than paragraph two, the funnel is leaking and readers get lost. The introduction retells your [abstract](/learn/write-an-abstract/) with room to breathe and citations to back each claim.

## State your contributions. Literally.

Most fields now expect an explicit, bulleted contributions list at the end of the introduction. It feels blunt the first time you write one. Write it anyway: reviewers copy it into their reviews and grade you against it.

```latex
Our contributions are:
\begin{itemize}
  \item A pruning method that targets redundant attention heads.
  \item An analysis showing why prior methods lose accuracy.
  \item Experiments on three benchmarks, with code released.
\end{itemize}
```

Keep each bullet checkable. "We propose a novel framework" is not checkable. "We prove convergence in Theorem 2" is.

## What related work is for

Related work is positioning, not a book report. Its job is to answer one question: given everything that exists, why does this paper need to exist? Organize by theme, not by paper. A paragraph per line of research, ending with how your work differs, beats a chronological list of summaries every time.

A useful pattern per paragraph: what that line of work does, what it achieves, what it cannot do, and one sentence connecting it to you. If a paragraph never mentions your work, it is a book report.

## Cite generously

Cutting citations to make competitors look absent is a bad strategy: the authors you omit are disproportionately likely to be your reviewers. Cite generously and accurately, and characterize prior work fairly. A reviewer who sees their paper described correctly starts out friendly. Mechanics live in [adding citations](/learn/add-citations/) and [building a bibliography](/learn/create-bibliography/).

## The concurrent work escape hatch

Sometimes a very similar paper appears while yours is under review or just before submission. The convention is a short "concurrent work" note: acknowledge it, state that it was developed independently, and briefly say how yours differs. Reviewers respect the honesty and it defuses the "you missed this obvious paper" objection before it is raised.

## Where related work goes

Two placements are common: Section 2, right after the introduction, or just before the conclusion. Put it early when readers need the context to understand your method. Put it late when your method is self-contained and the comparisons make more sense after the reader has seen your results. Either way, the funnel in the introduction already did the load-bearing positioning.
