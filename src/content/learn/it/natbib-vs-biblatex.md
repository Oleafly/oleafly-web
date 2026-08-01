---

title: "abitudini natbib e comandi biblatex"
description: "Citazioni parentetiche e testuali e nomi che le sostituiscono."
category: "cite-your-sources"
order: 8
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# abitudini natbib e comandi biblatex

La citazione autore-anno necessita di due tipi di comando cite. A volte gli autori fanno parte della tua frase, come in "Knuth (1984) ha introdotto la programmazione letterata". A volte la citazione è una parentesi, come in "La programmazione letterata mescola codice e prosa (Knuth, 1984)". Il semplice `\cite` non può fare questa distinzione, ed è per questo che esiste il pacchetto `natbib`, e perché biblatex fornisce il proprio insieme di nomi per le stesse idee. Se ne hai imparato uno e ti viene consegnato un modello utilizzando l'altro, questa pagina è la tabella di traduzione.

## I comandi natbib

```latex
\usepackage{natbib}
\citet{knuth84}  % Knuth (1984)
\citep{knuth84}  % (Knuth, 1984)
\citep*{knuth84} % (Knuth, Lamport, and Mittelbach, 1984): full author list
```

Lo mnemonico è che `\citet` è una citazione *testuale* che si legge come parte della frase, mentre `\citep` è una citazione *parentetica* racchiusa tra parentesi quadre. Le varianti contrassegnate da una stella stampano l'elenco completo degli autori invece di "et al.", che a volte è richiesto la prima volta che si cita un'opera. natbib offre anche `\citeauthor` solo per i nomi, `\citeyear` solo per l'anno e un argomento opzionale per i numeri di pagina, come in `\citep[p.~42]{knuth84}`. natbib è un pacchetto dell'era del preprocessore: funziona con BibTeX classico e uno stile `.bst` compatibile come `plainnat` o `apalike`.

## Gli equivalenti biblatex

biblatex copre lo stesso argomento con nomi diversi. `\textcite{knuth84}` produce la forma testuale "Knuth (1984)", `\parencite{knuth84}` produce la parentesi "(Knuth, 1984)" e `\cite{knuth84}` semplice produce una semplice citazione il cui aspetto esatto dipende dallo stile caricato. Ci sono analoghi diretti anche per il resto: `\citeauthor`, `\citeyear` e prenote e postnote per cose come i numeri di pagina, scritti `\parencite[vedi][p.~42]{knuth84}`. Se il problema è la memoria muscolare, biblatex ha anche un'opzione del pacchetto `natbib=true` che definisce `\citet` e `\citep` come alias, il che rende la migrazione quasi indolore.

## Migrazione di un documento da natbib a biblatex

Il tuo file `.bib` non necessita di alcuna modifica. Entrambi i sistemi leggono lo stesso database. La migrazione tocca solo il preambolo e la build. Rimuovi `\usepackage{natbib}` e la riga `\bibliographystyle`, quindi carica `\usepackage[backend=biber,style=authoryear]{biblatex}` e indirizzalo al tuo database con `\addbibresource{refs.bib}`. Sostituisci `\bibliography{refs}` alla fine del documento con `\printbibliography`. Infine, assicurati che la build esegua `biber` invece di `bibtex`, perché biblatex memorizza i suoi dati in un formato diverso e il vecchio backend non produrrà nulla in silenzio. Se preferisci non toccare il corpo del testo, mantieni i nomi dei comandi natbib tramite l'opzione di compatibilità e cambierà solo il preambolo.

## Quale scegliere

Se il modello del diario carica già natbib, mantienilo. Raramente vale la pena combattere un file di classe. Per i nuovi documenti in cui scegli, biblatex è più flessibile e gestisce meglio Unicode. Il confronto più ampio si trova in [BibiTeX classico o biblatex](/learn/bibtex-vs-biblatex/), e il cambio di stile in seguito è trattato in [Numerico, autore-anno, stili di rivista](/learn/change-citation-style/).