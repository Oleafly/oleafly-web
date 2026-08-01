---

title: "Natuurkundescripties: vergelijkingen, eenheden en gezond verstand met meerdere bestanden"
description: "Notatie, siunitx, projecten met meerdere hoofdstukken, dagboekvallen met twee kolommen en offline compileergewoonten voor natuurkunde- en astronomiestudenten."
date: 2026-06-20
tags: [physics, thesis, math]
---

Natuurkundemanuscripten bevatten meer wiskunde per pagina dan de meeste velden. Dat is prima
totdat een half afgemaakt hoofdstuk de hele compilatie verbreekt omdat één label is verplaatst,
of totdat elke co-auteur een andere vetgedrukte vectorconventie bedenkt.

Dit is een praktische opzet voor MSc/PhD-hoofdstukken, samenwerkingsnotities en dagboeken
inzendingen die nog steeds twee kolommen willen.

## Vanaf het begin meerdere bestanden

Zelfs een korte scriptie heeft baat bij een hoofdbestand en hoofdstuk:

```latex
\documentclass{report} % or the university class
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

Gebruik `\includeonly{chapters/methods}` terwijl u tekent, zodat u niet opnieuw aan het herbouwen bent
drie hoofdstukken om één vergelijking op te lossen. Details:
[één hoofdbestand, veel hoofdstukken](/learn/split-chapter-files/).

Bewaar figuren onder `figures/ch2/` en geef vergelijkingen een naam met hoofdstukbewuste labels
(`eq:ch2-hamiltonian`) zodat samenvoegingen niet botsen.

## Eenheden zijn geen tekst

Schrijf `$v = 3.0\,\mathrm{m\,s^{-1}}$` met de hand als dat nodig is, of laad `siunitx`
en gebruik `\qty{3.0}{m.s^{-1}}`. Tijdschriften verschillen qua afstand en dunne ruimtes; kies
één pakketpad en houd u eraan. Gemengde stijlen zien eruit als twee auteurs die nooit
ontmoet.

Voor waardentabellen worden de decimalen uitgelijnd en de eenheid behouden
kopteksten consistent. Meng `m/s` en `ms^{-1}` niet in hetzelfde papier zonder a
reden vermeld in methoden.

## Dirac, vectoren en vetgedrukte conventies

Kwantumgroepen en groepen met gecondenseerde materie hebben vaak Dirac-notatie nodig. Pakketten zoals
`natuurkunde` of speciale macro's voor `\ket`, `\bra`, `\braket` verslaan ad-hoc
combinaties van hoeken. Klassieke mechanica-groepen debatteren over vet versus pijl
vectoren. Documenteer de conventie in de preambule en weiger ad-hocuitzonderingen
midden hoofdstuk.

Zie [Dirac-notatie](/learn/physics-braket/) en [bold math](/learn/bold-math/).

Definieer operatoren één keer (`\DeclareMathOperator`), zodat operatoren en worden onderscheiden
benoemde functies drijven niet in het lettertype.

## Nummering en kruisverwijzingen

Getalvergelijkingen die u zult citeren; laat de rest ongenummerd. Een pagina van
`(1)(2)(3)...` is moeilijker te lezen dan een kort verhaal met twee getagde regels.
Gebruik `\eqref` voor vergelijkingen en stabiele labels. Projectbrede referentiecontrole
vangt een verwijderd label op voordat de adviseur dat doet.

Stellingen en lemma's (als u ze gebruikt) moeten een duidelijk nummeringsschema hebben
de rest van het afdelingssjabloon. Zie ook
[stellingen en bewijzen](/learn/stellingen-bewijzen/).

## Journaaltraps met twee kolommen

APS, IOP en soortgelijke klassen veranderen het float-gedrag. Een figuur die er goed uitzag
in 'artikel' kan weigeren naast de paragraaf te gaan zitten waarin het wordt geciteerd. Compileren
vroeg tegen de echte klasse, niet het weekend vóór de indiening.

Standaardinstellingen die helpen:

- figuurbreedte ongeveer `0,45\textwidth` of `\columnwidth` in twee kolommen
- brede cijfers als `figuur*` (vaak alleen bovenaan de pagina)
- lange afleidingen in `multiline` / `split`, of verplaatst naar een bijlage

Verklein het lettertype van de vergelijking niet totdat het onleesbaar is. Recensenten merken het op.

## Figuren: plots en schema's

Exporteer plots als PDF vanuit matplotlib/gnuplot/Root wanneer je kunt. Raster PNG's zijn dat wel
voor foto's en detectorafbeeldingen, bij voldoende dpi. Schema's kunnen TikZ of
externe vectorkunst; bewaar de bron in de repository. Snijd de witruimte eerder bij
`\inclusiefafbeeldingen`.

## Offline wanneer het laboratoriumnetwerk uitvalt

Beamlines en cleanrooms staan ​​niet bekend om hun stabiele wifi.
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) verzendt de
compilers en houdt SyncTeX, de PDF-werkruimte en het wiskundevoorbeeld lokaal. Elke
project is een echte Git met automatische controlepunten, dus een slechte vergelijkingsbewerking is er één
weg herstellen. De PDF wordt nog steeds opgebouwd als een browsereditor niet wordt geladen.

Je kunt een vergelijkbare offline stapel samenstellen met TeX Live, een PDF-viewer en Git by
hand. Hoe dan ook, het proefschrift mag niet afhankelijk zijn van een captive portal om opnieuw te compileren
hoofdstuk drie.

## Samenwerking

Eigen hoofdstukken op auteur indien mogelijk. Deel een notatieblad. Volledig document uitvoeren
wordt wekelijks gecompileerd, zodat verwijzingen tussen hoofdstukken vroegtijdig mislukken. Privé Git-afstandsbediening voor
ongepubliceerde resultaten; alleen openbaar als het samenwerkingsbeleid dit toestaat.

## Bijlagen en aanvullend materiaal

Lange afleidingen en extra plots horen thuis in een bijlage of een aparte bijlage
PDF als het tijdschrift uit twee kolommen bestaat en slechts pagina's bevat. Verwijzing expliciet
("zie bijlage B") met echte labels. Ga er niet van uit dat de scheidsrechter een ritssluiting zal openen
van losse figuren zonder bijschriften.

## Wanneer de adviseur op papier redigeert

Pas indien mogelijk dezelfde dag markup toe op de TeX-bron. Papierstapels worden oud.
Als twee adviseurs een tegenstrijdige notatie markeren, werk dan het preambuleblad bij en stuur een bericht
PDF-notatie van één pagina, zodat het argument niet bij elk concept opnieuw wordt betwist.

## Voorinzending

Notatieblad compleet, vectoren en bh's/kets consistent, eenheden via één systeem
(`siunitx` of een overeengekomen handmatige stijl). Hoofdstukken moeten netjes worden opgenomen met
`\ref`/`\eqref` oplossen. Stel de echte dagboek- of scriptieklas samen zonder lettertype
verrassingen. Figuren voldoen aan dpi- en kleurregels; onderschriften staan ​​op zichzelf. Archief
broncode en PDF met een commit-hash voor de ingediende versie.

Natuurkunde schrijven is al moeilijk genoeg. De gereedschapsketen moet saai blijven.