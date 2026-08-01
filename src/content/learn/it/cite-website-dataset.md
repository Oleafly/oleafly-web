---

title: "Pagine Web, video, set di dati"
description: "voci varie/online e date di accesso per URL fragili."
category: "cite-your-sources"
order: 7
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Pagine Web, video, set di dati

BibTeX è stato progettato negli anni '80 per riviste, libri e atti di conferenze, quindi non ha l'idea nativa di una pagina web, un video di YouTube o un set di dati su Zenodo. È comunque necessario citare costantemente queste cose e la soluzione standard è il tipo di voce `@misc`, che accetta quasi qualsiasi combinazione di campi e consente allo stile di stamparli in modo sensato.

## Il modello @misc

```bibtex
@misc{oleafly2026,
 author = {{Oleafly Contributors}},
 title = {Oleafly},
 year = {2026},
 howpublished = {\url{https://oleafly.com}},
 note = {Accessed: 2026-07-24}
}
```

Tre dettagli contano qui. Le doppie parentesi graffe attorno a `{{Oleafly Contributors}}` dicono a BibTeX di trattare l'intera stringa come un nome letterale; senza di essi analizzerebbe "Contributors" come cognome e abbrevia il resto in "O. Contributors". Il campo "howpublished" è la posizione abituale per un URL nel BibTeX classico e racchiudendo l'indirizzo in "\url{...}" lo compone in un carattere a spaziatura fissa e consente di suddividerlo in modo pulito su più righe (caricare il pacchetto "url" o "hyperref" per questo). Il campo "nota" contiene la data di accesso, che è importante perché il contenuto web cambia e scompare. Quella data dice ai lettori quale versione della pagina hai effettivamente visto.

## L'alternativa biblatex: @online

Se il tuo documento utilizza biblatex, esiste un tipo dedicato. Una voce `@online` accetta i campi `url` e `urldate` appropriati, quindi la stessa fonte diventa `url = {https://oleafly.com}` e `urldate = {2026-07-24}` e lo stile formatta la data di accesso per te. Preferisci `@online` quando lo stile della bibliografia lo supporta e ricorri a `@misc` quando devi rimanere compatibile con un classico file `.bst`. Le differenze tra i due sistemi sono illustrate in [BibTeX classico o biblatex](/learn/bibtex-vs-biblatex/).

## Set di dati e software

I set di dati e i rilasci di codice meritano più di un semplice URL quando esiste un DOI. Repository come Zenodo e Figshare coniano DOI in modo che la citazione possa sopravvivere a qualsiasi configurazione di hosting. Inserisci il DOI in un campo "doi" o in "howpublished" come "\url{https://doi.org/10.5281/...}" per gli stili classici. Includi una nota sulla "versione" quando viene modificata la versione dell'artefatto, perché "il set di dati" scaricato da un lettore in cinque anni potrebbe non essere quello che hai analizzato. Molti progetti pubblicano anche una citazione preferita, spesso in un file `CITATION.cff` nel repository. Usarlo è sia educato che più accurato che indovinare i campi da soli.

## Video e altre strane fonti

Per un video, inserisci il canale o il creatore in "autore", il titolo del video in "titolo", la piattaforma e l'URL in "comepubblicato" e l'anno di caricamento in "anno", con la data di accesso in "nota". La regola generale per qualsiasi cosa insolita è la stessa: cattura chi l'ha creato, come si chiama, dove un lettore può trovarlo e quando l'hai guardato, e "@misc" porterà tutto ciò in sicurezza attraverso qualsiasi stile.