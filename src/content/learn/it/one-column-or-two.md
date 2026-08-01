---

title: "Una colonna o due"
description: "Perché i layout differiscono in base alla sede, cosa fanno due colonne con figure ed equazioni e chi decide."
category: "paper-anatomy"
order: 7
level: "beginner"
tags: ["structure", "formatting"]
featured: false
updated: 2026-07-25
---

# Una o due colonne

Apri dieci fogli e vedrai due tribù: pagine dense a due colonne che sembrano carta da giornale e pagine ariose a una colonna che sembrano un libro. Nessuno dei due è migliore. Ognuno si è evoluto per una ragione e la scelta non spetta quasi mai a te.

## Perché le sedi sono diverse

I layout a due colonne sono una tradizione delle conferenze, nata quando gli atti venivano stampati e i budget per le pagine erano limitati. Le colonne strette contengono più parole per pagina e le righe brevi sono più facili da scansionare. La maggior parte delle conferenze CS (ACM, IEEE e simili) li utilizzano ancora.

I layout a una colonna dominano riviste, prestamp e tesi. Danno spazio a equazioni, figure e tabelle per respirare e sono più facili da leggere in forma estesa. I server di prestampa e molte sedi di machine learning si sono spostati su una sola colonna, in parte proprio per questo motivo.

| Disposizione | Casa tipica | Personalità |
|---|---|---|
| Due colonne | Atti del convegno | Denso, scansionabile, limitato in pagine |
| Una colonna | Riviste, preprint, tesi | Spazioso, leggibile, adatto alle equazioni |

## Cosa fanno due colonne alle tue cifre

In un documento a due colonne, una normale "figura" fluttua all'interno di una colonna, che spesso è troppo stretta per una trama dettagliata. La variante con asterisco si estende su entrambe le colonne:

```latex
\begin{figure*}
  \centering
  \includegraphics[width=\textwidth]{wide-results.pdf}
  \caption{A figure that needs the full page width.}
\end{figure*}
```

Stesso trucco per tabelle larghe con `table*`. Un problema: i float con stella in genere si posizionano nella parte superiore di una pagina e non possono utilizzare il posizionamento in basso o qui, quindi pianifica in anticipo le tue figure larghe. Le nozioni di base sul dimensionamento si trovano in [inserimento di immagini](/learn/insert-images/).

## Le equazioni diventano anguste

Una colonna larga circa 3,3 pollici è un luogo ostile per equazioni lunghe. Nei documenti a due colonne spezzerai le equazioni più spesso, abbrevierai in modo più aggressivo e ti appoggerai ad ambienti su più righe. Se il tuo articolo è ricco di equazioni e puoi scegliere la sede, la colonna singola ti farà risparmiare tempo di formattazione. Vedi [modalità matematica](/learn/math-mode/) per gli strumenti.

## Gli schermi e gli screen reader preferiscono una colonna

Per tutto ciò che non è un invio cartaceo formale (rapporti, documentazione, curriculum, prestamp che le persone leggeranno su laptop e telefoni), vince la colonna singola. I PDF non vengono ridisposti, quindi le pagine a due colonne costringono i lettori di schermo e gli estrattori di testo a indovinare l'ordine di lettura e costringono gli esseri umani a scorrere su e giù all'interno di ogni pagina. I sistemi di analisi dei curriculum sono noti per confondere i layout a più colonne. Riserva due colonne per le sedi che le richiedono.

## La classe del documento decide per te

Ecco la parte rilassante: non lo configuri quasi mai a mano. La sede ti fornisce una lezione o un modello e il layout viene fornito con esso.

```latex
\documentclass{article}              % one column
\documentclass[twocolumn]{article}   % two columns
\documentclass[sigconf]{acmart}      % venue class, layout included
```

Scrivi i tuoi contenuti una volta e cambiando modello ridisponi tutto. Questo è lo scopo di LaTeX: la stessa fonte viene compilata in una versione per conferenza a due colonne e in una prestampa a una colonna con una modifica di una riga. Mantieni le tue figure in formati vettoriali e le tue equazioni in ambienti standard e lo scambio di layout sarà quasi indolore.