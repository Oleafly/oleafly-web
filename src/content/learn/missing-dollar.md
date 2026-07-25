---
title: "Missing dollar inserted"
description: "Subscripts and math commands that leaked into text mode."
category: "log-literacy"
order: 2
level: "beginner"
tags: ["errors", "math"]
featured: true
updated: 2026-07-24
---

# Missing dollar inserted

You used math-only syntax in text mode (usually `_`, `^`, or a math command).

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

If the log points at a weird place, look **earlier** for an unclosed `$`.
