---
title: "Question marks instead of numbers"
description: "Labels need another pass; label placement after captions."
category: "log-literacy"
order: 5
level: "beginner"
tags: ["errors", "cross-ref"]
featured: false
updated: 2026-07-24
---

# Question marks instead of numbers

Labels are written to `.aux` on one pass and read on the next. **Compile twice.**

If they stay as `??`:

- Label misspelled in `\ref`
- `\label` before a counter steps (put labels after captions)
- Deleted `.aux` mid-run
