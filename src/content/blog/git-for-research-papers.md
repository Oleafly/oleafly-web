---
title: "Git for research papers: what actually works with coauthors"
description: "Ignore rules, chapter ownership, commit messages, private remotes, and how a research workspace with real Git, forks, and AI checkpoints keeps papers recoverable without making Git a second job."
date: 2026-07-10
tags: [git, collaboration, workflow, local-first]
---

Researchers already use Git for code. Papers look a lot like code: plain text,
includes, build junk. Putting a manuscript in a repo is less strange than it
sounds once you have tried it once.

## Ignore the junk

A sensible `.gitignore` for LaTeX:

```text
*.aux
*.log
*.out
*.toc
*.synctex.gz
*.bbl
*.blg
*.fdb_latexmk
*.fls
```

Commit `.tex`, `.bib`, figures you cannot regenerate, and the class file if
the university requires it. Skip committing every PDF unless the journal wants
a binary in the archive.

If your editor starts Git for you, check that build caches and PDF
intermediates are ignored. A stream of empty "noise" commits from aux files
makes the log worthless. You stop reading it, and then history cannot help
you when something breaks.

## Own files, not lines

Two people in the same paragraph is merge pain. Prefer chapter or section
ownership. Use pull requests when the group is large enough that review
actually helps.

Live multi-user typing in one buffer is a different tool (browser LaTeX
editors). Git collaboration is slower and more explicit: branch, push, review.
That works well when you need a paper trail. When three people must type the
abstract together this afternoon, pick something else.

## Commit messages future you can read

"Fix stuff" is useless in three months. "Rewrite related work on transformers"
is enough. Two layers help:

1. Milestones you name: section drafts, submission, camera-ready.
2. Safety checkpoints: frequent snapshots so a bad afternoon is reversible.

If your editor checkpoints after a successful compile or after you stop typing,
treat those as a floor, not the only history. Write a real message when a
section lands or a draft goes to coauthors.

## Private remotes

Unpublished work belongs in private GitHub or GitLab projects. Graduation and
lab moves are when people lose access to random cloud editor accounts. A remote
you control is the backup.

Push when you have network. Do not wait until the night before a deadline to
discover the remote was never connected.

## Local compile, remote backup

Most weeks the loop looks like this: edit and compile offline, push when you
have network. You do not need a live browser session just to type.

What you want from tooling:

- every project already a real Git repo (no forgotten `git init`)
- automatic checkpoints after successful compiles and idle edits
- stage, side-by-side diff, discard, and one-click restore in the same app as
  the editor and PDF
- GitHub optional for remotes; history already works on disk
- fork a whole project with full history for a parallel experiment (risky
  methods rewrite, alternate resume) while the submission copy stays put
- AI edits, if you enable them, checkpoint first and land only through
  approval diffs

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) is built that
way: plain folders, real `.git`, auto-checkpoints that name the files that
moved, Source Control panel with editable working-tree diffs, restore after
confirm, optional GitHub publish/push/pull with ahead/behind, project fork with
lineage in the library. Terminal `git log` matches the app because it is the
same repository. The AI checkpoint, when you use one, lands in that same
history you restore from.

You can approximate pieces of this with a careful habit and a separate Git
client. The difference is whether history is something you set up and remember,
or something the research workspace assumes on day one next to SyncTeX and
compile.

## What Git does not fix

Git will not replace comments from a PI who only opens PDFs, and it will not
decide whose abstract is correct. Binary figures still merge badly, so keep
them small, prefer plots you can regenerate, and agree on ownership early.

For coauthors who refuse Git, export PDF or DOCX for review and keep `.tex` as
source of truth. See
[coauthors who only speak Word](/learn/collaborator-uses-word/).

## A minimal practice

1. One repo per paper or thesis, not one mega-repo for your whole career.
2. `.gitignore` for build junk on day one.
3. Chapter ownership when more than one person edits.
4. Milestone commits with readable messages.
5. Private remote connected before the work matters.
6. Restore tested once on purpose, so the first emergency is not the first
   restore.

If you stick to that list, Git for papers mostly disappears into the
background. You want boring reliability before a deadline, not a second hobby.
