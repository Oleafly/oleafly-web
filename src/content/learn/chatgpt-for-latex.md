---
title: "Prompt models for compiling TeX"
description: "Send the preamble, demand a diff, always compile the answer."
category: "human-plus-model"
order: 1
level: "beginner"
tags: ["ai"]
featured: true
updated: 2026-07-24
---

# Prompt models for compiling TeX

## Prompts that work

- Paste your **preamble** and ask for a fragment that fits it.
- Ask for **compiling** code and a short note on any packages it adds.
- Ask for a **diff** against your snippet, not a full rewrite of the file.

## Verify

Do not ship uncompiled LaTeX. Paste the suggestion into Oleafly (or any engine), compile, read the first error, and keep Git history so you can roll back.

See also: [AI inside Oleafly](/learn/oleafly-ai/).
