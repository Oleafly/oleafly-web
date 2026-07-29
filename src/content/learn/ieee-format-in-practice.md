---
title: "IEEE format in practice"
description: "IEEEtran conference and journal modes, author blocks, and two-column gotchas."
category: "venue-formats"
order: 2
level: "intermediate"
tags: ["venues", "ieee"]
featured: false
updated: 2026-07-25
---

# IEEE format in practice

IEEE venues, from tiny workshops to flagship journals, share one class file: `IEEEtran`. Learn it once and hundreds of venues open up.

## Conference vs journal mode

The same class produces different layouts depending on options:

```latex
% Conference paper
\documentclass[conference]{IEEEtran}

% Journal article
\documentclass[journal]{IEEEtran}
```

Conference mode gives you the classic look: 10pt Times, two columns, no page numbers by default. Journal mode changes the title layout, adds author biographies at the end, and tweaks spacing. Always use the mode your venue asks for, they are not interchangeable. For the broader IEEE vs ACM comparison, see [ACM, IEEE, and friends](/learn/acm-ieee-and-friends/).

## Authors the IEEE way

Conference mode has its own author markup. Do not fight it with `\\` and manual centering:

```latex
\author{
  \IEEEauthorblockN{Ada Lovelace}
  \IEEEauthorblockA{Analytical Engines Lab\\
  University of London\\
  ada@example.edu}
  \and
  \IEEEauthorblockN{Charles Babbage}
  \IEEEauthorblockA{Department of Mathematics\\
  University of Cambridge\\
  cb@example.edu}
}
```

`\IEEEauthorblockN` holds names, `\IEEEauthorblockA` holds affiliations, and `\and` separates authors into columns.

## Living with two columns

Two-column layout is where first-timers get stuck. The rules:

| Problem | Fix |
|---|---|
| Wide figure or table | Use `figure*` / `table*`, floats to the top of a page |
| Long equation overflows | Break it, see two-column tactics in [one column or two](/learn/one-column-or-two/) |
| Last page columns uneven | Balance them manually with `\IEEEtriggeratref` or the `balance` package |
| URL runs into the margin | `\usepackage{url}` or `xurl` for better breaking |

The starred float environments are non-negotiable for wide content:

```latex
\begin{figure*}[t]
  \centering
  \includegraphics[width=\textwidth]{pipeline}
  \caption{Full-width figures need the starred environment.}
\end{figure*}
```

Note that `figure*` refuses `[h]` placement, it always floats to a page top. Plan for that instead of fighting it.

## Bibliography

IEEE uses numeric citations with its own BibTeX style:

```latex
\bibliographystyle{IEEEtran}
\bibliography{references}
```

The matching `IEEEtran.bst` ships with the class. Do not substitute `plain` or `ieeetr`, reviewers notice, and the camera-ready checklist will catch it anyway.

## Where to get the real template

Always start from the official source: the IEEE Template Selector at ieee.org, or the conference's own author kit page. Conference organizers sometimes patch the template (copyright notice, extra footers), so the venue's version wins over a generic copy. Oleafly's [template gallery](/templates/) includes an IEEE-style conference starter that compiles out of the box on the bundled Tectonic engine, handy for drafting before you drop in the official kit.

## Common gotchas checklist

- Compile with pdfLaTeX-compatible code, IEEEtran predates fontspec and expects classic engines
- Do not add `geometry` or change margins, the class sets them exactly
- `\IEEEpeerreviewmaketitle` is needed after `\maketitle` in some journal submissions
- If the template errors on your machine, triage it like any [broken template](/learn/fix-broken-template/)
