---

title: "Pubblicazione della tua prima prestampa arXiv"
description: "Approvazione, categorie, pulizia della fonte, licenze e ciclo di annunci."
category: "ship-your-paper"
order: 3
level: "intermediate"
tags: ["arxiv", "preprint", "publishing"]
featured: false
updated: 2026-07-25
---

# Pubblicando la tua prima prestampa arXiv

Pubblicare su arXiv rende il tuo lavoro pubblico, citabile e con timestamp. Il processo presenta alcune stranezze che sorprendono tutti la prima volta. Se non hai letto [cos'è arXiv](/learn/what-is-arxiv/), inizia da lì, poi torna indietro.

## Approvazione: il buttafuori alla porta

I nuovi iscritti nella maggior parte delle categorie necessitano dell'approvazione di un autore affermato di arXiv. Se il tuo account utilizza un'e-mail accademica e hai coautori con la cronologia di arXiv, questo è spesso automatico o rapido. Altrimenti, chiedi al tuo consulente o a un coautore; il sistema ti fornisce un codice di approvazione per inviarli. Risolvi la questione giorni prima di pianificare la pubblicazione, non la notte stessa.

## Scegli le tue categorie

arXiv è organizzato in categorie moderate come "cs.LG" (apprendimento automatico), "cs.CL" (calcolo e linguaggio), "math.OC" (ottimizzazione), "stat.ML". Scegli una categoria primaria e facoltativamente alcune secondarie. Cerca dove vivono i documenti che citi e seguili. La categoria primaria determina quale mailing list annuncia il tuo articolo, quindi decide chi lo vede per primo.

## arXiv vuole la tua fonte, non il tuo PDF

Questa è la cosa più importante. Se il tuo articolo è stato prodotto con LaTeX, arXiv richiede il sorgente LaTeX, non solo un PDF. Il loro sistema AutoTeX lo compila sui loro server e quella build è ciò che i lettori scaricano. Conseguenze:

- Tutti i file di cui hai bisogno per il tuo documento devono essere nel caricamento: figure, file `.bbl` (arXiv non esegue BibTeX per te, quindi includi il file `.bbl` generato), file di stile che non sono standard.
- Se non viene compilato sul loro sistema, correggilo finché non lo fa.

## Pulisci prima la tua fonte

I tuoi commenti vengono forniti con la tua fonte e chiunque può scaricarli. La bozza di nota che dice "% TODO: questa affermazione è vera?" sarà pubblica. Prima del caricamento:

- [ ] Elimina i commenti. Lo strumento `arxiv-latex-cleaner` automatizza questa operazione e rimuove anche i file inutilizzati.
- [ ] Elimina le figure non utilizzate e le vecchie sezioni
- [ ] Verifica la presenza di nomi di file imbarazzanti (`final_v7_ACTUALLY_final.tex`)
- [ ] Compila la copia pulita da zero una volta

Lavorare da un progetto supportato da Git aiuta qui: in Oleafly puoi diramare un checkpoint, pulire il sorgente e fare differenze rispetto all'originale per confermare che non vi sia alcuna modifica sostanziale prima di esportare lo ZIP.

## Licenze

arXiv ti chiede di scegliere una licenza. La licenza minima solo per arXiv è l'impostazione predefinita comune e mantiene aperte le opzioni con i journal. CC BY è più permissivo. Se il documento è intestato a un editore specifico, controlla la loro politica di prestampa prima di scegliere qualcosa di irrevocabile.

## Il ciclo degli annunci e il suo folklore

arXiv annuncia nuovi articoli in lotti, secondo un programma fisso nei giorni feriali con un limite di presentazione. I documenti presentati subito dopo la scadenza compaiono in cima all'elenco successivo, e una piccola industria artigianale del folclore afferma che i documenti in cima alla lista ricevono più attenzione. Forse. Non perderci il sonno; un buon abstract conta molto più della posizione nell'elenco.

## Versioni: v1, v2 e dopo l'accettazione

Il tuo primo post è v1 ed è permanente: puoi aggiungere versioni ma non eliminarle mai. Pubblica la v2 quando ottieni miglioramenti reali, in genere la versione accettata dopo la [peer review](/learn/peer-review-explained/). Dopo l'accettazione, aggiorna la copia di arXiv con il contenuto pronto per la fotocamera (rispettando la politica dell'editore) e aggiungi il DOI o la sede nel campo di riferimento della rivista. I lettori ti ringrazieranno per questo.