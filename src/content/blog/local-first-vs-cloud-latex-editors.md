---
title: "Local-first vs cloud LaTeX editors: what you actually trade"
description: "Cloud LaTeX editors trade ownership for convenience. A look at what local-first changes in practice: privacy, speed, offline work, and what happens when a service disappears."
date: 2026-07-21
tags: [local-first, privacy]
---

Cloud LaTeX editors won for a simple reason: zero setup. Open a browser tab and
compile. That convenience is real, and for a while it was the only way to avoid
wrestling a TeX distribution onto your laptop.

The setup problem has since been solved locally. Modern engines like Tectonic
bundle into a desktop app and fetch packages on demand, so "install and
compile" now takes about as long as creating a cloud account. Which makes it
worth asking what the cloud subscription still buys, and what it costs.

## What you give up in the cloud

**Ownership.** Your manuscript lives in someone else's database. Export works
until it does not: services change plans, get acquired, or sunset features,
and your deadline does not move.

**Privacy.** Encryption at rest protects you from outsiders, not from the
service itself. Every draft, grant proposal, and unpublished result passes
through infrastructure you cannot audit.

**Speed.** A keystroke that travels to a server and back will never beat a
keystroke handled on your own machine. Compile queues at peak hours are a
cloud-only phenomenon.

**Offline.** Planes, trains, field sites, hospital basements, secure
facilities. A browser editor is a blank tab in all of them.

## What local-first changes

A local-first editor keeps projects as plain files in a folder you can see.
Version history is real Git, not a proprietary timeline. Compilation runs on
your CPU with no queue. If the app's maintainers vanished tomorrow, your files
and your Git history would not notice.

The interesting part is that collaboration, the cloud's strongest card, is
increasingly a Git story anyway: branches, pull requests, and review flows
that journals and labs already use for code.

## Where Oleafly sits

Oleafly is our attempt at this: a free, open-source desktop studio for LaTeX,
Typst, and Markdown with a bundled compiler, real Git underneath, and AI that
only runs with your own key against the provider you choose. The
[privacy page](/privacy/) is short because there is not much to disclose:
your files never reach us, so there is nothing we could leak.

If you want to try the workflow without installing anything, the
[free browser tools](/tools/) are a taste: they run entirely client-side,
exactly like the app treats your documents.
