---
title: "When LaTeX beats Word (and when it does not)"
description: "Pick the tool for the document: equations, long papers, citations, vs short collaborative drafts."
category: "open-the-loop"
order: 2
level: "beginner"
tags: ["basics"]
featured: true
updated: 2026-07-24
---

# When LaTeX beats Word (and when it does not)

Neither tool is universally better. Pick based on the document, not the tribe.

## When LaTeX wins

- **Equations and cross-references:** labels update when sections move.
- **Long structured docs:** theses, books, multi-author papers.
- **Citation databases:** BibTeX/biblatex scale past a few dozen references.
- **Reproducible layout:** the same source yields the same PDF years later.
- **Version control:** plain text diffs cleanly in Git.

## When Word (or Google Docs) wins

- Heavy collaborative editing by non-technical coauthors who only leave track-changes comments.
- Short one-off letters where setup cost dominates.
- Publishers that only accept `.docx`.

## A hybrid that works

Keep the **source of truth in LaTeX**. For coauthors who refuse, export a PDF or DOCX draft for comments, then merge decisions back into `.tex`.

## Bottom line

Use LaTeX for anything you will cite, number, or revise for months. Use Word when the social cost of LaTeX is higher than the typesetting benefit.
