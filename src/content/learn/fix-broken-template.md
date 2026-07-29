---
title: "University class files that will not compile"
description: "Triage: first error, engine, obsolete packages, binary search."
category: "long-form"
order: 6
level: "advanced"
tags: ["thesis", "errors"]
featured: false
updated: 2026-07-25
---

# University class files that will not compile

University thesis templates are a special kind of legacy code. A graduate student wrote the class file fifteen years ago against the TeX distribution of the day, graduated, and left it frozen while the LaTeX ecosystem moved on. When you download `universitythesis.cls` today and it dies with a screen of errors, the class is usually not broken so much as stranded in time. The failure modes are predictable, though, and a fixed triage order resolves most of them.

## Start with the first error only

A LaTeX failure cascades: one undefined command early in the class can produce dozens of downstream errors that mean nothing. Scroll the log to the first line beginning with `!`, fix that, and recompile before reading anything else. Repeating this loop often clears an intimidating error wall in three or four passes. If the first error is an unknown command, [Undefined control sequence](/learn/undefined-control-sequence/) walks through the diagnosis.

## Check the engine

Many templates assume a specific engine and fail bizarrely under any other. A class that loads `fontspec` or sets fonts by name requires XeLaTeX or LuaLaTeX; a class built around `pdftex`-specific primitives may fail under both. Look for a comment near the top of the class file or a line in the university's instructions naming the intended engine, and match it before debugging anything else. The differences are summarized in [Which engine for this project](/learn/engines-compared/).

## Modernize what you control

Old templates load obsolete packages whose modern replacements are already in your distribution, and the pair then fights; [Packages that fight each other](/learn/package-conflicts/) lists the classic combinations. The workable strategy is to leave the class file itself alone, since the university formatting requirements live there, and modernize only your own preamble: remove obsolete `\usepackage` lines, load `hyperref` late, and avoid re-loading anything the class already loads.

## Binary-search the preamble

When the error resists inspection, comment out the second half of your preamble and recompile. If the error vanishes, the trigger is in the commented half; restore half of it and repeat. A handful of compiles isolates the single line at fault, which is far faster than reasoning about a preamble you did not write.

## Search before you suffer

Every student at that university compiles the same class, so your error has almost certainly been hit before. Search the exact error message together with the class file's name, and check whether the university or a successor student maintains a patched fork on GitHub. Using a maintained fork, when one exists, beats re-fixing known bugs on your own.
