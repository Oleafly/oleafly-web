---
title: "Local-first vs cloud LaTeX editors: what you actually trade"
description: "Cloud LaTeX editors trade ownership for convenience. Local-first means files on disk, a real research editor, real Git, offline work, and network only for actions you take, plus what still belongs in the browser."
date: 2026-07-21
tags: [local-first, privacy, research-workspace, editor]
---

Cloud LaTeX editors won for a simple reason: zero setup. Open a tab, compile.
For years that was the easiest way out of fighting a TeX distribution onto a
laptop, and plenty of people still prefer it.

Setup is no longer the hard part for most documents, though. Engines like
Tectonic can ship inside a desktop app and pull packages on demand, so
install-and-compile is roughly the time it takes to create a cloud account. The
question worth asking is what the subscription still buys you, and what you
hand over for it.

## What you give up in the cloud

Your manuscript sits in someone else's database. Export usually works, until
plans change, a company gets acquired, or a feature disappears, while your
deadline stays put.

Encryption at rest keeps outsiders out. The service itself can still see
drafts, grants, and unpublished results that pass through its infrastructure.

Latency is another quiet cost. A keystroke handled on your machine is almost
always snappier. Compile queues and free-tier timeouts only show up when the
build is not yours.

Offline is the other gap. On a flight, in a hospital basement, or in a secure
lab with no open network, a browser editor is just a blank tab.

Some hosted editors also put full history, track changes, or Git/GitHub sync
behind paid tiers. Local Git does not care which plan you bought.

## What local-first changes

Projects are plain files in a folder you can open. History can be real Git you
inspect from any terminal. Compile runs on your CPU with no queue. Your files
and Git history do not depend on a vendor account staying healthy.

Live multi-user typing is still where browser tools win. A lot of research
weeks look different: solo drafting, travel, restricted networks, wanting
ownership, or needing a full document editor that indexes the whole project.
Labs already branch and open pull requests for code. Papers can use the same
async pattern for coauthors who do not need to share a cursor.

## Network still happens (on purpose)

Local tools still reach out for first-use packages, template packs, citation
metadata, hosted AI if you turn it on, Git remotes, and updates. The point is
the default: drafting and cached compiles stay on disk.

Projects, metadata, builds, and Git history live locally. Network runs when
you take an action that needs it. Editing and cached compilation should work
offline. Paste a DOI or enable a cloud model and those requests go where you
aimed them. Say that clearly in any privacy writeup instead of pretending
network never happens.

## The stack around a paper

A research week is almost never "just an editor." It is usually some mix of:

- writing environment with real project intelligence
- TeX distribution and package maintenance
- PDF viewer with SyncTeX
- Git client and remote host
- citation lookup and bibliography hygiene
- grammar and spell tooling
- diagram or figure pipeline
- deadlines and other side tools

A local research workspace is useful when those pieces sit around the same
plain-folder project: a project-aware editor (refs, cites, macros, structure,
math preview, offline proofing), supervised compile, PDF workspace with
stale-tolerant SyncTeX, automatic Git checkpoints, import and export, preflight
before submit, optional agent that must show diffs.

## Where Oleafly fits

[Oleafly](https://github.com/Oleafly/Oleafly) is built for that category: free,
open-source desktop workspace for LaTeX, Typst, and Markdown. Bundled
compilers. Project library with fork and search. Project-wide editor
intelligence (definition, references, rename, live ref/cite checks, structure
views, your macros with argument shapes, TexLab/Tinymist when available). Live
math previews. Offline Harper and Hunspell on prose only. Integrated PDF with
bidirectional SyncTeX that still maps while a rebuild is pending. Real Git with
auto-checkpoints and optional GitHub. Citation search and paste. Diagram
Composer to editable TikZ. Preflight. Optional approval-gated AI with your key
or local Ollama.

The [privacy page](/privacy/) stays short on purpose: no Oleafly account, no
product telemetry. Drafts live on your machine. Hosted AI, citation lookup, and
GitHub talk to those services under their policies, with your keys and your
actions.

If you want a small taste without installing, the [free browser
tools](/tools/) run client-side. The desktop app is where intelligence,
compile, history, and the project tree actually meet.

## When the cloud still wins

Stay in the browser when real-time coauthoring is the product, when a
collaborator will not install anything, or when your institution already
standardized on a hosted editor for submission.

Match the tool to the week you actually have. If you need live multi-user
typing, stay in the browser (or use Git when coauthors can work async). If you
care more about ownership, offline depth, and a full local research editor,
keep the manuscript as files on disk, build the PDF on your machine, and keep
history in a repo any Git tool can open.
