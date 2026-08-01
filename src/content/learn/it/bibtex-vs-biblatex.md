---

title: "BibTeX classico o biblatex"
description: "Backend, stili e cosa cambia giorno dopo giorno."
category: "cite-your-sources"
order: 3
level: "intermediate"
tags: ["citations"]
featured: true
updated: 2026-07-25
---

# BibTeX classico o biblatex

LaTeX ha due sistemi di citazione che leggono gli stessi file `.bib` ma differiscono in quasi tutto il resto. Il BibTeX classico risale agli anni '80: un piccolo programma esterno formatta i tuoi riferimenti utilizzando file di stile scritti in un proprio linguaggio basato su stack. biblatex è il sostituto moderno: la formattazione avviene nello stesso LaTeX, con un programma di supporto chiamato `biber` che si occupa dell'ordinamento e della gestione dei dati. I nomi sono confusamente simili. Ricorda che "BibTeX" è sia il vecchio programma che, in generale, il vecchio sistema, mentre "biblatex" è un pacchetto LaTeX che utilizza `biber` come backend.

| | BibTex | biblatex + biber |
| --- | --- | --- |
| Età | Classico | Moderno |
| Stili | `.bst` | `.bbx`/`.cbx` |
| Unicode | Fragile | Forte |
| Supporto del diario | Universale | Crescere |

## Cosa significano le differenze nella pratica

La riga di stile è quella più importante. Gli stili BibTeX sono file ".bst" che quasi nessuno può leggere o modificare, quindi prendi ciò che viene fornito dal diario. Gli stili biblatex sono normali LaTeX, suddivisi in componenti bibliografia (`.bbx`) e citazione (`.cbx`), e piccole modifiche come l'eliminazione di URL o l'alterazione della punteggiatura sono personalizzazioni di una riga. La riga Unicode è importante se i tuoi riferimenti contengono nomi accentati o script non latini. Il classico BibTeX li altera a meno che ogni carattere non venga sottoposto a escape come `\'{e}` e amici, mentre biber gestisce UTF-8 in modo nativo. L'ultima riga è il motivo per cui il classico BibTeX sopravvive: la maggior parte delle riviste e delle conferenze distribuiscono ancora un file `.bst` e si aspettano la classica toolchain, e i sistemi di invio spesso rifiutano qualsiasi altra cosa.

## Come appare un documento biblatex

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84}
\printbibliography
```

Rispetto al modello classico, `\addbibresource{refs.bib}` (con l'estensione) si sposta nel preambolo, `\printbibliography` sostituisce `\bibliography{refs}` e non c'è alcuna riga `\bibliographystyle` perché lo stile è un'opzione del pacchetto. La build deve eseguire `biber` invece di `bibtex`; l'esecuzione del backend sbagliato è una causa comune di una [bibliografia vuota](/learn/bibliography-empty/).

##Come scegliere

Lasciamo che sia la sede a decidere quando può. Se il modello contiene un file `.bst` o le istruzioni dell'autore menzionano BibTeX, usa BibTeX classico e non contrastarlo. Quando sei tu a controllare il formato, come nel caso di una tesi, di una prestampa o di appunti di lezione, biblatex è lo strumento migliore: personalizzazione più pulita, supporto Unicode reale e tipi di voci appositamente creati per le fonti web. Il tuo database `.bib` funziona invariato con entrambi i sistemi, quindi la scelta non è mai permanente. I comandi di citazione differiscono tra i due e [natbib abitudini vs comandi biblatex](/learn/natbib-vs-biblatex/) mappa un set sull'altro.