---
title: "Trees and simple graphs"
description: "child syntax and spacing knobs."
category: "draw-in-tex"
order: 3
level: "advanced"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Trees and simple graphs

Hierarchies come up constantly: parse trees, decision trees, file layouts, taxonomies. Drawing one box at a time with `positioning` works, but keeping siblings evenly spread and levels evenly spaced by hand is tedious. The TikZ `trees` library lets you instead describe the hierarchy itself, using nested `child` operations, and computes the layout for you:

```latex
\usetikzlibrary{trees}
\begin{tikzpicture}[
 every node/.style={draw, circle, minimum size=7mm},
 level distance=12mm,
 sibling distance=18mm
]
\node{A}
 child{node{B}}
 child{node{C}
 child{node{D}}
 child{node{E}}};
\end{tikzpicture}
```

## Reading the child syntax

The picture contains a single statement. It starts with the root, `\node{A}`, and each `child{...}` attached to it declares one subtree. A child usually contains a `node{...}` for its own label, and may contain further `child` operations, which is how `C` gets children `D` and `E`. The nesting of braces mirrors the nesting of the tree, so you can read the structure directly from the indentation. TikZ places each level below the previous one and draws the connecting edges automatically. The one statement ends with a single semicolon after the final brace. A missing or extra semicolon inside the structure is the usual cause of errors here.

## The three layout knobs

The options at the top control appearance and spacing. `every node/.style={draw, circle, minimum size=7mm}` applies a style to all nodes at once: each gets a drawn border, a circular shape, and a minimum diameter of 7 mm so single letters produce uniform circles. `level distance=12mm` sets the vertical gap between a parent and its children. `sibling distance=18mm` sets the horizontal gap between adjacent children of the same parent.

Sibling distance is the knob you will adjust most. The `trees` library reserves the same width for every subtree at a given level, so wide subtrees can collide if the value is too small. The standard remedy is to widen spacing near the top, where subtrees are broadest, with per-level settings such as `level 1/.style={sibling distance=36mm}` and `level 2/.style={sibling distance=18mm}`. If your labels differ a lot in width, switch from circles to rectangles by removing `circle` from the shared style.

## Beyond small trees

Edges pick up styling through `edge from parent/.style`, for example to add arrowheads or thicker lines. For trees beyond roughly a dozen nodes, or for general graphs with cycles, the `trees` library becomes limiting. The `forest` package handles large trees with automatic packing. The `graphs` library with the `graphdrawing` algorithms covers arbitrary graphs, though that path requires LuaLaTeX. TikZ does not render in these in-page previews, so compile the example to see the layout. Start with the basics in [your first TikZ picture](/learn/tikz-intro/) if this syntax is new.
