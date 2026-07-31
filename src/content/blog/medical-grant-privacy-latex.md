---
title: "Clinical and grant writing: privacy, trackable drafts, and offline LaTeX"
description: "Why medical, public-health, and grant writers care where the draft is stored, and how a local research editor with real Git, offline compile, and no account fits review cycles."
date: 2026-07-14
tags: [medicine, grants, privacy, local-first]
---

Clinical manuscripts and grant narratives often include sensitive detail even
before de-identification is final. Putting every keystroke on a third-party
editor is a policy decision as much as a tooling preference. IRBs, data use
agreements, and hospital IT do not care that a cloud editor was convenient at
11pm.

This post is about drafting and typesetting in a way you can explain to
compliance. Treat it as workflow advice, not legal review.

## Plain files are easier to reason about

A folder of `.tex` and figures can sit inside an encrypted disk, a hospital
laptop image, or an air-gapped machine. You can point compliance at a path.
Browser projects require trusting a vendor's access model, export path, and
subprocessors list.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) is built that
way on purpose: no account, no product telemetry, projects as ordinary folders
with a real Git repository. The [privacy page](/privacy/) is short because the
document does not need an Oleafly server to exist. Network is for actions you
take (packages, optional citation lookup, hosted AI if you enable it, GitHub),
not for every keystroke of the draft.

If policy forbids cloud AI, leave the assistant off or point it at a local
model. The editor, compile loop, and Git still work.

## Track changes without living in Word

Grant PIs still ask for "track changes." In LaTeX land, that usually means
Git history plus PDF comments from coauthors, or a short Word export for the
person who refuses to install anything. Keep `.tex` as the source of truth;
see [coauthors who only speak Word](/learn/collaborator-uses-word/).

In Oleafly every project is a Git repo from day one: automatic checkpoints
after successful compiles and idle edits, side-by-side diffs, one-click
restore, optional GitHub when you want a private remote. You can fork a whole
application package into a second project (full history) to try a risky cut
without touching the submission copy. If you use the optional AI assistant, it
checkpoints before the first edit and only lands changes through approval
diffs.

Name commits after aims or sections (`aim2-methods-cut`) so a PI can skim
history without reading diffs like a software engineer.

## Offline is useful in hospitals

Clinical networks block random SaaS domains. A local compiler keeps writing
possible between EHR sessions. Oleafly ships Tectonic (and Typst) in the app;
packages cache after first use, and offline mode can refuse network for the
compiler. Spellcheck and grammar run locally on prose (they skip commands and
math). Those are the constraints hospital IT usually cares about, so local
research editors come up often.

SyncTeX and a PDF beside the source matter when you are fixing a page limit
at a nursing station computer with unreliable Wi‑Fi.

## Templates, page limits, and preflight

NIH-style and foundation templates are about margins, fonts, and page caps.
Geometry and font packages matter more than clever macros. Compile to PDF and
check page count after every major cut, not the night before the portal
closes. Start from a known template in the gallery when one fits; still match
the current FOA for fonts, margins, and structure (Specific Aims as one page
means one page).

When the PDF has to survive a machine reader (resumes, some institutional
portals), Preflight shows structure and parser-style extraction findings
before you submit. Those are heuristic risk signals you can read and act on.

## Multi-PI collaboration

Own files by section or aim. One person owns the master `.bib` or shared
Zotero group export. Agree whether coauthors edit TeX or return PDF comments.
Private remotes only on approved institutional Git hosts when policy requires
it; not every grant draft belongs on public GitHub.

## Bibliography managers

Shared Zotero groups export a `.bib` that multiple PIs can refresh. Import into
the project, paste DOIs when you add new cites, and validate missing fields
before submission so years do not surface as `[?]` in the assembled PDF:
[BibTeX validator](/tools/bibtex-validator/). Oleafly completes and checks
citation keys against the project bibliography while you write, so broken
`\cite` keys show up before the log does.

## Figures and PHI

Never put identifiable patient data in figures or captions destined for a
repo others can clone. Use de-identified schematics. Store anything still
sensitive under the same controls as the clinical dataset, not next to the
public methods diagram.

## What this is not

Local-first still sits under IRB review, data use agreements, and
de-identification. Turn on hosted AI or push a remote and some bytes leave the
machine under those services' policies. What local-first changes is the default
path for drafting a sensitive narrative: a folder you control, an editor that
runs offline, and history you can restore without asking a vendor for an
export.

## Practical starting setup

1. Create a local project; enable offline compile once packages are cached.
2. Leave AI off unless policy and the team agree on a provider.
3. Private remote only on an approved host.
4. Section ownership and a single bibliography owner.
5. Page-count checks after every major cut on aims and research strategy.

Write as if a compliance officer will ask where the draft lived. If the answer
is "a folder on the encrypted laptop, Git history local, optional private
remote," you are in better shape than "an account on a service we never
reviewed."
