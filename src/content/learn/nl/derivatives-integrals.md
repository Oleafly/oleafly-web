---

title: "Afgeleiden en integralen"
description: "Gewone en partiële afgeleiden, bepaalde integralen, dunne ruimtes vóór differentiëlen."
category: "notation-depth"
order: 2
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Afgeleiden en integralen

Calculus-notatie is waar LaTeX zijn geld begint te verdienen. Gestapelde afgeleide breuken, integraaltekens met limieten en punten over variabelen zijn allemaal één of twee commando's. Deze les behandelt het handjevol commando's dat vrijwel elke afgeleide en integraal oplevert die je ooit zult schrijven, plus de kleine spatiëring die gepolijst papier scheidt van ruwe concepten.

## Derivaten

```latex
\frac{dy}{dx}
\frac{\partial f}{\partial x}
\nabla f \quad \nabla^2 f
f'(x) \quad \dot{x}
```

Een gewone afgeleide is slechts een breuk: `\frac{dy}{dx}` stapelt `dy` over `dx`. Voor gedeeltelijke afgeleiden vervangt u de `d` door `\partial`, waardoor het gekrulde gedeeltelijke symbool wordt afgedrukt; `\frac{\partial f}{\partial x}` is de standaardvorm. Gedeeltelijke waarden van hogere orde volgen hetzelfde patroon, bijvoorbeeld `\frac{\partial^2 f}{\partial x \partial y}`.

`\nabla` geeft het gradiëntsymbool, en aangezien het een gewoon symbool is, kun je het op dezelfde manier verhogen: `\nabla^2 f` voor de Laplace-teken. Voor compacte notatie gebruikt `f'(x)` rechtstreeks de apostrofsleutel, en LaTeX converteert een of meer `'`-markeringen naar correct verhoogde priemgetallen. Newtons puntnotatie voor tijdsafgeleiden komt van de accentcommando's `\dot{x}` en `\ddot{x}`, die één of twee punten over het argument plaatsen.

Eén stijlkeuze: sommige tijdschriften willen de differentie `d` rechtopstaand, geschreven `\mathrm{d}`. Als dat bij jou het geval is, definieer dan `\newcommand{\dd}{\mathrm{d}}` één keer in de preambule en schrijf `\frac{\dd y}{\dd x}` zodat je de keuze later kunt omdraaien.

## Integralen

```latex
\int_a^b f(x)\,dx
\iint_D f\,dA
```

`\int` is het integraalteken, en de bekende syntaxis van subscript en superscript kent de limieten: `_a` voor de ondergrens, `^b` voor de bovengrens. Bij inline wiskunde liggen de grenzen naast het bord om de lijn compact te houden; bij weergavewiskunde staan ​​ze nog steeds naast het teken voor integralen (in tegenstelling tot sommen), wat de standaardconventie is. Dubbele en drievoudige integralen krijgen hun eigen commando's, `\iint` en `\iiint`, die de herhaalde tekens op de juiste afstand plaatsen, samen met `\oint` voor contourintegralen.

De `\,` vóór `dx` is een dunne spatie. Zonder dit laat `f(x)dx` de integrand rechtstreeks in het differentieel lopen en moet het oog ze ontwarren. De dunne ruimte is een veelgebruikte conventie, dus maak er een gewoonte van: integrand, dan `\,`, en dan het differentieel.

## Probeer het en een veelgemaakte fout

Deze fragmenten worden weergegeven terwijl u typt in de [live speeltuin](/live/), wat een snelle manier is om een ​​afgeleide stapel te controleren voordat deze in een document wordt geplaatst; zie [basisprincipes van de wiskundige modus](/learn/math-mode/) als de scheidingstekens `$` en `\[` nog nieuw zijn.

De meest voorkomende fout hier is het typen van afgeleiden in de stijl van `d/dx` met een schuine streep in weergavewiskunde waar een gestapelde `\frac` gewenst was, of het vergeten van accolades bij limieten van meerdere tekens: `\int_a^b+1` plaatst alleen de `b` in het superscript. Schrijf `\int_a^{b+1}` zodat de hele expressie wordt verhoogd.