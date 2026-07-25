---
title: "A first Beamer deck"
description: "Theme, title frame, outline, one results slide."
category: "on-stage"
order: 1
level: "intermediate"
tags: ["beamer"]
featured: true
updated: 2026-07-25
---

# A first Beamer deck

Beamer is the standard LaTeX document class for presentations. Instead of pages, the document produces slides, and everything you already know carries over: the same math, the same figures, the same bibliography commands. The practical draw for paper authors is reuse, since equations and TikZ diagrams from the manuscript paste into the talk unchanged. Here is a minimal but complete deck:

```latex
\documentclass{beamer}
\usetheme{Madrid}
\title{Talk Title}
\author{You}
\begin{document}
\frame{\titlepage}
\begin{frame}{Outline}
 \tableofcontents
\end{frame}
\begin{frame}{Results}
 \begin{itemize}
 \item Finding one
 \item Finding two
 \end{itemize}
\end{frame}
\end{document}
```

## Frames, not pages

The core unit is the frame, and each `frame` environment becomes one slide. The optional argument in braces, as in `\begin{frame}{Results}`, sets the slide's title. The first slide uses the shorthand `\frame{\titlepage}`, where `\titlepage` renders the metadata declared in the preamble by `\title` and `\author`; you can also add `\institute` and `\date` and they appear in the same layout. A frame holds noticeably less than a page, roughly 128 mm by 96 mm of canvas, so content that overflows is a sign to split the material across two frames rather than to shrink the font.

## Themes and the outline

`\usetheme{Madrid}` selects a complete visual design: colors, header and footer bars, and how frame titles are drawn. Beamer ships dozens of themes, with `Madrid`, `Berlin`, and the deliberately plain `default` among the common choices, and swapping the theme is a one-line change that restyles the whole deck. Many conferences and labs distribute their own theme, in which case you drop their style file into the project and name it here.

The outline frame calls `\tableofcontents`, which lists the sectional structure of the talk. One catch: it lists `\section` commands, and this minimal example has none, so the outline renders empty until you add lines like `\section{Method}` between frames. Sections in Beamer do not print headings on slides; they exist to structure the outline and the navigation elements some themes display.

## Content on slides

Inside a frame, `itemize` works as it does in any document, and each `\item` becomes a bullet. Slides tolerate far less text than paper, so keep items to single lines where possible and move detail into what you say. Figures, tables, and math all work inside frames too, though Beamer output does not render in these in-page previews, so compile the deck to see it.

The most common early mistake is verbatim content: `\verb` and code listings break inside ordinary frames because of how frames process their contents. The fix is the fragile option, written `\begin{frame}[fragile]`, on any frame containing code. When the deck is drafted, step-by-step reveals are the next tool to learn, covered in [reveal lines on click](/learn/beamer-overlays/).
