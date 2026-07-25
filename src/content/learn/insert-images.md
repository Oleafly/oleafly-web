---
title: "Drop in a figure"
description: "graphicx, width, paths, PDF vs PNG."
category: "floats-and-ink"
order: 2
level: "beginner"
tags: ["figures"]
featured: true
updated: 2026-07-25
---

# Drop in a figure

LaTeX has no built-in image support. All of it comes from the `graphicx` package, which provides the `\includegraphics` command, and by convention the image is wrapped in a `figure` environment so it can carry a caption and a number. Here is the complete pattern you will use hundreds of times:

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## What each line does

The `\usepackage{graphicx}` line goes in your preamble, before `\begin{document}`, and only needs to appear once no matter how many images you include.

The `figure` environment makes the image a float, which means LaTeX chooses where it lands rather than nailing it to this exact spot in the text. The `[htbp]` letters are your placement preferences: `h` means here where the code appears, `t` means the top of a page, `b` means the bottom of a page, and `p` means a separate page of floats. LaTeX tries them in that order and takes the first that produces a decent page. If your figure drifts somewhere surprising, that is normal float behavior, and [where floats actually land](/learn/position-figures/) explains how to negotiate with it.

`\centering` centers the image horizontally within the text block. `width=0.8\textwidth` scales the image to 80 percent of the text width while preserving its aspect ratio, which is almost always better than specifying an absolute size in centimeters, because it adapts if the document's margins change. The file path is relative to the project root, so `figures/pipeline.pdf` means a `figures` folder next to your main `.tex` file. Finally, `\caption` prints the numbered caption and `\label` records the number so `\ref{fig:pipeline}` can cite it from the text. The label must come after the caption, for reasons covered in [captions and labels](/learn/captions-labels/).

## Which file format to use

Prefer PDF for anything vector, meaning plots, diagrams, and flowcharts, because vector graphics stay sharp at any zoom and any print size. Use PNG for screenshots and other pixel-based images. JPG is acceptable for photographs, where its compression artifacts are invisible. Avoid embedding text-heavy content as screenshots at all, since it blurs in print and cannot be searched.

Also resize large photographs before including them. A 12-megapixel photo displayed at 8 centimeters wide bloats the PDF and slows every compile, while a version downscaled to roughly 300 dpi at its printed size looks identical.

## The mistake to avoid

Do not fight the float on day one by demanding `[h]` alone. LaTeX will often refuse, then carry the figure and everything behind it to the end of the chapter. Write `[htbp]`, place the figure code near the paragraph that first references it, and let the numbers and references do the tracking for you.
