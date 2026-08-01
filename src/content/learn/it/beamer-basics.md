---

title: "Un primo mazzo Beamer"
description: "Tema, cornice del titolo, struttura, una diapositiva dei risultati."
category: "on-stage"
order: 1
level: "intermediate"
tags: ["beamer"]
featured: true
updated: 2026-07-25
---

# Un primo mazzo Beamer

Beamer è la classe di documenti LaTeX standard per le presentazioni. Invece di pagine, il documento produce diapositive e tutto ciò che già sai viene riportato: gli stessi calcoli, le stesse cifre, gli stessi comandi bibliografici. La vittoria pratica per gli autori di articoli cartacei è il riutilizzo. Equazioni e diagrammi TikZ dal manoscritto incollati nel discorso invariati. Ecco un mazzo minimale ma completo:

```latex
\documentclass{beamer}
\usetheme{Madrid}
\title{Talk Title}
\author{You}
\begin{document}
\frame{\titlepage}
\begin{frame}{Outline}
 \tableofcontents
\end{frame}
\begin{frame}{Results}
 \begin{itemize}
 \item Finding one
 \item Finding two
 \end{itemize}
\end{frame}
\end{document}
```

## Cornici, non pagine

L'unità centrale è il frame e ogni ambiente `frame` diventa una diapositiva. L'argomento facoltativo tra parentesi graffe, come in `\begin{frame}{Risultati}`, imposta il titolo della diapositiva. La prima diapositiva utilizza l'abbreviazione `\frame{\titlepage}`, dove `\titlepage` rende i metadati dichiarati nel preambolo da `\title` e `\author`. Puoi anche aggiungere `\institute` e `\date` e appariranno nello stesso layout. Una cornice contiene notevolmente meno di una pagina, circa 128 mm per 96 mm di tela, quindi il contenuto che trabocca è un segno di dividere il materiale su due fotogrammi anziché di ridurre il carattere.

## Temi e schema

`\usetheme{Madrid}` seleziona un design visivo completo: colori, barre di intestazione e piè di pagina e come vengono disegnati i titoli dei frame. Beamer fornisce dozzine di temi. "Madrid", "Berlino" e il "default" deliberatamente semplice sono scelte comuni e lo scambio del tema è un cambiamento di una riga che ridisegna l'intero mazzo. Molte conferenze e laboratori distribuiscono il proprio tema. In tal caso, trascina il file di stile nel progetto e assegnagli un nome qui.

Il riquadro di contorno si chiama "\tableofcontents", che elenca la struttura in sezioni del discorso. Un problema: elenca i comandi `\section` e questo esempio minimo non ne ha nessuno, quindi la struttura viene visualizzata vuota finché non aggiungi righe come `\section{Method}` tra i frame. Le sezioni in Beamer non stampano i titoli sulle diapositive; esistono per strutturare la struttura e gli elementi di navigazione visualizzati da alcuni temi.

## Contenuto nelle diapositive

All'interno di un frame, "itemize" funziona come in qualsiasi documento e ogni "\item" diventa un punto elenco. Le diapositive tollerano molto meno testo della carta, quindi, ove possibile, mantieni gli elementi su singole righe e inserisci i dettagli in ciò che dici. Figure, tabelle e calcoli funzionano tutti anche all'interno dei frame, sebbene l'output di Beamer non venga visualizzato in queste anteprime in-page, quindi compila il mazzo per vederlo.

L'errore iniziale più comune è il contenuto letterale: `\verb` e i listati del codice si interrompono all'interno dei frame ordinari a causa del modo in cui i frame elaborano il loro contenuto. La soluzione è l'opzione fragile, scritta `\begin{frame}[fragile]`, su qualsiasi frame contenente codice. Una volta redatto il mazzo, le rivelazioni passo passo sono lo strumento successivo da imparare, trattato in [rivelare le linee al clic](/learn/beamer-overlays/).