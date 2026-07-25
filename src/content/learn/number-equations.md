---
title: "Numbers and pointers for equations"
description: "label, ref, eqref, and numbering only the lines you mean."
category: "equation-craft"
order: 6
level: "beginner"
tags: ["math", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Numbers and pointers for equations

Numbering an equation is a promise that you will refer to it later. LaTeX handles both halves of that promise: the `equation` environment assigns the number, and the label system lets you point at it from anywhere in the document without ever typing the number yourself.

```latex
\begin{equation}
 \label{eq:bayes}
 p(\theta \mid y) \propto p(y \mid \theta)\, p(\theta)
\end{equation}
As shown in \eqref{eq:bayes}, ...
```

## Labels and references

`\begin{equation}` numbers the displayed line. `\label{eq:bayes}` attaches the name `eq:bayes` to that number; the name is yours to choose, and an `eq:` prefix keeps equation labels distinct from figures and tables. To cite it, `\ref{eq:bayes}` prints the bare number, while `\eqref{eq:bayes}`, from `amsmath`, wraps it in parentheses to match how the number appears beside the equation. Prefer `\eqref` for equations so the two styles agree.

Because numbers are recorded on one pass and read on the next, a fresh compile shows `??` until the following run; [question marks instead of numbers](/learn/equations-show-qq/) covers that cycle.

If a displayed equation is never referenced, do not number it. Use `\[ ... \]` or the starred `equation*` instead, so numbers mark only the lines a reader might need to find again.

## Numbering some lines in align

Multi-line derivations in `align` number every line by default, which is rarely what you want. Two commands adjust that per line:

```latex
\begin{align}
 a &= b \label{eq:a} \\
 c &= d \notag \\
 e &= f \label{eq:e}
\end{align}
```

`\notag` suppresses the number on its line, so here the intermediate step stays unnumbered while the first and last lines keep their numbers and labels. Put each `\label` on the line it names, before the `\\`, so it binds to the right number. The all-or-nothing shortcut is `align*`, which numbers nothing; the full family of multi-line environments is covered in [multi-line equations that line up](/learn/align-equations/).

The common mistake is writing the literal number, as in "see Equation 3", which breaks the moment you insert an equation above it. Always go through a label and let LaTeX renumber on every compile. You can watch the numbering update live as you add and remove `\notag` in the [playground](/live/).
