---
title: "Everything above begin{document}"
description: "Packages, metadata, and load order: what belongs in the preamble and what does not."
category: "open-the-loop"
order: 3
level: "beginner"
tags: ["basics", "preamble"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Preamble check'
  questions:
    - prompt: 'What is the preamble?'
      choices:
        - 'Everything after \end{document}'
        - 'Everything between \documentclass{...} and \begin{document}'
        - 'Only the bibliography file'
        - 'The PDF outline panel'
      answer: 'B'
      level: beginner
    - prompt: 'Does preamble material print as body text on its own?'
      choices:
        - 'Yes. Every package prints a banner page.'
        - 'No. It configures the run; visible text starts in the body.'
        - 'Only if you use article.'
        - 'Only on the second compile.'
      answer: 'B'
      level: beginner
    - prompt: 'Why is hyperref usually loaded late in the preamble?'
      choices:
        - 'Loading it earlier is illegal.'
        - 'It rewrites a lot of commands, so it wants other packages loaded first.'
        - 'It only works after \maketitle.'
        - 'Loaded early, it disables amsmath.'
      answer: 'B'
      level: intermediate
    - prompt: 'Which of these belongs in the preamble?'
      choices:
        - 'A multi-paragraph introduction'
        - '\usepackage{amsmath} and \title{...}'
        - '\section{Results}'
        - 'The main \includegraphics for a figure'
      answer: 'B'
      level: beginner
    - prompt: 'What do options like 11pt on \documentclass mostly control?'
      choices:
        - 'Journal acceptance rate'
        - 'Global defaults such as base font size (and often paper size)'
        - 'Which OS you compiled on'
        - 'How many figures you''re allowed'
      answer: 'B'
      level: beginner
---

# Everything above begin{document}

Everything between `\documentclass{...}` and `\begin{document}` is the **preamble**. It produces no visible text. It configures the run. Fonts, margins, packages, custom commands, and document metadata all live here, which is why the preamble of a mature paper is often longer than its introduction. Once you know what each line does, a copied template stops being magic and becomes a checklist.

## Anatomy

```latex
\documentclass[11pt,a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx,booktabs}
\usepackage{hyperref} % load late

\title{Title}
\author{You}
\date{\today}
```

The options on `\documentclass` set global defaults: `11pt` is the base font size everything else scales from, and `a4paper` declares the paper size. The two encoding lines are historical companions: `inputenc` tells the engine your source file is UTF-8, and `fontenc` selects font encoding so accented characters are real glyphs rather than composites. Current LaTeX assumes UTF-8 input already, so you will see these lines omitted in new documents, but they are harmless and templates keep them for compatibility.

The middle block loads capability packages. [geometry](/learn/margins-geometry/) sets the margins in one option, `amsmath` and `amssymb` provide the math environments and symbols nearly every technical document needs, `graphicx` enables `\includegraphics` for figures, and `booktabs` provides the rules that make tables look professional. Finally, [hyperref](/learn/hyperlinks/) makes references and citations clickable and is deliberately loaded last, because it redefines internals of many other packages.

The `\title`, `\author`, and `\date` lines only store metadata. Nothing prints until `\maketitle` runs in the body, which is why these can sit in the preamble at all.

## Rules of thumb

A few habits keep preambles healthy. Load one package per job and resist stacking packages that fight over the same territory, such as two ways of setting margins. Keep hyperref at the end, with the handful of documented exceptions like cleveref that must come after it. Put document-wide choices in the class options rather than scattering them, so `11pt` or `twocolumn` is declared once where anyone can see it. And once your [custom macros](/learn/custom-commands/) outgrow a few lines, move them to a `.sty` file so multiple documents can share one set of definitions.

The most useful discipline is negative: if you do not know why a preamble line is there, find out before your document depends on it. Copied preambles accumulate dead lines, and dead lines are where package conflicts hide. See also [the document skeleton](/learn/document-skeleton/) and [engines compared](/learn/engines-compared/).
