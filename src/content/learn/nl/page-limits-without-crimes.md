---

title: "Paginalimieten zonder typografische misdaden"
description: "Legitieme manieren om aan de limiet te voldoen, de hacks die ervoor zorgen dat papieren worden gemarkeerd en waarom locaties controleren."
category: "venue-formats"
order: 5
level: "advanced"
tags: ["venues", "formatting"]
featured: false
updated: 2026-07-25
---

# Paginalimieten zonder typografische misdaden

Je papier is 10,4 pagina's. De limiet is 10. Wat er in het volgende uur gebeurt, bepaalt of u het papier repareert of een opmaakfout begaat waardoor het door het bureau wordt afgewezen.

## Knijp in de inhoud, niet in het formaat

Werk deze lijst op volgorde af. Elke stap is onzichtbaar voor opmaakcontroleurs, omdat hierdoor het papier wordt gewijzigd en niet de sjabloon.

1. **Eerst het proza ​​aanscherpen.** Een halve pagina vol is meestal een langdradig gedeelte over gerelateerd werk en drie overbodige overgangszinnen. Het knippen van woorden verbetert het papier. Het verwijderen van witruimte doet dat niet.
2. **Hunt weduwen.** Een alinea waarvan de laatste regel één of twee woorden bevat, verspilt een volledige regel. Als u één zin in die paragraaf herschrijft, wordt deze weer teruggevorderd.
3. **Vergroot de cijfers eerlijk.** Veel figuren hebben enorme interne marges. Snijd de witruimte in de figuur zelf weg, of plaats een figuur met twee kolommen in één kolom als deze leesbaar blijft.
4. **Slanke tabellen.** `booktabs`-tabellen zonder verticale regels zijn compacter en zien er beter uit, zie [mooie tabellen](/learn/booktabs-beautiful/), en verkorte kolomkoppen kopen echte breedte.
5. **Gebruik vectorfiguren.** PDF-plots worden netjes verkleind, zodat u ze verder kunt verkleinen dan gepixelde PNG's voordat de leesbaarheid afneemt. Vage rasterfiguren hebben hun eigen problemen, zie [vage lettertypen in PDF's](/learn/fuzzy-font-pdf/).
6. **Verplaats materiaal naar een bijlage of aanvulling** als de locatie dit toestaat. Bewijzen, extra ablaties en hyperparametertabellen zijn klassieke overflow-kandidaten. Controleer of de bijlage meetelt voor de limiet, veel locaties sluiten deze uit, sommige niet.

## De misdaden

Deze veranderen de sjabloon in plaats van het papier. Programmacommissies voeren geautomatiseerde formaatcontroles uit, juist omdat mensen ze proberen:

| Misdaad | Hoe het wordt gepakt |
|---|---|
| `\vspace{-8pt}` overal gestrooid | Zichtbaar krappe spatiëring, verschillen ten opzichte van de standaardwaarden van de klasse |
| `\gebruikpakket[marge=...]{geometrie}` | Geautomatiseerde margemeting |
| `\baselinestretch` of lettergrootte verkleinen | Aantal regels per kolom, tests van de lettergrootte |
| `\small` of `\footnotesize` in hoofdtekst of bijschriften | Lettergroottesondes, oogbollen van recensent |
| Negatieve `\itemsep`, verpletterde lijsten | Krap uiterlijk, checker-heuristiek |
| De naam van het klassenbestand wijzigen met bewerkingen in | Controlesom tegen de officiële klasse |

## Waarom locaties daadwerkelijk controleren

Een paginalimiet is een eerlijkheidscontract: elke auteur krijgt dezelfde ruimte en elke recensent verplicht zich ertoe een beperkt aantal pagina's te lezen. Een artikel dat zich een weg baant naar 10 pagina's, is in werkelijkheid een artikel van 11 pagina's dat concurreert met eerlijke artikelen van 10 pagina's. Daarom worden schendingen behandeld als een integriteitskwestie en niet als een stijlkwestie. Veel locaties wijzen een bureau af zonder beoordeling, en er is geen beroep dat zegt: "maar de inhoud was goed".

## Het eerlijke laatste redmiddel

Als je het proza ​​hebt aangescherpt, de praalwagens hebt afgeslankt, de proefdrukken naar de bijlage hebt verplaatst en je nog steeds klaar bent: snij een resultaat. Pijnlijk, maar een gefocust artikel van tien pagina's geeft sowieso beter weer dan een overvol artikel. Recensenten kunnen de dichtheid voelen, en [een locatie kiezen](/learn/choose-your-venue/) met een langer formaat is altijd een optie voor de volgende inzending.