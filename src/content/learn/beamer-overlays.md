---
title: "Reveal lines on click"
description: "Overlay specs, pause, only, without overdoing it."
category: "on-stage"
order: 2
level: "intermediate"
tags: ["beamer"]
featured: false
updated: 2026-07-25
---

# Reveal lines on click

A Beamer frame can be more than one physical slide. When you reveal bullet points one at a time, Beamer generates several PDF pages from the same frame, each showing a bit more. Advancing in the PDF viewer steps through them. These generated pages are called overlays. Learning to control them is what turns a static deck into a paced talk.

```latex
\begin{itemize}
 \item<1-> Always visible from slide 1
 \item<2-> Appears on slide 2
 \item<3-> Appears on slide 3
\end{itemize}

\pause % simpler step-through
```

## Overlay specifications

The angle-bracket notation after `\item` is an overlay specification. It states on which overlays of the frame the item is visible. The number is the overlay index within this frame, and the hyphen makes it a range: `<2->` means from overlay 2 onward, so the item appears on the second step and stays. A bare `<2>` would mean overlay 2 only, so the item would appear and then vanish. You can also give lists like `<1,3>`. Beamer creates as many overlays as the highest number mentioned, so the frame above produces three PDF pages.

Overlay specifications work on more than items. `\textbf<2->{key term}` bolds text from overlay 2 onward, and `\only<2>{...}` includes its content solely on overlay 2. Because `\only` removes the content entirely on other overlays, the surrounding layout reflows, which makes it the tool for replacing one figure with another in the same spot: give two `\only` blocks the same position and consecutive specifications. Its cousin `\uncover` reserves the space while hiding the content, so nothing shifts.

## The simpler tool

`\pause` splits the frame at that point. Everything before it shows immediately, everything after waits for the next step, and repeated `\pause` commands create successive steps. It needs no numbers and no planning, so it is the right default for a plain top-to-bottom reveal. Reach for explicit specifications only when the reveal order differs from the source order, or when items must appear and disappear.

A useful shortcut when every item in a list should step in order is `\begin{itemize}[<+->]`, which assigns increasing overlay numbers automatically.

## Restraint

Overlays are easy to overuse. A deck where every bullet on every slide clicks in one at a time exhausts the presenter (constant clicking) and the audience (no reading ahead). Reserve stepped reveals for the few places where pacing carries an argument, such as building up a derivation or contrasting before and after. Each overlay is a real PDF page, so handout copies balloon unless you compile with `\documentclass[handout]{beamer}`, which collapses every frame to its final overlay. Frame basics are covered in [a first Beamer deck](/learn/beamer-basics/).
