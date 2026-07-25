---
title: "A paper, top to bottom"
description: "A walking tour of every part of a research paper and the one job each part does."
category: "paper-anatomy"
order: 1
level: "beginner"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# A paper, top to bottom

Research papers look intimidating until you realize they are assembled from the same dozen parts, in roughly the same order, every single time. Once you know each part's job, you can read papers faster and write them without staring at a blank page. Here is the full tour.

## The front matter

| Part | Its one job |
|---|---|
| Title | Make the right reader stop scrolling. |
| Authors | Say who did the work and who to email. |
| Abstract | Sell the entire paper in 150-250 words. |
| Keywords | Help search engines and indexers file you correctly. |

The title and abstract do most of the recruiting. Ninety percent of your potential readers will see nothing else, which is why [the abstract gets its own lesson](/learn/write-an-abstract/) and the [title page has its own LaTeX mechanics](/learn/title-page/).

## The body

| Part | Its one job |
|---|---|
| Introduction | Explain why the problem matters and what you contribute. |
| Related work | Position your work among everything that came before. |
| Method | Describe what you did precisely enough to reproduce. |
| Experiments / results | Show evidence that the method works. |
| Discussion | Interpret the evidence honestly, including where it is weak. |
| Conclusion | Restate the takeaway and point at what comes next. |

The body is a single argument told in stages: here is a problem, here is our idea, here is proof it works, here is what it means. If a section is not advancing that argument, it is padding. The [introduction and related work](/learn/introduction-and-related-work/) and the [engine room sections](/learn/methods-results-discussion/) each get a deeper dive.

## The back matter

| Part | Its one job |
|---|---|
| Acknowledgments | Thank funders, helpers, and reviewers of drafts. |
| References | List every source you cited, formatted per venue rules. |
| Appendix | Hold proofs, extra tables, and details that would break the flow. |
| Supplementary material | Carry code, data, and videos that do not fit in a PDF. |

References are not decoration, they are the evidence trail your claims stand on. See [footnotes, references, and appendices](/learn/footnotes-references-appendix/) for who reads what, and [citations](/learn/add-citations/) for the LaTeX mechanics.

## The skeleton in LaTeX

Most of this maps directly onto commands you already know:

```latex
\title{A Catchy but Honest Title}
\author{First Author \and Second Author}
\maketitle
\begin{abstract}
One paragraph that sells everything below.
\end{abstract}
\section{Introduction}
```

Sectioning commands handle the numbering and the table of contents for you, as covered in [sections and structure](/learn/sections/).

## Where to go next

If you are brand new to papers as a genre, start with [what a research paper actually is](/learn/what-is-a-research-paper/). If you are about to write one, the rest of this track walks through each part in order, from [abstracts](/learn/write-an-abstract/) down to [how much math you actually need](/learn/how-much-math/). Read the part you are stuck on, write it, repeat.
