---
title: "Where floats actually land"
description: "htbp, why forced here often fails, moving the environment closer to the text."
category: "floats-and-ink"
order: 3
level: "intermediate"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-24
---

# Where floats actually land

```latex
\begin{figure}[htbp] % here, top, bottom, page of floats
```

LaTeX delays floats to make pages look even. Fighting with only `[h!]` usually fails. Prefer `[htbp]`, put the figure near its first reference, or see [wrong position](/learn/figure-wrong-position/).
