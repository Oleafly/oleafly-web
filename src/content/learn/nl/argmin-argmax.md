---

title: "Operators die je één keer bedenkt"
description: "DeclareMathOperator voor argmin, argmax en soortgelijke namen."
category: "notation-depth"
order: 3
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Operators die je één keer bedenkt

LaTeX wordt geleverd met benoemde operators zoals `\sin`, `\log` en `\max` die rechtop worden afgedrukt met de juiste spatiëring eromheen. Het wordt niet geleverd met `\argmin` of `\argmax`, ook al gebruiken optimalisatiepapieren deze voortdurend. Als u `argmin` in de wiskundige modus als gewone letters typt, behandelt LaTeX dit als het product van zes variabelen: de letters worden cursief weergegeven, samengedrukt, zonder tussenruimte tussen operatoren. Vermeld de operator zelf eenmalig in de aanhef.

## De exploitant aangeven

```latex
\usepackage{amsmath}
\DeclareMathOperator*{\argmin}{arg\,min}
\DeclareMathOperator*{\argmax}{arg\,max}

\[
\theta^\star = \argmin_\theta \mathcal{L}(\theta)
\]
```

Dit is wat elk stuk doet. `\DeclareMathOperator` komt van `amsmath` en creëert een nieuw commando waarvan het argument is gezet als operatortekst: rechtopstaande Romeinse letters, waarbij de spatiëringsregels die LaTeX al toepast op `\max` en `\lim`. Het eerste argument is de opdrachtnaam die u gaat typen, het tweede is de tekst die daadwerkelijk wordt afgedrukt. De `\,` binnen `arg\,min` voegt een dunne spatie in tussen de twee woorden, wat beter leest dan ze samen te voegen.

De ster na `\DeclareMathOperator` is belangrijk. Een declaratie met ster zorgt ervoor dat de operator zich gedraagt ​​als `\lim`: bij weergavewiskunde staat alles wat u koppelt met `_` direct onder de operator in plaats van rechtsonder. Dat is precies wat je wilt voor `\argmin_\theta`, waar de variabele waarover geoptimaliseerd wordt eronder zou moeten verschijnen. Zonder de ster blijft het subscript aan de zijkant staan, wat de conventie is voor operators als `\log_2`. Bij inline wiskunde blijft het subscript hoe dan ook aan de zijkant staan, om te voorkomen dat de regelhoogte wordt vergroot.

## Het patroon hergebruiken

Dezelfde techniek geldt voor elke operator die in uw vakgebied wordt gebruikt en waar LaTeX niets van weet. Een paar veelvoorkomende:

```latex
\DeclareMathOperator{\tr}{tr}
\DeclareMathOperator{\rank}{rank}
\DeclareMathOperator{\diag}{diag}
\DeclareMathOperator*{\esssup}{ess\,sup}
```

Merk op dat `\tr`, `\rank` en `\diag` geen ster hebben omdat hun subscripts, als ze die hebben, aan de zijkant thuishoren. Alleen limit-stijloperatoren zoals `\esssup` krijgen de ster.

Het declareren van operators in de preambule in plaats van het inline schrijven van `\mathrm{argmin}` loont twee keer. De notatie blijft consistent in het hele document, en als een dagboek om een ​​andere weergave vraagt, verander je één regel in plaats van elke vergelijking door te speuren. Probeer de declaratie en de weergaveregel samen in de [live speeltuin](/live/) om te zien hoe de plaatsing van het subscript met ster zich gedraagt.

Een veelgemaakte fout: het declareren van een operator wiens naam botst met een bestaand commando, zoals `\max` of `\deg`. LaTeX stopt met een "reeds gedefinieerde" fout. Kies een nieuwe naam, of gebruik `\renewcommand` alleen als je echt van plan bent het origineel te vervangen.