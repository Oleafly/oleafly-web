---

title: "Articoli di chimica in LaTeX: formule, schemi e unità SI"
description: "Reazioni con mhchem, strutture, tavole sperimentali, unità SI, bibliografie e bozze private per studenti di chimica e ingegneria chimica."
date: 2026-06-22
tags: [chemistry, research]
---

I chimici di solito compaiono in LaTeX per uno di questi due motivi: la rivista insiste,
oppure un collaboratore lavora già così. In ogni caso appaiono i punti dolenti
familiare: schemi di reazione, etichette isotopiche, tabelle delle condizioni e a
bibliografia ricca di riviste e brevetti.

Questa guida copre i rapporti degli studenti universitari fino ai primi invii a riviste. Lo farà
non sostituire ChemDraw per prodotti naturali complessi. Manterrà il manoscritto
e la sezione sperimentale dal combattere il compilatore.

## Reazioni con mhchem

"mhchem" è la solita risposta per formule e reazioni:

```latex
\usepackage[version=4]{mhchem}
\ce{CO2 + C -> 2CO}
\ce{^{14}C}
\ce{H2SO4}
\ce{Fe^2+ <=>[\ce{H2O}] Fe^3+}
```

Aggiungi la versione 4 in modo che la sintassi non si sposti tra i coautori o tra il retro
e un'installazione locale di TeX. Procedura più lunga:
[formule chimiche](/impara/notazione-chimica/).

Gli schemi a più fasi con i reagenti sopra e sotto la freccia richiedono più di
in linea `\ce`. mhchem gestisce le formule; il layout spesso richiede uno schema di giornale
ambiente o una figura esterna. Non stipare una sintesi totale di venti passaggi
in una serie di linee chimiche in linea.

## Strutture: chemfig o disegni esterni

`chemfig` disegna strutture semplici in puro TeX e mantiene tutto
vettore-locale. I prodotti naturali complessi sono quasi sempre migliori come ChemDraw,
Marvin, o simile, esportato in PDF, quindi `\includegraphics`. Preferisci PDF vettoriale
su uno screenshot PNG in modo che le linee di collegamento rimangano nitide nella stampa e in due colonne
disposizione.

Assegnare un nome ai file in base all'ID composto (`cmpd-12.pdf`). Conserva l'origine ChemDraw modificabile
nell'archivio del laboratorio anche se git contiene solo il PDF che va nel documento.

## Sezioni sperimentali e lunghe tavole

Le tabelle delle condizioni (temperatura, solvente, resa, caricamento del catalizzatore) funzionano bene
con `booktabs` e spesso `siunitx` per le colonne numeriche:

```latex
\usepackage{booktabs,siunitx}
\begin{tabular}{l S S}
  \toprule
  {Entry} & {T / \degreeCelsius} & {Yield / \percent} \\
  \midrule
  1 & 25 & 72 \\
  \bottomrule
\end{tabular}
```

Se una tabella è più lunga di una pagina, passa a "longtable" prima della scadenza
settimana, non dopo che il giornale si è lamentato dei caratteri 7pt. La didascalia dovrebbe dire
cosa significa "resa" (isolato, NMR, GC), quindi i lettori non indovinano.

## Unità e frammenti di spettroscopia

Scegli uno stile di unità e attieniti ad esso: `siunitx` o `\mathrm` manuale se il gruppo
già d'accordo su questo. I frammenti NMR e HRMS nelle sezioni sperimentali lo sono
spesso testo semplice con spaziatura attenta. Non inventare un macrolinguaggio fragile
a metà articolo a meno che il laboratorio non ne condivida già uno.

Riporta le cifre significative come fa il taccuino. LaTeX stamperà felicemente
falsa precisione se lo digiti.

## Schemi vs cifre

Molte riviste di chimica distinguono gli schemi (reazioni) dalle figure (grafici,
ORTEP, spettri). Utilizza gli ambienti forniti dalla classe journal ("schema",
`figura`) in modo che la numerazione corrisponda alla produzione. Riferimento incrociato con `\ref` e stabile
etichette (`sch:reduction`, `fig:ortep-1`).

## Sicurezza del tiraggio

Percorsi inediti e partner industriali trasformano gli editor solo in cloud in un
questione politica, non solo di convenienza. Mantenere `.tex` e figure
poiché i normali file su disco con Git sono noiosi in modo utile.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) è un locale
redattore di ricerca: compilatori in bundle, controlli di riferimento e citazione a livello di progetto, offline
ortografia e grammatica solo in prosa (quindi le chiavi `\ce` e citate non sono contrassegnate come
"errori di battitura"), checkpoint Git reali, IA opzionale che modifica solo tramite approvazione
diff. Nessun conto. La bozza non necessita di un editor di terze parti per esistere.
La rete è per pacchetti, ricerca di citazioni o AI se li attivi.

## Citare la letteratura primaria corretta

Le bibliografie di chimica si appoggiano fortemente su riviste e brevetti. Esportazione da Zotero
o EndNote in un `.bib` con chiavi stabili, quindi convalidare prima i campi mancanti
invio: [BibTeX validator](/tools/bibtex-validator/). Bibliografie vuote
sono quasi sempre un errore di percorso o di backend, non mancano le citazioni.

Gli stili del diario differiscono (ACS, RSC, Springer). Utilizza lo stile bibliografico the
il modello viene fornito con. Non incollare insieme il numero e l'anno dell'autore in uno
preambolo.

## Collaborazione

Possiedi sezioni per persona quando puoi. Una persona possiede il `.bib`. D'accordo
versione mhchem e formato di esportazione della struttura in primo piano. Quando diversi sperimentali
le sezioni crescono in parallelo, compila il PDF completo ogni settimana così integrazione
le sorprese arrivano presto.

## Lista di controllo pre-invio

Vale la pena fare un ultimo passaggio:

- versione mhchem bloccata; le formule si compilano senza avvertimenti che sei stato
  ignorando.
- Le strutture sono vettoriali ove possibile; gli ID composti corrispondono a testo, schemi,
  e SI.
- Le tabelle utilizzano lo stile a tre regole; unità coerenti; rendimenti definiti in voce
  o note.
- La numerazione dello schema/figura corrisponde alla classe del giornale.
- `.bavaglino` convalidato; lo stile corrisponde al modello.
- I percorsi sensibili rimangono in una cartella locale con controllo di accesso che corrisponde al lab
  politica.

## Elenchi di controllo SI e diario

Molte riviste di chimica pubblicano liste di controllo degli autori (risoluzione grafica, TOC
dimensione grafica, caratterizzazione del composto). Scorri il PDF prima di disegnare
schemi. Un rapporto d'aspetto grafico del sommario errato è un motivo stupido per un amministratore
rifiuto.

## Informazioni di supporto

SI spesso ha il proprio modello o regole di intestazione. Mantieni le stesse fonti SI
repo come documento principale con nomi di file chiari. Quando il diario richiede pieno
caratterizzazione, controlla che ogni numero composto nel testo principale sia effettivamente
compare nel SI.

La formattazione chimica è complessa perché gli oggetti sono densi. Ottieni le reazioni
e le tabelle sono giuste e la sezione sperimentale sembra un lavoro accurato, non un
incollare da un PDF di un notebook.