---
title: "Color that survives print"
description: "xcolor, HTML specs, and using color for signal when journals go grayscale."
category: "type-and-shape"
order: 6
level: "beginner"
tags: ["formatting", "color"]
featured: false
updated: 2026-07-25
---

# Color that survives print

Color in LaTeX comes from one package, `xcolor`, which supplies named colors, exact color specification, background boxes, and a way to define your own palette. Documents need it less often than you might expect, since journals typeset body text in black, but it earns its keep in slides, drafts with visible annotations, and anything carrying an organization's palette.

## The commands

```latex
\usepackage{xcolor}
\textcolor{red}{warning}
\textcolor[HTML]{2563EB}{brand blue}
\colorbox{gray!15}{highlighted}

\definecolor{brand}{HTML}{2563EB}
```

`\textcolor{red}{warning}` colors just the text in its second argument, using one of xcolor's predefined names; `red`, `blue`, `gray`, `teal`, and a few dozen others work out of the box. When a name is not precise enough, the optional `[HTML]` model accepts a six-digit hex code, the same form a web designer or style guide hands you, so `2563EB` reproduces a specific blue exactly. Note that xcolor wants the hex digits uppercase and without the `#`.

`\colorbox{gray!15}{highlighted}` paints a background behind its text instead of coloring the text itself. The `gray!15` argument shows xcolor's mixing syntax: 15 parts gray blended with 85 parts white, which yields the pale tint that reads as a highlight. The same syntax works anywhere a color is expected, and you can chain it, as in `blue!50!black` for a darkened blue.

## Define once, use everywhere

`\definecolor{brand}{HTML}{2563EB}` registers a name of your own. After this line, `\textcolor{brand}{...}` works like any built-in color, and the hex value lives in exactly one place. When the palette changes, you edit one preamble line instead of hunting raw hex codes through the document. This is the same single-point-of-truth argument made for [custom macros](/learn/custom-commands/), applied to color.

## Grayscale is still real

Use color for signal, not decoration, and assume some readers will not see it. Plenty of journals still print in grayscale, where red and blue collapse into similar grays, and a meaningful fraction of readers have some form of color vision deficiency. The practical rule is that color may reinforce a distinction but should never be the only thing carrying it: pair colored text with bold or a symbol, and pair colored plot lines with distinct markers or dash patterns.

A closing caution about scope. Coloring headings or body text by hand quickly makes a document look homemade, and inside a venue's template it will be reverted anyway. Keep manual color for the places it means something, such as marking reviewer-requested changes in a revision, and remove it before the final version.
