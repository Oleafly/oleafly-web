---
title: "LaTeX engines & packages"
description: "Choose Tectonic or a latexmk compiler, use an existing TeX distribution, or install Oleafly's managed TinyTeX."
---

Oleafly ships Tectonic and can also compile through `latexmk`. The project compiler menu controls day-to-day builds. **Settings → LaTeX Engine** shows the TeX distributions and packages available on your machine.

## Tectonic: the everyday engine

**Tectonic** is the default. It needs no separate installation, fetches packages as needed, and caches them for offline use. It is a good fit for most projects and remains available even when no system TeX distribution is installed.

One thing Tectonic cannot do: produce **tagged PDFs**, the structure layer that screen readers and Section 508 / PDF-UA compliance require. That takes LuaLaTeX.

## latexmk and system TeX

Choose pdfLaTeX, XeLaTeX, or LuaLaTeX from a project's compiler menu when the project depends on a traditional TeX Live or MiKTeX workflow. Oleafly runs those compilers through `latexmk`.

There are two ways to provide that toolchain:

1. **Use an existing installation.** Oleafly detects MacTeX, TeX Live, MiKTeX, and TinyTeX on your system. A system installation takes priority over Oleafly's managed copy only when its binary directory contains `latexmk`, pdfLaTeX, XeLaTeX, LuaLaTeX, `kpsewhich`, and Biber. A partial installation cannot silently outrank a working managed TinyTeX.
2. **Install managed TinyTeX.** The download is about 250 MB and installs under `~/.oleafly/tinytex` with no administrator access. You can remove it from Settings later.

`latexmk` is not a filesystem sandbox. Even with shell commands blocked, TeX can read files available to your account. Oleafly also disables project, user, and system `.latexmkrc` files because they are executable Perl. Use system TeX only for projects you trust. Imported projects stay on Tectonic until you choose a system compiler.

With an engine present, the [Preflight](/docs/preflight/) panel's **Compile tagged and verify** button can produce a tagged PDF with LuaLaTeX and immediately audit it, in one step. Prefer your own toolchain? Preflight's **Prepare for accessible export** rewrites your source for tagging and you compile it with any LuaLaTeX (TeX Live 2025 or newer) outside the app.

## The package manager

Below the engine status sits a filterable **Packages** list for the LuaLaTeX side, powered by `tlmgr`:

- **Add** or **Remove** packages with one click (available once an engine is installed).
- Each package shows a description and, where relevant, a tagging-compatibility badge: **tagging: caution** (amber) for packages that can degrade tag quality, and **breaks tagging** (red) for ones that defeat it. You find out before the compile, not after.

This package manager applies to TeX distributions used by `latexmk`. Tectonic manages its own package cache.

## Which engine compiled my PDF?

- The toolbar shows the compiler saved for the current project.
- Tectonic builds use the bundled engine.
- pdfLaTeX, XeLaTeX, and LuaLaTeX builds use `latexmk` and the selected TeX distribution.
- Preflight's tagged export uses LuaLaTeX and writes to the normal build location.

## Templates and packages

Templates declare the packages they need, and Tectonic fetches them on first compile. Templates with on-demand fonts handle those separately. See [Templates](/docs/templates/#on-demand-fonts-the-setup-badge).
