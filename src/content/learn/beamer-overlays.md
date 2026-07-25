---
title: "Reveal lines on click"
description: "Overlay specs, pause, only, without overdoing it."
category: "on-stage"
order: 2
level: "intermediate"
tags: ["beamer"]
featured: false
updated: 2026-07-24
---

# Reveal lines on click

```latex
\begin{itemize}
 \item<1-> Always visible from slide 1
 \item<2-> Appears on slide 2
 \item<3-> Appears on slide 3
\end{itemize}

\pause % simpler step-through
```

Use `\only<2>{...}` for replacements. Use overlays sparingly; too many get tiring.
