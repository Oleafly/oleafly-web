---
title: "Acronyms and symbol lists"
description: "glossaries-extra sketch, or a hand-built list when that is enough."
category: "long-form"
order: 4
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-24
---

# Acronyms and symbol lists

```latex
\usepackage[acronym]{glossaries-extra}
\makeglossaries
\newacronym{ml}{ML}{machine learning}

In text: \gls{ml} on first use expands; later uses stay short.
\printglossaries
```

Requires a glossaries build step. For a simple list of symbols, a hand-maintained `description` environment often suffices.
