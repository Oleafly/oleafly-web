---

title: "Camera-klaar zonder paniek"
description: "De-anonimiseer, voeg financiering toe, sluit lettertypen in en bereik de paginalimiet: de checklist voor de definitieve versie."
category: "ship-your-paper"
order: 5
level: "intermediate"
tags: ["camera-ready", "submission", "checklist"]
featured: false
updated: 2026-07-25
---

# Cameraklaar zonder paniek

Geaccepteerd! Na de viering komt er nog een laatste deadline: camera gereed. De naam is een overblijfsel uit de tijd dat uitgevers uw pagina's fotografeerden om af te drukken. Tegenwoordig betekent het de definitieve versie die in de procedure wordt opgenomen, precies zoals de lezers deze voor altijd zullen zien. Geen enkele editor corrigeert uw typefouten hierna. Dat deel is voor jou.

## Wat verandert er tussen inzending en gereed voor de camera

Uw ingediende versie is afgestemd op reviewers. De camera is klaar voor de permanente opname en er zijn verschillende dingen die veranderen:

| Artikel | Ingezonden versie | Cameraklaar |
|---|---|---|
| Auteursnamen | Verborgen (dubbelblind) | Echte namen, voorkeuren, e-mails |
| Dankbetuigingen | Weggelaten | Financiering, subsidies, dank |
| Paginalimiet | Beoordelingslimiet | Vaak +1 pagina, maar exact |
| Auteursrechtblokkering | Tijdelijke aanduiding of geen | Uitgeversblok, DOI, ISBN |
| Zelfcitaties | Derde persoon ("Smith et al.") | Kan "ons eerdere werk" zeggen |
| Weerlegging van beloften | Beloofd | daadwerkelijk geleverd |

De-anonimiseren is meer dan het terug toevoegen van namen. Zoek in de bron naar elke plek die je rond je identiteit hebt geschreven; zie [anonimisering voor dubbelblinde beoordeling](/learn/anonymization-double-blind/) voor de gebruikelijke verstopplekken, en draai ze dan allemaal om.

## Nogmaals de exacte paginalimiet

Limieten voor cameragereedheid worden afgedwongen door uitgevers, niet alleen door voorzitters, en de extra inhoud (auteurblokkering, dankbetuigingen) neemt ruimte in beslag. Als je plotseling zes regels verder bent, doe het dan eerlijk: scherp proza ​​en cijfers aan in plaats van misbruik te maken van spatiëringscommando's. De technieken uit [page limits without crimes](/learn/page-limits-without-crimes/) zijn hier dubbel van toepassing, omdat uitgevers de opmaak controleren.

## Lettertypen moeten zijn ingesloten

Dit is degene die mensen bijt. Uitgevers voeren geautomatiseerde controles uit, en de belangrijkste reden voor afwijzing zijn niet-ingebedde lettertypen, die meestal worden binnengesmokkeld door een pdf met cijfers die wordt geëxporteerd vanuit een plottool. Controleer dit met `pdffonts yourpaper.pdf`: bij elk lettertype moet "emb: yes" staan. Als je dat niet doet, is de dader bijna altijd een figuur; exporteer het opnieuw met ingesloten lettertypen of als een correct gegenereerde PDF.

## De laatste proeflezing: eerst de referenties

Referenties zijn waar entropie zich concentreert. Voordat je uploadt:

- [ ] Nee "??" citaten of ongedefinieerde verwijzingen in het logboek
- [ ] Elke vermelding in de bibliografie heeft plaats, jaar en titel met de juiste hoofdletters
- [ ] Auteursnamen goed gespeld (mensen merken hun eigen naam op)
- [ ] ArXiv-only citaten bijgewerkt naar gepubliceerde versies waar ze bestaan
- [ ] URL's in referenties worden nog steeds opgelost

Lees vervolgens het hele artikel een keer hardop voor. Het is langzaam en het werkt.

## Eigenaardigheden bij het uploaden van bronnen

De meeste uitgevers willen jouw LaTeX-broncode, niet alleen de PDF, en hun bouwsystemen zijn kieskeurig: neem de `.bbl` op, vermijd niet-standaardpakketten, volg hun bestandsindeling. Exporteer een schone bron-ZIP (Oleafly doet dit in één stap) en test-compileer deze helemaal opnieuw in een lege map voordat u deze uploadt. Als het alleen wordt opgebouwd vanwege een verdwaald bestand op uw computer, zal het systeem van de uitgever erachter komen.

## De checklist voor één vergadering

- [ ] Namen, voorkeuren, e-mails hersteld en correct
- [ ] Dankbetuigingen en financieringsnummers toegevoegd
- [ ] Copyrightblokkering/DOI-informatie geplakt uit de e-mail van de uitgever
- [ ] Paginalimiet precies gehaald
- [ ] `pdffonts` toont alle ingesloten lettertypen
- [ ] Referenties proefgelezen
- [ ] Schone bron-ZIP compileert helemaal opnieuw
- [ ] Geüpload met nog een dag over

Dan is het definitief klaar. Tijd om na te denken over [het presenteren](/learn/present-your-paper/).