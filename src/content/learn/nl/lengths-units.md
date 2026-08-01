---

title: "pt, em, tekstbreedte"
description: "Absolute en lettertype-relatieve eenheden die u feitelijk instelt."
category: "desk-reference"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# pt, em, tekstbreedte

Bijna elk lay-outcommando in LaTeX heeft een lengte nodig: verticale ruimte, afbeeldingsbreedtes, marges, regeldiktes. Een lengte is een getal plus een eenheid, en de keuze van de eenheid bepaalt of de lay-out zich aanpast wanneer de lettergrootte of de paginageometrie verandert, of breekt op de dag dat dit gebeurt.

| Eenheid | Betekenis |
| --- | --- |
| `pt` | Punt (basis) |
| `em` | Lettertype-relatieve breedte |
| `ex` | Lettertype-relatieve hoogte |
| `cm` / `mm` / `in` | Absoluut |
| `\tekstbreedte` | Breedte tekstblok |
| `\lijnbreedte` | Breedte van huidige kolom/minipagina |

## Absolute en relatieve eenheden

`pt` is het punt van de printer, de basiseenheid van TeX. Lettergroottes en veel interne standaardwaarden worden uitgedrukt in punten, en één inch is 72,27 pt volgens de berekening van TeX. 'cm', 'mm' en 'in' zijn de bekende absolute eenheden, geschikt als een vereiste echt fysiek is, zoals een verplichte marge van één inch.

`em` en `ex` schalen met het huidige lettertype: een em is ruwweg de lettergrootte uitgedrukt als breedte, en een ex is ongeveer de hoogte van een kleine letter x. Hun voordeel is evenredigheid. Een `\vspace{1em}` blijft visueel consistent als het document van het type 10pt naar 12pt gaat, waarbij een hardgecodeerde `\vspace{12pt}` te strak of te los wordt.

## Lengtes die het document u geeft

`\textwidth` is de breedte van het tekstblok van de pagina. `\linewidth` is de breedte van de huidige container, die gelijk is aan `\textwidth` in gewone tekst, maar smaller wordt binnen een minipagina, een lijst of een kolom. Een decimaal vooraan schaalt een van beide, en dat is de standaardmanier om cijfers te rangschikken:

```latex
\vspace{1em}
\includegraphics[width=0.5\textwidth]{f.pdf}
```

De eerste regel voegt één em verticale ruimte in. Bij de tweede wordt de afbeelding ingesteld op de helft van de breedte van het tekstblok, zodat als de marges ooit veranderen, de afbeelding meeschaalt en nooit overloopt in de marge. Binnen een minipagina of een lay-out met twee kolommen geeft u de voorkeur aan `0,5\lijnbreedte`, omdat `\tekstbreedte` breder is dan de ruimte die u daadwerkelijk heeft.

Lengtes zijn ook instelbaar. `\setlength{\parindent}{0pt}` verwijdert de inspringing van alinea's, en hetzelfde commando past de meeste benoemde lay-outlengtes aan.

De veelgemaakte fout is het dimensioneren van cijfers in centimeters. Het werkt totdat de documentklasse, het papierformaat of de marges veranderen, en dan moet elk cijfer handmatig opnieuw worden afgestemd. Breedtes uitgedrukt als fracties van `\textwidth` of `\linewidth` overleven al deze veranderingen onaangeroerd, wat de reden is dat sjablonen ze bijna uitsluitend gebruiken.