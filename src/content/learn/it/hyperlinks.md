---

title: "Collegamenti all'interno del PDF"
description: "hyperref, url, href, colori e metadati PDF."
category: "paper-bones"
order: 6
level: "intermediate"
tags: ["structure", "hyperref"]
featured: false
updated: 2026-07-25
---

# Collegamenti all'interno del PDF

Un PDF non è solo carta su uno schermo. Può contenere collegamenti in tempo reale: URL cliccabili, riferimenti incrociati che passano alla figura giusta, citazioni che passano alla bibliografia e una struttura della barra laterale creata dai titoli delle sezioni. In LaTeX, un pacchetto fornisce tutto questo: `hyperref`. Caricalo e ogni voce `\ref`, `\cite` e sommario nel tuo documento diventerà tranquillamente cliccabile, senza modifiche al resto della tua fonte.

## Caricamento e configurazione di hyperref

```latex
\usepackage[colorlinks=true,linkcolor=blue,citecolor=blue,urlcolor=blue]{hyperref}
\url{https://oleafly.com}
\href{https://oleafly.com}{Oleafly}
\hypersetup{pdftitle={My Paper}, pdfauthor={You}}
```

Le opzioni tra parentesi quadre controllano l'aspetto dei collegamenti. Per impostazione predefinita, hyperref disegna un rettangolo colorato attorno a ciascun collegamento, cosa che la maggior parte delle persone trova brutta. L'impostazione di `colorlinks=true` sostituisce invece le caselle con testo colorato e le tre opzioni di colore lo dividono in base al tipo di collegamento: `linkcolor` copre i salti interni come i riferimenti a sezioni e figure, `citecolor` copre le citazioni e `urlcolor` copre gli indirizzi web. Dividerli è importante perché altrimenti un articolo denso di citazioni può trasformarsi in un muro blu.

## URL contro href

I due comandi di collegamento svolgono lavori diversi. `\url{...}` stampa l'indirizzo stesso con un carattere da macchina da scrivere e lo rende cliccabile, che è ciò che vuoi in una bibliografia o in una nota a piè di pagina in cui il lettore dovrebbe vedere dove va il collegamento. `\href{indirizzo}{testo}` nasconde l'indirizzo dietro qualsiasi testo fornito, come un collegamento su una pagina web. Preferisci `\url` nei documenti che potrebbero essere stampati, poiché un'etichetta `\href` non dà a un lettore cartaceo la possibilità di digitare l'indirizzo.

Un vantaggio pratico: `\url` sa come suddividere indirizzi lunghi su righe senza inserire un trattino che corromperebbe l'indirizzo, cosa che un semplice URL con carattere da macchina da scrivere non può fare.

## Metadati PDF

`\hypersetup` ti consente di modificare qualsiasi opzione hyperref dopo il caricamento ed è anche il punto in cui imposti i metadati del documento. I campi "pdftitle" e "pdfauthor" compilano il titolo e l'autore che il tuo lettore PDF mostra nella barra della finestra e nelle proprietà del file. Senza di essi, i lettori spesso visualizzano il nome del file o la prima intestazione, che appare incompleta in un documento che stai inviando o condividendo. Puoi chiamare `\hypersetup` nel preambolo in qualsiasi momento dopo `\usepackage{hyperref}`.

## Documenti facili da stampare

Per i documenti stampabili, utilizza `hidelinks`. Passandolo come opzione, `\usepackage[hidelinks]{hyperref}`, mantiene ogni collegamento cliccabile sullo schermo ma rimuove sia le caselle colorate che il testo colorato, quindi la pagina stampata appare completamente normale. Molte classi di diario richiedono esattamente questo.

Un errore comune da evitare: hyperref ridefinisce molti comandi interni, quindi dovrebbe essere caricato come uno degli ultimi pacchetti nel preambolo. Se i tuoi collegamenti puntano alle pagine sbagliate o ricevi strani errori da un altro pacchetto, l'ordine di caricamento è la prima cosa da controllare. Vedi [riferimenti incrociati](/learn/cross-references/) per i meccanismi `\label` e `\ref` che hyperref rende selezionabili.