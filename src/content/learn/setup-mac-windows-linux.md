---
title: "Get a working TeX on any OS"
description: "Oleafly with a bundled engine, or a full TeX Live / MiKTeX install."
category: "local-studio"
order: 2
level: "beginner"
tags: ["setup"]
featured: false
updated: 2026-07-25
---

# Get a working TeX on any OS

Writing LaTeX locally requires a TeX system: the engine that compiles your source plus the thousands of packages documents depend on. There are two sensible ways to get one. One is an application with the engine built in, which gets you compiling in minutes. The other is a full TeX distribution, which installs the complete command-line toolchain that any editor can use. Both paths end at the same place: a `.tex` file turning into a PDF on your machine.

## Path A: an app with the engine included

Download [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) for Mac, Windows, or Linux. It bundles the Tectonic engine, so there is no separate TeX installation to manage: you open the app, create a project, and compile. When a document uses a package that is not present, Tectonic fetches it on demand, which requires a network connection the first time a given package is used and nothing thereafter. This path suits anyone who wants to write papers rather than administer a TeX installation, and it leaves ordinary `.tex` and `.bib` files on disk that any other tool can read.

## Path B: a full TeX distribution

Installing a distribution gives you `pdflatex`, `xelatex`, `lualatex`, and the package manager as system commands. On a Mac, install MacTeX, which is TeX Live packaged for macOS; if the multi-gigabyte download is unwelcome, BasicTeX is a small core you extend through TeX Live Utility as needs arise. On Windows, MiKTeX is the common choice and can install missing packages on the fly during compilation, while TeX Live works equally well. On Linux, install `texlive-full` from your package manager for everything at once, or a smaller scheme such as `texlive-latex-extra` plus the `tlmgr` tool for adding packages later. Expect a full install to take a while and several gigabytes of disk.

## Verify the installation

Open a terminal and ask an engine for its version:

```bash
pdflatex --version
# or
xelatex --version
```

A version banner means the toolchain is on your path and ready. An error saying the command is not found usually means the installer's changes to your PATH have not taken effect yet; restarting the terminal, or logging out and back in on Windows, resolves it.

## Which path to take

Choose the app if you are starting out or simply want the shortest route to a compiled PDF. Choose a full distribution if you need specific engines, command-line builds, or integration with an existing editor. The two coexist without conflict, so starting with Path A and adding Path B later costs nothing. Either way, the next step is the same: compile [your first document](/learn/first-document/).
