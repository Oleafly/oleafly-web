---
title: "Preflight checks"
description: "Check compile quality, publication requirements, ATS parsing, accessibility, references, and privacy before you submit."
---

Compiler warnings, submission portals, screen readers, and resume parsers all see a different part of a document. Preflight brings those checks into one place before you submit.

Open it from the shield icon in the left rail. The panel opens instantly, pre-selects the checks relevant to your document type, and every check explains itself with an info icon.

![Preflight scoring a resume for ATS readiness](https://cdn.oleafly.com/images/screenshots/desktop/preflight-ats.png)

## Six independent checks

Turn on the checks that fit the document. Each one has its own result and can run by itself:

- **Compile & layout** reads the latest build log and PDF for unresolved references, missing glyphs, overfull boxes, clipped text, rerun warnings, duplicate destinations, and mixed page sizes.
- **Submission readiness** applies a publication profile to the whole project. It checks document class, abstract and keywords, figure formats, embedded fonts, PDF restrictions, captions, portable paths, and source-package clutter.
- **ATS readiness** simulates resume parsing and reports the contact fields and expected sections it can recover.
- **Accessibility** checks reading order, selectable text, language and title metadata, tags, alt text, bookmarks where appropriate, and text that may be too small.
- **References & assets** finds missing files, undefined citations and cross-references, duplicate labels and DOIs, incomplete bibliography entries, and uncited references when the whole project is available.
- **Privacy & blind review** scans for credentials, private keys, sensitive files, draft notes, internal comments, acknowledgements, and identity metadata.

A finding is marked **verified** when Oleafly observed it directly. **Advisory** findings are documented heuristics that need author review. **Manual** items cannot be decided safely from the files alone.

## Publication profiles

Submission requirements conflict across publishers. Pick a general publication, arXiv, IEEE, ACM, journal, or thesis profile instead of applying one global rule set. Preflight checks stable requirements in that profile and leaves changing venue rules, such as page limits and margins, to the current call for papers or author guide.

## Source checks

Static analysis of your LaTeX, before any compile:

- Two-column and multi-column layouts (parsers read them in the wrong order)
- Missing image alt text
- Font icons hiding real content, like an email or phone number rendered as a glyph
- Tables or TikZ used for page layout
- Contact info placed in a page header (many parsers strip headers)
- Non-descriptive link text ("click here")
- Missing document language or PDF title
- Skipped heading levels
- and more

Source-level findings also appear as inline squiggles right in the editor, so you can fix them where they live.

## Output checks

After a compile, Preflight audits the actual PDF:

- Columns that read across instead of down
- Garbled or unmapped text (the classic icon-font casualty)
- Pages with no selectable text at all
- Missing PDF language or title metadata

## See what the reader gets

Two views take the guesswork out:

- **What the reader sees** opens from the Preflight header. It shows the compiled PDF's extracted text page by page, close to what a parser or screen reader receives. If a name is missing or the sections are shuffled here, the same problem is likely to reach the reader.
- **What a parser extracted**: for resumes, a simulation of a real ATS pass: the name, email, phone, and links it found, and which standard sections (Experience, Education, Skills) it detected. A missing phone number or an invisible Work Experience section shows up here first.

## Running checks

Every check is an accordion with its own enable checkbox and **Run** button, plus one button to run everything enabled. Run one check while iterating on a specific problem, or the full suite before submission.

## Accessible (tagged) PDF export

The **Accessible export** card turns a regular document into one ready for tagging:

1. **Prepare for accessible export** rewrites your source with what a tagging engine needs (the `\DocumentMetadata` first line, unicode-math, alt-text placeholders), showing every change before you apply it.
2. **Compile tagged and verify** builds with LuaLaTeX and immediately audits the result, including a full tag-tree inspection, and reports what it found against Section 508 / PDF-UA oriented expectations.

LuaLaTeX comes from a detected system TeX distribution or Oleafly's managed TinyTeX. See [LaTeX engines](/docs/latex-engines/). The project compiler menu remains independent, so you can keep using Tectonic for normal previews.

## Honest scope

Preflight finds risks but does not certify a document. A clean run means the selected checks found no known problem in the inputs they could inspect. It does not guarantee acceptance, a particular ATS result, or a formal accessibility audit. The results are evidence for review, not compliance paperwork.
