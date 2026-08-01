---

title: "Un foglio, da cima a fondo"
description: "Un tour a piedi di ogni parte di un documento di ricerca e del lavoro svolto da ciascuna parte."
category: "paper-anatomy"
order: 1
level: "beginner"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# Un foglio di carta, dall'alto verso il basso

I documenti di ricerca sembrano intimidatori finché non ti rendi conto che sono assemblati ogni volta dalla stessa dozzina di parti, più o meno nello stesso ordine. Una volta che conosci il lavoro di ciascuna parte, puoi leggere i documenti più velocemente e scriverli senza fissare una pagina vuota. Ecco il tour.

## La questione principale

| Parte | È un lavoro |
|---|---|
| Titolo | Fai in modo che il lettore giusto smetta di scorrere. |
| Autori | Di' chi ha svolto il lavoro e a chi inviare l'e-mail. |
| Estratto | Vendi l'intero articolo in 150-250 parole. |
| Parole chiave | Aiuta i motori di ricerca e gli indicizzatori ad archiviarti correttamente. |

Il titolo e l'abstract fanno la maggior parte del reclutamento. Il novanta per cento dei tuoi potenziali lettori non vedranno nient'altro, motivo per cui [l'abstract riceve una lezione propria](/learn/write-an-abstract/) e il [frontespizio ha i propri meccanismi LaTeX](/learn/title-page/).

## Il corpo

| Parte | È un lavoro |
|---|---|
| Introduzione | Spiega perché il problema è importante e qual è il tuo contributo. |
| Lavoro correlato | Posiziona il tuo lavoro tra tutto ciò che è venuto prima. |
| Metodo | Descrivi cosa hai fatto con sufficiente precisione per riprodurlo. |
| Esperimenti / risultati | Dimostrare che il metodo funziona. |
| Discussione | Interpretare le prove onestamente, anche dove sono deboli. |
| Conclusione | Ribadisci il concetto e indica ciò che verrà dopo. |

Il corpo è un argomento raccontato per gradi: ecco un problema, ecco la nostra idea, ecco la prova che funziona, ecco cosa significa. Se una sezione non avanza tale argomento, si sta riempiendo. Consulta [introduzione e lavoro correlato](/learn/introduzione-e-correlato-lavoro/) e le [sezioni della sala macchine](/learn/methods-results-discussion/) per ulteriori informazioni su ciascuno.

## La questione del retro

| Parte | È un lavoro |
|---|---|
| Ringraziamenti | Ringraziare i finanziatori, gli aiutanti e i revisori delle bozze. |
| Riferimenti | Elenca tutte le fonti che hai citato, formattate in base alle regole della sede. |
| Appendice | Conserva prove, tabelle aggiuntive e dettagli che interromperebbero il flusso. |
| Materiale supplementare | Trasporta codice, dati e video che non rientrano in un PDF. |

I riferimenti non sono decorazioni, sono la prova su cui poggiano le tue affermazioni. Vedi [note a piè di pagina, riferimenti e appendici](/learn/footnotes-references-appendix/) per chi legge cosa e [citazioni](/learn/add-citations/) per la meccanica LaTeX.

## Lo scheletro in LaTeX

La maggior parte di questi si mappa direttamente sui comandi che già conosci:

```latex
\title{A Catchy but Honest Title}
\author{First Author \and Second Author}
\maketitle
\begin{abstract}
One paragraph that sells everything below.
\end{abstract}
\section{Introduction}
```

I comandi di sezionamento gestiscono la numerazione e il sommario per te, come spiegato in [sezioni e struttura](/learn/sections/).

## Dove andare dopo

Se sei nuovo al genere degli articoli di ricerca, inizia con [cos'è effettivamente un articolo di ricerca](/learn/what-is-a-research-paper/). Se stai per scriverne uno, il resto di questa traccia attraversa ogni parte in ordine, da [abstracts](/learn/write-an-abstract/) fino a [quanta matematica ti serve effettivamente](/learn/how-much-math/). Leggi la parte su cui sei bloccato, scrivila, ripeti.