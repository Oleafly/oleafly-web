---

title: "Dirac-notatie"
description: "rempakket voor bh's, kets en matrixelementen."
category: "field-kits"
order: 2
level: "intermediate"
tags: ["physics"]
featured: false
updated: 2026-07-25
---

# Dirac-notatie

De kwantummechanica schrijft staten als kets, hun dualen als beha's en innerlijke producten als paren tussen haakjes. Het met de hand opbouwen van de notatie uit `\langle`, `|` en `\rangle` werkt, maar het is vervelend en de scheidingstekens groeien niet mee met de inhoud. Het `braket`-pakket biedt opdrachten die de notatie samenstellen en alles op maat maken.

```latex
\usepackage{braket}
\braket{\psi|\phi}
\braket{\psi|A|\phi}
\set{\vec{x}|x > 0}
```

## Wat elke opdracht doet

`\braket{\psi|\phi}` stelt het volledige binnenproduct in: hoekhaken aan de buitenkant, een verticale balk tussen de twee toestanden, allemaal op elkaar afgestemd in hoogte. Met twee balken wordt `\braket{\psi|A|\phi}` het matrixelement van de operator A tussen de twee toestanden, de vorm die wordt gebruikt voor verwachtingswaarden en verstoringsberekeningen. Het pakket biedt ook `\bra{\psi}` en `\ket{\phi}` voor de twee helften afzonderlijk. Een kale ket is de gebruikelijke manier om een ​​staat in proza ​​te benoemen.

`\set{\vec{x}|x > 0}` is een bonus uit hetzelfde pakket: set-builder-notatie met accolades en een middenbalk, bruikbaar tot ver buiten de natuurkunde.

Maatvoering is de echte reden om het pakket te gebruiken. Plaats een breuk of een som binnen `\braket` en de haakjes en staven strekken zich uit zodat ze bij elkaar passen. Een met de hand gebouwde `\langle...\rangle` heeft `\left` en `\right` nodig op elk scheidingsteken en heeft nog steeds de neiging buiten proporties te raken.

## Alternatieven en buren

Het `physics`-pakket biedt een vergelijkbare set, inclusief `\bra`, `\ket`, `\ev` voor verwachtingswaarden en `\mel` voor matrixelementen, naast afkortingen voor afgeleiden en commutatoren. Beide pakketten definiëren `\bra` en `\ket`, dus kies er één per document in plaats van beide te laden. In een sjabloon waar u geen pakketten kunt toevoegen, wordt `\langle \psi | \phi \rangle` met `\left`/`\right` rond hoge inhoud produceert dezelfde uitvoer met meer typen.

Voor Feynman-diagrammen, die vaak in dezelfde documenten voorkomen, bouwen pakketten zoals `tikz-feynman` voort op TikZ; dat is een aparte tekenvaardigheid, die qua geest dichter bij [commutatieve diagrammen](/learn/commutatieve-diagrammen/) ligt dan bij wat dan ook op deze pagina.

De veelgemaakte fout is het typen van `<\psi|\phi>` met de hoektekens van het toetsenbord. Dit zijn de kleiner-dan- en groter-dan-relaties, dus LaTeX plaatst ze als vergelijkingen en tekent ze op de verkeerde hoogte. Echte Dirac-haakjes komen van `\langle` en `\rangle` of, beter, van de bovenstaande commando's. Het verschil wordt duidelijk op het moment dat je beide vormen naast elkaar zet in de [live speeltuin](/live/).