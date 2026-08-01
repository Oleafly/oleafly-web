---

title: "Symbool bureaukaart"
description: "Accenten, grote operatoren, cijfersets en rekbare scheidingstekens op één pagina."
category: "equation-craft"
order: 8
level: "beginner"
tags: ["math", "cheatsheet"]
featured: true
updated: 2026-07-25
---

#Symbool bureaukaart

Deze pagina is eerder een referentiekaart dan een les. Accenten, grote operatoren, getallenreeksen en scheidingstekens die de meeste dagelijkse wiskunde bestrijken, allemaal op één plek. Elk commando hier werkt alleen in de wiskundige modus, en de getallensets hebben `\usepackage{amssymb}` nodig in de preambule. Voor het Griekse alfabet en de basisrelaties, zie [Griekse en alledaagse symbolen](/learn/greek-letters/). Om te zien hoe de wiskundige modus zelf werkt, begin je met [basisbeginselen van de wiskundige modus](/learn/math-mode/).

## Accenten

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{xyz}
```

| Commando | Rendert als | Conventionele betekenis |
| --- | --- | --- |
| `\hoed{x}` | x met circumflex | Schatters, eenheidsvectoren, operatoren |
| `\balk{x}` | x met stang | Monstermiddelen, complexe conjugaten |
| `\tilde{x}` | x met tilde | Benaderingen, getransformeerde variabelen |
| `\vec{x}` | x met pijl | Vectoren |
| `\punt{x}`, `\ddot{x}` | een of twee punten | Eerste en tweede keerderivaten |
| `\widehat{xyz}`, `\overline{xyz}` | uitgerekt accent | Accenten boven uit meerdere letters bestaande uitdrukkingen |

De effen accenten passen in één enkele letter; de varianten 'wide' en 'over' strekken zich uit over wat zich tussen de beugels bevindt.

## Grote exploitanten

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint
\lim_{x \to 0} \max_{x} \inf_{x}
```

| Commando | Betekenis |
| --- | --- |
| `\som_{i=1}^n` | Som met onder- en bovengrenzen |
| `\prod_{i=1}^n` | Product |
| `\int_a^b` | Bepaalde integraal |
| `\punt` | Contourintegraal |
| `\lim_{x \tot 0}` | Limiet |
| `\max_{x}`, `\inf_{x}` | Maximaal, infimum over een variabele |

Grenzen zijn verbonden met de gewone subscript- en superscript-syntaxis, geschoord als ze langer zijn dan één teken. Bij wiskunde op het scherm plaatsen sommen, producten en limieten hun grenzen boven en onder het symbool. Integralen houden de hunne aan de zijkant. Dat is de standaardconventie.

## Nummersets

```latex
\mathbb{N} \mathbb{Z} \mathbb{Q} \mathbb{R} \mathbb{C}
```

Dit zijn de natuurlijke getallen, gehele getallen, rationale getallen, reële getallen en complexe getallen die vetgedrukt op het bord staan. Het `\mathbb` alfabet en zijn verwanten worden behandeld in [Blackboard, script, Fraktur](/learn/mathbb-mathcal/).

## Scheidingstekens

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
```

Het scheidingsteken van `\left` en `\right` wordt aangepast aan de hoogte van het ingesloten materiaal, zodat haakjes rond een groot gedeelte dit omsluiten in plaats van het op teksthoogte af te knippen. Ze moeten in paren komen. Om slechts één kant te tonen, sluit u af met `\right.` en de onzichtbare partner voldoet aan de koppeling. Accolades zijn speciale tekens, dus vaste accolades worden geschreven als `\{` en `\}`. Hoekhaken voor inproducten zijn `\langle` en `\rangle`, nooit de kleiner-dan- en groter-dan-tekens van het toetsenbord, dit zijn relatiesymbolen met de verkeerde vorm en spatiëring.

Elke rij van deze kaart kan in de [live speeltuin](/live/) worden geplakt om het weergegeven formulier naast de bron te zien.