---
title: "Shorter wait for the PDF"
description: "Draft figures, includeonly, TikZ externalize, local CPU."
category: "long-form"
order: 5
level: "intermediate"
tags: ["thesis", "compile"]
featured: false
updated: 2026-07-25
---

# Shorter wait for the PDF

A thesis that takes ninety seconds to compile changes how you write: you stop recompiling after small edits, errors pile up unseen, and the feedback loop that makes LaTeX pleasant disappears. Before optimizing, know where the time goes. In most long documents it is not the number of packages but a handful of heavy assets, above all large images and complex TikZ pictures, that dominate the build. The techniques below attack those directly.

## Skip the figures while drafting

The `draft` option makes LaTeX replace every image with an empty box of the same size, which preserves the layout and page breaks while skipping the image processing:

```latex
\documentclass[draft]{article}
```

Class-level `draft` also marks overfull lines with black bars, which some people find useful and others find noisy. To limit the effect to images, pass the option to the package instead, as `\usepackage[draft]{graphicx}`, or to a single culprit with `\includegraphics[draft]{...}`. Remember to remove it before sharing a PDF, since a draft build looks broken to anyone who does not know the option. Independently of draft mode, downscale huge photographs once, as described in [drop in a figure](/learn/insert-images/), because a 40-megabyte image costs you on every compile forever.

## Compile only the current chapter

If your chapters live in separate files pulled in with `\include`, the `\includeonly` command restricts a build to the files you name:

```latex
\includeonly{chapters/04-results}
```

Put it in the preamble and LaTeX compiles just that chapter while reading the `.aux` files of the others, so page numbers and cross-references from the rest of the document stay approximately right. This is the single biggest saving for a thesis, routinely turning a minute-long build into seconds. It only works with `\include`, not `\input`, which is one of the reasons to structure long documents as described in [splitting a document into files](/learn/split-chapter-files/).

## Cache expensive pictures

TikZ pictures are redrawn from scratch on every compile. The `external` library, loaded with `\usetikzlibrary{external}` plus `\tikzexternalize`, compiles each picture to its own PDF once and reuses it until the code changes. The setup has sharp edges, and the manual alternative of moving big pictures into standalone files works just as well; both are covered in [standalone TikZ to PDF or PNG](/learn/tikz-export/).

## Fewer passes, faster iron

Bibliography and cross-reference resolution take multiple passes, but while drafting prose you rarely need them, so a single quick pass is enough and the full sequence can wait until you check references. Hardware and locality matter too: a local engine compiles on your own CPU with no upload or queue, which is how Oleafly runs builds.

Apply `\includeonly` and draft figures together and even a large thesis usually comes back under a few seconds, which is the point at which you start recompiling after every paragraph again.
