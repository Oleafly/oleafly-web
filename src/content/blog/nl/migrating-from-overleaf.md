---

title: "Jaren later op de achterzijde, toen een lokale onderzoekswerkruimte"
description: "Overleaf heeft samenwerkende LaTeX mainstream gemaakt, en gratis accounts meten nog steeds samenwerkingen, geschiedenis, AI en compileertijd. Waar de browser dun blijft (cv's, forks, export, multi-engine werk) en wat een gratis lokale werkruimte op uw schijf invult."
date: 2026-07-31
tags: [overleaf, migration, local-first, research-workspace, free, open-source]
---

Jarenlang was [Overleaf](https://www.overleaf.com/) het standaardantwoord op de vraag "hoe start ik LaTeX überhaupt?" Deel een link. Bekijk de cursor van een coauteur. Compileer in de cloud. Die oprit is echt. Voor papieren sprints voor meerdere spelers is dit nog steeds het geval.

Als je er eenmaal woont voor een scriptie, een arbeidsmarktpakket of een lange solo-herschrijving, begint het gratis product klein te voelen. Eén medewerker. Geschiedenis gemeten in uren. AI geteld per dag. Compileer time-outs. Git en de volledige geschiedenis zitten achter betaalde abonnementen of een campuslicentie die je verliest als je weggaat. De browser is uitstekend als browser met een gedeelde buffer. Het is nooit gebouwd als een volledige onderzoekswerkruimte: cv's met ATS-controles, projectforking, export in meerdere formaten, Typst naast LaTeX, offline weken, onbeperkte lokale geschiedenis.

Dit is waar Overleaf nog steeds de open tab verdient, waar het gratis niveau en de productomvang opraken, en wat er verandert als die gewone bestanden in een gratis desktop-app ([Oleafly](https://github.com/Oleafly/Oleafly)) staan ​​die je één keer downloadt.

## Welke jaren op de achterkant je daadwerkelijk hebben gekocht

**Pro's die nog steeds gelden**

- Bewerken, reageren en chatten door meerdere gebruikers in realtime: nog steeds de beste optie voor "drie mensen, één samenvatting, vanavond"
- Geen installatie voor een co-auteur die alleen een link opent
- Enorme sjabloongalerij en uitgever / institutioneel spiergeheugen
- Campus-SSO en sitelicenties waarmee betaalde functies gratis zijn terwijl u op de campus bent
- Visuele/codeschakelaar en een poetsmiddel dat het veld leerde wat "online LaTeX" betekent

**Waar het dun blijft (vooral gratis)**

Gepubliceerde individuele abonnementen (controleer [Overleaf-prijzen] opnieuw (https://www.overleaf.com/user/subscription/plans); cijfers verplaatsen):

| Gratis | Betaald /org |
| --- | --- |
| **1 medewerker** per project | 10 (Student/Standaard) of onbeperkt (Pro) |
| **5 AI-gebruik/dag** | Hogere meters; volledige assistent op betaald; Pro = maximale AI |
| **Basistime-out bij compileren** | **24×** basistime-out |
| **Geschiedenis: afgelopen 24 uur** | Volledige geschiedenis |
| Integraties (Git/GitHub, Dropbox, Zotero/Mendeley, …) | Premium op veel abonnementen |
| Student ~$8–10/maand · Standaard ~$17–21/maand · Pro ~$33–42/maand · universiteiten: neem contact op met verkoop | |

De gratis laag is dus een echte editor voor voornamelijk solowerk in de cloud. Het verandert in een demo op het moment dat je een tweede co-auteur, de versie van vorige maand, langere compilaties of meer dan vijf AI-nudges nodig hebt.

Er is een tweede dunheid die niet over de betaalmuur gaat: waar het product voor is. Overleaf optimaliseert voor gezamenlijke LaTeX-documenten in een browser. Het is zwakker als plaats om:

- Bezit een portfolio met papers, scripties, posters en cv's met forking en afkomst
- Exporteer hetzelfde project naar Word, HTML, Markdown, PowerPoint (Beamer), EPUB zonder andere tools te gebruiken
- Voer ATS / toegankelijkheidspreflight uit voordat een sollicitatie uw handen verlaat
- Houd Typst en Markdown naast LaTeX onder één bibliotheek en één Git-model
- Werk offline in een vliegtuig of in een afgesloten ziekenhuisnetwerk
- Gebruik AI met uw eigen sleutel of lokaal model, waarbij elke bewerking een goedkeuringsverschil is
- Behandel de geschiedenis als echte Git die je voor altijd in een terminal kunt openen

Dat zijn onderzoeksbureauproblemen. Ommezijde eerst geoptimaliseerd voor multiplayer; de rest van het bureau kreeg nooit hetzelfde gewicht.

## Papier schrijven: beide zijden

**Op de ommezijde.** Het delen van een middenparagraaf van een papieren concept gaat probleemloos. Reacties live op het document. Voor groepen die Git nooit zullen aanraken, is dat het hele product. De redacteur is bevoegd. Het voorbeeld is prima voor de meeste artikelen. Jij bent nooit de persoon die TeX Live voor de student moet installeren.

**Waar schrijven op papier nog steeds pijn doet.** Projectbrede intelligentie is beperkt naast een desktop-onderzoekseditor die is opgebouwd rond een volledige index: hernoem een ​​macro over hoofdstukken heen, live-check `\cref` en multi-key citaten, structureer weergaven over een boomstructuur van 200 pagina's, KaTeX-voorbeelden terwijl je typt, grammatica die `\commands` negeert. Gratis compileertime-outs bijten complexe stellingen. De vrije geschiedenis verdampt na een dag. Je kunt een inzendingsversie niet echt in een experimenttak splitsen zoals je een repository splitst: je dupliceert een project in de cloud en hoopt dat je onthoudt welk project dat is.

**Oleafly-zijde.** Het papier is een project met meerdere bestanden op schijf. Projectbrede go-to-definition, referenties, hernoemen, live ref/cite-diagnostiek (inclusief de rommelige `\eqref` / `\cref`-familie), structuurweergaven, aanvullingen voor macro's die u hebt gedefinieerd met echte argumentvormen, TexLab/Tinymist indien beschikbaar, live wiskundevoorbeelden, offline Harper + Hunspell alleen op proza. PDF-werkruimte met oud-tolerante SyncTeX, spreads, afneembaar venster. Automatisch compileren op uw CPU met gehumaniseerde fouten. CI op boekschaal (~6.200 regels) is hoe de editor wordt getest.

**Hoe mensen het gewoonlijk splitsen.** Live cocreatie blijft op de keerzijde. Diepgaande creatie van meerdere bestanden, offline weken, onbeperkt lokaal compileren en geschiedenis lokaal verplaatsen. Veel mensen doen beide op dezelfde gewone bestanden.

## CV's en documenten die machines lezen

Op de achterzijde wordt een CV-cursus samengesteld. Wat het niet goed zal doen, is de arbeidsmarkt-pdf als een product behandelen: ATS-gerichte sjablonen, deterministisch selecteerbare tekst en een Preflight-paneel dat laat zien wat een parser-achtig uittreksel feitelijk ziet (naam, secties, risico's) – met scores waarop je kunt reageren. Web-cv-bouwers verkopen dat verhaal voor een maandelijks bedrag en vangen de lay-out op in hun SaaS.

Oleafly levert cv-georiënteerde sjablonen, Preflight en gratis Git, dus "industry CV", "academia CV" en "fellowship" zijn gevorkte projecten met een volledige geschiedenis - en niet drie cloudkopieën met de naam `cv_final_v4`.

Als uw enige uitvoer een gedeeld papier is, kunt u dit gedeelte overslaan. Als je ook aanvragen vanaf hetzelfde bureau verzendt, merk je het gat snel.

## Forking, klonen, afstamming

Er bestaat een cloud-kopieerproject. Wat onderzoeksbureaus willen is dichter bij een git-vork: volledige geschiedenis, zichtbare afkomst, experimenteren zonder de camera-ready boom aan te raken. De bibliotheek van Oleafly behandelt projecten als boeken op een plank; fork kopieert het project en zijn Git-geschiedenis; afstamming wordt op de kaart weergegeven. Kloon-achtige workflows via GitHub push/pull zijn gratis.

De vrije geschiedenis op de keerzijde is 24 uur. Betaalde geschiedenis is beter; het is nog steeds een servicetijdlijn, geen repository die je bewaart als het account sterft.

## Exporteren en doorgeven

Tijdschriftportals willen PDF en vaak een broncode-zip. PI's willen Word. Cursussites willen PDF. Gesprekken willen slides. Boeken willen EPUB. De wereld van Overleaf bestaat voornamelijk uit PDF uit cloud LaTeX plus downloadbron. Dat bestrijkt een groot deel van de academische wereld.

Het exportmenu van Oleafly is contextbewust: PDF en bron-zip altijd; Word, HTML, Markdown, platte tekst via beheerd Pandoc; PowerPoint van Beamer; EPUB voor boekachtige projecten; figuur PNG-paden voor afbeeldingsprojecten. De betrouwbaarheid varieert (wees eerlijk over complexe LaTeX → DOCX), maar het pad is in-app en gratis.

## AI, met de meter bij daglicht

Op de ommezijde gratis: vijf AI-toepassingen per dag. Betaalde abonnementen verhogen de limiet en ontgrendelen de Assistent. Organisaties kunnen AI voor iedereen uitschakelen.

Oleafly: AI staat standaard uit. Je sleutel of Ollama. Negen providers wanneer je gehost wilt worden. Agent kan bewerken, compileren, logs lezen, PDF-tekst controleren en literatuur doorzoeken. Elk schrijven is een goedkeuringsverschil; verwijderingen hebben een duidelijke bevestiging nodig; Git eerst checkpoint. Inline Vraag-AI. MCP voor externe klanten. Wij verkopen u geen tokens.

Gehost gemak met een dagelijkse limiet en een abonnementsladder, of een model dat u zelf meeneemt en inspecteerbare bewerkingen. Kies het vertrouwensmodel dat u kunt uitleggen aan een laboratorium of een IRB.

## Realiteit met meerdere motoren

Op de achterzijde staat een LaTeX-cloud (en vrienden). Typst heeft elders zijn eigen webverhaal. Markdown-notities leven in nog een andere tool.

Oleafly draait LaTeX (Tectonic), Typst en Markdown in één bibliotheek, met beheerde compilers, één Git-model en één PDF-oppervlak. Sjablonen filteren op engine. Dat is een andere productvorm: een onderzoeksbureau, niet een ander LaTeX-tabblad.

## Offline, privacy, eigendom

Browser: geen netwerk, geen editor. Concepten staan ​​onder hun voorwaarden op hun servers. Exporteren is uw ontsnappingsluik totdat dit niet meer het geval is (accounttoegang, planwijzigingen, afstuderen).

Lokale werkruimte: gewone mappen, echte Git, offline bewerken en compileren in de cache, optionele strikte offline modus. Geen Oleafly-account. Geen producttelemetrie. Netwerk voor pakketten, citaten, gehoste AI, GitHub, updates – wanneer u erom vraagt.

## Waar Overleaf nog steeds wint

- Live typen en reageren door meerdere gebruikers dit uur
- Zero-install coauteurs
- Institutionele SSO en "iedereen heeft al de achterzijde"
- Uitgeversgewoonten die standaard een cloudproject openen

Live multiplayer voor Oleafly staat op de roadmap. Tot die tijd is Git het samenwerkingspad, of je behoudt Overleaf voor de live sprint en de lokale app voor de diepe week. Omdat alles eenvoudige bestanden zijn, is het heen en weer schakelen eerder een saaie infrastructuur dan een migratieproject.

## Waar een gratis lokale werkruimte voorop loopt

- Volledige editordiepte (projectindex, macro's, structuur, wiskundevoorbeeld, prozabewuste proefdrukken, taalservers)
- PDF-werkruimte met oud-tolerante SyncTeX
- Real Git + gratis GitHub-synchronisatie + projectvork met geschiedenis
- Typst + Markdown naast LaTeX
- Citaties zoeken/plakken/importeren, diagramcomponist, preflight, exporteren in meerdere formaten
- AI onder uw sleutels met goedkeuringsverschillen, of volledig lokaal
- $0 voor altijd, AGPL, één keer downloaden

## Momentopnametabel

| | Ommezijde gratis | Keerzijde betaald / campus | Olifant |
| --- | --- | --- | --- |
| Kosten | $0 trechter | $8–$42+/maand of sitelicentie | **$0 voor altijd** (AGPL) |
| Rekening | Vereist | Vereist | Geen |
| Realtime multiplayer | Ja (1 samenwerking gratis) | Meer samenwerkingen | Routekaart; vandaag = Git |
| Geschiedenis | 24 uur | Volledig (plan) | Volledige Git op schijf |
| Git/GitHub | Premie | Premie | Ingebouwd, gratis |
| Compileren | Server, basistime-out | 24× time-out | Lokaal, uw hardware |
| Offline | Nee | Nee | Ja (pakketten in cache) |
| Motoren | LaTeX-eerste cloud | LaTeX-eerste cloud | LaTeX + Typst + Prijsverlaging |
| Projectintelligentie | Browserkwaliteit | Browserkwaliteit | Volledige IDE-diepte voor meerdere bestanden |
| PDF / SyncTeX | Browservoorbeeld | Browservoorbeeld | Volledige werkruimte + verouderde kaart |
| AI | 5 toepassingen/dag | Gemeten / max. | Je sleutel of Ollama; goedkeuringsverschillen |
| Hervatten / ATS-preflight | Doe-het-zelf | Doe-het-zelf | Ingebouwd |
| Vork met geschiedenis | Kopieer project | Kopieer project | Bibliotheekvork + volledige Git |
| Exporteren | PDF + bron | PDF + bron | PDF, bron, DOCX, HTML, MD, PPTX, EPUB… |
| Sjablonen | Grote wolkenset | Grote wolkenset | 23 gebundeld + 99 pakketten + op maat |
| Gegevens thuis | Hun servers | Hun servers | Uw schijf |

## Beide proberen zonder drama

1. Zip de bron op de ommezijde.
2. Installeer Oleafly vanaf de
   [releasepagina](https://github.com/Oleafly/Oleafly/releases/latest).
3. Importeren; één keer compileren; schrijf een dag op een echt papier of cv.
4. Bewaar het project op de Overleaf voor elke live multiplayer die je nog nodig hebt.

Tectonic kan nog steeds op zware uitgeversklassen stuiten – rapporteer die; zij geven vorm aan de routekaart. De meeste artikelen en scripties in ACM/IEEE/Elsevier-stijl zijn prima.

## Sluiting

Overleaf verdiende zijn decennium. Gratis multiplayer voelt nog steeds als magie als drie mensen vanavond dezelfde paragraaf nodig hebben. Voor eigendom, diepgaande bewerking, forks, export, werk met meerdere motoren, onbeperkte geschiedenis en AI die u beheert, is een gratis lokaal bureau de eerlijkste oplossing. Download Oleafly één keer, bewaar Overleaf voor live sprints als je die nog nodig hebt, en kies op basis van echte papieren in plaats van op basis van een featurematrix.