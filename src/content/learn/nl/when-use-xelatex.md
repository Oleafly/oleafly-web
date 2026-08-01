---

title: "Waarom mensen overstappen naar XeLaTeX"
description: "Systeemlettertypen, complexe scripts, lettertypespecifieke sjablonen."
category: "runtime"
order: 2
level: "intermediate"
tags: ["engines"]
featured: false
updated: 2026-07-25
---

# Waarom mensen overstappen naar XeLaTeX

LaTeX is een taal, maar verschillende zoekmachines compileren deze, en ze verschillen in wat ze kunnen doen. De traditionele engine is pdfLaTeX, en de twee moderne zijn XeLaTeX en LuaLaTeX. De grootste reden waarom mensen naar XeLaTeX overstappen zijn lettertypen: pdfLaTeX gebruikt alleen lettertypen die specifiek voor TeX zijn verpakt, terwijl XeLaTeX elk OpenType- of TrueType-lettertype laadt dat op uw systeem is geïnstalleerd, met de gewone naam.

## De drie redenen om over te stappen

De eerste is directe toegang tot systeemlettertypen. Met het `fontspec`-pakket bestaat de lettertypekeuze uit één leesbare regel en hoeft er geen TeX-specifiek lettertypepakket te bestaan ​​voor het gewenste lettertype. Of het doel nu `\setmainfont{Inter}` is voor een moderne look of Times New Roman voor een tijdschriftvereiste, het mechanisme is hetzelfde:

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

`fontspec` vereist XeLaTeX of LuaLaTeX; onder pdfLaTeX staat het gewoon fout. Lettertypen kunnen ook binnen de projectmap terechtkomen in plaats van in het systeem, zoals weergegeven in [een lettertypebestand naast het project](/learn/install-custom-font/).

De tweede is native Unicode en complexe scripts. XeLaTeX leest UTF-8-invoer rechtstreeks en verwerkt schrijfsystemen die pdfLaTeX niet kan, inclusief Arabisch, Devanagari, Chinees, Japans en Koreaans, met de juiste vormgeving en, via het `polyglossia`-pakket, correcte woordafbreking en richting per taal. Als uw document scripts combineert of zelfs maar een naam met ongebruikelijke diakritische tekens citeert, bepaalt alleen dit de engine.

De derde zijn sjablonen die voor u beslissen. Veel moderne CV-, scriptie- en presentatiesjablonen laden `fontspec` of `polyglossia` in hun eerste regels, en zo'n sjabloon compileert alleen op XeLaTeX of LuaLaTeX. Als een gedownloade sjabloon onmiddellijk faalt met een foutmelding waarin 'fontspec' wordt vermeld, is het wisselen van engine de oplossing, niet het bewerken van de sjabloon.

## Wat je opgeeft

De afwegingen zijn bescheiden maar reëel. Een paar pdfLaTeX-specifieke pakketten zijn niet van toepassing, met name de lettertype-uitbreiding van `microtype`, die XeLaTeX slechts gedeeltelijk ondersteunt. Compiles draaien ook iets langzamer. Sommige oudere tijdschriftpijplijnen gaan nog steeds uit van pdfLaTeX, dus controleer de instructies van de locatie voordat u een door XeLaTeX gebouwd manuscript indient. LuaLaTeX deelt de lettertype- en Unicode-mogelijkheden en voegt Lua-scripting toe. Kies tussen deze twee de namen van uw sjabloon of locatie. Documenten die op `fontspec` zijn gebouwd, compileren meestal op beide.

## Kiezen in de praktijk

Een redelijke regel is om pdfLaTeX te gebruiken wanneer de sjabloon van een locatie daarop gericht is, en XeLaTeX voor alles waarvan u de lettertypen kiest: scripties, CV's, dia's en meertalige documenten. De gebundelde engine van Oleafly is gebaseerd op XeTeX (Tectonic), dus 'fontspec'-documenten worden daar gecompileerd zonder enige engineconfiguratie. De veelgemaakte fout is het vermengen van tijdperken, bijvoorbeeld door `fontspec` samen te laden met lettertypepakketten die alleen pdfLaTeX bevatten, zoals `newtxtext`. Kies één lettertypesysteem per document en de engine-vraag beantwoordt grotendeels zichzelf.