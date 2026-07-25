---
title: "Packages that fight each other"
description: "hyperref last, cleveref after, obsolete pairs, minimal examples."
category: "runtime"
order: 5
level: "advanced"
tags: ["packages", "errors"]
featured: false
updated: 2026-07-25
---

# Packages that fight each other

LaTeX packages are free to redefine each other's commands, and many do so deliberately. That is how `hyperref` turns every cross-reference into a link. It also means two packages can each patch the same command with incompatible assumptions, and the result ranges from an outright error like `Command \footnote already defined` or `Option clash for package xcolor` to output that is silently wrong. Conflicts almost always surface right after you add a package to a previously working preamble, which is also the biggest clue.

## Loading order is half the battle

Many conflicts are resolved purely by order, because the package loaded later gets the last word. The most important rule: load `hyperref` near the end of the preamble. It rewrites large parts of LaTeX's cross-referencing machinery, and packages loaded after it may undo those patches. A short list of exceptions must come even later, and the one you will actually meet is `cleveref`, which is designed to sit on top of `hyperref` and must be loaded after it:

```latex
\usepackage{graphicx}
\usepackage{amsmath}
% ... everything else ...
\usepackage{hyperref}
\usepackage{cleveref} % after hyperref, by design
```

When a package's documentation specifies a position relative to another package, believe it. Those notes exist because someone already hit the conflict you are about to have.

## Obsolete packages and their replacements

Some conflicts come from loading a dead package next to its successor. Do not combine `epsfig` with `graphicx`, `subfigure` with `subcaption`, or the old `times` and `mathptmx` shims with modern font packages like `newtxtext`. Old templates are the usual source: they load whatever was current when the template was written, and you add the modern equivalent on top. Remove the obsolete one and keep the replacement. The `nag` package can flag outdated usage for you at compile time.

## Option clashes

`Option clash for package X` means the package was loaded twice with different options, often once by your document class behind your back. You cannot load it again with new options, but you can inject options before anyone loads it: put `\PassOptionsToPackage{table}{xcolor}` before `\documentclass`, and the options are merged into whichever load comes first.

## Isolate with a minimal example

When the cause is not obvious, build a minimal working example: a document containing only `\documentclass`, the two suspect packages, and a `\begin{document}...\end{document}` with one line of text. If the error reproduces, toggle the loading order and options until it does not; if it does not reproduce, add your other packages back in halves until it returns. This binary search converges in a few compiles and gives you a precise pair to search for. The same technique rescues inherited preambles, as described in [University class files that will not compile](/learn/fix-broken-template/).
