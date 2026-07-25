---
title: "Margins in one package"
description: "geometry for page size, margins, binding offset."
category: "the-page"
order: 1
level: "beginner"
tags: ["layout"]
featured: true
updated: 2026-07-24
---

# Margins in one package

```latex
\usepackage[margin=1in]{geometry}
% or
\usepackage[a4paper,top=2.5cm,bottom=2.5cm,left=2.5cm,right=2.5cm]{geometry}
```

Binding offset: `bindingoffset=0.5cm`. Avoid mixing geometry with manual `\setlength{\textwidth}{...}` unless you know why.
