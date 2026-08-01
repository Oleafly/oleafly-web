---

title: "Rivela le linee al clic"
description: "Sovrapponi le specifiche, metti in pausa, solo, senza strafare."
category: "on-stage"
order: 2
level: "intermediate"
tags: ["beamer"]
featured: false
updated: 2026-07-25
---

# Rivela le linee al clic

Un fotogramma Beamer può essere costituito da più di una diapositiva fisica. Quando riveli i punti elenco uno alla volta, Beamer genera diverse pagine PDF dallo stesso fotogramma, ognuna delle quali ne mostra qualcosa in più. Avanzando nel visualizzatore PDF si procede attraverso di essi. Queste pagine generate sono chiamate overlay. Imparare a controllarli è ciò che trasforma un mazzo statico in un discorso frenetico.

```latex
\begin{itemize}
 \item<1-> Always visible from slide 1
 \item<2-> Appears on slide 2
 \item<3-> Appears on slide 3
\end{itemize}

\pause % simpler step-through
```

## Specifiche della sovrapposizione

La notazione con parentesi angolari dopo "\item" è una specifica sovrapposta. Indica su quali sovrapposizioni della cornice è visibile l'elemento. Il numero è l'indice di sovrapposizione all'interno di questo frame e il trattino lo rende un intervallo: "<2->" significa dalla sovrapposizione 2 in poi, quindi l'elemento appare nel secondo passaggio e rimane. Un semplice `<2>` significherebbe solo sovrapposizione 2, quindi l'elemento apparirebbe e poi scomparirebbe. Puoi anche fornire elenchi come "<1,3>". Beamer crea tante sovrapposizioni quanto il numero più alto menzionato, quindi il frame sopra produce tre pagine PDF.

Le specifiche di sovrapposizione funzionano su più elementi. `\textbf<2->{termine chiave}` mette in grassetto il testo dall'overlay 2 in poi, e `\only<2>{...}` include il suo contenuto esclusivamente sull'overlay 2. Poiché "\only" rimuove interamente il contenuto sugli altri overlay, il layout circostante si ridispone, il che lo rende lo strumento per sostituire una figura con un'altra nello stesso punto: assegnare a due blocchi "\only" la stessa posizione e specifiche consecutive. Il suo cugino "\uncover" riserva lo spazio nascondendo il contenuto, quindi nulla viene spostato.

## Lo strumento più semplice

`\pause` divide il fotogramma in quel punto. Tutto ciò che viene prima viene visualizzato immediatamente, tutto ciò che segue attende il passaggio successivo e i comandi `\pause` ripetuti creano passaggi successivi. Non ha bisogno di numeri né di pianificazione, quindi è l'impostazione predefinita giusta per una semplice rivelazione dall'alto verso il basso. Raggiungere specifiche esplicite solo quando l'ordine di rivelazione differisce dall'ordine di origine o quando gli elementi devono apparire e scomparire.

Una scorciatoia utile quando ogni elemento in un elenco deve procedere in ordine è `\begin{itemize}[<+->]`, che assegna automaticamente numeri di sovrapposizione crescenti.

## Contenimento

Le sovrapposizioni sono facili da abusare. Una presentazione in cui ogni punto elenco di ogni diapositiva viene cliccato uno alla volta esaurisce il relatore (clic costante) e il pubblico (nessuna lettura in anticipo). La riserva a gradini rivela i pochi punti in cui il ritmo porta con sé un argomento, come costruire una derivazione o confrontare il prima e il dopo. Ogni overlay è una vera pagina PDF, quindi handout copia il fumetto a meno che non compili con `\documentclass[handout]{beamer}`, che comprime ogni fotogramma nella sua sovrapposizione finale. Le nozioni di base sul frame sono trattate in [un primo mazzo di Beamer](/learn/beamer-basics/).