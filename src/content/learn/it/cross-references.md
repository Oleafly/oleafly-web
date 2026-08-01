---

title: "Indica altre parti del PDF"
description: "label e ref, oltre a awaref per i nomi automatici."
category: "paper-bones"
order: 5
level: "beginner"
tags: ["structure", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Punta ad altre parti del PDF

Digitare "vedi Figura 3" a mano è una promessa che non puoi mantenere. Aggiungi una cifra all'inizio del foglio e ogni numero digitato a mano dopo che è sbagliato. LaTeX risolve questo problema con un meccanismo in due parti: `\label` attribuisce un nome a tua scelta a un oggetto numerato e `\ref` stampa il numero con cui quell'oggetto è finito. Fai riferimento ai nomi e il compilatore mantiene i numeri onesti.

## Etichetta e rif

```latex
\section{Methods}\label{sec:methods}
\begin{equation}\label{eq:main} ... \end{equation}
\begin{figure}
 ...
 \caption{...}\label{fig:pipeline}
\end{figure}

See Section~\ref{sec:methods}, Eq.~\eqref{eq:main}, and Figure~\ref{fig:pipeline}.
```

`\label{sec:methods}` registra il numero assegnato più recentemente, qui la sezione, sotto la chiave `sec:methods`. Successivamente, `\ref{sec:methods}` stampa quel numero e `\eqref` è la variante amsmath che aggiunge la convenzione delle parentesi per le equazioni, stampando "(1)" anziché "1".

Due dettagli in questo esempio contano molto. Innanzitutto, all'interno di una figura l'etichetta deve venire dopo `\caption`, perché la didascalia è ciò che fa avanzare il contatore delle figure; un'etichetta posta prima riprende invece silenziosamente il numero della sezione corrente. In secondo luogo, `~` in `Figure~\ref{...}` è uno spazio unificatore, che mantiene la parola e il suo numero sulla stessa riga invece di lasciare che "Figure" termini una riga e "3" inizi quella successiva.

I prefissi `sec:`, `fig:` e `eq:` sono pura convenzione. LaTeX non li richiede, ma rendono le chiavi leggibili e consentono al completamento automatico dell'editor di raggruppare le etichette per tipo.

## Perché vedi??

Alla prima compilazione dopo l'aggiunta di un'etichetta, `\ref` stampa `??`. I numeri vengono risolti tramite il file `.aux` scritto durante l'esecuzione precedente, quindi una nuova etichetta necessita di un'altra compilazione per apparire; [perché compili più di una volta](/learn/compile-to-pdf/) spiega il meccanismo. Un `??` che sopravvive a due compilazioni consecutive significa quasi sempre che la chiave in `\ref` non corrisponde alla chiave in `\label`.

## intelligentef scrive la parola per te

Con intelligentef (carica dopo hyperref):

```latex
\usepackage{cleveref}
\cref{fig:pipeline}
```

`\cref{fig:pipeline}` stampa "Figura 3", il nome del tipo incluso, e si adatta se invece l'etichetta risulta essere una tabella o un'equazione. `\Cref` mette in maiuscolo l'inizio della frase e `\cref{eq:a,eq:b,eq:c}` comprime un elenco in un intervallo. Notare l'ordine di caricamento: Cleveref è uno dei pochi pacchetti che devono venire dopo [hyperref](/learn/hyperlinks/), l'inverso della solita regola. Adottatelo presto. Modificare `\cref` in un foglio pieno di frasi "Figure~\ref" scritte a mano è noioso.