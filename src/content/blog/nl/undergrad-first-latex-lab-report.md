---

title: "Je eerste laboratoriumrapport in LaTeX als student"
description: "Van nul tot een compilatierapport: sjabloon, vergelijkingen, cijfers, referenties en een compilatiepad waarvoor TeX Live niet handmatig hoeft te worden beheerd."
date: 2026-07-02
tags: [students, beginners, lab-report]
---

U hoeft LaTeX niet te beheersen om een ​​laboratoriumrapport af te ronden. U hebt een sjabloon nodig, a
enkele commando's en een compileerknop die vanaf de eerste dag werkt. Al het andere kan
wacht tot een latere cursus om een scriptie-klasdocument vraagt.

Dit is een korte weg waarbij prioriteit wordt gegeven aan een schone PDF boven perfecte typografie.

## Sla de installatie van meerdere gigabytes over als je kunt

Een desktoponderzoekseditor met een gebundelde engine (bijvoorbeeld
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest)) brengt u naar een PDF
zonder TeX Live toe te dienen. Je krijgt sjablonen, foutkaarten op de regel
brak, PDF naast de bron met klik-om-te-springen, en bestandsgeschiedenis zonder a
aparte Git-cursus. Als je instructeur een specifieke distributie of
Op de achterzijde volgt u de cursusnotities. Anders optimaliseren voor starten.

Cloudeditors zijn ook prima als de cursus ze al gebruikt. Het doel is een PDF
op tijd, geen toolchain-identiteit.

## Steel een skelet en verwijder de helft ervan

Begin met een eenvoudig 'artikel'-sjabloon:

```latex
\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,graphicx}
\begin{document}
\title{Lab 3: RC circuits}
\author{Your Name \and Lab Partner}
\date{Due date}
\maketitle

\section{Objective}
\section{Method}
\section{Results}
\section{Discussion}
\section{Conclusion}
\end{document}
```

Meer details: [compileer uw eerste PDF](/learn/first-document/) en de
[snelle referentie](/learn/cheatsheet/).

Verwijder secties waar uw rubriek niet om vraagt. Kopieer geen scriptie van 40 pakketten
inleiding "voor het geval dat." Met extra pakketten krijgen beginners fouten die ze niet kunnen maken
lees.

## Vergelijkingen voor het laboratorium, niet voor een leerboek

Inline: `$F = ma$`. Weergave:

```latex
\[
  v = v_0 + at
\]
```

Nummer alleen wat je later citeert met `\eqref`. Als de TA om onzekerheid vroeg,
zet het in een zin of een klein tabelletje, en niet in een tienregelig 'uitlijnen', dat doe je niet
begrijp het nog. Breuken: `\frac{a}{b}`. Vierkantswortels: `\sqrt{x}`.

Wanneer het compileerlogboek iets engs zegt, repareer dan alleen de eerste fout
opnieuw compileren. Latere fouten zijn vaak ruis van de eerste.

## Eén cijfer, goed gedaan

Exporteer een plot als PDF of PNG vanuit uw analysetool. Voeg het toe met:

```latex
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.85\textwidth]{plot.pdf}
  \caption{Measured voltage vs time for trial 2.}\label{fig:vr}
\end{figure}
```

In de tekst: `Figuur~\ref{fig:vr} toont...`. Onderschrift onder de figuur. Etiket
na het onderschrift. Als de figuur naar de verkeerde pagina zweeft, verkleint u de breedte iets
voordat je een uur lang tegen plaatsingsopties vecht:
[zwevende plaatsing](/learn/figure-wrong-position/).

## Tafels zonder lijden

Voor een paar rijen is een eenvoudige tabel voldoende. Zet hierboven een onderschrift met `tabel`
+ `\onderschrift`. Lijn de cijfers uit zodat de TA ze kan scannen. Dat heb je niet nodig
publicatie-grade `booktabs` op lab 1, maar vermijd verticale lijnsoep als je kunt.

## Referenties zonder workflow voor PhD-bibliografie

Voor drie citaten werkt een handmatige lijst:

```latex
\begin{thebibliography}{9}
\bibitem{textbook}
  Author, \emph{Title}, year.
\end{thebibliography}
```

Exporteer voor meer informatie een `.bib` van Google Scholar of Zotero en maak de sleutels op die manier schoon
ze zijn kort en leesbaar. Broken citeert afgedrukt als `[?]`:
[mysterieuze citatietekens opruimen](/learn/citation-quest-mark/).

Citeer de labhandleiding en het leerboek zoals de cursus dat vraagt (IEEE, APA-achtig, of
een eenvoudige genummerde lijst). Het matchen van de rubriek klopt met het matchen van een dagboek.

## Veel voorkomende beginnersfouten

- `\usepackage{graphicx}` vergeten vóór `\includegraphics`
- Speciale tekens zoals `%` en `_` in tekst zonder escapecodes
- Niet-overeenkomende `$` wiskundige scheidingstekens
- Bestandsnamen met spaties (`mijn plot.pdf`) die de break bevatten
- Een andere map bewerken dan degene die u compileert

Vertraag, repareer de eerste logregel, compileer opnieuw.

## Lever de pdf in, bewaar de bron

Dien in waar het LMS om vraagt ​​(meestal pdf). Bewaar de `.tex` en cijfers in a
map die je nog hebt nadat de cursus is afgelopen. In de toekomst zul je het skelet opnieuw gebruiken
voor het volgende rapport. Als je redacteur de Git-geschiedenis automatisch bijhoudt, zelfs
beter: je kunt een versie herstellen van voordat je de juiste vergelijking verwijderde.

## Een eerste sessie van 90 minuten

Als je vanavond begint:

1. Open een sjabloon of plak het skelet erboven.
2. Vul titel, naam en sectiekoppen uit de rubriek in.
3. Voeg een vergelijking toe waarvan je al weet dat deze juist is.
4. Exporteer één perceel; neem het op; ondertitel het; citeer het in Resultaten.
5. Voeg twee referenties toe zoals de cursus vraagt.
6. Compileer totdat de PDF op een rapport lijkt en niet op een leeg artikel.

Stop wanneer de rubriek bedekt is. Blijf niet overnachten op pakketopties.

## Als er iets kapot gaat

Lees alleen de eerste fout. Veelvoorkomende oplossingen: ontbrekende `$`, ontbrekend pakket voor
afbeeldingen, verkeerde bestandsnaam, extra `}`. Bewaar eerder een kopie van een compileerversie
grote bewerkingen zodat je terug kunt lopen. Als de inleiding van een klasgenoot werkt voor de cursus,
leen de minimale pakketten die ze gebruikten, niet de hele stapel scripties.

## Hoe succes eruit ziet

De pdf wordt geopend, de marges zien er redelijk uit, cijfers hebben bijschriften en vergelijkingen zijn dat ook
leesbaar en de rubriekitems hebben een duidelijke kop. Dat is genoeg voor een primeur
LaTeX-laboratoriumrapport. Perfectie in typografie kan wachten op een papier dat echt nodig is
het.