---

title: "Indices die niet exploderen"
description: "Accolades voor scripts die uit meerdere tekens bestaan, priemgetallen en punten."
category: "equation-craft"
order: 4
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Indices die niet exploderen

Subscripts en superscripts zijn de eerste wiskundige syntaxis die iedereen in LaTeX leert, en ook de bron van de eerste verwarrende uitvoer die iedereen produceert. Het onderstrepingsteken `_` verlaagt wat volgt, het dakje `^` verhoogt het, en beide zijn van toepassing op precies één teken, tenzij u anders zegt. Die één-karakterregel zit achter bijna elke verminkte index die je ooit zult zien.

## De basisvormen

```latex
x_i x^2
x_{ij} x^{2n}
x_i^2 x_{i_j}^{2n}
```

`x_i` plaatst een enkele `i` in de subscriptpositie en `x^2` verhoogt een enkele `2`. Omdat `_` en `^` alleen het volgende token pakken, moet alles dat langer is dan één teken tussen accolades worden geplaatst: `x_{ij}` subscripteert beide letters, en `x^{2n}` verhoogt de hele `2n`. Je kunt zowel een subscript als een superscript aan hetzelfde symbool koppelen, in willekeurige volgorde, en LaTeX stapelt ze correct: `x_i^2`. Scripts nestelen zich ook. In `x_{i_j}` is de `j` een subscript van de `i`, die zelf een subscript is van `x`, en elk niveau wordt steeds kleiner ingesteld.

Scripts die uit meerdere tekens bestaan ​​**moeten** accolades gebruiken: `x_ij` is `x_i` en dan `j`. LaTeX rapporteert dit niet als een fout, omdat `x_i` gevolgd door een variabele `j` volkomen legale wiskunde is. De formule is samengesteld, ziet er in één oogopslag bijna goed uit en betekent iets anders. Bouw de gewoonte van een beugel vroeg op. Bij twijfel zet u het script vast.

Dezelfde valstrik verschijnt in grenzen en grenzen. `\sum_i=1^n` doet niet hoe het eruit ziet. De juiste vorm is `\sum_{i=1}^{n}`, waarbij de gehele `i=1` één subscript met accolades is. Als je `_` of `^` geheel buiten de wiskundemodus gebruikt, krijg je de klassieke fout die wordt behandeld in [Ontbrekende dollar ingevoegd](/learn/missing-dollar/).

## Priemgetallen en punten

```latex
f' f'' \dot{x} \ddot{x}
```

Voor derivaten heb je zelden een letterlijk superscript nodig. De apostrof-sleutel produceert een priemgetal: `f'` wordt weergegeven als f met één priemgetal, `f''` met twee, en LaTeX zorgt zelf voor de verhoging en de spatiëring, dus er is geen behoefte aan `f^{\prime}`. Voor tijdsafgeleiden in de natuurkundige stijl plaatst `\dot{x}` een enkele punt over de x en `\ddot{x}` plaatst er twee. Dit zijn accenten, dus zetten ze hun betoog tussen accolades.

Nog een subtiliteit: als je een superscript nodig hebt na een priemgetal, koppel ze dan gewoon aan elkaar, zoals in `f'^2`. LaTeX combineert ze in één enkel superscriptcluster.

## Controleer je uitvoer

De snelste manier om de accoladeregel te internaliseren is door `x_ij` en `x_{ij}` naast elkaar te typen in de [live speeltuin](/live/) en te kijken hoe het verschil wordt weergegeven. Wanneer een index er subtiel verkeerd uitziet in een gecompileerd document, is het eerste wat u moet controleren een ontbrekend paar accolades.