---
title: "Bigger and smaller type"
description: "Class options like 11pt, and local size switches that do not wreck line spacing."
category: "type-and-shape"
order: 2
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-24
---

# Bigger and smaller type

## Document-wide

```latex
\documentclass[11pt]{article} % 10pt, 11pt, 12pt common
```

## Local switches

```latex
{\large larger} {\Large larger}
{\small smaller} {\footnotesize notes}
{\tiny tiny}
```

Prefer logical structure (`\section`) over manual sizes for headings.
