---
title: "Coauthors who only speak Word"
description: "Keep .tex as source of truth while exchanging PDF or DOCX for comments."
category: "local-studio"
order: 5
level: "intermediate"
tags: ["workflow", "word"]
featured: false
updated: 2026-07-25
---

# Coauthors who only speak Word

Mixed-tool collaborations are common: you write the paper in LaTeX, and a coauthor, advisor, or clinical collaborator works exclusively in Microsoft Word. Nothing converts perfectly between the two formats, so the goal is not a magic bridge. The goal is a clear agreement about which file is the real paper and a routine for moving feedback across the gap without losing work.

## One source of truth

Decide, explicitly and early, that the `.tex` files are canonical and everything else is a derived copy for review. The moment two "current versions" exist in two formats, someone's edits get lost, and reconciling a Word file against a LaTeX file by eye is miserable work. Under this agreement your job is typesetting and integration; your coauthor's job is content and comments, delivered in whatever tool they prefer.

## Choose the export by the kind of feedback

For reading and high-level comments, send the compiled PDF. Every Word user can open a PDF, and the annotation tools in any PDF reader cover margin notes and highlights. Applying that feedback by hand keeps you in full control of the source.

When the coauthor needs to propose sentence-level rewrites with tracked changes, export a DOCX. Pandoc converts LaTeX to Word well enough for review purposes, and Oleafly has DOCX export built in. Expect the conversion to be approximate: equations, cross-references, and figure placement degrade, and you should say so up front so nobody reports layout problems in a throwaway copy.

## The merge session

Feedback in a `.docx` must come back into the `.tex` by hand. Treat this as a scheduled task rather than an ongoing trickle: collect the coauthor's tracked changes, open the Word file and the LaTeX source side by side, and apply accepted edits one by one, committing to Git as you go so each round of feedback is one commit. One rule keeps this workable: each review round starts from a fresh export of the current source. Never let the same Word file live across multiple rounds, because it silently forks the paper.

## When the draft starts in Word

Sometimes the flow reverses: the coauthor writes the first draft in Word and you take over the typesetting. Convert it once, early. Oleafly imports `.docx` into a LaTeX project, and pandoc does the same on the command line. From that point the `.tex` is canonical and the routine above applies. For the version-control backbone that makes all of this recoverable, see [Put the paper on GitHub](/learn/sync-with-github/).
