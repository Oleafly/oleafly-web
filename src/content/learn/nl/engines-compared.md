---

title: "Welke motor voor dit project"
description: "pdfLaTeX, XeLaTeX, LuaLaTeX, Tectonic: Unicode, lettertypen, journal fit."
category: "runtime"
order: 1
level: "intermediate"
tags: ["engines"]
featured: true
updated: 2026-07-25
---

# Welke motor voor dit project

Een engine is het programma dat uw `.tex`-bron daadwerkelijk omzet in een PDF. LaTeX zelf is een macrolaag die erbovenop draait, en er zijn er verschillende om uit te kiezen. Ze accepteren bijna dezelfde documenten, maar ze verschillen in de manier waarop ze omgaan met Unicode-tekst en -lettertypen, en een sjabloon die voor de ene engine is geschreven, kan onder de andere volledig mislukken. Kies één keer per project en blijf daarbij.

| Motor | Unicode | Systeemlettertypen | Opmerkingen |
| --- | --- | --- | --- |
| pdfLaTeX | Gedeeltelijk | Nee | Maximale dagboekcompatibiliteit |
| XeLaTeX | Ja | Ja (`fontspec`) | Geweldig voor meertalige documenten |
| LuaLaTeX | Ja | Ja | Modern, scriptbaar |
| Tektonische | Xe-achtig | Ja | Automatisch ophalen van pakketten; Oleafly standaard |

## Waar elke motor voor is

pdfLaTeX is de directe afstammeling van de originele TeX en blijft de standaardaanname van de meeste tijdschriften, conferenties en indieningssystemen. Het dateert van vóór Unicode, dus invoer met accenten heeft de `inputenc`-conventies nodig en lettertypen zijn beperkt tot speciaal verpakte TeX-lettertypen. In ruil daarvoor wordt het snel en universeel ondersteund en zijn tientallen sjablonen erop gericht.

XeLaTeX leest UTF-8 native en gebruikt, via het `fontspec`-pakket, elk lettertype dat op uw systeem is geïnstalleerd met de naam, zoals `\setmainfont{Georgia}`. Dat maakt het de praktische keuze voor documenten die scripts combineren, voor talen buiten West-Europa, en voor iedereen met specifieke lettertypevereisten. [Wanneer XeLaTeX gebruiken](/learn/when-use-xelatex/) gaat dieper.

LuaLaTeX biedt dezelfde Unicode- en lettertype-ondersteuning en integreert de Lua-scripttaal, zodat pakketten tijdens het compileren dingen kunnen berekenen die voorheen onmogelijk waren. Het is de langetermijnopvolger onder de traditionele motoren, ten koste van wat langzamere compilaties.

Tectonic is een moderne, op zichzelf staande versie van de XeTeX-engine. Het onderscheidende kenmerk is de automatische afhandeling van afhankelijkheid: wanneer een document een pakket nodig heeft dat u niet heeft, downloadt Tectonic het op aanvraag in plaats van dat het mislukt. Om precies deze reden bundelt Oleafly Tectonic als standaardengine, dus een nieuwe installatie compileert documenten uit de echte wereld zonder enig TeX-beheer.

## Hoe te beslissen

Volg het sjabloon. Als een dagboekklasse of scriptiesjabloon een engine documenteert, gebruik die dan. Sjablonen coderen engine-aannames op manieren die elders als verwarrende fouten naar voren komen, zoals beschreven in [University class files that will not compile](/learn/fix-broken-template/). Als het document helemaal opnieuw van jou is, is de vuistregel eenvoudig: pdfLaTeX als een conservatieve locatie je bronnen compileert, en XeLaTeX, LuaLaTeX of Tectonic als je echte Unicode of echte lettertypen nodig hebt. Wat u ook kiest, blijf erbij gedurende de levensduur van het document. Subtiele spaties en lettertypeverschillen zorgen ervoor dat het wisselen halverwege het project een slechte tijdsbesteding is.