---
title: "pt, em, textwidth"
description: "Absolute and font-relative units you actually set."
category: "desk-reference"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# pt, em, textwidth

Nearly every layout command in LaTeX takes a length: vertical space, image widths, margins, rule thicknesses. A length is a number plus a unit, and the choice of unit decides whether the layout adapts when the font size or page geometry changes, or breaks the day it does.

| Unit | Meaning |
| --- | --- |
| `pt` | Point (base) |
| `em` | Font-relative width |
| `ex` | Font-relative height |
| `cm` / `mm` / `in` | Absolute |
| `\textwidth` | Width of text block |
| `\linewidth` | Width of current column/minipage |

## Absolute and relative units

`pt` is the printer's point, TeX's base unit; font sizes and many internal defaults are stated in points, and one inch is 72.27 pt in TeX's reckoning. `cm`, `mm`, and `in` are the familiar absolute units, appropriate when a requirement is genuinely physical, such as a mandated one-inch margin.

`em` and `ex` scale with the current font: an em is roughly the font size expressed as a width, and an ex is about the height of a lowercase x. Their advantage is proportionality. A `\vspace{1em}` stays visually consistent if the document moves from 10pt to 12pt type, where a hard-coded `\vspace{12pt}` becomes too tight or too loose.

## Lengths the document gives you

`\textwidth` is the width of the page's text block. `\linewidth` is the width of the current container, which equals `\textwidth` in ordinary text but narrows inside a minipage, a list, or a column. A decimal in front scales either one, and that is the standard way to size figures:

```latex
\vspace{1em}
\includegraphics[width=0.5\textwidth]{f.pdf}
```

The first line inserts one em of vertical space. The second sets the image to half the width of the text block, so if the margins ever change, the figure rescales with them and never overflows into the margin. Inside a minipage or a two-column layout, prefer `0.5\linewidth`, since `\textwidth` there is wider than the space you actually have.

Lengths are also settable. `\setlength{\parindent}{0pt}` removes paragraph indentation, and the same command adjusts most named layout lengths.

The common mistake is sizing figures in centimeters. It works until the document class, paper size, or margins change, and then every figure needs retuning by hand. Widths expressed as fractions of `\textwidth` or `\linewidth` survive all of those changes untouched, which is why templates use them almost exclusively.
