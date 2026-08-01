---

title: "Tabellen langer dan één pagina"
description: "lange tabelkop- en voetteksten die worden herhaald."
category: "float-surgery"
order: 1
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Tabellen langer dan één pagina

Een gewone 'tafel'-omgeving is een float, en een float moet op één pagina passen. Geef het zestig rijen en LaTeX schuift het op een zwevende pagina en laat het overlopen, of stelt het voor altijd uit. De oplossing is het 'longtable'-pakket, dat een tabel typt die over pagina's wordt verdeeld en de koptekst op elke pagina herhaalt, zoals een afdruk van een spreadsheet dat doet.

```latex
\usepackage{longtable,booktabs}
\begin{longtable}{ll}
 \toprule
 Key & Value \\
 \midrule
 \endfirsthead
 \toprule Key & Value \\ \midrule \endhead
 \bottomrule \endfoot
 a & 1 \\
 % ... many rows
\end{longtable}
```

## Hoe de headerblokken werken

Een 'longtable' begint met maximaal vier declaratieblokken vóór de eigenlijke gegevensrijen. Alles boven `\endfirsthead` is de koptekst die één keer wordt afgedrukt, helemaal aan het begin van de tabel. Alles tussen `\endfirsthead` en `\endhead` is de kop die bovenaan elke volgende pagina wordt herhaald. Daarom verschijnt dezelfde regel "Key & Value" twee keer in het voorbeeld. Het blok dat eindigt op `\endfoot` wordt onderaan elke pagina afgedrukt die de tabel aanraakt, hier slechts een afsluitende `\bottomrule`. Er is ook `\endlastfoot` voor materiaal dat alleen onder de laatste rijen mag verschijnen, zoals een totaalregel. Als je een vervolghint wilt, is een gebruikelijk patroon `\midrule \multicolumn{2}{r}{vervolg op de volgende pagina} \\` in het voetblok en de echte `\bottomrule` in de laatste voet.

Na de declaraties komen de gegevensrijen, precies geschreven zoals in een normale `tabel` met `&` tussen cellen en `\\` aan het einde van elke rij. De regels voor 'booktabs' werken ongewijzigd. Zie [tabellen met drie regels](/learn/booktabs-beautiful/) voor wat ze vervangen.

## Geen float, en wat dat inhoudt

Het belangrijkste gedragsverschil wordt in één zin weergegeven: ‘longtable’ is geen praalwagen. Het begint precies waar u het in de broncode plaatst, breekt af waar de pagina's eindigen en accepteert geen `[htbp]`-argument. Dat verandert ook de manier waarop ondertitels werken. Je plaatst een `longtable` niet in een `table`-omgeving. Plaats in plaats daarvan `\caption{...}\\` in de tabel zelf, als de eerste regel van het eerste-head-blok, en het zal in dezelfde volgorde worden genummerd als uw andere tabellen.

## Twee dingen die u moet weten voordat u erop vertrouwt

Ten eerste worden de kolombreedtes globaal bepaald, dus het kan zijn dat LaTeX verschillende compileergangen nodig heeft voordat de kolommen niet meer verschuiven. Blijf compileren totdat de lay-out stabiel is. Ten tweede kan 'longtable' niet worden gebruikt in een lay-out met twee kolommen, wat dit voor de meeste conferentiesjablonen uitsluit. In die documenten zijn de realistische opties het verkleinen van de tabel, het opsplitsen in delen of het verplaatsen naar een bijlage met één kolom.