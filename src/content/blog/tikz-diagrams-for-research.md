---
title: "Research diagrams in TikZ when PowerPoint will not cut it"
description: "When to draw pipelines, automata, and commutative diagrams in TeX so they recolor for the journal, stay sharp in print, and live as source in the repo."
date: 2026-07-08
tags: [tikz, figures, research]
---

PowerPoint diagrams become fuzzy rectangles in the PDF. TikZ diagrams stay
vector, match the document fonts, and recolor when a journal demands grayscale
or a different accent. The trade is a steeper first hour. After that, small
edits are text diffs, not screenshot archaeology.

You do not need TikZ for every figure. Photographs, raw microscope frames, and
dense plots from matplotlib usually stay as PDF/PNG includes. Use TikZ when the
figure is structure: pipelines, automata, architecture boxes, category diagrams,
simple trees.

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

Name nodes. Connect with `--` or explicit anchors (`(a.east)`). Prefer relative
placement (`right=of a`) over magic coordinates you will never remember.
Lessons: [first TikZ picture](/learn/tikz-intro/),
[nodes and arrows](/learn/tikz-nodes-arrows/).

## Styles beat one-off options

Define styles once so every box matches:

```latex
\tikzset{
  block/.style={draw, rounded corners, align=center, minimum height=1cm},
  arr/.style={-Latex}
}
```

When the journal asks for thicker lines or monochrome, change the style, not
twenty nodes. Color with named colors or a small palette macro so you can swap
accents without hunting hex codes.

## CS and engineering: flowcharts that align

Use the `positioning` library (`below=of`, `right=of`) so boxes share a grid.
Manual absolute coordinates are how diagrams rot when you insert one node. Keep
text short; put details in the caption. Guide:
[aligned flowcharts](/learn/tikz-flowchart/).

For neural net or systems sketches, separate "blocks" from "annotations."
Annotations can be smaller font nodes without borders so the main path stays
readable at two-column width.

## Math and theory: commutative diagrams

`tikz-cd` is the usual path for category-style diagrams without placing every
node by hand:

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
  A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
  C \arrow[r,"k"'] & D
\end{tikzcd}
```

Guide: [commutative diagrams](/learn/commutative-diagrams/). For trees and
proof-theoretic diagrams, specialized libraries exist; start simple before you
import half of CTAN.

## Externalize and compile time

A paper with twenty TikZ figures will slow full compiles. Options:

- Put each figure in its own file and `\input` it.
- Use the `external` library so pictures become cached PDFs.
- Draft with `\tikzexternaldisable` when you only care about prose.

Export for slides: compile a `standalone` TikZ document to PDF, convert to PNG
only if the deck tool cannot take PDF. Keep the `.tex` as source of truth.

## Canvas tools vs hand-written TikZ

Some research editors include a diagram canvas that emits editable TikZ (for
example Oleafly's Diagram Composer: draw, tweak code, compile the figure,
insert). That is useful for geometry you can drag. Hand-written TikZ still wins
for tight commutative diagrams and highly regular grids. Either way, commit the
TikZ source, not only a PNG.

## Keep diagrams in the repo

Store figure sources next to the paper:

```text
figures/
  pipeline.tex
  pipeline.pdf   % optional build product; often gitignored
```

When the journal wants thicker lines, you edit the source and recompile. When a
coauthor "improves" a screenshot in a slide tool, you have lost the only
editable version.

## Common failure modes

Overflow in two-column is common. Scale with `\resizebox` as a last resort;
redesign for width first. Font mismatch is another: prefer default document
fonts over hard-coded font families inside TikZ unless the journal requires it.
Check contrast for talks, because invisible gray on projectors is a classic
trap. And unlabeled arrows force the caption to explain every edge, which means
the diagram is incomplete.

## Layers and overlays

For talks and papers that share a figure, build the diagram in layers: base
boxes first, then arrows, then labels. Comment out layers while debugging
placement. Beamer overlays (`\pause`, `\onslide`) can reveal a pipeline step by
step from the same TikZ source if you keep node names stable.

## Accessibility and print

Do not encode meaning only in red vs green. Use shape or line style as well.
Check the figure in grayscale. Captions should still make sense if the reader is
color-blind or printing on a black-and-white lab printer.

## A workflow that works

Sketch on paper for thirty seconds, then build the smallest TikZ that shows the
claim. Define styles once and reuse them. Compile the figure alone until it
looks right, drop it into the paper, and let the caption carry the claim. Commit
the `.tex`.

PowerPoint is fine for a one-off lab meeting. For the PDF a journal will print,
vector source you can recolor beats another round of "can you send the editable
file?"
