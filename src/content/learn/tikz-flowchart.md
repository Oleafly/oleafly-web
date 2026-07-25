---
title: "Aligned flowchart boxes"
description: "positioning library so columns share an edge."
category: "draw-in-tex"
order: 2
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Aligned flowchart boxes

A flowchart looks amateurish for exactly one reason: boxes that almost line up. TikZ avoids the problem structurally, because every box is placed relative to another, so a column of boxes shares an axis by construction instead of by eyeballing. The second ingredient is a named style, so all boxes agree on their shape and minimum size. Here is a vertical three-step flow:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[
 box/.style={draw, rounded corners, align=center, minimum width=2.8cm},
 node distance=10mm and 14mm
]
\node[box] (i) {Input};
\node[box, below=of i] (p) {Process};
\node[box, below=of p] (o) {Output};
\draw[-Latex] (i) -- (p);
\draw[-Latex] (p) -- (o);
\end{tikzpicture}
```

## Defining a style once

The `box/.style={...}` line creates a reusable style named `box`. Its contents are ordinary node options: `draw` gives the node a border, `rounded corners` softens it, `align=center` centers multi-line text inside the node, and `minimum width=2.8cm` forces every box to at least that width so short labels do not produce shrunken boxes. From then on, `\node[box]` applies the whole set. When you decide the boxes need a fill color or a larger width, you change one line and the entire chart updates, which is the difference between a diagram you maintain and one you redraw.

## Spacing in two directions

`node distance=10mm and 14mm` sets the default gaps used by the `positioning` library: the first value is the vertical distance, the second the horizontal. With that in place, `below=of i` places the process box 10 mm below the input box, edge to edge, and perfectly centered on it. A second column would use `right=of p` and land 14 mm to the side. Because each placement chains off an existing node, inserting a step means adding one node and updating one `below=of` reference, and everything downstream shifts with it. You can also override the distance per node, as in `below=15mm of i`.

## Connecting the steps

Each `\draw[-Latex] (i) -- (p);` draws an arrow from one named node to the next, with `-Latex` selecting a solid arrowhead from the `arrows.meta` library at the destination end. The arrows connect at the node borders automatically. For a decision branch, draw from specific anchors, for example `(p.east)` to leave from the right side, and route with bends such as `-- ++(2,0) |-` once the chart needs corners.

TikZ output does not render in these in-page previews, so compile the snippet to see it. The classic mistake in flowcharts is placing a few boxes with absolute coordinates "just this once": those boxes are the ones that end up misaligned after the next edit. Keep every placement relative, and see [nodes and arrows](/learn/tikz-nodes-arrows/) for the underlying placement options.
