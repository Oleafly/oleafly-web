---
title: The document skeleton
description: Document classes, the preamble, packages, and sectioning, the frame every LaTeX document hangs on.
---

## Document classes

The first line of every document picks its class:

```latex
\documentclass[11pt]{article}
```

| Class | Use for |
| --- | --- |
| `article` | Papers, short reports |
| `report` | Theses, multi-chapter documents |
| `book` | Books with parts and chapters |
| `beamer` | Slide presentations |
| `letter` | Formal letters |

Journal and conference classes (`IEEEtran`, `revtex4-2`, `acmart`,
`elsarticle`) replace `article` when a venue requires its own layout;
Oleafly's template gallery ships worked examples of each.

## A practical preamble

```latex
\documentclass[11pt]{article}
\usepackage[utf8]{inputenc}   % input encoding
\usepackage[T1]{fontenc}      % font encoding
\usepackage[margin=1in]{geometry}  % page margins
\usepackage{amsmath, amssymb} % math
\usepackage{graphicx}         % images
\usepackage{hyperref}         % clickable links
```

Packages extend LaTeX; `\usepackage` loads them. Oleafly's bundled Tectonic
engine downloads any package the first time you use it, so there is nothing
to install.

## Sectioning

```latex
\section{Introduction}
\subsection{Background}
\subsubsection{Prior work}
\paragraph{A note.}
```

Numbering, spacing, and the table of contents (`\tableofcontents`) come free.
Use `\section*{...}` for an unnumbered section.
