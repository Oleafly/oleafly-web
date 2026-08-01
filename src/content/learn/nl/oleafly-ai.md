---

title: "Assistent binnen Oleafly"
description: "Uw API-sleutel, projectcontext, diffs, compileerbewuste bewerkingen."
category: "human-plus-model"
order: 5
level: "beginner"
tags: ["ai", "oleafly"]
featured: true
updated: 2026-07-25
---

# Assistent binnen Oleafly

Oleafly bevat een AI-assistent die binnen uw project werkt in plaats van in een apart chatvenster. In tegenstelling tot het plakken van LaTeX in een algemene chatbot, draait het op uw eigen API-sleutel, kan het het project lezen dat het bewerkt en toont het elke voorgestelde wijziging ter goedkeuring voordat het uw bestanden aanraakt.

## Jouw sleutel, jouw provider

De assistent voert geen modeloproepen uit via de servers van Oleafly. U levert een API-sleutel op voor een van de negen ondersteunde gehoste providers, of u verwijst de app naar een lokale Ollama-installatie en gebruikt een model dat op uw eigen hardware draait. Verzoeken gaan van uw machine naar de provider die u heeft geconfigureerd, onder de voorwaarden van die provider, en u betaalt de provider rechtstreeks tegen hun tarieven. Welk model je moet kiezen en hoe je een sleutel of Ollama instelt, wordt besproken in [AI setup](/docs/ai-setup/).

## Wat de assistent kan zien

Wanneer u een vraag stelt of een bewerking aanvraagt, werkt de assistent vanaf een kaart van uw project en leest de bestanden die relevant zijn voor het verzoek, zoals het hoofdstuk dat u aan het bewerken bent, de preambule die uw macro's definieert, of het `.bib`-bestand achter een citatievraag. Die context is de reden waarom het kan antwoorden "waarom zweeft Figuur 3 naar de volgende pagina" over uw werkelijke Figuur 3, en waarom de bewerkingen ervan de neiging hebben overeen te komen met de notatie en opdrachten die uw document al gebruikt.

## Bewerkingen die u beoordeelt, geen bewerkingen die zomaar plaatsvinden

De assistent schrijft nooit rechtstreeks in uw bestanden. Het stelt wijzigingen voor als een diff, met verwijderde regels in rood en toegevoegde regels in groen, en je accepteert of wijst ze allemaal af. Voordat een geaccepteerde wijziging wordt toegepast, registreert Oleafly een Git-controlepunt, zodat de status vóór de bewerking altijd één stap verwijderd is in [Git-geschiedenis](/docs/git-history/). Het verwijderen van een bestand wordt afzonderlijk behandeld en vereist altijd uw expliciete bevestiging, wat de assistent verder ook doet.

## De lus sluiten met de compiler

Omdat de assistent naast de bouw woont, kan hij zijn eigen werk controleren. Na een bewerking kan het een compilatie activeren, het logboek lezen en als de wijziging bedoeld was om een ​​fout te herstellen, controleren of die fout verdwenen is. Het kan ook de tekst van de gecompileerde PDF lezen, zodat het kan bevestigen dat een gevraagde wijziging daadwerkelijk in de uitvoer verschijnt. Modellen produceren nog steeds verkeerde LaTeX, dus lees wat u accepteert. Het voordeel is dat gebroken suggesties de neiging hebben om binnen de cirkel te worden opgemerkt en gecorrigeerd, in plaats van later door jou.

De dagelijkse werking is terug te vinden in de documenten voor [chat](/docs/ai-chat/) en [inline edit](/docs/ai-inline-edit/), en [Een week schrijven in Oleafly](/learn/oleafly-workflow/) laat zien waar de assistent in een volledige schrijfloop past.