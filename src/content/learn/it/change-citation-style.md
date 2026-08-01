---

title: "Stili numerici, autore-anno, rivista"
description: "Scambia stili senza riscrivere il database."
category: "cite-your-sources"
order: 4
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Stili numerici, autore-anno, rivista

Uno stile di citazione controlla due cose: l'aspetto dell'indicatore nel testo, ad esempio "[12]" rispetto a "(Knuth, 1984)", e il modo in cui è formattata ciascuna voce nell'elenco di riferimenti. La buona notizia è che lo stile è completamente separato dal tuo database `.bib`. Puoi cambiare un articolo da numerico ad anno-autore, o riformattarlo per una rivista diversa, cambiando una riga nel preambolo. Le tue voci rimangono così come sono.

## Cambiare stile con il classico BibTeX

Con BibTeX, lo stile risiede nel comando `\bibliographystyle{...}`, che nomina un file `.bst`. Scambia l'argomento e ricompila:

```latex
\bibliographystyle{plain}    % [1], entries sorted alphabetically
\bibliographystyle{abbrv}    % like plain, but first names and journals abbreviated
\bibliographystyle{alpha}    % labels like [Knu84] built from author and year
\bibliographystyle{ieeetr}   % IEEE-style numeric, in citation order
\bibliographystyle{apalike}  % author-year, needs \usepackage{apalike} or natbib
```

Le riviste e le conferenze solitamente inviano il proprio file `.bst`, ad esempio `IEEEtran.bst` o `ACM-Reference-Format.bst`. Metti quel file accanto al tuo `main.tex` e chiamalo in `\bibliographystyle`. Nota che un `.bst` si cuoce in un solo sguardo; se la sede vuole le citazioni per anno dell'autore, è necessario anche il pacchetto `natbib` per ottenere comandi come `\citep` e `\citet`.

## Cambiamo stile con biblatex

Con biblatex, lo stile è un'opzione sulla confezione stessa:

```latex
\usepackage[style=authoryear]{biblatex}
```

Altri valori comuni sono `style=numeric`, `style=numeric-comp` per intervalli compressi come `[3-6]`, `style=alphabetic` e `style=apa` o `style=ieee` dai pacchetti aggiuntivi. Poiché gli stili biblatex sono scritti in LaTeX anziché nel vecchio linguaggio `.bst`, sono molto più facili da modificare, ad esempio per modificare la punteggiatura o eliminare URL.

## Ricompilare correttamente dopo il passaggio

Dopo qualsiasi modifica di stile, i vecchi file ausiliari contengono ancora dati formattati con lo stile precedente, quindi esegui un ciclo completo: compila una volta, esegui il backend (`bibtex` per BibTeX classico, `biber` per biblatex), quindi compila altre due volte in modo che i riferimenti incrociati si sistemino. Oleafly esegue questo ciclo per te, ma se le citazioni sembrano obsolete dopo un passaggio manuale, eliminare i file `.aux` e `.bbl` e ricostruire da zero risolve il problema.

## Quale famiglia dovresti usare?

Se la sede di destinazione fornisce un file `.bst` o una classe che prevede BibTeX, utilizzare il classico BibTeX; questa è ancora la situazione nella maggior parte delle riviste. Se controlli tu stesso il formato, come nel caso di una tesi o di una prestampa, biblatex è la scelta più adatta. I compromessi sono trattati in [Biblatex classico o biblatex](/learn/bibtex-vs-biblatex/) e le differenze tra i comandi in [abitudini di natbib e comandi biblatex](/learn/natbib-vs-biblatex/).