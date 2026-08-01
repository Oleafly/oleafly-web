---

title: "Kleur die de print overleeft"
description: "xcolor, HTML-specificaties en het gebruik van kleur als signaal wanneer tijdschriften in grijswaarden worden weergegeven."
category: "type-and-shape"
order: 6
level: "beginner"
tags: ["formatting", "color"]
featured: false
updated: 2026-07-25
---

# Kleur die de print overleeft

Kleur in LaTeX komt uit één pakket, `xcolor`. Het geeft u benoemde kleuren, exacte kleurspecificaties, achtergrondvakken en een manier om uw eigen palet te definiëren. De hoofdtekst in tijdschriften is bijna altijd zwart, dus je hebt deze minder vaak nodig dan je zou denken. Het loont nog steeds de moeite in dia's, concepten met zichtbare annotaties en alles wat bij het palet van een organisatie moet passen.

## De commando's

```latex
\usepackage{xcolor}
\textcolor{red}{warning}
\textcolor[HTML]{2563EB}{brand blue}
\colorbox{gray!15}{highlighted}

\definecolor{brand}{HTML}{2563EB}
```

`\textcolor{red}{warning}` kleurt alleen de tekst in het tweede argument, met behulp van een van de vooraf gedefinieerde namen van xcolor; `rood`, `blauw`, `grijs`, `groenblauw` en enkele tientallen andere werken out-of-the-box. Wanneer een naam niet nauwkeurig genoeg is, accepteert het optionele `[HTML]`-model een zescijferige hexadecimale code, dezelfde code die een webontwerper of stijlgids u overhandigt, zodat `2563EB` een specifiek blauw exact reproduceert. Merk op dat xcolor de hexadecimale cijfers in hoofdletters wil hebben en zonder de `#`.

`\colorbox{gray!15}{highlighted}` schildert een achtergrond achter de tekst in plaats van de tekst zelf te kleuren. Het argument `gray!15` toont de mengsyntaxis van xcolor: 15 delen grijs gemengd met 85 delen wit, wat de bleke tint oplevert die leest als een hoogtepunt. Dezelfde syntaxis werkt overal waar een kleur wordt verwacht, en u kunt deze aan elkaar koppelen, zoals in `blauw!50!zwart` voor een donkerder blauw.

## Eén keer definiëren, overal gebruiken

`\definecolor{brand}{HTML}{2563EB}` registreert een eigen naam. Na deze regel werkt `\textcolor{brand}{...}` zoals elke ingebouwde kleur, en de hexadecimale waarde bevindt zich op precies één plaats. Wanneer het palet verandert, bewerkt u één preambuleregel in plaats van te zoeken naar ruwe hexadecimale codes door het document. Hetzelfde idee als [aangepaste macro's](/learn/custom-commands/): één keer definiëren, overal opnieuw gebruiken.

## Grijswaarden zijn nog steeds reëel

Gebruik kleur als signaal, niet als versiering, en ga ervan uit dat sommige lezers het niet zullen zien. Veel tijdschriften worden nog steeds in grijswaarden afgedrukt, waarbij rood en blauw samenvallen in vergelijkbare grijstinten, en een aanzienlijk deel van de lezers heeft een vorm van kleurwaarnemingstekort. Vuistregel: kleur kan een onderscheid versterken, maar mag nooit het enige zijn dat dit onderscheid draagt. Combineer gekleurde tekst met vetgedrukte tekst of een symbool, en combineer gekleurde plotlijnen met duidelijke markeringen of streepjespatronen.

Nog iets over de reikwijdte. Als u koppen of hoofdtekst met de hand kleurt, ziet een document er snel zelfgemaakt uit, en binnen de sjabloon van een locatie wordt dit toch teruggedraaid. Bewaar de handmatige kleur voor plaatsen waar het iets betekent, zoals het markeren van door de recensent aangevraagde wijzigingen in een revisie, en verwijder deze vóór de definitieve versie.