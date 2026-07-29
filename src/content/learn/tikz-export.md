---
title: "Standalone TikZ to PDF or PNG"
description: "standalone class and externalize caches."
category: "draw-in-tex"
order: 5
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Standalone TikZ to PDF or PNG

A TikZ picture normally lives inside a paper, but you often need the diagram as its own file: to reuse it in a slide deck, to hand it to a co-author who works in Word, to upload it where a PNG is required, or simply to avoid recompiling an expensive drawing on every document build. The `standalone` document class exists for exactly this. It typesets one picture on a page cropped to the picture's size:

```latex
\documentclass[tikz,border=2pt]{standalone}
\begin{document}
\begin{tikzpicture}
 \draw (0,0) -- (1,1);
\end{tikzpicture}
\end{document}
```

## What the class options do

The `tikz` option loads the TikZ package for you and tells `standalone` to crop the output page tightly around the `tikzpicture`, so the resulting PDF is exactly as large as the drawing, with no page margins. The `border=2pt` option adds a two-point cushion on all sides, which prevents strokes that sit exactly on the bounding box from being shaved off by viewers or printers. Compile this file like any document and the output is a small, tightly cropped PDF containing only the diagram.

Prefer that PDF, because it is vector: it scales to any size without blurring. Dropping it into another document with `\includegraphics` works as described in [a PDF page as a graphic](/learn/include-pdf-as-figure/). When a raster copy is genuinely required, convert the compiled PDF rather than recreating the drawing. Command-line tools such as `pdftoppm -png -r 300 figure.pdf figure` produce a 300 dpi PNG, and `pdf2svg` or Inkscape produce SVG. Export at 300 dpi or more if the PNG will be printed.

## Caching pictures with externalize

Inside a large document, TikZ pictures are redrawn on every compile, and a handful of complex plots can dominate the build time. The `external` library fixes this by compiling each picture to its own PDF once, then reusing the cached file until the picture's code changes:

```latex
\usetikzlibrary{external}
\tikzexternalize[prefix=tikz-cache/]
```

The `prefix` option keeps the generated files in their own folder. Externalization runs the compiler in a mode that spawns sub-compilations, so it needs shell escape enabled and interacts poorly with some setups. If it fights you, move each big picture into its own `standalone` file and include the compiled PDFs. That gives you the same caching by hand, with less machinery. Compile times in general are covered in [shorter wait for the PDF](/learn/speed-up-compilation/).

One common mistake deserves a warning: do not screenshot a rendered diagram to get a PNG. Screenshots capture screen resolution, which looks acceptable in a slide preview and fuzzy everywhere else. Convert from the PDF, where the resolution is yours to choose.
