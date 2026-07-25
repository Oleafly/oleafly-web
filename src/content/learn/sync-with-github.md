---
title: "Put the paper on GitHub"
description: "Init, ignore aux files, private repo, habits that keep coauthor merges sane."
category: "local-studio"
order: 3
level: "intermediate"
tags: ["git", "github"]
featured: false
updated: 2026-07-24
---

# Put the paper on GitHub

## Minimal Git workflow for a paper

```bash
git init
# add a .gitignore for *.aux *.log *.out *.toc *.synctex.gz
git add main.tex refs.bib figures/
git commit -m "Initial manuscript"
gh repo create my-paper --private --source=. --push
```

## Habits that help

- One logical change per commit.
- Never force-push shared main if coauthors pull.
- Store large binary datasets outside the paper repo when possible.

In Oleafly, successful compiles can become Git commits automatically. See [Git history](/docs/git-history/).
