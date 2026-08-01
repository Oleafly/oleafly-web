---

title: "Caselle del diagramma di flusso allineate"
description: "libreria di posizionamento in modo che le colonne condividano un bordo."
category: "draw-in-tex"
order: 2
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Caselle del diagramma di flusso allineate

Un diagramma di flusso sembra amatoriale esattamente per una ragione: le scatole quasi si allineano. TikZ evita il problema strutturalmente, perché ogni scatola è posizionata rispetto a un'altra, quindi una colonna di scatole condivide un asse per costruzione anziché per occhio. Il secondo ingrediente è uno stile con nome, quindi tutte le scatole concordano sulla forma e sulla dimensione minima. Ecco un flusso verticale in tre fasi:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[
 box/.style={draw, rounded corners, align=center, minimum width=2.8cm},
 node distance=10mm and 14mm
]
\node[box] (i) {Input};
\node[box, below=of i] (p) {Process};
\node[box, below=of p] (o) {Output};
\draw[-Latex] (i) -- (p);
\draw[-Latex] (p) -- (o);
\end{tikzpicture}
```

## Definire uno stile una volta

La riga `box/.style={...}` crea uno stile riutilizzabile chiamato `box`. I suoi contenuti sono opzioni di nodo ordinarie: `draw` dà al nodo un bordo, `angoli arrotondati` lo ammorbidisce, `align=center` centra il testo su più righe all'interno del nodo e `minimum width=2.8cm` forza ogni riquadro almeno a quella larghezza in modo che le etichette corte non si riducano in riquadri minuscoli. Da quel momento in poi, `\node[box]` applica l'intero set. Quando desideri un colore di riempimento o una larghezza maggiore, modifica una riga e l'intero grafico verrà aggiornato. Questo è un diagramma che mantieni, non uno che ridisegna.

## Spaziatura in due direzioni

`node distance=10mm e 14mm` imposta gli spazi predefiniti utilizzati dalla libreria `posizionamento`: il primo valore è la distanza verticale, il secondo quella orizzontale. Fatto ciò, `below=of i` posiziona la casella del processo 10 mm sotto la casella di input, da bordo a bordo e perfettamente centrata su di essa. Una seconda colonna utilizzerebbe "right=of p" e atterrerebbe 14 mm di lato. Poiché ogni posizionamento concatena un nodo esistente, inserire un passaggio significa aggiungere un nodo e aggiornare un riferimento "sotto=di". Tutto a valle cambia con esso. Puoi anche sovrascrivere la distanza per nodo, come in "sotto=15 mm di i".

## Collegamento dei passaggi

Ogni `\draw[-Latex] (i) -- (p);` disegna una freccia da un nodo con nome a quello successivo, con `-Latex` che seleziona una punta di freccia solida dalla libreria `arrows.meta` all'estremità di destinazione. Le frecce si collegano automaticamente ai confini del nodo. Per un ramo decisionale, attingi da ancore specifiche, ad esempio "(p.est)" per partire dal lato destro, e percorri con curve come "-- ++(2,0) |-" una volta che la carta ha bisogno di angoli.

L'output di TikZ non viene visualizzato in queste anteprime in-page, quindi compila lo snippet per vederlo. L'errore classico nei diagrammi di flusso è posizionare alcune caselle con coordinate assolute "solo per questa volta": quelle caselle sono quelle che risultano disallineate dopo la modifica successiva. Mantieni ogni posizionamento relativo e consulta [nodi e frecce](/learn/tikz-nodes-arrows/) per le opzioni di posizionamento sottostanti.