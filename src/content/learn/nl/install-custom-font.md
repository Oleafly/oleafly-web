---

title: "Een lettertypebestand naast het project"
description: "fontspec Pad voor lokale otf- of ttf-families."
category: "typefaces"
order: 2
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Een lettertypebestand naast het project

Stel dat je scriptie een lettertype gebruikt dat niet op elke machine is geïnstalleerd waarop het ooit zal worden gecompileerd: de laptop van een co-auteur, een door de universiteit gebouwde server of je eigen computer na een herinstallatie. Het installeren van het lettertype op elk van deze apparaten is kwetsbaar en soms niet toegestaan. Plaats de lettertypebestanden in de projectmap en wijs er in plaats daarvan 'fontspec' naar aan, zodat het document zijn eigen typografie krijgt. Hiervoor is XeLaTeX of LuaLaTeX vereist, aangezien `fontspec` niet werkt onder pdfLaTeX. De redenen worden behandeld in [waarom mensen overstappen naar XeLaTeX](/learn/when-use-xelatex/).

```latex
\usepackage{fontspec}
\setmainfont{MyFont}[
 Path = ./fonts/,
 Extension = .otf,
 UprightFont = *-Regular,
 BoldFont = *-Bold,
 ItalicFont = *-Italic
]
```

## Wat elke toets doet

`\setmainfont{MyFont}` declareert de hoofdtekstfamilie en geeft deze de basisnaam die wordt gebruikt om bestandsnamen samen te stellen. `Path = ./fonts/` vertelt `fontspec` om te zoeken naar de bestanden in een `fonts` map binnen het project, relatief ten opzichte van het `.tex` hoofdbestand, in plaats van het besturingssysteem te vragen. `Extensie = .otf` vermeldt het bestandstype één keer en hoeft dus niet per bestand herhaald te worden. Gebruik `.ttf` als dat is wat je hebt.

De overige toetsen wijzen lettertypevormen toe aan bestanden. In elk daarvan wordt de `*` uitgebreid naar de basisnaam, dus `UprightFont = *-Regular` wordt omgezet in `MyFont-Regular.otf`, en op dezelfde manier `MyFont-Bold.otf` en `MyFont-Italic.otf`. Deze namen moeten exact overeenkomen met de daadwerkelijke bestandsnamen, inclusief hoofdletters, omdat hoofdletters van belang zijn op Linux-servers, zelfs als uw lokale systeem dit vergeeft. Als de familie vet cursief is, voeg dan `BoldItalicFont = *-BoldItalic` toe. Een vorm die u niet toewijst, is een vorm die het document niet kan gebruiken: zonder `BoldFont`-regel heeft `\textbf` niets om naar over te schakelen, en de compiler waarschuwt dat de vetgedrukte vorm ongedefinieerd is.

Dezelfde syntaxis werkt voor de andere families, dus `\setsansfont` en `\setmonofont` accepteren identieke optieblokken voor een lokaal schreefloos of codelettertype.

## Licenties en draagbaarheid

Verzend de lettertypebestanden alleen met het project als de licentie herdistributie toestaat. Open licenties zoals de SIL Open Font License staan ​​dit toe, en lettertypen van Google Fonts komen doorgaans in aanmerking, maar commerciële lettertypen verbieden doorgaans het doorgeven van kopieën aan medewerkers, in welk geval elke machine zijn eigen gelicentieerde kopie nodig heeft en u deze vereiste in het leesmij-bestand van het project moet documenteren.

De veelgemaakte fout is een stille mismatch tussen de aangegeven namen en de bestanden, vaak na het hernoemen van de map of het downloaden van een gewicht met een andere naam. Het compileren stopt dan met "Het lettertype 'MyFont-Regular' kan niet worden gevonden". Wanneer dat gebeurt, vergelijk dan de verwachte bestandsnaam van de fout karakter voor karakter met de inhoud van de map, en bevestig dat het `Pad` nog steeds verwijst naar de locatie van de bestanden. Omdat de gebundelde Tectonic-engine van Oleafly op XeTeX is gebaseerd, werkt dit project-lokale patroon daar zonder installatie van systeemlettertypen.