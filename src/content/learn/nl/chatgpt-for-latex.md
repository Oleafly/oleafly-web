---

title: "Promptmodellen voor het compileren van TeX"
description: "Stuur de preambule, eis een diff, compileer altijd het antwoord."
category: "human-plus-model"
order: 1
level: "beginner"
tags: ["ai"]
featured: true
updated: 2026-07-25
---

# Promptmodellen voor het compileren van TeX

Vraag een chatmodel voor LaTeX en je krijgt meestal code die er goed uitziet en niet in je document kan worden gecompileerd. Het model weet niet welke klasse u gebruikt, welke pakketten u laadt of welke macro's u hebt gedefinieerd, dus het antwoordt op een algemeen document dat niet van u is. De uitvoer sterft vervolgens af met ontbrekende pakketten of botsende definities op het moment dat u deze erin plakt. Het meeste daarvan is te vermijden met drie aansporingsgewoonten, plus één harde regel: compileren voordat u het vertrouwt.

## Verzend de preambule

Uw inleiding is de context die het model mist. Plak het, of op zijn minst de regel `\documentclass` en de lijst `\usepackage`, en vraag om "een fragment dat onder deze preambule compileert". Deze ene gewoonte blokkeert de meest voorkomende mislukking: het antwoord hangt stilletjes af van `tikz`, `siunitx` of een ander pakket dat je nooit hebt geladen. Het stuurt het model ook in de richting van de opdrachten die uw opstelling feitelijk biedt. Als uw project macro's definieert, neem deze dan ook op, om de redenen die worden beschreven in [Geef het model uw symbooltabel](/learn/ai-follow-notation/).

## Vraag waar het antwoord van afhangt

Voeg een permanent verzoek toe: "Als uw code een pakket nodig heeft dat ik niet heb geladen, vermeld dit dan expliciet bovenaan uw antwoord." Zo worden verborgen afhankelijkheden omgezet in een zichtbare checklist. Wanneer het antwoord een pakket een naam geeft, beslist u of u het wilt toevoegen, in plaats van dat u de afhankelijkheid ontdekt als een 'Ongedefinieerde controlereeks'-fout die drie keer later wordt gecompileerd. Die fout en de diagnose ervan worden behandeld in [Undefined control sequence](/learn/undefined-control-sequence/).

## Vraag om een ​​diff, niet om een ​​herschrijving

Wanneer u een wijziging in bestaande tekst wilt, plakt u het kleinste relevante fragment en vraagt ​​u het model alleen te wijzigen wat voor het verzoek vereist is, waarbij u aangeeft wat er is gewijzigd. Gegeven een heel bestand kunnen modellen vrijelijk herschrijven: ze herformatteren onaangeroerde alinea's, herschikken de preambuleregels en laten af ​​en toe iets op de grond vallen. De echte verandering verdwijnt in de churn. Een minimale, beschreven bewerking is er een die u daadwerkelijk kunt beoordelen. Binnen Oleafly versterkt de assistent deze vorm voor je door elke bewerking voor te stellen als een rood/groen verschil dat je regel voor regel goedkeurt, zoals beschreven in [Assistent binnen Oleafly](/learn/oleafly-ai/).

## Compileer voordat je vertrouwt

Verzend nooit LaTeX die u niet hebt gecompileerd, hoe plausibel het ook klinkt. Plak de suggestie in uw document, compileer en lees de eerste fout als die er is. Het terugsturen van die foutmelding naar het model, samen met het betreffende fragment, levert meestal een werkende tweede poging op. Bewaar het project onder Git, zodat elke door het model ondersteunde wijziging in één commando kan worden teruggedraaid, een opzet die wordt behandeld in [Zet het artikel op GitHub](/learn/sync-with-github/). Het model stelt voor; de compiler beschikt.