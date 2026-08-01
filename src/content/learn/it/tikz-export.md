---

title: "TikZ autonomo in PDF o PNG"
description: "classe autonoma ed esternalizzare le cache."
category: "draw-in-tex"
order: 5
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# TikZ autonomo in PDF o PNG

Un'immagine TikZ normalmente vive all'interno di un documento, ma spesso è necessario il diagramma come file a sé stante: per riutilizzarlo in una serie di diapositive, per consegnarlo a un coautore che lavora in Word, per caricarlo dove è richiesto un PNG o semplicemente per evitare di ricompilare un disegno costoso ad ogni creazione di un documento. La classe di documenti "autonoma" esiste esattamente per questo. Composta un'immagine su una pagina ritagliata in base alle dimensioni dell'immagine:

```latex
\documentclass[tikz,border=2pt]{standalone}
\begin{document}
\begin{tikzpicture}
 \draw (0,0) -- (1,1);
\end{tikzpicture}
\end{document}
```

## Cosa fanno le opzioni della classe

L'opzione "tikz" carica il pacchetto TikZ per te e dice a "standalone" di ritagliare la pagina di output attorno a "tikzpicture", in modo che il PDF risultante sia esattamente grande quanto il disegno, senza margini di pagina. L'opzione `border=2pt` aggiunge un cuscino a due punti su tutti i lati, che impedisce ai tratti che si trovano esattamente sul riquadro di delimitazione di essere eliminati dagli spettatori o dalle stampanti. Compila questo file come qualsiasi documento e l'output sarà un piccolo PDF ritagliato contenente solo il diagramma.

Preferisco il PDF perché è vettoriale: si adatta a qualsiasi dimensione senza sfocare. Trascinandolo in un altro documento con `\includegraphics` funziona come descritto in [una pagina PDF come grafica](/learn/include-pdf-as-figure/). Quando è veramente necessaria una copia raster, converti il ​​PDF compilato anziché ricreare il disegno. Strumenti da riga di comando come `pdftoppm -png -r 300 figure.pdf figure` producono un PNG a 300 dpi e `pdf2svg` o Inkscape producono SVG. Esporta a 300 dpi o più se il PNG verrà stampato.

## Memorizzazione nella cache delle immagini con esternalizzazione

All'interno di un documento di grandi dimensioni, le immagini di TikZ vengono ridisegnate a ogni compilazione e una manciata di trame complesse possono dominare il tempo di costruzione. La libreria "esterna" risolve questo problema compilando ogni immagine nel proprio PDF una volta, quindi riutilizzando il file memorizzato nella cache finché il codice dell'immagine non cambia:

```latex
\usetikzlibrary{external}
\tikzexternalize[prefix=tikz-cache/]
```

L'opzione "prefisso" mantiene i file generati nella propria cartella. L'esternalizzazione esegue il compilatore in una modalità che genera sottocompilazioni, quindi necessita dell'escape della shell abilitato e interagisce male con alcune configurazioni. Se ti dà fastidio, sposta ogni immagine grande nel proprio file "autonomo" e includi i PDF compilati. Ciò ti offre la stessa memorizzazione nella cache manuale, con meno macchinari. I tempi di compilazione in generale sono trattati in [attesa più breve per il PDF](/learn/speed-up-compilation/).

Un errore comune merita un avvertimento: non eseguire lo screenshot di un diagramma renderizzato per ottenere un PNG. Gli screenshot catturano la risoluzione dello schermo, che appare accettabile nell'anteprima della diapositiva e sfocata ovunque. Converti dal PDF, dove la risoluzione è tua scelta.