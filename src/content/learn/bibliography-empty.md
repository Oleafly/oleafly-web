---
title: "Empty bibliography"
description: "Path, backend, missing cite, printbibliography vs bibliography."
category: "log-literacy"
order: 4
level: "beginner"
tags: ["errors", "citations"]
featured: false
updated: 2026-07-25
---

# Empty bibliography

## The symptom

Your document compiles without a fatal error, but the References section is missing entirely, or the heading appears with nothing under it. Often every `\cite` in the text shows as a bold question mark at the same time. Nothing crashed, so there is no obvious error to chase, which is what makes this one frustrating.

## Why it happens

The bibliography is not produced by LaTeX alone. LaTeX first writes the list of cited keys into an auxiliary file. A separate backend program (`bibtex` or `biber`) reads your `.bib` database and formats the matching entries. Finally LaTeX reads that formatted result back in on the next pass. An empty bibliography means this pipeline broke somewhere: the backend never ran, it ran but could not find the database, it found the database but no keys were requested, or the document is asking for the result with the wrong command.

## Work through the causes in order

First, confirm the database file exists where the document says it is. `\bibliography{refs}` and `\addbibresource{refs.bib}` both look for `refs.bib` relative to the main file, so a file that lives in a `bib/` subfolder must be referenced as `bib/refs` or `bib/refs.bib`. A wrong path fails quietly.

Second, make sure the backend actually ran. A single compile is never enough; the full cycle is LaTeX, then `bibtex` or `biber`, then LaTeX twice more. Oleafly runs this cycle automatically, but a hand-driven build or a misconfigured editor toolchain can skip the middle step, and the result is precisely an empty reference list.

Third, check that at least one `\cite` command is present. The backend only formats entries that the document requests, so a draft with no citations yet gets an empty list by design. During early drafting you can force everything in with `\nocite{*}`, which requests every entry in the database without printing anything in the text.

Fourth, match the command to the system. Classic BibTeX documents end with `\bibliographystyle{...}` and `\bibliography{refs}`. biblatex documents load the database in the preamble with `\addbibresource{refs.bib}` and print it with `\printbibliography`. Mixing the two, for example loading biblatex but still calling `\bibliography`, produces exactly this failure. The same goes for running the wrong backend: biblatex needs `biber`, and feeding it classic `bibtex` yields nothing.

## Read the backend's own log

The backend writes its complaints to a `.blg` file next to your document, and that is where malformed entries, duplicate keys, and "I couldn't open database file" messages show up. If the steps above look right but the list is still empty, the `.blg` log almost always names the real culprit. For question marks that persist after the bibliography itself appears, see [Clearing mystery citation marks](/learn/citation-question-mark/).
