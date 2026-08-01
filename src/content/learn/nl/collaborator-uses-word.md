---

title: "Coauteurs die alleen Woord spreken"
description: "Behoud .tex als bron van waarheid terwijl u PDF of DOCX uitwisselt voor commentaar."
category: "local-studio"
order: 5
level: "intermediate"
tags: ["workflow", "word"]
featured: false
updated: 2026-07-25
---

# Coauteurs die alleen Woord spreken

Samenwerkingen met verschillende tools zijn gebruikelijk: u schrijft het artikel in LaTeX en een co-auteur, adviseur of klinische medewerker werkt alleen in Microsoft Word. Niets converteert perfect tussen de twee formaten. Spreek in een vroeg stadium af welk bestand het echte papier is en stel vervolgens een routine op om feedback over de kloof heen te brengen zonder werk te verliezen.

## Eén bron van waarheid

Bepaal vroeg dat de `.tex`-bestanden canoniek zijn en dat al het andere een afgeleide kopie is ter beoordeling. Op het moment dat er twee "huidige versies" in twee formaten bestaan, gaan iemands bewerkingen verloren, en het op het oog vergelijken van een Word-bestand met een LaTeX-bestand is ellendig werk. Volgens deze overeenkomst bestaat jouw taak uit zetwerk en integratie. De taak van uw coauteur bestaat uit inhoud en commentaar, geleverd in de tool die zij verkiezen.

## Kies de export op basis van het soort feedback

Voor leesvoer en commentaar op hoog niveau kunt u de samengestelde pdf versturen. Elke Word-gebruiker kan een PDF openen, en de annotatiehulpmiddelen in elke PDF-lezer dekken margenotities en markeringen af. Door die feedback handmatig toe te passen, behoudt u de volledige controle over de bron.

Wanneer de co-auteur herschrijvingen op zinsniveau moet voorstellen met bijgehouden wijzigingen, exporteert u een DOCX. Pandoc converteert LaTeX goed genoeg naar Word voor beoordelingsdoeleinden, en Oleafly heeft DOCX-export ingebouwd. Verwacht dat de conversie bij benadering zal zijn: vergelijkingen, kruisverwijzingen en plaatsing van figuren worden minder goed, en dat moet je van tevoren zeggen, zodat niemand lay-outproblemen meldt in een wegwerpkopie.

## De samenvoegsessie

Feedback in een `.docx` moet met de hand terug in de `.tex` komen. Beschouw dit als een geplande taak in plaats van als een voortdurend stroompje: verzamel de bijgehouden wijzigingen van de co-auteur, open het Word-bestand en de LaTeX-bron naast elkaar, en pas de geaccepteerde bewerkingen één voor één toe, terwijl je je aan Git vastlegt, zodat elke feedbackronde één commit is. Eén regel houdt dit werkbaar: elke beoordelingsronde begint met een nieuwe export van de huidige bron. Laat hetzelfde Word-bestand nooit meerdere rondes doorlopen, omdat het stilletjes het papier splitst.

## Wanneer het concept in Word begint

Soms draait het om: de co-auteur schrijft het eerste concept in Word en jij neemt het zetwerk over. Converteer het een keer, vroeg. Oleafly importeert `.docx` in een LaTeX-project, en pandoc doet hetzelfde op de opdrachtregel. Vanaf dat punt is de `.tex` canoniek en is de bovenstaande routine van toepassing. Voor de versiebeheer-backbone die dit allemaal herstelbaar maakt, zie [Zet het artikel op GitHub](/learn/sync-with-github/).