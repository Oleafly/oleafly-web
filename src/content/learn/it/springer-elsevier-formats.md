---

title: "Formati Springer, Elsevier e LNCS"
description: "llncs, riviste Springer Nature ed elsarticle: classi a colonna singola e sorgente pronta per la fotocamera."
category: "venue-formats"
order: 4
level: "intermediate"
tags: ["venues", "publishers"]
featured: false
updated: 2026-07-25
---

# Formati Springer, Elsevier e LNCS

Al di fuori degli ecosistemi IEEE e ACM, due editori dominano: Springer (incluso Springer Nature) ed Elsevier. Le loro classi sembrano più semplici rispetto agli stili di conferenza a due colonne, e questo è previsto dalla progettazione. L'editore impagina la versione finale.

## LNCS: il cavallo di battaglia dei procedimenti

Se la tua conferenza pubblica in Lecture Notes in Computer Science (o i suoi fratelli LNAI e LNBI), scrivi in ​​`llncs`:

```latex
\documentclass{llncs}
\usepackage{graphicx}

\title{Contribution Title}
\author{Ada Lovelace\inst{1} \and Charles Babbage\inst{2}}
\institute{University of London \and University of Cambridge}
```

Gli articoli LNCS sono a colonna singola, utilizzano apici `\inst{}` per associare gli autori agli istituti e hanno un budget di pagine predefinito notoriamente limitato (spesso da 12 a 16 pagine compresi i riferimenti). La classe non è presente in ogni distribuzione TeX per impostazione predefinita. Scarica il kit dell'autore dalla pagina LNCS di Springer. Lo stile della bibliografia è "splncs04":

```latex
\bibliographystyle{splncs04}
\bibliography{references}
```

## Diari Springer Nature

Storicamente le riviste Springer utilizzavano `svjour3` e sono state migrate alla nuova classe `sn-jnl` con opzioni di stile per famiglia di riviste (`sn-mathphys-num`, `sn-basic` e altre). La pagina "Linee guida per l'invio" della rivista nomina la classe e l'opzione esatte. Non indovinare: due riviste Springer possono richiedere classi diverse.

## Elsevier: elsarticle

Le riviste Elsevier condividono una classe, `elsarticle`:

```latex
\documentclass[preprint,12pt]{elsarticle}
% later: \documentclass[final,3p,twocolumn]{elsarticle}
```

L'opzione "preprint" fornisce una spaziosa colonna singola con interlinea doppia per la revisione, mentre "final" con "1p", "3p" o "5p" imita il layout di stampa del diario. Gli stili della bibliografia sono "elsarticle-num" (numerato) o "elsarticle-harv" (autore-anno), corrispondenti a quelli utilizzati dalla rivista.

## Confronto rapido

| Editore | Classe | Colonne | Stile bavaglino |
|---|---|---|---|
| Springer LNCS | `llncs` | uno | `splncs04` |
| Riviste Springer Nature | `sn-jnl` (era `svjour3`) | uno | opzione per giornale |
| Elsevier | `elsarticolo` | uno (recensione) | `elsarticle-num` / `-harv` |

## Perché una colonna singola? Perché non sei il tipografo

Queste classi rendono il tuo *manoscritto*, non la pagina finale. Il team di produzione dell'editore ricompone gli articoli accettati nel layout interno della rivista. Questo è anche il motivo per cui "caricamento sorgente pronto per la fotocamera" qui significa qualcosa di specifico: carichi i tuoi file `.tex`, `.bib` e figure, non solo un PDF, in modo che la produzione possa ricostruire e rimodellare il foglio. Conseguenze pratiche:

- Mantieni il codice sorgente pulito e compilabile da un nuovo checkout: nessun percorso assoluto, nessuna cifra mancante
- Non modificare la spaziatura o i margini. La produzione lo rimuove comunque (e può [essere segnalato](/learn/page-limits-without-crimes/))
- Utilizzare pacchetti standard. Quelli esotici vengono riscritti dalla produzione o restituiti a te

Queste classi si basano su un discreto numero di pacchetti, quindi un'installazione minima potrebbe recuperarne diversi alla prima compilazione. Se uno si rifiuta di apparire, vedere [installazione dei pacchetti mancanti](/learn/install-missing-package/). Se il modello presenta errori evidenti, valutalo come qualsiasi [modello rotto](/learn/fix-broken-template/).