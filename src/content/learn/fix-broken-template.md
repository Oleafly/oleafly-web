---
title: "University class files that will not compile"
description: "Triage: first error, engine, obsolete packages, binary search."
category: "long-form"
order: 6
level: "advanced"
tags: ["thesis", "errors"]
featured: false
updated: 2026-07-24
---

# University class files that will not compile

## Triage order

1. Read the **first** error in the log.
2. Check engine: template may need XeLaTeX for fonts.
3. Update obsolete packages.
4. Comment out half the preamble (binary search).
5. Search the error string plus the class name. University templates share bugs.

When the class is ancient, keep the class and modernize only the preamble you control.
