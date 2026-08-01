---

title: "Elenchi puntati, numeri ed elenchi di definizioni"
description: "dettagliare, enumerare, descrivere, annidare ed etichette di articoli personalizzate."
category: "type-and-shape"
order: 4
level: "beginner"
tags: ["formatting", "lists"]
featured: false
updated: 2026-07-25
---

# Elenchi puntati, numeri ed elenchi di definizioni

Le liste in LaTeX sono ambienti: ne apri una con `\begin{...}`, la chiudi con `\end{...}` e contrassegni ogni voce con `\item`. LaTeX gestisce quindi la numerazione, i punti elenco, il rientro e la spaziatura per te. Quest'ultima parte è il punto. Non si rinumera mai nulla a mano e se si elimina la terza voce di un elenco numerato, le voci da quattro a dieci diventano silenziosamente da tre a nove.

## I tre ambienti di elenco

```latex
\begin{itemize}
 \item Bullet
\end{itemize}

\begin{enumerate}
 \item Numbered
\end{enumerate}

\begin{description}
 \item[Term] Definition style
\end{description}
```

"itemize" produce un elenco puntato non ordinato ed è la scelta giusta quando le voci non hanno una sequenza, come un elenco di presupposti. "enumerate" numera automaticamente ogni voce, che è ciò che desideri per i passaggi che si verificano in ordine o per gli elementi a cui prevedi di fare riferimento. Puoi anche inserire `\label` dopo un `\item` in un'enumerazione e fare riferimento al suo numero in seguito con `\ref`, proprio come faresti con una sezione.

"descrizione" è il meno conosciuto dei tre ma molto utile. Ogni `\item` accetta un argomento opzionale tra parentesi quadre e tale argomento viene stampato in grassetto come etichetta seguito dal testo della definizione. È l'ambiente naturale per glossari, elenchi di notazioni o qualsiasi struttura "termine: spiegazione".

## Nidificazione

Ambienti Nest per elenchi multilivello. Inserisci un blocco `\begin{itemize} ... \end{itemize}` completo all'interno di un `\item` di un elenco esterno e LaTeX lo indenterà e cambierà automaticamente il simbolo del punto elenco. Lo stesso vale per "enumerate", dove l'annidamento cambia lo stile di numerazione a ogni livello: prima i numeri arabi, poi le lettere, quindi i numeri romani. LaTeX supporta quattro livelli di annidamento, che sono più di quelli richiesti da qualsiasi documento leggibile. Se ti ritrovi a tre livelli di profondità, il materiale probabilmente vorrà invece essere prosa o una tabella.

## Etichette personalizzate

Ogni singolo elemento può sovrascrivere il proprio indicatore con l'argomento opzionale: `\item[(a)]` stampa "(a)" invece del punto elenco o del numero. Questo è utile per casi isolati, ma se desideri rinnovare l'intero elenco, la modifica manuale di ogni elemento vanifica l'automazione. Per questo, carica il pacchetto `enumitem`, che ti permette di scrivere cose come `\begin{enumerate}[label=(\alph*)]` per rietichettare l'intero elenco in un unico posto e ti dà anche opzioni per ridurre la spaziatura verticale.

Un errore comune dei principianti è lasciare una riga vuota tra le voci `\item` sperando di distanziarle. La riga vuota è innocua all'interno di un elenco, ma non fa nulla a livello visivo. La spaziatura è controllata dall'ambiente elenco stesso o dalle opzioni "enumitem". Un altro: ogni ambiente elenco deve contenere almeno un `\item` prima di qualsiasi testo, altrimenti riceverai l'errore confuso "Qualcosa non va, forse un \item mancante". Puoi sperimentare tutti e tre gli ambienti nel [parco giochi live](/live/).