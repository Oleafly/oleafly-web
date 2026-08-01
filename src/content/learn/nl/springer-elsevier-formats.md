---

title: "Springer-, Elsevier- en LNCS-formaten"
description: "llncs, Springer Nature-tijdschriften en elsarticle: klassen met één kolom en bron die geschikt is voor camera's."
category: "venue-formats"
order: 4
level: "intermediate"
tags: ["venues", "publishers"]
featured: false
updated: 2026-07-25
---

# Springer-, Elsevier- en LNCS-formaten

Buiten de IEEE- en ACM-ecosystemen domineren twee uitgevers: Springer (waaronder Springer Nature) en Elsevier. Hun lessen zien er duidelijker uit dan de conferentiestijlen met twee kolommen, en dat is zo ontworpen. De uitgever zet de definitieve versie.

## LNCS: het werkpaard van de procedure

Als uw conferentie publiceert in Lecture Notes in Computer Science (of de broers en zussen LNAI en LNBI), schrijft u in `llncs`:

```latex
\documentclass{llncs}
\usepackage{graphicx}

\title{Contribution Title}
\author{Ada Lovelace\inst{1} \and Charles Babbage\inst{2}}
\institute{University of London \and University of Cambridge}
```

LNCS-artikelen bestaan ​​uit één kolom, gebruiken `\inst{}` superscripts om auteurs aan instituten toe te wijzen, en hebben een bekend krap standaardpaginabudget (vaak 12 tot 16 pagina's inclusief referenties). De klasse bevindt zich niet standaard in elke TeX-distributie. Download de auteurskit van de LNCS-pagina van Springer. De bibliografiestijl is `splncs04`:

```latex
\bibliographystyle{splncs04}
\bibliography{references}
```

## Springer Nature-tijdschriften

Springer-tijdschriften gebruikten historisch gezien `svjour3` en zijn gemigreerd naar de nieuwere `sn-jnl`-klasse met stijlopties per tijdschriftfamilie (`sn-mathphys-num`, `sn-basic` en andere). Op de pagina "Inzendingsrichtlijnen" van het tijdschrift worden de exacte klasse en optie vermeld. Raad het niet: twee Springer-tijdschriften kunnen verschillende klassen willen.

## Elsevier: elsartikel

Elsevier-tijdschriften delen één klasse, `elsarticle`:

```latex
\documentclass[preprint,12pt]{elsarticle}
% later: \documentclass[final,3p,twocolumn]{elsarticle}
```

De optie `preprint` geeft een ruime enkele kolom met dubbele regelafstand ter beoordeling, en `final` met `1p`, `3p` of `5p` bootst de gedrukte lay-out van het tijdschrift na. Bibliografiestijlen zijn `elsarticle-num` (genummerd) of `elsarticle-harv` (auteur-jaar), passend bij wat het tijdschrift gebruikt.

## Snelle vergelijking

| Uitgever | Klasse | Kolommen | Slabstijl |
|---|---|---|---|
| Springer LNCS | `llncs` | één | `splncs04` |
| Springer Natuurtijdschriften | `sn-jnl` (was `svjour3`) | één | optie per tijdschrift |
| Elsevier | `elsartikel` | één (recensie) | `elsarticle-num` / `-harv` |

## Waarom één kolom? Omdat jij niet de zetter bent

Deze klassen geven uw *manuscript* weer, niet de laatste pagina. Het productieteam van de uitgever zette de geaccepteerde artikelen opnieuw in de huisindeling van het tijdschrift. Dat is ook de reden waarom "camera-ready bronupload" hier iets specifieks betekent: u uploadt uw `.tex`-, `.bib`- en figuurbestanden, niet alleen een PDF, zodat de productie het papier opnieuw kan opbouwen en restylen. Praktische gevolgen:

- Houd de bron schoon en compileerbaar vanaf een nieuwe kassa: geen absolute paden, geen ontbrekende cijfers
- Hack de spatiëring of marges niet. De productie verwijdert het toch (en het kan [gemarkeerd worden](/learn/page-limits-without-crimes/))
- Gebruik standaardpakketten. Exotische exemplaren worden tijdens de productie herschreven of naar jou teruggestuurd

Deze klassen steunen op een behoorlijk aantal pakketten, dus een minimale installatie kan er bij de eerste compilatie meerdere ophalen. Als iemand weigert te verschijnen, zie dan [ontbrekende pakketten installeren](/learn/install-missing-package/). Als de sjabloon een regelrechte fout bevat, sorteer deze dan zoals elke [broken template](/learn/fix-broken-template/).