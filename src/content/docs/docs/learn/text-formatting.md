---
title: Text and formatting
description: Emphasis, lists, quotes, verbatim text, and the characters LaTeX treats specially.
---

## Emphasis

```latex
\textbf{bold}  \textit{italic}  \emph{context-sensitive emphasis}
\texttt{typewriter}  \textsc{Small Caps}  \underline{underline}
```

Prefer `\emph` over `\textit` in prose: nested emphasis flips automatically.

## Lists

```latex
\begin{itemize}
  \item First point
  \item Second point
\end{itemize}

\begin{enumerate}
  \item Step one
  \item Step two
\end{enumerate}
```

Nest them freely; LaTeX adjusts markers and indentation.

## Special characters

These ten characters mean something to LaTeX and must be escaped to print:

```latex
\% \$ \& \# \_ \{ \}   % escape with a backslash
\textbackslash{}        % the backslash itself
\textasciitilde{} \textasciicircum{}  % ~ and ^
```

Unescaped `%` starts a comment and silently eats the rest of the line, which
is the single most common "where did my text go" bug.

## Verbatim

For code or literal text, `\verb|like this|` inline, or:

```latex
\begin{verbatim}
anything $ % & here prints as-is
\end{verbatim}
```

## Spacing rules worth knowing

Multiple spaces collapse to one. A blank line starts a new paragraph. `~` is
a non-breaking space (`Figure~\ref{fig:x}` keeps them together). `\\` forces
a line break without a new paragraph.
