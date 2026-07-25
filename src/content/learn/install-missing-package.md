---
title: "That package is not installed"
description: "tlmgr, MiKTeX, and on-demand fetch with Tectonic or Oleafly."
category: "runtime"
order: 3
level: "beginner"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# That package is not installed

Sooner or later a compile stops with a line like `! LaTeX Error: File 'siunitx.sty' not found`. The message means exactly what it says: your document asked for a package, via `\usepackage{siunitx}`, and the compiler could not find the package's `.sty` file on your machine. Nothing is wrong with your document. LaTeX distributions do not ship every package by default, and the fix depends on which distribution you run.

## TeX Live

TeX Live, the standard distribution on Linux and macOS (as MacTeX), includes a package manager called `tlmgr`. Install the missing package from a terminal:

```
tlmgr install siunitx
```

If the full TeX Live was installed, which is many gigabytes, everything is already present and this error should not occur; it usually appears with the smaller `basic` or `small` installation schemes. Note that the argument to `tlmgr` is the package name, not the filename, so no `.sty` extension.

## MiKTeX

MiKTeX, common on Windows, has two mechanisms. Its install-on-the-fly feature detects the missing file during compilation and offers to fetch it, either prompting you or proceeding automatically depending on settings. Alternatively, open the MiKTeX Console, go to the Packages tab, search for the package, and install it there. If on-the-fly installation seems to hang a compile, it is usually waiting on a confirmation dialog hidden behind another window.

## Tectonic

The Tectonic engine, which Oleafly bundles, removes the manual step entirely: packages download on demand during compilation and land in the engine's local cache, so the first compile that uses `siunitx` fetches it and later compiles reuse the cached copy. The practical consequences are that a document's first compile can take noticeably longer than usual while dependencies download, and that a network connection is needed at that first use.

## When installing does not fix it

If the package manager reports that no such package exists, check the spelling against the package's page on CTAN, the central LaTeX package archive at ctan.org. Two mismatches account for most stubborn cases. First, the file and the package can have different names, because a distribution package may contain several `.sty` files; searching CTAN for the exact `.sty` filename from the error message resolves this. Second, the error sometimes names a file from your own project, such as a class file a template forgot to include, and no package manager can supply that; the file has to come from wherever the template did.

A last note on old advice: downloading a lone `.sty` file from the internet into your project folder does work, since LaTeX searches the current directory first, but it freezes that package at a random version and hides it from updates. Prefer the package manager, and keep the manual copy trick for emergencies near deadlines.
