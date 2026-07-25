---
title: "Coauthor without a live cursor"
description: "Patches, shared folders plus Git, and owning separate chapter files."
category: "local-studio"
order: 4
level: "intermediate"
tags: ["workflow", "git"]
featured: false
updated: 2026-07-24
---

# Coauthor without a live cursor

## Patterns that work offline

1. **Git + email patches:** `git format-patch` / `git am`.
2. **Shared folder + Git:** Dropbox/Syncthing for the remote; Git for merges.
3. **Chapter ownership:** each coauthor owns files under `chapters/`; one person integrates.

## Avoid

Simultaneous edits to the same paragraph without merging. LaTeX merge conflicts are readable but tedious, communicate ownership of sections.
