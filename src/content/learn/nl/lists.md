---

title: "Opsommingstekens, cijfers en definitielijsten"
description: "specificeren, opsommen, beschrijven, nesten en aangepaste itemlabels."
category: "type-and-shape"
order: 4
level: "beginner"
tags: ["formatting", "lists"]
featured: false
updated: 2026-07-25
---

# Opsommingstekens, cijfers en definitielijsten

Lijsten in LaTeX zijn omgevingen: je opent er een met `\begin{...}`, sluit deze met `\end{...}`, en markeert elk item met `\item`. LaTeX regelt vervolgens de nummering, de opsommingstekens, de inspringing en de afstand voor u. Dat laatste deel is het punt. Je nummert nooit iets met de hand, en als je de derde vermelding van een genummerde lijst verwijdert, worden de vermeldingen vier tot en met tien stilzwijgend drie tot en met negen.

## De drie lijstomgevingen

```latex
\begin{itemize}
 \item Bullet
\end{itemize}

\begin{enumerate}
 \item Numbered
\end{enumerate}

\begin{description}
 \item[Term] Definition style
\end{description}
```

`itemize` produceert een ongeordende lijst met opsommingstekens en is de juiste keuze als de items geen volgorde hebben, zoals een lijst met aannames. 'opsommen' nummert elke invoer automatisch, wat u wilt voor stappen die in de juiste volgorde plaatsvinden of voor items waarnaar u van plan bent terug te verwijzen. Je kunt zelfs een `\label` na een `\item` in een opsomming plaatsen en later naar het nummer ervan verwijzen met `\ref`, net zoals je met een sectie zou doen.

`beschrijving` is de minst bekende van de drie, maar zeer nuttig. Elk `\item` heeft een optioneel argument tussen vierkante haakjes, en dat argument wordt vet gedrukt als label met de definitietekst erachter. Het is de natuurlijke omgeving voor woordenlijsten, notatielijsten of welke "term: uitleg"-structuur dan ook.

## Nesten

Nest-omgevingen voor lijsten met meerdere niveaus. Plaats een compleet `\begin{itemize} ... \end{itemize}` blok in een `\item` van een buitenste lijst en LaTeX springt het in en schakelt automatisch over naar het opsommingsteken. Hetzelfde werkt voor 'enumerate', waarbij nesten de nummeringsstijl op elk niveau verandert: eerst Arabische cijfers, dan letters en dan Romeinse cijfers. LaTeX ondersteunt vier nestingniveaus, wat meer is dan enig leesbaar document nodig heeft. Als je merkt dat je drie niveaus diep bent, wil het materiaal waarschijnlijk proza ​​of een tafel zijn.

## Aangepaste labels

Elk afzonderlijk item kan zijn eigen markering overschrijven met het optionele argument: `\item[(a)]` print "(a)" in plaats van het opsommingsteken of nummer. Dit is handig voor eenmalige gevallen, maar als je een hele lijst opnieuw wilt opmaken, verslaat het handmatig wijzigen van elk item de automatisering. Laad daarvoor het pakket `enumitem`, waarmee je dingen als `\begin{enumerate}[label=(\alph*)]` kunt schrijven om de hele lijst op één plek opnieuw te labelen, en het geeft je ook opties om de verticale afstand kleiner te maken.

Een veelgemaakte beginnersfout is het achterlaten van een lege regel tussen de items in `\item`, in de hoop deze te spreiden. De lege regel in een lijst is onschadelijk, maar doet visueel niets. De spatiëring wordt bepaald door de lijstomgeving zelf of door de `enumitem`-opties. Nog eentje: elke lijstomgeving moet minstens één `\item` vóór elke tekst bevatten, anders krijg je de verwarrende foutmelding "Er is iets mis - misschien ontbreekt er een \item". Je kunt met alle drie de omgevingen experimenteren in de [live speeltuin](/live/).