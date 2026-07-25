---
title: "One root file, many chapters"
description: "include vs input, includeonly, and drafting one chapter at a time."
category: "long-form"
order: 1
level: "intermediate"
tags: ["thesis"]
featured: true
updated: 2026-07-24
---

# One root file, many chapters

```latex
% main.tex
\documentclass{report}
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

- `\include`, new page; produces `.aux` per file, works with `\includeonly{chapters/methods}`.
- `\input`, paste contents; no page break, no includeonly.

Draft fast with `\includeonly` while keeping labels consistent.
