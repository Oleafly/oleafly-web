---
title: "Overfull horizontal box"
description: "Lines that poke into the margin and when to care."
category: "log-literacy"
order: 3
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-24
---

# Overfull horizontal box

A line is wider than the text block. Often a long URL, unbreakable math, or a word TeX will not hyphenate.

- Rewrite the sentence.
- `\url{...}` / `xurl` for breakable URLs.
- `multline` for math.
- Microtype and proper language hyphenation.

Warnings under ~2pt are often ignorable for drafts.
