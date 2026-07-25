---
title: "Numeric, author-year, journal styles"
description: "Swap styles without rewriting the database."
category: "cite-your-sources"
order: 4
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Numeric, author-year, journal styles

A citation style controls two things: what the in-text marker looks like, such as `[12]` versus `(Knuth, 1984)`, and how each entry in the reference list is formatted. The good news is that the style is completely separate from your `.bib` database. You can switch a paper from numeric to author-year, or reformat it for a different journal, by changing one line in the preamble. Your entries never need to be rewritten.

## Changing style with classic BibTeX

With BibTeX, the style lives in the `\bibliographystyle{...}` command, which names a `.bst` file. Swap the argument and recompile:

```latex
\bibliographystyle{plain}    % [1], entries sorted alphabetically
\bibliographystyle{abbrv}    % like plain, but first names and journals abbreviated
\bibliographystyle{alpha}    % labels like [Knu84] built from author and year
\bibliographystyle{ieeetr}   % IEEE-style numeric, in citation order
\bibliographystyle{apalike}  % author-year, needs \usepackage{apalike} or natbib
```

Journals and conferences usually ship their own `.bst` file, for example `IEEEtran.bst` or `ACM-Reference-Format.bst`. Put that file next to your `main.tex` and name it in `\bibliographystyle`. Note that a `.bst` bakes in one look; if the venue wants author-year cites, you also need the `natbib` package to get commands like `\citep` and `\citet`.

## Changing style with biblatex

With biblatex, the style is an option on the package itself:

```latex
\usepackage[style=authoryear]{biblatex}
```

Other common values are `style=numeric`, `style=numeric-comp` for compressed ranges like `[3-6]`, `style=alphabetic`, and `style=apa` or `style=ieee` from add-on packages. Because biblatex styles are written in LaTeX rather than the old `.bst` language, they are far easier to tweak, for instance to change punctuation or drop URLs.

## Recompile properly after switching

After any style change, the old auxiliary files still contain data formatted by the previous style, so run a full cycle: compile once, run the backend (`bibtex` for classic BibTeX, `biber` for biblatex), then compile twice more so cross-references settle. Oleafly runs this cycle for you, but if citations look stale after a manual switch, deleting the `.aux` and `.bbl` files and rebuilding from scratch clears it up.

## Which family should you use?

If the target venue provides a `.bst` file or a class that expects BibTeX, use classic BibTeX; that is still the situation at most journals. If you control the format yourself, as in a thesis or a preprint, biblatex is the more capable choice. The trade-offs are covered in [Classic BibTeX or biblatex](/learn/bibtex-vs-biblatex/), and the command differences in [natbib habits vs biblatex commands](/learn/natbib-vs-biblatex/).
