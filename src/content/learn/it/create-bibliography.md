---

title: "Costruisci un .bib che duri"
description: "Tipi di voci, campi obbligatori, chiavi stabili."
category: "cite-your-sources"
order: 2
level: "beginner"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Costruisci un .bib che duri

Un file `.bib` è un piccolo database di testo semplice di tutto ciò che potresti citare. Ogni voce ha un tipo, una chiave e una serie di campi e lo stesso file può servire per anni ogni articolo che scrivi. Un po' di disciplina ora, nel modo in cui scegli i tipi, riempi i campi e le chiavi dei nomi, ti risparmia veri problemi in seguito, quando uno stile di diario improvvisamente richiede un campo che non hai mai registrato.

## Anatomia di una voce

```bibtex
@article{knuth84,
  author  = {Knuth, Donald E.},
  title   = {Literate Programming},
  journal = {The Computer Journal},
  year    = {1984},
  volume  = {27},
  number  = {2},
  pages   = {97--111}
}
```

La parola dopo "@" è il tipo di voce, che indica allo stile di che tipo di lavoro si tratta e quindi quali campi aspettarsi. `knuth84` è la chiave della citazione, l'handle che digiti all'interno di `\cite{...}`. Tutto il resto è un campo. Il campo "autore" utilizza la forma "Ultimo, Nome" in modo che lo stile possa abbreviare e ordinare i nomi in modo affidabile, mentre "pagine" utilizza un doppio trattino, che LaTeX compone come un trattino di intervallo di pagine.

## I tipi di voce effettivamente necessari

Sei tipi coprono quasi tutta la scrittura accademica. Utilizza "@article" per articoli di riviste, "@inproceedings" per articoli di conferenze e workshop, "@book" per libri, "@phdthesis" per tesi di laurea, "@techreport" per rapporti istituzionali e molti preprint e "@misc" per qualsiasi altra cosa, inclusi software e siti Web. La scelta del tipo giusto è importante perché gli stili formattano ciascuno in modo diverso: una voce "@inproceedings" vuole un "booktitle" (il nome della conferenza), mentre un "@article" vuole un "journal".

## Campi obbligatori e perché i validatori si lamentano

Ogni tipo ha campi obbligatori e la mancanza di uno è il motivo più comune per cui una voce bibliografica risulta alterata o attiva un avviso di backend. Per "@articolo" gli elementi essenziali sono "autore", "titolo", "diario" e "anno"; per "@inproceedings", "autore", "titolo", "titolo del libro" e "anno". La mancanza di "anno" o "autore" è il classico fallimento, perché gli stili autore-anno non possono letteralmente costruire un'etichetta di citazione senza di essi. Campi facoltativi come "volume", "pagine", "doi" e "editore" rendono le voci più utili, quindi registrale mentre la fonte è di fronte a te. Puoi controllare un intero file in una volta con il [validatore BibTeX](/tools/bibtex-validator/).

## Chiavi che sopravvivono per un decennio

Le chiavi delle citazioni sono per sempre. Ogni `\cite{knuth84}` in ogni bozza, nota e presentazione si riferisce a quella stringa esatta, quindi rinominare una chiave significa scovarne ogni utilizzo. Scegli una convenzione come "authorYEAR" o "authorYEARkeyword", applicala fin dal primo giorno e non "ripulisci" mai le chiavi in ​​un database stabilito. Se gestisci i riferimenti in Zotero, il plugin Better BibTeX può generare e aggiungere chiavi stabili per te; vedere [Zotero in un file .bib](/learn/zotero-latex/). Per collegare il file in un documento, iniziare con [Dalla chiave .bib alla citazione nel testo](/learn/add-citations/).