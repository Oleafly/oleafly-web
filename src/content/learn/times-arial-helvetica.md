---
title: "Times, Arial, Helvetica-like stacks"
description: "newtx, helvet, or fontspec mappings journals still ask for."
category: "typefaces"
order: 1
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Times, Arial, Helvetica-like stacks

Journal and conference guidelines still routinely demand Times for body text or Arial for figures, decades after those fonts stopped being anyone's aesthetic first choice. In LaTeX there are two ways to satisfy such a requirement, and which one applies depends on your engine. Classic pdfLaTeX cannot load the actual Times New Roman or Arial files, so it uses metric-compatible clones shipped as packages. XeLaTeX and LuaLaTeX load the real system fonts through `fontspec`.

## The package route

```latex
\usepackage{newtxtext,newtxmath} % Times-like
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
```

`newtxtext` switches the text font to a Times clone, and `newtxmath` provides matching math. The pairing matters: change only the text font and equations stay in default Computer Modern. A Times paragraph next to Computer Modern math is immediately visible. `newtx` is the maintained successor to the old `times` and `txfonts` packages, which you should avoid in new documents. The old stacks left math unconverted, and some produce the bitmap fonts described in [blurry text in the PDF viewer](/learn/fuzzy-font-pdf/).

`helvet` provides a Helvetica clone as the sans-serif family, which also stands in for Arial, since Arial was designed to match Helvetica's metrics. Loading it does not change the document font, because body text uses the serif family. The `\renewcommand{\familydefault}{\sfdefault}` line performs that switch: `\familydefault` is the family LaTeX uses for ordinary text, and setting it to `\sfdefault` makes the whole document Helvetica-like. Omit that line if you only need sans-serif headings or figure labels. If Helvetica runs slightly large next to your text font, `\usepackage[scaled=0.92]{helvet}` brings it in line.

## The fontspec route

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
\setsansfont{Arial}
```

Under XeLaTeX or LuaLaTeX, `fontspec` addresses fonts by name and loads them from the operating system, so this sets the genuine Times New Roman as the main (serif) family and genuine Arial as the sans family. The fonts must actually be installed on the machine. That bites when a document moves between computers or into CI. A font that travels with the project avoids the problem, as shown in [a font file next to the project](/learn/install-custom-font/). Math is again a separate concern, handled by `unicode-math` or by keeping `newtxmath` alongside. The engine tradeoffs are covered in [why people switch to XeLaTeX](/learn/when-use-xelatex/).

## The rule of thumb

Before choosing either route, check whether the venue's own class file already sets the fonts. Most do. Stacking your own font packages on top of a class that has spoken produces warnings at best. Add font packages only to documents whose class leaves the choice to you.
