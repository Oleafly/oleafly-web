---

title: "I file in un progetto reale"
description: ".tex, .bib, .cls, .sty e la spazzatura generata che non dovresti commettere."
category: "open-the-loop"
order: 4
level: "beginner"
tags: ["basics", "files"]
featured: false
updated: 2026-07-25
---

# I file in un progetto reale

Apri la cartella di qualsiasi progetto LaTeX reale dopo la compilazione e troverai molti più file di quelli che hai scritto. Ciò sorprende la maggior parte dei principianti e la paura di eliminare la cosa sbagliata mantiene le cartelle in disordine per sempre. La distinzione che chiarisce tutto: alcuni file sono sorgenti che modifichi, alcuni sono stili forniti da un modello o pacchetto e il resto è spazio di lavoro generato che il compilatore ricrea ad ogni esecuzione.

## I file che scrivi

I tuoi file `.tex` contengono il documento vero e proprio: testo, sezioni, figure e matematica. Un file ".bib" è il tuo database bibliografico, una voce per articolo o libro che potresti citare; puoi mantenerlo manualmente o esportarlo da un manager di riferimento come Zotero. Questi sono i file di cui vale la pena eseguire il backup e inserire il controllo della versione, perché tutto il resto può essere ricostruito da essi.

## I file forniti da un modello

Un file `.cls` definisce una classe di documento, la cosa che chiami in `\documentclass{...}`. I diari e le conferenze vengono spediti da soli, quindi ogni contributo sembra identico e non ne modifichi quasi mai uno. Un file `.sty` è un pacchetto: macro riutilizzabili e impostazioni caricate con `\usepackage`. Ne scriverai uno solo quando vorrai condividere comandi personalizzati su più documenti. Un file `.bst` descrive uno stile di citazione BibTeX e allo stesso modo viene solitamente inserito semplicemente in una sede.

## I file creati dal compilatore

Il file ".aux" memorizza i dati dei riferimenti incrociati e delle citazioni tra i passaggi di compilazione; non modificarlo mai e sentiti libero di eliminarlo, poiché la prossima compilazione lo riscrive. Il file `.log` registra tutto ciò che ha fatto il compilatore e vale la pena aprirlo solo quando qualcosa va storto. Il `.pdf` è l'output che volevi effettivamente.

| Estensione | Ruolo | Modificare a mano? |
| --- | --- | --- |
| `.tex` | Documenti e capitoli originali | Sì |
| `.bib` | Banca dati bibliografica | Sì (o esportazione da Zotero) |
| `.cls` | Classe documento | Raramente, i modelli dei fornitori |
| `.sty` | Pacchetti/file di stile | Quando scrivi le tue macro |
| `.bst` | Stile BibTeX | Raramente |
| `.aux` | Dati di riferimento incrociato | **No:** generato |
| `.log` | Registro del compilatore | Leggi durante il debug |
| `.pdf` | Uscita | Visualizza/invia |

## Layout del progetto scalabile

```text
paper/
 main.tex
 chapters/
 figures/
 refs.bib
```

Un `main.tex` al livello più alto funge da punto di ingresso, i capitoli risiedono nella loro cartella e vengono inseriti con `\input` o `\include`, le immagini si trovano in `figures/` e la bibliografia rimane in un `refs.bib`. Questo layout rimane gestibile sia che il progetto sia un articolo di quattro pagine o una tesi. [File di capitoli divisi](/learn/split-chapter-files/) mostra come i pezzi si collegano.

Se usi Git, aggiungi `*.aux`, `*.log` e gli altri file generati a `.gitignore` in modo che la cronologia tenga traccia solo della fonte reale. I progetti Oleafly sono semplici cartelle su disco, quindi questo consiglio vale invariato anche lì. L'errore più comune è quello inverso: mentre si cerca uno strano errore di compilazione, eliminare i file `.aux` è spesso la soluzione, perché uno vecchio proveniente da un'esecuzione interrotta può avvelenare ogni compilazione successiva.