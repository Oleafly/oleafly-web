---

title: "Tipo più grande e più piccolo"
description: "Opzioni di classe come 11pt e opzioni di dimensione locale che non compromettono l'interlinea."
category: "type-and-shape"
order: 2
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Tipo più grande e più piccolo

La dimensione del tipo in LaTeX è impostata su due livelli: una dimensione di base a livello di documento scelta una volta nelle opzioni della classe e opzioni locali per gli intervalli che devono differire. La dimensione di base guida tutto il resto. I titoli, le note a piè di pagina e le dimensioni locali sono tutti definiti in relazione ad esso.

## A livello di documento

```latex
\documentclass[11pt]{article} % 10pt, 11pt, 12pt common
```

L'opzione class imposta la dimensione del corpo del testo. "10pt" è l'impostazione predefinita e "11pt" e "12pt" sono le alternative comuni; le classi standard supportano solo questi tre. La modifica dell'opzione ridimensiona l'intero documento in proporzione, poiché le dimensioni dell'intestazione, le dimensioni delle note a piè di pagina e l'interlinea derivano tutte dalla base. Se hai bisogno di una dimensione base superiore a 12pt, classi come `extarticle` o le classi KOMA-Script accettano una gamma più ampia di opzioni.

## Interruttori locali

```latex
{\large larger} {\Large larger}
{\small smaller} {\footnotesize notes}
{\tiny tiny}
```

Queste sono dichiarazioni piuttosto che comandi con argomenti: `\large` cambia la dimensione da quel punto fino alla fine del gruppo corrente e le parentesi graffe attorno a `{\large large}` sono ciò che ne limita la portata. La scala completa, dal più piccolo al più grande, è `\tiny`, `\scriptsize`, `\footnotesize`, `\small`, `\normalsize`, `\large`, `\Large`, `\LARGE`, `\huge`, `\Huge`. Ogni passaggio corrisponde a una dimensione concreta che dipende dall'opzione della classe, quindi `\large` sotto "12pt" è più grande di "\large" sotto "10pt". Pensa agli interruttori come a passi di distanza dal corpo del testo, non come a dimensioni fisse.

L'interlinea ha una sottigliezza. Un interruttore di dimensione regola la distanza della linea di base solo per i paragrafi che terminano mentre è attivo. Per un intervallo multiparagrafo di dimensioni maggiori, mantieni l'interruzione di paragrafo all'interno del gruppo terminando con "\par" prima della parentesi graffa di chiusura, come in "{\large ... \par}". Altrimenti l'ultimo paragrafo mantiene l'interlinea di dimensione normale sotto le lettere sovradimensionate e le linee entrano in collisione.

## Dimensioni rispetto alla struttura

Resisti all'uso degli interruttori di dimensione per intestazioni false. `\section` e i suoi parenti impostano la dimensione per te, inoltre numerano l'intestazione, la aggiungono al sommario e creano segnalibri PDF. Una riga `{\Large \textbf{...}}` creata manualmente non fornisce nulla di tutto ciò. La stessa idea si applica all'enfasi, trattata in [enfasi senza contrastare il carattere](/learn/bold-italic/). Prenota i cambi di dimensione manuali per esigenze realmente locali, come un'osservazione delle dimensioni di una nota a piè di pagina sotto una tabella o una riga su un frontespizio. Se ogni intestazione in un documento necessita di un restyling, cambia la classe o usa un pacchetto come `titlesec` invece di ridimensionare ogni intestazione manualmente.