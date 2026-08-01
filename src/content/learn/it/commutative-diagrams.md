---

title: "Diagrammi commutativi"
description: "frecce ed etichette tikz-cd senza zuppa di coordinate."
category: "draw-in-tex"
order: 4
level: "advanced"
tags: ["tikz", "math"]
featured: false
updated: 2026-07-25
---

# Diagrammi commutativi

Un diagramma commutativo è una griglia di oggetti uniti da frecce etichettate, l'immagine standard nella teoria delle categorie, nell'algebra e nella topologia. Raw TikZ può disegnarne uno, ma posizionare ogni nodo in base alle coordinate è lento e fragile. Il pacchetto `tikz-cd` racchiude TikZ in una sintassi simile a una matrice: disponi gli oggetti come una tabella e descrivi ciascuna freccia in base alla sua direzione.

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
 A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
 C \arrow[r,"k"'] & D
\end{tikzcd}
```

## Lettura della sintassi

La griglia funziona come una matrice: `&` separa le colonne e `\\` separa le righe, quindi questo diagramma ha A e B nella riga superiore e C e D in quella inferiore. Ogni "\freccia[...]" appartiene alla cella in cui è scritta e punta lontano da essa. La prima opzione è la direzione, scritta con le lettere "r", "l", "u" e "d": "\arrow[r]" va una cella a destra, "\arrow[d]" una cella verso il basso. Le lettere si combinano e si ripetono per diagonali e tratti più lunghi, quindi "rd" è un gradino in basso a destra e "rr" si estende su due colonne.

Un'etichetta tra virgolette circonda la freccia. Per impostazione predefinita si trova su un lato; un numero primo dopo la virgoletta di chiusura, come in `"g"'`, lo gira dall'altra parte. Nell'esempio i numeri primi mantengono tutte e quattro le etichette all'esterno del quadrato, che è la solita disposizione pulita.

## Altre opzioni per le frecce

Ulteriori opzioni si accumulano dopo la direzione e l'etichetta per modificare lo stile della freccia. "hook" piega la coda in una freccia di inclusione, "two heads" raddoppia la testa per una suriezione, "dashed" contrassegna una mappa che stai affermando anziché assumere e "Rightarrow" produce la freccia a doppia asta utilizzata per le trasformazioni naturali. Una tipica freccia con proprietà universale è `\arrow[rd, tratteggiata, "\exists u"']`. Quando un diagramma sembra angusto, le opzioni di spaziatura nell'ambiente aiutano, ad esempio `\begin{tikzcd}[column sep=large]`.

## Note pratiche

`tikz-cd` carica TikZ stesso, quindi non è necessaria alcuna riga `\usepackage{tikz}` separata e i diagrammi vengono compilati con un motore standard e senza strumenti di disegno esterni. L'errore strutturale più comune è una griglia non uniforme: righe con numeri diversi di separatori `&` spostano gli oggetti nelle colonne sbagliate e le frecce finiscono in posti strani. Inizia da un quadrato di lavoro come quello sopra, ingrandiscilo una riga o colonna alla volta e ricompila man mano che procedi. È molto più semplice eseguire il debug dei diagrammi a occhio che dalla sorgente e il [parco giochi live](/live/) ti fornisce quel feedback mentre scrivi.