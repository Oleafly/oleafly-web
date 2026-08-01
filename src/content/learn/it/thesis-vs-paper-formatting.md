---

title: "Formattazione tesi vs formattazione cartacea"
description: "Lezioni universitarie, parte frontale, capitoli, margini di rilegatura e riutilizzo del materiale cartaceo."
category: "venue-formats"
order: 7
level: "intermediate"
tags: ["venues", "thesis"]
featured: false
updated: 2026-07-25
---

# Formattazione della tesi vs formattazione della carta

Un articolo è formattato per un editore. Una tesi è formattata per una scuola di specializzazione, una bestia molto diversa con regole molto diverse. Se hai solo elaborati scritti, il modello di tesi ti sorprenderà in modi specifici.

## Chi stabilisce le regole

Documenti: la sede ti offre un corso ([IEEEtran](/learn/ieee-format-in-practice/), [acmart](/learn/acm-format-in-practice/), llncs) e tutti in tutto il mondo usano lo stesso. Tesi: la tua università impone una propria classe o una pagina di regole tipografiche (margini, interlinea, testo del frontespizio) e non esistono due università d'accordo. Ottieni prima il corso ufficiale dal tuo dipartimento o dal sito della scuola di specializzazione. Se è antico e si rifiuta di compilare, è abbastanza comune da avere [una propria lezione](/learn/fix-broken-template/).

## Le differenze strutturali

| Aspetto | Carta | Tesi |
|---|---|---|
| Unità di primo livello | `\sezione` | `\capitolo` |
| Base di classe | classe sede | derivato `libro`/`report` |
| Prima questione | titolo + riassunto | frontespizio, dichiarazione, abstract, sommario, elenchi di figure e tabelle |
| Lunghezza | da 8 a 30 pagine | Da 80 a 300 pagine |
| Disposizione | spesso a due colonne | colonna singola, spaziatura generosa |
| Lati | PDF unilaterale | spesso fronte/retro per la stampa |

I capitoli cambiano tutto a valle: la numerazione diventa "3.2", le figure diventano "Figura 3.1" e ogni capitolo di solito si apre su una nuova pagina (a volte a destra).

## La questione iniziale è metà dell'opera

La sequenza della parte frontale di una tesi in genere è composta da: frontespizio, dichiarazione di originalità, abstract, ringraziamenti, sommario, elenco delle figure, elenco delle tabelle, quindi capitolo 1. La maggior parte è automatizzata:

```latex
\frontmatter          % roman page numbers i, ii, iii
\maketitle
\tableofcontents
\listoffigures
\listoftables
\mainmatter           % arabic numbers restart at 1
\chapter{Introduction}
```

La danza della numerazione delle pagine romana e poi araba fa impazzire tutti una volta, [prima materia e numeri di pagina](/learn/front-matter-page-numbers/) la copre adeguatamente.

## Stampa fronte/retro e margini di rilegatura

Le tesi stampate sono solitamente fronte-retro (opzione della classe `twoside`), il che rende i margini asimmetrici: il margine interno è più ampio per sopravvivere alla rilegatura. Le regole della tua università diranno qualcosa come "margine sinistro 35 mm, altri 25 mm", che in un documento fronte-retro significa *interno*, non sinistro. Non combattere questo problema con `\hspace` manuale, l'opzione class più le impostazioni `geometry` gestiscono il problema:

```latex
\documentclass[12pt,twoside,openright]{report}
\usepackage[inner=35mm,outer=25mm,top=25mm,bottom=25mm]{geometry}
```

"openright" forza i capitoli sulle pagine di destra, standard per le copie rilegate.

## Riutilizzare i tuoi documenti come capitoli

La maggior parte delle tesi assorbe gli articoli pubblicati e la maggior parte delle università lo consente esplicitamente. La meccanica: togliere a ciascun articolo il preambolo della sede, retrocedere la sua "\sezione" se necessario, unificare notazione e macro tra i capitoli e unire le bibliografie in una sola. Mantenere ogni capitolo nel proprio file rende tutto ciò gestibile. [Dividere i capitoli in file](/learn/split-chapter-files/) mostra la configurazione `\input`/`\include` che mantiene sana una build di 200 pagine.

Un avvertimento onesto: le lezioni di tesi universitarie tendono ad essere pesanti in termini di pacchetti, quindi la prima compilazione su una nuova macchina potrebbe eliminare un lotto di pacchetti prima che abbia successo. Lascia che finisca una volta e le build successive saranno veloci.