---

title: "Uw eerste arXiv-preprint plaatsen"
description: "Goedkeuring, categorieën, bronopschoning, licenties en de aankondigingscyclus."
category: "ship-your-paper"
order: 3
level: "intermediate"
tags: ["arxiv", "preprint", "publishing"]
featured: false
updated: 2026-07-25
---

# Je eerste arXiv-preprint plaatsen

Door te posten op arXiv wordt uw werk openbaar, citeerbaar en voorzien van een tijdstempel. Het proces heeft een paar eigenaardigheden die iedereen de eerste keer verrassen. Als je [wat arXiv is](/learn/what-is-arxiv/) niet hebt gelezen, begin daar dan en kom dan terug.

## Goedkeuring: de uitsmijter aan de deur

Gloednieuwe inzenders in de meeste categorieën hebben een goedkeuring nodig van een gevestigde arXiv-auteur. Als uw account een academisch e-mailadres gebruikt en u co-auteurs heeft met een arXiv-geschiedenis, gebeurt dit vaak automatisch of snel. Vraag het anders aan uw adviseur of een co-auteur; het systeem geeft u een goedkeuringscode om ze te verzenden. Zoek dit uit dagen voordat je van plan bent iets te posten, niet de avond ervoor.

## Kies je categorieën

arXiv is georganiseerd in gemodereerde categorieën zoals `cs.LG` (machine learning), `cs.CL` (computergebruik en taal), `math.OC` (optimalisatie), `stat.ML`. U kiest één primaire categorie en eventueel enkele secundaire categorieën. Zoek live op waar de kranten die u citeert, en volg ze. De primaire categorie bepaalt welke mailinglijst uw artikel aankondigt, en bepaalt dus wie uw artikel als eerste ziet.

## arXiv wil je bron, niet je pdf

Dit is de grote. Als uw artikel met LaTeX is geproduceerd, heeft arXiv de LaTeX-bron nodig, niet alleen een PDF. Hun AutoTeX-systeem compileert het op hun servers, en die build is wat lezers downloaden. Gevolgen:

- Elk bestand dat je paper nodig heeft, moet in de upload zitten: figuren, `.bbl`-bestand (arXiv voert BibTeX niet voor je uit, dus neem de gegenereerde `.bbl` op), stijlbestanden die niet standaard zijn.
- Als het niet compileert op hun systeem, repareer je het totdat het wel gebeurt.

## Maak eerst je bron schoon

Uw opmerkingen worden samen met uw bron verzonden en iedereen kan deze downloaden. De conceptnota met de tekst '% TODO: is deze bewering zelfs waar?' zal openbaar zijn. Voordat u uploadt:

- [ ] Verwijder opmerkingen. De tool `arxiv-latex-cleaner` automatiseert dit en verwijdert ook ongebruikte bestanden.
- [ ] Verwijder ongebruikte figuren en oude secties
- [ ] Controleer op gênante bestandsnamen (`final_v7_ACTUALLY_final.tex`)
- [ ] Compileer de opgeschoonde kopie één keer helemaal opnieuw

Werken vanuit een door Git ondersteund project helpt hierbij: in Oleafly kun je een controlepunt aftakken, de broncode opschonen en differentiëren met het origineel om te bevestigen dat er niets wezenlijks is veranderd voordat je de ZIP exporteert.

## Licenties

arXiv vraagt ​​u een licentie te kiezen. De minimale licentie voor alleen arXiv is de gebruikelijke standaard en houdt uw opties open met tijdschriften. CC BY is toleranter. Als het artikel naar een specifieke uitgever gaat, controleer dan hun preprint-beleid voordat u iets onherroepelijks kiest.

## De aankondigingscyclus en zijn folklore

arXiv kondigt nieuwe artikelen in batches aan, volgens een vast schema op weekdagen met een uiterste indiendatum. Artikelen die direct na de sluitingsdatum worden ingediend, verschijnen bovenaan de volgende lijst, en een kleine folklore-industrie beweert dat artikelen die bovenaan de lijst staan ​​meer aandacht krijgen. Misschien. Lig er niet wakker van; een goede samenvatting is veel belangrijker dan de lijstpositie.

## Versies: v1, v2 en na acceptatie

Je eerste bericht is v1, en het is permanent: je kunt versies toevoegen, maar ze nooit verwijderen. Plaats v2 als je echte verbeteringen hebt, meestal de geaccepteerde versie na [peer review](/learn/peer-review-explained/). Na acceptatie update je de arXiv-kopie met de cameraklare inhoud (met inachtneming van het beleid van de uitgever) en voeg je de DOI of locatie toe in het tijdschriftreferentieveld. De lezers zullen u er dankbaar voor zijn.