---
title: "Git for research papers: what actually works with coauthors"
description: "Branching, who owns which chapter, what to ignore, and why PDF binaries should not dominate the repo."
date: 2026-07-10
tags: [git, collaboration, workflow]
---

Researchers already use Git for code. Papers are code-shaped: plain text,
includes, and build artifacts. Treating a manuscript as a repo is less exotic
than it sounds.

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
the university requires it. Do not commit every PDF build unless the journal
requires a binary in the archive.

## Own files, not lines

Two people editing the same paragraph guarantees merge pain. Prefer chapter
or section ownership. Merge through pull requests when the group is large
enough to need review.

## Commit messages that future you can read

"fix stuff" is useless three months later. "Rewrite related work on
transformers" is enough. If your editor can commit on successful compile,
use that as a lower bound of history, not the only kind of commit.

## Private remotes

Unpublished work belongs in private GitHub/GitLab projects. Graduation and
lab moves are when people lose access to random cloud editor accounts; a
remote you control is the backup.

## Local compile, remote backup

The comfortable loop is: edit and compile offline, push when you have
network. That is the opposite of a browser IDE that needs a session to type.
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) and similar
local tools fit that loop because the project is already a folder.
