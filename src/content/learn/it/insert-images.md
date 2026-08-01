---

title: "Inserisci una figura"
description: "graphicx, larghezza, percorsi, PDF vs PNG."
category: "floats-and-ink"
order: 2
level: "beginner"
tags: ["figures"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Figures check'
  questions:
    - prompt: 'Which package gives you \includegraphics?'
      choices:
        - 'amsmath'
        - 'graphicx'
        - 'babel'
        - 'hyperref only'
      answer: 'B'
      level: beginner
    - prompt: 'Why is width=0.8\textwidth a sensible default?'
      choices:
        - 'It always crops the image'
        - 'It scales with the text width, so it still fits if margins change'
        - 'It converts PNG to PDF'
        - 'It turns floating off'
      answer: 'B'
      level: beginner
    - prompt: 'What does float behavior mean for a figure?'
      choices:
        - 'The image is animated'
        - 'LaTeX may move the figure to a better spot on the page, not always right at the source line'
        - 'Images only appear on page 1'
        - 'You can''t add captions'
      answer: 'B'
      level: beginner
    - prompt: 'For plots and diagrams, which format is usually best?'
      choices:
        - 'A full-size 12-megapixel phone JPG'
        - 'Vector PDF (stays sharp when scaled)'
        - 'BMP only'
        - 'Screenshots of equations instead of real math'
      answer: 'B'
      level: beginner
    - prompt: 'Why is [htbp] usually safer than [h] alone?'
      choices:
        - 'It enables color'
        - 'It gives LaTeX fallbacks (here, top, bottom, float page), so figures are less likely to pile up'
        - 'graphicx requires it'
        - 'It turns captions off'
      answer: 'B'
      level: intermediate
---

# Inserisci una cifra

LaTeX non ha supporto per immagini integrato. Tutto proviene dal pacchetto `graphicx`, che fornisce il comando `\includegraphics` e, per convenzione, l'immagine è racchiusa in un ambiente `figure` in modo che possa contenere una didascalia e un numero. Questo è lo schema che utilizzerai centinaia di volte:

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## Cosa fa ogni riga

La riga `\usepackage{graphicx}` va nel preambolo, prima di `\begin{document}`, e deve apparire solo una volta, indipendentemente dal numero di immagini che includi.

L'ambiente `figure` rende l'immagine fluttuante, il che significa che LaTeX sceglie dove posizionarsi invece di inchiodarla in questo punto esatto del testo. Le lettere "[htbp]" rappresentano le tue preferenze di posizionamento: "h" significa qui dove appare il codice, "t" significa la parte superiore di una pagina, "b" significa la parte inferiore di una pagina e "p" significa una pagina separata di float. LaTeX li prova in quest'ordine e prende il primo che produce una pagina decente. Se la tua figura va alla deriva in un punto sorprendente, questo è un comportamento normale del galleggiante e [dove i galleggianti atterrano effettivamente](/learn/position-figures/) spiega come negoziare con esso.

`\centering` centra l'immagine orizzontalmente all'interno del blocco di testo. `width=0.8\textwidth` ridimensiona l'immagine all'80% della larghezza del testo preservandone le proporzioni, che è quasi sempre migliore che specificare una dimensione assoluta in centimetri, perché si adatta se cambiano i margini del documento. Il percorso del file è relativo alla radice del progetto, quindi "figures/pipeline.pdf" indica una cartella "figures" accanto al file ".tex" principale. Infine, `\caption` stampa la didascalia numerata e `\label` registra il numero in modo che `\ref{fig:pipeline}` possa citarlo dal testo. L'etichetta deve essere posta dopo la didascalia, per i motivi trattati in [didascalie ed etichette](/learn/captions-labels/).

## Quale formato di file utilizzare

Preferisci il PDF per qualsiasi cosa vettoriale, ovvero grafici, diagrammi e diagrammi di flusso, perché la grafica vettoriale rimane nitida con qualsiasi zoom e qualsiasi dimensione di stampa. Utilizza PNG per screenshot e altre immagini basate su pixel. JPG è accettabile per le fotografie, dove gli artefatti di compressione sono invisibili. Evita del tutto di incorporare contenuti ricchi di testo come screenshot, poiché risultano sfocati nella stampa e non possono essere cercati.

Ridimensiona anche le fotografie di grandi dimensioni prima di includerle. Una foto da 12 megapixel visualizzata a 8 centimetri di larghezza gonfia il PDF e rallenta ogni compilazione, mentre una versione ridotta a circa 300 dpi nella dimensione stampata sembra identica.

## L'errore da evitare

Non contrastare il float il primo giorno chiedendo "[h]" da solo. LaTeX spesso rifiuterà, quindi riporterà la figura e tutto ciò che c'è dietro fino alla fine del capitolo. Scrivi `[htbp]`, posiziona il codice della figura vicino al paragrafo che per primo fa riferimento ad esso e lascia che i numeri e i riferimenti facciano il tracciamento per te.