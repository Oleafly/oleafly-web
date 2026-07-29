---
title: "Camera-ready without panic"
description: "De-anonymize, add funding, embed fonts, and hit the page limit: the final version checklist."
category: "ship-your-paper"
order: 5
level: "intermediate"
tags: ["camera-ready", "submission", "checklist"]
featured: false
updated: 2026-07-25
---

# Camera-ready without panic

Accepted! After the celebration comes one last deadline: camera-ready. The name is a relic from when publishers photographed your pages for printing. Today it means the final version that goes into the proceedings, exactly as readers will see it forever. No editor fixes your typos after this. That part is on you.

## What changes between submission and camera-ready

Your submitted version was tuned for reviewers. The camera-ready is for the permanent record, and several things flip:

| Item | Submitted version | Camera-ready |
|---|---|---|
| Author names | Hidden (double-blind) | Real names, affiliations, emails |
| Acknowledgments | Omitted | Funding, grants, thanks |
| Page limit | Review limit | Often +1 page, but exact |
| Copyright block | Placeholder or none | Publisher's block, DOI, ISBN |
| Self-citations | Third person ("Smith et al.") | Can say "our prior work" |
| Rebuttal promises | Promised | Actually delivered |

De-anonymizing is more than adding names back. Search the source for every place you wrote around your identity; see [anonymization for double-blind review](/learn/anonymization-double-blind/) for the usual hiding spots, then reverse them all.

## The exact page limit, again

Camera-ready limits are enforced by publishers, not just chairs, and the extra content (author block, acknowledgments) eats space. If you are suddenly six lines over, do it honestly: tighten prose and figures rather than abusing spacing commands. The techniques in [page limits without crimes](/learn/page-limits-without-crimes/) apply double here, because publishers check formatting.

## Fonts must be embedded

This is the one that bites people. Publishers run automated checks, and the number one rejection reason is non-embedded fonts, usually smuggled in by a figure PDF exported from a plotting tool. Check with `pdffonts yourpaper.pdf`: every font should say "emb: yes". If one does not, the culprit is almost always a figure; re-export it with fonts embedded or as a properly generated PDF.

## The final proofread: references first

References are where entropy concentrates. Before you upload:

- [ ] No "??" citations or undefined references in the log
- [ ] Every bibliography entry has venue, year, and correctly cased title
- [ ] Author names spelled right (people notice their own name)
- [ ] arXiv-only citations updated to published versions where they exist
- [ ] URLs in references still resolve

Then read the whole paper aloud once. It is slow and it works.

## Source upload quirks

Most publishers want your LaTeX source, not just the PDF, and their build systems are picky: include the `.bbl`, avoid nonstandard packages, follow their file layout. Export a clean source ZIP (Oleafly does this in one step) and test-compile it from scratch in an empty folder before uploading. If it only builds because of a stray file on your machine, the publisher's system will find out.

## The one-sitting checklist

- [ ] Names, affiliations, emails restored and correct
- [ ] Acknowledgments and funding numbers added
- [ ] Copyright block / DOI info pasted from the publisher's email
- [ ] Page limit met exactly
- [ ] `pdffonts` shows all fonts embedded
- [ ] References proofread
- [ ] Clean source ZIP compiles from scratch
- [ ] Uploaded with a day to spare

Then it is done, permanently. Time to think about [presenting it](/learn/present-your-paper/).
