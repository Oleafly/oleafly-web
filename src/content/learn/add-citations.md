---
title: "From .bib key to in-text cite"
description: "The usual BibTeX loop with cite and bibliography commands."
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-25
---

# From .bib key to in-text cite

Citing a source in LaTeX involves two pieces: a plain-text database that describes each work once, and a `\cite` command in your document that points at an entry by its key. LaTeX then numbers the citation, formats the reference list, and keeps everything consistent when you reorder sections or add sources. You never type "[12]" by hand, and you never manually renumber anything.

## The commands in the document

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

`\cite{knuth84}` inserts the in-text marker wherever the citation belongs. The two commands at the bottom do the rest: `\bibliographystyle{plain}` chooses how citations and references are formatted, and `\bibliography{refs}` names the database file (without its `.bib` extension) and marks where the reference list should be printed, usually just before `\end{document}`. Only sources you actually cite appear in the list.

## The entry in the database

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

This lives in `refs.bib`, a separate file next to your `main.tex`. The word after `@` is the entry type, `knuth84` is the citation key, and the rest are fields the style uses to build the formatted reference. The key is the only link between the two files, so it must match the argument of `\cite` exactly, including capitalization. You can check a whole database for missing fields and malformed entries with the [BibTeX validator](/tools/bibtex-validator/).

## Why one compile is not enough

The bibliography is built by a separate program. On the first LaTeX pass, the document writes the list of cited keys into an auxiliary file. The `bibtex` program then reads that list, pulls the matching entries out of `refs.bib`, and formats them. Two more LaTeX passes fold the result back in and resolve the in-text markers. Oleafly runs this full cycle for you on every compile. If you build by hand and skip the middle step, citations show up as bold question marks; see [Clearing mystery citation marks](/learn/citation-question-mark/) when that happens.

## Where to go from here

A single `.bib` file can serve every paper you write, so it pays to build it carefully; [Build a .bib that lasts](/learn/create-bibliography/) covers entry types, required fields, and keys that survive a decade. When a venue wants a different look, you change one line rather than any entries, as explained in [Numeric, author-year, journal styles](/learn/change-citation-style/).
