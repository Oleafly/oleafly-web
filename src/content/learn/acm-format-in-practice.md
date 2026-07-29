---
title: "ACM format in practice"
description: "The acmart class: sigconf, metadata, anonymous review, and first-compile surprises."
category: "venue-formats"
order: 3
level: "intermediate"
tags: ["venues", "acm"]
featured: false
updated: 2026-07-25
---

# ACM format in practice

ACM consolidated all its templates into one class, `acmart`, in 2017. One class, many faces: the format option decides whether you get a two-column conference paper or a single-column journal article.

## Pick your format option

```latex
% Conference proceedings (SIGCHI, SIGPLAN, most SIGs)
\documentclass[sigconf]{acmart}

% Small journal format (TOCE, TAP, ...)
\documentclass[acmsmall]{acmart}

% Large journal format (TOG, ...)
\documentclass[acmlarge]{acmart}
```

`sigconf` is what you want for almost any ACM conference. The venue's CFP names the exact option; trust it over habit. If you are still deciding between venue families, [ACM, IEEE, and friends](/learn/acm-ieee-and-friends/) compares them.

## The metadata is mandatory

Unlike IEEEtran, acmart refuses to look right (and the publisher refuses to accept it) without its metadata blocks:

```latex
\begin{CCSXML}
... % generated at dl.acm.org/ccs
\end{CCSXML}
\ccsdesc[500]{Software and its engineering~Compilers}

\keywords{compilers, optimization, benchmarks}
```

The CCS concepts come from a picker on the ACM website that generates both the XML and the `\ccsdesc` lines. Paste them in verbatim. Keywords go in `\keywords`, not in the abstract. The ACM reference format block (that gray citation box on page one) is generated automatically from `\acmConference`, `\acmYear`, and friends, which the publisher fills or verifies at camera-ready time.

## Submitting double-blind

Most ACM conferences review anonymously. One option handles it:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

`anonymous` hides authors and affiliations, `review` adds line numbers for reviewers. Flip both off for camera-ready. The class handles the mechanics, but anonymization is bigger than a flag. See [double-blind done right](/learn/anonymization-double-blind/).

## Citations: numbered or author-year

acmart uses natbib underneath and supports both styles:

| Option | Result |
|---|---|
| default | Numbered: [3] |
| `natbib=true` + `\citestyle{acmauthoryear}` | Author-year: (Lovelace, 1843) |

Some SIGs mandate author-year (CHI historically), others numbered. Again: the CFP decides.

## First-compile surprises

acmart is package-hungry. Expect these on a fresh setup:

- **Libertine fonts.** The class loads Linux Libertine and Biolinum plus `newtxmath`. On a minimal TeX installation these arrive as downloads the first time you compile. Oleafly's bundled Tectonic engine fetches them automatically on first use, so the initial compile takes longer than the second. That is normal, not a hang.
- **Strict float rules.** acmart blocks some packages (like `titlesec`) outright and will error if you load them.
- **`\authorsaddresses{}`** silences the "authors' addresses" footer nag in drafts.

If a package genuinely fails to resolve, the fix is the usual one: [install the missing package](/learn/install-missing-package/).

## Where to get it

Download the official template from acm.org's author pages or your conference's site, and keep `acmart.cls` up to date. ACM revs it several times a year, and camera-ready checks run against the latest version.
