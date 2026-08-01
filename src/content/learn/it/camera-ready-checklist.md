---

title: "Pronto per la fotocamera senza panico"
description: "De-anonimizzare, aggiungere finanziamenti, incorporare caratteri e raggiungere il limite di pagina: la checklist della versione finale."
category: "ship-your-paper"
order: 5
level: "intermediate"
tags: ["camera-ready", "submission", "checklist"]
featured: false
updated: 2026-07-25
---

# Pronto per la fotocamera senza panico

Accettato! Dopo la celebrazione arriva un'ultima scadenza: essere pronti per la macchina fotografica. Il nome è una reliquia di quando gli editori fotografavano le tue pagine per la stampa. Oggi significa la versione finale che entra nel procedimento, esattamente come la vedranno i lettori per sempre. Nessun editor correggerà i tuoi errori di battitura dopo questo. Quella parte dipende da te.

## Cosa cambia tra invio e camera-ready

La versione inviata è stata ottimizzata per i revisori. La predisposizione per la fotocamera è per la registrazione permanente e molte cose cambiano:

| Articolo | Versione inviata | Pronto per la fotocamera |
|---|---|---|
| Nomi degli autori | Nascosto (doppio cieco) | Nomi reali, affiliazioni, email |
| Ringraziamenti | Omesso | Finanziamenti, sovvenzioni, ringraziamenti |
| Limite di pagina | Limite di revisione | Spesso +1 pagina, ma esatto |
| Blocco del copyright | Segnaposto o nessuno | Blocco dell'editore, DOI, ISBN |
| Autocitazioni | Terza persona ("Smith et al.") | Può dire "il nostro lavoro precedente" |
| Promesse di confutazione | Promesso | Effettivamente consegnato |

De-anonimizzare è più che aggiungere nuovamente nomi. Cerca la fonte per ogni luogo in cui hai scritto intorno alla tua identità; vedere [anonimizzazione per revisione in doppio cieco](/learn/anonymization-double-blind/) per i soliti nascondigli, quindi invertirli tutti.

## Ancora una volta il limite esatto della pagina

I limiti di camera-ready vengono applicati dagli editori, non solo dai presidenti, e il contenuto extra (blocco dell’autore, riconoscimenti) consuma spazio. Se improvvisamente sei oltre le sei righe, fallo onestamente: stringi prosa e figure piuttosto che abusare dei comandi di spaziatura. Le tecniche in [limiti di pagina senza crimini](/learn/page-limits-without-crimes/) si applicano doppiamente qui, perché gli editori controllano la formattazione.

## I caratteri devono essere incorporati

Questo è quello che morde le persone. Gli editori eseguono controlli automatizzati e il motivo numero uno di rifiuto sono i font non incorporati, solitamente introdotti di nascosto da un PDF di figura esportato da uno strumento di stampa. Controlla con `pdffonts yourpaper.pdf`: ogni carattere dovrebbe dire "emb: sì". Se non lo si fa, il colpevole è quasi sempre una figura; riesportarlo con i caratteri incorporati o come PDF generato correttamente.

## La correzione finale: prima i riferimenti

I riferimenti sono dove si concentra l’entropia. Prima di caricare:

- [ ] NO "??" citazioni o riferimenti non definiti nel registro
- [ ] Ogni voce bibliografica riporta luogo, anno e titolo correttamente scritto in lettere
- [ ] Nomi degli autori scritti correttamente (le persone notano il proprio nome)
- [] citazioni solo arXiv aggiornate alle versioni pubblicate dove esistono
- Gli URL [] nei riferimenti continuano a essere risolti

Poi leggi l'intero articolo ad alta voce una volta. È lento e funziona.

## Stranezze nel caricamento della fonte

La maggior parte degli editori desidera il sorgente LaTeX, non solo il PDF, e i loro sistemi di compilazione sono pignoli: includono `.bbl`, evitano pacchetti non standard, seguono il layout dei file. Esporta un ZIP sorgente pulito (Oleafly lo fa in un solo passaggio) e testalo compilandolo da zero in una cartella vuota prima del caricamento. Se viene creato solo a causa di un file vagante sul tuo computer, il sistema dell'editore lo scoprirà.

## La lista di controllo per una sola seduta

- [ ] Nomi, affiliazioni, email ripristinati e corretti
- [ ] Aggiunti ringraziamenti e numeri di finanziamento
- [] Informazioni sul blocco del copyright/DOI incollate dall'e-mail dell'editore
- [ ] Limite di pagina raggiunto esattamente
- [ ] `pdffonts` mostra tutti i caratteri incorporati
- [ ] Riferimenti corretti
- [] Il codice ZIP sorgente pulito viene compilato da zero
- [ ] Caricato con un giorno di anticipo

Quindi è fatto, in modo permanente. È ora di pensare a [presentarlo](/learn/present-your-paper/).