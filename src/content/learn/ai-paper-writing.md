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

Language models are part of how many papers get written now. The useful question is where to draw the line. A model can help you say what you know more clearly. It cannot be trusted to know things for you. Help with wording saves time at little risk. Letting the model invent facts or sources puts fabricated material into the scholarly record under your name.

## Where models genuinely help

Structural work is the best use. Given your abstract and section list, a model can suggest different orderings, notice that your contributions are buried in section 5, or guess what a skeptical reviewer will ask. You can judge every suggestion against what you already know about the work. Compression works the same way: hand over your own rough notes on ten related papers and ask for a tighter paragraph. The facts stay yours; the model does the sentence carpentry. Clarity edits on prose you wrote are the everyday case. Shortening, untangling, and cutting jargon on your own paragraphs is work models do well, and you still decide whether the meaning survived.

## Where models fail dangerously

Never let a model supply citations. When asked for references, models produce plausible-looking entries with real venues, real-sounding authors, and invented titles or DOIs. They generate what citations look like rather than retrieve what exists. Every reference must be one you located yourself and checked against the actual paper. [Build a .bib that lasts](/learn/create-bibliography/) covers keeping that database sound. Be equally wary of technical content. A model asked to "fill in the derivation" will produce confident steps that may be subtly wrong, and an error you cannot catch is one you cannot afford to publish. Never submit prose you have not read closely either. Model text can smuggle in overclaims and small factual slips, and once submitted, every sentence is yours.

## Guardrails that make this safe

Keep the manuscript under Git so every model-assisted change is a visible diff you can review and revert. [Put the paper on GitHub](/learn/sync-with-github/) shows the setup. Oleafly's assistant adds its own approval diffs and pre-edit checkpoints, as described in [Assistant inside Oleafly](/learn/oleafly-ai/). Check your venue's policy too. Many journals and conferences now require disclosure of AI assistance, and nearly all hold authors fully responsible for the content regardless of tooling. Rule of thumb: use the model only where you can verify the output faster than you could have written it yourself. Everything else, write yourself.
