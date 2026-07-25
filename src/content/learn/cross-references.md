---
title: "Point at other parts of the PDF"
description: "label and ref, plus cleveref for automatic names."
category: "paper-bones"
order: 5
level: "beginner"
tags: ["structure", "cross-ref"]
featured: false
updated: 2026-07-24
---

# Point at other parts of the PDF

```latex
\section{Methods}\label{sec:methods}
\begin{equation}\label{eq:main} ... \end{equation}
\begin{figure}
 ...
 \caption{...}\label{fig:pipeline}
\end{figure}

See Section~\ref{sec:methods}, Eq.~\eqref{eq:main}, and Figure~\ref{fig:pipeline}.
```

With cleveref (load after hyperref):

```latex
\usepackage{cleveref}
\cref{fig:pipeline}
```
