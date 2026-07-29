---
title: "Overfull horizontal box"
description: "Lines that poke into the margin and when to care."
category: "log-literacy"
order: 3
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Overfull horizontal box

## The symptom

The log reports something like `Overfull \hbox (14.2pt too wide) in paragraph at lines 87--92`, and in the PDF one line of that paragraph sticks out into the right margin. The document still compiles, because this is a warning rather than an error, but the protruding line is visible in print and reviewers do notice. In draft mode (`\documentclass[draft]{...}`) LaTeX marks each offender with a black rectangle, which makes them easy to spot.

## Why it happens

TeX breaks paragraphs into lines by weighing every possible break point and choosing the arrangement with the least total "badness", where badness measures how much the spaces on a line had to stretch or shrink. Sometimes no acceptable arrangement exists: a long URL contains no break points at all, inline math is treated as nearly unbreakable, or a long word has no hyphenation entry. Rather than stretch spaces beyond its tolerance and produce a visibly gappy line, TeX lets the line run long and tells you about it. The overfull box is TeX refusing to make the paragraph ugly in a different way.

## Fixes, from best to bluntest

The best fix is editorial. Rewording the sentence, moving the long word away from the line end, or splitting one sentence into two usually removes the problem without any code, and often improves the prose anyway.

For URLs, wrap the address in `\url{...}` from the `url` or `hyperref` package so it can break at slashes and dots, and load the `xurl` package when you need breaks at almost any character. For a wide inline formula, either display it, or use a breakable environment such as `multline` from `amsmath` when the equation itself is too long for the line.

Two preamble-level improvements help globally. Loading `microtype` lets characters protrude fractionally and expands fonts slightly, which resolves many marginal cases without you noticing. Setting the document language correctly through `babel` or `polyglossia` gives TeX the right hyphenation patterns, since a word it cannot hyphenate is a word it cannot break.

## When to care

The number in the warning is the overshoot. Anything under roughly 2pt is invisible to readers and safe to ignore in a draft. Tens of points are worth fixing before anyone else sees the PDF. The sensible workflow is to ignore overfull boxes while writing, then sweep the log once before submission and fix the handful that remain, largest first. Resist `\sloppy` and other global tolerance hacks: they trade a few protruding lines for loose, uneven spacing across the whole document.
