---
title: "TOC, lists of figures, lists of tables"
description: "tableofcontents and why the second pass matters."
category: "paper-bones"
order: 3
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-24
---

# TOC, lists of figures, lists of tables

```latex
\tableofcontents
\listoffigures
\listoftables
```

Compile **twice** after structural changes. Starred sections need `\addcontentsline{toc}{section}{Title}` if they should appear in the TOC.
