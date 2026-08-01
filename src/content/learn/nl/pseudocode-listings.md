---

title: "Algoritmen en bronvermeldingen"
description: "algoritme2e schets en lijsten voor echte code."
category: "field-kits"
order: 3
level: "intermediate"
tags: ["code"]
featured: false
updated: 2026-07-25
---

# Algoritmen en bronvermeldingen

Papers presenteren code in twee verschillende vormen, en LaTeX heeft voor elke vorm een ​​aparte tool. Pseudocode is een geïdealiseerde schets van een algoritme, gezet met trefwoorden en wiskunde, en het pakket `algorithm2e` verwerkt dit. Bronvermeldingen bestaan ​​uit echte code die woordelijk wordt gereproduceerd in een monospaced lettertype, en het pakket `listings` verwerkt deze. Het kiezen van het verkeerde gereedschap is de gebruikelijke bron van wrijving, dus het helpt om beide te zien.

## Pseudocode met algoritme2e

```latex
\usepackage[ruled,vlined]{algorithm2e}
\begin{algorithm}
\caption{Train}
\While{not converged}{
 Update $\theta$\;
}
\end{algorithm}
```

De pakketopties bepalen de visuele stijl: `ruled` tekent horizontale regels boven en onder het algoritme en plaatst het bijschrift bovenaan, de conventie die de meeste locaties verwachten, terwijl `vlined` een kleine verticale lijn tekent die de omvang van elk blok markeert, zodat het nesten leesbaar blijft zonder zware inspringingen. De 'algoritme'-omgeving is een float, net als een figuur, en bevat daarom het '\caption' dat het een getal geeft dat '\ref' kan citeren.

Binnenin typt `\While{condition}{body}` de lus met een vetgedrukt trefwoord, de voorwaarde en de hoofdtekst als een ingesprongen blok. `\For`, `\If` en `\Return` volgen hetzelfde patroon. Verklaringen eindigen met `\;`, waarmee de terminator van de regel wordt afgedrukt en een nieuwe regel wordt gestart. Het vergeten ervan is de klassieke beginnersfout: de lijnen lopen door elkaar. Omdat dit gewone LaTeX is, werkt wiskunde zoals `$\theta$` inline, en dat is waar pseudocode voor is: het beschrijven van de updateregel in notatie in plaats van in een bepaalde taal.

## Echte code met vermeldingen

```latex
\usepackage{listings}
\begin{lstlisting}[language=Python]
def f(x):
 return x**2
\end{lstlisting}
```

De `lstlisting`-omgeving reproduceert de inhoud exact, waarbij de witruimte behouden blijft en speciale tekens letterlijk worden behandeld, zodat u code kunt plakken zonder iets te hoeven ontsnappen. De optie `taal=Python` schakelt trefwoordaccentuering voor die taal in, en `listings` kent tientallen andere talen. Standaard is de uitvoer gewoon. De meeste mensen voegen eenmalig `\lstset{basicstyle=\ttfamily\small, getallen=left}` toe aan de preambule om een ​​monospaced lettertype te krijgen met een redelijke grootte en regelnummers. Om een ​​bestand direct op te nemen in plaats van te plakken, leest `\lstinputlisting[taal=Python]{train.py}` het van schijf, waardoor het papier gesynchroniseerd blijft met de daadwerkelijke bron. Als je gekleurde, hifi-accentuering wilt, is het 'minted'-pakket het sterkere alternatief, ten koste van de noodzaak van een extern gereedschap en ontsnapping uit de schaal.

## Kiezen tussen hen

Gebruik pseudocode in de papieren hoofdtekst om het idee over te brengen, en reserveer woordelijke vermeldingen voor artefacten waarbij de exacte code van belang is, zoals bijlagen of gereedschapsbeschrijvingen. Een veelgemaakte fout is het plaatsen van een `lstlisting` in een Beamer-frame zonder de optie `[fragile]`, wat mislukt met een ondoorzichtige fout; dezelfde waarschuwing verschijnt in [een eerste Beamer-deck] (/learn/beamer-basics/).