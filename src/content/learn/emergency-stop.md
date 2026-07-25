---
title: "Emergency stop and runaway argument"
description: "Fatal aborts from missing ends, braces, or bad includes."
category: "log-literacy"
order: 6
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-24
---

# Emergency stop and runaway argument

**Emergency stop:** TeX aborts. Often a missing `\end{document}`, broken include, or input file not found.

**Runaway argument:** a missing `}` or `\end{...}` made TeX swallow the rest of the file.

Fix: check matching braces/environments around the line number; binary-search by commenting halves of the document.
