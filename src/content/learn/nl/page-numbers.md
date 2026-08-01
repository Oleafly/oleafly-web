---

title: "Paginanummers aan of uit"
description: "eenvoudig, leeg, Romeins versus Arabisch, cijfers op de titelpagina onderdrukt."
category: "type-and-shape"
order: 5
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Paginanummers aan of uit

Paginanummers verschijnen standaard in `article`: de standaardklassen gebruiken de `plain` paginastijl, waarbij het nummer onderaan elke pagina wordt gecentreerd. Meestal is dat prima en denk je er nooit over na. De drie situaties waarin je erover nadenkt zijn het verbergen van het nummer op een titelpagina, het volledig uitschakelen van de nummering en het schakelen tussen Romeinse en Arabische cijfers in een langer document.

## Het nummer op de titelpagina verbergen

Een titelpagina met een eenzame "1" onderaan ziet er onvoltooid uit. De oplossing is één regel die direct nadat de titel is ingesteld:

```latex
\maketitle
\thispagestyle{empty}
```

`\thispagestyle{empty}` verandert de pagina-stijl alleen voor de huidige pagina, en `empty` is de ingebouwde stijl die niets in de kop- of voettekst afdrukt. De volgorde is belangrijk: deze moet na `\maketitle` op dezelfde pagina komen, omdat `\maketitle` zelf het pagina-opmaakprofiel opnieuw instelt. Merk op dat de pagina nog steeds telt; de volgende pagina krijgt nummer 2. Als u `\begin{titlepage}...\end{titlepage}` gebruikt in plaats van `\maketitle`, wordt het nummer voor u onderdrukt en begint de volgende pagina bij 1.

## Stijlen en nummeringssystemen

```latex
\pagestyle{plain} % number at bottom
\pagestyle{empty} % nothing
\pagenumbering{roman}
\pagenumbering{arabic}
```

Deze twee paar commando's besturen verschillende dingen, en het door elkaar halen ervan is het klassieke struikelblok. `\pagestyle{...}` bepaalt waar het nummer verschijnt en wat er omheen staat: `plain` geeft het gecentreerde voettekstnummer, `empty` verwijdert kop- en voetteksten van elke pagina vanaf dat punt. Het zegt niets over hoe het getal eruit ziet.

`\pagenumbering{...}` bepaalt hoe het getal wordt geschreven: `roman` levert i, ii, iii op, terwijl `arabic` 1, 2, 3 produceert. Er zijn ook `Roman` voor I, II, III en `alph` voor a, b, c, hoewel je ze zelden nodig zult hebben. `\pagenumbering` zet ook de paginateller terug op 1. Dat resetten is een feature, geen bug: het zorgt ervoor dat een proefschrift het voorwoord i tot en met vi kan nummeren en vervolgens hoofdstuk één op pagina 1 kan beginnen.

Als je volledige controle wilt over de plaatsing, zoals het nummer in een hoek of gecombineerd met een lopende titel, dan is dat de taak van het fancyhdr-pakket in plaats van deze ingebouwde ins. Zie [hoofden en voeten lopen](/learn/headers-footers/).

## De veelgemaakte fout

Door '\pagestyle{empty}' te schrijven terwijl je '\thispagestyle{empty}' bedoelde, worden getallen stilletjes uit het hele document verwijderd, en het kan zijn dat je het pas merkt als een recensent vraagt ​​waarom je pagina's ongenummerd zijn. Onthoud de regel: `\dezepaginastijl` is een uitzondering voor één pagina, `\paginastijl` is een wijziging voor het hele document.

Voorwerk proefschrift: [Romeinse/Arabische gids](/learn/front-matter-page-numbers/).