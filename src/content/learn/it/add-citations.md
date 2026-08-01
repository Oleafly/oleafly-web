---

title: "Dalla chiave .bib alla citazione nel testo"
description: "Il solito ciclo BibTeX con comandi di citazione e bibliografia."
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Citations check'
  questions:
    - prompt: 'What''s the usual BibTeX setup?'
      choices:
        - 'A Word comment plus a footnote'
        - 'A .bib entry and a \cite{key} in the document'
        - 'A bare URL in the text'
        - 'A screenshot from Google Scholar'
      answer: 'B'
      level: beginner
    - prompt: 'What has to match between \cite{...} and the .bib file?'
      choices:
        - 'The journal impact factor'
        - 'The citation key, exactly, including capitalization'
        - 'Only the PDF filename'
        - 'The section number'
      answer: 'B'
      level: beginner
    - prompt: 'What do \bibliographystyle and \bibliography usually control?'
      choices:
        - 'Figure placement and image DPI'
        - 'How references look, which .bib file to read, and where the list prints'
        - 'Math delimiters'
        - 'Page margins only'
      answer: 'B'
      level: beginner
    - prompt: 'Why isn''t one LaTeX pass enough for citations?'
      choices:
        - 'Citations need a browser'
        - 'BibTeX or biber, then more LaTeX passes, turn keys into markers and the reference list'
        - 'You have to reboot'
        - '\cite only works offline'
      answer: 'B'
      level: intermediate
    - prompt: 'Citations show as bold question marks. What''s a common cause?'
      choices:
        - 'The title is too long'
        - 'You skipped the bibliography step, or the key isn''t in the .bib file'
        - 'You used article class'
        - 'Math mode is open'
      answer: 'B'
      level: beginner
---

# Dalla chiave .bib alla citazione nel testo

Citare una fonte in LaTeX implica due parti: un database di testo semplice che descrive ogni opera una volta e un comando `\cite` nel documento che punta a una voce tramite la sua chiave. LaTeX numera la citazione, formatta l'elenco di riferimenti e mantiene tutto coerente quando riordini le sezioni o aggiungi fonti. Non digiti mai "[12]" a mano e non rinumeri mai nulla da solo.

## I comandi nel documento

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

`\cite{knuth84}` inserisce il marcatore nel testo ovunque appartenga la citazione. I due comandi in basso fanno il resto: `\bibliographystyle{plain}` sceglie come formattare le citazioni e i riferimenti, e `\bibliography{refs}` nomina il file del database (senza la sua estensione `.bib`) e indica dove deve essere stampato l'elenco dei riferimenti, di solito subito prima di `\end{document}`. Nell'elenco vengono visualizzate solo le fonti effettivamente citate.

## La voce nel database

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

Questo risiede in "refs.bib", un file separato accanto al tuo "main.tex". La parola dopo "@" è il tipo di voce, "knuth84" è la chiave di citazione e il resto sono campi utilizzati dallo stile per creare il riferimento formattato. La chiave è l'unico collegamento tra i due file, quindi deve corrispondere esattamente all'argomento di `\cite`, comprese le maiuscole. Puoi controllare un intero database per verificare la presenza di campi mancanti e voci con formato errato con il [validatore BibTeX](/tools/bibtex-validator/).

## Perché una sola compilazione non è sufficiente

La bibliografia è costruita da un programma separato. Al primo passaggio LaTeX, il documento scrive l'elenco delle chiavi citate in un file ausiliario. Il programma `bibtex` poi legge l'elenco, estrae le voci corrispondenti da `refs.bib` e le formatta. Altri due passaggi LaTeX ripiegano il risultato e risolvono i marcatori nel testo. Oleafly esegue questo ciclo completo per te su ogni compilazione. Se costruisci a mano e salti il ​​passaggio intermedio, le citazioni verranno visualizzate come punti interrogativi in ​​grassetto; vedere [Cancellazione delle virgolette misteriose](/learn/citation-question-mark/) quando ciò accade.

## Dove andare da qui

Un singolo file `.bib` può servire per ogni articolo che scrivi, quindi vale la pena costruirlo attentamente. [Costruisci un .bib che duri](/learn/create-bibliography/) copre i tipi di voci, i campi obbligatori e le chiavi che sopravvivono per un decennio. Quando una sede desidera un aspetto diverso, si modifica una riga anziché qualsiasi voce, come spiegato in [Numerico, autore-anno, stili di giornale](/learn/change-citation-style/).