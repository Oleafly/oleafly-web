---
title: "Where floats actually land"
description: "htbp, why forced here often fails, moving the environment closer to the text."
category: "floats-and-ink"
order: 3
level: "intermediate"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Where floats actually land

Figures and tables in LaTeX are floats, which means the position of the code in your source is a suggestion, not an instruction. LaTeX moves floats around to keep pages evenly filled, to avoid half-empty pages, and to respect typographic limits like how much of a page may be pictures. This is the single biggest culture shock coming from a word processor, and understanding the placement system saves hours of fighting it.

## What htbp means

Every float environment takes an optional argument listing where LaTeX is allowed to put it:

```latex
\begin{figure}[htbp] % here, top, bottom, page of floats
```

Each letter is a permission. `h` allows the float "here", at the point in the text where the code appears. `t` allows the top of a page, `b` allows the bottom of a page, and `p` allows a dedicated float page containing only figures and tables. LaTeX evaluates them roughly in that order for each page it builds, taking the first placement that satisfies its internal rules about spacing and page balance. The letters grant options rather than express ranked wishes, so listing all four gives LaTeX the most room to place the float somewhere close and sensible. If you omit the argument entirely, the default is `[tbp]`, notably without `h`, which is why a bare figure so often jumps to the top of the next page.

## Why forcing "here" backfires

Writing `[h]` alone seems like the obvious fix, but it usually makes things worse. If the float does not fit in the remaining space on the current page, and `h` is the only permission you granted, LaTeX cannot place it on this page or legally place it on any other. So it carries the float forward, page after page, waiting for a spot that satisfies `h`. Floats must also stay in order, so every later figure queues up behind the stuck one, and the whole pile frequently dumps out at the end of the chapter. Adding an exclamation mark, as in `[h!]`, tells LaTeX to relax some of its spacing rules, but it cannot create room that does not exist.

## The habits that actually work

First, keep `[htbp]` as your default and let go of pixel-perfect placement while drafting, because every paragraph you add or delete reshuffles the pages anyway. Second, place the figure environment in the source next to the paragraph that first references it, since LaTeX starts searching for a home from that point forward and a float can move later but never earlier than its code. Third, write your prose to reference figures by number, as in "Figure 3 shows the pipeline", never "the figure below", so the text stays correct wherever the float lands.

If a float still ends up somewhere unacceptable, there are stronger tools, including float barriers and the `[H]` placement, covered in [the figure that flees the section](/learn/figure-wrong-position/). Reach for them at the end of writing, once the text is stable, not during drafting.
