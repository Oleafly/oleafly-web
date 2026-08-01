---

title: "Doppio cieco fatto bene"
description: "Cosa rendere anonimo, come citare te stesso e i metadati che ti tradiscono."
category: "venue-formats"
order: 6
level: "intermediate"
tags: ["venues", "review"]
featured: false
updated: 2026-07-25
---

# Doppio cieco fatto bene

La revisione in doppio cieco significa che i revisori non sanno chi ha scritto l’articolo. Sbagliare è uno dei pochi errori di formattazione che possono portare al rifiuto di un articolo senza che venga letto, quindi considera l'anonimizzazione come una lista di controllo, non come un'atmosfera.

## Cosa deve andare

| Articolo | Cosa fare |
|---|---|
| Nomi e affiliazioni degli autori | Rimuovere o sostituire con "Autori anonimi" |
| Ringraziamenti | Elimina per l'invio (finanziatori e colleghi ti identificano) |
| Repo e collegamenti al progetto | Sostituisci con un collegamento anonimo, vedi sotto |
| Dettagli specifici dell'istituto | "il cluster della nostra università" batte "il cluster GPU di Stanford" |
| Frase "Il nostro lavoro precedente" | Riscrivi in ​​terza persona, vedi sotto |
| Loghi, filigrane, intestazioni | Elimina qualsiasi cosa con un nome di gruppo o di laboratorio |

Molte classi automatizzano la prima riga. Con la classe ACM è un'opzione:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

Altre sedi spediscono una variante di invio del loro modello. Le sedi [IEEEtran](/learn/ieee-format-in-practice/) spesso ti dicono semplicemente di omettere il blocco dell'autore.

## Citare il proprio lavoro

La regola è semplice: cita te stesso esattamente come citeresti uno sconosciuto.

Sbagliato: "Nel nostro lavoro precedente [7], abbiamo mostrato..."
A destra: "Lovelace et al. [7] hanno mostrato..."

Non omettere i tuoi documenti rilevanti. I revisori si aspettano che venga citato il lavoro ovviamente correlato e una lacuna sospetta può de-anonimizzare l'utente con la stessa efficacia di un nome. L'unica eccezione è rappresentata dai lavori realmente inediti, che puoi invece caricare come materiale supplementare anonimo.

## Artefatti anonimi

I revisori si aspettano sempre più codice e dati. I collegamenti GitHub sono radioattivi: il nome utente è proprio lì. Opzioni che funzionano:

- Servizi creati per questo (anonymous.4open.science è lo standard sul campo)
- Un nuovo repository con un account usa e getta con cronologia dei commit cancellata
- Zip supplementare caricato con l'invio, con i nomi degli autori rimossi dalle intestazioni dei file e dai taccuini

Controlla il file zip prima di caricare: file di licenza, `AUTORI`, metadati del notebook e percorsi delle directory home codificati (`/home/ada/...`) tutti nomi di leak.

## Gli incidenti che ti tradiscono

Il testo cartaceo è anonimo, ma il PDF potrebbe non essere:

- **Metadati PDF.** Il campo Autore spesso si compila automaticamente dal tuo sistema. Controlla con `pdfinfo` o con le proprietà del documento del tuo visualizzatore e cancellalo tramite `\hypersetup{pdfauthor={}}`.
- **Nomi dei file.** `lovelace-sigconf-final.pdf` annulla tutto. Chiamalo "paper.pdf" o il numero di invio.
- **Fonti di figure.** I grafici esportati dagli strumenti possono incorporare nomi utente nei metadati o in un percorso visibile in uno screenshot.
- **Prestamp.** Pubblicare su arXiv prima dell'invio è consentito in molti luoghi e vietato in altri. Lo dice la PCP. Leggilo. Questa è [parte della scelta della sede](/learn/choose-your-venue/).

## Pronto per la fotocamera, lo capovolge

Dopo l'accettazione, tutto ritorna: nomi, affiliazioni, riconoscimenti, il vero link del repo e la frase in prima persona se ti piace. Budget di un'ora per il pass di de-anonimizzazione. Tocca più luoghi di quanti ricordi e la [lista di controllo pronta per la fotocamera](/learn/first-paper-roadmap/) è il momento per catturare i ritardatari.