---
title: "Nodes and arrows"
description: "Named nodes, relative placement, arrow tips."
category: "draw-in-tex"
order: 1
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Nodes and arrows

Nearly every TikZ diagram reduces to two ingredients. A node is a positioned piece of content, typically a labeled box or circle. An edge is a line or arrow connecting two nodes. Once you can place nodes and join them, flowcharts, pipelines, and block diagrams are all the same exercise at different sizes. The example below places two named boxes and draws a labeled arrow between them:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}
\node[draw] (src) {Source};
\node[draw, right=2cm of src] (dst) {Sink};
\draw[-{Latex}] (src) -- node[above] {edge} (dst);
\end{tikzpicture}
```

## Naming and placing nodes

In `\node[draw] (src) {Source};`, the bracket options style the node, and `draw` means draw its border, without which you get floating text. The `(src)` is the node's name, and `{Source}` is its content. The name is the important part: it lets other commands refer to this node without knowing its coordinates.

The second node shows why that matters. `right=2cm of src` comes from the `positioning` library and places `dst` two centimeters to the right of `src`, measured between their borders. The library also provides `left=of`, `above=of`, `below=of`, and diagonal combinations like `above right=of`. Build a diagram this way (each node relative to an existing one) and the layout stays intact when text changes size. Absolute coordinates like `\node at (4,2)` still have uses, but a diagram built on them needs manual renumbering every time one box grows.

## Drawing the arrow

`\draw (src) -- (dst);` draws a straight line between the two named nodes, and TikZ automatically starts and ends the line at the node borders rather than their centers. The `[-{Latex}]` option specifies the arrow tips: nothing before the hyphen means no tail tip, and `Latex` after it selects a solid arrowhead from the `arrows.meta` library at the destination. Writing `{Latex}-{Latex}` would give a double-headed arrow.

The mid-path `node[above] {edge}` is a label attached to the line itself. A node written inside a path is placed at that point of the path, halfway by default, and `above` shifts it just above the line so the text does not sit on the stroke. This is the standard way to annotate transitions and data flows.

## Habits that pay off

Name every node, even in tiny diagrams. Unnamed nodes cannot be connected to, and small diagrams rarely stay small. Prefer relative placement from `positioning` over absolute coordinates for the same reason. Every TikZ statement ends with a semicolon. Omitting one is the most common TikZ error, and the messages often point well away from the real problem. For arranging many boxes into tidy rows and columns, continue with [aligned flowchart boxes](/learn/tikz-flowchart/).
