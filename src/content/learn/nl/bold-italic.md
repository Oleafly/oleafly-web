---

title: "Nadruk zonder het lettertype te bestrijden"
description: "textbf, textit, emph, mono, en waarom emph beter nestelt dan hardgecodeerde cursief."
category: "type-and-shape"
order: 1
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Nadruk zonder het lettertype te bestrijden

De nadruk in LaTeX komt van een kleine reeks commando's die elk de betreffende tekst als een accolade-argument beschouwen. LaTeX scheidt twee ideeën die de meeste tekstverwerkers samenvoegen: het toepassen van een specifiek lettertype en het markeren van een spanwijdte zoals benadrukt. Weten welke opdracht dat doet, zorgt ervoor dat documenten consistent blijven wanneer stijlen veranderen.

```latex
\textbf{bold}
\textit{italic}
\emph{emphasis} % preferred in running text
\underline{avoid} % rarely used in body text
\texttt{monospace}
\textsc{Small Caps}
```

## De commando's

`\textbf` wordt vetgedrukt, de standaardbehandeling voor sterke nadruk en voor trefwoorden in definities. Met `\textit` wordt de cursieve tekst rechtstreeks ingesteld. `\texttt` schakelt over naar het monospaced typemachine-lettertype, de conventie voor bestandsnamen, opdrachten en code-identificaties in lopende tekst. Met `\textsc` wordt klein kapitalen ingesteld, wat gebruikelijk is voor auteursnamen in bibliografieën en voor acroniemen die anders een tekstregel zouden domineren.

`\underline` bestaat maar krijgt commentaar in het voorbeeld. Onderstrepen is een substituut voor cursief uit het typemachinetijdperk, en in LaTeX heeft het ook een mechanisch probleem: de onderstreepte tekst wordt in een kader geplaatst, zodat deze niet over regels heen kan breken, en een lange onderstreepte zin zal buiten de marge vallen. In gedrukte typografie doet cursief het werk dat onderstreping vroeger deed.

De commando's zijn genest, dus `\textbf{\textit{bold cursief}}` combineert beide wanneer het lettertype het gezicht levert.

## Waarom \nadruk

`\emph` markeert de betekenis in plaats van de schijn: er staat "benadruk dit" en laat de context beslissen hoe. Bij rechtopstaande tekst wordt het cursief gedrukt. Binnentekst die al cursief is, wordt weer rechtop gezet, zodat de nadruk binnen de nadruk zichtbaar blijft. Hardgecodeerde `\textit` binnen cursieve tekst blijft gewoon cursief en de innerlijke nadruk verdwijnt. Het markeren van intentie loont ook later. Een klasse of pakket kan op één plek opnieuw definiëren hoe nadruk eruit ziet, zonder bewerkingen in het hele document.

Vuistregel: gebruik `\emph` voor nadruk in lopende proza, en reserveer `\textit` voor dingen die conventioneel cursief zijn, ongeacht de context, zoals boektitels, buitenlandse uitdrukkingen en soortnamen.

## Grenzen en gewoonten

Dit zijn allemaal opdrachten in de tekstmodus en ze gedragen zich misdragen in formules. Vetgedrukte wiskundige symbolen hebben `\mathbf` of `\boldsymbol` nodig, behandeld in [bold math](/learn/bold-math/). Weersta het stapelen van nadruk, want als alles vetgedrukt is, valt niets op. Bouw koppen op basis van structurele commando's zoals `\section` in plaats van handmatig vetgedrukt, omdat structuur ook de inhoudsopgave en PDF-bladwijzers voedt. [Groter en kleiner type](/learn/font-size/) maakt hetzelfde argument voor lettergroottes.