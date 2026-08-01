---

title: "HotCRP, EasyChair, OpenReview, CMT"
description: "Una guida sul campo ai quattro sistemi di invio che incontrerai effettivamente."
category: "ship-your-paper"
order: 2
level: "beginner"
tags: ["submission", "tools"]
featured: false
updated: 2026-07-25
---

#HotCRP, EasyChair, OpenReview, CMT

Il tuo articolo non va alla conferenza. Va a un sistema di invio: un sito Web in cui carichi il PDF, inserisci i metadati e successivamente leggi le tue recensioni. Ce ne sono quattro che incontrerai ancora e ancora, e ognuno ha una personalità.

## I quattro grandi

| Sistema | Personalità | Lo incontrerai a |
|---|---|---|
| HotCRP | Veloce, minimale, amato dagli utenti di sistema | Conferenze sui sistemi e sulla sicurezza (SOSP, USENIX) |
| Poltroncina | Il veterano. Utilitaristico, ovunque | Workshop, numerose conferenze CS in tutto il mondo |
| ApriRecensione | Rivolto al pubblico, recensioni spesso visibili | Sedi ML (ICLR, NeurIPS) |
| CMT | Il cavallo di battaglia di Microsoft, ricco di moduli | Conferenze Visione e ML (CVPR) |

Fanno tutti lo stesso lavoro principale. Le differenze vivono nei dettagli. OpenReview può mostrare le tue recensioni al mondo. HotCRP ti invierà un'e-mail su ogni commento. CMT ha una griglia di selezione degli argomenti che richiede dieci minuti per essere cliccata.

## Crea il tuo account in anticipo

Fallo la settimana in cui decidi di inviare, non la notte della scadenza:

- [ ] Crea l'account con l'e-mail che controlli quotidianamente
- [ ] Conferma che l'e-mail di verifica arriva effettivamente
- [ ] Controlla che anche i coautori abbiano un account (i profili OpenReview possono impiegare giorni per approvare i nuovi utenti)
- [ ] Avvia una bozza di invio in modo da sapere quali campi esistono

Quest'ultimo conta. Alcune sedi pongono domande a sorpresa: dichiarazioni etiche, liste di controllo sulla riproducibilità, ambiti di conflitto. Meglio scoprirli una settimana fuori.

## Caricamento solo PDF e sorgente

La maggior parte delle sedi desidera un PDF al momento dell'invio. Alcuni, e quasi tutti gli editori, nel momento in cui sono pronti per la fotocamera, vogliono anche il tuo sorgente LaTeX. Mantieni il tuo progetto abbastanza ordinato da poterlo comprimere su richiesta. Oleafly esporta direttamente un ZIP sorgente, che è esattamente ciò che i sistemi di invio della forma si aspettano.

## I campi dei metadati

Oltre al PDF, aspettati di compilare:

- **Titolo e abstract**, come testo semplice. Riscrivi qualsiasi matematica LaTeX in parole o Unicode.
- **Argomenti**, caselle di controllo che indirizzano il tuo articolo ai revisori. Scegli onestamente.
- **Conflitti**, persone e istituzioni che non dovrebbero recensirti: consulenti, coautori recenti, colleghi. Sbagliare può invalidare una recensione, quindi sii accurato.
- **Conferma dell'anonimato**, in sedi in doppio cieco. Vedi [anonimizzazione per la revisione in doppio cieco](/learn/anonymization-double-blind/).

## La realtà AoE delle 11:59

Ogni notte di scadenza, migliaia di persone si iscrivono nell'ultima ora e i sistemi diventano lenti. I caricamenti che duravano pochi secondi a pranzo richiedono minuti alle 23:50. La soluzione è semplice e nessuno la segue: inviare in anticipo una versione funzionante.

## Puoi aggiornare fino alla scadenza

Ecco la parte liberatoria: la sottomissione non è una soluzione immediata. Su tutti i principali sistemi puoi sostituire il tuo PDF tutte le volte che vuoi prima della scadenza. Quindi invia una versione completa ma imperfetta il giorno prima e continua a perfezionarla. Se la rete muore alle 11:58, si ha una vera sottomissione nel sistema invece di una tragedia.

Prossima tappa dopo l'invio: capire cosa succede dall'altra parte, nella [peer review, spiegata](/learn/peer-review-explained/).