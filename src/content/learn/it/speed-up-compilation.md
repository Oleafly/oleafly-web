---

title: "Attesa più breve per il PDF"
description: "Le cifre in bozza includono solo, TikZ esternalizza, CPU locale."
category: "long-form"
order: 5
level: "intermediate"
tags: ["thesis", "compile"]
featured: false
updated: 2026-07-25
---

# Attesa più breve per il PDF

Una tesi che impiega novanta secondi per essere compilata cambia il modo in cui scrivi. Smetti di ricompilare dopo piccole modifiche, gli errori si accumulano invisibili e il ciclo di feedback che rende piacevole LaTeX scompare. Prima di ottimizzare, sappi dove va il tempo. Nella maggior parte dei documenti lunghi non è il numero di pacchetti ma una manciata di risorse pesanti, soprattutto immagini di grandi dimensioni e complesse immagini TikZ, a dominare la build. Le tecniche seguenti attaccano direttamente quelle.

## Salta le figure durante la stesura

L'opzione "bozza" fa sì che LaTeX sostituisca ogni immagine con una casella vuota della stessa dimensione, preservando il layout e le interruzioni di pagina saltando l'elaborazione dell'immagine:

```latex
\documentclass[draft]{article}
```

La "bozza" a livello di classe contrassegna anche le linee troppo piene con barre nere, che alcune persone trovano utili e altre trovano rumorose. Per limitare l'effetto alle immagini, passare invece l'opzione al pacchetto, come `\usepackage[draft]{graphicx}`, o a un singolo colpevole con `\includegraphics[draft]{...}`. Ricordarsi di rimuoverlo prima di condividere un PDF, poiché una bozza di build sembra danneggiata a chiunque non conosca l'opzione. Indipendentemente dalla modalità bozza, ridimensiona le fotografie enormi una volta, come descritto in [rilascia una figura](/learn/insert-images/), perché un'immagine da 40 megabyte ti costa per sempre ad ogni compilazione.

## Compila solo il capitolo corrente

Se i tuoi capitoli risiedono in file separati inseriti con `\include`, il comando `\includeonly` limita la compilazione ai file da te nominati:

```latex
\includeonly{chapters/04-results}
```

Inseriscilo nel preambolo e LaTeX compilerà solo quel capitolo mentre legge i file `.aux` degli altri, in modo che i numeri di pagina e i riferimenti incrociati dal resto del documento rimangano più o meno corretti. Questo è il risparmio più grande per una tesi, poiché trasforma abitualmente una build di un minuto in pochi secondi. Funziona solo con `\include`, non con `\input`, che è uno dei motivi per strutturare documenti lunghi come descritto in [divisione di un documento in file](/learn/split-chapter-files/).

## Memorizza nella cache le immagini costose

Le immagini di TikZ vengono ridisegnate da zero ad ogni compilazione. La libreria `external`, caricata con `\usetikzlibrary{external}` più `\tikzexternalize`, compila ogni immagine nel proprio PDF una volta e la riutilizza finché il codice non cambia. La configurazione ha spigoli vivi e l'alternativa manuale di spostare immagini di grandi dimensioni in file autonomi funziona altrettanto bene; entrambi sono trattati in [TikZ autonomo in PDF o PNG](/learn/tikz-export/).

## Meno passaggi, stiratura più veloce

La risoluzione della bibliografia e dei riferimenti incrociati richiede più passaggi, ma durante la stesura della prosa raramente ne hai bisogno, quindi è sufficiente un singolo passaggio rapido e l'intera sequenza può attendere finché non controlli i riferimenti. Anche l'hardware e la località contano: un motore locale viene compilato sulla tua CPU senza caricamento o coda, ed è così che Oleafly esegue le build.

Applica `\includeonly` e crea una bozza di figure insieme e anche una tesi di grandi dimensioni di solito ritorna in pochi secondi, che è il punto in cui inizi di nuovo la ricompilazione dopo ogni paragrafo.