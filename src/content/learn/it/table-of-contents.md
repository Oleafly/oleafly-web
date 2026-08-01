---

title: "Sommario, elenchi di figure, elenchi di tabelle"
description: "sommario e perché il secondo passaggio è importante."
category: "paper-bones"
order: 3
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# TOC, elenchi di figure, elenchi di tabelle

Un sommario in LaTeX non è qualcosa che costruisci o mantieni. Rilasci un singolo comando dove vuoi e LaTeX assembla le voci dalle intestazioni che hai già scritto. Lo stesso vale per l'elenco delle figure e l'elenco delle tabelle, che raccolgono didascalie anziché intestazioni. Questo è uno dei casi in cui dichiarare la struttura paga direttamente: rinominare una sezione o spostare una figura e l'introduzione si risolve da sola.

## I tre comandi

```latex
\tableofcontents
\listoffigures
\listoftables
```

`\tableofcontents` stampa il sommario nel punto in cui appare, in genere subito dopo il frontespizio o l'abstract. Ogni `\chapter`, `\section` e `\subsection` numerato viene visualizzato con il suo numero, titolo e pagina, fino alla profondità impostata dal contatore `toc Depth` descritto nella [lezione sui titoli](/learn/sections/). `\listoffigures` e `\listoftables` fanno lo stesso per le didascalie di figure e tabelle, estraendo il testo da ciascun `\caption{...}`. Negli articoli sono insoliti, ma le tesi comunemente li richiedono entrambi, inseriti nelle rispettive pagine dopo il sommario.

## Perché il secondo passaggio è importante

Compila **due volte** dopo le modifiche strutturali. Questa non è superstizione. È così che funziona il meccanismo. Durante una compilazione, LaTeX non può sapere a pagina 2 cosa finirà a pagina 47, quindi scrive ogni intestazione e il suo numero di pagina finale in un file ausiliario (`.toc`, `.lof`, `.lot`) man mano che procede. `\tableofcontents` legge il file rimasto dall'esecuzione precedente. Su un nuovo progetto quel file non esiste ancora, quindi la prima compilazione produce un sommario vuoto. Dopo aver aggiunto o spostato le sezioni, il sommario mostra titoli obsoleti o numeri di pagina errati fino all'esecuzione successiva. La seconda compilazione legge il file appena scritto e tutto si allinea. Gli editor che eseguono latexmk o un wrapper equivalente gestiscono le repliche per te, motivo per cui potresti non averlo mai notato. Se il tuo sommario sembra sbagliato, compilalo ancora una volta prima di eseguire il debug di qualsiasi altra cosa.

## Sezioni speciali e sommario

Le sezioni speciali necessitano di `\addcontentsline{toc}{section}{Titolo}` se devono apparire nel sommario. Un'intestazione con asterisco come `\section*{Ringraziamenti}` salta deliberatamente sia la numerazione che il file dei contenuti, quindi se vuoi che venga elencata aggiungi la voce tu stesso. I tre argomenti del comando sono il file su cui scrivere (`toc`), il livello della voce (`section`) e il testo da visualizzare. Inserisci la riga immediatamente dopo l'intestazione con asterisco in modo che il numero di pagina registrato sia corretto.

Un'abitudine che vale la pena prendere: prima di condividere un PDF, dai un'occhiata al sommario per i segni rivelatori di una build obsoleta, come punti interrogativi, voci mancanti o un'ultima voce che si ferma prima del capitolo finale. Quasi sempre viene risolto con un'altra compilazione. Prenderlo da soli è più economico che prenderlo da un recensore. La stessa danza del file ausiliario alimenta `\ref` e i suoi amici, trattati in [riferimenti incrociati](/learn/cross-references/).