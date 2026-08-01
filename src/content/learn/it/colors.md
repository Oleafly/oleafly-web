---

title: "Colore che sopravvive alla stampa"
description: "xcolor, specifiche HTML e utilizzo del colore per segnalare quando i diari diventano in scala di grigi."
category: "type-and-shape"
order: 6
level: "beginner"
tags: ["formatting", "color"]
featured: false
updated: 2026-07-25
---

# Colore che sopravvive alla stampa

Il colore in LaTeX proviene da un pacchetto, "xcolor". Ti offre colori con nome, specifiche esatte dei colori, riquadri di sfondo e un modo per definire la tua tavolozza. Il corpo del testo nei diari è quasi sempre nero, quindi ne hai bisogno meno spesso di quanto potresti pensare. Si ripaga comunque con diapositive, bozze con annotazioni visibili e tutto ciò che deve corrispondere alla tavolozza di un'organizzazione.

## I comandi

```latex
\usepackage{xcolor}
\textcolor{red}{warning}
\textcolor[HTML]{2563EB}{brand blue}
\colorbox{gray!15}{highlighted}

\definecolor{brand}{HTML}{2563EB}
```

`\textcolor{red}{warning}` colora solo il testo nel suo secondo argomento, utilizzando uno dei nomi predefiniti di xcolor; "rosso", "blu", "grigio", "verde acqua" e qualche dozzina di altri funzionano immediatamente. Quando un nome non è sufficientemente preciso, il modello opzionale "[HTML]" accetta un codice esadecimale a sei cifre, la stessa forma che ti viene consegnato da un web designer o da una guida di stile, quindi "2563EB" riproduce esattamente un blu specifico. Tieni presente che xcolor vuole che le cifre esadecimali siano maiuscole e senza `#`.

`\colorbox{gray!15}{evidenziato}` dipinge uno sfondo dietro il testo invece di colorare il testo stesso. L'argomento "gray!15" mostra la sintassi di miscelazione di xcolor: 15 parti di grigio mescolate con 85 parti di bianco, che producono la tinta pallida che viene letta come evidenziazione. La stessa sintassi funziona ovunque sia previsto un colore e puoi concatenarlo, come in "blue!50!black" per un blu più scuro.

## Definisci una volta, usa ovunque

`\definecolor{brand}{HTML}{2563EB}` registra un nome personalizzato. Dopo questa riga, `\textcolor{brand}{...}` funziona come qualsiasi colore incorporato e il valore esadecimale si trova esattamente in un posto. Quando la tavolozza cambia, modifichi una riga di preambolo invece di cercare codici esadecimali grezzi nel documento. Stessa idea delle [macro personalizzate](/learn/custom-commands/): definisci una volta, riutilizza ovunque.

## La scala di grigi è ancora reale

Usa il colore come segnale, non come decorazione, e supponi che alcuni lettori non lo vedano. Molti giornali stampano ancora in scala di grigi, dove il rosso e il blu collassano in grigi simili, e una frazione significativa di lettori ha qualche forma di deficit nella visione dei colori. Regola pratica: il colore può rafforzare una distinzione ma non dovrebbe mai essere l’unica cosa che la porta con sé. Abbina il testo colorato con il grassetto o un simbolo e abbina le linee di trama colorate a marcatori distinti o motivi di trattini.

Ancora una cosa sulla portata. La colorazione manuale dei titoli o del corpo del testo fa sì che il documento sembri fatto in casa e all'interno del modello di una sede verrà comunque ripristinato. Mantieni il colore manuale per i punti in cui significa qualcosa, ad esempio contrassegnare le modifiche richieste dal revisore in una revisione e rimuoverlo prima della versione finale.