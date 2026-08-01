---

title: "Koppen die zichzelf nummeren"
description: "doorsnede door alinea, formulieren met ster, secnumdiepte."
category: "paper-bones"
order: 2
level: "beginner"
tags: ["structure"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Sections check'
  questions:
    - prompt: 'What does \section{Introduction} mainly do?'
      choices:
        - 'Only bold the next paragraph'
        - 'Print a numbered heading and register it for the TOC / PDF outline'
        - 'Start a new PDF file'
        - 'Insert a citation'
      answer: 'B'
      level: beginner
    - prompt: 'How do you get an unnumbered section heading?'
      choices:
        - '\section*{...}'
        - '\section[none]{...}'
        - '\unnumber{\section{...}}'
        - 'Just write \textbf{...}'
      answer: 'A'
      level: beginner
    - prompt: 'Why use real heading commands instead of hand-bolded lines?'
      choices:
        - 'Bold is illegal in LaTeX'
        - 'Headings drive numbering, the TOC, and navigation. Fake bold doesn''t.'
        - 'Manual bold compiles faster'
        - 'Sections can''t hold math'
      answer: 'B'
      level: beginner
    - prompt: 'What''s the usual next level under \section?'
      choices:
        - '\chapter (even in article)'
        - '\subsection'
        - '\maketitle'
        - '\bibliography'
      answer: 'B'
      level: beginner
---

# Koppen die zichzelf nummeren

In een tekstverwerker nummert u kopjes met de hand en hernummert u ze elke keer dat u er een verplaatst. LaTeX weigert u dat te laten doen. U geeft aan wat elke kop is, een paragraaf of een subparagraaf of een hoofdstuk, en de nummering regelt zichzelf. Voeg een nieuwe sectie in het midden van uw document in en alles erna wordt opnieuw genummerd bij de volgende compilatie, samen met elke kruisverwijzing en elke inhoudsopgave die ernaar verwijst.

## De hiërarchie

```latex
\part{...} % book
\chapter{...} % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
```

Deze commando's vormen een vaste ladder. `\section` is het alledaagse werkpaard in de klasse `article`, met `\subsection` en `\subsubsection` eronder genest. `\chapter` bestaat alleen in de klassen `report` en `book`. Daarom mislukt het plakken van scriptiehoofdstukken in een artikelsjabloon met een ongedefinieerde controlereeks. `\deel` staat boven hoofdstukken en is zeldzaam buiten lange boeken. `\paragraaf` is een vreemde eend in de bijt: het produceert een vetgedrukte kop op dezelfde regel als de volgende tekst in plaats van een kop op een eigen regel, wat bijna iedereen de eerste keer verrast.

Elke opdracht neemt de koptekst tussen accolades, drukt deze af in het door de klasse gekozen lettertype en grootte, nummert deze en registreert deze zodat `\inhoudsopgave' deze later kan terugvinden. Je stijlt koppen nooit inline. Als u verschillende koplettertypen wilt, is dat een documentbrede beslissing die in de preambule wordt genomen.

## Nummers onderdrukken

Formulieren met ster onderdrukken cijfers: `\section*{Dankbetuigingen}`. De ster houdt de kop ook volledig buiten de inhoudsopgave en buiten de nummeringsreeks, zodat het gedeelte erna doorgaat alsof de kop met de ster er niet was. Dit is precies wat je nodig hebt voor dankbetuigingen, een voorwoord of een op zichzelf staande conclusie in een kort artikel. Als er nog steeds een gedeelte met ster in de inhoudsopgave verschijnt, is er een oplossing van één regel die wordt behandeld in [de inhoudsopgaveles](/learn/table-of-contents/).

## Nummerdiepte regelen

```latex
\setcounter{secnumdepth}{2}
\setcounter{tocdepth}{2}
```

`secnumdiepte` bepaalt hoe diep de nummering gaat. In 'artikel' zijn secties niveau 1, subsecties niveau 2 en subsubsecties niveau 3, dus als de teller op 2 cijfers wordt ingesteld, worden secties en subsecties genummerd, maar blijven de koppen van de subsecties ongenummerd terwijl hun opmaak behouden blijft. `tocdiepte` is hetzelfde idee voor de inhoudsopgave: het bepaalt hoe diep de TOC-lijst gaat, onafhankelijk van wat er op de pagina wordt genummerd. Beide regels horen thuis in de preambule.

Een veelgemaakte fout is het overslaan van niveaus, bijvoorbeeld door van `\section` rechtstreeks naar `\subsubsection` te springen omdat u de kleinere kop leuk vindt. De nummering werkt nog steeds, maar levert vreemde resultaten op, zoals "1.0.1", en lezers verliezen de structuur uit het oog. Kies kopniveaus voor de betekenis en laat de klas het uiterlijk bepalen. Als u niet zeker weet hoe het skelet van uw document in elkaar past, loopt [de document-skeletles](/learn/document-skeleton/) er doorheen.