---
title: "Open access, paywalls, and DOIs"
description: "What a DOI is, why papers cost 40 dollars, and the free paths around paywalls."
category: "research-101"
order: 6
level: "beginner"
tags: ["research", "basics"]
featured: false
updated: 2026-07-25
---

# Open access, paywalls, and DOIs

Click a paper link, hit a page asking for 39.95 dollars, close tab, sigh. Every researcher knows this loop. This lesson explains the system behind it, and the free doors through it.

## DOI: a paper's permanent address

A **DOI** (Digital Object Identifier) is a permanent ID assigned to a publication, like `10.1145/3297858.3304013`. Prefix it with `https://doi.org/` and you get a link that is guaranteed to keep resolving to the paper even if the publisher redesigns its website. Web links rot; DOIs do not.

DOIs matter for citing. A DOI uniquely identifies one paper, so tools can look up the full bibliographic record from the DOI alone. Paste a DOI into Oleafly and it fetches a ready-made BibTeX entry, no hand-typing of author lists. The mechanics live in [add citations](/learn/add-citations/) and [create a bibliography](/learn/create-bibliography/). When a paper lists a DOI, use it. It is the most reliable handle the paper will ever have.

## Why paywalls exist

Traditionally, publishers charged university libraries for journal subscriptions, and readers without a subscription paid per article. The odd part: the authors are not paid for the paper, the reviewers are not paid for reviewing, and yet reading costs money. This arrangement is why the **open access** movement exists.

## The open access flavors

| Term | Meaning | Who pays |
| --- | --- | --- |
| Paywalled (traditional) | Readers or their libraries pay | Reader side |
| Gold open access | Final version free for everyone on the publisher's site | Usually the authors, via an APC |
| Green open access | Author self-archives a free copy (preprint server or personal site) while the publisher version stays paywalled | Nobody |
| Diamond open access | Free to read and free to publish | The venue's sponsors |

**APC** stands for article processing charge, the fee authors (really, their grants or universities) pay for gold open access. These run from a few hundred to several thousand dollars per paper. Legitimate venues waive APCs for authors who cannot pay; venues that exist mainly to collect APCs with fake review are called predatory journals. Beware of any "journal" that emails you begging for submissions.

## Preprints: the free path that already won

The easiest open access in practice is green: authors post their manuscript on [arXiv or a sibling server](/learn/what-is-arxiv/), free for everyone, and the paywalled version becomes a formality. Most publishers explicitly allow this. So when you hit a paywall:

1. Search the exact title; an arXiv or author-hosted PDF usually surfaces.
2. Check the authors' web pages.
3. Use your university library's access.
4. Email the corresponding author; they are almost always delighted to send a PDF.

## Why you should care as an author

Papers that are free to read get read, and cited, more. When you publish your own work, post a preprint if your venue allows it, include the DOI everywhere you list the paper, and keep your bibliography DOI-clean so others can find what you cited. Where these steps land in the overall process is mapped in the [first paper roadmap](/learn/first-paper-roadmap/), and the publishers running all this machinery are decoded in [ACM, IEEE, Springer, Elsevier](/learn/acm-ieee-and-friends/).
