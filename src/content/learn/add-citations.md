---
title: "From .bib key to in-text cite"
description: "The usual BibTeX loop with cite and bibliography commands."
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Citations check'
  questions:
    - prompt: 'What''s the usual BibTeX setup?'
      choices:
        - 'A Word comment plus a footnote'
        - 'A .bib entry and a \cite{key} in the document'
        - 'A bare URL in the text'
        - 'A screenshot from Google Scholar'
      answer: 'B'
      level: beginner
    - prompt: 'What has to match between \cite{...} and the .bib file?'
      choices:
        - 'The journal impact factor'
        - 'The citation key, exactly, including capitalization'
        - 'Only the PDF filename'
        - 'The section number'
      answer: 'B'
      level: beginner
    - prompt: 'What do \bibliographystyle and \bibliography usually control?'
      choices:
        - 'Figure placement and image DPI'
        - 'How references look, which .bib file to read, and where the list prints'
        - 'Math delimiters'
        - 'Page margins only'
      answer: 'B'
      level: beginner
    - prompt: 'Why isn''t one LaTeX pass enough for citations?'
      choices:
        - 'Citations need a browser'
        - 'BibTeX or biber, then more LaTeX passes, turn keys into markers and the reference list'
        - 'You have to reboot'
        - '\cite only works offline'
      answer: 'B'
      level: intermediate
    - prompt: 'Citations show as bold question marks. What''s a common cause?'
      choices:
        - 'The title is too long'
        - 'You skipped the bibliography step, or the key isn''t in the .bib file'
        - 'You used article class'
        - 'Math mode is open'
      answer: 'B'
      level: beginner
---

# From .bib key to in-text cite

Citing a source in LaTeX involves two pieces: a plain-text database that describes each work once, and a `\cite` command in your document that points at an entry by its key. LaTeX numbers the citation, formats the reference list, and keeps everything consistent when you reorder sections or add sources. You never type "[12]" by hand, and you never renumber anything yourself.

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

A single `.bib` file can serve every paper you write, so it pays to build it carefully. [Build a .bib that lasts](/learn/create-bibliography/) covers entry types, required fields, and keys that survive a decade. When a venue wants a different look, you change one line rather than any entries, as explained in [Numeric, author-year, journal styles](/learn/change-citation-style/).
