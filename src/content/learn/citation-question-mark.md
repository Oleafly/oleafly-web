---
title: "Clearing mystery citation marks"
description: "Typos, missing passes, wrong path, BibTeX vs Biber mismatch."
category: "cite-your-sources"
order: 5
level: "beginner"
tags: ["citations", "errors"]
featured: true
updated: 2026-07-25
---

# Clearing mystery citation marks

## The symptom

The document compiles, but where a citation should appear you get a bold question mark, `[?]`, and the log contains lines like `LaTeX Warning: Citation 'knuth84' undefined`. Sometimes every citation is affected, sometimes only one or two. Because this is a warning rather than an error, the PDF still builds, and the marks are easy to miss until a reader points them out.

## Why it happens

LaTeX does not resolve citations directly. On the first pass it records each requested key in an auxiliary file. A backend program (`bibtex` or `biber`) then looks those keys up in your `.bib` database and writes formatted entries. Two further LaTeX passes fold the results back in. A question mark means that at the moment of the final pass, no formatted entry existed for that key. Every cause of this symptom is some way of breaking that pipeline.

## Work through the causes in order

Check the key itself first. `\cite{knuth84}` and `@article{knuth1984,...}` are different strings, and the match is exact, including case. Search your `.bib` file for the key named in the warning; a typo on either side is the most common culprit, and the first missing-key warning in the log is the one to chase.

Next, make sure the full compile cycle ran. The sequence is LaTeX, then `bibtex` or `biber`, then LaTeX twice more. A single compile can never resolve citations, because the backend has not run yet. Oleafly drives the whole cycle automatically, but a manual build or a misconfigured editor can stop after the first pass.

Third, verify the database path. `\bibliography{refs}` and `\addbibresource{refs.bib}` resolve relative to the main file, so a database in a subfolder must be written as `bib/refs` or `bib/refs.bib`. A wrong path fails quietly, and usually takes the whole reference list down with it; see [Empty bibliography](/learn/bibliography-empty/) for that larger failure.

Finally, match the backend to the system. A document that loads biblatex must be processed with `biber`. Feeding it classic `bibtex` produces no usable output, and every citation stays a question mark no matter how many times you recompile.

## If all else fails

Stale auxiliary files can hold on to an old, broken state. Delete the `.aux`, `.bbl`, and `.blg` files next to your document and rebuild from scratch. The `.blg` file is also worth reading before you delete it: it is the backend's own log, and it names missing databases and malformed entries explicitly.
