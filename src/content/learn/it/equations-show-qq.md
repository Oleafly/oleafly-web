---

title: "Punti interrogativi al posto dei numeri"
description: "Le etichette necessitano di un altro passaggio; posizionamento dell'etichetta dopo le didascalie."
category: "log-literacy"
order: 5
level: "beginner"
tags: ["errors", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Punti interrogativi invece di numeri

Compila e dove dovrebbe essere una figura o un numero di equazione, il PDF mostra `??`. Non è un errore nella tua fonte. È il modo in cui LaTeX esegue il rendering di un riferimento che non è ancora in grado di risolvere e la correzione di solito viene semplicemente compilata di nuovo.

## Perché un passaggio non è sufficiente

LaTeX legge il documento dall'alto al basso in un unico passaggio. Quando incontra un `\label`, scrive il numero corrente nel file `.aux`; quando incontra un `\ref`, cerca il numero nel file `.aux` scritto dall'esecuzione precedente. In una nuova compilazione non c'è alcuna esecuzione precedente, quindi ogni riferimento viene stampato come `??`. Il secondo passaggio legge il file `.aux` completato e inserisce i numeri. Il compilatore in bundle di Oleafly esegue nuovamente i passaggi automaticamente finché i numeri non si sistemano, ma se guidi `pdflatex` a mano, la seconda compilazione è il tuo lavoro.

## Quando ?? sopravvive ad un secondo passaggio

Se i punti interrogativi persistono, esegui tre controlli. Per prima cosa, confronta l'ortografia di `\ref` con quella di `\label` carattere per carattere; le etichette fanno distinzione tra maiuscole e minuscole e uno spazio vagante conta. In secondo luogo, controlla dove si trova l'etichetta. `\label` registra il valore del contatore più recente, e in un float è `\caption` che fa avanzare il contatore, quindi l'etichetta deve venire dopo la didascalia:

```latex
\begin{figure}
  \centering
  \includegraphics[width=0.7\textwidth]{plot.pdf}
  \caption{Convergence of the estimator.}
  \label{fig:convergence}
\end{figure}

Figure~\ref{fig:convergence} shows the effect.
```

Un'etichetta posta prima della didascalia viene compilata senza problemi ma rileva il contatore sbagliato, solitamente la sezione corrente, quindi il riferimento stampa un numero plausibile ma sbagliato anziché `??`. Quella variante è peggiore perché è facile non notarla. In terzo luogo, se il file `.aux` è stato cancellato durante l'esecuzione o una compilazione è stata interrotta, le etichette registrate potrebbero essere incomplete; ricompilare da uno stato pulito.

## Lettura degli avvertimenti

Il log ti dice in quale caso ti trovi. "C'erano riferimenti non definiti" significa che almeno un `\ref` non ha trovato nulla. "Le etichette potrebbero essere cambiate. Eseguire nuovamente per ottenere i riferimenti incrociati corretti" significa che un altro passaggio risolverà il problema. "Label moltiplicato definito" significa che due comandi `\label` condividono un nome e LaTeX ne usa silenziosamente uno, quindi rinomina finché ogni etichetta non è unica. Una convenzione di denominazione con i prefissi `eq:`, `fig:` e `tab:` rende rare le collisioni e rende più semplice la ricerca della fonte; il flusso di lavoro dell'etichetta stesso è trattato in [numeri e puntatori per equazioni](/learn/number-equations/).