---
title: "Operators you invent once"
description: "DeclareMathOperator for argmin, argmax, and similar names."
category: "notation-depth"
order: 3
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-24
---

# Operators you invent once

```latex
\usepackage{amsmath}
\DeclareMathOperator*{\argmin}{arg\,min}
\DeclareMathOperator*{\argmax}{arg\,max}

\[
\theta^\star = \argmin_\theta \mathcal{L}(\theta)
\]
```

The starred form puts limits under the operator in display mode.
