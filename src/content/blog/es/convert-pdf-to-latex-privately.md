---
title: "Convertir un PDF a LaTeX sin subirlo a ningún lado"
description: "La mayoría de los convertidores de PDF a LaTeX se ejecutan en el servidor de otra persona. Cómo funciona la conversión local determinista en Oleafly, qué puede y qué no puede recuperar y cuándo ayuda el refinamiento opcional de IA."
date: 2026-07-21
tags: [pdf, latex, privacy, local-first]
---

Search "PDF to LaTeX" and you will find upload forms. For a published paper
you own rights to rework, that may be fine. For a draft under review, a grant
application, or a manuscript with unpublished results, uploading is often the
wrong move.

For text-based PDFs, conversion does not need a conversion SaaS. You can
reconstruct editable source on your machine, then keep writing in a real local
editor.

## Why people upload (and why you might not)

Upload converters are easy: drag PDF, wait, download zip. The cost is that
every page of the draft hits someone else's GPU and logs. Policies at labs,
hospitals, and companies often forbid that for unpublished work even when the
UI makes it feel harmless.

Local conversion changes the default. For the deterministic pass, the PDF
stays on disk.

## How local conversion works

A text-based PDF already contains its words, positions, and font metadata. A
converter can read that layer and reconstruct structure from geometry:

- font size clustering finds headings and the title
- x-position histograms detect two-column layouts and fix reading order
- font name flags recover bold, italic, and monospace runs
- baseline offsets identify sub and superscripts
- Unicode math glyphs map back toward LaTeX macros
- repeated header and footer lines get stripped
- embedded raster images can be extracted as figure files

None of that needs a model, a server, or a network connection. The words in
the output are the words in the PDF. The structure is an inspectable guess you
can fix by hand.

## What deterministic conversion cannot do

Scanned PDFs have no text layer, so there is nothing to read without OCR.
Complex display math and tables are typeset as positioned glyphs;
reconstructing their source reliably needs more than geometry. Multi-column
edge cases and floating footnotes still need human cleanup.

A good converter says so, instead of silently mangling content into something
that looks finished.

## Where AI helps

Given the page image and the deterministic draft, a vision model can rebuild
tables, fix display equations, and transcribe scans. That step should be
optional, explicit, and pointed at a provider you choose with a key you own.

The privacy model is straightforward. The deterministic pass stays local.
Refine runs only when you click, and traffic goes only to the model endpoint
you configured, not through a free upload site that may train on drafts.

## Doing this in Oleafly

The free [Oleafly desktop app](https://github.com/Oleafly/Oleafly/releases/latest)
ships this two-tier pipeline inside the same research workspace as normal
writing:

1. Deterministic local convert — no AI key, no network. Reconstructs many
   text-based PDFs into editable LaTeX, extracts figures you can download on
   their own, and reports what it kept as plain text rather than inventing
   structure.
2. Optional Refine with AI — your key, your provider, only when you ask.
   Nothing is sent through an Oleafly conversion backend. Traffic goes to the
   model endpoint you chose.

The result lands as a project you can keep editing with the full loop:
project-wide refs and cites, live diagnostics, compile with the bundled
Tectonic engine, SyncTeX PDF preview, offline spell/grammar on prose, real Git
checkpoints, and optional approval-gated AI for cleanups. After import you are
working in the same tools you would use for any other paper.

## Practical tips

- Prefer digital, text-based PDFs (your own old exports, publisher proofs you
  have rights to rework). Scans need OCR or vision refine.
- Expect to clean floats, multi-column edge cases, and heavy math by hand
  after the first pass. Conversion is a head start, not camera-ready.
- Validate bibliography entries if you merge recovered text with an existing
  `.bib` ([BibTeX validator](/tools/bibtex-validator/)).
- Keep the recovered project under Git from the first successful compile so
  cleanup commits stay reversible.
- Do not convert PDFs you do not have rights to turn into derivative source
  for redistribution. Tooling does not grant copyright.

## A sane recovery workflow

1. Import or convert the PDF locally.
2. Compile immediately; fix preamble and package errors first.
3. Walk figures and tables; replace broken ones from original assets if you
   still have them.
4. Re-cite from a clean `.bib` instead of trusting recovered `\cite` keys
   blindly.
5. Checkpoint; only then do large structural edits.

## Bottom line

If the alternative is retyping a twenty-page methods section (or pasting it
into a browser upload form), local reconstruction is usually enough of a head
start: source on disk, figures extracted, then a real editor on the other side
of import. Keep the refine step optional and explicit so you can explain the
privacy path to a lab or compliance team without hand-waving.
