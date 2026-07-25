---
title: "Draft help that stays honest"
description: "Outlines and clarity yes; fake cites and unread prose no."
category: "human-plus-model"
order: 3
level: "intermediate"
tags: ["ai"]
featured: false
updated: 2026-07-25
---

# Draft help that stays honest

Language models are now part of how many papers get written, and the interesting question is not whether to use them but where the line sits. The workable principle is this: a model can help you say what you know more clearly, and it cannot be trusted to know things for you. Uses on the first side of that line save time at little risk; uses on the second side put fabricated material into the scholarly record under your name.

## Where models genuinely help

Structural work is the strongest case. Given your abstract and section list, a model can propose alternative orderings, point out that your contributions are buried in section 5, or suggest what a skeptical reviewer will ask, and you can evaluate every suggestion instantly against your own knowledge of the work. Compression is similar: handing over your own rough notes on ten related papers and asking for a tighter paragraph keeps the facts yours while the model does the sentence carpentry. Clarity edits on prose you wrote are the everyday case, since shortening, untangling, and de-jargoning your own paragraphs is exactly the transformation models do well, and you remain the authority on whether meaning survived.

## Where models fail dangerously

Never let a model supply citations. When asked for references, models produce plausible-looking entries with real venues, real-sounding authors, and invented titles or DOIs, because they generate what citations look like rather than retrieve what exists. Every reference must be one you located yourself and checked against the actual paper; [Build a .bib that lasts](/learn/create-bibliography/) covers keeping that database sound. Be equally wary of technical content: a model asked to "fill in the derivation" will produce confident steps that may be subtly wrong, and an error you cannot catch is an error you cannot afford to publish. And never submit prose you have not read closely. Model text can smuggle in overclaims and small factual slips, and once submitted, every sentence is yours.

## Guardrails that make this safe

Keep the manuscript under Git so every model-assisted change is a visible diff you can review and revert; [Put the paper on GitHub](/learn/sync-with-github/) shows the setup, and Oleafly's assistant adds its own approval diffs and pre-edit checkpoints, as described in [Assistant inside Oleafly](/learn/oleafly-ai/). Check your venue's policy as well, since many journals and conferences now require disclosure of AI assistance and nearly all hold authors fully responsible for the content regardless of tooling. The habit that sums it all up: use the model on material where you can verify the output faster than you could have produced it. Everything else, write yourself.
