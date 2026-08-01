---

title: "Pagine romane poi arabe"
description: "Numerazione delle prime questioni che le commissioni ancora si aspettano."
category: "long-form"
order: 2
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Pagine romane poi arabe

Apri quasi qualsiasi tesi o libro di testo e vedrai la stessa convenzione: il frontespizio, l'abstract, il sommario e i ringraziamenti sono numerati i, ii, iii in numeri romani minuscoli, e poi il primo vero capitolo ricomincia da pagina 1 in numeri arabi ordinari. La parte iniziale viene trattata come una sequenza preliminare separata e le scuole di specializzazione verificano esplicitamente questa convenzione. In LaTeX sono necessari esattamente due comandi.

## Il modello

```latex
\begin{document}
\pagenumbering{roman}
\maketitle
\tableofcontents
\pagenumbering{arabic}
\chapter{Introduction}
...
\end{document}
```

`\pagenumbering{roman}` fa due cose contemporaneamente: cambia lo stile dei numeri in minuscolo romano e reimposta il contatore delle pagine su 1, quindi la pagina del titolo diventa la pagina i. Tutto ciò che inserisci dopo di esso, tipicamente "\maketitle", l'abstract, il [tabella dei contenuti](/learn/table-of-contents/) e qualsiasi elenco di figure o tabelle, viene numerato ii, iii, iv e così via.

Poi, immediatamente prima del primo capitolo, `\pagenumbering{arabic}` ripristina lo stile e azzera nuovamente il contatore, quindi `\chapter{Introduction}` si apre su una nuova pagina 1. Il punto centrale è il reset: senza di esso la tua introduzione inizierebbe su qualcosa come pagina 7, che non è quello che si aspettano i comitati o le convenzioni di citazione.

Poiché `\chapter` nelle classi `book` e `report` inizia sempre una nuova pagina, non è necessario un `\newpage` esplicito prima del passaggio. In una classe senza capitoli aggiungeresti prima `\clearpage` in modo che la modifica della numerazione non arrivi a metà pagina.

## I corsi che fanno per te

Alcune classi di tesi forniscono `\frontmatter` / `\mainmatter` / `\backmatter`. Questi provengono dalla classe "libro" e sono il modo di livello superiore per dire la stessa cosa. `\frontmatter` passa alla numerazione romana e rende i capitoli senza numerazione (quindi una prefazione non ottiene l'etichetta "Capitolo 1"). `\mainmatter` passa all'arabo e ripristina i capitoli numerati. `\backmatter` disattiva nuovamente la numerazione dei capitoli per il materiale simile ad un'appendice alla fine. Se il modello della tua università è basato su "libro" o "memorie", preferisci questi comandi rispetto a "\numerazione di pagine", perché il modello potrebbe agganciare loro comportamenti aggiuntivi, come intestazioni diverse per la parte introduttiva. I due approcci non sono in conflitto, ma non c’è motivo di usarli entrambi.

## Una cosa da controllare

Le pagine con numerazione romana dovrebbero corrispondere al sommario. Se il tuo abstract viene visualizzato come pagina "iv" nel ToC ma viene stampato come "2", la causa usuale è una chiamata `\pagenumbering` inserita dopo il contenuto che avrebbe dovuto coprire, o una seconda compilazione mancante: i numeri di pagina nel ToC provengono dal file `.aux`, quindi devi [compilare due volte](/learn/compile-to-pdf/) prima di giudicare se la numerazione è corretta. Compila, compila di nuovo, quindi confronta il ToC con le pagine effettive.