---
title: "Prompt models for compiling TeX"
description: "Send the preamble, demand a diff, always compile the answer."
category: "human-plus-model"
order: 1
level: "beginner"
tags: ["ai"]
featured: true
updated: 2026-07-25
---

# Prompt models for compiling TeX

Ask a chat model for LaTeX and you will usually get code that looks right and fails to compile in your document. The model does not know which class you use, which packages you load, or which macros you have defined, so it answers for some generic document that is not yours. The output then dies with missing packages or clashing definitions the moment you paste it in. Most of that is avoidable with three prompting habits, plus one hard rule: compile before you trust.

## Send the preamble

Your preamble is the context the model lacks. Paste it, or at least the `\documentclass` line and the `\usepackage` list, and ask for "a fragment that compiles under this preamble". This one habit blocks the most common failure: the answer silently depends on `tikz`, `siunitx`, or some other package you never loaded. It also steers the model toward the commands your setup actually provides. If your project defines macros, include those too, for the reasons covered in [Give the model your symbol table](/learn/ai-follow-notation/).

## Ask what the answer depends on

Add a standing request: "If your code needs any package I have not loaded, list it explicitly at the top of your answer." That turns hidden dependencies into a visible checklist. When the reply names a package, you decide whether to add it, rather than discovering the dependency as an `Undefined control sequence` error three compiles later. That error and its diagnosis are covered in [Undefined control sequence](/learn/undefined-control-sequence/).

## Ask for a diff, not a rewrite

When you want a change to existing text, paste the smallest relevant snippet and ask the model to change only what the request requires, stating what it changed. Given a whole file, models rewrite freely: they reformat untouched paragraphs, reorder preamble lines, and occasionally drop something on the floor. The real change disappears inside the churn. A minimal, described edit is one you can actually review. Inside Oleafly, the assistant enforces this shape for you by proposing every edit as a red/green diff you approve line by line, as described in [Assistant inside Oleafly](/learn/oleafly-ai/).

## Compile before you trust

Never ship LaTeX you have not compiled, no matter how plausible it reads. Paste the suggestion into your document, compile, and read the first error if there is one. Feeding that error message back to the model, along with the offending snippet, usually produces a working second attempt. Keep the project under Git so any model-assisted change can be rolled back in one command, a setup covered in [Put the paper on GitHub](/learn/sync-with-github/). The model proposes; the compiler disposes.
