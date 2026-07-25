---
title: "Command or environment?"
description: "Macros take arguments; environments wrap regions."
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-24
---

# Command or environment?

## Commands

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

## Environments

```latex
\begin{center}
 Centered block
\end{center}
```

If it wraps a region with a clear start and end, it is probably an environment. If it is a small substitution, it is a command.
