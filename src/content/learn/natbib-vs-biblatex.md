---
title: "natbib habits vs biblatex commands"
description: "Parenthetical and textual cites, and the names that replace them."
category: "cite-your-sources"
order: 8
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-24
---

# natbib habits vs biblatex commands

```latex
\usepackage{natbib}
\citet{knuth84} % Knuth (1984)
\citep*{knuth84} % Knuth, 1984
\citep{knuth84} % (Knuth, 1984)
```

biblatex equivalents: `\textcite`, `\parencite`, `\cite`. Migrating: keep the same `.bib`, replace package lines, switch to biber.
