---

title: "Macro's die de notatie eerlijk houden"
description: "newcommand, NewDocumentCommand, een gedeeld macrobestand."
category: "runtime"
order: 4
level: "intermediate"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# Macro's die de notatie eerlijk houden

Elk papier heeft een notatie die zich herhaalt: de reële getallen, een verwachtingsoperator, een absolute waarde met balken van de juiste grootte. Als u op veertig plaatsen `\mathbb{R}` typt en uw adviseur geeft later de voorkeur aan `\mathbf{R}`, dan heeft u veertig bewerkingen en mist u er één. Een macro verandert die notatie in één benoemde opdracht, die één keer wordt gedefinieerd. Verander de definitie en het hele document volgt. Zo houd je de notatie eerlijk: de bron kan niet uit de pas lopen met zichzelf.

## Commando's definiëren met newcommand

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\E}[1]{\mathbb{E}\left[#1\right]}
\newcommand{\abs}[1]{\left\lvert #1 \right\rvert}
```

De eerste definitie is de eenvoudigste: `\R` is nu puur steno, en als je `\R` ergens typt, krijg je `\mathbb{R}`.

De tweede vorm heeft een argument nodig. De `[1]` achter de naam geeft aan dat `\E` één argument accepteert, en `#1` geeft aan waar dat argument in de uitbreiding terechtkomt. Dus `\E{X}` wordt `\mathbb{E}\left[X\right]`. De definitie biedt meer dan beknoptheid: het paar `\left[` en `\right]` zorgt ervoor dat de haakjes groeien zodat ze passen in wat er ook in zit, dus `\E{\frac{X}{n}}` krijgt automatisch hoge haakjes. De `\abs` macro doet hetzelfde met `\lvert` en `\rvert`, het juiste paar verticale balken voor de absolute waarde. U kunt maximaal negen argumenten declareren en ernaar verwijzen als '#1' tot en met '#9'.

Als een commando al bestaat, weigert `\newcommand` het opnieuw te definiëren en stopt het met een fout, die je beschermt tegen het stilletjes breken van iets. Om opzettelijk een bestaand commando te vervangen, gebruik in plaats daarvan `\renewcommand`.

## De moderne interface

De huidige LaTeX levert ook een commando met rijkere definitie:

```latex
\NewDocumentCommand{\citepair}{mm}{\cite{#1}, \cite{#2}}
```

`\NewDocumentCommand` gebruikt een argumentspecificatiereeks in plaats van een telling. Hier betekent `mm` twee verplichte argumenten, dus `\citepair{knuth84}{lamport94}` citeert beide sleutels. De specificatietaal gaat verder dan `\newcommand` kan: `o` declareert een optioneel argument tussen vierkante haken, `s` detecteert een stervariant, en `O{default}` geeft een optioneel argument een standaardwaarde. Voor alles wat verder gaat dan eenvoudige vervanging, kunt u deze interface gebruiken.

## Deel de definities

Houd een `macros.sty` gedeeld tussen hoofdstukken. Zet je definities in dat ene bestand, laad het met `\usepackage{macros}` uit elk document, en elk hoofdstuk van een proefschrift, plus de dia's en de papieren versie, zijn het allemaal eens over de notatie. Wanneer een medewerker zich aansluit, leest hij of zij één kort bestand om uw conventies te leren kennen, in plaats van ze uit de tekst te halen. Dit gaat op natuurlijke wijze gepaard met een [configuratie met meerdere bestanden] (/learn/split-chapter-files/).

Een tip over naamgeving: geef macro's betekenisvolle namen zoals `\abs` of `\norm` in plaats van op uiterlijk gebaseerde namen zoals `\bigbars`. De naam moet zeggen wat de notatie betekent, zodat de definitie vrij is om te veranderen hoe deze eruit ziet. En weersta het definiëren van een macro voor iets dat u twee keer gebruikt; de uitbetaling begint rond het derde gebruik.