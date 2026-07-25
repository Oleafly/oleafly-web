---
title: "Web pages, videos, datasets"
description: "misc/online entries and access dates for fragile URLs."
category: "cite-your-sources"
order: 7
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Web pages, videos, datasets

BibTeX was designed in the 1980s for journals, books, and conference proceedings, so it has no native idea of a web page, a YouTube video, or a dataset on Zenodo. You still need to cite these things constantly, and the standard workaround is the `@misc` entry type, which accepts almost any combination of fields and lets the style print them sensibly.

## The @misc pattern

```bibtex
@misc{oleafly2026,
 author = {{Oleafly Contributors}},
 title = {Oleafly},
 year = {2026},
 howpublished = {\url{https://oleafly.com}},
 note = {Accessed: 2026-07-24}
}
```

Three details in this entry are worth understanding. The double braces around `{{Oleafly Contributors}}` tell BibTeX to treat the whole string as one literal name; without them it would parse "Contributors" as a surname and abbreviate the rest to "O. Contributors". The `howpublished` field is the traditional home for a URL in classic BibTeX, and wrapping the address in `\url{...}` makes it typeset in a monospaced font and break cleanly across lines (load the `url` or `hyperref` package for this). Finally, the `note` field carries the access date, which matters because web content changes and disappears; the date tells readers which version of the page you actually saw.

## The biblatex alternative: @online

If your document uses biblatex, there is a purpose-built type. An `@online` entry takes proper `url` and `urldate` fields, so the same source becomes `url = {https://oleafly.com}` and `urldate = {2026-07-24}`, and the style formats the access date consistently for you. Prefer `@online` when the bibliography style supports it, and fall back to `@misc` when you must stay compatible with a classic `.bst` file. The differences between the two systems are laid out in [Classic BibTeX or biblatex](/learn/bibtex-vs-biblatex/).

## Datasets and software

Datasets and code releases deserve better than a bare URL when better exists. Repositories like Zenodo and Figshare mint DOIs precisely so the citation can outlive any particular hosting arrangement, so put the DOI in a `doi` field, or in `howpublished` as `\url{https://doi.org/10.5281/...}` for classic styles. Include a `version` note when the artifact is versioned, because "the dataset" a reader downloads in five years may not be the one you analyzed. Many projects also publish a preferred citation, often in a `CITATION.cff` file in the repository, and using it is both polite and more accurate than improvising.

## Videos and other odd sources

For a video, put the channel or creator in `author`, the video title in `title`, the platform and URL in `howpublished`, and the upload year in `year`, with your access date in `note`. The general rule for anything unusual is the same: capture who made it, what it is called, where a reader can find it, and when you looked, and `@misc` will carry all of that safely through any style.
