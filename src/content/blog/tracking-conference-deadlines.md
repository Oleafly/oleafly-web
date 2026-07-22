---
title: "Stop missing conference deadlines: AoE, abstracts, and countdowns"
description: "Why conference deadlines are confusing (AoE timezones, separate abstract dates), how the open ccf-deadlines dataset fixes discovery, and how to keep a live countdown next to your manuscript."
date: 2026-07-21
tags: [conferences, deadlines]
---

Every researcher has a story about a deadline that was actually twelve hours
earlier than they thought. The usual culprits:

**AoE is not your timezone.** "Anywhere on Earth" means UTC-12: the deadline
passes when it is past midnight at the International Date Line's west side.
That is generous, but only if you convert it correctly.

**The abstract deadline is real.** Many venues require a registered abstract
about a week before the paper deadline. Miss it and the paper deadline is
irrelevant.

**Deadlines move.** Extensions and round-two dates spread across mailing
lists and social feeds; official calls are the only source worth trusting.

## The open dataset that fixes discovery

The community-maintained
[ccf-deadlines](https://github.com/ccfddl/ccf-deadlines) project tracks
hundreds of venues as reviewable YAML files: deadlines, timezones, ranks,
and official links, all MIT-licensed. Because it is data rather than a
website, anyone can build views on top of it.

We publish one such view at [oleafly.com/deadlines](/deadlines/): live
countdowns computed in your browser, field filters, and search, refreshed
from the dataset on every deploy.

## Countdown next to the manuscript

A web page still requires remembering to look. The
[Oleafly desktop app](https://github.com/Oleafly/Oleafly/releases/latest)
puts the same board one click from your projects, works offline from a
bundled snapshot, and refreshes on demand. The deadline countdown lives in
the same window as the paper you are racing to finish, which is where it
belongs.
