---

title: "Celle che si estendono su righe o colonne"
description: "multicolonna, multiriga, cmidrule sotto intestazioni raggruppate."
category: "float-surgery"
order: 2
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Celle che si estendono su righe o colonne

Le tabelle reali spesso necessitano di celle unite. Un'intestazione come "Punteggi" che si trova sopra due colonne metriche si estende su colonne e un nome di modello che si applica a due righe di risultati si estende su righe. LaTeX gestisce le due direzioni con strumenti diversi: `\multicolumn` è integrato, mentre `\multirow` proviene dal pacchetto con lo stesso nome. Ecco una tabella compatta che li utilizza entrambi, più una regola parziale da `booktabs`:

```latex
\usepackage{multirow,booktabs}
\begin{tabular}{lcc}
 \toprule
 & \multicolumn{2}{c}{Scores} \\
 \cmidrule(lr){2-3}
 Model & Acc & F1 \\
 \midrule
 \multirow{2}{*}{Ours} & 0.9 & 0.88 \\
 & 0.91 & 0.89 \\
 \bottomrule
\end{tabular}
```

## Colonne estese

`\multicolumn{2}{c}{Scores}` sostituisce due celle ordinarie con una. Il primo argomento è quante colonne assorbire, il secondo è una specifica di colonna solo per questa cella, qui `c` per centrato, e il terzo è il contenuto. Nota l'unico `&` che lo precede: la prima colonna di quella riga è deliberatamente vuota, quindi "Punteggi" inizia nella colonna 2 e copre le colonne 2 e 3. Poiché il secondo argomento sovrascrive il tipo di colonna localmente, `\multicolumn{1}{c}{...}` è anche il trucco standard per centrare una singola cella di intestazione sopra una colonna allineata a sinistra.

## La regola parziale

`\cmidrule(lr){2-3}` disegna una regola orizzontale solo sotto le colonne da 2 a 3, che lega visivamente l'intestazione raggruppata alle sue colonne. L'opzione `(lr)` taglia leggermente la regola alle sue estremità sinistra e destra, in modo che `\cmidrule` adiacenti non si tocchino e vengano letti come marcatori di gruppo separati. Questo è un comando "booktabs" e il taglio è uno dei dettagli che fa sì che queste tabelle sembrino composte anziché disegnate. Lo stile completo delle tre regole è trattato nelle [tabelle delle tre regole](/learn/booktabs-beautiful/).

## Righe estese

`\multirow{2}{*}{Ours}` stampa "Ours" centrato verticalmente su 2 righe. Il primo argomento è il conteggio delle righe, il secondo è la larghezza della cella, dove "*" indica la larghezza naturale del contenuto e il terzo è il contenuto stesso. Il comando riserva solo spazio visivo, quindi la seconda riga deve comunque fornire una prima cella vuota, motivo per cui la riga successiva inizia con un semplice `&`. Dimenticando che la cella vuota sposta ogni valore nella riga di una colonna a sinistra e il messaggio di errore di disallineamento punta alla riga sbagliata, quindi controlla prima la riga dopo `\multirow`.

## Un limite pratico

È meglio mantenere le celle unite nelle intestazioni e nei gruppi di righe brevi. Una tabella in cui le celle di dati si estendono in entrambe le direzioni è difficile da leggere e da mantenere, perché ogni riga aggiunta ti costringe a ricontare le estensioni. Se ti ritrovi a nidificare `\multirow` all'interno di `\multicolumn`, considera invece la ristrutturazione della tabella.