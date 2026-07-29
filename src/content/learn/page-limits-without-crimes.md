---
title: "Page limits without typographic crimes"
description: "Legitimate ways to fit the limit, the hacks that get papers flagged, and why venues check."
category: "venue-formats"
order: 5
level: "advanced"
tags: ["venues", "formatting"]
featured: false
updated: 2026-07-25
---

# Page limits without typographic crimes

Your paper is 10.4 pages. The limit is 10. What happens in the next hour determines whether you fix the paper or commit a formatting violation that gets it desk-rejected.

## Squeeze the content, not the format

Work this list in order. Each step is invisible to format checkers because it changes the paper, not the template.

1. **Tighten prose first.** Half a page of overflow is usually a wordy related-work section and three redundant transition sentences. Cutting words improves the paper. Cutting whitespace does not.
2. **Hunt widows.** A paragraph whose last line holds one or two words wastes a full line. Rewriting one sentence in that paragraph reclaims it.
3. **Resize figures honestly.** Many figures have huge internal margins. Trim the whitespace in the figure itself, or drop a two-column figure to one column if it stays legible.
4. **Slim tables.** `booktabs` tables with no vertical rules are more compact and look better, see [beautiful tables](/learn/booktabs-beautiful/), and abbreviated column headers buy real width.
5. **Use vector figures.** PDF plots scale down cleanly, so you can shrink them further than pixelated PNGs before legibility dies. Fuzzy raster figures have their own problems, see [fuzzy fonts in PDFs](/learn/fuzzy-font-pdf/).
6. **Move material to an appendix or supplement,** if the venue allows it. Proofs, extra ablations, and hyperparameter tables are classic overflow candidates. Check whether the appendix counts against the limit, many venues exclude it, some do not.

## The crimes

These change the template instead of the paper. Program committees run automated format checkers precisely because people try them:

| Crime | How it gets caught |
|---|---|
| `\vspace{-8pt}` sprinkled everywhere | Visibly cramped spacing, diffs against the class defaults |
| `\usepackage[margin=...]{geometry}` | Automated margin measurement |
| Shrinking `\baselinestretch` or font size | Line counts per column, font size probes |
| `\small` or `\footnotesize` on body text or captions | Font size probes, reviewer eyeballs |
| Negative `\itemsep`, crushed lists | Cramped look, checker heuristics |
| Renaming the class file with edits inside | Checksum against the official class |

## Why venues actually check

A page limit is a fairness contract: every author gets the same space, and every reviewer commits to reading a bounded amount. A paper that cheats its way to 10 pages is really an 11-page paper competing against honest 10-page papers. That is why violations are treated as an integrity issue, not a style nit. Many venues desk-reject without review, and there is no appeal that says "but the content was good".

## The honest last resort

If you have tightened the prose, slimmed the floats, moved proofs to the appendix, and you are still over: cut a result. Painful, but a focused 10-page paper reviews better than a crammed one anyway. Reviewers can feel density, and [choosing a venue](/learn/choose-your-venue/) with a longer format is always an option for the next submission.
