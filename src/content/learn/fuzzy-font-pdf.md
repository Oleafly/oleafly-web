---
title: "Blurry text in the PDF viewer"
description: "Type 3 bitmaps, outline fonts, vector figures."
category: "typefaces"
order: 3
level: "intermediate"
tags: ["fonts", "errors"]
featured: false
updated: 2026-07-24
---

# Blurry text in the PDF viewer

**Cause:** Bitmap (Type 3) fonts from old packages look blurry in some viewers.

**Fixes:**

- Prefer OpenType via Xe/LuaLaTeX.
- Avoid ancient `\usepackage{times}` stacks; use `newtx` or fontspec.
- Ensure vector images, not screenshots of text.
