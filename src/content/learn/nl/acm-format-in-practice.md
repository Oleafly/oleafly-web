---

title: "ACM-formaat in de praktijk"
description: "De acmart-klasse: sigconf, metadata, anonieme beoordeling en verrassingen bij de eerste compilatie."
category: "venue-formats"
order: 3
level: "intermediate"
tags: ["venues", "acm"]
featured: false
updated: 2026-07-25
---

# ACM-formaat in de praktijk

ACM heeft in 2017 al haar templates samengevoegd in één klasse, `acmart`. Eén klasse, vele gezichten: de formaatoptie bepaalt of u een congrespaper met twee kolommen of een tijdschriftartikel met één kolom krijgt.

## Kies je formaatoptie

```latex
% Conference proceedings (SIGCHI, SIGPLAN, most SIGs)
\documentclass[sigconf]{acmart}

% Small journal format (TOCE, TAP, ...)
\documentclass[acmsmall]{acmart}

% Large journal format (TOG, ...)
\documentclass[acmlarge]{acmart}
```

`sigconf` is wat u nodig heeft voor vrijwel elke ACM-conferentie. Het CFP van de locatie noemt de exacte optie; vertrouw erop boven gewoonte. Als u nog steeds twijfelt tussen locatiefamilies, vergelijkt [ACM, IEEE en vrienden](/learn/acm-ieee-and-friends/) ze.

## De metagegevens zijn verplicht

In tegenstelling tot IEEEtran weigert acmart er goed uit te zien (en de uitgever weigert het te accepteren) zonder zijn metadatablokken:

```latex
\begin{CCSXML}
... % generated at dl.acm.org/ccs
\end{CCSXML}
\ccsdesc[500]{Software and its engineering~Compilers}

\keywords{compilers, optimization, benchmarks}
```

De CCS-concepten komen van een picker op de ACM-website die zowel de XML- als de `\ccsdesc`-regels genereert. Plak ze woordelijk. Trefwoorden staan ​​in `\keywords`, niet in abstracte zin. Het ACM-referentieformaatblok (dat grijze citatievak op pagina één) wordt automatisch gegenereerd op basis van `\acmConference`, `\acmYear` en vrienden, dat de uitgever invult of verifieert wanneer de camera gereed is.

## Dubbelblind indienen

De meeste ACM-conferenties beoordelen anoniem. Eén optie regelt het:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

'anoniem' verbergt auteurs en relaties, 'review' voegt regelnummers toe voor recensenten. Schakel beide uit zodat u klaar bent voor de camera. De klasse regelt de mechanismen, maar anonimisering is groter dan een vlag. Zie [dubbelblind goed gedaan](/learn/anonymization-double-blind/).

## Citaties: genummerd of auteurjaar

acmart gebruikt natbib eronder en ondersteunt beide stijlen:

| Optie | Resultaat |
|---|---|
| standaard | Genummerd: [3] |
| `natbib=true` + `\citestyle{acmauteurjaar}` | Jaar van auteur: (Lovelace, 1843) |

Sommige SIG's schrijven het auteursjaar voor (CHI historisch gezien), andere zijn genummerd. Nogmaals: het GVB beslist.

## Stel eerst verrassingen samen

acmart heeft honger naar pakketten. Verwacht deze bij een nieuwe installatie:

- **Libertijnse lettertypen.** De klasse laadt Linux Libertine en Biolinum plus `newtxmath`. Bij een minimale TeX-installatie arriveren deze als downloads de eerste keer dat u compileert. De gebundelde Tectonic-engine van Olafly haalt ze automatisch op bij het eerste gebruik, dus de eerste compilatie duurt langer dan de tweede. Dat is normaal, geen vastloper.
- **Strikte float-regels.** acmart blokkeert sommige pakketten (zoals `titlesec`) volledig en geeft een foutmelding als u ze laadt.
- **`\authorsaddresses{}`** dempt de voettekst "auteursadressen" in concepten.

Als een pakket echt niet kan worden opgelost, is de gebruikelijke oplossing: [installeer het ontbrekende pakket](/learn/install-missing-package/).

## Waar te verkrijgen

Download het officiële sjabloon van de auteurspagina's van acm.org of de site van uw conferentie, en houd `acmart.cls` up-to-date. ACM reviseert het meerdere keren per jaar en camera-ready-controles worden uitgevoerd op basis van de nieuwste versie.