---
title: "Compiling"
description: "Compile with bundled Tectonic or latexmk, choose a LaTeX compiler per project, read logs, and control offline package fetching."
---

Every LaTeX project starts with **Tectonic**, an XeTeX-based engine that ships with Oleafly. You can also use `latexmk` when a project needs a traditional TeX toolchain or an Overleaf-compatible build. The compiler choice belongs to the project, so changing one project does not affect the others.

Open the compiler menu in the toolbar to choose **Auto**, **pdfLaTeX**, **XeLaTeX**, **LuaLaTeX**, or **Tectonic**. Auto uses the project's saved choice and available toolchain. The explicit LaTeX choices run through `latexmk`.

## Starting a compile

- **⌘↵** (Ctrl+Enter), anywhere.
- The **Compile** button at the top right of the toolbar.
- **Recompile** in the ⌘K command palette.
- Opening a project into a view that shows the PDF pane compiles once automatically, so you land on a fresh preview.

Compiling always saves the active file first, so the PDF matches what you see. If you're in editor-only view, compiling reveals the split view so you can watch the result.

## Auto-compile

Run **Enable auto-compile** from the ⌘K palette and Oleafly recompiles about 2.5 seconds after you stop typing. Only real edits trigger it. Switching tabs or opening files does not. It is off by default, and the same palette entry turns it back off.

Compiles never pile up: if you keep typing while a build runs, exactly one follow-up compile is queued so the final PDF always reflects your latest edits.

## Watching progress

A thin progress bar runs across the top of the preview during a build, and before the first PDF exists the pane shows a percentage estimate. When a build finishes, the toolbar shows a **status chip** with the compile time and a severity icon:

- Green check: compiled successfully.
- Amber triangle: compiled with warnings. You still get the PDF.
- Red cross: compiled with errors.

The preview switches to the PDF automatically on success. Only a genuine failure (no PDF produced) switches you to the Logs view.

## Reading the logs

The **Logs** button at the left of the preview toolbar flips between the PDF and the compile log, with a badge counting errors (red) or warnings (amber):

- A parsed **diagnostics list** up top: each error or warning with its kind and, when known, the `l.42` line reference.
- The full raw TeX log below, colorized: errors bold red, line references highlighted, file nesting indented.
- A **Copy log** button grabs the whole thing for a bug report or a forum post.

Compile errors also become squiggles in the editor via the [linter pipeline](/docs/editor/#the-built-in-latex-linter), and the [AI assistant](/docs/ai-chat/) can read this same log with its `get_log` tool when you ask it to fix the errors.

## Packages: fetched once, cached forever

Tectonic downloads a LaTeX package the first time a document needs it, then caches it locally. The first compile of a new document type can be slower and needs a network connection. Later compiles use the cache.

**Offline mode** in Settings, General, or the command palette makes this a guarantee for Tectonic. The compiler runs with `--only-cached` and never fetches a package. A document that needs an uncached package fails with a clear error.

`latexmk` uses the TeX distribution already installed on your machine. Oleafly checks system distributions first, including MacTeX, TeX Live, MiKTeX, and TinyTeX. If none is available, the app can install and manage its own TinyTeX copy. Because a system TeX process can read files available to your user account, use `latexmk` only with projects you trust.

## Limits and safety valves

- One compile runs at a time per project, in a latest-only queue: newer requests supersede stale ones, so switching projects mid-build never paints the wrong PDF, and a compile storm never forms while you type.
- A superseded or timed-out build is actually cancelled: Oleafly terminates the compiler's whole process tree, on every platform, instead of leaving it running in the background.
- A hard 300-second timeout kills a wedged build rather than letting it spin forever.
- Results carry an identity tied to the request, so a stale PDF from an out-of-order finish is refused rather than displayed.

## Common failures, quick fixes

- **"Missing package" in Offline mode**: turn Offline mode off for one compile to fetch and cache it, then turn it back on.
- **Undefined citation or reference warnings**: [Preflight](/docs/preflight/#references--assets) pinpoints every one, with the file and line.
- **An error you can't parse**: ask the AI. "Fix the LaTeX errors" triggers a compile, log read, targeted edit, and recompile loop, with every change shown to you for approval first.

## Other document engines

LaTeX compiler selection is separate from the project's document engine:

- **Typst projects** compile with a bundled Typst engine. The [Typst templates](/docs/templates/) create them.
- **Markdown projects** build to PDF through a managed Pandoc with Tectonic as the PDF engine.
- **Tagged, accessible PDFs** use LuaLaTeX through a system TeX installation or Oleafly's managed TinyTeX. See [LaTeX engines and packages](/docs/latex-engines/).

The engine is a per-project choice made when the project is created, and the interface adapts to it: actions an engine cannot support are hidden rather than left to fail.
