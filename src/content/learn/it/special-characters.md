---

title: "Personaggi che rompono la fonte"
description: "Come digitare percentuale, dollaro, e commerciale, carattere di sottolineatura, parentesi graffe senza interrompere la riga."
category: "type-and-shape"
order: 7
level: "beginner"
tags: ["formatting", "errors"]
featured: false
updated: 2026-07-25
---

# Caratteri che interrompono la fonte

LaTeX riserva una manciata di caratteri di uso quotidiano come sintassi e digitarne uno dove si intende il carattere letterale interrompe la compilazione o altera silenziosamente l'output. Ogni personaggio riservato ha una via di fuga e l'intero set sta in un tavolino.

| Carattere | Codice |
| --- | --- |
| % | `\%` |
| $ | `\$` |
| & | `\&` |
| # | `\#` |
| _| `\_` |
| { } | `\{` `\}` |
| ~ | `\textasciitilde` |
| \ | `\textbackslash` |

## Ciò che fanno i personaggi senza escape

`%` inizia un commento, quindi tutto da esso fino alla fine della riga viene scartato. Questo è il solito bug "la mia frase è scomparsa": scrivi il 50% in un rapporto e il resto della riga svanisce senza alcun errore. `$` attiva/disattiva la modalità matematica, quindi uno smarrito mette silenziosamente in corsivo il testo o genera errori lontani dall'errore di battitura. `&` è la scheda di allineamento nelle tabelle e nei blocchi `align`; al di fuori di essi fallisce con "Scheda allineamento fuori posto". "#" contrassegna i parametri macro. `_` e `^` appartengono alla modalità matematica e nel testo generano "$ mancanti inseriti", che [ha una propria lezione](/learn/missing-dollar/). `~` è uno spazio unificatore, quindi una tilde digitata in un URL o in un percorso diventa tranquillamente uno spazio. `\` avvia ogni comando, motivo per cui non può sfuggire a se stesso: `\\` è un'interruzione di riga e il carattere letterale necessita di `\textbackslash`.

## La fuga in pratica

Per i primi sei caratteri, l'escape è un prefisso barra rovesciata e funziona allo stesso modo all'interno degli altri comandi:

```latex
The run reached 87\% accuracy; results are in
\texttt{results\_v2.csv}, and the job cost \$40.
```

Tieni presente che il carattere di sottolineatura necessita dell'escape anche all'interno di `\texttt`. I due escape in stile comando, `\textasciitilde` e `\textbackslash`, dovrebbero essere seguiti da `{}` o da uno spazio quando segue una lettera, in modo che il nome del comando non inghiottisca la parola seguente.

Per interi blocchi di codice, percorsi o URL, salta completamente l'escape. `\verb|...|` e l'ambiente `verbatim` stampano i loro contenuti esattamente come sono stati digitati, con ogni carattere speciale disattivato, e `\url{...}` del pacchetto `url` gestisce i collegamenti completi di tilde.

I personaggi che mordono più forte sono quelli che falliscono silenziosamente e `%` è in testa alla lista. Il testo incollato è il solito colpevole: URL, comandi shell e dati finanziari contengono tutti caratteri riservati. Quando una frase scompare dal PDF, cerca in quella riga del sorgente un semplice `%` prima di ogni altra cosa.