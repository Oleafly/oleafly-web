---
title: "Margins in one package"
description: "geometry for page size, margins, binding offset."
category: "the-page"
order: 1
level: "beginner"
tags: ["layout"]
featured: true
updated: 2026-07-25
---

# Margins in one package

LaTeX's default margins look enormous, especially on A4 paper. That is by design: the defaults aim for a comfortable line length of roughly 66 characters, which is great for reading but rarely what a university template, a journal, or your own taste asks for. Rather than adjusting half a dozen low-level lengths by hand, you set the page up with the `geometry` package and describe the layout you want in plain terms.

## The two ways you will actually use it

```latex
\usepackage[margin=1in]{geometry}
% or
\usepackage[a4paper,top=2.5cm,bottom=2.5cm,left=2.5cm,right=2.5cm]{geometry}
```

The first form is the quick one: `margin=1in` sets all four margins to one inch in a single option, and geometry recomputes the text width and height to match. This is the standard "US thesis" look and a sensible default for drafts.

The second form spells everything out. `a4paper` declares the physical paper size (use `letterpaper` for US Letter). Without it, geometry inherits whatever the document class assumed, which may not match what your PDF viewer or printer expects. The `top`, `bottom`, `left`, and `right` options then set each margin independently, so asymmetric layouts are just as easy as symmetric ones. You can mix units freely: `in`, `cm`, `mm`, and `pt` all work.

Everything happens in the preamble, before `\begin{document}`. Geometry reads its options once and derives the whole page layout from them, which is why it is less error-prone than manual tuning.

## Binding offset for printed copies

If the document will be printed and bound, the inner margin needs extra room so text does not disappear into the spine. Add `bindingoffset=0.5cm` to the options and geometry shifts the text block outward on each page. In a `twoside` document it alternates the shift correctly between left and right pages, which is tedious to get right by hand.

## What not to do

Avoid mixing geometry with manual `\setlength{\textwidth}{...}` unless you know why. LaTeX's page layout is a web of interdependent lengths (`\textwidth`, `\oddsidemargin`, `\headheight`, and friends), and geometry manages all of them as one consistent system. Changing one length directly after loading geometry usually knocks the others out of agreement, and you end up with text that overflows the page or margins that differ from what you asked for. If you need a mid-document change, geometry provides `\newgeometry{...}` and `\restoregeometry` for exactly that.

One caution before you tune anything: if you are writing for a journal or conference, the class file already encodes the required margins, and adding geometry on top will likely violate the submission format. Save margin tweaking for documents where you control the layout, such as a thesis, notes, or a CV, and check what your [document class](/learn/document-skeleton/) already gives you first.
