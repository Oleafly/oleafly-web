---
title: "Shorter wait for the PDF"
description: "Draft figures, includeonly, TikZ externalize, local CPU."
category: "long-form"
order: 5
level: "intermediate"
tags: ["thesis", "compile"]
featured: false
updated: 2026-07-24
---

# Shorter wait for the PDF

1. **Draft mode for figures:** `\documentclass[draft]{article}` or `\includegraphics[draft]`.
2. **`\includeonly`:** compile the chapter you are editing.
3. **Externalize TikZ:** `\usetikzlibrary{external}`.
4. **Fewer bibliography passes** while drafting prose.
5. **Local engine:** no cloud queue; Oleafly compiles on your CPU.

Huge images and TikZ dominate more than package count.
