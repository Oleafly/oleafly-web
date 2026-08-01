---

title: "Hoofden en voeten rennen"
description: "fancyhdr-patronen voor titel en paginanummer."
category: "the-page"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Lopende hoofden en voeten

Een lopende kop is de strook tekst bovenaan elke pagina, en de lopende voet is de tegenhanger ervan onderaan. In een boek of scriptie staan ​​meestal de hoofdstuktitel en het paginanummer vermeld. In een ingediend artikel kunnen ze een korte versie van de titel, de auteurs of helemaal niets bevatten. De ingebouwde pagina-opmaakprofielen van LaTeX (`plain`, `leeg`, `headings`) dekken de basis, maar zodra je een specifieke combinatie wilt, zoals je titel aan de linkerkant en het paginanummer aan de rechterkant, grijp je naar het `fancyhdr`-pakket.

## Het standaardrecept

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{Short title}
\fancyhead[R]{\thepage}
\renewcommand{\headrulewidth}{0.4pt}
```

Elke regel hier doet één taak. `\usepackage{fancyhdr}` laadt het pakket in uw preambule. `\pagestyle{fancy}` schakelt het hele document over naar de configureerbare stijl van fancyhdr. `\fancyhf{}` wist elk kop- en voettekstveld, wat belangrijk is omdat fancyhdr wordt geleverd met standaardinstellingen (paginanummer en sectiemarkeringen) die je bijna nooit met die van jezelf wilt vermengen. Door met een schone lei te beginnen, blijven verrassingen buiten de deur.

De volgende twee regels vullen de velden weer in. `\fancyhead[L]{Korte titel}` plaatst letterlijke tekst in het linkervak ​​van de kop, en `\fancyhead[R]{\depagina}` plaatst het huidige paginanummer in het rechtervak. `\depagina` is een commando dat zich uitbreidt naar het paginanummer, zodat het op elke pagina automatisch wordt bijgewerkt. Er is een bijpassende `\fancyfoot[L/C/R]{...}` als je de zaken liever onderaan zet.

Ten slotte bestuurt `\headrulewidth` de dunne horizontale lijn onder de koptekst. Als u dit instelt op `0,4pt`, wordt een haarlijn getekend; stel het in op `0pt` om de regel volledig te verwijderen. Er bestaat ook een `\footrulewidth`, die standaard op nul staat.

## Dubbelzijdige documenten

Als uw documentklasse `twoside` gebruikt (de standaardwaarde voor `book`), wisselen de pagina's af tussen even en oneven, en zijn de kopteksten gewoonlijk een spiegelbeeld van elkaar. fancyhdr handelt dit af met even/oneven selectors: `\fancyhead[LE,RO]{\thepage}` plaatst het paginanummer links van even pagina's en rechts van oneven pagina's, en dat is waar de duim van de lezer het vindt. Je kunt dit combineren met `\leftmark` en `\rightmark`, die de huidige hoofdstuk- en sectietitels bevatten, om de klassieke boekindeling te reproduceren.

## Hoofdstukpagina's en de lege look

Hoofdstukopeningspagina's negeren je fraaie stijl omdat `\chapter` achter de schermen `\thispagestyle{plain}` aanroept. Dat is opzettelijk, en de meeste ontwerpen houden zich daaraan. Als je deze pagina's bloot wilt hebben, voeg dan `\fancypagestyle{plain}{\fancyhf{}}` toe om opnieuw te definiëren wat `plain` betekent.

Eén veel voorkomende waarschuwing die u kunt verwachten: fancyhdr kan klagen dat `\headheight` te klein is. De oplossing is precies wat het bericht suggereert, bijvoorbeeld `\setlength{\headheight}{14pt}` in de preambule, of `headheight=14pt` doorgeven aan het [geometry package](/learn/margins-geometry/) als je het al gebruikt. Het is een lay-outreservering, geen fout, maar als u deze stilzet, blijft uw log schoon en uw basislijnraster eerlijk.