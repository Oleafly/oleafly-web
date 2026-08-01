---

title: "Uno scheletro che puoi riutilizzare"
description: "Classe, preambolo, titolo, sezioni, bibliografia: la forma di quasi ogni articolo."
category: "open-the-loop"
order: 7
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Document skeleton check'
  questions:
    - prompt: 'What are the three main parts of a typical LaTeX document?'
      choices:
        - 'Abstract, figures, and appendix only'
        - 'The class line, the preamble, and the body between begin/end{document}'
        - 'Header, footer, and sidebar'
        - 'A .bib file, a style file, and a PDF'
      answer: 'B'
      level: beginner
    - prompt: 'Which class do you usually pick for a short paper or homework?'
      choices:
        - 'beamer'
        - 'article'
        - 'book'
        - 'no class at all'
      answer: 'B'
      level: beginner
    - prompt: 'Why does pasting \chapter into an article often blow up?'
      choices:
        - 'article turns off all numbering'
        - 'article has no \chapter; chapters live in report/book-style classes'
        - 'You forgot graphicx'
        - 'Chapters only work offline'
      answer: 'B'
      level: beginner
    - prompt: 'If you put real text before \begin{document}, what error do you usually see?'
      choices:
        - 'Undefined control sequence for \par'
        - 'Missing \begin{document}'
        - 'Overfull hbox'
        - 'Citation undefined'
      answer: 'B'
      explanation: 'The preamble is for setup only. It shouldn''t print body text.'
      level: beginner
    - prompt: 'What happens to text after \end{document}?'
      choices:
        - 'It becomes a second PDF page'
        - 'LaTeX ignores it'
        - 'It gets moved into the abstract'
        - 'It always fatal-errors'
      answer: 'B'
      level: beginner
---

# Uno scheletro che puoi riutilizzare

Eliminando il contenuto, quasi tutti i documenti LaTeX avranno la stessa struttura: una dichiarazione di classe, un preambolo di installazione e un corpo tra `\begin{document}` e `\end{document}`. Una volta che conosci questa forma, inizia un nuovo progetto incollando lo scheletro, modificando il titolo e scrivendo.

```latex
\documentclass[11pt]{article}
% preamble: packages, macros, metadata
\title{...}
\author{...}
\begin{document}
\maketitle
% body: sections, figures, bibliography
\end{document}
```

Leggendo dall'alto al basso: `\documentclass[11pt]{articolo}` sceglie il tipo di documento e imposta la dimensione del carattere di base come opzione. Tutto il resto del design deriva da questa scelta. La regione tra la riga della classe e `\begin{document}` è il [preambolo](/learn/preamble-explained/), dove vengono caricati i pacchetti e vengono archiviati i metadati come `\title` e `\author`. `\begin{document}` segna il punto in cui inizia il contenuto visibile, `\maketitle` compone il cartiglio memorizzato e il corpo segue come sezioni, figure ed eventualmente una bibliografia. `\end{document}` chiude il documento. Tutto ciò che segue viene ignorato silenziosamente, il che a volte nasconde un pezzo di testo incollato da qualcuno nel posto sbagliato.

## Scelte di classe

| Classe | Utilizzare |
| --- | --- |
| "articolo" | Documenti, compiti, appunti |
| `rapporto` | Rapporti più lunghi con capitoli |
| "libro" | Libri e tante tesi |
| `proiettore` | Diapositive |

La lezione non è estetica; cambia quali comandi esistono. "articolo" non ha "\capitolo", quindi incollare i capitoli della tesi al suo interno fallisce immediatamente. "report" aggiunge capitoli e assegna al titolo una propria pagina. "libro" presuppone la stampa fronte-retro e apre i capitoli sulle pagine di destra. `beamer` ristruttura tutto attorno ai telai per diapositive. Riviste e conferenze forniscono le proprie classi e quando scrivi per una sede, la sua classe sostituisce completamente questa decisione.

Due errori spiegano la maggior parte degli scheletri rotti. Il testo inserito prima di `\begin{document}` attiva l'errore "Mancante \begin{document}", perché il preambolo può solo configurare, mai stampare. E un `\end{document}` mancante lascia il compilatore in attesa alla fine del file con un messaggio inutile sulla fine dell'input. Quando viene visualizzato uno dei due, controlla la cornice del documento prima di sospettarne il contenuto.

Le squame dello scheletro. Una nota di quattro pagine mantiene il corpo in linea; una tesi sposta ogni capitolo nel proprio file e li inserisce dalla radice, come mostrato in [file di capitoli divisi](/learn/split-chapter-files/). La cornice attorno a loro non cambia.