---

title: "Scatola orizzontale troppo piena"
description: "Linee che colpiscono il margine e quando preoccuparsene."
category: "log-literacy"
order: 3
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Scatola orizzontale troppo piena

## Il sintomo

Il registro riporta qualcosa come "Overfull \hbox (14.2pt too wide) nel paragrafo alle righe 87--92" e nel PDF una riga di quel paragrafo sporge nel margine destro. Il documento viene comunque compilato, poiché si tratta di un avviso anziché di un errore, ma la linea sporgente è visibile nella stampa e i revisori se ne accorgono. In modalità bozza (`\documentclass[draft]{...}`) LaTeX contrassegna ciascun trasgressore con un rettangolo nero, che lo rende facile da individuare.

## Perché succede

TeX suddivide i paragrafi in righe soppesando ogni possibile punto di interruzione e scegliendo la disposizione con la "cattiveria" totale minore, dove la cattiveria misura quanto gli spazi su una riga hanno dovuto allungarsi o restringersi. A volte non esiste una disposizione accettabile: un URL lungo non contiene alcun punto di interruzione, la matematica in linea viene trattata come quasi indistruttibile o una parola lunga non ha voci di sillabazione. Invece di allungare gli spazi oltre la sua tolleranza e produrre una linea visibilmente discontinua, TeX lascia che la linea sia lunga e te lo dice. La scatola troppo piena è che TeX si rifiuta di rendere brutto il paragrafo in un modo diverso.

## Correzioni, dalle migliori alle più schiette

La soluzione migliore è editoriale. Riformulare la frase, allontanare la parola lunga dalla fine della riga o dividere una frase in due di solito rimuove il problema senza alcun codice e spesso migliora comunque la prosa.

Per gli URL, racchiudi l'indirizzo in `\url{...}` dal pacchetto `url` o `hyperref` in modo che possa interrompersi in corrispondenza di barre e punti e caricare il pacchetto `xurl` quando sono necessarie interruzioni in quasi tutti i caratteri. Per una formula in linea ampia, visualizzala o utilizza un ambiente fragile come "multiline" di "amsmath" quando l'equazione stessa è troppo lunga per la riga.

Due miglioramenti a livello di preambolo aiutano a livello globale. Il caricamento di "microtipo" consente ai caratteri di sporgere leggermente e di espandere leggermente i caratteri, risolvendo molti casi marginali senza che tu te ne accorga. L'impostazione corretta della lingua del documento tramite "babel" o "polyglossia" fornisce a TeX i giusti schemi di sillabazione, poiché una parola che non può sillabare è una parola che non può spezzare.

## Quando prendersi cura

Il numero nell'avviso rappresenta il superamento. Tutto ciò che è inferiore a circa 2pt è invisibile ai lettori e può essere tranquillamente ignorato in una bozza. Vale la pena risolvere decine di punti prima che qualcun altro veda il PDF. Il flusso di lavoro sensato consiste nell'ignorare le caselle troppo piene durante la scrittura, quindi spazzare il registro una volta prima dell'invio e sistemare la manciata che rimane, prima la più grande. Resisti a "\sloppy" e ad altri hack di tolleranza globale: scambiano alcune linee sporgenti con una spaziatura libera e irregolare sull'intero documento.