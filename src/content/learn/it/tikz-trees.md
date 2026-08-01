---

title: "Alberi e grafici semplici"
description: "sintassi figlio e manopole di spaziatura."
category: "draw-in-tex"
order: 3
level: "advanced"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Alberi e grafici semplici

Le gerarchie emergono costantemente: alberi di analisi, alberi decisionali, layout di file, tassonomie. Disegnare una casella alla volta con il "posizionamento" funziona, ma mantenere i fratelli equamente distribuiti e i livelli uniformemente distanziati a mano è noioso. La libreria "trees" di TikZ ti consente invece di descrivere la gerarchia stessa, utilizzando operazioni "child" nidificate, e calcola il layout per te:

```latex
\usetikzlibrary{trees}
\begin{tikzpicture}[
 every node/.style={draw, circle, minimum size=7mm},
 level distance=12mm,
 sibling distance=18mm
]
\node{A}
 child{node{B}}
 child{node{C}
 child{node{D}}
 child{node{E}}};
\end{tikzpicture}
```

## Lettura della sintassi figlio

L'immagine contiene una singola affermazione. Inizia con la radice, `\node{A}`, e ogni `figlio{...}` ad essa collegato dichiara un sottoalbero. Un figlio solitamente contiene un `nodo{...}` per la propria etichetta e può contenere ulteriori operazioni `child`, che è il modo in cui `C` ottiene i figli `D` ed `E`. L'annidamento delle parentesi graffe rispecchia l'annidamento dell'albero, quindi puoi leggere la struttura direttamente dal rientro. TikZ posiziona ciascun livello sotto il precedente e disegna automaticamente i bordi di collegamento. L'unica istruzione termina con un singolo punto e virgola dopo la parentesi graffa finale. Un punto e virgola mancante o in più all'interno della struttura è la solita causa di errori in questo caso.

## Le tre manopole di layout

Le opzioni in alto controllano l'aspetto e la spaziatura. `every node/.style={draw, circle, Minimum size=7mm}` applica uno stile a tutti i nodi contemporaneamente: ciascuno ha un bordo disegnato, una forma circolare e un diametro minimo di 7 mm in modo che le singole lettere producano cerchi uniformi. `level distance=12mm` imposta lo spazio verticale tra un genitore e i suoi figli. "distanza fratelli=18mm" imposta lo spazio orizzontale tra figli adiacenti dello stesso genitore.

La distanza tra fratelli è la manopola che regolerai maggiormente. La libreria "alberi" riserva la stessa larghezza per ogni sottoalbero a un dato livello, quindi i sottoalberi larghi possono entrare in collisione se il valore è troppo piccolo. Il rimedio standard è ampliare la spaziatura vicino alla parte superiore, dove i sottoalberi sono più ampi, con impostazioni per livello come `level 1/.style={sibling distance=36mm}` e `level 2/.style={sibling distance=18mm}`. Se le tue etichette differiscono molto in larghezza, passa dai cerchi ai rettangoli rimuovendo "cerchio" dallo stile condiviso.

## Oltre i piccoli alberi

I bordi acquisiscono lo stile tramite `edge from parent/.style`, ad esempio per aggiungere punte di freccia o linee più spesse. Per alberi che superano circa una dozzina di nodi, o per grafici generali con cicli, la libreria `alberi` diventa limitante. Il pacchetto "foresta" gestisce alberi di grandi dimensioni con imballaggio automatico. La libreria `graphs` con gli algoritmi `graphdrawing` copre grafici arbitrari, sebbene quel percorso richieda LuaLaTeX. TikZ non viene visualizzato in queste anteprime in-page, quindi compila l'esempio per vedere il layout. Inizia con le nozioni di base in [la tua prima immagine TikZ](/learn/tikz-intro/) se questa sintassi è nuova.