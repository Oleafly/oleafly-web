---
title: "Color that survives print"
description: "xcolor, HTML specs, and using color for signal when journals go grayscale."
category: "type-and-shape"
order: 6
level: "beginner"
tags: ["formatting", "color"]
featured: false
updated: 2026-07-24
---

# Color that survives print

```latex
\usepackage{xcolor}
\textcolor{red}{warning}
\textcolor[HTML]{2563EB}{brand blue}
\colorbox{gray!15}{highlighted}

\definecolor{brand}{HTML}{2563EB}
```

Use color for signal, not decoration. Plenty of journals still print in grayscale, so a red highlight that only works on screen is easy to regret.
