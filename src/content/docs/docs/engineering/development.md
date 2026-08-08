---
title: "Development"
description: "Set up the Oleafly desktop repository, fetch its pinned sidecars, run the app, and understand the main extension points."
---

Oleafly is a [Tauri 2](https://tauri.app) desktop app. Its React and TypeScript frontend talks to Rust over Tauri IPC. Rust owns project files, compilation, secrets, MCP routing, and AI provider requests.

## Repo layout

```
Oleafly/
├── src/                    React app shell (stores, Tauri client, UI kit, port adapters)
│   ├── components/         ui (shadcn-style), layout, editor glue, preview panes, ai
│   ├── contributions/      registers rail tabs / commands / AI toolsets into the registry
│   ├── features/           compile, synctex, export
│   ├── lib/                tauri wrappers, github, spellcheck, utils, package shims
│   └── store/              zustand stores
├── packages/               @oleafly/* frontend packages consumed as TS source
│   ├── latex/  latex-intelligence/  ai-core/  ai-tools/  registry/
│   └── editor/  preview/  diagram/  preflight/  pdf-to-latex/  templates/  wysiwyg/
├── crates/
│   └── oleafly-agent/      provider clients, streaming, and agent orchestration
├── src-tauri/
│   ├── src/                Tauri commands, engines, config, Git, MCP, paths, projects
│   ├── binaries/           fetched Tectonic, Biber, and Typst sidecars
│   ├── resources/          templates, dictionaries, TeX data, language servers
│   └── tauri.conf.json
├── scripts/fetch-tectonic.sh
├── scripts/fetch-biber.sh
├── scripts/fetch-typst.sh
├── scripts/fetch-language-servers.mjs
└── docs/
```

The frontend is a pnpm workspace. Reusable features live in `packages/*` behind
injected ports, and the app shell wires them together. Read
[Frontend architecture](/docs/engineering/architecture/) before touching `packages/`: it
covers the port pattern, the contribution registry, and the alias wiring.

## Prerequisites

- Node.js 22.13+ and pnpm 11.9+ (the exact pnpm version is declared in
  `package.json`)
- Rust (stable) via [rustup](https://rustup.rs)
- [Tauri 2 system dependencies](https://v2.tauri.app/start/prerequisites/) for your OS
- Optional during setup: [pandoc](https://pandoc.org/installing.html) for Markdown PDF compilation and document export (the app can install its pinned build on demand)

## First run

```bash
pnpm install
./scripts/fetch-tectonic.sh all
./scripts/fetch-biber.sh all
./scripts/fetch-typst.sh all
pnpm language-servers:fetch
pnpm tauri dev
```

For a single platform, pass its Rust target triple to each shell fetch script. Use `rustc -vV` to find the host triple. The language-server command selects the current host unless you pass a target through its underlying script.

## Day-to-day

```bash
pnpm tauri dev          # run the app with hot reload (frontend) + cargo incremental (backend)
pnpm build              # typecheck + build the frontend (tsc -b && vite build)
pnpm tauri build        # produce a distributable bundle
```

### Checks before opening a PR

Run the relevant local checks before opening a pull request:

```bash
pnpm build                                # frontend typecheck (noUnusedLocals/Parameters on)
pnpm test                                 # vitest across src/ and packages/
pnpm audit --prod --audit-level high      # registry-backed npm advisory check
cd src-tauri && cargo check               # backend compiles
cd src-tauri && cargo deny check           # Rust advisories, licenses, and sources
```

The two audit commands require registry/network access. CI records their
current results on every code change. An offline local run cannot certify that
the dependency graph is advisory-free.

For user-facing changes, also run the end-to-end suite against the real app and compiler. See [e2e/README.md](https://github.com/Oleafly/Oleafly/blob/main/e2e/README.md).

```bash
pnpm test:e2e:app                         # builds + launches the app, runs Playwright, tears down
```

## How a compile works

1. The frontend loads the backend `project_engine` descriptor and its capability flags, then calls `compileProject(projectId, mainDoc, offline)` through Tauri IPC.
2. Rust dispatches through `DocumentEngine`. UI code must not infer engine behavior from a filename.
3. LaTeX uses bundled Tectonic by default. A project can instead choose pdfLaTeX, XeLaTeX, or LuaLaTeX through `latexmk`. System TeX distributions take priority over Oleafly's managed TinyTeX.
4. Typst invokes the pinned Typst CLI directly against the selected `.typ` main document with short diagnostics and an explicit PDF output path.
5. Markdown invokes Pandoc directly against `.md`/`.markdown`, with an explicit
   output path and `--pdf-engine=<absolute bundled Tectonic path>`. Pandoc's
   manual explicitly supports a full PDF-engine path. Do not replace this with
   an implicit system `pdflatex`, since packaged Oleafly must not depend on an
   undeclared TeX installation. The process runs with the project root as its
   working directory so relative images, bibliography files, and CSL files work
   for both root and nested main documents.

Tauri's [sidecar documentation](https://v2.tauri.app/develop/sidecar/) defines
`bundle.externalBin` inputs with target-triple suffixes and exposes the packaged
sidecar under its unsuffixed name at runtime. Oleafly's Pandoc adapter resolves
that packaged Tectonic executable beside the application executable, matching
Tauri's desktop bundle layout. Unit tests cover macOS app-bundle and Cargo
debug/release candidates, while the release workflow inspects the staged
unsuffixed sibling on every target.

Tectonic, Biber, Typst, and language-server downloads are versioned and checksum-pinned. Their fetch scripts validate archive structure and extract only the reviewed executable or resource paths. CI and release builds use the same scripts.

6. All engines stream normalized log/error events. Rust returns compile metadata through JSON IPC. The PDF itself is fetched separately as raw binary IPC rather than embedded as base64 in the result.
7. The frontend renders PDF bytes with pdf.js and publishes normalized diagnostics to CodeMirror.

Engine descriptors model compilation policy plus formatting/source-preflight
profiles and feature/export/template-kind sets. Frontend consumers use the
fail-closed files-store descriptor rather than guessing from extensions. See
the [document engine matrix](https://github.com/Oleafly/Oleafly/blob/main/docs/document-engines.md).

Typst currently reports `supports_synctex=false`, `supports_offline=false`, and
`supports_isolated_compile=false`. Consequently reverse/forward search, the
offline compiler toggle, and LaTeX/TikZ figure generation are hidden or
normalized off for Typst projects. Add such behavior only after the backend
engine capability becomes truthful. Do not add extension-based UI exceptions.

## Where state lives

- Config: `~/.oleafly/config.json` (`0600` on Unix). Non-secret preferences
  live here.
- Secrets: `~/.oleafly/ai-secrets.json` and
  `~/.oleafly/app-secrets.json`, encrypted with the owner-only
  `~/.oleafly/ai-secrets.key`. GitHub and MCP share `app-secrets.json`. AI
  provider credentials use `ai-secrets.json`.
- Projects: `~/.oleafly/projects/<id>/`, plain folders with `.git`.
- App log: `~/.oleafly/app.log`.

## Key extension points

- Add an AI provider → update `crates/oleafly-agent/src/provider.rs`, then mirror its display metadata in `packages/ai-core/src/providers.ts`. The catalog parity test keeps the two lists aligned.
- Add a Tauri command → declare in `src-tauri/src/*.rs`, register in `src-tauri/src/lib.rs`, wrap in `src/lib/tauri.ts`.
- Add a document engine → implement `DocumentEngine` in `src-tauri/src/document_engine.rs`, expose truthful capabilities, add a checksum-pinned sidecar fetch/smoke path, then consume the descriptor in UI controls.
- Add a project template → drop a folder with a `template.json` manifest into `src-tauri/resources/templates/` (engine-general template metadata remains planned work).
- Add a tool for the AI → `packages/ai-tools/src/tools.ts`. App services it needs go through `AiToolsHost` in `src/lib/ai-tools.ts`.
- Add a rail tab / palette or omnibar command / AI toolset → register it in `src/contributions/` (see [Frontend architecture](/docs/engineering/architecture/#the-contribution-registry)).

## Sync and GitHub internals

OAuth device flow runs server-side in Rust (`src-tauri/src/github.rs`) because the OAuth endpoints aren't CORS-enabled. The API calls (api.github.com) happen from the frontend.

## Coding style

- TypeScript: follow what's already there. No comments unless asked. Respect `noUnusedLocals`/`noUnusedParameters`.
- Rust: idiomatic, small commands, friendly error strings.
- UI: Tailwind v4 + Geist tokens. Reuse the `Button`, `Tooltip`, and `Select` primitives.

## Releasing

Packaging targets macOS Apple Silicon, Windows x64, Linux x64, and Linux ARM64. Each build fetches and checks its compiler sidecars and bundled language-server resource. Release builds support Apple signing and notarization on macOS and Azure Artifact Signing on Windows. See
[releasing](/docs/engineering/releasing/) and user [install](/docs/install/).
