---

title: "Eén kolom of twee"
description: "Waarom lay-outs per locatie verschillen, wat twee kolommen doen met cijfers en vergelijkingen, en wie beslist."
category: "paper-anatomy"
order: 7
level: "beginner"
tags: ["structure", "formatting"]
featured: false
updated: 2026-07-25
---

# Eén kolom of twee

Open tien kranten en je zult twee stammen zien: dichte pagina's met twee kolommen die op krantenpapier lijken, en luchtige pagina's met één kolom die op een boek lijken. Geen van beide is beter. Ze zijn allemaal met een reden geëvolueerd, en de keuze is bijna nooit aan jou.

## Waarom locaties verschillen

Lay-outs met twee kolommen vormen een conferentietraditie, ontstaan ​​toen de proceedings werden gedrukt en de paginabudgetten krap waren. Smalle kolommen bevatten meer woorden per pagina en korte regellengtes zijn gemakkelijker te scannen. De meeste CS-conferenties (ACM, IEEE en vrienden) gebruiken ze nog steeds.

Lay-outs met één kolom domineren tijdschriften, preprints en scripties. Ze geven vergelijkingen, cijfers en tabellen ruimte om te ademen, en ze zijn vriendelijker voor het lezen van lange vormen. Preprint-servers en veel ML-locaties zijn deels om deze reden overgestapt op één kolom.

| Indeling | Typisch huis | Persoonlijkheid |
|---|---|---|
| Twee kolommen | Verhandelingen van de conferentie | Dicht, scanbaar, beperkt aantal pagina's |
| Eén kolom | Tijdschriften, preprints, scripties | Ruim, leesbaar, vergelijkingsvriendelijk |

## Wat twee kolommen met je cijfers doen

In een document met twee kolommen zweeft een normaal 'figuur' binnen één kolom, wat vaak te smal is voor een gedetailleerd plot. De variant met ster omvat beide kolommen:

```latex
\begin{figure*}
  \centering
  \includegraphics[width=\textwidth]{wide-results.pdf}
  \caption{A figure that needs the full page width.}
\end{figure*}
```

Dezelfde truc voor brede tafels met `table*`. Eén addertje onder het gras: floats met een ster landen meestal bovenaan een pagina en kunnen geen plaatsing onderaan of hier gebruiken, dus plan uw brede cijfers vroeg. De basisprincipes van het formaat zijn te vinden in [afbeeldingen invoegen](/learn/insert-images/).

## Vergelijkingen worden krap

Een kolom van ongeveer 9,5 cm breed is een vijandige plek voor lange vergelijkingen. In artikelen met twee kolommen zul je vergelijkingen vaker breken, agressiever afkorten en leunen op omgevingen met meerdere regels. Als uw paper veel vergelijkingen bevat en u de keuze heeft uit een locatie, bespaart een enkele kolom u echte opmaaktijd. Zie [math mode](/learn/math-mode/) voor de tooling.

## Schermen en schermlezers geven de voorkeur aan één kolom

Voor alles dat geen formele papieren inzending is (rapporten, documentatie, cv's, preprints die mensen op laptops en telefoons lezen), wint één kolom. PDF's worden niet opnieuw geplaatst, dus pagina's met twee kolommen dwingen schermlezers en tekstextractors om de leesvolgorde te raden, en ze dwingen mensen om op elke pagina omhoog en omlaag te scrollen. Systemen voor het parseren van cv's zijn berucht vanwege het door elkaar gooien van lay-outs met meerdere kolommen. Reserveer twee kolommen voor locaties die erom vragen.

## De documentklasse beslist voor u

Hier komt het ontspannende gedeelte: je configureert dit bijna nooit met de hand. De locatie geeft je een klasse of sjabloon, en de lay-out wordt daarbij meegeleverd.

```latex
\documentclass{article}              % one column
\documentclass[twocolumn]{article}   % two columns
\documentclass[sigconf]{acmart}      % venue class, layout included
```

Schrijf uw inhoud één keer, en als u van sjabloon wisselt, wordt alles opnieuw gerangschikt. Daar is LaTeX voor: dezelfde bron compileert tot een conferentieversie met twee kolommen en een preprint met één kolom met een wijziging van één regel. Bewaar uw figuren in vectorformaten en uw vergelijkingen in standaardomgevingen, en het wisselen van lay-out is vrijwel pijnloos.