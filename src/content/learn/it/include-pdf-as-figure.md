---

title: "Una pagina PDF come grafica"
description: "include grafica con selezione della pagina e pagine pdf per le appendici."
category: "float-surgery"
order: 6
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Una pagina PDF come grafica

Il PDF è il miglior formato di figure che LaTeX può utilizzare. A differenza di PNG o JPG, un PDF memorizza dati vettoriali, quindi le linee e le etichette rimangono nitide a qualsiasi livello di zoom e i caratteri al suo interno viaggiano con il file. Strumenti come Matplotlib, Inkscape e draw.io esportano tutti PDF, il che significa che il diagramma che hai disegnato altrove può essere inserito direttamente nel tuo documento. Ma i PDF portano un problema che le immagini non hanno: un PDF può contenere molte pagine e devi dire a LaTeX quale vuoi.

## Estrazione di una pagina da un PDF multipagina

"\includegraphics" del pacchetto "graphicx" accetta un'opzione "page" insieme alle consuete chiavi di dimensionamento:

```latex
\includegraphics[page=1,width=\textwidth]{diagram.pdf}
```

Qui `page=1` seleziona la prima pagina di `diagram.pdf` e `width=\textwidth` ridimensiona quella pagina per l'intera larghezza del blocco di testo. Se ometti `page`, LaTeX utilizza silenziosamente la pagina uno, che di solito è ciò che desideri ma può sorprenderti quando uno script di stampa scrive diverse figure in un singolo file. Puoi includere lo stesso PDF più volte con valori di "pagina" diversi, una volta per ambiente di figura, ciascuno con la propria didascalia ed etichetta.

Avvolgi il comando in un normale ambiente `figure` in modo che ottenga una didascalia e un numero, esattamente come faresti per [qualsiasi altra immagine](/learn/insert-images/). La pagina inclusa viene ritagliata in base al proprio riquadro di delimitazione, quindi se il PDF di origine ha margini generosi, la figura apparirà imbottita. Riesportalo con un riquadro di delimitazione stretto o ritaglialo una volta con uno strumento come `pdfcrop`, invece di combattere gli spazi bianchi con una spaziatura negativa.

## Inserimento di interi documenti con pagine pdf

A volte non vuoi affatto una cifra. Vuoi che intere pagine, parola per parola, siano inserite nel tuo documento: un PDF supplementare, un modulo firmato, un questionario pubblicato in un'appendice della tesi. Questo è il compito del pacchetto `pdfpages`:

```latex
\usepackage{pdfpages}
\includepdf[pages=-]{supplement.pdf}
```

Il valore `pages=-` indica ogni pagina. Puoi anche scrivere `pages=2-5` per un intervallo o `pages={1,3,7}` per un elenco specifico. Ciascuna pagina inserita riempie la propria pagina di output, mantiene il layout originale e partecipa alla numerazione delle pagine del documento, quindi l'appendice viene letta continuamente. Aggiungi l'opzione `pagecommand={}` se intestazioni o piè di pagina della tua classe di documenti vengono stampati sopra le pagine inserite e desideri che siano soppressi o personalizzati.

## Quale strumento per quale lavoro

Utilizzare `\includegraphics[page=...]` quando il contenuto del PDF deve comportarsi come una figura, ovvero fluttua, porta una didascalia e viene referenziato dal testo. Utilizzare `\includepdf` quando le pagine dovrebbero stare da sole a grandezza naturale. L'errore comune è utilizzare "pdfpages" per un diagramma, che fornisce una pagina intera senza didascalie e senza riferimenti che non è possibile citare con "\ref". Se i lettori vedranno mai "vedi Figura 3", appartiene all'ambiente delle figure.