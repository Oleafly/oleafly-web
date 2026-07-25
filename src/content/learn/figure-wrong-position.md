---
title: "The figure that flees the section"
description: "Float barriers, size, and last-resort placement."
category: "float-surgery"
order: 5
level: "intermediate"
tags: ["figures", "errors"]
featured: false
updated: 2026-07-24
---

# The figure that flees the section

1. Use `[htbp]` not only `[h]`.
2. Move the figure environment closer to its first `\ref`.
3. `\usepackage{placeins}` + `\FloatBarrier` at section ends.
4. `\usepackage{float}` + `[H]` as a last resort.
5. Make the figure smaller, huge floats are deferred.
