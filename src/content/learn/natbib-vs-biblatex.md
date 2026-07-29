---
title: "natbib habits vs biblatex commands"
description: "Parenthetical and textual cites, and the names that replace them."
category: "cite-your-sources"
order: 8
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# natbib habits vs biblatex commands

Author-year citation needs two flavors of cite command. Sometimes the authors are part of your sentence, as in "Knuth (1984) introduced literate programming." Sometimes the citation is a parenthetical aside, as in "Literate programming mixes code and prose (Knuth, 1984)." Plain `\cite` cannot make that distinction, which is why the `natbib` package exists, and why biblatex ships its own set of names for the same ideas. If you learned one and are handed a template using the other, this page is the translation table.

## The natbib commands

```latex
\usepackage{natbib}
\citet{knuth84}  % Knuth (1984)
\citep{knuth84}  % (Knuth, 1984)
\citep*{knuth84} % (Knuth, Lamport, and Mittelbach, 1984): full author list
```

The mnemonic is that `\citet` is a *textual* cite that reads as part of the sentence, while `\citep` is a *parenthetical* cite wrapped in brackets. The starred variants print the complete author list instead of "et al.", which is occasionally required the first time you cite a work. natbib also offers `\citeauthor` for just the names, `\citeyear` for just the year, and an optional argument for page numbers, as in `\citep[p.~42]{knuth84}`. natbib is a preprocessor-era package: it works with classic BibTeX and a compatible `.bst` style such as `plainnat` or `apalike`.

## The biblatex equivalents

biblatex covers the same ground with different names. `\textcite{knuth84}` produces the textual form "Knuth (1984)", `\parencite{knuth84}` produces the parenthetical "(Knuth, 1984)", and plain `\cite{knuth84}` produces a bare citation whose exact look depends on the loaded style. There are direct analogues for the rest as well: `\citeauthor`, `\citeyear`, and prenotes and postnotes for things like page numbers, written `\parencite[see][p.~42]{knuth84}`. If muscle memory is the problem, biblatex even has a `natbib=true` package option that defines `\citet` and `\citep` as aliases, which makes migration nearly painless.

## Migrating a document from natbib to biblatex

Your `.bib` file needs no changes at all. Both systems read the same database. The migration touches only the preamble and the build. Remove `\usepackage{natbib}` and the `\bibliographystyle` line, then load `\usepackage[backend=biber,style=authoryear]{biblatex}` and point it at your database with `\addbibresource{refs.bib}`. Replace `\bibliography{refs}` at the end of the document with `\printbibliography`. Finally, make sure the build runs `biber` instead of `bibtex`, because biblatex stores its data in a different format and the old backend will silently produce nothing. If you would rather not touch the body text, keep the natbib command names via the compatibility option and only the preamble changes.

## Which one to pick

If the journal template already loads natbib, stay with it. Fighting a class file is rarely worth it. For new documents where you choose, biblatex is more flexible and handles Unicode better. The broader comparison lives in [Classic BibTeX or biblatex](/learn/bibtex-vs-biblatex/), and switching styles afterwards is covered in [Numeric, author-year, journal styles](/learn/change-citation-style/).
