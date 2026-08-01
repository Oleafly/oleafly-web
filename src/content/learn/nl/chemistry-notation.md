---

title: "Chemische formules en structuren"
description: "mhchem-reacties en een chemfig-schets."
category: "field-kits"
order: 1
level: "intermediate"
tags: ["chemistry"]
featured: false
updated: 2026-07-25
---

# Chemische formules en structuren

Chemische notatie bestrijdt de standaardinstellingen van LaTeX. In de wiskundige modus worden elementsymbolen cursief weergegeven alsof het variabelen zijn, en de tekstmodus heeft helemaal geen subscripts. Twee pakketten verdelen het werk. `mhchem` zet formules en reacties over op basis van de gewone scheikundige notatie, en `chemfig` tekent structuurdiagrammen.

## Formules en reacties met mhchem

```latex
\usepackage[version=4]{mhchem}
\ce{H2O}
\ce{CO2 + C -> 2CO}
```

De `version=4` optie selecteert de huidige syntaxis. Al het chemische komt in `\ce{...}` terecht, dat de inhoud leest zoals een scheikundige ze schrijft. In `\ce{H2O}` wordt de 2 automatisch een subscript en blijven de elementsymbolen rechtop staan, zoals de conventie vereist. In de reactie krijgt de '+' de juiste afstand, wordt '->' een reactiepijl en wordt de 2 vóór CO herkend als een stoichiometrische coëfficiënt, zodat deze op volledige grootte op de basislijn blijft.

Dezelfde notatie wordt opgeschaald. Ladingen verschijnen als superscripts, dus `\ce{SO4^2-}` geeft sulfaat met zijn 2-lading. Toestanden van materie worden tussen haakjes vermeld, zoals in `\ce{H2O(l)}`; evenwichtspijlen zijn geschreven `<=>`; en `\ce{^{14}C}` plaatst een isotoopgetal vóór het symbool. `\ce` werkt zowel in de tekst- als in de wiskundige modus, dus een formule kan in een zin staan ​​zonder extra scheidingstekens.

## Structuren met chemfig

```latex
\usepackage{chemfig}
\chemfig{H-C(-[2]H)(-[6]H)-H}
```

`\chemfig` tekent structuren uit een compacte lineaire code. Atomen worden geschreven als hun symbolen, en `-` trekt een band met het volgende atoom. Een getal tussen haakjes bepaalt de richting van de verbinding in stappen van 45 graden tegen de klok in vanuit het oosten: `[2]` wijst recht omhoog en `[6]` recht naar beneden. Haakjes openen vertakkingen van het huidige atoom, dus 'C(-[2]H)(-[6]H)' laat één waterstof naar boven en één naar beneden groeien, terwijl de hoofdketen naar rechts doorloopt. Het voorbeeld is methaan platgetrokken: een centrale koolstof gebonden aan vier waterstofatomen. Dubbele en drievoudige bindingen worden geschreven als `=` en `~`, en er is een speciale ringsyntaxis voor cyclische en aromatische structuren.

## Praktische opmerkingen

Houd de twee gereedschappen in hun baan. Gebruik `mhchem` voor alles wat van links naar rechts als een formule of vergelijking leest, en `chemfig` als het om de geometrie van het molecuul gaat. Beide compileren met een standaard LaTeX-engine en zonder extern tekenprogramma.

De gebruikelijke beginnersfout is het schrijven van formules in de kale wiskundemodus. `$H_2O$` compileert, maar zet de H en de O cursief, net als variabelen, wat volgens afspraak verkeerd is. `\ce{H2O}` produceert de rechtopstaande vorm met minder typen. Beide pakketten zijn beschikbaar om te proberen in de [live speeltuin](/live/).