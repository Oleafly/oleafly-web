---

title: "Pacchetti che si combattono tra loro"
description: "hyperref ultimo, Cleveref dopo, coppie obsolete, esempi minimi."
category: "runtime"
order: 5
level: "advanced"
tags: ["packages", "errors"]
featured: false
updated: 2026-07-25
---

# Pacchetti che si combattono tra loro

I pacchetti LaTeX sono liberi di ridefinire i comandi degli altri e molti lo fanno deliberatamente. È così che "hyperref" trasforma ogni riferimento incrociato in un collegamento. Significa anche che due pacchetti possono patchare ciascuno lo stesso comando con presupposti incompatibili e il risultato varia da un errore totale come "Comando \ nota a piè di pagina già definito" o "Scontro di opzioni per il pacchetto xcolor" a un output silenziosamente sbagliato. I conflitti emergono quasi sempre subito dopo aver aggiunto un pacchetto a un preambolo precedentemente funzionante, che è anche l'indizio più grande.

## L'ordine di caricamento è metà dell'opera

Molti conflitti vengono risolti esclusivamente tramite ordine, poiché l'ultima parola spetta al pacchetto caricato successivamente. La regola più importante: caricare `hyperref` verso la fine del preambolo. Riscrive gran parte del meccanismo di riferimento incrociato di LaTeX e i pacchetti caricati successivamente potrebbero annullare tali patch. Un breve elenco di eccezioni deve essere fornito anche più tardi, e quello che incontrerai effettivamente è "cleveref", che è progettato per stare sopra "hyperref" e deve essere caricato dopo di esso:

```latex
\usepackage{graphicx}
\usepackage{amsmath}
% ... everything else ...
\usepackage{hyperref}
\usepackage{cleveref} % after hyperref, by design
```

Quando la documentazione di un pacchetto specifica una posizione relativa ad un altro pacchetto, credeteci. Quelle note esistono perché qualcuno ha già colpito il conflitto che stai per avere.

## Pacchetti obsoleti e loro sostituzioni

Alcuni conflitti derivano dal caricamento di un pacchetto morto accanto al suo successore. Non combinare `epsfig` con `graphicx`, `subfigure` con `subcaption` o i vecchi `times` e `mathptmx` shim con pacchetti di font moderni come `newtxtext`. I vecchi modelli sono la solita fonte: caricano tutto ciò che era attuale quando il modello è stato scritto e tu aggiungi sopra l'equivalente moderno. Rimuovi quello obsoleto e conserva quello sostitutivo. Il pacchetto `nag` può segnalare l'utilizzo obsoleto in fase di compilazione.

## Le opzioni sono in conflitto

"Scontro di opzioni per il pacchetto X" significa che il pacchetto è stato caricato due volte con opzioni diverse, spesso una volta dalla classe del documento alle tue spalle. Non puoi caricarlo di nuovo con nuove opzioni, ma puoi inserire opzioni prima che qualcuno lo carichi: metti `\PassOptionsToPackage{table}{xcolor}` prima di `\documentclass` e le opzioni verranno unite a qualunque caricamento venga prima.

## Isolare con un esempio minimo

Quando la causa non è ovvia, crea un esempio minimo funzionante: un documento contenente solo `\documentclass`, i due pacchetti sospetti e un `\begin{document}...\end{document}` con una riga di testo. Se l'errore si ripete, cambia l'ordine di caricamento e le opzioni finché non scompare. Se non si riproduce, aggiungi nuovamente gli altri pacchetti a metà finché non ritorna. Questa ricerca binaria converge in alcune compilazioni e ti fornisce una coppia chiara da cercare. La stessa tecnica salva i preamboli ereditati, come descritto in [File di lezioni universitarie che non verranno compilati](/learn/fix-broken-template/).