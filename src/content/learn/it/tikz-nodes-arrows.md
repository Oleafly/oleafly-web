---

title: "Nodi e frecce"
description: "Nodi con nome, posizionamento relativo, punte delle frecce."
category: "draw-in-tex"
order: 1
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Nodi e frecce

Quasi ogni diagramma TikZ si riduce a due ingredienti. Un nodo è un pezzo di contenuto posizionato, in genere una casella o un cerchio etichettato. Un bordo è una linea o una freccia che collega due nodi. Una volta che puoi posizionare i nodi e unirli, i diagrammi di flusso, le condutture e i diagrammi a blocchi sono tutti lo stesso esercizio di dimensioni diverse. L'esempio seguente posiziona due caselle con nome e disegna una freccia etichettata tra di loro:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}
\node[draw] (src) {Source};
\node[draw, right=2cm of src] (dst) {Sink};
\draw[-{Latex}] (src) -- node[above] {edge} (dst);
\end{tikzpicture}
```

## Denominazione e posizionamento dei nodi

In `\node[draw] (src) {Source};`, le opzioni tra parentesi graffe danno stile al nodo e `draw` significa disegnarne il bordo, senza il quale si ottiene testo mobile. "(src)" è il nome del nodo e "{Source}" è il suo contenuto. Il nome è la parte importante: permette ad altri comandi di fare riferimento a questo nodo senza conoscerne le coordinate.

Il secondo nodo mostra perché è importante. `right=2cm of src` proviene dalla libreria `position` e posiziona `dst` due centimetri a destra di `src`, misurati tra i loro bordi. La libreria fornisce anche `left=of`, `above=of`, `below=of` e combinazioni diagonali come `above right=of`. Costruisci un diagramma in questo modo (ogni nodo relativo a uno esistente) e il layout rimarrà intatto quando il testo cambia dimensione. Le coordinate assolute come `\nodo in (4,2)` hanno ancora degli usi, ma un diagramma costruito su di esse necessita di una rinumerazione manuale ogni volta che cresce una casella.

## Disegnare la freccia

`\draw (src) -- (dst);` disegna una linea retta tra i due nodi con nome e TikZ inizia e termina automaticamente la linea ai bordi dei nodi anziché ai loro centri. L'opzione `[-{Latex}]` specifica le punte delle frecce: niente prima del trattino significa nessuna punta della coda, e `Latex` dopo seleziona una punta di freccia solida dalla libreria `arrows.meta` nella destinazione. Scrivendo `{Latex}-{Latex}` si otterrebbe una freccia a doppia punta.

Il percorso intermedio `node[above] {edge}` è un'etichetta allegata alla linea stessa. Un nodo scritto all'interno di un tracciato viene posizionato in quel punto del tracciato, a metà per impostazione predefinita, e `above` lo sposta appena sopra la linea in modo che il testo non si appoggi sul tratto. Questo è il modo standard per annotare transizioni e flussi di dati.

## Abitudini che ripagano

Dai un nome a ogni nodo, anche in piccoli diagrammi. Non è possibile connettersi ai nodi senza nome e i diagrammi piccoli raramente rimangono piccoli. Preferisco il posizionamento relativo dal "posizionamento" rispetto alle coordinate assolute per lo stesso motivo. Ogni istruzione TikZ termina con un punto e virgola. Ometterne uno è l'errore TikZ più comune e i messaggi spesso puntano ben lontano dal vero problema. Per organizzare molte caselle in righe e colonne ordinate, continua con [caselle del diagramma di flusso allineate](/learn/tikz-flowchart/).