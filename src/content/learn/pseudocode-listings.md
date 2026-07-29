---
title: "Algorithms and source listings"
description: "algorithm2e sketch and listings for real code."
category: "field-kits"
order: 3
level: "intermediate"
tags: ["code"]
featured: false
updated: 2026-07-25
---

# Algorithms and source listings

Papers present code in two distinct forms, and LaTeX has a separate tool for each. Pseudocode is an idealized sketch of an algorithm, typeset with keywords and math, and the `algorithm2e` package handles it. Source listings are real code reproduced verbatim in a monospaced font, and the `listings` package handles those. Choosing the wrong tool is the usual source of friction, so it helps to see both.

## Pseudocode with algorithm2e

```latex
\usepackage[ruled,vlined]{algorithm2e}
\begin{algorithm}
\caption{Train}
\While{not converged}{
 Update $\theta$\;
}
\end{algorithm}
```

The package options set the visual style: `ruled` draws horizontal rules above and below the algorithm and places the caption at the top, the convention most venues expect, while `vlined` draws a small vertical line marking the extent of each block, so nesting stays readable without heavy indentation. The `algorithm` environment is a float, like a figure, so it carries the `\caption` that gives it a number for `\ref` to cite.

Inside, `\While{condition}{body}` typesets the loop with a bold keyword, the condition, and the body as an indented block. `\For`, `\If`, and `\Return` follow the same pattern. Statements end with `\;`, which prints the line's terminator and starts a new line. Forgetting it is the classic beginner error: the lines run together. Because this is ordinary LaTeX, math like `$\theta$` works inline, which is what pseudocode is for: describing the update rule in notation rather than in any particular language.

## Real code with listings

```latex
\usepackage{listings}
\begin{lstlisting}[language=Python]
def f(x):
 return x**2
\end{lstlisting}
```

The `lstlisting` environment reproduces its contents exactly, preserving whitespace and treating special characters literally, so you can paste code without escaping anything. The `language=Python` option turns on keyword highlighting for that language, and `listings` knows dozens of others. By default the output is plain. Most people add a one-time `\lstset{basicstyle=\ttfamily\small, numbers=left}` in the preamble to get a monospaced font at a sensible size with line numbers. To include a file directly instead of pasting, `\lstinputlisting[language=Python]{train.py}` reads it from disk, which keeps the paper in sync with the actual source. If you want colored, high-fidelity highlighting, the `minted` package is the stronger alternative, at the cost of requiring an external tool and shell escape.

## Choosing between them

Use pseudocode in the paper body to communicate the idea, and reserve verbatim listings for artifacts where exact code matters, such as appendices or tool descriptions. A common mistake is placing a `lstlisting` inside a Beamer frame without the `[fragile]` option, which fails with an opaque error; the same caution appears in [a first Beamer deck](/learn/beamer-basics/).
