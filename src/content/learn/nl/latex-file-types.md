---

title: "De bestanden in een echt project"
description: ".tex, .bib, .cls, .sty en de gegenereerde rommel die u niet moet vastleggen."
category: "open-the-loop"
order: 4
level: "beginner"
tags: ["basics", "files"]
featured: false
updated: 2026-07-25
---

# De bestanden in een echt project

Open de map van een echt LaTeX-project na het compileren en je zult veel meer bestanden vinden dan je hebt geschreven. Dit verrast de meeste beginners, en de angst om het verkeerde te verwijderen zorgt ervoor dat mappen voor altijd rommelig blijven. Het onderscheid dat dit duidelijk maakt: sommige bestanden zijn bronbestanden die u bewerkt, sommige zijn stijlen die door een sjabloon of pakket worden geleverd, en de rest is gegenereerde werkruimte die de compiler bij elke run opnieuw aanmaakt.

## De bestanden die je schrijft

Uw `.tex`-bestanden bevatten het eigenlijke document: de tekst, secties, cijfers en wiskunde. Een `.bib`-bestand is uw bibliografische database, één item per artikel of boek dat u zou kunnen citeren; u kunt het handmatig onderhouden of exporteren vanuit een referentiemanager zoals Zotero. Dit zijn de bestanden die de moeite waard zijn om een ​​back-up van te maken en om versiebeheer in te voeren, omdat al het andere daaruit opnieuw kan worden opgebouwd.

## De bestanden die een sjabloon u geeft

Een `.cls`-bestand definieert een documentklasse, het ding dat u een naam geeft in `\documentclass{...}`. Tijdschriften en conferenties verzenden hun eigen inzendingen, zodat elke inzending er identiek uitziet en u er bijna nooit één hoeft te bewerken. Een `.sty`-bestand is een pakket: herbruikbare macro's en instellingen geladen met `\usepackage`. U schrijft er zelf pas één als u aangepaste opdrachten in meerdere documenten wilt delen. Een `.bst`-bestand beschrijft een BibTeX-citatiestijl en wordt doorgaans ook gewoon door een locatie neergezet.

## De bestanden die de compiler maakt

Het `.aux`-bestand slaat kruisverwijzingen en citatiegegevens op tussen compileergangen; bewerk het nooit, en voel je vrij om het te verwijderen, aangezien de volgende compilatie het herschrijft. Het `.log`-bestand registreert alles wat de compiler heeft gedaan en is alleen de moeite waard om te openen als er iets misgaat. De `.pdf` is de uitvoer die u eigenlijk wilde.

| Extensie | Rol | Handmatig bewerken? |
| --- | --- | --- |
| `.tex` | Brondocumenten en hoofdstukken | Ja |
| `.slab` | Bibliografiedatabank | Ja (of export vanuit Zotero) |
| `.cls` | Documentklasse | Zelden leverancierssjablonen |
| `.sty` | Pakketten / stijlbestanden | Bij het schrijven van uw eigen macro's |
| `.bst` | BibTeX-stijl | Zelden |
| `.aux` | Kruisverwijzingsgegevens | **Nee:** gegenereerd |
| `.log` | Compilerlogboek | Lezen bij het debuggen |
| `.pdf` | Uitvoer | Bekijk / verzend |

## Projectindeling die schaalbaar is

```text
paper/
 main.tex
 chapters/
 figures/
 refs.bib
```

Eén `main.tex` op het hoogste niveau fungeert als toegangspunt, hoofdstukken staan ​​in hun eigen map en worden binnengehaald met `\input` of `\include`, afbeeldingen staan ​​in `figures/`, en de bibliografie blijft in één `refs.bib`. Deze lay-out blijft beheersbaar, of het project nu een paper van vier pagina's of een scriptie is. [Split chapter files](/learn/split-chapter-files/) laat zien hoe de stukken met elkaar verbonden zijn.

Als je Git gebruikt, voeg dan `*.aux`, `*.log` en de andere gegenereerde bestanden toe aan `.gitignore`, zodat je geschiedenis alleen de echte broncode bijhoudt. Oleafly-projecten zijn gewone mappen op schijf, dus dit advies is daar ongewijzigd van toepassing. De meest voorkomende fout is de omgekeerde: terwijl je op zoek bent naar een rare compileerfout, is het verwijderen van de `.aux`-bestanden vaak de oplossing, omdat een oud bestand uit een afgebroken run elke compile erna kan vergiftigen.