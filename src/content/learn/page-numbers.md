---
title: "Page numbers on or off"
description: "plain, empty, roman vs arabic, suppressing numbers on the title page."
category: "type-and-shape"
order: 5
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-24
---

# Page numbers on or off

Page numbers appear by default in `article`. To suppress on the title page:

```latex
\maketitle
\thispagestyle{empty}
```

```latex
\pagestyle{plain} % number at bottom
\pagestyle{empty} % nothing
\pagenumbering{roman}
\pagenumbering{arabic}
```

Thesis front matter: [Roman/Arabic guide](/learn/front-matter-page-numbers/).
