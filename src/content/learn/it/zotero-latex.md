---

title: "Zotero in un file .bib"
description: "Migliore BibTeX, esportazione automatica, chiavi che sopravvivono alle macchine."
category: "cite-your-sources"
order: 6
level: "intermediate"
tags: ["citations", "zotero"]
featured: false
updated: 2026-07-25
---

# Zotero in un file .bib

Zotero è molto bravo a raccogliere riferimenti: prende metadati e PDF da un pulsante del browser e mantiene tutto ricercabile. LaTeX, d'altra parte, legge solo file `.bib`. Il ponte tra i due è il plugin Better BibTeX. Trasforma una raccolta Zotero in un file `.bib` che rimane aggiornato e, cosa altrettanto importante, mantiene stabili le chiavi di citazione in modo che i tuoi comandi `\cite` non si interrompano mai.

## Perché l'esportazione integrata non è sufficiente

Zotero può esportare BibTeX da solo, ma rigenera le chiavi di citazione ogni volta e una chiave che cambia da "knuth_literate_1984" a "knuth_literate_1984-1" interrompe silenziosamente ogni "\cite" che utilizzava il vecchio nome. Anche l'esportazione è un'istantanea una tantum, quindi il file diventa obsoleto nel momento in cui aggiungi un documento. BibTeX migliore risolve entrambi i problemi: le chiavi vengono generate da una formula scelta dall'utente, possono essere fissate in modo che non cambino mai e l'esportazione può aggiornarsi automaticamente.

## Impostazione della pipeline

Innanzitutto, installa Better BibTeX dal suo sito Web tramite la finestra di dialogo Strumenti, Plugin di Zotero, quindi riavvia Zotero. In secondo luogo, decidere una formula chiave per la citazione nelle preferenze di Better BibTeX. Un modello che produce chiavi come "knuth1984" o "knuth1984literate" è facile da digitare e facile da riconoscere nel codice sorgente. Terzo, fai clic con il pulsante destro del mouse sulla raccolta che appartiene al tuo articolo, scegli Esporta raccolta, seleziona il formato Better BibTeX e seleziona "Mantieni aggiornato" prima di salvare il file nella cartella del progetto come, ad esempio, `refs.bib`. Da quel momento in poi, l'aggiunta o la modifica di un elemento in Zotero riscrive il file entro pochi secondi.

Infine, indirizza il tuo documento al file esportato con `\bibliography{refs}` o `\addbibresource{refs.bib}`, esattamente come con un database scritto a mano. Il cablaggio è trattato in [Dalla chiave .bib alla citazione nel testo](/learn/add-citations/).

## Divisione del lavoro

Tratta Zotero come il database principale e il file `.bib` come un artefatto generato che risiede nel repository del documento. Mettere il `.bib` insieme al `.tex` significa che un coautore, o tu su un'altra macchina, puoi compilare l'articolo senza che Zotero sia installato. Non modificare manualmente il file esportato. La successiva esportazione automatica sovrascrive le modifiche. Correggi invece i metadati in Zotero e la correzione scorre. Se una voce sembra ancora errata dopo l'esportazione, eseguila tramite il [validatore BibTeX](/tools/bibtex-validator/) per vedere di quale campo lo stile non è soddisfatto.

Un'abitudine previene la maggior parte dei problemi futuri: una volta che una chiave appare in un manoscritto, appuntala in Better BibTeX (fai clic con il pulsante destro del mouse sull'elemento, Better BibTeX, Pin BibTeX key). Le chiavi appuntate sopravvivono ai cambiamenti di formula, agli spostamenti delle macchine e alle riorganizzazioni delle librerie, che è esattamente ciò che deve fare una chiave di citazione.