---
title: "Clinical and grant writing: privacy, trackable drafts, and offline LaTeX"
description: "Why medical, public-health, and grant writers care where the draft is stored, and how local-first LaTeX fits review cycles."
date: 2026-07-14
tags: [medicine, grants, privacy]
---

Clinical manuscripts and grant narratives often include sensitive detail even
before de-identification is final. Putting every keystroke on a third-party
editor is a policy decision, not only a tooling preference.

## Plain files are easier to reason about

A folder of `.tex` and figures can sit inside an encrypted disk, a hospital
laptop image, or an air-gapped machine. You can point compliance at a path.
Browser projects require trusting a vendor's access model and export path.

Oleafly's [privacy page](/privacy/) is short on purpose: local-first means
the document does not need an account on someone else's editor to exist.

## Track changes without Word's monopoly

Grant PIs still ask for "track changes." In LaTeX land, that is Git history
plus PDF comments from coauthors, or a short Word export for the person who
refuses to install anything. Keep `.tex` as the source of truth; see
[coauthors who only speak Word](/learn/collaborator-uses-word/).

## Templates and page limits

NIH-style and foundation templates are about margins, fonts, and page caps.
Geometry and font packages matter more than clever macros. Compile to PDF and
check page count after every major cut, not the night before the portal
closes.

## Bibliography managers

Shared Zotero groups export a `.bib` that multiple PIs can refresh. Validate
before submission so missing years do not surface as `[?]` in the assembled
PDF: [BibTeX validator](/tools/bibtex-validator/).

## Offline is a feature in hospitals

Clinical networks block random SaaS domains. A local compiler keeps writing
possible between EHR sessions. That is a practical reason local-first tools
exist, not a philosophy debate.
