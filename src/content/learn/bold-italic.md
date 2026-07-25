---
title: "Emphasis without fighting the font"
description: "textbf, textit, emph, mono, and why emph nests better than hard-coded italics."
category: "type-and-shape"
order: 1
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-24
---

# Emphasis without fighting the font

```latex
\textbf{bold}
\textit{italic}
\emph{emphasis} % preferred in running text
\underline{avoid} % rarely used in body text
\texttt{monospace}
\textsc{Small Caps}
```

## Why `\emph`?

It nests correctly: emphasized text inside emphasized text flips back to roman. Hard-coded `\textit` does not.

For math bold, see [bold math](/learn/bold-math/).
