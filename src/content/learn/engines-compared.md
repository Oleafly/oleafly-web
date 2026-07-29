---
title: "Which engine for this project"
description: "pdfLaTeX, XeLaTeX, LuaLaTeX, Tectonic: Unicode, fonts, journal fit."
category: "runtime"
order: 1
level: "intermediate"
tags: ["engines"]
featured: true
updated: 2026-07-25
---

# Which engine for this project

An engine is the program that actually turns your `.tex` source into a PDF. LaTeX itself is a macro layer that runs on top of one, and there are several to choose from. They accept almost the same documents, but they differ in how they handle Unicode text and fonts, and a template written for one engine can fail outright under another. Pick once per project and stick with it.

| Engine | Unicode | System fonts | Notes |
| --- | --- | --- | --- |
| pdfLaTeX | Partial | No | Max journal compatibility |
| XeLaTeX | Yes | Yes (`fontspec`) | Great for polyglot docs |
| LuaLaTeX | Yes | Yes | Modern, scriptable |
| Tectonic | Xe-like | Yes | Auto package fetch; Oleafly default |

## What each engine is for

pdfLaTeX is the direct descendant of the original TeX and remains the default assumption of most journals, conferences, and submission systems. It predates Unicode, so accented input needs the `inputenc` conventions and fonts are limited to specially packaged TeX fonts. In exchange, it is fast and universally supported, and decades of templates target it.

XeLaTeX reads UTF-8 natively and, through the `fontspec` package, uses any font installed on your system by name, such as `\setmainfont{Georgia}`. That makes it the practical choice for documents mixing scripts, for languages beyond Western European ones, and for anyone with specific font requirements. [When to use XeLaTeX](/learn/when-use-xelatex/) goes deeper.

LuaLaTeX offers the same Unicode and font support and embeds the Lua scripting language, so packages can compute things at compile time that used to be impossible. It is the long-term successor among the traditional engines, at the cost of somewhat slower compiles.

Tectonic is a modern, self-contained build of the XeTeX engine. Its distinguishing feature is automatic dependency handling: when a document needs a package you do not have, Tectonic downloads it on demand instead of failing. Oleafly bundles Tectonic as its default engine for exactly this reason, so a fresh install compiles real-world documents without any TeX administration.

## How to decide

Follow the template. If a journal class or thesis template documents an engine, use that one. Templates encode engine assumptions in ways that surface as confusing errors elsewhere, as described in [University class files that will not compile](/learn/fix-broken-template/). If the document is yours from scratch, the rule of thumb is simple: pdfLaTeX when a conservative venue will compile your sources, and XeLaTeX, LuaLaTeX, or Tectonic when you need real Unicode or real fonts. Whatever you pick, stay with it for the life of the document. Subtle spacing and font differences make switching mid-project a poor use of time.
