---

title: "Tutto quanto sopra inizia {document}"
description: "Pacchetti, metadati e ordine di caricamento: cosa appartiene al preambolo e cosa no."
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

# Tutto quanto sopra inizia{document}

Tutto ciò che è compreso tra `\documentclass{...}` e `\begin{document}` è il **preambolo**. Non produce testo visibile. Configura la corsa. Font, margini, pacchetti, comandi personalizzati e metadati del documento risiedono tutti qui, motivo per cui il preambolo di un articolo maturo è spesso più lungo della sua introduzione. Una volta che sai cosa fa ogni riga, un modello copiato smette di essere magico e diventa una lista di controllo.

## Anatomia

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

Le opzioni su "\documentclass" impostano valori predefiniti globali: "11pt" è la dimensione del carattere di base da cui tutto il resto viene scalato e "a4paper" dichiara la dimensione della carta. Le due righe di codifica sono compagne storiche: `inputenc` dice al motore che il tuo file sorgente è UTF-8 e `fontenc` seleziona la codifica dei caratteri in modo che i caratteri accentati siano veri glifi anziché composti. L'attuale LaTeX presuppone già l'input UTF-8, quindi vedrai queste righe omesse nei nuovi documenti, ma sono innocue e i modelli le mantengono per compatibilità.

Il blocco centrale carica i pacchetti di funzionalità. [geometry](/learn/margins-geometry/) imposta i margini in un'unica opzione, `amsmath` e `amssymb` forniscono gli ambienti matematici e i simboli necessari a quasi tutti i documenti tecnici, `graphicx` abilita `\includegraphics` per le figure e `booktabs` fornisce le regole che rendono le tabelle un aspetto professionale. Infine, [hyperref](/learn/hyperlinks/) rende i riferimenti e le citazioni cliccabili e viene deliberatamente caricato per ultimo, perché ridefinisce gli interni di molti altri pacchetti.

Le righe "\title", "\author" e "\date" memorizzano solo i metadati. Non viene stampato nulla finché `\maketitle` non viene eseguito nel corpo, motivo per cui questi non possono essere inseriti nel preambolo.

## Regole pratiche

Alcune abitudini mantengono sani i preamboli. Caricare un pacco per lavoro e resistere all'impilamento di pacchi che combattono per lo stesso territorio, ad esempio due modi per impostare i margini. Mantieni hyperref alla fine, con una manciata di eccezioni documentate come awaref che devono venire dopo. Inserisci scelte a livello di documento nelle opzioni della classe anziché disperderle, in modo che "11pt" o "twocolumn" vengano dichiarati una volta dove chiunque possa vederli. E una volta che le tue [macro personalizzate](/learn/custom-commands/) diventano troppo grandi per poche righe, spostale in un file `.sty` in modo che più documenti possano condividere un insieme di definizioni.

La disciplina più utile è quella negativa: se non sai perché c'è una riga di preambolo, scoprilo prima che il tuo documento dipenda da essa. I preamboli copiati accumulano linee morte e le linee morte sono dove si nascondono i conflitti tra pacchetti. Vedi anche [lo scheletro del documento](/learn/document-skeleton/) e [motori confrontati](/learn/engines-compared/).