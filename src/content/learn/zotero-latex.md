---
title: "Zotero into a .bib file"
description: "Better BibTeX, auto-export, keys that survive machines."
category: "cite-your-sources"
order: 6
level: "intermediate"
tags: ["citations", "zotero"]
featured: false
updated: 2026-07-25
---

# Zotero into a .bib file

Zotero is very good at collecting references: it grabs metadata and PDFs from a browser button and keeps everything searchable. LaTeX, on the other hand, only reads `.bib` files. The bridge between the two is the Better BibTeX plugin, which turns a Zotero collection into a `.bib` file that stays current and, just as important, keeps citation keys stable so your `\cite` commands never break.

## Why the built-in export is not enough

Zotero can export BibTeX on its own, but it regenerates citation keys each time, and a key that changes from `knuth_literate_1984` to `knuth_literate_1984-1` silently breaks every `\cite` that used the old name. The export is also a one-time snapshot, so the file goes stale the moment you add a paper. Better BibTeX fixes both problems: keys are generated from a formula you choose, can be pinned so they never change, and the export can refresh itself automatically.

## Setting up the pipeline

First, install Better BibTeX from its website through Zotero's Tools, Plugins dialog, then restart Zotero. Second, decide on a citation key formula in the Better BibTeX preferences; a pattern that produces keys like `knuth1984` or `knuth1984literate` is easy to type and easy to recognize in source. Third, right-click the collection that belongs to your paper, choose Export Collection, select the Better BibTeX format, and tick "Keep updated" before saving the file into your project folder as, say, `refs.bib`. From then on, adding or editing an item in Zotero rewrites the file within a few seconds.

Finally, point your document at the exported file with `\bibliography{refs}` or `\addbibresource{refs.bib}`, exactly as with a hand-written database. The wiring is covered in [From .bib key to in-text cite](/learn/add-citations/).

## Division of labor

Treat Zotero as the master database and the `.bib` file as a generated artifact that lives in the paper's repository. Committing the `.bib` alongside the `.tex` means a coauthor, or you on another machine, can compile the paper without having Zotero installed at all. Do not hand-edit the exported file, because the next auto-export overwrites your changes; fix metadata in Zotero instead, and the correction flows through. If an entry still looks wrong after export, run it through the [BibTeX validator](/tools/bibtex-validator/) to see which field the style is unhappy about.

One habit prevents most future pain: once a key appears in a manuscript, pin it in Better BibTeX (right-click the item, Better BibTeX, Pin BibTeX key). Pinned keys survive formula changes, machine moves, and library reorganizations, which is exactly what a citation key needs to do.
