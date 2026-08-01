---

title: "Links in de PDF"
description: "hyperref, url, href, kleuren en PDF-metagegevens."
category: "paper-bones"
order: 6
level: "intermediate"
tags: ["structure", "hyperref"]
featured: false
updated: 2026-07-25
---

# Links in de PDF

Een PDF is niet zomaar papier op een scherm. Het kan live links bevatten: klikbare URL's, kruisverwijzingen die naar de juiste figuur springen, citaten die naar de bibliografie springen en een zijbalkoverzicht opgebouwd uit uw sectiekoppen. In LaTeX biedt één pakket dit allemaal: `hyperref`. Laad het en elke `\ref`, `\cite` en inhoudsopgave in uw document wordt stilletjes klikbaar, zonder wijzigingen aan de rest van uw broncode.

## Hyperref. laden en configureren

```latex
\usepackage[colorlinks=true,linkcolor=blue,citecolor=blue,urlcolor=blue]{hyperref}
\url{https://oleafly.com}
\href{https://oleafly.com}{Oleafly}
\hypersetup{pdftitle={My Paper}, pdfauthor={You}}
```

De opties tussen vierkante haakjes bepalen hoe links eruitzien. Standaard tekent hyperref een gekleurde rechthoek rond elke link, wat de meeste mensen lelijk vinden. Door `colorlinks=true` in te stellen worden de vakken vervangen door gekleurde tekst, en de drie kleuropties splitsen deze op per linktype: `linkcolor` omvat interne sprongen zoals sectie- en figuurreferenties, `citecolor` omvat citaten, en `urlcolor` omvat webadressen. Het is belangrijk om ze op te splitsen, omdat een artikel vol citaten anders kan veranderen in een muur van blauw.

## url versus href

De twee koppelingsopdrachten voeren verschillende taken uit. `\url{...}` drukt het adres zelf af in een typemachinelettertype en maakt het klikbaar, wat u wilt in een bibliografie of voetnoot waarin de lezer zou moeten zien waar de link naartoe gaat. `\href{adres}{tekst}` verbergt het adres achter de tekst die u invoert, zoals een link op een webpagina. Geef de voorkeur aan `\url` in documenten die kunnen worden afgedrukt, omdat een `\href`-label een papieren lezer geen mogelijkheid geeft om het adres in te typen.

Een praktische bonus: `\url` weet hoe hij lange adressen over regels moet verdelen zonder een koppelteken in te voegen dat het adres zou beschadigen, iets wat een URL met een gewoon typemachine-lettertype niet kan doen.

## PDF-metagegevens

Met `\hypersetup` kunt u elke hyperref-optie wijzigen na het laden, en hier kunt u ook de metagegevens van het document instellen. De velden 'pdftitle' en 'pdfauthor' vullen de titel en auteur in die uw PDF-lezer toont in de vensterbalk en bestandseigenschappen. Zonder deze codes geven lezers vaak de bestandsnaam of de eerste kop weer, die er onvoltooid uitziet in een document dat u indient of deelt. Je kunt op elk moment `\hypersetup` in de preambule aanroepen na `\usepackage{hyperref}`.

## Printvriendelijke documenten

Voor printvriendelijke documenten gebruikt u `hidelinks`. Door het als optie door te geven, `\usepackage[hidelinks]{hyperref}`, blijft elke link klikbaar op het scherm, maar worden zowel de gekleurde vakken als de gekleurde tekst verwijderd, zodat de afgedrukte pagina er volkomen normaal uitziet. Veel dagboekklassen vereisen precies dit.

Een veel voorkomende fout die u moet vermijden: hyperref herdefinieert veel interne opdrachten, dus het moet worden geladen als een van de laatste pakketten in uw preambule. Als uw links naar de verkeerde pagina's verwijzen of als u vreemde fouten krijgt uit een ander pakket, is de laadvolgorde het eerste dat u moet controleren. Zie [cross-references](/learn/cross-references/) voor de `\label` en `\ref` mechanismen die hyperref klikbaar maakt.