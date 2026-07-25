---
title: "Undefined control sequence"
description: "Unknown command names: typos, missing packages, wrong engine."
category: "log-literacy"
order: 1
level: "beginner"
tags: ["errors"]
featured: true
updated: 2026-07-24
---

# Undefined control sequence

LaTeX hit a command name it does not know: typo or missing package.

1. Check spelling: `\texbf` → `\textbf`.
2. Load the package that defines it (`\includegraphics` needs `graphicx`).
3. Engine mismatch: `\fontspec` needs Xe/LuaLaTeX.

The log shows the offending command. Jump there first.
