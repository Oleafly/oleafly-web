---

title: "Lokaal-eerst versus cloud LaTeX-editors: wat u daadwerkelijk verhandelt"
description: "Cloud LaTeX-editors ruilen eigendom in voor het gemak. Lokaal eerst betekent bestanden op schijf, een echte onderzoekseditor, echte Git, offline werken en alleen netwerken voor acties die u onderneemt, plus wat nog steeds in de browser thuishoort."
date: 2026-07-21
tags: [local-first, privacy, research-workspace, editor]
---

Cloud LaTeX-editors wonnen om een ​​simpele reden: nul configuratie. Open een tabblad, compileer.
Jarenlang was dat de gemakkelijkste manier om een TeX-distributie naar een
laptop, en veel mensen geven er nog steeds de voorkeur aan.

Voor de meeste documenten is het instellen echter niet langer het moeilijkste onderdeel. Motoren zoals
Tectonic kan binnen een desktop-app verzenden en op verzoek pakketten ophalen
install-and-compile is ongeveer de tijd die nodig is om een cloudaccount aan te maken. De
De vraag die de moeite waard is om te stellen is wat het abonnement u nog steeds oplevert, en wat u
daarvoor overhandigen.

## Wat je opgeeft in de cloud

Uw manuscript bevindt zich in de database van iemand anders. Exporteren werkt meestal, totdat
plannen veranderen, een bedrijf wordt overgenomen of een functie verdwijnt, terwijl uw
deadline blijft staan.

Encryptie in rust houdt buitenstaanders buiten. De dienst zelf kan nog steeds zien
concepten, subsidies en niet-gepubliceerde resultaten die via de infrastructuur passeren.

Latentie is een andere stille kostenpost. Een toetsaanslag op uw machine is bijna
altijd vlotter. Compileerwachtrijen en free-tier time-outs verschijnen alleen wanneer de
bouw is niet van jou.

Offline is de andere kloof. Tijdens een vlucht, in de kelder van een ziekenhuis of in een kluis
lab zonder open netwerk, een browsereditor is slechts een leeg tabblad.

Sommige gehoste editors plaatsen ook de volledige geschiedenis, houden wijzigingen bij of Git/GitHub-synchronisatie
achter betaalde niveaus. Het maakt Local Git niet uit welk abonnement je hebt gekocht.

## Wat lokaal-eerst verandert

Projecten zijn gewone bestanden in een map die u kunt openen. Geschiedenis kan echt zijn
inspecteren vanaf elke terminal. Compile draait op uw CPU zonder wachtrij. Jouw bestanden
en de geschiedenis van Git is niet afhankelijk van het gezond blijven van een leveranciersaccount.

Live typen door meerdere gebruikers is nog steeds waar browsertools winnen. Veel onderzoek
weken zien er anders uit: solo opstellen, reizen, beperkte netwerken, willen
eigendom hebben, of een volledige documenteditor nodig hebben die het hele project indexeert.
Labs vertakken en openen al pull-aanvragen voor code. Papieren kunnen hetzelfde gebruiken
async-patroon voor coauteurs die geen cursor hoeven te delen.

## Netwerk gebeurt nog steeds (met opzet)

Lokale tools bereiken nog steeds pakketten voor eerste gebruik, sjabloonpakketten en citaten
metadata, gehoste AI als je deze inschakelt, Git-afstandsbedieningen en updates. Het punt is
de standaardinstelling: ontwerp- en cachecompilaties blijven op schijf.

Projecten, metadata, builds en Git-geschiedenis zijn lokaal beschikbaar. Netwerk draait wanneer
je onderneemt een actie die dit nodig heeft. Bewerken en in de cache opgeslagen compilatie zouden moeten werken
offline. Plak een DOI of schakel een cloudmodel in en die verzoeken gaan waar u wilt
richtte hen. Zeg dat duidelijk in elk privacyartikel, in plaats van te doen alsof
netwerk gebeurt nooit.

## De stapel rond een papier

Een onderzoeksweek is bijna nooit ‘slechts een redacteur’. Het is meestal een mix van:

- schrijfomgeving met echte projectintelligentie
- TeX-distributie en pakketonderhoud
- PDF-viewer met SyncTeX
- Git-client en externe host
- Opzoeken van citaten en hygiëne van de bibliografie
- grammatica en spellingtools
- diagram of figuurpijpleiding
- deadlines en andere neveninstrumenten

Een lokale onderzoekswerkruimte is handig als die stukken ongeveer hetzelfde zijn
project met gewone map: een projectbewuste editor (refs, citaten, macro's, structuur,
wiskundig voorbeeld, offline proefdrukken), compileren onder toezicht, PDF-werkruimte met
oud-tolerant SyncTeX, automatische Git-controlepunten, import en export, preflight
vóór indiening, optionele agent die diffs moet tonen.

## Waar Oleafly past

[Oleafly](https://github.com/Oleafly/Oleafly) is gebouwd voor die categorie: gratis,
open-source desktopwerkruimte voor LaTeX, Typst en Markdown. Gebundeld
compilers. Projectbibliotheek met vork en zoekfunctie. Projectbrede redacteur
intelligentie (definitie, referenties, hernoemen, live ref/cite-controles, structuur
weergaven, uw macro's met argumentvormen, TexLab/Tinymist indien beschikbaar). Leef
wiskundevoorbeelden. Offline Harper en Hunspell alleen op proza. Geïntegreerde PDF met
bidirectionele SyncTeX die nog steeds in kaart wordt gebracht terwijl een herbouw in behandeling is. Echte Git met
automatische controlepunten en optionele GitHub. Citaat zoeken en plakken. Diagram
Componist voor bewerkbare TikZ. Preflight. Optionele goedkeuringsgestuurde AI met uw sleutel
of lokale Ollama.

De [privacypagina](/privacy/) blijft expres kort: geen Oleafly-account, nee
producttelemetrie. Concepten live op uw machine. Gehoste AI, opzoeken van citaten en
GitHub praat met die services onder hun beleid, met uw sleutels en uw
acties.

Als je een voorproefje wilt zonder te installeren, kun je de [gratis browser
tools](/tools/) wordt aan de clientzijde uitgevoerd. De desktop-app is waar intelligentie,
compileren, geschiedenis en de projectboom ontmoeten elkaar daadwerkelijk.

## Als de cloud nog steeds wint

Blijf in de browser wanneer cocreatie in realtime het product is, wanneer a
medewerker zal niets installeren, of wanneer uw instelling al
gestandaardiseerd op een gehoste editor voor indiening.

Zorg ervoor dat het gereedschap overeenkomt met de week die u daadwerkelijk heeft. Als je live meerdere gebruikers nodig hebt
typen, in de browser blijven (of Git gebruiken als coauteurs asynchroon kunnen werken). Als jij
geeft meer om eigenaarschap, offline diepgang en een volledige lokale onderzoeksredacteur,
bewaar het manuscript als bestanden op schijf, bouw de PDF op uw computer en bewaar
geschiedenis in een repository die elke Git-tool kan openen.