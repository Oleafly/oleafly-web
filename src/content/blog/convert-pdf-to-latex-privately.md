---
title: "Converting a PDF to LaTeX without uploading it anywhere"
description: "Most PDF to LaTeX converters run on someone else's server. Here is how deterministic, local conversion works, what it can and cannot recover, and when AI actually helps."
date: 2026-07-21
tags: [pdf, latex, privacy]
---

Search "PDF to LaTeX" and you will find upload forms. For a published paper
that may be fine. For a draft under review, a grant application, or a
manuscript with unpublished results, uploading is exactly what you do not
want.

The good news: for text-based PDFs, conversion does not need a server at all.

## How local conversion works

A text-based PDF already contains its words, positions, and font metadata.
A converter can read that layer directly and reconstruct structure from
geometry:

- font size clustering finds headings and the title;
- x-position histograms detect two-column layouts and fix reading order;
- font name flags recover bold, italic, and monospace runs;
- baseline offsets identify sub and superscripts;
- Unicode math glyphs map back to LaTeX macros;
- repeated header and footer lines get stripped;
- embedded raster images can be extracted as figure files.

None of that needs a model, a server, or a network connection. The words in
the output are exactly the words in the PDF; the structure is an honest,
inspectable guess.

## What deterministic conversion cannot do

Scanned PDFs have no text layer, so there is nothing to read without OCR.
Complex display math and tables are typeset as positioned glyphs, and
reconstructing their source reliably needs more than geometry. A good
converter tells you this instead of silently mangling content.

This is where AI earns its place: given the page image and the deterministic
draft, a vision model can rebuild tables, fix display equations, and
transcribe scans. Run it with your own API key, directly against your chosen
provider, and the privacy story stays intact.

## Doing this in practice

The free [Oleafly desktop app](https://github.com/Oleafly/Oleafly/releases/latest)
ships this exact two-tier pipeline: a deterministic local converter that works
with no AI key and no network, plus an optional "Refine with AI" pass using
your own key. Every extracted figure is downloadable on its own, and the
converter reports what it kept as plain text rather than guessing.

Your PDF never leaves your machine in either tier. That is the whole point.
