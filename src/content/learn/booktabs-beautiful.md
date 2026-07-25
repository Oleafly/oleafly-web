---
title: "Three-rule tables"
description: "toprule, midrule, bottomrule, and skipping vertical lines."
category: "float-surgery"
order: 3
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-24
---

# Three-rule tables

## Design rules

1. **No vertical rules**
2. **Three horizontal rules:** top, mid (header), bottom
3. **`\cmidrule`** for partial lines under grouped headers
4. Align numbers on the decimal when possible (`siunitx`)

```latex
\toprule
...
\midrule
...
\bottomrule
```
