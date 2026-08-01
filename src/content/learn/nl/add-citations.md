---

title: "Van .bib-sleutel tot citaat in de tekst"
description: "De gebruikelijke BibTeX-lus met cite- en bibliografie-opdrachten."
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

# Van .bib-sleutel tot citaat in de tekst

Het citeren van een bron in LaTeX bestaat uit twee delen: een database in platte tekst die elk werk één keer beschrijft, en een `\cite`-commando in uw document dat met de sleutel naar een item verwijst. LaTeX nummert de citaten, formatteert de referentielijst en houdt alles consistent wanneer u secties opnieuw ordent of bronnen toevoegt. Je typt "[12]" nooit met de hand, en je nummert nooit zelf iets.

## De opdrachten in het document

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

`\cite{knuth84}` voegt de markering in de tekst in waar de citatie thuishoort. De twee commando's onderaan doen de rest: `\bibliographystyle{plain}` kiest hoe citaten en referenties worden opgemaakt, en `\bibliography{refs}` geeft een naam aan het databasebestand (zonder de `.bib`-extensie) en geeft aan waar de referentielijst moet worden afgedrukt, meestal net vóór `\end{document}`. Alleen bronnen die u daadwerkelijk citeert, verschijnen in de lijst.

## De vermelding in de database

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

Dit staat in `refs.bib`, een apart bestand naast je `main.tex`. Het woord na `@` is het invoertype, `knuth84` is de citatiesleutel en de rest zijn velden die de stijl gebruikt om de opgemaakte referentie op te bouwen. De sleutel is de enige link tussen de twee bestanden, dus deze moet exact overeenkomen met het argument `\cite`, inclusief hoofdlettergebruik. U kunt een hele database controleren op ontbrekende velden en verkeerd ingedeelde vermeldingen met de [BibTeX validator](/tools/bibtex-validator/).

## Waarom één compilatie niet genoeg is

De bibliografie wordt gebouwd door een apart programma. Bij de eerste LaTeX-passage schrijft het document de lijst met geciteerde sleutels naar een hulpbestand. Het `bibtex` programma leest vervolgens die lijst, haalt de overeenkomende items uit `refs.bib` en formatteert ze. Nog twee LaTeX-passages vouwen het resultaat weer naar binnen en lossen de markeringen in de tekst op. Oleafly voert deze volledige cyclus voor u uit bij elke compilatie. Als je met de hand bouwt en de middelste stap overslaat, verschijnen citaten als vetgedrukte vraagtekens; zie [Wissen van mysterieuze citatietekens](/learn/citation-quest-mark/) als dat gebeurt.

## Waar te gaan vanaf hier

Eén enkel `.bib`-bestand kan geschikt zijn voor elk artikel dat u schrijft, dus het loont de moeite om het zorgvuldig op te bouwen. [Bouw een .bib die lang meegaat](/learn/create-bibliography/) omvat invoertypen, verplichte velden en sleutels die tien jaar meegaan. Wanneer een locatie een ander uiterlijk wil, verander je één regel in plaats van de vermeldingen, zoals uitgelegd in [Numeriek, auteur-jaar, tijdschriftstijlen](/learn/change-citation-style/).