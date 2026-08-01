---

title: "Algoritmi ed elenchi delle fonti"
description: "schizzo dell'algoritmo2e ed elenchi per il codice reale."
category: "field-kits"
order: 3
level: "intermediate"
tags: ["code"]
featured: false
updated: 2026-07-25
---

# Algoritmi ed elenchi di fonti

Gli articoli presentano il codice in due forme distinte e LaTeX ha uno strumento separato per ciascuna. Lo pseudocodice è uno schizzo idealizzato di un algoritmo, composto con parole chiave e matematica, e il pacchetto `algorithm2e` lo gestisce. Gli elenchi dei sorgenti sono codice reale riprodotto alla lettera in un carattere a spaziatura fissa e il pacchetto `listings` li gestisce. Scegliere lo strumento sbagliato è la solita fonte di attrito, quindi aiuta a vederli entrambi.

## Pseudocodice con algoritmo2e

```latex
\usepackage[ruled,vlined]{algorithm2e}
\begin{algorithm}
\caption{Train}
\While{not converged}{
 Update $\theta$\;
}
\end{algorithm}
```

Le opzioni del pacchetto impostano lo stile visivo: `ruled` disegna linee orizzontali sopra e sotto l'algoritmo e posiziona la didascalia in alto, la convenzione che la maggior parte dei locali si aspetta, mentre `vlined` disegna una piccola linea verticale che segna l'estensione di ciascun blocco, quindi l'annidamento rimane leggibile senza rientri pesanti. L'ambiente ``algoritmo` è un float, come una figura, quindi contiene `\caption` che gli fornisce un numero da citare `\ref`.

All'interno, `\While{condition}{body}` compone il ciclo con una parola chiave in grassetto, la condizione e il corpo come un blocco rientrato. `\For`, `\If` e `\Return` seguono lo stesso schema. Le istruzioni terminano con `\;`, che stampa il terminatore della riga e inizia una nuova riga. Dimenticarlo è il classico errore da principiante: le linee corrono insieme. Poiché si tratta del normale LaTeX, la matematica come `$\theta$` funziona in linea, ed è a questo che serve lo pseudocodice: descrivere la regola di aggiornamento in notazione piuttosto che in un linguaggio particolare.

## Codice reale con elenchi

```latex
\usepackage{listings}
\begin{lstlisting}[language=Python]
def f(x):
 return x**2
\end{lstlisting}
```

L'ambiente `lstlisting` riproduce esattamente il suo contenuto, preservando gli spazi bianchi e trattando i caratteri speciali alla lettera, così puoi incollare il codice senza eseguire l'escape di nulla. L'opzione "lingua=Python" attiva l'evidenziazione delle parole chiave per quella lingua e "listings" ne conosce dozzine di altre. Per impostazione predefinita l'output è semplice. La maggior parte delle persone aggiunge un "\lstset{basicstyle=\ttfamily\small,numbers=left}" una tantum nel preambolo per ottenere un carattere a spaziatura fissa di dimensioni ragionevoli con numeri di riga. Per includere un file direttamente invece di incollarlo, `\lstinputlisting[lingual=Python]{train.py}` lo legge dal disco, mantenendo il documento sincronizzato con la fonte effettiva. Se desideri un'evidenziazione colorata e ad alta fedeltà, il pacchetto "minted" è l'alternativa più forte, al costo di richiedere uno strumento esterno e l'escape della shell.

## Scegliere tra loro

Utilizza lo pseudocodice nel corpo del documento per comunicare l'idea e riserva elenchi letterali per gli artefatti in cui il codice esatto è importante, come appendici o descrizioni di strumenti. Un errore comune è posizionare un `lstlisting` all'interno di un frame Beamer senza l'opzione `[fragile]`, che fallisce con un errore opaco; la stessa avvertenza appare in [un primo mazzo Beamer](/learn/beamer-basics/).