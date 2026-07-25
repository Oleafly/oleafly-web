---
title: "Why people switch to XeLaTeX"
description: "System fonts, complex scripts, fontspec templates."
category: "runtime"
order: 2
level: "intermediate"
tags: ["engines"]
featured: false
updated: 2026-07-25
---

# Why people switch to XeLaTeX

LaTeX is a language, but several engines compile it, and they differ in what they can do. The traditional engine is pdfLaTeX, and the two modern ones are XeLaTeX and LuaLaTeX. The single biggest reason people move to XeLaTeX is fonts: pdfLaTeX only uses fonts packaged specifically for TeX, while XeLaTeX loads any OpenType or TrueType font installed on your system, addressed by its ordinary name.

## The three reasons to switch

The first is direct access to system fonts. With the `fontspec` package, a font choice is one readable line, and no TeX-specific font package needs to exist for the typeface you want. Whether the goal is `\setmainfont{Inter}` for a modern look or Times New Roman for a journal requirement, the mechanism is the same:

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

`fontspec` requires XeLaTeX or LuaLaTeX; under pdfLaTeX it simply errors. Fonts can also travel inside the project folder instead of the system, as shown in [a font file next to the project](/learn/install-custom-font/).

The second is native Unicode and complex scripts. XeLaTeX reads UTF-8 input directly and handles writing systems that pdfLaTeX cannot, including Arabic, Devanagari, Chinese, Japanese, and Korean, with proper shaping and, through the `polyglossia` package, correct hyphenation and direction per language. If your document mixes scripts or even just quotes a name with unusual diacritics, this alone decides the engine.

The third is templates that decide for you. Many modern CV, thesis, and presentation templates load `fontspec` or `polyglossia` in their first lines, and such a template compiles only on XeLaTeX or LuaLaTeX. If a downloaded template fails immediately with an error mentioning `fontspec`, switching the engine is the fix, not editing the template.

## What you give up

The tradeoffs are modest but real. A few pdfLaTeX-specific packages do not apply, most notably `microtype`'s font expansion, which XeLaTeX supports only partially, and compiles run somewhat slower. Some older journal pipelines still assume pdfLaTeX, so check the venue's instructions before submitting a XeLaTeX-built manuscript. LuaLaTeX shares the font and Unicode capabilities and adds Lua scripting; between the two, choose whichever your template or venue names, since documents built on `fontspec` usually compile on both.

## Choosing in practice

A reasonable rule is to use pdfLaTeX when a venue's template targets it, and XeLaTeX for everything where you choose the fonts: theses, CVs, slides, and multilingual documents. Oleafly's bundled engine is XeTeX-based (Tectonic), so `fontspec` documents compile there without any engine configuration. The common mistake is mixing eras, for example loading `fontspec` together with pdfLaTeX-only font packages like `newtxtext`; pick one font system per document and the engine question mostly answers itself.
