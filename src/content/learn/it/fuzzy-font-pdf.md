---

title: "Testo sfocato nel visualizzatore PDF"
description: "Digita 3 bitmap, caratteri di contorno, figure vettoriali."
category: "typefaces"
order: 3
level: "intermediate"
tags: ["fonts", "errors"]
featured: false
updated: 2026-07-25
---

# Testo sfocato nel visualizzatore PDF

Il tuo PDF viene compilato in modo pulito, ma il testo appare morbido o frastagliato sullo schermo e l'ingrandimento peggiora la situazione anziché migliorarla. Non c'è niente di sbagliato nel tuo spettatore. Il documento contiene caratteri bitmap. Invece di memorizzare le forme delle lettere come contorni scalabili, le memorizza come griglie di pixel renderizzate con una risoluzione fissa. Nella terminologia PDF questi sono i font Type 3. Stampano in modo accettabile su carta alla risoluzione per cui sono stati generati, motivo per cui il problema è sopravvissuto per decenni, ma sugli schermi risultano sfocati a qualsiasi livello di zoom diverso da quello nativo. I formati di contorno moderni (Type 1, TrueType, OpenType) si adattano in modo pulito perché le forme sono curve matematiche.

## Conferma della diagnosi

Lo zoom è il test rapido: i caratteri di contorno rimangono nitidi all'800%, le bitmap si dissolvono in pixel visibili. Per sicurezza, apri le proprietà del documento nel visualizzatore PDF e guarda il pannello dei caratteri. In Adobe Reader questo è sotto File, quindi Proprietà, quindi Caratteri e qualsiasi carattere elencato come "Tipo 3" è una bitmap. Questo controllo conta oltre l'estetica, perché arXiv e molti editori rifiutano gli invii contenenti caratteri Type 3.

## Da dove provengono le bitmap e le correzioni

La solita fonte è una vecchia configurazione di caratteri. Installazioni TeX molto vecchie hanno reso Computer Modern tramite METAFONT in bitmap, e alcuni pacchetti legacy e stack dell'antica era `\usepackage{times}` utilizzano ancora varianti bitmap. Risolvilo sostituendo i comandi dei caratteri legacy con uno stack moderno:

```latex
\usepackage{newtxtext,newtxmath}
```

Ciò fornisce uno schema di Times con la matematica corrispondente, come dettagliato in [Stack simili a Times, Arial, Helvetica](/learn/times-arial-helvetica/). Se si desidera l'aspetto predefinito anziché Times, `\usepackage{lmodern}` sostituisce Computer Modern con il suo successore, Latin Modern. La compilazione con XeLaTeX o LuaLaTeX e `fontspec` elude completamente il problema, dal momento che questi motori utilizzano caratteri del sistema OpenType che vengono delineati per costruzione. Un motore moderno come Tectonic basato su XeTeX fornito da Oleafly non genera testo di tipo 3 da solo; quando appare lì, il carattere bitmap arriva attraverso un'immagine inclusa.

## La versione in figura dello stesso problema

Il testo sfocato in un PDF non è sempre un carattere del documento. Se i paragrafi sono nitidi ma le etichette all'interno di una trama sono sfocate, la figura stessa è un'immagine raster, in genere uno screenshot PNG di una trama o un diagramma esportato alla risoluzione dello schermo. La soluzione è la stessa idea al livello superiore: esportare le figure come PDF vettoriale dallo strumento di disegno, in modo che anche il loro testo diventi un contorno. La guida al formato è in [rilascia una figura](/learn/insert-images/).

Dopo qualsiasi correzione, controlla nuovamente il pannello dei caratteri anziché fidarti dei tuoi occhi con lo zoom predefinito. Una singola voce di tipo 3 lasciata da una figura o da un pacchetto è sufficiente per respingere un invio.