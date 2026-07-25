---
title: "Packages that fight each other"
description: "hyperref last, cleveref after, obsolete pairs, minimal examples."
category: "runtime"
order: 5
level: "advanced"
tags: ["packages", "errors"]
featured: false
updated: 2026-07-24
---

# Packages that fight each other

1. Load `hyperref` late.
2. Load `cleveref` after `hyperref`.
3. Do not load obsolete packages alongside their replacements.
4. Two packages redefining the same command: comment one out and test.

Create a MWE (minimal working example) with only the conflicting pair.
