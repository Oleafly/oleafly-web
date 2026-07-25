---
title: "Posters at A0"
description: "tikzposter, beamerposter, or geometry plus TikZ."
category: "on-stage"
order: 3
level: "intermediate"
tags: ["poster"]
featured: false
updated: 2026-07-25
---

# Posters at A0

A conference poster is a single page, usually A0 or A1, that has to be readable from a meter and a half away. LaTeX handles the format well because the poster reuses the paper's equations, figures, and bibliography directly, but a normal document class cannot produce it: fonts, margins, and column layout all need poster-scale versions. Three approaches cover almost every LaTeX poster in the wild.

## The three options

The `tikzposter` class is the most direct route to a modern academic poster. It organizes content into colored blocks arranged in columns, ships several complete themes, and handles the large paper size and scaled fonts itself. A skeleton looks like this:

```latex
\documentclass[25pt, a0paper, portrait]{tikzposter}
\title{Poster Title}
\author{You}
\usetheme{Default}
\begin{document}
\maketitle
\begin{columns}
 \column{0.5}
 \block{Motivation}{Text for the first block.}
 \column{0.5}
 \block{Results}{Text for the second block.}
\end{columns}
\end{document}
```

The class options set a 25-point base font, A0 paper, and portrait orientation. Each `\column{0.5}` takes a fraction of the poster width, and each `\block{title}{content}` becomes one titled panel. Changing `\usetheme` restyles every block at once.

The `beamerposter` package extends Beamer to poster sizes, so a deck's theme, colors, and `block` environments carry over to a single giant frame. It is the natural choice when your group already maintains Beamer styles, and many university poster templates are built on it.

The third option is a plain document class with the `geometry` package setting A0 dimensions, plus TikZ for decoration. This gives full control over every millimeter and is how most heavily designed posters are made, but you build the column scaffolding yourself, so budget real time for it.

## Practical advice

Whichever route you choose, start from a working template rather than a blank file, for example one from the [gallery](/templates/), and replace content block by block. Set the paper size and orientation on day one, because changing them later breaks every manually tuned width. Body text should end up around 24 to 32 points once printed, and anything below 20 points will go unread. Prefer vector figures, since a plot exported for a paper column turns to mush when scaled to poster width; regenerate figures at poster size instead of stretching them.

The most common failure is treating the poster as a compressed paper. Plan for roughly a third of the word count you first draft, let figures carry the argument, and check the result by printing one block of the PDF on A4 at full scale to judge the true font size before sending the file to a plotter.
