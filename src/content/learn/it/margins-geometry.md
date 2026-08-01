---

title: "Margini in un unico pacchetto"
description: "geometria per formato pagina, margini, offset di rilegatura."
category: "the-page"
order: 1
level: "beginner"
tags: ["layout"]
featured: true
updated: 2026-07-25
---

# Margini in un unico pacchetto

I margini predefiniti di LaTeX sembrano enormi, specialmente su carta A4. Questo è previsto dalla progettazione: le impostazioni predefinite mirano a una lunghezza di riga confortevole di circa 66 caratteri, che è ottima per la lettura ma raramente ciò che richiede un modello universitario, un diario o il tuo gusto personale. Invece di regolare manualmente una mezza dozzina di lunghezze di basso livello, imposti la pagina con il pacchetto `geometry` e descrivi il layout che desideri in termini semplici.

## I due modi in cui lo utilizzerai effettivamente

```latex
\usepackage[margin=1in]{geometry}
% or
\usepackage[a4paper,top=2.5cm,bottom=2.5cm,left=2.5cm,right=2.5cm]{geometry}
```

La prima forma è quella veloce: `margin=1in` imposta tutti e quattro i margini a un pollice in un'unica opzione e la geometria ricalcola la larghezza e l'altezza del testo in modo che corrispondano. Questo è l'aspetto standard della "tesi americana" e un'impostazione predefinita sensata per le bozze.

La seconda forma spiega tutto. "a4paper" dichiara il formato fisico della carta (usa "letterpaper" per US Letter). Senza di essa, la geometria eredita qualunque cosa assunta dalla classe del documento, che potrebbe non corrispondere a ciò che si aspetta il visualizzatore PDF o la stampante. Le opzioni "top", "bottom", "left" e "right" impostano quindi ciascun margine in modo indipendente, quindi i layout asimmetrici sono facili quanto quelli simmetrici. Puoi mescolare liberamente le unità: "in", "cm", "mm" e "pt" funzionano tutti.

Tutto avviene nel preambolo, prima di `\begin{document}`. Geometry legge le sue opzioni una volta e ne deriva l'intero layout della pagina, motivo per cui è meno soggetto a errori rispetto alla regolazione manuale.

## Offset di rilegatura per le copie stampate

Se il documento verrà stampato e rilegato, il margine interno richiede spazio aggiuntivo in modo che il testo non scompaia nel dorso. Aggiungi `bindingoffset=0.5cm` alle opzioni e la geometria sposterà il blocco di testo verso l'esterno su ogni pagina. In un documento "twoside" alterna correttamente lo spostamento tra le pagine sinistra e destra, il che è noioso da ottenere a mano.

## Cosa non fare

Evita di mischiare la geometria con `\setlength{\textwidth}{...}` manuale a meno che tu non sappia il motivo. Il layout della pagina di LaTeX è una rete di lunghezze interdipendenti (`\textwidth`, `\oddsidemargin`, `\headheight` e simili) e la geometria le gestisce tutte come un unico sistema coerente. La modifica di una lunghezza direttamente dopo aver caricato la geometria di solito mette fuori accordo le altre e si finisce con il testo che fuoriesce dalla pagina o con margini che differiscono da quanto richiesto. Se hai bisogno di una modifica a metà documento, la geometria fornisce `\newgeometry{...}` e `\restoregeometry` esattamente per questo.

Un avvertimento prima di mettere a punto qualsiasi cosa: se stai scrivendo per un diario o una conferenza, il file della classe codifica già i margini richiesti e l'aggiunta della geometria in cima probabilmente violerà il formato di invio. Risparmia la modifica dei margini per i documenti di cui controlli il layout, come una tesi, appunti o un CV, e controlla prima cosa ti dà già la tua [classe di documenti](/learn/document-skeleton/).