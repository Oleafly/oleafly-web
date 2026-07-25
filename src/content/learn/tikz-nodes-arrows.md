---
title: "Nodes and arrows"
description: "Named nodes, relative placement, arrow tips."
category: "draw-in-tex"
order: 1
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-24
---

# Nodes and arrows

```latex
\usetikzlibrary{positioning,arrows.meta}
\node[draw] (src) {Source};
\node[draw, right=2cm of src] (dst) {Sink};
\draw[-{Latex}] (src) -- node[above] {edge} (dst);
```

Name every node; prefer relative `positioning` over absolute coordinates.
