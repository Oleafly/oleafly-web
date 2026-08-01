---

title: "Geef het model uw symbolentabel"
description: "Macro's en een korte notatielijst zodat variabelen stabiel blijven."
category: "human-plus-model"
order: 4
level: "intermediate"
tags: ["ai"]
featured: false
updated: 2026-07-25
---

# Geef het model uw symbolentabel

Vraag een model om wiskundige tekst op te stellen of te herzien en het proza ​​komt meestal prima terug terwijl de notatie afwijkt. Je vector `\vect{x}` retourneert als `\mathbf{x}` in de ene alinea en `\vec{x}` in een andere. De verwachting die je schrijft als `\E[X]` komt terug als `\mathbb{E}(X)`. Elke variant compileert, dus er zijn geen fouten. De inconsistentie komt alleen naar voren als een lezer merkt dat hetzelfde object op drie verschillende manieren is geschreven. Het model heeft elke bestaande notatieconventie gezien en, zonder instructies, voorbeelden van al deze conventies. Geef het expliciet de jouwe.

## Macro's maken notatie afdwingbaar

De basis is onafhankelijk van AI en sowieso de moeite waard om te doen: leid elk terugkerend symbool door een macro, zodat de bron `\vect{x}` zegt in plaats van onbewerkt `\boldsymbol{x}`. Dat geeft elk concept één naam, laat je het hele papier restylen door één definitie te bewerken, en geeft het model een klein vocabulaire waar je je aan kunt houden in plaats van varianten te verzinnen. Het definiëren van macro's wordt behandeld in [Aangepaste opdrachten](/learn/custom-commands/).

## Wat in de prompt te plakken

Voeg naast uw daadwerkelijke verzoek een compact notatieblok toe: de macrodefinities plus één commentaar per regel waarin staat waar elk voor is.

```latex
% vectors: bold italic \vect{x}
% matrices: bold upright \mat{A}
% expectation: \E{X}
```

Geef vervolgens direct de beperking op: "Gebruik alleen deze macro's voor deze concepten. Voer geen nieuwe notatie in voor iets dat in de lijst staat, en als je een symbool nodig hebt dat niet in de lijst staat, zeg dat dan in plaats van er een uit te vinden." Modellen volgen concrete, controleerbare instructies veel beter dan een vaag ‘match my style’. Voor een volledig artikel bewaart u het blok als korte notatiecommentaar bij de inleiding, zodat het actueel blijft en klaar is om te worden geplakt.

## Mechanisch verifiëren

De macrolaag maakt het controleren goedkoop. Als elke vector `\vect{...}` moet zijn, is elke ruwe `\mathbf{` of `\vec{` in modeluitvoer een overtreding die u kunt vinden met een tekstzoekopdracht in plaats van de wiskunde opnieuw te lezen. Voer die zoekopdracht uit over alles wat u erin plakt, corrigeer de achterblijvers en de notatie blijft uniform, ongeacht hoeveel modelondersteunde bewerkingen er in het papier terechtkomen.

## Binnen Oleafly

De [assistent in Oleafly](/learn/oleafly-ai/) leest projectbestanden, inclusief de preambule waar uw macro's zich bevinden, dus pikt hij meestal gedefinieerde opdrachten op zonder dat hem dat wordt verteld. De expliciete instructie helpt nog steeds: zien dat een macro bestaat, is zwakker dan te horen krijgen dat deze verplicht is. Voeg één regel toe aan uw verzoek ("gebruik de notatiemacro's uit de inleiding") en bekijk het rood/groene verschil voordat de wijzigingen landen. Dat blijft uit de bron drijven.