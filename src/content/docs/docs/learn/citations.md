---
title: Citations and bibliography
description: BibTeX entries, cite keys, bibliography styles, and how to stop hand-typing references.
---

## The moving parts

1. A `.bib` file holds your references as structured entries.
2. `\cite{key}` marks citations in the text.
3. A bibliography command renders the reference list in a style.

## A BibTeX entry

```bibtex
@article{einstein1905,
  author  = {Einstein, Albert},
  title   = {On the Electrodynamics of Moving Bodies},
  journal = {Annalen der Physik},
  year    = {1905},
  volume  = {17},
  pages   = {891--921}
}
```

Each entry type has required fields (`@article` needs author, title, journal,
year). The free [BibTeX validator](/tools/bibtex-validator/) checks a whole
file in your browser.

## Wiring it up

```latex
\usepackage{cite}          % preamble (or use biblatex)

Relativity changed physics~\cite{einstein1905}.

\bibliographystyle{plain}  % before \end{document}
\bibliography{refs}        % refs.bib, no extension
```

## Stop hand-typing entries

Hand-typed entries drift: wrong years, mangled authors, duplicate keys. In
Oleafly, Add citation fetches a correct entry from a DOI, arXiv id, or paper
title, and preflight warns about keys that are missing from your `.bib`
before they render as `[?]`.
