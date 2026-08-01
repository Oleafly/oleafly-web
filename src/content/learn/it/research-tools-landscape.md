---

title: "La cassetta degli attrezzi per la scrittura di ricerca, allora e oggi"
description: "Dalle macchine da scrivere ai viaggi di andata e ritorno via e-mail fino agli spazi di lavoro Overleaf, Zotero, Typst e locali."
category: "research-101"
order: 9
level: "beginner"
tags: ["research", "basics", "tools"]
featured: false
updated: 2026-07-25
---

# Gli strumenti per la scrittura di ricerca, allora e oggi

Ogni generazione di ricercatori ritiene che i propri strumenti siano permanenti. Non lo sono mai. Un breve tour su come sono stati scritti i documenti e su come appare la cassetta degli attrezzi oggi, così puoi scegliere il tuo consapevolmente.

## I tempi precedenti

Negli anni '80, i documenti venivano **scritti a macchina**, le equazioni venivano inchiostrate a mano e inviate per posta alle riviste. Poi sono arrivati ​​gli elaboratori di testo: decenni di **modelli di parole** con una numerazione fragile, equazioni incollate come immagini e layout di figure che esplodevano quando un paragrafo si spostava. Collaborare significava **inviare file via email avanti e indietro**: `paper_final_v3_REALLY_FINAL_jw_edits.docx` non è uno scherzo, è storia. LaTeX esisteva attraverso tutto questo (vedi [45 anni di TeX](/learn/history-of-tex-latex/)) ma lo hai compilato in un terminale e condiviso anche via email.

## La cassetta degli attrezzi di oggi

| Strumento | Categoria | In cosa è bravo |
| --- | --- | --- |
| Sul retro | Editor Cloud LaTeX | Co-editing in tempo reale nel browser, zero impostazioni |
| TeXstudio/TeXmaker | IDE LaTeX locale | Modifica desktop classica, gratuita |
| Codice VS + Workshop LaTeX | IDE locale | Potente se vivi già in VS Code |
| Oliva | Area di lavoro con priorità locale | LaTeX, Typst e Markdown con compilatori in bundle |
| Zotero | Responsabile di riferimento | Raccolta, organizzazione ed esportazione di citazioni |
| Google Scholar | Scoperta | Ricerca di articoli e monitoraggio delle citazioni |
| arXiv | Scoperta + prestamp | Leggendo gratuitamente il lavoro più recente, vedi [il mondo della prestampa](/learn/what-is-arxiv/) |
| Tipo | Nuovo sistema di impaginazione | Documenti veloci e moderni quando nessuna sede richiede .tex |

Gli strumenti di **Discovery** trovano documenti, i **reference manager** organizzano ciò che hai trovato e gli **editor** trasformano tutto in un PDF. Ti ritroverai con uno di ciascuno.

## Cloud vs locale, a dire il vero

**Sul retro** ha reso LaTeX mainstream rimuovendo completamente l'installazione, e il suo editing collaborativo in tempo reale è davvero la sua caratteristica principale. Se i tuoi coautori desiderano digitare lo stesso documento nello stesso momento, oggi gli strumenti cloud come Overleaf sono semplicemente migliori.

Gli strumenti **Local-first** ribaltano la situazione: i tuoi file risiedono sul tuo computer come semplici file, puoi lavorare su un treno o dietro il firewall di un ospedale, nulla dipende dalla sopravvivenza di un abbonamento o di un server e la cronologia delle versioni è reale [Git](/learn/oleafly-workflow/), non una sequenza temporale proprietaria. La classica seccatura di LaTeX locale era l'installazione di una distribuzione TeX multi-gigabyte. Questa è la parte che è cambiata.

## Dove si inserisce Oleafly

Oleafly è uno spazio di lavoro desktop gratuito, open source e local-first. I compilatori per LaTeX e Typst vengono forniti in bundle, quindi non è necessaria alcuna distribuzione da installare. Le citazioni possono essere recuperate da [DOI o arXiv ID](/learn/open-access-doi-explained/), i progetti sono repository Git con una storia onesta, i modelli di sede sono integrati e un assistente AI opzionale ti aiuta quando lo desideri. L’obiettivo è rendere il percorso locale a basso attrito come quello del cloud. Per essere onesti riguardo al commercio: per il co-editing simultaneo dal vivo, Overleaf rimane la scelta più forte. Per la proprietà dei tuoi file e del lavoro offline, vince la priorità locale. Molte persone li usano entrambi, disegnando localmente e sincronizzando tramite Git.

## Scegliere senza agonizzare

Inizia con ciò che rimuove più attriti per te questo mese. I file .tex sono trasferibili su ogni strumento sul tavolo. Questa portabilità è il vero vantaggio della scrittura in testo semplice, trattato in [LaTeX vs Word](/learn/latex-vs-word/). Quindi scrivi il tuo [primo documento](/learn/first-document/) e lascia che gli strumenti crescano con il lavoro.