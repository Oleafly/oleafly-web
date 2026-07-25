---
title: "Coauthor without a live cursor"
description: "Patches, shared folders plus Git, and owning separate chapter files."
category: "local-studio"
order: 4
level: "intermediate"
tags: ["workflow", "git"]
featured: false
updated: 2026-07-25
---

# Coauthor without a live cursor

Real-time collaborative editing, where you watch a coauthor's cursor move, is the model cloud editors sell. Plenty of good papers are written without it. When authors work locally, asynchronous collaboration built on Git is the reliable pattern: each person edits on their own machine, and changes are merged deliberately rather than character by character. It requires slightly more coordination and repays it with offline work, full history, and no dependency on anyone's server.

## Git as the backbone

The standard setup is a shared repository, typically on GitHub, that everyone pulls from and pushes to. Each author works in sessions: pull the latest state, write, commit, push. Because LaTeX is plain text, Git merges parallel changes to different parts of the paper automatically, and the setup takes minutes; [Put the paper on GitHub](/learn/sync-with-github/) covers it. When one collaborator cannot or will not use a Git host, patches fill the gap: `git format-patch` turns commits into small files you can email, and the recipient applies them with `git am`, keeping authorship and history intact. It is an old workflow, and it still works anywhere email does.

A hybrid also works when a coauthor insists on a synced folder: keep the shared copy in Dropbox or Syncthing for convenience, but let one person maintain the Git history and perform merges. Do not point two people's live Git checkouts at the same synced folder, because sync conflicts inside the `.git` directory corrupt repositories.

## Divide the document by file

Merges become rare when people rarely touch the same file. Split the manuscript so each chapter or section lives in its own file, pulled in from a thin `main.tex` with `\input{chapters/methods}`; the mechanics are in [Split a document into files](/learn/split-chapter-files/). Then assign ownership: each coauthor drafts in their own files, and one integrator handles the preamble, the merge, and the final read for consistency of notation and tone. This mirrors how software teams avoid stepping on each other, and it works for the same reasons.

## What actually goes wrong

The failure mode to avoid is two people editing the same paragraph in the same window of time. Git will flag it as a conflict, and LaTeX conflicts are readable but tedious to resolve, so the cheapest fix is social: a quick message saying "I am in the introduction today" prevents almost all of them. Two writing habits reduce the rest. Keep one sentence per source line, so parallel edits to neighboring sentences do not collide at all, and pull immediately before each writing session so you are always editing the latest text.
