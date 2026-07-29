---
title: "LaTeX quick reference"
description: "Dense one-page card for skeleton, text, math, floats, cites, layout, engines, TikZ, Beamer, and common log errors."
category: "desk-reference"
order: 1
level: "beginner"
tags: ["cheatsheet", "reference"]
featured: true
updated: 2026-07-24
---

# LaTeX quick reference

Keep this next to the editor. Every row is paste-ready. For longer lessons, open the matching track on [Learn](/learn/).

**Jump:**
[Skeleton](#document-skeleton) ·
[Preamble](#preamble-patterns) ·
[Text](#text-and-formatting) ·
[Sections](#sectioning-and-structure) ·
[Refs](#cross-references-and-links) ·
[Math](#math-mode) ·
[Tables](#tables) ·
[Figures](#figures-and-floats) ·
[Cites](#citations-and-bibliography) ·
[Layout](#layout) ·
[Engines](#engines-and-packages) ·
[TikZ](#tikz-minimal) ·
[Beamer](#beamer-minimal) ·
[Theorems](#theorems) ·
[Fields](#field-bits) ·
[Compile](#compile-loop) ·
[Errors](#log-errors-decode-the-first-one) ·
[Package order](#package-load-order-rules-of-thumb)

## Document skeleton

```latex
\documentclass[11pt,a4paper]{article}  % or report, book, beamer
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb,amsfonts}
\usepackage{graphicx,booktabs}
\usepackage{xcolor}
\usepackage[colorlinks=true,linkcolor=blue,citecolor=blue,urlcolor=blue]{hyperref}
% \usepackage[backend=biber,style=numeric]{biblatex}
% \addbibresource{refs.bib}

\title{Title}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle
\begin{abstract} ... \end{abstract}
\tableofcontents
\section{Introduction}
...
% \bibliographystyle{plain}\bibliography{refs}   % BibTeX
% \printbibliography                             % biblatex
\end{document}
```

| Class | Typical use |
| --- | --- |
| `article` | Papers, notes, homework |
| `report` | Longer reports with chapters |
| `book` | Books / many theses |
| `beamer` | Slides |
| University `.cls` | Thesis templates |

| File | Role |
| --- | --- |
| `.tex` | Source |
| `.bib` | Bibliography database |
| `.cls` / `.sty` | Class / package |
| `.aux` `.log` `.toc` | Generated; do not edit |

## Preamble patterns

```latex
\usepackage[margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\usepackage{fancyhdr}
\pagestyle{fancy}
\usepackage{siunitx}          % units and numbers
\usepackage{cleveref}         % after hyperref
\DeclareMathOperator*{\argmax}{arg\,max}
\newcommand{\vect}[1]{\boldsymbol{#1}}
```

Load `hyperref` late. Load `cleveref` after `hyperref`.

## Text and formatting

| Want | Type |
| --- | --- |
| Bold / italic / mono | `\textbf{}` `\textit{}` `\texttt{}` |
| Emphasis (nests) | `\emph{}` |
| Small caps | `\textsc{}` |
| Underline (rare) | `\underline{}` |
| Sizes | `{\small }` `{\large }` `{\Large }` `{\footnotesize }` |
| New paragraph | blank line |
| Line break | `\\` or `\newline` |
| Non-breaking space | `~` |
| Horizontal space | `\quad` `\qquad` `\hspace{1em}` |
| Vertical space | `\vspace{1em}` `\bigskip` |
| Center / flush | `center` / `flushright` environments |
| Quote | `quote` or `quotation` |
| Footnote | `\footnote{...}` |
| Comment | `% rest of line` |

### Escape specials (text mode)

| Char | Code | Char | Code |
| --- | --- | --- | --- |
| `%` | `\%` | `$` | `\$` |
| `&` | `\&` | `#` | `\#` |
| `_` | `\_` | `{` `}` | `\{` `\}` |
| `~` | `\textasciitilde` | `^` | `\textasciicircum` |
| `\` | `\textbackslash` | | |

### Lists

```latex
\begin{itemize}
  \item Bullet
\end{itemize}

\begin{enumerate}
  \item Numbered
\end{enumerate}

\begin{description}
  \item[Term] Definition
\end{description}
```

Custom label: `\item[(a)] ...`

### Page numbers and breaks

| Want | Type |
| --- | --- |
| Style | `\pagestyle{plain}` / `empty` / `fancy` |
| This page only | `\thispagestyle{empty}` |
| Roman / arabic | `\pagenumbering{roman}` then `arabic` |
| New page | `\newpage` `\clearpage` |
| Soft break request | `\pagebreak[3]` |
| Keep together | `\nopagebreak` |

## Sectioning and structure

```latex
\part{...}            % book
\chapter{...}         % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
\section*{Unnumbered}
\addcontentsline{toc}{section}{Unnumbered}
```

| Want | Type |
| --- | --- |
| TOC | `\tableofcontents` |
| List of figures/tables | `\listoffigures` `\listoftables` |
| Abstract | `\begin{abstract}...\end{abstract}` |
| Appendix | `\appendix` then `\section` / `\chapter` |
| Multi-file | `\include{chapters/intro}` or `\input{...}` |
| Draft one chapter | `\includeonly{chapters/methods}` |

## Cross-references and links

```latex
\section{Methods}\label{sec:methods}
\begin{equation}\label{eq:main} E=mc^2 \end{equation}
\begin{figure}
  ...
  \caption{Pipeline}\label{fig:pipe}
\end{figure}

See Section~\ref{sec:methods}, Eq.~\eqref{eq:main}, Figure~\ref{fig:pipe}.
% with cleveref:
% \cref{fig:pipe}  \Cref{sec:methods}
```

```latex
\usepackage{hyperref}
\url{https://oleafly.com}
\href{https://oleafly.com}{Oleafly}
\hypersetup{pdftitle={My Paper}, pdfauthor={You}}
```

Put `\label` **after** `\caption` so the number is correct.

## Math mode

| Want | Type |
| --- | --- |
| Inline | `$...$` or `\( ... \)` |
| Display unnumbered | `\[ ... \]` |
| Display numbered | `equation` + `\label` |
| Multi-line aligned | `align` / `align*` |
| Centered multi-line | `gather` / `gather*` |
| One number, many lines | `equation` + `split` |
| Long broken line | `multline` |
| Suppress one number | `\notag` or `\nonumber` |
| Reference | `\ref{eq:x}` or `\eqref{eq:x}` |

```latex
\begin{align}
  a &= b + c \label{eq:a} \\
  d &= e + f \notag
\end{align}
```

### Fractions, roots, scripts

```latex
\frac{a}{b} \dfrac{a}{b} \tfrac{a}{b}
\sqrt{x} \sqrt[n]{x}
x_i  x^{2n}  x_{ij}^{2}
f'  f''  \dot{x} \ddot{x}
```

### Greek (math mode)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon \zeta \eta
\theta \vartheta \iota \kappa \lambda \mu \nu \xi
\pi \varpi \rho \varrho \sigma \varsigma \tau \upsilon
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Upsilon \Phi \Psi \Omega
```

### Operators, relations, sets, arrows

```latex
\pm \mp \cdot \times \div \ast \star \circ \bullet
\leq \geq \neq \approx \equiv \sim \simeq \propto \ll \gg
\in \notin \subset \subseteq \supset \supseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \Leftrightarrow \uparrow \downarrow
\infty \partial \nabla \ell \forall \exists \neg \land \lor
```

### Accents and alphabets

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{ABC}
\mathbb{N Z Q R C}   \mathcal{L}   \mathfrak{g}
\mathrm{d}x   \mathbf{A}   \boldsymbol{\beta}
```

### Big operators and calculus

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint \iint
\lim_{x \to 0} \max_x \min_x \inf \sup
\frac{dy}{dx} \frac{\partial f}{\partial x}
\argmax_x   % after \DeclareMathOperator*{\argmax}{arg\,max}
```

### Matrices

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix}  % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix}  % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix}  % | |
\begin{array}{r|cc} 1 & 2 & 3 \\ \hline 4 & 5 & 6 \end{array}
```

### Piecewise

```latex
f(x) =
\begin{cases}
  x^2 & x \ge 0 \\
  -x  & x < 0
\end{cases}
```

### Delimiters

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
\lvert x \rvert \lVert v \rVert
```

Live preview: [equation tool](/tools/equation-preview/).

## Tables

```latex
\usepackage{booktabs}
\begin{table}[htbp]
  \centering
  \caption{Results}\label{tab:res}
  \begin{tabular}{lcc}
    \toprule
    Model & Acc & F1 \\
    \midrule
    Baseline & 0.81 & 0.79 \\
    Ours & 0.87 & 0.86 \\
    \bottomrule
  \end{tabular}
\end{table}
```

| Want | Type |
| --- | --- |
| Align columns | `l` `c` `r` `p{3cm}` |
| Vertical rule (avoid) | `|` |
| Span columns | `\multicolumn{2}{c}{...}` |
| Span rows | `\multirow{2}{*}{...}` (multirow) |
| Multi-page | `longtable` |
| Visual builder | [table generator](/tools/table-generator/) |

Design habit: three horizontal rules, no vertical lines.

## Figures and floats

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{figures/plot.pdf}
  \caption{Overview.}\label{fig:plot}
\end{figure}
```

| Want | Type |
| --- | --- |
| Width | `width=0.5\textwidth` or `width=\linewidth` |
| Height | `height=4cm` (avoid both unless you must) |
| Page of PDF | `page=2` option |
| Side by side | two `minipage`s at `0.48\textwidth` |
| Subfigures | `subcaption` package |
| Placement | `[htbp]` (here, top, bottom, page) |
| Barrier | `\usepackage{placeins}` + `\FloatBarrier` |

## Citations and bibliography

### BibTeX (classic)

```latex
See \cite{knuth84} and \cite{a,b}.
\bibliographystyle{plain}  % abbrv, alpha, ieeetr, apalike, ...
\bibliography{refs}
```

### biblatex + biber

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84} \parencite{knuth84} \textcite{knuth84}
\printbibliography
```

### natbib

```latex
\usepackage{natbib}
\citet{key}   % Author (year)
\citep{key}   % (Author, year)
\citep*{key}  % Author, year
```

### Minimal `.bib` entry

```bibtex
@article{knuth84,
  author  = {Knuth, Donald E.},
  title   = {Literate Programming},
  journal = {The Computer Journal},
  year    = {1984},
  volume  = {27},
  pages   = {97--111}
}
```

Validate: [BibTeX validator](/tools/bibtex-validator/).

| Symptom | Fix |
| --- | --- |
| `[?]` or `?` | Wrong key, missing pass, or BibTeX vs Biber mismatch |
| Empty bibliography | Path, backend, or no `\cite` / wrong print command |

## Layout

```latex
\usepackage[a4paper,margin=1in]{geometry}
\usepackage{setspace}\onehalfspacing
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.6em}
```

| Want | Type |
| --- | --- |
| One-off no indent | `\noindent` |
| Manual length | `\hspace{2em}` `\vspace{1ex}` |
| Units | `pt` `em` `ex` `cm` `mm` `in` `\textwidth` `\linewidth` |

## Engines and packages

| Engine | Good for |
| --- | --- |
| pdfLaTeX | Max journal compatibility |
| XeLaTeX | System fonts, many scripts (`fontspec`) |
| LuaLaTeX | Modern Unicode + scripting |
| Tectonic | Bundled / on-demand packages (Oleafly default) |

```latex
% Xe/Lua
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

Missing package (TeX Live): `tlmgr install siunitx`

## Color

```latex
\usepackage{xcolor}
\textcolor{red}{warn}
\textcolor[HTML]{2563EB}{brand}
\definecolor{brand}{HTML}{2563EB}
\colorbox{gray!12}{highlight}
```

## TikZ (minimal)

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.4cm]
  \node[draw,rounded corners] (a) {In};
  \node[draw,rounded corners,right=of a] (b) {Out};
  \draw[-Latex] (a) -- (b);
\end{tikzpicture}
```

Commutative diagrams: `tikz-cd`. Standalone export: `\documentclass[tikz]{standalone}`.

## Beamer (minimal)

```latex
\documentclass{beamer}
\usetheme{Madrid}
\title{Talk}\author{You}
\begin{document}
\frame{\titlepage}
\begin{frame}{Results}
  \begin{itemize}
    \item<1-> First
    \item<2-> Second
  \end{itemize}
  \pause
\end{frame}
\end{document}
```

## Theorems

```latex
\usepackage{amsthm}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\begin{theorem}[Name]
  Statement.
\end{theorem}
\begin{proof}
  ...
\end{proof}
```

## Field bits

```latex
% Chemistry
\usepackage[version=4]{mhchem}
\ce{H2O} \ce{CO2 + C -> 2CO}

% Physics
\usepackage{braket}
\braket{\psi|\phi} \braket{\psi|A|\phi}

% Code
\usepackage{listings}
\begin{lstlisting}[language=Python]
def f(x):
    return x**2
\end{lstlisting}
```

## Compile loop

1. Edit `.tex`
2. Run engine (pdfLaTeX / XeLaTeX / LuaLaTeX / Tectonic)
3. If citations: BibTeX or Biber
4. Run engine again (often twice) until `??` and TOC settle

In Oleafly, compile (or auto-compile) handles the loop; SyncTeX jumps between source and PDF.

## Log errors (decode the first one)

| Symptom | Usual cause |
| --- | --- |
| Text vanishes mid-line | Bare `%` started a comment |
| `Missing $ inserted` | `_` or `^` or math command in text |
| `Undefined control sequence` | Typo or missing package |
| `File not found` | Wrong path / extension for input or image |
| References print `??` | Need another compile pass |
| Citations `[?]` | Bad key, wrong backend, or missing bib pass |
| Empty bibliography | Wrong `\bibliography` path or biblatex mismatch |
| `Overfull \hbox` | Unbreakable line (URL, long math, no hyphen) |
| Emergency stop | Missing `\end{document}`, bad include, runaway brace |
| Runaway argument | Missing `}` or `\end{...}` |

## Package load order (rules of thumb)

1. Class options first
2. Encoding / fonts
3. Geometry, setspace, language
4. Math, graphics, tables
5. Domain packages
6. `hyperref` near the end
7. `cleveref` after `hyperref`

## Useful links in Oleafly Learn

| Track | Start |
| --- | --- |
| Open the loop | [First PDF](/learn/first-document/) |
| Equation craft | [Math mode](/learn/math-mode/) · [Symbols](/learn/math-symbols-cheatsheet/) |
| Floats | [Tables](/learn/create-table/) · [Images](/learn/insert-images/) |
| Citations | [Add cites](/learn/add-citations/) |
| Log literacy | [Undefined control sequence](/learn/undefined-control-sequence/) |
| Local studio | [Oleafly workflow](/learn/oleafly-workflow/) |
| Browser tools | [Equation](/tools/equation-preview/) · [Table](/tools/table-generator/) · [BibTeX](/tools/bibtex-validator/) |

Full map: [/learn/](/learn/).
