---
title: "Put the paper on GitHub"
description: "Init, ignore aux files, private repo, habits that keep coauthor merges sane."
category: "local-studio"
order: 3
level: "intermediate"
tags: ["git", "github"]
featured: false
updated: 2026-07-25
---

# Put the paper on GitHub

A LaTeX manuscript is plain text, which makes it an ideal fit for Git. Every draft becomes a commit you can return to, every change is visible as a line-level diff, and GitHub gives you an offsite copy plus a way for coauthors to pull the current state. None of this requires advanced Git. A paper needs perhaps five commands, used consistently.

## The initial setup

```bash
git init
# add a .gitignore for *.aux *.log *.out *.toc *.synctex.gz
git add main.tex refs.bib figures/
git commit -m "Initial manuscript"
gh repo create my-paper --private --source=. --push
```

Run this once in the project folder. The `.gitignore` step matters more than it looks. Every compile regenerates the `.aux`, `.log`, `.out`, `.toc`, and `.synctex.gz` files, and committing them buries your real changes under machine noise and creates pointless merge conflicts between coauthors. Track only what you author: the `.tex` sources, the `.bib` database, figures, and any class or style files the venue gave you. The PDF is a build product too. Most teams leave it out and rebuild locally, though attaching one to a tagged release is a reasonable way to freeze a submitted version. Keep the repository private until the work is public. An unpublished manuscript is not something to index.

## Habits that keep coauthors sane

Make each commit one logical change, such as "revise section 3 intro" or "add ablation table". The history then reads as a story of the paper, and a bad edit can be reverted without collateral damage. Pull before you start a writing session and push when you stop. Merge conflicts grow with the time branches spend apart. Never force-push a shared branch once coauthors have pulled it: that rewrites history under their feet. Keep large binary artifacts (datasets, videos) out of the paper repository. Link to an archive or use a separate data repo. Git stores every version of every binary forever.

One habit specific to LaTeX: writing one sentence per source line makes diffs dramatically more readable, because a one-word edit shows as a one-line change instead of a reflowed paragraph.

## How Oleafly fits in

Every Oleafly project is an ordinary folder on disk, so these commands work on it unchanged. The app can also create a Git commit automatically after each successful compile, which gives you a fine-grained safety net between your deliberate commits. See [Git history](/docs/git-history/). For collaboration patterns built on top of this, including patch exchange and chapter ownership, see [Coauthor without a live cursor](/learn/offline-collaboration/).
