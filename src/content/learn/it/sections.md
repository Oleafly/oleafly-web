---

title: "Titoli che si numerano"
description: "dalla sezione al paragrafo, forme con asterisco, profondità secnum."
category: "paper-bones"
order: 2
level: "beginner"
tags: ["structure"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Sections check'
  questions:
    - prompt: 'What does \section{Introduction} mainly do?'
      choices:
        - 'Only bold the next paragraph'
        - 'Print a numbered heading and register it for the TOC / PDF outline'
        - 'Start a new PDF file'
        - 'Insert a citation'
      answer: 'B'
      level: beginner
    - prompt: 'How do you get an unnumbered section heading?'
      choices:
        - '\section*{...}'
        - '\section[none]{...}'
        - '\unnumber{\section{...}}'
        - 'Just write \textbf{...}'
      answer: 'A'
      level: beginner
    - prompt: 'Why use real heading commands instead of hand-bolded lines?'
      choices:
        - 'Bold is illegal in LaTeX'
        - 'Headings drive numbering, the TOC, and navigation. Fake bold doesn''t.'
        - 'Manual bold compiles faster'
        - 'Sections can''t hold math'
      answer: 'B'
      level: beginner
    - prompt: 'What''s the usual next level under \section?'
      choices:
        - '\chapter (even in article)'
        - '\subsection'
        - '\maketitle'
        - '\bibliography'
      answer: 'B'
      level: beginner
---

# Intestazioni numerate

In un elaboratore di testi, numerate le intestazioni a mano e rinumerate manualmente ogni volta che ne spostate una. LaTeX si rifiuta di permetterti di farlo. Dichiari cos'è ogni titolo, una sezione, una sottosezione o un capitolo, e la numerazione si prende cura di se stessa. Inserisci una nuova sezione al centro del tuo documento e tutto ciò che segue viene rinumerato nella compilazione successiva, insieme a ogni riferimento incrociato e ogni voce del sommario che punta ad essa.

## La gerarchia

```latex
\part{...} % book
\chapter{...} % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
```

Questi comandi formano una scala fissa. `\section` è il cavallo di battaglia quotidiano nella classe `article`, con `\subsection` e `\subsubsection` annidati sotto di esso. `\chapter` esiste solo nelle classi `report` e `book`, motivo per cui incollare i capitoli di tesi in un modello di articolo fallisce con una sequenza di controllo non definita. "\part" si trova sopra i capitoli ed è raro al di fuori dei libri lunghi. `\paragraph` è quello strano: produce un titolo in grassetto sulla stessa riga del testo successivo invece di un titolo su una riga a parte, cosa che sorprende quasi tutti la prima volta.

Ogni comando prende il testo dell'intestazione tra parentesi graffe, lo stampa nel carattere e nella dimensione scelti dalla classe, lo numera e lo registra in modo che `\tableofcontents` possa trovarlo in seguito. Non stilizzare mai i titoli in linea. Se desideri caratteri di intestazione diversi, questa è una decisione a livello di documento presa nel preambolo.

## Soppressione dei numeri

I moduli con asterisco sopprimono i numeri: `\section*{Ringraziamenti}`. Inoltre, l'asterisco mantiene l'intestazione fuori dal sommario e completamente fuori dalla sequenza di numerazione, quindi la sezione successiva continua come se quella contrassegnata con l'asterisco non fosse presente. Questo è esattamente ciò che desideri per i ringraziamenti, una prefazione o una conclusione autonoma in un breve articolo. Se una sezione speciale dovesse ancora apparire nel sommario, c'è una soluzione di una riga trattata nella [lezione del sommario](/learn/table-of-contents/).

## Controllo della profondità di numerazione

```latex
\setcounter{secnumdepth}{2}
\setcounter{tocdepth}{2}
```

`secnum Depth` decide la profondità della numerazione. In "articolo", le sezioni sono di livello 1, le sottosezioni di livello 2 e le sottosottosezioni di livello 3, quindi impostando il contatore su sezioni e sottosezioni a 2 numeri, lascia i titoli delle sottosezioni non numerati mantenendo la loro formattazione. "toc Depth" ha la stessa idea per il sommario: controlla quanto è profondo l'elenco del TOC, indipendentemente da ciò che viene numerato nella pagina. Entrambe le righe appartengono al preambolo.

Un errore comune è saltare i livelli, ad esempio saltare da `\section` direttamente a `\subsubsection` perché ti piace l'intestazione più piccola. La numerazione funziona ancora ma produce risultati strani come "1.0.1" e i lettori perdono traccia della struttura. Scegli i livelli di intestazione per il significato e lascia che sia la classe a gestirne l'aspetto. Se non sei sicuro di come si incastri la struttura del tuo documento, [la lezione sulla struttura del documento](/learn/document-skeleton/) la esamina.