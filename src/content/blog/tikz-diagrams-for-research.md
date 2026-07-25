---
title: "Research diagrams in TikZ when PowerPoint will not cut it"
description: "When to draw pipelines, automata, and commutative diagrams in TeX so they recolor for the journal and stay sharp in print."
date: 2026-07-08
tags: [tikz, figures, research]
---

PowerPoint diagrams become fuzzy rectangles in the PDF. TikZ diagrams stay
vector, match the document fonts, and recolor when a journal demands
grayscale or a different accent.

## Start tiny

A three-node pipeline teaches the model:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.5cm]
  \node[draw] (a) {Data};
  \node[draw,right=of a] (b) {Model};
  \node[draw,right=of b] (c) {Loss};
  \draw[-Latex] (a) -- (b) -- (c);
\end{tikzpicture}
```

Lessons: [first TikZ picture](/learn/tikz-intro/),
[nodes and arrows](/learn/tikz-nodes-arrows/).

## CS and engineering: flowcharts that align

Use the `positioning` library (`below=of`, `right=of`) so boxes share
coordinates. Manual absolute coordinates are how diagrams rot when you add
one node. Guide: [aligned flowcharts](/learn/tikz-flowchart/).

## Math and CS theory: commutative diagrams

`tikz-cd` is the standard for category-style diagrams without placing nodes
by hand. Guide: [commutative diagrams](/learn/commutative-diagrams/).

## Export when a coauthor needs PNG

Compile a `standalone` TikZ file to PDF, then convert if a slide deck needs
PNG. Or use the externalize library so each picture becomes its own PDF cache
and the main paper compiles faster.

## Keep diagrams in the repo

Store `.tex` sources for figures beside the paper, not only the exported
PNG. When the journal asks for thicker lines, you edit the source and
recompile instead of redrawing from a screenshot.
