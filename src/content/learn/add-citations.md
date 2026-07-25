---
title: "From .bib key to in-text cite"
description: "The usual BibTeX loop with cite and bibliography commands."
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-24
---

# From .bib key to in-text cite

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

Validate entries: [BibTeX validator](/tools/bibtex-validator/).
