---
title: "Double-blind done right"
description: "What to anonymize, how to cite yourself, and the metadata that betrays you."
category: "venue-formats"
order: 6
level: "intermediate"
tags: ["venues", "review"]
featured: false
updated: 2026-07-25
---

# Double-blind done right

Double-blind review means reviewers do not know who wrote the paper. Getting it wrong is one of the few formatting mistakes that can get a paper rejected without being read, so treat anonymization as a checklist, not a vibe.

## What must go

| Item | What to do |
|---|---|
| Author names and affiliations | Remove or replace with "Anonymous Author(s)" |
| Acknowledgments | Delete for submission (funders and colleagues identify you) |
| Repo and project links | Replace with an anonymized link, see below |
| Institution-specific details | "our university's cluster" beats "the Stanford GPU cluster" |
| "Our prior work" phrasing | Rewrite in third person, see below |
| Logos, watermarks, headers | Strip anything with a group or lab name |

Many classes automate the first row. With ACM's class it is one option:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

Other venues ship a submission variant of their template, [IEEEtran](/learn/ieee-format-in-practice/) venues often just tell you to omit the author block.

## Citing your own work

The rule is simple: cite yourself exactly as you would cite a stranger.

Wrong: "In our previous work [7], we showed..."
Right: "Lovelace et al. [7] showed..."

Do not omit your own relevant papers, reviewers expect the obvious related work to be cited, and a suspicious gap can de-anonymize you as effectively as a name. The only exception is genuinely unpublished work, which you can upload as anonymous supplementary material instead.

## Anonymous artifacts

Reviewers increasingly expect code and data. GitHub links are radioactive: the username is right there. Options that work:

- Services built for this (anonymous.4open.science is the field standard)
- A fresh repository under a throwaway account with scrubbed commit history
- Supplementary zip uploaded with the submission, with author names removed from file headers and notebooks

Check the zip before uploading: license files, `AUTHORS`, notebook metadata, and hardcoded home-directory paths (`/home/ada/...`) all leak names.

## The accidents that betray you

The paper text is anonymous, but the PDF may not be:

- **PDF metadata.** The Author field often auto-fills from your system. Check with `pdfinfo` or your viewer's document properties, and clear it via `\hypersetup{pdfauthor={}}`.
- **File names.** `lovelace-sigconf-final.pdf` undoes everything. Name it `paper.pdf` or the submission number.
- **Figure sources.** Plots exported from tools can embed usernames in metadata or in a visible path in a screenshot.
- **Preprints.** Posting to arXiv before submitting is allowed at many venues and forbidden at others. The CFP says which, read it, this is [part of choosing the venue](/learn/choose-your-venue/).

## Camera-ready flips it back

After acceptance, everything returns: names, affiliations, acknowledgments, the real repo link, and the first-person phrasing if you like it. Budget an hour for the de-anonymization pass, it touches more places than you remember, and the [camera-ready checklist](/learn/first-paper-roadmap/) is the moment to catch stragglers.
