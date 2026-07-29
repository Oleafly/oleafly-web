---
title: "Give the model your symbol table"
description: "Macros and a short notation list so variables stay stable."
category: "human-plus-model"
order: 4
level: "intermediate"
tags: ["ai"]
featured: false
updated: 2026-07-25
---

# Give the model your symbol table

Ask a model to draft or revise mathematical text and the prose usually comes back fine while the notation drifts. Your vector `\vect{x}` returns as `\mathbf{x}` in one paragraph and `\vec{x}` in another. The expectation you write as `\E[X]` comes back as `\mathbb{E}(X)`. Each variant compiles, so nothing errors. The inconsistency only shows up when a reader notices the same object written three different ways. The model has seen every notation convention in existence and, without instructions, samples from all of them. Hand it yours explicitly.

## Macros make notation enforceable

The groundwork is independent of AI and worth doing anyway: route every recurring symbol through a macro, so the source says `\vect{x}` rather than raw `\boldsymbol{x}`. That gives each concept one name, lets you restyle the whole paper by editing one definition, and gives the model a small vocabulary to stick to instead of inventing variants. Defining macros is covered in [Custom commands](/learn/custom-commands/).

## What to paste into the prompt

Alongside your actual request, include a compact notation block: the macro definitions plus one comment per line saying what each is for.

```latex
% vectors: bold italic \vect{x}
% matrices: bold upright \mat{A}
% expectation: \E{X}
```

Then state the constraint directly: "Use only these macros for these concepts. Do not introduce new notation for anything listed, and if you need a symbol that is not listed, say so instead of inventing one." Models follow concrete, checkable instructions far better than a vague "match my style". For a full paper, keep the block as a short notation comment near the preamble so it stays current and ready to paste.

## Verify mechanically

The macro layer makes checking cheap. If every vector must be `\vect{...}`, any raw `\mathbf{` or `\vec{` in model output is a violation you can find with a text search instead of rereading the math. Run that search over anything you paste in, fix the stragglers, and the notation stays uniform no matter how many model-assisted edits land in the paper.

## Inside Oleafly

The [assistant in Oleafly](/learn/oleafly-ai/) reads project files, including the preamble where your macros live, so it usually picks up defined commands without being told. The explicit instruction still helps: seeing a macro exists is weaker than being told it is mandatory. Add one line to your request ("use the notation macros from the preamble") and review the red/green diff before changes land. That keeps drift out of the source.
