---
title: "Get a working TeX on any OS"
description: "Oleafly with a bundled engine, or a full TeX Live / MiKTeX install."
category: "local-studio"
order: 2
level: "beginner"
tags: ["setup"]
featured: false
updated: 2026-07-24
---

# Get a working TeX on any OS

## Path A: zero TeX admin

Download [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) for Mac, Windows, or Linux. The app bundles a modern engine (Tectonic) and fetches packages as needed.

## Path B: full TeX distribution

- **Mac:** MacTeX or BasicTeX + TeX Live Utility
- **Windows:** MiKTeX (install-on-the-fly) or TeX Live
- **Linux:** `texlive-full` or a smaller scheme + `tlmgr`

## Verify

```bash
pdflatex --version
# or
xelatex --version
```

Then compile [your first document](/learn/first-document/).
