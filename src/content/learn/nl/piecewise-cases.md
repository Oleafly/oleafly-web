---

title: "Stuksgewijze definities"
description: "De casusomgeving voor omstandigheden onder één functie."
category: "notation-depth"
order: 1
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Stuksgewijze definities

Een stuksgewijze functie geeft verschillende formules op verschillende delen van zijn domein: de absolute waarde, de ReLU-activering, een belastingschijfschema. De zetconventie is een enkele hoge linkeraccolade met één rij per hoofdlettergebruik, waarbij elke rij de formule toont en de voorwaarde waaronder deze van toepassing is. Het `amsmath`-pakket biedt de `cases`-omgeving, die precies deze lay-out produceert zonder enige handmatige maatvoering van accolades.

## De casusomgeving

```latex
\[
f(x) =
\begin{cases}
 x^2 & x \ge 0 \\
 -x & x < 0
\end{cases}
\]
```

Lees dit regel voor regel: het hele ding zit in `\[ ... \]`, dus het wordt wiskunde op een eigen regel weergegeven. `f(x) =` is gewone wiskunde, en vervolgens opent `\begin{cases}` het stuksgewijs blok. Binnenin heeft elke rij twee kolommen, gescheiden door `&`: de formule aan de linkerkant, de voorwaarde aan de rechterkant. Rijen eindigen met `\\`, behalve dat de laatste rij er geen nodig heeft. Tijdens het compileren tekent LaTeX één linkeraccolade die hoog genoeg is om beide rijen te omspannen en lijnt de formules in de ene kolom uit en de voorwaarden in een andere.

De `&` doet hier echt werk. Zonder dit zou elke rij één enkele klodder zijn en zouden de omstandigheden niet verticaal uitgelijnd zijn. Hiermee delen `x^2` en `-x` een linkerrand, en `x \ge 0` en `x < 0` delen hun eigen linkerrand, wat de definitie scanbaar maakt.

Om dit te kunnen compileren, moeten er twee dingen aanwezig zijn. Ten eerste `\usepackage{amsmath}` in de preambule, aangezien `cases` geen deel uitmaakt van de kern van LaTeX. Ten tweede moet de omgeving zich in de wiskundige modus bevinden. `cases` bouwt wiskundige inhoud op, maar opent de wiskundemodus niet zelf. Als een van beide ontbreekt, krijgt u de foutmelding 'Omgevingsgevallen niet gedefinieerd' of 'Ontbrekende $ ingevoegd'. Dit laatste wordt uitgelegd in [Ontbrekende dollar ingevoegd](/learn/missing-dollar/).

## De woorden toevoegen

De meeste gepubliceerde stuksgewijs gedefinieerde definities bevatten het woord "als", en vaak een laatste "anders". Omdat de voorwaardekolom de wiskundige modus is, hebben gewone woorden `\text{...}` nodig om in het documentlettertype met de juiste spatiëring te verschijnen:

```latex
\[
f(x) =
\begin{cases}
 x^2 & \text{if } x \ge 0 \\
 -x & \text{otherwise}
\end{cases}
\]
```

Let op de spatie binnen `\text{if }`. De wiskundige modus negeert spaties die u typt, maar binnen `\text` zijn spaties reëel, dus als u er een voor de afsluitende accolade plaatst, wordt 'if' gescheiden van de voorwaarde die volgt.

## Varianten en een veelgemaakte fout

Als de formules lange breuken zijn en er krap uitzien, biedt het pakket `mathtools` `dcases`, een drop-in vervanging die elke formule in weergavestijl instelt. Er zijn ook 'rcases' voor de spiegelbeeldsituatie waarbij de beugel rechts thuishoort.

De meest voorkomende fout is het vergeten van `\\` tussen rijen, waardoor twee letters in stilte worden samengevoegd tot één lange regel. Als uw gecompileerde uitvoer voorwaarden laat zien die in formules voorkomen, tel dan eerst uw rij-einden. Live experimenteren met de omgeving kan in de [speeltuin](/live/).