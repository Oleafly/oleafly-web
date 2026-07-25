---
title: "Stacked indices"
description: "Empty groups for tensor placement and matching field conventions."
category: "notation-depth"
order: 7
level: "advanced"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Stacked indices

Tensor notation in relativity and differential geometry distinguishes upper indices from lower ones, and the horizontal order of the indices carries meaning too: once indices are raised and lowered with a metric, the object with an upper index first is not the same as the one with a lower index first. LaTeX's default script placement ignores that distinction, so tensor-heavy documents rely on a small trick with empty groups.

```latex
T^{i}{}_{j}{}^{k}
R^{\mu}{}_{\nu\rho\sigma}
g_{\mu\nu}
```

## The empty group trick

Writing `T^i_j` puts the superscript and subscript in the same horizontal slot, stacked one above the other. To stagger them, insert `{}`, an empty group: `T^{i}{}_{j}` attaches `i` as a superscript to T, then attaches `j` as a subscript to the empty group that follows, so the subscript lands after the superscript instead of below it. Each `{}` opens a fresh script slot, and you can chain as many as the tensor needs, as in `T^{i}{}_{j}{}^{k}`.

The second line shows the payoff on a real object. In `R^{\mu}{}_{\nu\rho\sigma}` the mu occupies the first index position and the three lower indices follow it, which is the standard layout for the Riemann tensor; collapse the stagger and the index order becomes ambiguous. When every index sits on one level, as in the metric `g_{\mu\nu}`, no trick is needed and a single subscript group holds them all.

The same `{}` also solves a plain error. `T^i^k` stops the compile with "Double superscript", because one atom cannot take two superscripts; `T^{i}{}^{k}` gives the second superscript its own slot and compiles cleanly.

## Conventions and consistency

Whether indices are staggered or stacked is a field convention. General relativity staggers almost universally; other areas are content with stacked indices when no metric is moving indices around. Match your field's habits, and if you are submitting somewhere, match the journal's template before your own taste. The `tensor` package can automate placement with a `\tensor` command, but the manual empty groups are portable, need no package, and survive any submission system unchanged.

Consistency matters more than the choice itself. Decide once how each tensor's indices are arranged, and consider a preamble macro for the ones you type constantly, so a late change of convention is one edit rather than a hunt through the whole document. The staggered and stacked forms are easy to compare side by side in the [live playground](/live/).
