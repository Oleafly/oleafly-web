---
title: "Abstracts that earn the click"
description: "A four-sentence formula for abstracts, plus the LaTeX and the mistakes to avoid."
category: "paper-anatomy"
order: 2
level: "beginner"
tags: ["writing", "abstract"]
featured: false
updated: 2026-07-25
---

# Abstracts that earn the click

Your abstract is the only part of the paper most people will ever read. Reviewers use it to decide how grumpy to be, search engines use it to rank you, and busy researchers use it to decide whether the PDF is worth opening. Its job is simple and brutal: sell the whole paper in 150-250 words.

## The four-sentence formula

You can draft a solid abstract by answering four questions in order. Each answer is one or two sentences.

| Sentence | Question it answers |
|---|---|
| Context | What problem area is this, and why does it matter? |
| Gap | What is missing or broken in current approaches? |
| Contribution | What did you build, prove, or discover? |
| Result | What is the headline number or finding? |

For example: "Training large models is expensive. Existing compression methods trade too much accuracy for speed. We introduce a pruning technique that preserves accuracy by targeting redundant attention heads. On three benchmarks it cuts inference cost by 40% with under 0.5% accuracy loss." Four sentences, whole paper.

Expand each beat as needed, but keep the order. Readers expect the funnel: broad, narrow, ours, proof.

## Abstract vs introduction

People confuse these constantly. The abstract is the movie trailer: it spoils the ending on purpose, because researchers want to know the result before investing an hour. The introduction is act one: it builds the argument slowly, cites the literature, and earns each claim. Never write an abstract that teases ("we explore whether...") when you could state the result. See [introductions and related work](/learn/introduction-and-related-work/) for act one.

## The LaTeX

The `abstract` environment goes after `\maketitle` in most article classes:

```latex
\maketitle
\begin{abstract}
Training large models is expensive. Existing compression
methods trade too much accuracy for speed. We introduce...
\end{abstract}
```

Some journal classes want the abstract before `\maketitle` or use their own command, so check the template. More on the surrounding front matter in [the title page lesson](/learn/title-page/).

## Common mistakes

- **Citations in the abstract.** Abstracts get displayed alone, in databases and indexing services, where `[12]` points at nothing. Name the prior work in words if you must, and save `\cite` for the body.
- **Vague claims.** "Significantly improves performance" tells a reader nothing. "Cuts inference cost by 40%" earns the click. Put your best concrete number in.
- **Writing it first.** The abstract summarizes a paper that exists. Draft it early if it helps you think, but rewrite it last, when you know what you actually showed.
- **Blowing the word budget.** Venues enforce limits, often 150-250 words. Every sentence that is not context, gap, contribution, or result is a candidate for deletion.

## A quick self-test

Cover everything except your abstract and hand it to a colleague. If they can tell you what you did and why it matters, it works. If they say "sounds interesting, what did you find?", your result sentence is missing or vague. Fix that one sentence and the abstract usually falls into place.
