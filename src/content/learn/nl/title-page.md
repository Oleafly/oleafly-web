---

title: "Titelblokken en titelpagina's"
description: "maak een titel voor papers, titelpagina voor scripties en rapporten."
category: "paper-bones"
order: 1
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Titelblokken en titelpagina's

Een artikel wordt geopend met een titelblok: titel, auteurs, datum, bovenaan de eerste pagina. Een proefschrift wordt geopend met een volledige titelpagina die is opgemaakt volgens de specificatie van een universiteit. LaTeX behandelt deze als twee verschillende problemen. De eerste wordt geautomatiseerd door `\maketitle`, en de tweede is een leeg canvas dat de `titlepage`-omgeving wordt genoemd.

## Het titelblok

```latex
\title{A Study of Examples}
\author{Ada Lovelace\\University of Something}
\date{\today}
\begin{document}
\maketitle
```

De eerste drie opdrachten slaan alleen metagegevens op. Er verschijnt niets in de PDF wanneer ze worden uitgevoerd. Daarom kunnen ze in de preambule staan. `\maketitle`, geplaatst na `\begin{document}`, is het moment waarop het opgeslagen blok wordt gezet. Binnen `\author` breekt de `\\` een regel af (de gebruikelijke manier om een ​​affiliatie onder een naam te plaatsen), en `\and` scheidt meerdere auteurs zodat ze naast elkaar worden geplaatst. `\date{\today}` drukt de datum af van de dag die u compileert. Schrijf `\date{}` met lege accolades om de datumregel geheel weg te laten. Als u `\date` helemaal weglaat, wordt nog steeds de datum van vandaag afgedrukt.

In de klasse 'article' bevindt het blok zich bovenaan pagina één, met daaronder de tekst. In 'rapport' en 'boek' krijgt het een eigen pagina. Tijdschrift- en conferentieklassen vervangen deze machinerie door hun eigen opdrachten voor relaties, e-mails en ORCID's, dus binnen een sjabloon voor een locatie moet u het voorbeeldbestand ervan volgen in plaats van de standaardopdrachten.

## Een handgebouwde titelpagina

```latex
\begin{titlepage}
 \centering
 \vspace*{2cm}
 {\Large Thesis Title\\[1em]}
 {\large Author Name\\}
 \vfill
 Submitted for the degree of ...\\
 \today
\end{titlepage}
```

De `titlepage`-omgeving biedt u één ongenummerde pagina en volledige handmatige controle, wat de scriptieregelgeving doorgaans vereist. Elk stukje van het voorbeeld verdient zijn plaats. `\centering` centreert alles wat volgt binnen de omgeving. `\vspace*{2cm}` duwt de titel vanaf de bovenrand naar beneden. Het formulier met ster is van belang omdat een '\vspatie' zonder ster bovenaan een pagina wordt weggegooid. De accolades rond `{\Large ...}` bepalen de verandering van de lettergrootte zodat deze eindigt waar de groep eindigt, en `\\[1em]` breekt de regel af met een extra em ruimte eronder. `\vfill` voegt rekbare ruimte in die de resterende hoogte absorbeert, zodat de gradenverklaring en de datum onderaan de pagina terechtkomen, ongeacht hoe lang de titel is.

Gebruik het ene of het andere mechanisme. Het combineren van `\maketitle` met een `titlepage`-omgeving levert twee titelpagina's op, en de klassieke misser voor beginners is de rustige: `\title` en `\author` definiëren maar `\maketitle` vergeten, zodat het document netjes wordt gecompileerd zonder enige titel. De [document-skeletles](/learn/document-skeleton/) laat zien waar het blok in het bestand als geheel past.