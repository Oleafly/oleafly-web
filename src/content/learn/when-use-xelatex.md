---
title: "Why people switch to XeLaTeX"
description: "System fonts, complex scripts, fontspec templates."
category: "runtime"
order: 2
level: "intermediate"
tags: ["engines"]
featured: false
updated: 2026-07-24
---

# Why people switch to XeLaTeX

Use XeLaTeX when you need:

- System fonts (`\setmainfont{Inter}`)
- Complex scripts
- Templates that load `fontspec` / `polyglossia`

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

Oleafly's bundled engine is XeTeX-based (Tectonic).
