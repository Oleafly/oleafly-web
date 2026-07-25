---
title: "Drop in a figure"
description: "graphicx, width, paths, PDF vs PNG."
category: "floats-and-ink"
order: 2
level: "beginner"
tags: ["figures"]
featured: true
updated: 2026-07-24
---

# Drop in a figure

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

Prefer **PDF/PNG**. Keep paths relative to the project root. Resize large photographs before including.
