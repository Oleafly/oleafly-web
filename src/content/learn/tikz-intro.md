---
title: "Your first TikZ picture"
description: "Nodes, edges, a three-box pipeline that stays vector."
category: "floats-and-ink"
order: 6
level: "intermediate"
tags: ["tikz", "figures"]
featured: false
updated: 2026-07-24
---

# Your first TikZ picture

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[node distance=1.5cm]
 \node[draw, rounded corners] (a) {Input};
 \node[draw, rounded corners, right=of a] (b) {Model};
 \node[draw, rounded corners, right=of b] (c) {Output};
 \draw[-Latex] (a) -- (b) -- (c);
\end{tikzpicture}
```

More: [nodes & arrows](/learn/tikz-nodes-arrows/), [flowcharts](/learn/tikz-flowchart/).
