---

title: "LaTeX voor machine learning-papers zonder de notatierommel"
description: "Notatiebladen, ablatietabellen, algoritmen, cijfers van trainingsruns en Git naast het papier van de eerste arXiv-versie tot cameraklaar."
date: 2026-06-18
tags: [machine-learning, research, math]
---

De meeste ML-papers falen op dezelfde manier in LaTeX: de wiskunde is prima op pagina drie en
inconsistent op pagina twaalf. Een verlies is `L` in één sectie, `\mathcal{L}` in
een andere, en vetgedrukte vectoren verschijnen alleen als de auteur het zich herinnerde. Recensenten
zelfs als ze er geen commentaar op geven.

Dit is een praktische gids voor studenten die workshoppapers, conferenties schrijven
inzendingen en scriptiehoofdstukken die DNA delen met de trainingscode.

## Kies op dag één een notatieblad

Voordat u gerelateerd werk schrijft, schrijft u twintig regels macro's:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
\DeclareMathOperator*{\argmax}{arg\,max}
\newcommand{\loss}{\mathcal{L}}
\newcommand{\expect}{\mathbb{E}}
\newcommand{\kl}{\mathrm{KL}}
```

Plak dat blok in elke coauteurvertakking. Wanneer een model een nieuw symbool bedenkt,
voeg het eerst toe aan het blad en gebruik het dan. De
[AI-volgnotatieles](/learn/ai-follow-notation/) is hetzelfde idee met a
taalmodel in de lus: het model moet het blad gehoorzamen, geen lettertypen verzinnen.

Met een live wiskundevoorbeeld in een onderzoekseditor kun je dat `\mathcal{L}` en
`L` is niet hetzelfde object terwijl u typt.

## Tafels die geschikt zijn voor camera's

Ablatietabellen groeien totdat ze van de pagina vallen. Geef de voorkeur aan 'booktabs' met nr
verticale regels, `siunitx` voor uitgelijnde decimalen, en een onderschrift dat de
statistiek en de splitsing (ImageNet, CIFAR, binnen het domein versus OOD). Als de tafel zich uitstrekt
pagina's, gebruik 'longtable' vroeg in plaats van het lettertype te verkleinen tot 7pt.

Een visuele bouwer helpt bij het eerste ontwerp: de
[table generator](/tools/table-generator/) draait in de browser. De finaletafel
moet de metriek nog steeds in het bijschrift benoemen en ± definiëren als std of se.

Rapporteer zaden en hyperparameterbereiken in bijlagetabellen wanneer de locatie dit toelaat.
De hoofdtabellen blijven scanbaar.

## Algoritmen en lijsten

Pseudocode hoort thuis in `algorithm2e` of `algorithmicx`, niet in een monospace
paragraaf. Echte trainingsfragmenten horen thuis in 'listings' of 'geslagen' met een
taal ingesteld zodat recensenten kunnen doorbladeren. Houd het hoofdpapier kort; zet volledige configuraties
in de bijlage of een repo-link met een commit-hash.

```latex
\begin{algorithm}
\caption{Training step}\label{alg:step}
...
\end{algorithm}
```

Nummeralgoritmen die u noemt. Dump geen vijf pagina's van PyTorch in de PDF.

## Cijfers van TensorBoard en matplotlib

Exporteer PDF of SVG wanneer je kunt. Raster-PNG's met 300 dpi zijn prima voor de gebruikersinterface
schermafbeeldingen, niet voor lijndiagrammen. Snijd de witruimte vóór `\includegraphics` bij. Als een
float vlucht naar de volgende sectie, fixeer de grootte en plaatsing voordat je tegen `[H]` vecht
voor een uur: [zwevende plaatsing](/learn/figur-wrong-position/).

Ablaties met meerdere panelen: bouw TeX in met `subcaption`, of stel extern samen en
voeg één PDF toe. Houd een consistente kleur aan voor "de onze" in alle figuren, dus skimmers
Leer de legende eens.

## Conferentielessen met twee kolommen

NeurIPS-, ICML-, ICLR- en CVPR-stijlklassen veranderen marges en zwevende regels.
Compileer vroeg tegen de officiële klasse. Paginalimieten zijn reëel; niet verpletteren
lettertypen. Verplaats proefdrukken en extra ablaties naar de bijlage of aanvullende PDF wanneer
de oproep dit toelaat.

## Gerelateerd werk en citaten

Gebruik stabiele cite-sleutels en schone Scholar-exports. Valideer de `.bib`:
[BibTeX-validator](/tools/bibtex-validator/). Citeer de code en datasets die u gebruikt
afhankelijk zijn van. Auteurjaar versus numeriek hangt af van de locatie; gebruik de sjabloon
stijl, geen hybride.

## Git naast het papier

Elke architectuurwijziging zou een commit moeten zijn die je een naam kunt geven. Behandel het papier en
de code als hetzelfde project, niet twee afzonderlijke back-upgewoonten.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) houdt het papier bij
in een echte Git-repository naast een projectbewuste editor met live wiskundevoorbeeld,
referenties tussen bestanden, voltooiing van citaten en SyncTeX PDF. Dat komt overeen met hoe ML-code
leeft al. Combineer het met de [cheatsheet](/learn/cheatsheet/) als je het vergeet
syntaxis onder een deadline.

Tag de commit die overeenkomt met de OpenReview- of CMT-upload. Je zult het willen
tijdens weerlegging.

## Weerlegging en camera gereed

De weerleggingsvensters zijn kort. Bewaar een filiaal of map voor "weerleggingsexperimenten"
zodat u de ingediende PDF-bron niet vervuilt. Camera-ready maakt vaak een
extra pagina; gebruik het voor de duidelijkheid, niet om elke mislukte run te dumpen.

## Bredere impact en beperkingen

Zelfs als de locatie een korte paragraaf over sociale impact of beperkingen vereist,
schrijf het in gewone taal. LaTeX zal geen vage alinea opslaan. Zet negatief
resultaten waar u achter kunt staan in de bijlage als de limiet voor de hoofdpagina krap is,
en zeg dat je dat in de hoofdtekst hebt gedaan, zodat recensenten niet aannemen dat je ze hebt verborgen.

## Voordat je uploadt

Controleer of het notatieblad consistent is in alle secties, de hoofdtabellen zijn dat ook
leesbaar met genoemde en ± gedefinieerde statistieken, en algoritmen en cijfers worden geciteerd
in volgorde. Controleer of de officiële klasse binnen de paginalimiet is gecompileerd, zonder lettertype
misdaden, de `.bib` is schoon met geciteerde code en gegevens, en een commit-hash is dat ook
opgenomen voor de geüploade PDF.

ML-experimenten zijn al luidruchtig genoeg. Houd de notatie en tabellen rustig.