---
title: "Your first TikZ picture"
description: "Nodes, edges, a three-box pipeline that stays vector."
category: "floats-and-ink"
order: 6
level: "intermediate"
tags: ["tikz", "figures"]
featured: false
updated: 2026-07-25
---

# Your first TikZ picture

TikZ is a drawing language that lives inside your LaTeX document. Instead of importing a diagram exported from another tool, you describe it in text, and the compiler draws it. The payoff is that the output is vector graphics using your document's own fonts, so labels match the surrounding text exactly and stay sharp at any zoom. The cost is that you write coordinates and options instead of dragging boxes. For diagrams built from boxes and arrows, the tradeoff is usually worth it. Here is a three-box pipeline, the canonical first picture:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[node distance=1.5cm]
 \node[draw, rounded corners] (a) {Input};
 \node[draw, rounded corners, right=of a] (b) {Model};
 \node[draw, rounded corners, right=of b] (c) {Output};
 \draw[-Latex] (a) -- (b);
 \draw[-Latex] (b) -- (c);
\end{tikzpicture}
```

## Nodes

A node is a piece of content, usually text, placed at a position, optionally with a shape drawn around it. In `\node[draw, rounded corners] (a) {Input};` the options in square brackets say to draw the node's border and round its corners, the `(a)` gives the node a name you can refer to later, and `{Input}` is the text inside. The second node uses `right=of a`, from the `positioning` library, which places it to the right of node `a` at the distance set by `node distance=1.5cm` in the environment's options. Place nodes relative to each other rather than at absolute coordinates, and the whole diagram adjusts when one label gets longer.

## Edges

An edge is a line connecting two points. Because the nodes are named, you connect them by name: `\draw (a) -- (b);` draws a straight line from node `a` to node `b`. TikZ starts and ends the line at the node borders rather than their centers. The `[-Latex]` option sets the arrow tip style from the `arrows.meta` library, giving the line a solid arrowhead at its destination. The tip applies once per path, at its end, which is why the example uses two `\draw` commands. A single `(a) -- (b) -- (c)` path would put an arrowhead only at `c`.

## Where to go next

Wrap the `tikzpicture` in a `figure` environment when it needs a caption and a number, exactly like an image. TikZ code does not render in these in-page previews, so compile the snippet in a project to see the result. In Oleafly, the Diagram Composer can also produce editable TikZ as a starting point. The most common beginner error is forgetting the semicolon that ends every TikZ command, which produces a long confusing error. When a diagram grows past three boxes, continue with [nodes and arrows](/learn/tikz-nodes-arrows/) and [aligned flowchart boxes](/learn/tikz-flowchart/).
