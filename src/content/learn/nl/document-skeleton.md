---

title: "Een skelet dat je kunt hergebruiken"
description: "Klasse, preambule, maketitle, secties, bibliografie: de vorm van vrijwel elk artikel."
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

# Een skelet dat je kunt hergebruiken

Haal de inhoud weg en bijna elk LaTeX-document heeft hetzelfde skelet: een klassendeclaratie, een preambule van de instellingen en een hoofdtekst tussen `\begin{document}` en `\end{document}`. Zodra u deze vorm kent, start u een nieuw project door het skelet te plakken, de titel te wijzigen en te schrijven.

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

Van boven naar beneden lezen: `\documentclass[11pt]{article}` kiest het documenttype en stelt de basislettergrootte in als optie. Al het andere in het ontwerp vloeit voort uit deze keuze. Het gebied tussen de klassenregel en `\begin{document}` is de [preamble](/learn/preamble-explained/), waar pakketten worden geladen en metagegevens zoals `\title` en `\author` worden opgeslagen. `\begin{document}` markeert waar zichtbare inhoud begint, `\maketitle` typt het opgeslagen titelblok en de hoofdtekst volgt als secties, figuren en uiteindelijk een bibliografie. `\end{document}` sluit het document. Alles wat erna komt, wordt stilzwijgend genegeerd, waardoor af en toe een stuk tekst wordt verborgen dat iemand op de verkeerde plaats heeft geplakt.

## Klassekeuzes

| Klasse | Gebruik |
| --- | --- |
| `artikel` | Papieren, huiswerk, aantekeningen |
| `rapport` | Langere rapporten met hoofdstukken |
| `boek` | Boeken en veel scripties |
| `beamer` | Dia's |

De les is niet cosmetisch; het verandert welke commando's er bestaan. `artikel` heeft geen `\hoofdstuk`, dus het plakken van scriptiehoofdstukken erin mislukt onmiddellijk. `rapport` voegt hoofdstukken toe en geeft de titel een eigen pagina. 'boek' gaat uit van dubbelzijdig afdrukken en opent hoofdstukken op de rechterpagina's. `beamer` herstructureert alles rondom frames voor dia's. Tijdschriften en conferenties verzenden hun eigen lessen, en als je voor een locatie schrijft, vervangt de klasse deze beslissing volledig.

Twee fouten zijn verantwoordelijk voor de meeste gebroken skeletten. Tekst die vóór `\begin{document}` wordt geplaatst, activeert de fout "Missing \begin{document}", omdat de preambule alleen mag configureren en nooit mag worden afgedrukt. En een ontbrekend `\end{document}` laat de compiler aan het einde van het bestand wachten met een nutteloos bericht over het einde van de invoer. Als een van beide verschijnt, controleer dan het kader van het document voordat u de inhoud vermoedt.

De skeletschalen. Een notitie van vier pagina's houdt het lichaam op één lijn; een proefschrift verplaatst elk hoofdstuk naar een eigen bestand en haalt ze uit de hoofdmap, zoals weergegeven in [split chapter files](/learn/split-chapter-files/). Het frame eromheen verandert niet.