---

title: "Ongedefinieerde besturingsvolgorde"
description: "Onbekende opdrachtnamen: typefouten, ontbrekende pakketten, verkeerde engine."
category: "log-literacy"
order: 1
level: "beginner"
tags: ["errors"]
featured: true
updated: 2026-07-25
---

# Ongedefinieerde besturingssequentie

## Het symptoom

Compilatie stopt met `! Ongedefinieerde controlevolgorde.' Het log toont vervolgens de regel waar het gebeurde, in tweeën gebroken: alles wat TeX had gelezen tot en met het overtredende commando op één regel, en de rest van de bronregel daaronder. Het laatste token op die bovenste regel is het commando dat TeX niet heeft herkend, waardoor dit een van de gemakkelijkere fouten is om precies te lokaliseren.

## Waarom het gebeurt

Een controlereeks is alles dat begint met een backslash. TeX heeft geen vast vocabulaire: commando's bestaan ​​alleen omdat de kernel, de documentklasse, een pakket of je eigen `\newcommand` ze hebben gedefinieerd. Wanneer TeX een backslash leest, gevolgd door een naam die door niets is gedefinieerd, kan het niet raden wat je bedoelde en stopt het. De fout gaat nooit over het feit dat de opdracht in het algemeen "fout" is. Het gaat erom dat die naam onbekend is in dit document, op dit moment, onder deze engine.

## Repareer het in drie controles

Controleer eerst de spelling. `\texbf` in plaats van `\textbf`, `\lable` in plaats van `\label`, of in de meeste gevallen een verdwaalde spatie die een naam in twee accounts afbreekt. Het regelnummer van het logboek brengt u rechtstreeks naar de typefout.

Als de spelling juist is, ontbreekt het definiërende pakket waarschijnlijk. `\includegraphics` doet niets zonder `\usepackage{graphicx}`, `\toprule` heeft `booktabs` nodig, en `\SI` heeft `siunitx` nodig. Dit is het moeilijkst als je een fragment uit een ander document of uit het antwoord van een model kopieert: de hoofdtekst kwam mee, de preambule niet. Zoek welk pakket een commando definieert in [Elke opdracht uitgelegd](/learn/every-command-explained/), voeg de regel `\usepackage` toe en compileer opnieuw. Als het pakket zelf niet is geïnstalleerd, raadpleegt u [Een ontbrekend pakket installeren](/learn/install-missing-package/).

Als het pakket is geladen en de fout blijft bestaan, vermoed dan dat het om de engine gaat. Sommige commando's bestaan ​​alleen onder een bepaalde engine: `\fontspec` en zijn verwanten vereisen XeLaTeX of LuaLaTeX en zullen onder pdfLaTeX met precies deze fout verdwijnen. Sjablonen die een engine in hun documentatie specificeren, doen dit meestal om deze reden. [Welke engine voor dit project](/learn/engines-compared/) legt de verschillen uit.

## Twee eigenaardigheden die de moeite waard zijn om te weten

De volgorde is belangrijk: een commando dat wordt gebruikt vóór de regel `\usepackage` die het definieert, is op dat moment nog steeds niet gedefinieerd, dus houd het laden van het pakket in de preambule, boven `\begin{document}`. En de ene fout verbergt vaak de andere, want nadat TeX is hersteld, kan het alles wat volgt verkeerd lezen. Corrigeer de eerste ongedefinieerde controlereeks in het logboek, compileer opnieuw en kijk dan pas wat er overblijft.