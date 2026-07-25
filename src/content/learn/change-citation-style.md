---
title: "Numeric, author-year, journal styles"
description: "Swap styles without rewriting the database."
category: "cite-your-sources"
order: 4
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-24
---

# Numeric, author-year, journal styles

**BibTeX:** change `\bibliographystyle{plain}` to `abbrv`, `alpha`, `ieeetr`, `apalike`, or a journal's `.bst`.

**biblatex:**

```latex
\usepackage[style=authoryear]{biblatex}
```

Recompile with the correct backend after style changes.
