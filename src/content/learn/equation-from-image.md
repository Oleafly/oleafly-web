---
title: "Whiteboard photo to source"
description: "Crop, OCR or multimodal, compile, fix indices by eye."
category: "human-plus-model"
order: 2
level: "beginner"
tags: ["ai", "math"]
featured: false
updated: 2026-07-25
---

# Whiteboard photo to source

A derivation on a whiteboard, a scanned page of lecture notes, an equation in a PDF you cannot copy from: retyping mathematics into LaTeX by hand is slow and error-prone. Modern tools can do most of it from a photo. The conversion is genuinely good now, but treat the output as a draft, not a finished transcription. The workflow below is built around that.

## Start with a better photo

Image quality determines the result more than tool choice does. Shoot straight on rather than at an angle, since skewed baselines make sub- and superscripts ambiguous. Get even lighting without glare on the board, and crop tightly to the single equation you want, because surrounding diagrams and stray marks become hallucinated symbols. If a photo has three equations, crop it into three images and convert them one at a time; per-equation results are consistently better than page-at-once results.

## Convert with the tool you have

Three kinds of tool do this job. Dedicated equation OCR services are accurate on clean input. General multimodal models accept an image in chat and return LaTeX when asked, and you can reply "the second subscript should be j, not i" to get a corrected version. Oleafly has image-to-LaTeX built in, running through your own API key with whichever provider you configured, so a snippet can go from screenshot to source without leaving the editor. See [AI setup](/docs/ai-setup/) for configuration. On clear input the three approaches converge, which is why the photo advice above matters more than the tool decision.

## Compile immediately

Paste the output into your document inside an `equation` environment and compile before doing anything else. Conversion errors split into two kinds, and the compiler catches the first kind for you: unbalanced braces, mismatched `\left` and `\right` delimiters, and unknown commands all fail loudly, and the fixes are mechanical. [Missing dollar sign](/learn/missing-dollar/) covers the most common of these failures.

## Then proofread the mathematics

The second kind of error compiles perfectly and is wrong. Read the rendered equation against the original symbol by symbol, with particular attention to the places conversion reliably slips: subscripts and superscripts, where small glyphs blur together and `x_i` becomes `x_j`; primes and hats, which vanish or migrate; the lookalike pairs such as `1`, `l`, and `I` or `\rho` and `p`; and bounds on sums and integrals. These are exactly the details that change the meaning of a formula while leaving it typographically plausible. Two minutes of comparison per equation is the whole cost, and it is far cheaper than a reviewer finding the wrong index in print.
