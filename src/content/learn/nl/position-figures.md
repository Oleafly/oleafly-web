---

title: "Waar drijvers daadwerkelijk landen"
description: "htbp, waarom geforceerd hier vaak mislukt, waardoor de omgeving dichter bij de tekst komt."
category: "floats-and-ink"
order: 3
level: "intermediate"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Waar drijvers daadwerkelijk landen

Figuren en tabellen in LaTeX zijn floats, wat betekent dat de positie van de code in uw broncode een suggestie is en geen instructie. LaTeX-bewegingen zweven rond om pagina's gelijkmatig gevuld te houden, om halflege pagina's te vermijden en om typografische limieten te respecteren, zoals hoeveel van een pagina uit afbeeldingen mag bestaan. Dit is de grootste cultuurschok die een tekstverwerker kan veroorzaken, en als je het plaatsingssysteem begrijpt, kun je er urenlang tegen vechten.

## Wat htbp betekent

Elke float-omgeving gebruikt een optionele argumentlijst waar LaTeX deze mag plaatsen:

```latex
\begin{figure}[htbp] % here, top, bottom, page of floats
```

Elke letter is een toestemming. `h` staat de float "hier" toe, op het punt in de tekst waar de code verschijnt. Met `t` is de bovenkant van een pagina toegestaan, met `b` is de onderkant van een pagina toegestaan, en met `p` is een speciale zwevende pagina toegestaan ​​die alleen figuren en tabellen bevat. LaTeX evalueert ze grofweg in die volgorde voor elke pagina die het bouwt, waarbij de eerste plaatsing wordt genomen die voldoet aan de interne regels over spatiëring en paginabalans. De letters geven opties in plaats van gerangschikte wensen uit te drukken, dus het opsommen van alle vier geeft LaTeX de meeste ruimte om de praalwagen ergens dichtbij en verstandig te plaatsen. Als je het argument helemaal weglaat, is de standaardwaarde `[tbp]`, zonder `h`, wat de reden is dat een kaal cijfer zo vaak naar de bovenkant van de volgende pagina springt.

## Waarom 'hier' forceren averechts werkt

Alleen al het schrijven van `[h]` lijkt de voor de hand liggende oplossing, maar het maakt de zaken meestal alleen maar erger. Als de float niet in de resterende ruimte op de huidige pagina past, en `h` de enige toestemming is die u hebt verleend, kan LaTeX deze niet op deze pagina plaatsen of legaal op een andere pagina plaatsen. Dus voert het de vlotter naar voren, pagina na pagina, wachtend op een plek die voldoet aan `h`. Drijvers moeten ook op volgorde blijven, zodat elk later figuur in de rij staat achter het vastzittende figuur, en de hele stapel dumpt vaak aan het einde van het hoofdstuk. Door een uitroepteken toe te voegen, zoals in `[h!]`, vertelt LaTeX dat het enkele van zijn spatiëringsregels moet versoepelen, maar het kan geen ruimte creëren die niet bestaat.

## De gewoonten die echt werken

Ten eerste moet je `[htbp]` als je standaard behouden en de pixel-perfecte plaatsing loslaten tijdens het opstellen, omdat elke paragraaf die je toevoegt of verwijdert de pagina's toch opnieuw in de juiste volgorde zet. Ten tweede plaats je de figuuromgeving in de broncode naast de paragraaf die er het eerst naar verwijst, omdat LaTeX vanaf dat punt begint te zoeken naar een thuis en een float later maar nooit eerder kan bewegen dan zijn code. Ten derde, schrijf je proza ​​op nummer naar referentiecijfers, zoals in "Figuur 3 toont de pijplijn", nooit "het onderstaande figuur", zodat de tekst correct blijft waar de vlotter landt.

Als een vlotter toch ergens onaanvaardbaar terechtkomt, zijn er sterkere hulpmiddelen, waaronder vlotterbarrières en de `[H]`-plaatsing, behandeld in [de figuur die de sectie ontvlucht] (/learn/figur-wrong-position/). Pak ze aan het einde van het schrijven, zodra de tekst stabiel is, en niet tijdens het opstellen.