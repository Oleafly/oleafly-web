---

title: "Il formato IEEE nella pratica"
description: "Modalità conferenza e diario IEEEtran, blocchi autore e trucchi su due colonne."
category: "venue-formats"
order: 2
level: "intermediate"
tags: ["venues", "ieee"]
featured: false
updated: 2026-07-25
---

# Il formato IEEE nella pratica

Le sedi IEEE, dai piccoli workshop alle riviste più importanti, condividono un file di classe: "IEEEtran". Imparalo una volta e si apriranno centinaia di locali.

## Modalità conferenza o diario

La stessa classe produce layout diversi a seconda delle opzioni:

```latex
% Conference paper
\documentclass[conference]{IEEEtran}

% Journal article
\documentclass[journal]{IEEEtran}
```

La modalità conferenza ti offre l'aspetto classico: tempi 10pt, due colonne, nessun numero di pagina per impostazione predefinita. La modalità Diario modifica il layout del titolo, aggiunge le biografie degli autori alla fine e modifica la spaziatura. Utilizza sempre la modalità richiesta dal tuo locale, non sono intercambiabili. Per un confronto più ampio tra IEEE e ACM, vedere [ACM, IEEE e amici](/learn/acm-ieee-and-friends/).

## Autori secondo il metodo IEEE

La modalità conferenza ha il proprio markup dell'autore. Non combatterlo con `\\` e centratura manuale:

```latex
\author{
  \IEEEauthorblockN{Ada Lovelace}
  \IEEEauthorblockA{Analytical Engines Lab\\
  University of London\\
  ada@example.edu}
  \and
  \IEEEauthorblockN{Charles Babbage}
  \IEEEauthorblockA{Department of Mathematics\\
  University of Cambridge\\
  cb@example.edu}
}
```

"\IEEEauthorblockN" contiene i nomi, "\IEEEauthorblockA" contiene le affiliazioni e "\and" separa gli autori in colonne.

## Vivere con due colonne

Il layout a due colonne è il punto in cui i principianti rimangono bloccati. Le regole:

| Problema | Correzione |
|---|---|
| Figura o tavolo ampio | Utilizza `figure*` / `table*`, fluttua nella parte superiore della pagina |
| L'equazione lunga trabocca | Spezzalo, vedi le tattiche a due colonne in [una colonna o due](/learn/one-column-or-two/) |
| Colonne dell'ultima pagina irregolari | Bilanciateli manualmente con `\IEEEtriggeratref` o con il pacchetto `balance` |
| L'URL si trova nel margine | `\usepackage{url}` o `xurl` per una migliore suddivisione |

Gli ambienti float contrassegnati da stelle non sono negoziabili per contenuti ampi:

```latex
\begin{figure*}[t]
  \centering
  \includegraphics[width=\textwidth]{pipeline}
  \caption{Full-width figures need the starred environment.}
\end{figure*}
```

Tieni presente che `figure*` rifiuta il posizionamento di `[h]` e fluttua sempre all'inizio della pagina. Pianificalo invece di combatterlo.

## Bibliografia

IEEE utilizza citazioni numeriche con il proprio stile BibTeX:

```latex
\bibliographystyle{IEEEtran}
\bibliography{references}
```

Il file `IEEEtran.bst` corrispondente viene fornito con la classe. Non sostituire "plain" o "ieeetr", notano i revisori, e la checklist pronta per la fotocamera lo rileverà comunque.

## Dove trovare il modello reale

Iniziate sempre dalla fonte ufficiale: l'IEEE Template Selector su ieee.org, o la pagina del kit dell'autore della conferenza. Gli organizzatori della conferenza a volte modificano il modello (avviso di copyright, piè di pagina extra), quindi la versione della sede prevale su una copia generica. La [galleria di modelli](/templates/) di Oleafly include un antipasto per conferenze in stile IEEE che si compila immediatamente sul motore Tectonic in bundle, utile per la stesura prima di inserire il kit ufficiale.

## Elenco di controllo dei trucchi comuni

- Compila con codice compatibile con pdfLaTeX, IEEEtran è precedente a fontspec e si aspetta motori classici
- Non aggiungere "geometria" o modificare i margini, la classe li imposta esattamente
- In alcune riviste è necessario `\IEEEpeerreviewmaketitle` dopo `\maketitle`
- Se il modello presenta errori sul tuo computer, valutalo come qualsiasi [modello rotto](/learn/fix-broken-template/)