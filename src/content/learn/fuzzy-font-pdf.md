---
title: "Blurry text in the PDF viewer"
description: "Type 3 bitmaps, outline fonts, vector figures."
category: "typefaces"
order: 3
level: "intermediate"
tags: ["fonts", "errors"]
featured: false
updated: 2026-07-25
---

# Blurry text in the PDF viewer

Your PDF compiles cleanly, but the text looks soft or jagged on screen, and zooming in makes it worse instead of better. Nothing is wrong with your viewer. The document contains bitmap fonts: instead of storing letter shapes as scalable outlines, it stores them as grids of pixels rendered at one fixed resolution. In PDF terminology these are Type 3 fonts. They print acceptably on paper at the resolution they were generated for, which is why the problem survived for decades, but on screens they blur at any zoom level other than their native one. Modern outline formats, Type 1, TrueType, and OpenType, scale cleanly because the shapes are mathematical curves.

## Confirming the diagnosis

Zooming is the quick test: outline fonts stay razor sharp at 800 percent, bitmaps dissolve into visible pixels. For certainty, open the document properties in your PDF viewer and look at the fonts panel. In Adobe Reader this is under File, then Properties, then Fonts, and any font listed as "Type 3" is a bitmap. This check matters beyond aesthetics, because arXiv and many publishers reject submissions containing Type 3 fonts.

## Where bitmaps come from and the fixes

The usual source is an old font setup. Very old TeX installations rendered Computer Modern through METAFONT into bitmaps, and some legacy packages and ancient `\usepackage{times}` era stacks still pull in bitmap variants. The fixes work from the same direction, so replace the legacy font commands with a modern stack:

```latex
\usepackage{newtxtext,newtxmath}
```

That gives an outline Times with matching math, as detailed in [Times, Arial, Helvetica-like stacks](/learn/times-arial-helvetica/). If you want the default look rather than Times, `\usepackage{lmodern}` swaps Computer Modern for its outline successor, Latin Modern. Compiling with XeLaTeX or LuaLaTeX and `fontspec` sidesteps the issue entirely, since those engines use OpenType system fonts that are outlines by construction. A modern engine such as the XeTeX-based Tectonic that Oleafly bundles does not generate Type 3 text on its own; when it appears there, the bitmap font is arriving through an included graphic.

## The figure version of the same problem

Blurry text in a PDF is not always a document font. If paragraphs are sharp but the labels inside a plot are fuzzy, the figure itself is a raster image, typically a PNG screenshot of a plot or a diagram exported at screen resolution. The cure is the same idea one level up: export figures as vector PDF from the plotting tool, so their text is outlines too. Format guidance is in [drop in a figure](/learn/insert-images/).

After any fix, check the fonts panel again rather than trusting your eyes at default zoom. A single Type 3 entry left behind by one figure or one package is enough to bounce a submission.
