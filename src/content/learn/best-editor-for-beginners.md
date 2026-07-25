---
title: "Pick an editor you will actually open"
description: "What beginners need: a compiler, preview, SyncTeX, and files that stay on disk."
category: "open-the-loop"
order: 6
level: "beginner"
tags: ["tools"]
featured: true
updated: 2026-07-25
---

# Pick an editor you will actually open

The best LaTeX editor for a beginner is not the most powerful one. It is the one that gets you from an empty file to a compiled PDF with the least friction, because the habit of compiling early and often matters more than any individual feature. Four capabilities cover what you need on day one.

First, compiling should work without installing a multi-gigabyte TeX distribution by hand. Second, you want a side-by-side PDF preview with SyncTeX, so a click in the PDF jumps to the matching source line and back. Third, your files should be plain `.tex` on disk, so you can zip them, email them, or put them in Git without an export step. Fourth, errors should arrive as readable messages, not only as a raw TeX log.

## The realistic options

| Editor | Setup | Works offline | Notes |
| --- | --- | --- | --- |
| Oleafly | Download the app | Editing always; compiles use cached packages | Bundled engine, Git history, optional your-own-key AI |
| TeXShop / TeXworks | Install a TeX distribution first | Yes | Minimal and reliable |
| VS Code + LaTeX Workshop | Install a TeX distribution first | Yes | A good fit if you already work in VS Code |
| Overleaf | Create an account in the browser | Limited | Zero install; projects live on their servers |

The middle two rows share a hidden cost: before the editor is useful, you install and maintain TeX Live or MiKTeX yourself, which is where many beginners stall. The browser option removes setup but moves your files into an account. The trade-offs are covered in more depth in [browser project vs folder on disk](/learn/overleaf-vs-local/).

## A reasonable default

If you want local files without TeX administration, start with [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest): the compiler ships inside the app and downloads packages the first time a document needs them. Whichever editor you choose, pair it with the [first document tutorial](/learn/first-document/) and keep the [cheatsheet](/learn/cheatsheet/) nearby. The editor matters less than compiling your first page today.
