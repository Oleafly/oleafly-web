---
title: "Assistant inside Oleafly"
description: "Your API key, project context, diffs, compile-aware edits."
category: "human-plus-model"
order: 5
level: "beginner"
tags: ["ai", "oleafly"]
featured: true
updated: 2026-07-25
---

# Assistant inside Oleafly

Oleafly includes an AI assistant that works inside your project rather than in a separate chat window. Unlike pasting LaTeX into a general chatbot, it runs on your own API key, can read the project it is editing, and shows every proposed change for approval before touching your files.

## Your key, your provider

The assistant makes no model calls through Oleafly's servers. You supply an API key for one of nine supported hosted providers, or point the app at a local Ollama installation and use a model running on your own hardware. Requests go from your machine to the provider you configured, under that provider's terms, and you pay the provider directly at their rates. Which model to choose, and how to set up a key or Ollama, is covered in [AI setup](/docs/ai-setup/).

## What the assistant can see

When you ask a question or request an edit, the assistant works from a map of your project and reads the files relevant to the request, such as the chapter you are editing, the preamble that defines your macros, or the `.bib` file behind a citation question. That context is why it can answer "why is Figure 3 floating to the next page" about your actual Figure 3, and why its edits tend to match the notation and commands your document already uses.

## Edits you review, not edits that just happen

The assistant never writes into your files directly. It proposes changes as a diff, with removed lines in red and added lines in green, and you accept or reject each one. Before any accepted change is applied, Oleafly records a Git checkpoint, so the state before the edit is always one step away in [Git history](/docs/git-history/). Deleting a file is treated separately and always requires your explicit confirmation, whatever else the assistant is doing.

## Closing the loop with the compiler

Because the assistant lives next to the build, it can check its own work. After an edit it can trigger a compile, read the log, and if the change was meant to fix an error, check whether that error is gone. It can also read the text of the compiled PDF, so it can confirm a requested change actually shows up in the output. Models still produce wrong LaTeX, so read what you accept. The upside is that broken suggestions tend to get caught and corrected inside the loop rather than by you later.

The day-to-day mechanics live in the docs for [chat](/docs/ai-chat/) and [inline edit](/docs/ai-inline-edit/), and [A week of writing in Oleafly](/learn/oleafly-workflow/) shows where the assistant fits in a full writing loop.
