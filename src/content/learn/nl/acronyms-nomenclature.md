---

title: "Acroniemen en symboollijsten"
description: "woordenlijsten-extra schets, of een met de hand gemaakte lijst als dat voldoende is."
category: "long-form"
order: 4
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Acroniemen en symboollijsten

In lange documenten komen afkortingen voor en de conventies daaromheen zijn streng. Een acroniem wordt bij het eerste gebruik voluit gespeld en daarna afgekort, en een proefschrift heeft meestal een lijst met afkortingen in het voorwerk nodig. Dat met de hand volhouden mislukt op een voorspelbare manier. Je herschikt twee hoofdstukken, de eerste keer wordt verplaatst, en plotseling verschijnt 'ML' drie pagina's eerder dan 'machine learning (ML)'. Het pakket `glossaries-extra` houdt het eerste gebruik voor u bij.

## De geautomatiseerde route

```latex
\usepackage[acronym]{glossaries-extra}
\makeglossaries
\newacronym{ml}{ML}{machine learning}
```

De optie `acronym` maakt ondersteuning voor acroniemen mogelijk, en `\makeglossaries` schakelt de machine in die gegevens verzamelt tijdens het compileren. Elke `\newacronym` heeft drie argumenten nodig: een sleutel die u in de tekst typt, de korte vorm en de lange vorm. Definieer ze allemaal in de preambule of in een apart bestand dat je `\input` gebruikt, zodat ze op één plek staan.

In de hoofdtekst typ je nooit het acroniem zelf:

```latex
\gls{ml} on first use expands; later uses stay short.
\printglossaries
```

De eerste `\gls{ml}` in het document drukt "machine learning (ML)" af, en elke volgende drukt alleen "ML" af. Omdat het pakket het gebruik bijhoudt in plaats van de positie in de broncode, volgt de uitbreiding het eerste gebruik, waar uw herstructurering dit ook brengt. Met `\printglossaries` wordt de verzamelde lijst met afkortingen afgedrukt, waar u deze ook plaatst, meestal na de inhoudsopgave. Gerelateerde commando's behandelen de grammatica hieromheen: `\glspl` voor meervouden, `\Gls` voor het begin van de zin met een hoofdletter.

Het addertje onder het gras is de constructie. Tussen de LaTeX-passages door moet de `makeglossaries`-helper draaien om de vermeldingen te sorteren en op te maken, anders produceert `\printglossaries` stilzwijgend niets. Volledige latexmk-instellingen verwerken dit automatisch. Eenvoudigere pipelines zijn dat misschien niet, en glossaries-extra biedt hiervoor een terugvalmogelijkheid. Als uw lijst koppig weigert te verschijnen, is de ontbrekende helperrun de eerste verdachte, ruim vóór een fout in uw document.

## De handgebouwde route

Voor een eenvoudige lijst met symbolen is een handmatig onderhouden 'beschrijvingsomgeving' vaak voldoende:

```latex
\section*{Notation}
\begin{description}
 \item[$\eta$] learning rate
 \item[$\theta$] model parameters
\end{description}
```

Bij elk `\item[...]` wordt het haakjesargument afgedrukt als een vetgedrukt label met de daaropvolgende uitleg, die precies de vorm heeft van een notatielijst. Er is geen tracking bij het eerste gebruik, maar een symbolenlijst heeft dat zelden nodig; symbolen worden hoe dan ook gedefinieerd waar ze voor het eerst in de wiskunde voorkomen.

Het eerlijke advies is om het gereedschap aan te passen aan de schaal. Een papier met vijf acroniemen is gemakkelijker met de hand te beheren. Een proefschrift van 200 pagina's met veertig is dat niet, en daar betaalt het pakket de opstartkosten vele malen. De [lists les](/learn/lists/) behandelt de `description` omgeving in meer detail.