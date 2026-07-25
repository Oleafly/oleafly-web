---
title: "The figure that flees the section"
description: "Float barriers, size, and last-resort placement."
category: "float-surgery"
order: 5
level: "intermediate"
tags: ["figures", "errors"]
featured: false
updated: 2026-07-25
---

# The figure that flees the section

You put a figure at the end of Section 4 and it prints in the middle of Section 5, or piles up with three others at the end of the chapter. This happens because figures are floats: LaTeX treats their position in the source as a starting point, not a destination, and moves them to keep pages full. Floats also must appear in order, so one figure that cannot be placed blocks every figure behind it. The general placement system is covered in [where floats actually land](/learn/position-figures/). This lesson is the escalation ladder for when a float ends up somewhere you cannot accept.

## Step one: check the placement options

Make sure the environment says `[htbp]`, not `[h]` alone. The letters grant permission to place the float here, at the top of a page, at the bottom, or on a dedicated float page. Granting only `h` is the most common cause of a runaway figure, because when the current page has no room, LaTeX has no legal spot anywhere and carries the float forward indefinitely.

## Step two: move the code

A float can drift later than its source position but never earlier. If the figure appears too late, move the environment up in the source, ideally just before the paragraph containing its first `\ref`. This one edit fixes a surprising share of placement complaints.

## Step three: fence the section

The `placeins` package provides `\FloatBarrier`, a command that forces all pending floats to be placed before the text continues:

```latex
\usepackage{placeins}
% ...
\FloatBarrier
\section{Next section}
```

Put the barrier at the end of a section and no figure from that section can leak into the next one. LaTeX may insert extra vertical space to flush the floats, which is usually an acceptable price near a section break.

## Step four: the H hammer

The `float` package adds a capital `H` specifier that removes floating entirely:

```latex
\usepackage{float}
\begin{figure}[H]
```

An `[H]` figure prints exactly where its code sits, like a large paragraph. The cost is that LaTeX can no longer balance the page around it, so you may get a large blank gap when the figure does not fit the remaining space. Treat it as a last resort for one or two stubborn floats, not a default.

## Step five: shrink the figure

Very large floats are deferred because few pages have room for them. Reducing `width=0.9\textwidth` to `0.7\textwidth`, or trimming whitespace from the image file, often lets LaTeX place a figure it had been pushing to the chapter's end.

A final note on habit: do this tuning once, after the text is stable. Every paragraph you add or delete reshuffles the pages, so placement surgery during drafting is effort you will redo.
