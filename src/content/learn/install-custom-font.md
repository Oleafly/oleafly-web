---
title: "A font file next to the project"
description: "fontspec Path for local otf or ttf families."
category: "typefaces"
order: 2
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# A font file next to the project

Suppose your thesis uses a font that is not installed on every machine that will ever compile it: a co-author's laptop, a university build server, or your own computer after a reinstall. Installing the font system-wide on each of them is fragile and sometimes not permitted. Put the font files in the project folder and point `fontspec` at them instead, so the document carries its own typography. This requires XeLaTeX or LuaLaTeX, since `fontspec` does not work under pdfLaTeX. The reasons are covered in [why people switch to XeLaTeX](/learn/when-use-xelatex/).

```latex
\usepackage{fontspec}
\setmainfont{MyFont}[
 Path = ./fonts/,
 Extension = .otf,
 UprightFont = *-Regular,
 BoldFont = *-Bold,
 ItalicFont = *-Italic
]
```

## What each key does

`\setmainfont{MyFont}` declares the main text family and gives it the base name used to build filenames. `Path = ./fonts/` tells `fontspec` to look for the files in a `fonts` folder inside the project, relative to the main `.tex` file, instead of asking the operating system. `Extension = .otf` states the file type once so it does not have to be repeated per file. Use `.ttf` if that is what you have.

The remaining keys map font shapes to files. In each, the `*` expands to the base name, so `UprightFont = *-Regular` resolves to `MyFont-Regular.otf`, and likewise `MyFont-Bold.otf` and `MyFont-Italic.otf`. These names must match the actual filenames exactly, including capitalization, because case matters on Linux servers even when your local system forgives it. If the family has a bold italic, add `BoldItalicFont = *-BoldItalic`. A shape you do not map is a shape the document cannot use: with no `BoldFont` line, `\textbf` has nothing to switch to, and the compiler warns that the bold shape is undefined.

The same syntax works for the other families, so `\setsansfont` and `\setmonofont` accept identical option blocks for a local sans-serif or code font.

## Licensing and portability

Ship the font files with the project only if the license allows redistribution. Open licenses such as the SIL Open Font License permit it, and fonts from Google Fonts generally qualify, but commercial fonts usually forbid passing copies to collaborators, in which case each machine needs its own licensed copy and you should document that requirement in the project readme.

The common mistake is a silent mismatch between the declared names and the files, often after renaming the folder or downloading a differently named weight. The compile then stops with "The font 'MyFont-Regular' cannot be found". When that happens, compare the error's expected filename character by character against the folder contents, and confirm the `Path` still points where the files live. Since Oleafly's bundled Tectonic engine is XeTeX-based, this project-local pattern works there without system font installation.
