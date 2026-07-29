---
title: "Author lists, order, and et al."
description: "What et al. means, author-order conventions by field, and the machinery of credit."
category: "paper-anatomy"
order: 8
level: "beginner"
tags: ["writing", "publishing"]
featured: false
updated: 2026-07-25
---

# Author lists, order, and et al.

The author list looks like the simplest part of a paper. It is actually a dense little credit ledger with field-specific rules. Misreading it is a classic newcomer mistake.

## What "et al." means

"Et al." is Latin, short for *et alii*, "and others." When a citation says "Vaswani et al. 2017," it means Vaswani plus the remaining authors, unnamed for brevity. It is a citation convention, not a judgment: the other authors matter just as much, there is simply no room to list eight names every time.

Citation styles truncate mechanically. Many styles name up to two or three authors, then switch to "First et al." beyond that. Your bibliography style handles this automatically, which is one more reason to [let BibTeX manage citations](/learn/add-citations/) rather than typing them by hand.

## Author order is a code, and the code varies by field

| Convention | Where | How to read it |
|---|---|---|
| First author did the most | Most of CS, biology, medicine | First position is the prize |
| Last author is the PI | Lab-based sciences, much of ML | Senior author who leads the group and funding |
| Alphabetical | Theory CS, math, economics | Order carries no information at all |

This matters when reading CVs across fields: a middle position in an alphabetical-order field says nothing, while in a first-author field it signals a supporting role. When in doubt about a specific paper, do not infer too much. When writing your own, agree on the order early, ideally before the writing starts. Author-order disputes at submission time are a genuinely miserable genre of academic drama.

## The supporting cast of symbols

Modern author blocks carry extra annotations:

- **Corresponding author**, often marked with an envelope symbol or asterisk: the person who handles the submission and answers reader email.
- **Equal contribution**, usually a dagger or asterisk with a footnote like "These authors contributed equally." Common when two people genuinely co-led the work.
- **Affiliations**, matched by superscript numbers when authors span institutions.

```latex
\author{Ada Lovelace\thanks{Equal contribution.} \and
        Charles Babbage\thanks{Equal contribution.} \and
        Mary Somerville\thanks{Corresponding author.}}
```

Venue classes each have their own author markup, so copy the pattern from the template. The general front-matter mechanics are in [the title page lesson](/learn/title-page/).

## ORCID: your permanent ID

Names collide and change. An ORCID iD is a persistent identifier (a 16-digit number at orcid.org) that follows you across name changes, institutions, and every J. Smith in your field. Many journals now require one from the corresponding author. Register once, attach it to submissions, and your publication record stays unambiguous for life.

## The one rule that never varies

Whatever the ordering convention, authorship itself has a shared norm: everyone listed contributed meaningfully to the work, and everyone who contributed meaningfully is listed. Gift authorship and ghost authorship are both misconduct in most codes of ethics. The order is politics; the list is integrity.
