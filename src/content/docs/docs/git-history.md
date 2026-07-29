---
title: "Git history & source control"
description: "Every project is a real Git repository: a VS Code-style source control panel, side-by-side diffs, one-click restore, and automatic safety checkpoints before AI edits."
---

Every Oleafly project is a genuine Git repository, not a proprietary "versions" feature. You get real diffs, real history, one-click restores, and portability: the same folder opens in any Git tool, and can push to [GitHub](/docs/github-sync/) when you want a remote.

## Zero-setup

The repository initializes itself the first time it is needed, on branch `main`, with build caches ignored automatically. You never run `git init`.

## Local Git without GitHub

Status, diffs, staging, commits, discard, and restore all work with **no GitHub account**. Only **Push** and **Pull** need a connected remote. Connect GitHub later from Settings → Integrations when you want backup or a second machine.

## The Source Control panel

The branch icon in the left rail opens a VS Code-style panel (rail badge counts changed files):

- **Staged** and **Changes** groups, each file with its status letter (M modified, A added, D deleted, R renamed, U untracked).
- Hover a file for **Stage/Unstage**, **Open file**, and **Discard changes** (confirmed first). Group headers stage or unstage everything at once. File rows also expose a hover **more actions** menu that matches the right-click menu.
- The current **branch** shows as a pill. **Ahead/behind** arrows (↑2 ↓1) appear once a remote exists.
- A commit box: message, then **Commit**. **Push** and **Pull** show when a remote is linked; use **Publish to GitHub** when you are ready for a remote.

Clean tree? The panel says so and stays out of the way.

![The Source Control panel with staged changes](/media/source-control.png)

## The diff viewer

Click any changed file and its diff opens as a tab in the editor area:

![A side-by-side diff of working changes](/media/git-diff.png)

- **Split** (side-by-side) or **Unified** view, with intra-line changes highlighted and unchanged regions collapsed in split view.
- **Previous / Next change** buttons hop between chunks.
- The working-tree side is **editable**: fix something right in the diff and it saves to disk, re-diffing live. Staged diffs are read-only.
- New files diff as all-green; binary or huge files show a notice instead.

## History and restore

The **History** button (clock icon, top toolbar) lists every commit with its message, time, and hash. **Restore** rolls every tracked file back to that commit, after an explicit "Overwrite all" confirmation, and reloads all open buffers so nothing stale overwrites the restore.

## What commits automatically, and what doesn't

Oleafly snapshots your work on its own, so history exists even if you never open the Source Control panel:

- **"Update: `<files>`"**: written after a successful compile that changed files, and again a quiet moment (about 30 seconds) after you stop editing. The message lists exactly which files changed, and an unchanged tree never produces an empty commit.
- **"Oleafly AI checkpoint"**: committed automatically before the [AI assistant's](/docs/ai-chat/) first edit of a run, so any AI session can be rolled back in one restore.
- **"Initial commit"**: created when you first publish a project to GitHub.
- **Manual commits are still yours.** The Source Control panel stages and commits exactly what you pick, with your message, and automatic commits pause while that panel is open so nothing gets swept out from under you mid-staging.

A good rhythm: let the automatic snapshots cover the keystrokes, and write a manual commit at every milestone ("draft of section 4", "submitted version").

## Power users welcome

It's a plain repo at `~/.oleafly/projects/<project>/.git`. Branch, rebase, cherry-pick, or inspect it from the command line freely; the app reads the repo fresh whenever it needs it. In-app UI covers the everyday flow (stage, commit, push, pull, restore); the exotic stuff is a terminal away.
