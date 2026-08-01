---

title: "Il blocco astratto"
description: "posizionamento dell'ambiente astratto per classi di articoli e riviste."
category: "paper-bones"
order: 4
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Il blocco astratto

L'abstract è il breve riassunto che si trova tra il titolo e la prima sezione. Quasi ogni luogo ne richiede uno. LaTeX gli fornisce un ambiente dedicato invece di lasciarti fingere con un titolo in grassetto. La classe ha bisogno di sapere quale testo è l'abstract in modo che le classi del journal possano comporlo in uno stile distinto (spesso più piccolo e con rientro), e così i sistemi di submission possano estrarlo automaticamente.

##L'ambiente

```latex
\begin{abstract}
 We present a short abstract of at most 200 words.
\end{abstract}
```

Tutto tra `\begin{abstract}` e `\end{abstract}` diventa il blocco astratto. Nella classe standard "article" appare come un paragrafo ristretto e con intestazione centrata sotto il titolo. Scrivi al suo interno una prosa semplice. La matematica in linea va bene, ma salta qualsiasi cosa pesante: niente citazioni se la sede le vieta, niente note a piè di pagina, niente acronimi indefiniti. Gli abstract spesso compaiono da soli nei database e nei risultati di ricerca, lontani dal resto del documento.

## Dove va

Posto dopo "\maketitle" (o come richiesto dalla classe journal). L'ordine normale all'inizio di un articolo è `\maketitle`, poi l'abstract, poi `\section{Introduzione}`. L'ambiente deve venire dopo `\begin{document}`, poiché produce output; inserirlo nel preambolo è un errore di compilazione.

Le lezioni di diario e conferenza spesso modificano questo contratto e i loro modelli prevalgono su quello predefinito. Alcune classi, incluse diverse varianti ACM e IEEE, vogliono che l'abstract sia dichiarato prima di `\maketitle` in modo da poterlo inserire all'interno del proprio layout del titolo. Altri sostituiscono interamente l'ambiente con un comando come `\abstract{...}`. Regola pratica: se stai utilizzando il modello di una sede, inserisci l'abstract dove lo mette il file di esempio del modello e non litigare con la classe. La [lezione sui cartigli](/learn/title-page/) copre il meccanismo `\maketitle` da cui dipende.

## Lezioni senza abstract

La classe "book" non definisce alcun ambiente astratto, in base alla teoria secondo cui i libri hanno invece prefazioni. Se ne hai bisogno in una tesi in stile report, la classe `report` lo supporta, oppure puoi comporre un'intestazione centrata e non numerata seguita da un paragrafo normale, che è tutto ciò che fa realmente l'ambiente.

Un errore comune: lasciare una riga vuota tra `\maketitle` e l'abstract va bene, ma lasciare l'abstract vuoto non è un errore di compilazione, quindi un segnaposto dimenticato come "TODO" viene inviato ai revisori più spesso di quanto si ammetta. Compila, guarda la prima pagina del PDF e leggi lì l'abstract almeno una volta prima di inviarlo. Per consigli su cosa dovrebbe effettivamente dire l'abstract, rispetto a dove va, vedere [come scrivere un abstract](/learn/write-an-abstract/).