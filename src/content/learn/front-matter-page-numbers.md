---
title: "Roman then arabic pages"
description: "Front matter numbering that committees still expect."
category: "long-form"
order: 2
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-24
---

# Roman then arabic pages

```latex
\begin{document}
\pagenumbering{roman}
\maketitle
\tableofcontents
\pagenumbering{arabic}
\chapter{Introduction}
...
\end{document}
```

Some thesis classes provide `\frontmatter` / `\mainmatter` / `\backmatter`.
