---
title: "Paragraphs, breaks, and empty space"
description: "Blank lines, forced breaks, vspace, and the spacing commands that are worth knowing."
category: "type-and-shape"
order: 3
level: "beginner"
tags: ["formatting", "spacing"]
featured: false
updated: 2026-07-24
---

# Paragraphs, breaks, and empty space

## Rules

- A **blank line** starts a new paragraph.
- `\\` forces a line break **inside** a paragraph (use sparingly).
- `\par` is the same as a blank line.

```latex
First paragraph.

Second paragraph, with a forced break\\
on this line.
```

## Vertical space

```latex
\vspace{1em}
\bigskip \medskip \smallskip
```

Do not spam `\\` to make space between paragraphs, adjust `\parskip` or use structure.
