---

title: "Voetnoten, verwijzingen en bijlagen: wie doet wat"
description: "Waar terzijde, bewijsmateriaal en overlopend materiaal elk thuishoren, en wie ze daadwerkelijk leest."
category: "paper-anatomy"
order: 6
level: "beginner"
tags: ["writing", "structure", "citations"]
featured: false
updated: 2026-07-25
---

# Voetnoten, verwijzingen en bijlagen: wie doet wat

Een papier heeft drie plaatsen waar materiaal kan worden geplaatst dat niet in de hoofdstroom thuishoort, en elk heeft een aparte taak. Zet de juiste inhoud op de juiste plaats en lezers blijven georiënteerd. Meng ze door elkaar en je papier leest als een rommellade.

## Voetnoten: het beleefde terzijde

Een voetnoot is bedoeld voor iets dat de moeite waard is om te zeggen, maar niet de moeite waard om de zin te onderbreken: een URL, een verduidelijking, een waarschuwing, een "wij danken een recensent voor deze observatie."

```latex
We use the standard split.\footnote{Available at
\url{https://example.org/data}.}
```

Gebruik ze spaarzaam. Een artikel met een voetnoot per paragraaf is een artikel dat met zichzelf in discussie gaat. Als de inhoud essentieel is, promoot deze dan in de tekst. Als het citeerbaar eerder werk is, hoort het thuis in de referenties. En sommige locaties verbieden voetnoten voor URL's ten gunste van correcte citaten, dus controleer de sjabloon.

## Referenties: het bewijsspoor

Als je een werk citeert, wijs je naar het bewijs achter een bewering: dit feit is daar vastgesteld, deze methode is door hen geïntroduceerd, deze dataset komt hier vandaan. De referentielijst is de volledige kaart van waarop je voortbouwt, en reviewers controleren deze zorgvuldig, zowel op ontbrekende vermeldingen als op claims die zijn vastgepind op citaten die deze niet daadwerkelijk ondersteunen.

In LaTeX zijn de mechanismen automatisch: `\cite{key}` in de tekst, een invoer in uw `.bib`-bestand, en de lijst wordt zichzelf weergegeven.

```latex
Transformers \cite{vaswani2017attention} replaced recurrence
with attention.
```

De volledige workflow bevindt zich in [citaties toevoegen](/learn/add-citations/) en [een bibliografie maken](/learn/create-bibliography/). Oleafly kan een `.bib`-item invullen via een DOI-zoekopdracht, wat beter is dan het met de hand typen van auteurslijsten.

## Bijlage: de overloopkamer

De bijlage bevat materiaal dat het artikel ondersteunt, maar de stroom ervan zou onderbreken: volledige proefdrukken, extra resultaattabellen, hyperparameterrasters, promptsjablonen, datasetdocumentatie. De regel is dat het hoofdpapier op zichzelf moet staan. Een lezer die de bijlage nooit opent, moet toch overtuigd worden; een lezer die het opent, zou elk detail moeten vinden dat hem werd beloofd.

```latex
\appendix
\section{Full proofs}
```

Na `\appendix` worden de secties automatisch A, B, C genoemd.

## Aanvullend materiaal: buiten de PDF

Aanvullend materiaal is alles wat helemaal niet in een pdf kan leven: code, gegevens, video's, interactieve demo's. Veel locaties verzamelen het als een afzonderlijke upload met eigen groottelimieten. Behandel het als onderdeel van uw reproduceerbaarheidsverhaal en verwijs er expliciet naar vanuit de methodesectie, zodat lezers weten dat het bestaat.

## Wie leest wat eigenlijk

| Deel | Gedrag van recensent |
|---|---|
| Voetnoten | Terloops gelezen, snel vergeten |
| Referenties | Gescand op ontbrekend werk, vooral hun eigen werk |
| Bijlage | Geopend wanneer een claim in de krant moet worden gecontroleerd |
| Aanvullend | Geopend door de enige recensent die uw code uitvoert |

Wat dat in de praktijk betekent: verberg nooit iets essentieels in een voetnoot of bijlage. Recensenten beoordelen de hoofdtekst, en "het antwoord stond in bijlage F" heeft een recensie nog nooit verzacht. Leg je beste materiaal daar waar het blad het kan vinden, en laat het achterwerk doen waar het goed in is: de bonnetjes rustig vasthouden.