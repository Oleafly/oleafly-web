---

title: "Een week schrijven in Oleafly"
description: "Bibliotheek, sjablonen, compileren, SyncTeX, citaten, Git-geschiedenis, optionele AI."
category: "local-studio"
order: 6
level: "beginner"
tags: ["oleafly", "workflow"]
featured: true
updated: 2026-07-25
---

# Een week schrijven in Oleafly

Zo ziet een paper er in werkelijkheid van dag tot dag uit in Oleafly, van een leeg project tot een concept dat je naar een co-auteur kunt sturen. De app heeft geen account en geen server nodig: een project is een map met `.tex`-, `.bib`- en figuurbestanden op uw schijf, en alles daaronder werkt in die map.

## Dag één: begin met een sjabloon

Maak een project in de bibliotheek, blanco of vanuit een [template](/templates/) voor gangbare formaten zoals IEEE- en ACM-papers of een scriptieskelet. Een sjabloon geeft u onmiddellijk een compilatiedocument, waarbij de klassenopties en de preambule al verstandig zijn, wat beter is dan het regel voor regel samenstellen van een preambule op de eerste dag. Druk één keer op compileren om te bevestigen dat u een PDF ontvangt voordat u iets schrijft.

## Midweek: de schrijf-compileerlus

Het grootste deel van de week is er sprake van een lus tussen de editor en het PDF-venster. De editor vult commando's, omgevingen en de labels en citatiesleutels die in uw project voorkomen automatisch aan, en slash-commando's voegen grotere structuren in, zoals figuren en tabellen, zonder dat u hun standaardtekst onthoudt. Compileer vaak, want een nieuwe fout in een tekst die je twee minuten geleden hebt geschreven, is gemakkelijk te plaatsen, terwijl een fout die na een middagje wijzigingen opduikt dat niet is. SyncTeX verbindt de twee vensters met elkaar: klik op een alinea in de PDF om naar de bronregel te springen, of spring van bron naar PDF, wat het belangrijkst is bij het herzien van specifieke pagina's van een lang document.

## Citaties terwijl je bezig bent

Bewaar een `.bib`-bestand in het project en citeer met `\cite{...}` terwijl u schrijft, waarbij automatisch aanvullen de sleutels levert. Het toevoegen van referenties tijdens het schrijven is goedkoop. Het reconstrueren van drie weken van tijdelijke aanduidingen voor 'citaat nodig' is dat niet. Als invoer afkomstig is van Zotero of de export van een uitgever, vangt de [BibTeX validator](/tools/bibtex-validator/) ontbrekende velden op voordat ze als vreemd uitziende verwijzingen naar boven komen. De volledige pijplijn wordt beschreven in [From .bib key to in-text cite](/learn/add-citations/).

## Geschiedenis zonder ceremonie

Oleafly kan na elke succesvolle compilatie automatisch een Git-commit opnemen, zodat de week een tijdlijn met werkstatussen achterlaat die je kunt inspecteren of waarnaar je kunt terugrollen. Wanneer het concept de moeite waard is om te delen, pusht u de map naar een privé GitHub-repository; [Plaats het papier op GitHub](/learn/sync-with-github/) toont de installatie.

## Optioneel: de assistent

Als u een API-sleutel voor een gehoste provider toevoegt, of de app naar de lokale Ollama verwijst, kan een assistent vragen over uw project beantwoorden, bewerkingen achter goedkeuringsverschillen voorstellen en compileren om zijn eigen werk te controleren. Optioneel: elke stap hierboven werkt zonder. Details staan ​​in [Assistent in Oleafly](/learn/oleafly-ai/), en de bredere ontwerpintentie achter de app staat in [Aan de slag](/docs/getting-started/) en [Filosofie](/docs/philosophy/).