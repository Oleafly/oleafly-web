---
title: "Two panels in one row"
description: "minipages side by side without a package war."
category: "floats-and-ink"
order: 5
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Two panels in one row

Sometimes you want two images next to each other, each with its own caption and its own figure number. You do not need a special package for that. Plain `minipage` boxes inside a single `figure` environment do the job, and because both images live in one float, LaTeX can never separate them onto different pages.

## The pattern

```latex
\begin{figure}[htbp]
 \centering
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{Left}
 \end{minipage}\hfill
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Right}
 \end{minipage}
\end{figure}
```

A `minipage` is a box that behaves like a miniature page: it has a fixed width you choose, and its contents wrap and stack inside that width. Here each minipage takes `0.48\textwidth`, meaning 48 percent of the text width. That deliberately leaves 4 percent unclaimed, and the `\hfill` between the two boxes is stretchable space that expands to fill it, pushing one panel to the left margin and the other to the right. If you set both widths to `0.5\textwidth`, they would total exactly the line width with no room for any separation, and the second box would fall onto the next line, which is the most common reason side-by-side layouts mysteriously stack vertically.

Inside each minipage, `width=\linewidth` scales the image to the width of the surrounding box, not the whole page. Using `\textwidth` there instead is a frequent mistake that makes each image as wide as the full text block, guaranteeing overflow.

Note where the captions sit: inside each minipage. That gives each panel a full caption with its own number, so this figure produces, say, Figure 3 and Figure 4 sitting in one row. The outer `[htbp]` placement options tell LaTeX it may put the float here, at the top of a page, at the bottom, or on a float page, in that order of preference.

## Aligning tops and mixing content

If the two images have different heights, their vertical alignment can look off, because minipages align at their centers by default. Write `\begin{minipage}[t]{0.48\textwidth}` to align them at the top instead. Minipages also do not care what they contain, so this same layout puts a figure beside a table, or an image beside a paragraph of explanatory text, which subfigure-style packages are not designed for.

## When to use subfigures instead

The one thing this pattern cannot give you is panels labeled (a) and (b) under a single shared caption and a single figure number. The moment you want "Figure 5(a)" rather than two independent figures, switch to [subfigures](/learn/subfigures-abc/). Rule of thumb: minipages are for figures that happen to be neighbors, while subfigures are for one figure that happens to have parts.
