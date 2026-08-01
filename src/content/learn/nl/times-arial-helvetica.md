---

title: "Times, Arial, Helvetica-achtige stapels"
description: "newtx-, helvet- of fontspec-toewijzingen waar tijdschriften nog steeds om vragen."
category: "typefaces"
order: 1
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Times, Arial, Helvetica-achtige stapels

Richtlijnen voor tijdschriften en conferenties vereisen nog steeds routinematig Times voor hoofdtekst of Arial voor cijfers, tientallen jaren nadat die lettertypen niet langer ieders esthetische eerste keuze waren. In LaTeX zijn er twee manieren om aan een dergelijke vereiste te voldoen, en welke van toepassing is, hangt af van uw engine. Klassieke pdfLaTeX kan de daadwerkelijke Times New Roman- of Arial-bestanden niet laden, dus gebruikt het metrisch-compatibele klonen die als pakketten worden verzonden. XeLaTeX en LuaLaTeX laden de echte systeemlettertypen via `fontspec`.

## De pakketroute

```latex
\usepackage{newtxtext,newtxmath} % Times-like
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
```

`newtxtext` schakelt het tekstlettertype om naar een Times-kloon, en `newtxmath` biedt bijpassende wiskunde. De koppeling is belangrijk: verander alleen het tekstlettertype en de vergelijkingen blijven in de standaard Computer Modern. Een Times-paragraaf naast Computer Moderne wiskunde is onmiddellijk zichtbaar. `newtx` is de onderhouden opvolger van de oude pakketten `times` en `txfonts`, die u in nieuwe documenten moet vermijden. De oude stapels lieten de wiskunde ongeconverteerd, en sommige produceren de bitmaplettertypen die worden beschreven in [wazige tekst in de PDF-viewer](/learn/fuzzy-font-pdf/).

`helvet` levert een Helvetica-kloon als de schreefloze familie, die ook in de plaats komt van Arial, aangezien Arial is ontworpen om te passen bij de statistieken van Helvetica. Als u het laadt, wordt het documentlettertype niet gewijzigd, omdat de hoofdtekst de schreeffamilie gebruikt. De regel `\renewcommand{\familydefault}{\sfdefault}` voert deze omschakeling uit: `\familydefault` is de familie die LaTeX gebruikt voor gewone tekst, en door deze in te stellen op `\sfdefault` wordt het hele document Helvetica-achtig. Laat die regel weg als u alleen schreefloze koppen of figuurlabels nodig heeft. Als Helvetica enigszins groot is naast uw tekstlettertype, brengt `\usepackage[scaled=0.92]{helvet}` het op één lijn.

## De fontspec-route

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
\setsansfont{Arial}
```

Onder XeLaTeX of LuaLaTeX adresseert `fontspec` lettertypen op naam en laadt ze vanuit het besturingssysteem, dus dit stelt de echte Times New Roman in als de belangrijkste (serif)-familie en de echte Arial als de sans-familie. De lettertypen moeten daadwerkelijk op de machine zijn geïnstalleerd. Dat bijt wanneer een document tussen computers of in CI wordt verplaatst. Een lettertype dat met het project meegaat vermijdt het probleem, zoals weergegeven in [een lettertypebestand naast het project](/learn/install-custom-font/). Wiskunde is opnieuw een aparte zorg, afgehandeld door `unicode-math` of door `newtxmath` ernaast te houden. De afwegingen tussen de motoren worden behandeld in [waarom mensen overstappen naar XeLaTeX](/learn/when-use-xelatex/).

## De vuistregel

Voordat u een van beide routes kiest, moet u controleren of het eigen klassenbestand van de locatie de lettertypen al instelt. De meeste doen dat. Het stapelen van uw eigen lettertypepakketten bovenop een klasse die heeft gesproken, levert op zijn best waarschuwingen op. Voeg alleen lettertypepakketten toe aan documenten waarvan de klasse de keuze aan u overlaat.