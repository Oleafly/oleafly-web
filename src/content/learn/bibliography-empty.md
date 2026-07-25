---
title: "Empty bibliography"
description: "Path, backend, missing cite, printbibliography vs bibliography."
category: "log-literacy"
order: 4
level: "beginner"
tags: ["errors", "citations"]
featured: false
updated: 2026-07-24
---

# Empty bibliography

1. Does `refs.bib` exist at the path you named?
2. Did you run bibtex/biber?
3. Is at least one `\cite` present?
4. Using biblatex? Then `\printbibliography`, not `\bibliography`.
5. Check `.blg` log for database errors.
