---
title: "Captions that match the number"
description: "Put label after caption so the number sticks."
category: "floats-and-ink"
order: 4
level: "beginner"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-24
---

# Captions that match the number

Put `\label` **after** `\caption` so the label picks up the caption's number:

```latex
\caption{A neat diagram.}
\label{fig:neat}
```

Reference: `Figure~\ref{fig:neat}`.
