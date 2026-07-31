---
title: "Stop missing conference deadlines: AoE, abstracts, and countdowns"
description: "Why conference deadlines confuse everyone (AoE, abstract registration, moving dates), how the open ccf-deadlines dataset helps, and how to keep a countdown next to the manuscript."
date: 2026-07-21
tags: [conferences, deadlines]
---

Every researcher has a story about a deadline that was actually twelve hours
earlier than they thought. The paper was ready. The portal was not. The usual
culprits are timezones, abstract registration, and dates that moved while nobody
updated the lab wiki.

This is a practical guide to reading calls for papers, tracking venues, and
keeping the countdown where you actually write.

## AoE is not your timezone

"Anywhere on Earth" (AoE) means UTC-12: the deadline passes when it is past
midnight on the west side of the International Date Line. That is generous
compared to a hard noon in New York, but only if you convert correctly.

Do not trust a screenshot of someone else's calendar app. Convert from the
official call. If the site says "23:59 AoE, 14 March," treat 15 March morning in
California as already late until you have done the conversion yourself.

## The abstract deadline is real

Many CS and adjacent venues require a registered title and abstract about a week
before the full paper deadline. Miss the abstract deadline and the paper
deadline is irrelevant; the portal will not let you submit.

Put both dates on the same calendar event series: abstract, paper, rebuttal,
camera-ready. Rebuttal windows are short. Camera-ready often lands during another
conference's rush.

## Deadlines move

Extensions and second-round dates spread across mailing lists and social feeds.
The official call (or the submission portal banner) is the only source worth
trusting. When a date moves, update your tracker the same day; stale
spreadsheets cause false calm.

## The open dataset that fixes discovery

The community-maintained
[ccf-deadlines](https://github.com/ccfddl/ccf-deadlines) project tracks hundreds
of venues as reviewable YAML: deadlines, timezones, ranks, and official links,
MIT-licensed. Because it is data rather than a single website, anyone can build
filters, countdowns, and search on top of it.

It will not include every workshop in your niche. For those, still bookmark the
official page. Use the dataset for the large, recurring venues where the
community already did the scraping work.

## Countdown next to the manuscript

A separate deadlines website only helps if you remember to open it. The useful
place for a countdown is next to the paper you are racing to finish.

We publish a free [live deadline board](/deadlines/) on the open dataset:
countdowns, CCF and CORE ranks, field filters, search, no sign-up. The
[Oleafly desktop app](https://github.com/Oleafly/Oleafly/releases/latest) puts
the same board one click from your projects, works offline from a bundled
snapshot, and refreshes on demand. When you are in the editor at 1am, you should
not need a second browser profile to know whether AoE is tonight or tomorrow.

New to the process? [The deadline lifecycle](/learn/deadline-lifecycle/) covers
abstract registration, rebuttals, and camera-ready from scratch.

## A lab ritual that works

When someone proposes a venue, paste the official CFP link into the tracker the
same day. Record abstract and paper times in AoE and in the lab's local zone.
Assign one person to re-check the portal the week before (dates move). Freeze
major experiments or theorem statements early enough that writing is not the
only path to the PDF. Keep the paper under version control so "the submission
PDF" maps to a commit, not a desktop filename.

## Writing under a hard stop

Deadlines do not care about perfect related work. Cut scope: one clear claim,
tables that compile, figures with captions, bibliography that does not show
`[?]`. Validate the `.bib` early
([BibTeX validator](/tools/bibtex-validator/)). Compile the camera-ready class
file days before the portal opens, not hours.

If you use a local research editor with auto-compile and Git checkpoints, use
them. A broken float at 23:00 AoE is recoverable if history exists.

## After you submit

Archive the exact PDF, source zip, and commit hash. Note the submission ID. When
reviews arrive, you will want the text you actually submitted, not the branch
you kept editing "just in case."

## Personal vs lab tracking

Individuals can live on a calendar plus one board. Labs need a shared sheet or
channel with owner names: who is submitting what, abstract done (yes/no), PDF
frozen (yes/no). The person who "thought someone else was submitting" is a
process bug, not a timezone bug.

## Tools are not the deadline

A countdown widget does not write the related work. Use the board to remove
uncertainty, then protect writing blocks on the calendar the same way you
protect experiments. If the paper is not compilable 48 hours before the
deadline, cut scope rather than inventing a new template.

Most missed deadlines are process failures. Convert AoE yourself, treat abstract
registration as binding, and update your tracker when the official page changes.
Keep the countdown next to the manuscript. Datasets and boards make discovery
cheap; the ritual is still yours.
