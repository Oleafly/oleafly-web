---
title: "Posting your first arXiv preprint"
description: "Endorsement, categories, source cleaning, licenses, and the announcement cycle."
category: "ship-your-paper"
order: 3
level: "intermediate"
tags: ["arxiv", "preprint", "publishing"]
featured: false
updated: 2026-07-25
---

# Posting your first arXiv preprint

Posting to arXiv is a rite of passage: your work, public, citable, timestamped. The process has a few quirks that surprise everyone the first time. If you have not read [what arXiv is](/learn/what-is-arxiv/), start there, then come back.

## Endorsement: the bouncer at the door

Brand-new submitters in most categories need an endorsement from an established arXiv author. If your account uses an academic email and you have co-authors with arXiv history, this is often automatic or quick. Otherwise, ask your advisor or a co-author; the system gives you an endorsement code to send them. Sort this out days before you plan to post, not the night of.

## Pick your categories

arXiv is organized into moderated categories like `cs.LG` (machine learning), `cs.CL` (computation and language), `math.OC` (optimization), `stat.ML`. You choose one primary category and optionally some secondaries. Look up where papers you cite live, and follow them. The primary category determines which mailing list announces your paper, so it decides who sees it first.

## arXiv wants your source, not your PDF

This is the big one. If your paper was produced with LaTeX, arXiv requires the LaTeX source, not just a PDF. Their AutoTeX system compiles it on their servers, and that build is what readers download. Consequences:

- Every file your paper needs must be in the upload: figures, `.bbl` file (arXiv does not run BibTeX for you, so include the generated `.bbl`), style files that are not standard.
- If it does not compile on their system, you fix it until it does.

## Clean your source first

Your comments ship with your source, and anyone can download it. That draft note saying `% TODO: is this claim even true?` will be public. Before uploading:

- [ ] Strip comments. The `arxiv-latex-cleaner` tool automates this and also removes unused files.
- [ ] Delete unused figures and old sections
- [ ] Check for embarrassing filenames (`final_v7_ACTUALLY_final.tex`)
- [ ] Compile the cleaned copy from scratch once

Working from a Git-backed project helps here: in Oleafly you can branch off a checkpoint, clean the source, and diff against the original to confirm nothing substantive changed before exporting the ZIP.

## Licenses

arXiv asks you to pick a license. The minimal arXiv-only license is the common default and keeps your options open with journals. CC BY is more permissive. If the paper is headed to a specific publisher, check their preprint policy before choosing anything irrevocable.

## The announcement cycle and its folklore

arXiv announces new papers in batches, on a fixed weekday schedule with a submission cutoff. Papers submitted right after the cutoff appear at the top of the next listing, and a small cottage industry of folklore claims top-of-list papers get more attention. Maybe. Do not lose sleep over it; a good abstract matters far more than list position.

## Versions: v1, v2, and after acceptance

Your first post is v1, and it is permanent: you can add versions but never delete them. Post v2 when you have real improvements, typically the accepted version after [peer review](/learn/peer-review-explained/). After acceptance, update the arXiv copy with the camera-ready content (respecting the publisher's policy) and add the DOI or venue in the journal reference field. Readers will thank you for it.
