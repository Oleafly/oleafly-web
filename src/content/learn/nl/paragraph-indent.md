---

title: "Inspringen of spaties tussen alinea's"
description: "parindent, parskip, noindent voor een enkele regel."
category: "the-page"
order: 5
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Inspringen of spaties tussen alinea's

Typografie kent twee standaardmanieren om aan te geven waar de ene alinea eindigt en de volgende begint: laat de eerste regel van elke nieuwe alinea inspringen, of laat verticale ruimte tussen alinea's zonder inspringing. Boeken en tijdschriften gebruiken bijna altijd de eerste. Webpagina's en zakelijke documenten gebruiken de tweede. LaTeX gebruikt standaard de boekconventie, waarbij elke alinea wordt ingesprongen, behalve de eerste na een sectiekop, zonder extra ruimte tussen de alinea's. Als je de andere stijl wilt, verander je twee lengtes.

## De twee lengtes die alles beheersen

```latex
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.8em} % space between paragraphs instead
```

`\parindent` is de breedte van de eerste regelinspringing. Door dit op `0pt` te zetten met `\setlength` wordt de inspringing overal verwijderd. `\parskip` is de verticale ruimte tussen alinea's, normaal gesproken nul (plus een beetje rek); Als u dit op `0.8em` instelt, ontstaat er een zichtbare opening, iets minder dan een volledige lege regel. De `em`-eenheid schaalt mee met de lettergrootte, waardoor de spatiëring proportioneel blijft als u later de [lettergrootte](/learn/font-size/) wijzigt. Plaats beide regels in de preambule en het hele document volgt de blokstijl.

Als u deze route volgt, moet u er rekening mee houden dat een eenvoudige `\parskip`-wijziging ook de ruimte rond sectiekoppen, lijstitems en de inhoudsopgave vergroot, omdat deze ook uit paragrafen zijn opgebouwd. Voor alles wat langer is dan een korte notitie, wordt bij het laden van het `parskip`-pakket (`\usepackage{parskip}`) dezelfde stijl toegepast, terwijl de bijwerkingen voor u worden gepatcht.

## Eén streepje onderdrukken

Enkele alinea: plaats `\noindent` helemaal aan het begin ervan, vóór het eerste woord. Dit onderdrukt de inspringing voor alleen die ene alinea en is handig na een weergegeven vergelijking, een codelijst of een tabel wanneer de volgende tekst een voortzetting is van dezelfde gedachte in plaats van een nieuwe alinea. De omgekeerde situatie, waarbij een streepje wordt geforceerd waar LaTeX er één weglaat (zoals de eerste alinea na een kop), wordt afgehandeld door het kleine `indentfirst`-pakket in plaats van een handmatige oplossing.

Nu we er toch zijn: een nieuwe paragraaf in LaTeX wordt gemaakt door een lege regel in de broncode, niet door `\\`. Het commando `\\` is een regeleinde binnen dezelfde alinea, en het gebruik ervan om de alinea-afstand te vervalsen levert te weinig waarschuwingen en ongelijkmatige gaten op. De [les over paragrafen en nieuwe regels](/learn/paragraphs-newlines/) behandelt dit onderscheid volledig.

## Kies één stijl en houd deze vast

Kies voor een inspringende **of** parskip-stijl en blijf consistent. De twee conventies zijn alternatieven, geen lagen: ingesprongen alinea's met grote gaten ertussen zien eruit als een concept, en nul inspringen zonder spatie zorgt ervoor dat de lezer helemaal niet kan zien waar alinea's beginnen. Als u voor een tijdschrift of conferentie schrijft, verander dan de lengte niet; het klassenbestand implementeert de keuze van de uitgever al, en uw overschrijving zal het eerste zijn dat de lay-outeditor terugdraait.