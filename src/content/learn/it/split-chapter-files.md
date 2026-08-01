---

title: "Un file root, molti capitoli"
description: "include vs input, includeonly e redazione di un capitolo alla volta."
category: "long-form"
order: 1
level: "intermediate"
tags: ["thesis"]
featured: true
updated: 2026-07-25
---

# Un file root, molti capitoli

Una tesi in un singolo file `.tex` diventa infelice da lavorare intorno al secondo capitolo: lo scorrimento sostituisce il pensiero e ogni compilazione elabora tutto. La soluzione standard è un file root che contiene la classe e il preambolo, con ogni capitolo nel proprio file. Il file root li unisce insieme.

## Il file radice

```latex
% main.tex
\documentclass{report}
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

`main.tex` è l'unico file che hai mai compilato. Ogni `\include` nomina un altro file senza la sua estensione `.tex`, usando le barre su ogni piattaforma, e a quel punto inserisce i suoi contenuti. I file dei capitoli stessi contengono solo contenuto, che in genere inizia con `\chapter{...}`. Non hanno `\documentclass` e nessun ambiente `document` proprio, perché sono frammenti di questo documento, non documenti.

## includere rispetto a input

I due comandi di inclusione si comportano diversamente e le differenze decidono quale utilizzare e dove. `\include` inizia una nuova pagina prima del materiale, che si adatta ai capitoli, e scrive un file `.aux` separato per ciascun file incluso, che è ciò che rende possibile la compilazione selettiva. `\input` è un semplice incollamento testuale: nessuna interruzione di pagina, nessun `.aux` separato e può essere nidificato all'interno di un altro input. Ciò rende `\input` lo strumento giusto per frammenti più piccoli di un capitolo, come una grande tabella conservata nel proprio file o un [file macro](/learn/custom-commands/) condiviso. Una regola strutturale da ricordare è che `\include` non può essere annidato all'interno di un file incluso, mentre `\input` può essere utilizzato ovunque.

## Stesura un capitolo alla volta

```latex
\includeonly{chapters/methods}
```

Inserito nel preambolo, `\includeonly` dice a LaTeX di elaborare solo i file elencati continuando a leggere i dati `.aux` salvati di tutti gli altri. La compilazione diventa notevolmente più veloce e poiché le etichette e il conteggio delle pagine degli altri capitoli vengono riprodotti dai relativi file `.aux`, i riferimenti incrociati e la numerazione nel capitolo che stai scrivendo rimangono corretti. Questa seconda metà è la ragione per preferirlo rispetto al commento delle righe `\include`, che dimentica completamente gli altri capitoli e trasforma ogni `\ref` in essi in `??`.

Commenta la riga `\includeonly` per le build complete ed esegui sempre una compilazione completa prima di condividere un PDF, poiché i dati `.aux` obsoleti possono rimanere indietro rispetto alle modifiche apportate nei capitoli esclusi. Per sapere quali file nella cartella risultante sono tuoi e quali vengono generati, vedi [i file in un progetto reale](/learn/latex-file-types/).