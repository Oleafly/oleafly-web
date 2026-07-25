---
title: "Browser project vs folder on disk"
description: "Cloud convenience compared with local ownership, offline work, and real Git."
category: "local-studio"
order: 1
level: "beginner"
featured: true
updated: 2026-07-25
---

# Browser project vs folder on disk

When you start writing LaTeX you face an early decision: does your project live in a browser tab on someone else's server, or in a folder on your own disk? Both models produce the same PDF. They differ in who holds the source, what happens when the network disappears, and how much of the surrounding toolchain you control.

## What each model gives you

| | Cloud (e.g. Overleaf) | Local (Oleafly, TeX Live) |
| --- | --- | --- |
| Setup | Instant, nothing to install | One install |
| Offline | Limited | Editing always works; compiles run with cached packages |
| Privacy | The provider stores your projects | Files stay on your disk |
| Git | Through a sync bridge | Native, a real repository in the folder |
| Collaboration | Real-time cursors | Git, patches, shared folders |
| Cost | Free tier plus subscriptions | Free |

A cloud project is a row in a database that the service renders for you. A local project is a directory you can open in a file manager, copy to a USB drive, search with any tool, and version with ordinary Git. That difference sounds abstract until a deadline coincides with an outage, a paywall change, or a flight.

## When the cloud is the right choice

Real-time co-editing is the cloud's genuine advantage. If three co-authors need to type into the same paragraph during the final hour before a deadline, and none of them will install software, a browser editor is the practical answer. Nothing local currently replaces simultaneous cursors.

## When local is the right choice

Local wins when the draft is sensitive or unpublished, when you work on planes or restricted networks, when your figures and data are large, or when you want version history that does not depend on a subscription tier. A local Git repository records your changes whether or not any service exists tomorrow, and the same folder works with a terminal, a code editor, or a collaborator's clone.

Oleafly is built for the local side of this table: the compiler ships inside the app, projects are plain folders with real Git history, and optional AI runs with your own key. A longer comparison is on the [blog](/blog/local-first-vs-cloud-latex-editors/), and the docs cover [how the two models can work together](/docs/why-oleafly/) through GitHub.
