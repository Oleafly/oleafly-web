---
title: "A PDF page as a graphic"
description: "includegraphics with page selection, and pdfpages for appendices."
category: "float-surgery"
order: 6
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# A PDF page as a graphic

PDF is the best figure format LaTeX can consume. Unlike PNG or JPG, a PDF stores vector data, so lines and labels stay sharp at any zoom level and the fonts inside it travel with the file. Tools like Matplotlib, Inkscape, and draw.io all export PDF, which means the diagram you drew elsewhere can drop straight into your document. But PDFs bring one wrinkle that images do not: a PDF can contain many pages, and you have to tell LaTeX which one you want.

## Pulling one page out of a multi-page PDF

The `graphicx` package's `\includegraphics` accepts a `page` option alongside the usual sizing keys:

```latex
\includegraphics[page=1,width=\textwidth]{diagram.pdf}
```

Here `page=1` selects the first page of `diagram.pdf`, and `width=\textwidth` scales that page to the full width of the text block. If you omit `page`, LaTeX silently uses page one, which is usually what you want but can surprise you when a plotting script writes several figures into a single file. You can include the same PDF several times with different `page` values, once per figure environment, each with its own caption and label.

Wrap the command in a normal `figure` environment so it gets a caption and a number, exactly as you would for [any other image](/learn/insert-images/). The included page is cropped to its own bounding box, so if your source PDF has generous margins, the figure will look padded. Re-export with a tight bounding box, or crop it once with a tool like `pdfcrop`, rather than fighting the whitespace with negative spacing.

## Inserting whole documents with pdfpages

Sometimes you do not want a figure at all. You want entire pages, verbatim, dropped into your document: a supplementary PDF, a signed form, a published questionnaire in a thesis appendix. That is the job of the `pdfpages` package:

```latex
\usepackage{pdfpages}
\includepdf[pages=-]{supplement.pdf}
```

The `pages=-` value means every page. You can also write `pages=2-5` for a range or `pages={1,3,7}` for a specific list. Each inserted page fills its own output page, keeps its original layout, and participates in your document's page numbering, so the appendix reads continuously. Add the `pagecommand={}` option if headers or footers from your document class are printing on top of the inserted pages and you want them suppressed or customized.

## Which tool for which job

Use `\includegraphics[page=...]` when the PDF content should behave like a figure, meaning it floats, carries a caption, and gets referenced from the text. Use `\includepdf` when the pages should stand on their own at full size. The common mistake is using `pdfpages` for a diagram, which gives you an uncaptioned, unreferenced full page you cannot cite with `\ref`. If readers will ever see "see Figure 3", it belongs in a figure environment.
