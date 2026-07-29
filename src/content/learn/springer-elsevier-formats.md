---
title: "Springer, Elsevier, and LNCS formats"
description: "llncs, Springer Nature journals, and elsarticle: single-column classes and camera-ready source."
category: "venue-formats"
order: 4
level: "intermediate"
tags: ["venues", "publishers"]
featured: false
updated: 2026-07-25
---

# Springer, Elsevier, and LNCS formats

Outside the IEEE and ACM ecosystems, two publishers dominate: Springer (including Springer Nature) and Elsevier. Their classes look plainer than the two-column conference styles, and that is by design. The publisher typesets the final version.

## LNCS: the proceedings workhorse

If your conference publishes in Lecture Notes in Computer Science (or its siblings LNAI and LNBI), you write in `llncs`:

```latex
\documentclass{llncs}
\usepackage{graphicx}

\title{Contribution Title}
\author{Ada Lovelace\inst{1} \and Charles Babbage\inst{2}}
\institute{University of London \and University of Cambridge}
```

LNCS papers are single column, use `\inst{}` superscripts to map authors to institutes, and have a famously tight default page budget (often 12 to 16 pages including references). The class is not in every TeX distribution by default. Download the author kit from Springer's LNCS page. Its bibliography style is `splncs04`:

```latex
\bibliographystyle{splncs04}
\bibliography{references}
```

## Springer Nature journals

Springer journals historically used `svjour3` and have been migrating to the newer `sn-jnl` class with style options per journal family (`sn-mathphys-num`, `sn-basic`, and others). The journal's "Submission guidelines" page names the exact class and option. Do not guess: two Springer journals can want different classes.

## Elsevier: elsarticle

Elsevier journals share one class, `elsarticle`:

```latex
\documentclass[preprint,12pt]{elsarticle}
% later: \documentclass[final,3p,twocolumn]{elsarticle}
```

The `preprint` option gives a roomy double-spaced single column for review, and `final` with `1p`, `3p`, or `5p` mimics the journal's print layout. Bibliography styles are `elsarticle-num` (numbered) or `elsarticle-harv` (author-year), matching what the journal uses.

## Quick comparison

| Publisher | Class | Columns | Bib style |
|---|---|---|---|
| Springer LNCS | `llncs` | one | `splncs04` |
| Springer Nature journals | `sn-jnl` (was `svjour3`) | one | per-journal option |
| Elsevier | `elsarticle` | one (review) | `elsarticle-num` / `-harv` |

## Why single column? Because you are not the typesetter

These classes render your *manuscript*, not the final page. The publisher's production team re-typesets accepted papers into the journal's house layout. That is also why "camera-ready source upload" here means something specific: you upload your `.tex`, `.bib`, and figure files, not just a PDF, so production can rebuild and restyle the paper. Practical consequences:

- Keep the source clean and compilable from a fresh checkout: no absolute paths, no missing figures
- Do not hack spacing or margins. Production strips it anyway (and it can [get flagged](/learn/page-limits-without-crimes/))
- Use standard packages. Exotic ones get rewritten by production or bounced back to you

These classes lean on a fair number of packages, so a minimal installation may fetch several on first compile. If one refuses to appear, see [installing missing packages](/learn/install-missing-package/). If the template errors outright, triage it like any [broken template](/learn/fix-broken-template/).
