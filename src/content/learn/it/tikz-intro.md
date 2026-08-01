---

title: "La tua prima foto su TikZ"
description: "Nodi, bordi, una pipeline a tre scatole che rimane vettoriale."
category: "floats-and-ink"
order: 6
level: "intermediate"
tags: ["tikz", "figures"]
featured: false
updated: 2026-07-25
---

# La tua prima foto su TikZ

TikZ è un linguaggio di disegno che vive all'interno del tuo documento LaTeX. Invece di importare un diagramma esportato da un altro strumento, lo descrivi in ​​testo e il compilatore lo disegna. Il vantaggio è che l'output è una grafica vettoriale che utilizza i caratteri del documento, quindi le etichette corrispondono esattamente al testo circostante e rimangono nitide a qualsiasi ingrandimento. Il costo è che scrivi coordinate e opzioni invece di trascinare caselle. Per i diagrammi costruiti con riquadri e frecce, di solito vale la pena scendere a compromessi. Ecco una pipeline composta da tre riquadri, la prima immagine canonica:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[node distance=1.5cm]
 \node[draw, rounded corners] (a) {Input};
 \node[draw, rounded corners, right=of a] (b) {Model};
 \node[draw, rounded corners, right=of b] (c) {Output};
 \draw[-Latex] (a) -- (b);
 \draw[-Latex] (b) -- (c);
\end{tikzpicture}
```

## Nodi

Un nodo è un pezzo di contenuto, solitamente testo, posizionato in una posizione, facoltativamente con una forma disegnata attorno ad esso. In `\node[disegna, angoli arrotondati] (a) {Input};` le opzioni tra parentesi quadre dicono di disegnare il bordo del nodo e arrotondare i suoi angoli, la `(a)` dà al nodo un nome a cui puoi fare riferimento in seguito, e `{Input}` è il testo all'interno. Il secondo nodo utilizza `right=of a`, dalla libreria `position`, che lo posiziona a destra del nodo "a" alla distanza impostata da `node distance=1.5cm` nelle opzioni dell'ambiente. Posiziona i nodi l'uno rispetto all'altro anziché in coordinate assolute e l'intero diagramma si adatta quando un'etichetta diventa più lunga.

## Bordi

Un bordo è una linea che collega due punti. Poiché i nodi hanno un nome, li colleghi per nome: `\draw (a) -- (b);` disegna una linea retta dal nodo "a" al nodo "b". TikZ inizia e termina la linea ai bordi dei nodi anziché ai loro centri. L'opzione `[-Latex]` imposta lo stile della punta della freccia dalla libreria `arrows.meta`, dando alla linea una punta di freccia solida nella sua destinazione. Il suggerimento si applica una volta per percorso, alla fine, motivo per cui l'esempio utilizza due comandi `\draw`. Un singolo percorso "(a) -- (b) -- (c)" inserirà una freccia solo in "c".

## Dove andare dopo

Avvolgi il `tikzpicture` in un ambiente `figure` quando necessita di una didascalia e di un numero, esattamente come un'immagine. Il codice TikZ non viene visualizzato in queste anteprime in-page, quindi compila lo snippet in un progetto per vedere il risultato. In Oleafly, il Diagram Composer può anche produrre TikZ modificabile come punto di partenza. L'errore più comune per i principianti è dimenticare il punto e virgola che termina ogni comando TikZ, il che produce un lungo errore confuso. Quando un diagramma supera le tre caselle, continua con [nodi e frecce](/learn/tikz-nodes-arrows/) e [caselle del diagramma di flusso allineate](/learn/tikz-flowchart/).