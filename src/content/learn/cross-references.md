---
title: "Point at other parts of the PDF"
description: "label and ref, plus cleveref for automatic names."
category: "paper-bones"
order: 5
level: "beginner"
tags: ["structure", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Point at other parts of the PDF

Typing "see Figure 3" by hand is a promise you cannot keep. Add one figure earlier in the paper and every hand-typed number after it is wrong. LaTeX solves this with a two-part mechanism: `\label` attaches a name of your choosing to a numbered thing, and `\ref` prints whatever number that thing ended up with. You refer to names, and the compiler keeps the numbers honest.

## Label and ref

```latex
\section{Methods}\label{sec:methods}
\begin{equation}\label{eq:main} ... \end{equation}
\begin{figure}
 ...
 \caption{...}\label{fig:pipeline}
\end{figure}

See Section~\ref{sec:methods}, Eq.~\eqref{eq:main}, and Figure~\ref{fig:pipeline}.
```

`\label{sec:methods}` records the most recently assigned number, here the section's, under the key `sec:methods`. Later, `\ref{sec:methods}` prints that number, and `\eqref` is the amsmath variant that adds the parentheses convention for equations, printing "(1)" rather than "1".

Two details in this example are load-bearing. First, inside a figure the label must come after `\caption`, because the caption is what steps the figure counter; a label placed before it silently picks up the current section number instead. Second, the `~` in `Figure~\ref{...}` is a non-breaking space, which keeps the word and its number on the same line rather than letting "Figure" end one line and "3" start the next.

The `sec:`, `fig:`, and `eq:` prefixes are pure convention. LaTeX does not require them, but they make keys readable and let editor autocomplete group your labels by kind.

## Why you see ??

On the first compile after adding a label, `\ref` prints `??`. Numbers are resolved through the `.aux` file written during the previous run, so a new label needs one more compile to appear; [why you compile more than once](/learn/compile-to-pdf/) explains the mechanism. A `??` that survives two consecutive compiles almost always means the key in `\ref` does not match the key in `\label`.

## cleveref writes the word for you

With cleveref (load after hyperref):

```latex
\usepackage{cleveref}
\cref{fig:pipeline}
```

`\cref{fig:pipeline}` prints "Figure 3", the type name included, and adapts if the label turns out to be a table or an equation instead. `\Cref` capitalizes for sentence starts, and `\cref{eq:a,eq:b,eq:c}` compresses a list into a range. Note the load order: cleveref is one of the few packages that must come after [hyperref](/learn/hyperlinks/), the reverse of the usual rule. Adopt it early, because retrofitting `\cref` into a paper full of hand-written "Figure~\ref" phrases is tedious.
