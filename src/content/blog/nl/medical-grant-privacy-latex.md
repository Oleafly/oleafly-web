---

title: "Klinisch schrijven en subsidieaanvragen: privacy, traceerbare concepten en offline LaTeX"
description: "Waarom medische, volksgezondheids- en subsidieschrijvers het belangrijk vinden waar het concept wordt opgeslagen, en hoe een lokale onderzoeksredacteur met echte Git, offline compileert en geen account in de beoordelingscycli past."
date: 2026-07-14
tags: [medicine, grants, privacy, local-first]
---

Klinische manuscripten en subsidieverhalen bevatten vaak zelfs gevoelige details
voordat de de-identificatie definitief is. Elke toetsaanslag op een derde partij zetten
editor is zowel een beleidsbeslissing als een gereedschapsvoorkeur. IRB's, datagebruik
overeenkomsten, en ziekenhuis-IT maakt het niet uit waar een cloud-editor handig bij was
23.00 uur.

Dit bericht gaat over het opstellen en zetten op een manier die je kunt uitleggen
naleving. Beschouw het als workflowadvies, niet als juridische beoordeling.

## Gewone bestanden zijn gemakkelijker om over te redeneren

Een map met `.tex` en cijfers kan op een gecodeerde schijf van een ziekenhuis staan
laptopimage, of een machine met luchtopening. U kunt naleving op een pad wijzen.
Browserprojecten vereisen het vertrouwen van het toegangsmodel, het exportpad en het vertrouwen van een leverancier
lijst met subverwerkers.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) is zo gebouwd
heel bewust: geen account, geen producttelemetrie, projecten als gewone mappen
met een echte Git-repository. De [privacypagina](/privacy/) is kort omdat de
document heeft geen Oleafly-server nodig om te bestaan. Netwerk is voor acties die jij doet
take (pakketten, optioneel opzoeken van citaten, gehoste AI als je deze inschakelt, GitHub),
niet voor elke toetsaanslag van het concept.

Als het beleid cloud-AI verbiedt, laat de assistent dan uit of richt hem op een lokale medewerker
model. De editor, compileerlus en Git werken nog steeds.

## Houd veranderingen bij zonder in Word te leven

Grant PI's vragen nog steeds om 'wijzigingen bijhouden'. In LaTeX-land betekent dat meestal:
Git-geschiedenis plus PDF-opmerkingen van coauteurs, of een korte Word-export voor de
persoon die weigert iets te installeren. Behoud `.tex` als de bron van de waarheid;
zie [coauteurs die alleen Word spreken](/learn/collaborator-uses-word/).

In Oleafly is elk project vanaf dag één een Git-repository: automatische controlepunten
na succesvolle compilaties en inactieve bewerkingen, side-by-side diffs, met één klik
herstel, optionele GitHub als je een privéafstandsbediening wilt. Je kunt een geheel vorken
applicatiepakket in een tweede project (volledige geschiedenis) om een riskante bezuiniging uit te proberen
zonder de inzendingskopie aan te raken. Als u de optionele AI-assistent gebruikt, kan deze
controlepunten vóór de eerste bewerking en brengt alleen wijzigingen aan na goedkeuring
verschillen.

Naam commits na doelen of secties (`aim2-methods-cut`), zodat een PI kan skimmen
geschiedenis zonder diffs te lezen als een software-ingenieur.

## Offline is handig in ziekenhuizen

Klinische netwerken blokkeren willekeurige SaaS-domeinen. Een lokale compiler blijft schrijven
mogelijk tussen EPD-sessies. Oleafly verzendt Tectonic (en Typst) in de app;
pakketten cachen na het eerste gebruik, en de offline modus kan het netwerk weigeren voor de
compiler. Spellingcontrole en grammatica worden lokaal uitgevoerd op proza (ze slaan opdrachten over en
wiskunde). Dat zijn de beperkingen waar ziekenhuis-IT doorgaans om geeft, dus lokaal
onderzoeksredacteuren komen vaak ter sprake.

SyncTeX en een PDF naast de bron zijn van belang als u een paginalimiet instelt
op een verpleegstationcomputer met onbetrouwbare wifi.

## Sjablonen, paginalimieten en preflight

Bij NIH-stijl- en basissjablonen gaat het om marges, lettertypen en paginahoofdletters.
Geometrie- en lettertypepakketten zijn belangrijker dan slimme macro's. Compileren naar PDF en
controleer het aantal pagina's na elke grote bezuiniging, niet de avond vóór de portal
sluit. Begin met een bekend sjabloon in de galerij wanneer dit past; nog steeds overeenkomen
de huidige FOA voor lettertypen, marges en structuur (specifieke doelstellingen als één pagina
betekent één pagina).

Wanneer de PDF een machinelezer moet overleven (cv's, sommige institutionele
portals), toont Preflight structuur- en parser-achtige extractiebevindingen
voordat u zich indient. Dat zijn heuristische risicosignalen die u kunt lezen en waarop u kunt reageren.

## Multi-PI-samenwerking

Eigen bestanden per sectie of doel. Eén persoon is eigenaar van de master `.bib` of deelt deze
Export van de Zotero-groep. Spreek af of coauteurs TeX bewerken of PDF-opmerkingen retourneren.
Privé-afstandsbedieningen alleen op goedgekeurde institutionele Git-hosts wanneer het beleid dit vereist
het; niet elk subsidieconcept hoort op de openbare GitHub.

## Bibliografiebeheerders

Gedeelde Zotero-groepen exporteren een `.bib` die meerdere PI's kunnen vernieuwen. Importeren in
het project, plak DOI's wanneer u nieuwe citaten toevoegt en valideer ontbrekende velden
vóór indiening, zodat jaren niet als `[?]` in de samengestelde PDF verschijnen:
[BibTeX-validator](/tools/bibtex-validator/). Oleafly vult aan en controleert
citatiesleutels tegen de projectbibliografie terwijl je schrijft, zo kapot
De `\cite`-sleutels verschijnen eerder dan het logbestand.

## Cijfers en PHI

Zet nooit identificeerbare patiëntgegevens in cijfers of bijschriften die bestemd zijn voor:
repo die anderen kunnen klonen. Gebruik geanonimiseerde schema's. Bewaar alles nog
gevoelig onder dezelfde controles als de klinische dataset, niet naast de
diagram voor openbare methoden.

## Wat dit niet is

Local-first valt nog steeds onder IRB-beoordeling, overeenkomsten voor gegevensgebruik en
de-identificatie. Schakel gehoste AI in of druk op een afstandsbediening en sommige bytes verlaten de
machine onder het beleid van die diensten. Wat lokaal eerst verandert, is de standaard
pad voor het opstellen van een gevoelig verhaal: een map die u beheert, een editor die
werkt offline en de geschiedenis kunt u herstellen zonder een leverancier om een
exporteren.

## Praktische startopstelling

1. Creëer een lokaal project; schakel offline compileren in zodra pakketten in de cache zijn opgeslagen.
2. Laat AI uitgeschakeld tenzij het beleid en het team overeenstemming bereiken over een aanbieder.
3. Alleen privé-afstandsbediening op een goedgekeurde host.
4. Sectie-eigendom en één eigenaar van de bibliografie.
5. Controles van het aantal pagina's na elke grote bezuiniging op doelstellingen en onderzoeksstrategie.

Schrijf alsof een compliance officer zal vragen waar het concept zich bevindt. Als het antwoord
is "een map op de gecodeerde laptop, Git-geschiedenis lokaal, optioneel privé
op afstand”, bent u beter in vorm dan “een account op een dienst die we nooit hebben
beoordeeld.”