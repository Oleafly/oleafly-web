---
title: "Años después Al dorso, luego un espacio de trabajo de investigación local"
description: "Al dorso se popularizó el uso colaborativo de LaTeX, y las cuentas gratuitas aún miden las colaboraciones, el historial, la inteligencia artificial y el tiempo de compilación. Dónde el navegador permanece delgado (reanudaciones, bifurcaciones, exportación, trabajo multimotor) y qué espacio de trabajo local libre en su disco llena."
date: 2026-07-31
tags: [overleaf, migration, local-first, research-workspace, free, open-source]
---

For years, [Overleaf](https://www.overleaf.com/) was the default answer to "how do I even start LaTeX?" Share a link. Watch a coauthor's cursor. Compile in the cloud. That on-ramp is genuine. For multiplayer paper sprints, it still is.

Once you live there for a thesis, a job-market package, or a long solo rewrite, the free product starts to feel small. One collaborator. History measured in hours. AI counted per day. Compile timeouts. Git and full history sit behind paid plans or a campus license you lose when you leave. The browser is excellent at being a browser with a shared buffer. It was never built as a full research workspace: resumes with ATS checks, project forking, multi-format export, Typst next to LaTeX, offline weeks, unlimited local history.

Here is where Overleaf still earns the open tab, where free tier and product scope run out, and what changes when those plain files live in a free desktop app ([Oleafly](https://github.com/Oleafly/Oleafly)) you download once.

## What years on Overleaf actually bought you

**Pros that still hold**

- Real-time multi-user editing, comments, and chat—still the best option for "three people, one abstract, tonight"
- Zero install for a coauthor who will only ever open a link
- Huge template gallery and publisher / institutional muscle memory
- Campus SSO and site licenses that make paid features feel free while you are on campus
- Visual/Code switch and a polish that taught the field what "online LaTeX" means

**Where it stays thin (especially free)**

Published individual plans (re-check [Overleaf pricing](https://www.overleaf.com/user/subscription/plans); numbers move):

| Free | Paid / org |
| --- | --- |
| **1 collaborator** per project | 10 (Student/Standard) or unlimited (Pro) |
| **5 AI uses/day** | Higher meters; full Assistant on paid; Pro = max AI |
| **Basic compile timeout** | **24×** basic timeout |
| **History: last 24 hours** | Full history |
| Integrations (Git/GitHub, Dropbox, Zotero/Mendeley, …) | Premium on many plans |
| Student ~$8–10/mo · Standard ~$17–21/mo · Pro ~$33–42/mo · universities: contact sales | |

So free tier is a real editor for mostly-solo cloud work. It turns into a demo the moment you need a second coauthor, last month's version, longer compiles, or more than five AI nudges.

There is a second thinness that is not about the paywall: what the product is for. Overleaf optimizes for collaborative LaTeX documents in a browser. It is weaker as a place to:

- Own a portfolio of papers, theses, posters, and resumes with forking and lineage
- Export the same project to Word, HTML, Markdown, PowerPoint (Beamer), EPUB without bolting on other tools
- Run ATS / accessibility preflight before a job application leaves your hands
- Keep Typst and Markdown next to LaTeX under one library and one Git model
- Work offline on a plane or locked-down hospital network
- Use AI with your own key or local model, with every edit as an approval diff
- Treat history as real Git you can open in a terminal forever

Those are research-desk problems. Overleaf optimized for multiplayer first; the rest of the desk never got the same weight.

## Paper writing: both sides

**Overleaf side.** Sharing a paper draft mid-paragraph is frictionless. Comments live on the doc. For groups that will never touch Git, that is the whole product. The editor is competent. The preview is fine for most articles. You are never the person who has to install TeX Live for the undergrad.

**Where paper writing still hurts.** Project-wide intelligence is limited next to a desktop research editor built around a full index: rename a macro across chapters, live-check `\cref` and multi-key cites, structure views over a 200-page tree, KaTeX previews while you type, grammar that ignores `\commands`. Free compile timeouts bite complex theses. Free history evaporates after a day. You cannot truly fork a submission version into an experiment branch the way you fork a repo—you duplicate a project in the cloud and hope you remember which is which.

**Oleafly side.** The paper is a multi-file project on disk. Project-wide go-to-definition, references, rename, live ref/cite diagnostics (including the messy `\eqref` / `\cref` family), structure views, completions for macros you defined with real argument shapes, TexLab/Tinymist when available, live math previews, offline Harper + Hunspell on prose only. PDF workspace with stale-tolerant SyncTeX, spreads, detachable window. Auto-compile on your CPU with humanized errors. Book-scale CI (~6,200 lines) is how the editor is tested.

**How people usually split it.** Live coauthoring stays on Overleaf. Deep multi-file authoring, offline weeks, unlimited local compile and history move local. Plenty of people do both on the same plain files.

## Resumes and documents that machines read

Overleaf will compile a resume class. What it will not do well is treat the job-market PDF as a product: ATS-minded templates, deterministic selectable text, and a Preflight panel that shows what a parser-style extract actually sees (name, sections, risks)—with scores you can act on. Web resume builders sell that story for a monthly fee and trap layout in their SaaS.

Oleafly ships resume-oriented templates, Preflight, and free Git so "industry CV," "academia CV," and "fellowship" are forked projects with full history—not three cloud copies named `cv_final_v4`.

If your only output is a shared paper, skip this section. If you also ship applications from the same desk, you will notice the gap quickly.

## Forking, cloning, lineage

Cloud "copy project" exists. What research desks want is closer to a git fork: full history, visible lineage, experiment without touching the camera-ready tree. Oleafly's library treats projects as books on a shelf; fork copies the project and its Git history; lineage shows on the card. Clone-style workflows via GitHub push/pull are free.

Overleaf free history is 24 hours. Paid history is better; it is still a service timeline, not a repo you keep if the account dies.

## Export and handoff

Journal portals want PDF and often a source zip. PIs want Word. Course sites want PDF. Talks want slides. Books want EPUB. Overleaf's world is primarily PDF from cloud LaTeX plus download source. That covers a lot of academia.

Oleafly's export menu is context-aware: PDF and source zip always; Word, HTML, Markdown, plain text via managed Pandoc; PowerPoint from Beamer; EPUB for book-like projects; figure PNG paths for image projects. Fidelity varies (be honest about complex LaTeX → DOCX), but the path is in-app and free.

## AI, with the meter in daylight

Overleaf free: five AI uses per day. Paid plans raise the cap and unlock the Assistant. Orgs can disable AI for everyone.

Oleafly: AI off by default. Your key or Ollama. Nine providers when you want hosted. Agent can edit, compile, read logs, check PDF text, search literature. Every write is an approval diff; deletes need a distinct confirm; Git checkpoint first. Inline Ask-AI. MCP for external clients. We do not sell you tokens.

Hosted convenience with a daily cap and a subscription ladder, or bring-your-own model and inspectable edits. Pick the trust model you can explain to a lab or an IRB.

## Multi-engine reality

Overleaf is a LaTeX (and friends) cloud. Typst has its own web story elsewhere. Markdown notes live in yet another tool.

Oleafly runs LaTeX (Tectonic), Typst, and Markdown in one library, with compilers managed, one Git model, one PDF surface. Templates filter by engine. That is a different product shape—research desk, not another LaTeX tab.

## Offline, privacy, ownership

Browser: no network, no editor. Drafts live on their servers under their terms. Export is your escape hatch until it is not (account access, plan changes, graduation).

Local workspace: plain folders, real Git, offline editing and cached compiles, optional strict offline mode. No Oleafly account. No product telemetry. Network for packages, citations, hosted AI, GitHub, updates—when you ask.

## Where Overleaf still wins

- Live multi-user typing and comments this hour
- Zero-install coauthors
- Institutional SSO and "everyone already has Overleaf"
- Publisher habits that open a cloud project by default

Live multiplayer for Oleafly is on the roadmap. Until then, Git is the collab path, or you keep Overleaf for the live sprint and the local app for the deep week. Because everything is plain files, switching back and forth is dull infrastructure rather than a migration project.

## Where a free local workspace pulls ahead

- Full editor depth (project index, macros, structure, math preview, prose-aware proofing, language servers)
- PDF workspace with stale-tolerant SyncTeX
- Real Git + free GitHub sync + project fork with history
- Typst + Markdown beside LaTeX
- Citations search/paste/import, diagram composer, preflight, multi-format export
- AI under your keys with approval diffs—or fully local
- $0 forever, AGPL, download once

## Snapshot table

| | Overleaf free | Overleaf paid / campus | Oleafly |
| --- | --- | --- | --- |
| Cost | $0 funnel | $8–$42+/mo or site license | **$0 forever** (AGPL) |
| Account | Required | Required | None |
| Real-time multiplayer | Yes (1 collab free) | More collabs | Roadmap; today = Git |
| History | 24 hours | Full (plan) | Full Git on disk |
| Git / GitHub | Premium | Premium | Built in, free |
| Compile | Server, basic timeout | 24× timeout | Local, your hardware |
| Offline | No | No | Yes (cached packages) |
| Engines | LaTeX-first cloud | LaTeX-first cloud | LaTeX + Typst + Markdown |
| Project intelligence | Browser-grade | Browser-grade | Full multi-file IDE depth |
| PDF / SyncTeX | Browser preview | Browser preview | Full workspace + stale map |
| AI | 5 uses/day | Metered / max | Your key or Ollama; approval diffs |
| Resume / ATS preflight | DIY | DIY | Built in |
| Fork with history | Copy project | Copy project | Library fork + full Git |
| Export | PDF + source | PDF + source | PDF, source, DOCX, HTML, MD, PPTX, EPUB… |
| Templates | Large cloud set | Large cloud set | 23 bundled + 99 packs + custom |
| Data home | Their servers | Their servers | Your disk |

## Trying both without drama

1. Zip the Overleaf source.
2. Install Oleafly from the
   [releases page](https://github.com/Oleafly/Oleafly/releases/latest).
3. Import; compile once; write for a day on a real paper or resume.
4. Keep the Overleaf project for any live multiplayer you still need.

Tectonic can still stumble on heavy publisher classes—report those; they shape the roadmap. Most ACM/IEEE/Elsevier-style papers and theses are fine.

## Closing

Overleaf earned its decade. Free multiplayer still feels like magic when three people need the same paragraph tonight. For ownership, deep editing, forks, exports, multi-engine work, unlimited history, and AI you control, a free local desk is the more honest fit. Download Oleafly once, keep Overleaf for live sprints if you still need them, and decide from real papers rather than a feature matrix.
