---

title: "Onderzoek diagrammen in TikZ wanneer PowerPoint niet voldoende is"
description: "Wanneer moet je pijplijnen, automaten en commutatieve diagrammen in TeX tekenen, zodat ze een nieuwe kleur krijgen voor het tijdschrift, scherp blijven in gedrukte vorm en als bron in de repository leven?"
date: 2026-07-08
tags: [tikz, figures, research]
---

PowerPoint-diagrammen worden vage rechthoeken in de PDF. TikZ-diagrammen blijven
vector, pas de documentlettertypen aan en kleur opnieuw wanneer een dagboek grijstinten vereist
of een ander accent. De handel is een steiler eerste uur. Daarna klein
bewerkingen zijn tekstverschillen, geen screenshot-archeologie.

Je hebt niet voor elk figuur TikZ nodig. Foto's, onbewerkte microscoopframes en
dichte plots van matplotlib blijven meestal zoals PDF/PNG bevat. Gebruik TikZ wanneer de
figuur is structuur: pijpleidingen, automaten, architectuurboxen, categoriediagrammen,
eenvoudige bomen.

## Begin klein

Een pijplijn met drie knooppunten leert het model:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.5cm]
  \node[draw] (a) {Data};
  \node[draw,right=of a] (b) {Model};
  \node[draw,right=of b] (c) {Loss};
  \draw[-Latex] (a) -- (b) -- (c);
\end{tikzpicture}
```

Noem knooppunten. Maak verbinding met `--` of expliciete ankers (`(a.east)`). Liever relatief
plaatsing (`rechts=van a`) over magische coördinaten die u zich nooit zult herinneren.
Lessen: [eerste TikZ-foto](/learn/tikz-intro/),
[knooppunten en pijlen](/learn/tikz-nodes-arrows/).

## Stijlen verslaan eenmalige opties

Definieer stijlen één keer, zodat elk vak overeenkomt:

```latex
\tikzset{
  block/.style={draw, rounded corners, align=center, minimum height=1cm},
  arr/.style={-Latex}
}
```

Als het dagboek om dikkere lijnen of zwart-wit vraagt, verander dan de stijl, maar niet
twintig knooppunten. Kleur met benoemde kleuren of een kleine paletmacro, zodat u kunt wisselen
accenten zonder op hexadecimale codes te jagen.

## CS en engineering: stroomdiagrammen die op één lijn liggen

Gebruik de `positioning` bibliotheek (`below=of`, `right=of`) zodat dozen een raster delen.
Handmatige absolute coördinaten zijn de manier waarop diagrammen rotten wanneer u één knooppunt invoegt. Houd
tekst kort; plaats details in het onderschrift. Gids:
[uitgelijnde stroomdiagrammen](/learn/tikz-flowchart/).

Voor neurale netwerken of systeemschetsen scheidt u 'blokken' van 'annotaties'.
Annotaties kunnen kleinere lettertypeknooppunten zijn zonder randen, zodat het hoofdpad blijft
leesbaar op een breedte van twee kolommen.

## Wiskunde en theorie: commutatieve diagrammen

`tikz-cd` is het gebruikelijke pad voor diagrammen in categoriestijl zonder elke
knooppunt met de hand:

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
  A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
  C \arrow[r,"k"'] & D
\end{tikzcd}
```

Gids: [commutatieve diagrammen](/learn/commutatieve-diagrammen/). Voor bomen en
er bestaan bewijstheoretische diagrammen, gespecialiseerde bibliotheken; begin eenvoudig vóór u
importeer de helft van CTAN.

## Externaliseer en compileer tijd

Een paper met twintig TikZ-cijfers zal de volledige compilatie vertragen. Opties:

- Zet elk figuur in een eigen bestand en `\invoer` het.
- Gebruik de `externe` bibliotheek zodat afbeeldingen in cache opgeslagen PDF's worden.
- Ontwerp met `\tikzexternaldisable` als je alleen om proza ​​geeft.

Exporteren voor dia's: compileer een `standalone` TikZ-document naar PDF, converteer naar PNG
alleen als de decktool geen PDF kan verwerken. Behoud de `.tex` als bron van waarheid.

## Canvastools versus handgeschreven TikZ

Sommige onderzoekseditors bevatten een diagramcanvas dat bewerkbare TikZ (voor
voorbeeld Oleafly's Diagram Composer: teken, pas code aan, compileer de figuur,
invoegen). Dat is handig voor geometrie die je kunt slepen. Handgeschreven TikZ wint nog steeds
voor strakke commutatieve diagrammen en zeer regelmatige rasters. Hoe dan ook, bega de
TikZ-bron, niet alleen een PNG.

## Bewaar diagrammen in de repository

Bewaar figuurbronnen naast het papier:

```text
figures/
  pipeline.tex
  pipeline.pdf   % optional build product; often gitignored
```

Als het tijdschrift dikkere regels wil, bewerk je de bron en compileer je opnieuw. Wanneer een
coauteur "verbetert" een screenshot in een diatool, je bent de enige kwijt
bewerkbare versie.

## Veelvoorkomende faalmodi

Overloop in twee kolommen is gebruikelijk. Schaal met `\resizebox` als laatste redmiddel;
eerst opnieuw ontwerpen voor de breedte. Het niet overeenkomende lettertype is een andere: geef de voorkeur aan een standaarddocument
lettertypen over hardgecodeerde lettertypefamilies binnen TikZ, tenzij het tijdschrift dit vereist.
Controleer het contrast voor gesprekken, want onzichtbaar grijs op projectoren is een klassieker
val. En ongelabelde pijlen dwingen het bijschrift om elke rand uit te leggen, wat betekent
het diagram is onvolledig.

## Lagen en overlays

Voor lezingen en papers die een figuur delen, bouwt u het diagram in lagen op: basis
eerst de vakjes, dan de pijlen en dan de labels. Becommentarieer lagen tijdens het debuggen
plaatsing. Beamer-overlays (`\pause`, `\onslide`) kunnen stapsgewijs een pijplijn zichtbaar maken
stap uit dezelfde TikZ-bron als je de knooppuntnamen stabiel houdt.

## Toegankelijkheid en afdrukken

Codeer de betekenis niet alleen in rood versus groen. Gebruik ook vorm- of lijnstijl.
Controleer de afbeelding in grijswaarden. Bijschriften moeten nog steeds zinvol zijn als de lezer dat ook is
kleurenblind of printen op een zwart-wit laboratoriumprinter.

## Een workflow die werkt

Schets dertig seconden op papier en bouw vervolgens de kleinste TikZ die de
beweren. Definieer stijlen één keer en hergebruik ze. Compileer de figuur alleen totdat deze
ziet er goed uit, laat het in de krant vallen en laat het onderschrift de claim dragen. Verbinden
de `.tex`.

PowerPoint is prima voor een eenmalige labvergadering. Voor de PDF wordt een dagboek afgedrukt,
vectorbron die u opnieuw kunt kleuren, verslaat nog een ronde van "kunt u het bewerkbare verzenden
bestand?"