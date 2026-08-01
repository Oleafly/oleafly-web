---

title: "Wazige tekst in de PDF-viewer"
description: "Type 3 bitmaps, contourlettertypen, vectorfiguren."
category: "typefaces"
order: 3
level: "intermediate"
tags: ["fonts", "errors"]
featured: false
updated: 2026-07-25
---

# Wazige tekst in de PDF-viewer

Uw PDF wordt netjes gecompileerd, maar de tekst ziet er zacht of gekarteld uit op het scherm, en als u inzoomt, wordt de tekst slechter in plaats van beter. Er is niets mis met je kijker. Het document bevat bitmaplettertypen. In plaats van lettervormen op te slaan als schaalbare contouren, worden ze opgeslagen als rasters van pixels die met één vaste resolutie worden weergegeven. In PDF-terminologie zijn dit Type 3-lettertypen. Ze printen acceptabel op papier met de resolutie waarvoor ze zijn gegenereerd. Daarom bleef het probleem tientallen jaren bestaan, maar op schermen vervagen ze op elk ander zoomniveau dan het oorspronkelijke zoomniveau. Moderne overzichtsformaten (Type 1, TrueType, OpenType) schalen netjes omdat de vormen wiskundige curven zijn.

## Bevestiging van de diagnose

Zoomen is de snelle test: contourlettertypen blijven haarscherp op 800 procent, bitmaps lossen op in zichtbare pixels. Open voor de zekerheid de documenteigenschappen in uw PDF-viewer en kijk naar het lettertypepaneel. In Adobe Reader staat dit onder Bestand, vervolgens Eigenschappen en vervolgens Lettertypen, en elk lettertype vermeld als "Type 3" is een bitmap. Deze controle is belangrijker dan alleen de esthetiek, omdat arXiv en veel uitgevers inzendingen met Type 3-lettertypen afwijzen.

## Waar bitmaps vandaan komen en de oplossingen

De gebruikelijke bron is een oude lettertype-installatie. Zeer oude TeX-installaties hebben Computer Modern via METAFONT omgezet in bitmaps, en sommige oudere pakketten en oude stapels uit het `\usepackage{times}`-tijdperk halen nog steeds bitmapvarianten binnen. Los het probleem op door de verouderde lettertypeopdrachten te vervangen door een moderne stapel:

```latex
\usepackage{newtxtext,newtxmath}
```

Dat geeft een overzicht van tijden met bijpassende wiskunde, zoals gedetailleerd in [Times, Arial, Helvetica-achtige stapels] (/learn/times-arial-helvetica/). Als je de standaardlook wilt in plaats van Times, vervangt `\usepackage{lmodern}` Computer Modern door zijn opvolger, Latin Modern. Compileren met XeLaTeX of LuaLaTeX en `fontspec` omzeilt het probleem volledig, omdat deze zoekmachines OpenType-systeemlettertypen gebruiken die qua constructie contouren zijn. Een moderne engine zoals de op XeTeX gebaseerde Tectonic die Oleafly bundelt, genereert op zichzelf geen Type 3-tekst; wanneer het daar verschijnt, komt het bitmaplettertype binnen via een meegeleverde afbeelding.

## De figuurversie van hetzelfde probleem

Wazige tekst in een PDF is niet altijd een documentlettertype. Als alinea's scherp zijn, maar de labels in een plot vaag, is de figuur zelf een rasterafbeelding, meestal een PNG-screenshot van een plot of een diagram dat met schermresolutie wordt geëxporteerd. De oplossing is hetzelfde idee, een niveau hoger: exporteer figuren als vector-PDF vanuit de plottool, zodat hun tekst ook omtreklijnen is. Formaatrichtlijnen zijn te vinden in [laat een figuur vallen](/learn/insert-images/).

Controleer na elke oplossing opnieuw het lettertypepaneel in plaats van op uw ogen te vertrouwen bij de standaardzoom. Eén enkele Type 3-inzending die door één figuur of één pakketje wordt achtergelaten, is voldoende om een ​​inzending te stuiteren.