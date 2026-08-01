---

title: "Lege bibliografie"
description: "Pad, backend, ontbrekende cite, printbibliografie versus bibliografie."
category: "log-literacy"
order: 4
level: "beginner"
tags: ["errors", "citations"]
featured: false
updated: 2026-07-25
---

# Lege bibliografie

## Het symptoom

Uw document wordt gecompileerd zonder fatale fout, maar de sectie Verwijzingen ontbreekt geheel, of de kop verschijnt zonder eronder. Vaak wordt elke `\cite` in de tekst tegelijkertijd weergegeven als een vet vraagteken. Er is niets gecrasht, dus er is geen duidelijke fout om te achtervolgen, wat deze frustrerend maakt.

## Waarom het gebeurt

De bibliografie wordt niet alleen door LaTeX geproduceerd. LaTeX schrijft eerst de lijst met geciteerde sleutels in een hulpbestand. Een apart backend-programma (`bibtex` of `biber`) leest uw `.bib`-database en formatteert de overeenkomende gegevens. Ten slotte leest LaTeX dat geformatteerde resultaat bij de volgende doorgang weer in. Een lege bibliografie betekent dat deze pijplijn ergens kapot is gegaan: de backend is nooit uitgevoerd, deze is uitgevoerd maar kon de database niet vinden, deze heeft de database gevonden maar er zijn geen sleutels gevraagd, of het document vraagt ​​om het resultaat met de verkeerde opdracht.

## Werk op volgorde door de oorzaken heen

Bevestig eerst dat het databasebestand bestaat waar het document zegt dat het is. `\bibliography{refs}` en `\addbibresource{refs.bib}` zoeken beide naar `refs.bib` relatief ten opzichte van het hoofdbestand, dus naar een bestand dat in een `bib/` submap staat, moet verwezen worden als `bib/refs` of `bib/refs.bib`. Een verkeerd pad mislukt stilletjes.

Ten tweede: zorg ervoor dat de backend daadwerkelijk draait. Eén enkele compilatie is nooit genoeg; de volledige cyclus is LaTeX, dan `bibtex` of `biber`, en dan nog twee keer LaTeX. Oleafly voert deze cyclus automatisch uit, maar een handmatige build of een verkeerd geconfigureerde editortoolchain kan de middelste stap overslaan, en het resultaat is precies een lege referentielijst.

Controleer ten derde of er minstens één `\cite`-commando aanwezig is. De backend formatteert alleen de vermeldingen waar het document om vraagt, dus een concept zonder citaten krijgt door het ontwerp een lege lijst. Tijdens het vroege opstellen kun je alles forceren met `\nocite{*}`, dat elke invoer in de database opvraagt ​​zonder iets in de tekst af te drukken.

Ten vierde: stem de opdracht af op het systeem. Klassieke BibTeX-documenten eindigen met `\bibliographystyle{...}` en `\bibliography{refs}`. biblatex-documenten laden de database in de preambule met `\addbibresource{refs.bib}` en drukken deze af met `\printbibliography`. Het combineren van de twee, bijvoorbeeld het laden van biblatex maar nog steeds `\bibliography` aanroepen, levert precies deze fout op. Hetzelfde geldt voor het draaien van de verkeerde backend: biblatex heeft `biber` nodig, en het voeren ervan met klassieke `bibtex` levert niets op.

## Lees het eigen log van de backend

De backend schrijft zijn klachten naar een `.blg`-bestand naast uw document, en dat is waar verkeerd ingedeelde vermeldingen, dubbele sleutels en berichten "Ik kon het databasebestand niet openen" verschijnen. Als de bovenstaande stappen er goed uitzien, maar de lijst nog steeds leeg is, vermeldt het `.blg` log bijna altijd de echte boosdoener. Voor vraagtekens die blijven bestaan ​​nadat de bibliografie zelf verschijnt, zie [Clearing mystery citation marks](/learn/citation-quest-mark/).