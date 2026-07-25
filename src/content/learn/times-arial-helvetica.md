---
title: "Times, Arial, Helvetica-like stacks"
description: "newtx, helvet, or fontspec mappings journals still ask for."
category: "typefaces"
order: 1
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-24
---

# Times, Arial, Helvetica-like stacks

```latex
\usepackage{newtxtext,newtxmath} % Times-like
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
```

Xe/LuaLaTeX:

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
\setsansfont{Arial}
```
