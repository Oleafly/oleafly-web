---

title: "Romeinse en vervolgens Arabische pagina's"
description: "Vooraanstaande nummering die commissies nog verwachten."
category: "long-form"
order: 2
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Romeinse en vervolgens Arabische pagina's

Open bijna elk proefschrift of studieboek en je zult dezelfde conventie zien: de titelpagina, samenvatting, inhoudsopgave en dankbetuigingen zijn genummerd i, ii, iii in kleine Romeinse cijfers, en dan begint het eerste echte hoofdstuk opnieuw op pagina 1 in gewone Arabische cijfers. De voorzaak wordt behandeld als een afzonderlijke, voorlopige reeks, en graduate schools controleren expliciet op deze conventie. In LaTeX zijn er precies twee commando's nodig.

## Het patroon

```latex
\begin{document}
\pagenumbering{roman}
\maketitle
\tableofcontents
\pagenumbering{arabic}
\chapter{Introduction}
...
\end{document}
```

`\pagenumbering{roman}` doet twee dingen tegelijk: het verandert de numerieke stijl naar kleine Romeinse letters en zet de paginateller terug op 1, zodat de titelpagina pagina i wordt. Alles wat je erna plaatst, meestal `\maketitle`, de samenvatting, de [inhoudsopgave](/learn/table-of-contents/), en eventuele lijsten met figuren of tabellen, krijgt de nummers ii, iii, iv, enzovoort.

Dan, onmiddellijk vóór het eerste hoofdstuk, schakelt `\pagenumbering{arabic}` de stijl terug en reset de teller opnieuw, zodat `\chapter{Introductie}` op een nieuwe pagina 1 opent. Het hele punt is het opnieuw instellen: zonder deze zou je inleiding beginnen op zoiets als pagina 7, wat niet is wat commissies of citatieconventies verwachten.

Omdat `\chapter` in de klassen `book` en `report` altijd op een nieuwe pagina begint, heb je geen expliciete `\newpage` nodig vóór de overstap. In een klasse zonder hoofdstukken zou je eerst `\clearpage` toevoegen, zodat de nummeringswijziging niet midden op de pagina terechtkomt.

## Lessen die het voor je doen

Sommige scriptieklassen bieden `\frontmatter` / `\mainmatter` / `\backmatter`. Deze komen uit de 'boek'-klasse en zijn de manier om hetzelfde te zeggen op een hoger niveau. `\frontmatter` schakelt over naar romeinse nummering en maakt de hoofdstukken ongenummerd (dus een voorwoord krijgt geen label "Hoofdstuk 1"). `\mainmatter` schakelt over naar Arabisch en herstelt de genummerde hoofdstukken. Met `\backmatter` wordt de hoofdstuknummering aan het eind weer uitgeschakeld voor appendixachtig materiaal. Als het sjabloon van uw universiteit is gebouwd op 'boek' of 'memoires', geef dan de voorkeur aan deze commando's boven onbewerkte '\paginanummering', omdat het sjabloon er extra gedrag aan kan koppelen, zoals verschillende kopteksten voor voorwerk. De twee benaderingen conflicteren niet, maar er is geen reden om beide te gebruiken.

## Eén ding om te controleren

De Romeins genummerde pagina's moeten overeenkomen met uw inhoudsopgave. Als uw samenvatting wordt weergegeven als pagina "iv" in de inhoudsopgave, maar wordt afgedrukt als "2", is de gebruikelijke oorzaak een `\pagenumbering`-aanroep die wordt geplaatst na de inhoud die deze zou moeten behandelen, of een ontbrekende tweede compilatie: paginanummers in de inhoudsopgave komen uit het `.aux`-bestand, dus u moet [tweemaal compileren](/learn/compile-to-pdf/) voordat u kunt beoordelen of de nummering juist is. Compileer, compileer opnieuw en vergelijk vervolgens de inhoudsopgave met de daadwerkelijke pagina's.