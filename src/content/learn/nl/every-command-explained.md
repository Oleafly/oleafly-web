---

title: "Elke \\\\opdracht in het LaTeX-universum uitgelegd"
description: "De mondiale referentie: honderden LaTeX-commando's en -omgevingen, van de kernel tot amsmath, hyperref, TikZ, biblatex en Beamer, elk op één regel uitgelegd."
category: "desk-reference"
order: 0
level: "beginner"
tags: ["reference", "commands"]
featured: true
updated: 2026-07-25
---

# Elk \commando in het LaTeX-universum uitgelegd

Deze pagina definieert elk LaTeX-commando en elke omgeving die in elke les over Oleafly Learn voorkomt, plus de bredere standaardvocabulaire die je in echte papieren tegenkomt. Kernel, amsmath, hyperref, graphicx, booktabs, biblatex, TikZ, Beamer en de pakketten die onderzoekers daadwerkelijk laden. Bekijk het op categorie, of zoek op de pagina met Ctrl/Cmd-F naar het commando dat u zojuist hebt ontmoet. Elke vermelding is één regel: wat het doet en waar het ertoe doet, uit welk pakket het komt.

## Documentklassen en instellingen

| Commando | Wat het doet |
| --- | --- |
| `\documentclass{artikel}` | Eerste regel van elk document: kiest de algemene lay-out; artikel is de standaardkeuze voor papieren. |
| `\documentclass{rapport}` | Klasse voor langere rapporten: voegt `\chapter` toe en start de samenvatting op een eigen pagina. |
| `\documentclass{boek}` | Klasse voor boeken: hoofdstukken, dubbelzijdige indeling, voor-/hoofd-/achterzijde. |
| `\documentclass{letter}` | Klasse voor correspondentie, met `\opening`, `\closing` en adresopdrachten. |
| `\documentclass{beamer}` | Klasse voor diapresentaties opgebouwd uit `frame`-omgevingen. |
| `\documentclass[11pt,a4paper]{artikel}` | Veelgebruikte klassenopties: lettergrootte (10pt, 11pt, 12pt), papier (a4papier, briefpapier), `twee kolommen`, `tweezijdig`, `landschap`, `concept`, `titelpagina`. |
| `\gebruikpakket{amsmath}` | Laadt een pakket in de preambule om functies toe te voegen. |
| `\usepackage[margin=1in]{geometrie}` | Stelt de paginamarges en het papierformaat (geometrie) in. |
| `\titel{...}` | Slaat de documenttitel op, later afgedrukt door `\maketitle`. |
| `\auteur{...}` | Slaat de auteurslijst op voor `\maketitle`; scheid meerdere auteurs met `\en`. |
| `\en` | Scheidingsteken tussen auteursnamen binnen `\author{...}`. |
| `\datum{...}` | Slaat de datum op die wordt weergegeven door `\maketitle`; `\date{}` verbergt het, `\date{\today}` toont vandaag. |
| `\vandaag` | Drukt de huidige datum af tijdens het compileren. |
| `\maaktitel` | Drukt het titelblok af van `\title`, `\author` en `\date`. |
| `\bedankt{...}` | Voegt een voetnoot toe aan een titel of auteursnaam, b.v. voor financiering of contactgegevens. |
| `\instituut{...}` | Opdracht voor auteursaffiliatie gebruikt door Beamer en de Springer LNCS-klasse. |
| `\inst{1}` | Markering van affiliatiesuperscript in LNCS- en Beamer-auteurlijsten: `Ada Lovelace\inst{1}`. |
| `\trefwoorden{...}` | Drukt de trefwoordenlijst van het artikel af in de uitgeverklassen zoals acmart en llncs. |
| `\adres{...}` | letterklasse: slaat het afzenderadres voor het briefhoofd op. |
| `\handtekening{...}` | letterklasse: slaat de naam op die onder de afsluiting is afgedrukt. |
| `\opening{Beste ...}` | letterklasse: drukt de aanhef af en start de lettertekst. |
| `\closing{Met vriendelijke groet,}` | letterklasse: drukt het afteken- en handtekeningblok af. |
| `\LaTeX` | Drukt het LaTeX-logo af met de verhoogde en verlaagde letters. |
| `\TeX` | Drukt het TeX-logo af met de verlaagde E. |
| `\invoer{bestand}` | Plakt een ander .tex-bestand op zijn plaats, alsof u het daar had getypt. |
| `\include{hoofdstuk1}` | Voert een hoofdstukbestand in dat op een nieuwe pagina begint; maakt gedeeltelijke compilaties mogelijk via `\includeonly`. |
| `\includeonly{hoofdstuk1,hoofdstuk3}` | Preambulelijst die beperkt welke `\include`-bestanden daadwerkelijk worden gecompileerd. |
| `\hypersetup{...}` | Configureert hyperref-opties zoals linkkleuren en PDF-metagegevens. |
| `\AtBeginDocument{...}` | Voert code direct na `\begin{document}` uit, handig voor late installatie. |
| `\AtEndDocument{...}` | Voert code uit net voordat het document eindigt. |
| `\maakletter` | Maakt van `@` tijdelijk een letter zodat u interne opdrachten kunt gebruiken of patchen. |
| `\maakandere` | Herstelt `@` naar normaal na `\makeatletter`. |
| `\typeout{...}` | Drukt een bericht af naar het compileerlogboek en de terminal, handig voor foutopsporing. |
| `\beschermen` | Schermt een kwetsbaar commando af binnen een bewegend argument zoals `\caption` of `\section`. |
| `\lijstbestanden` | Preamble-opdracht die elk geladen bestand en de versie ervan registreert, voor bugrapporten. |

## Structuur en secties

| Commando | Wat het doet |
| --- | --- |
| `\deel{...}` | Indeling op het hoogste niveau, boven hoofdstukken, in boek- en rapportklassen. |
| `\hoofdstuk{...}` | Genummerde hoofdstuktitel in boek- en rapportklassen (niet in artikel). |
| `\sectie{...}` | Genummerde kop op het hoogste niveau in een artikel. |
| `\subsectie{...}` | Genummerde kop één niveau onder `\sectie`. |
| `\subsubsectie{...}` | Genummerde kop één niveau onder `\subsectie`. |
| `\paragraaf{...}` | Kop op het laagste niveau: een vetgedrukte titel aan het begin van een alinea. |
| `\subparagraaf{...}` | Eén niveau lager dan `\paragraaf`, zelden nodig. |
| `\sectie*{...}` | Met secties met ster wordt de kop afgedrukt zonder nummer of inhoudsopgave. |
| `\bijlage` | Verandert de nummering zodat de volgende hoofdstukken of secties bijlage A, B, C worden. |
| `\bijlagepagina` | Drukt een aparte scheidingspagina "Bijlagen" af (bijlagepakket). |
| `\inhoudsopgave` | Drukt de inhoudsopgave af, opgebouwd uit uw snijopdrachten. |
| `\lijstvancijfers` | Drukt een lijst af met alle bijschriften van afbeeldingen met paginanummers. |
| `\lijststoftabellen` | Drukt een lijst af met alle tabelbijschriften met paginanummers. |
| `\frontmaterie` | Boekklasseschakelaar voor de pre-inhoudspagina's: Romeinse paginanummers, ongenummerde hoofdstukken. |
| `\hoofdzaak` | Boekklasse schakelt terug naar de hoofdinhoud: Arabische paginanummers, genummerde hoofdstukken. |
| `\backmaterie` | Boekklasseschakelaar voor de schutbladen: hoofdstukken worden niet meer genummerd. |
| `\addcontentsline{toc}{hoofdstuk}{...}` | Voegt handmatig een item toe aan de inhoudsopgave (of een lijst met figuren/tabellen). |
| `\addtocontents{toc}{...}` | Schrijft willekeurig materiaal (zoals spatiëring) naar een inhoudsbestand. |
| `\setcounter{secnumdiepte}{3}` | Bepaalt hoe diep snijnummers gaan. |
| `\setcounter{tocdiepte}{2}` | Bepaalt hoe diep de inhoudsopgave gaat. |

## Commando's en omgevingen definiëren

| Commando | Wat het doet |
| --- | --- |
| `\newcommand{\R}{\mathbb{R}}` | Definieert uw eigen commando; fouten als de naam al bestaat. |
| `\renewcommand{...}{...}` | Herdefinieert een bestaand commando; fouten als deze niet bestaat. |
| `\geefopdracht{...}{...}` | Definieert alleen een opdracht als deze nog niet is gedefinieerd; anders doet het stil niets. |
| `\NieuwDocumentCommand` | Moderne commandodefinitie met flexibele optionele argumenten (LaTeX3/xparse). |
| `\nieuweomgeving{naam}{begincode}{eindcode}` | Definieert uw eigen omgeving met code die wordt uitgevoerd op `\begin` en `\end`. |
| `\vernieuwing{naam}{...}{...}` | Herdefinieert een bestaande omgeving. |
| `\zorgwiskunde{...}` | Zorgt ervoor dat de wiskundige inhoud van een macro zowel binnen als buiten de wiskundemodus werkt. |
| `\DeclareMathOperator{\E}{E}` | Definieert een rechtopstaande operatornaam; de vorm met ster stelt limieten hieronder (amsmath). |
| `\DeclareMathOperator*{\argmin}{arg\,min}` | Vorm met ster: de operator neemt de onderstaande limieten in weergavewiskunde (amsmath). |
| `\nieuwestelling{lemma}{Lemma}` | Verklaart een stellingachtige omgeving (amsthm). |
| `\foe` | Voorbeeldnaam voor een door de gebruiker gedefinieerde macro in de les `\newcommand`, geen echte LaTeX-opdracht. |
| `\abs{x}` | Voorbeeld van een door de gebruiker gedefinieerde macro uit de les over aangepaste opdrachten, waarmee balken met absolute waarden worden ingesteld. |
| `\mat{A}` | Voorbeeld van een door de gebruiker gedefinieerde macro uit de les over aangepaste opdrachten voor een vetgedrukt matrixsymbool. |
| `\vect{v}` | Voorbeeld van een door de gebruiker gedefinieerde macro uit de les over aangepaste opdrachten voor een vetgedrukt vectorsymbool. |
| `\set{...}` | Voorbeeld van een door de gebruiker gedefinieerde macro uit de les over aangepaste opdrachten, waarin accolades met maat worden gezet. |
| `\citepaar` | Voorbeeld van een door de gebruiker gedefinieerde citatiehulpmacro uit de les over aangepaste opdrachten, geen standaardopdracht. |
| `\E` | Voorbeeld van een door de gebruiker gedefinieerde operator voor verwachting, meestal gedefinieerd met`\DeclareMathOperator` of `\newcommand`. |
| `\R` | Voorbeeld van een door de gebruiker gedefinieerde macro voor de reële getallen: `\newcommand{\R}{\mathbb{R}}`. |
| `\argmax`, `\argmin` | Operatornamen voor arg max / arg min, gedefinieerd in deze cursus met `\DeclareMathOperator*`, dus subscripts staan ​​hieronder. |

## Tellers en lengtes

| Commando | Wat het doet |
| --- | --- |
| `\nieuweteller{voorbeelden}` | Creëert een nieuwe teller, optioneel opnieuw ingesteld door een ouder: `\newcounter{examples}[section]`. |
| `\stelteller{pagina}{1}` | Stelt de waarde van een teller in, waarbij paginanummers opnieuw worden gestart. |
| `\addtocounter{voorbeelden}{2}` | Voegt een waarde toe aan een teller zonder iets af te drukken. |
| `\stappenteller{voorbeelden}` | Verhoogt een teller met één. |
| `\refstepcounter{voorbeelden}` | Verhoogt een teller en maakt deze tot doel voor de volgende `\label`. |
| `\waarde{voorbeelden}` | Leest de waarde van een teller voor gebruik bij rekenkunde of vergelijkingen. |
| `\arabisch{voorbeelden}` | Drukt een teller af als Arabische cijfers: 1, 2, 3. |
| `\roman{voorbeelden}`, `\Romeins{voorbeelden}` | Drukt een teller af als Romeinse cijfers in kleine letters of hoofdletters. |
| `\alph{voorbeelden}`, `\Alph{voorbeelden}` | Drukt een teller af in kleine letters of hoofdletters. |
| `\fnsymbool{voetnoot}` | Drukt een teller af als voetnootsymbolen: sterretje, dolk, enzovoort. |
| `\nieuwelengte{\mijngap}` | Creëert een nieuw lengteregister. |
| `\setlength{\parskip}{6pt}` | Wijst een waarde toe aan een lengteregister. |
| `\addtolength{\textheight}{1cm}` | Voegt een bestaande lengte toe. |
| `\settowidth{\mijngap}{tekst}` | Stelt een lengte in op de natuurlijke breedte van bepaalde tekst. |
| `\parindent` | Lengte van de inspringing van de eerste regel; ingesteld met `\setlength{\parindent}{0pt}`. |
| `\parskip` | Lengte van de verticale opening tussen alinea's; ingesteld met `\setlength`. |
| `\lijnbreedte` | Lengte van de huidige regel, handig voor de grootte: `width=\linewidth`. |
| `\tekstbreedte` | Lengte van de volledige tekstblokbreedte op de pagina. |
| `\textheight` | Lengte van de volledige tekstblokhoogte op de pagina. |
| `\kolombreedte` | Breedte van één kolom in een lay-out met meerdere kolommen. |
| `\basislijnskip` | Verticale afstand tussen basislijnen van opeenvolgende lijnen. |
|`\regelspread{1.3}` | Schaalt de interlinie (regelafstand) voor het hele document; heeft `\selectfont` of een size-commando nodig om van kracht te worden. |

## Alinea's, regeleinden en woordafbreking

| Commando | Wat het doet |
| --- | --- |
| `\\` | Beëindigt de huidige regel binnen alinea's, tabellen en matrices. |
| `\\[6pt]` | Regeleinde met extra verticale ruimte erna. |
| `\nieuweregel` | Breekt de regel zonder deze uit te vullen en zonder een pagina-einde toe te staan. |
| `\regeleinde` | Vraagt ​​hier om een ​​gerechtvaardigde regeleinde; optioneel `[0-4]` stelt aandrang in. |
| `\nolinebreak` | Ontmoedigt een regelbreuk op dit punt. |
| `\par` | Beëindigt de alinea, hetzelfde als een lege regel in de bron. |
| `\noindent` | Onderdrukt de inspringing van de eerste regel van de volgende alinea. |
| `\inspringen` | Forceert de inspringing van de eerste regel waar deze anders zou worden onderdrukt. |
| `\-` | Markeert een toegestaan ​​afbreekpunt binnen een woord. |
| `\afbreking{dataset}` | Preambulelijst waarin LaTeX leert hoe specifieke woorden moeten worden afgebroken. |
| `\slordig` | Versoepelt de afstandsregels, zodat lijnen gemakkelijker breken en overvolle vakken worden vermeden. |
| `\kieskeurig` | Herstelt strikte spatiëringsregels na `\sloppy`. |
| `\raggedright` | Lijnt de volgende tekst links uit in plaats van deze uit te vullen. |
| `\raggedleft` | Lijnt de volgende tekst rechts uit. |
| `\centreren` | Centreert alles wat volgt binnen de huidige groep, b.v. het beeld van een figuur. |
| `\dezelfdepagina` | Ontmoedigt pagina-einden binnen de huidige groep. |
| `\deze pagina vergroten{\baselineskip}` | Maakt alleen de huidige pagina iets groter, om nog een regel in te drukken. |
| `~` | Vaste spatie: `Figuur~1` zorgt ervoor dat het getal op dezelfde regel blijft. |

## Afstand

| Commando | Wat het doet |
| --- | --- |
| `\quad` | Voegt een horizontale spatie in met de breedte van een hoofdletter M. |
| `\qquad` | Voegt tweemaal de spatie van `\quad` in. |
| `\enspatie` | Voegt een halve `\quad` horizontale ruimte in. |
| `\hspatie{1cm}` | Voegt horizontale ruimte in; verdwijnt bij een regeleinde. |
| `\hspatie*{1cm}` | Horizontale ruimte die zelfs bij een regeleinde overleeft. |
| `\vspatie{1cm}` | Voegt een verticale ruimte van een bepaalde lengte in. |
| `\vspatie*{1cm}` | Verticale ruimte die zelfs bij een pagina-einde overleeft. |
| `\kleinskip` | Voegt een kleine verticale opening in tussen alinea's. |
| `\medskip` | Voegt een gemiddelde verticale opening in tussen alinea's. |
| `\bigskip` | Voegt een grote verticale opening in tussen alinea's. |
| `\hfill` | Rekbare horizontale ruimte die de inhoud uit elkaar duwt om de lijn te vullen. |
| `\vfill` | Rekbare verticale ruimte die de inhoud uit elkaar duwt om de pagina te vullen. |
| `\dotfill` | Vult de resterende regel met punten, zoals in een menu- of inhoudsregel. |
| `\hrulefill` | Vult de resterende lijn met een horizontale lijn. |
| `\stretch{2}` | Rekbare lijm met een gewicht, voor proportionele afstand: `\hspace{\stretch{2}}`. |
| `\vul` | De eenheid rekbare lengte; `\hspace{\fill}` is waar `\hfill` naar uitbreidt. |
| `\fantoom{tekst}` | Neemt precies de ruimte van zijn betoog in beslag, maar drukt niets af. |
| `\hphantom{tekst}` | Neemt alleen de breedte van het argument in beslag, zonder hoogte. |
| `\vfantoom{tekst}` | Neemt alleen de hoogte van het argument in beslag, met een breedte van nul. |
| `\smash{...}` | Drukt zijn argument af, maar doet alsof het geen hoogte en diepte heeft. |
| `\strut` | Onzichtbare ondersteuning ter hoogte van een normale lijn, om rijhoogten te egaliseren. |
| `\mathstrut` | De wiskundige modus laat de grootte van een haakje zien, om radicalen en breuken uit te lijnen. |

## Dozen en regels

| Commando | Wat het doet |
| --- | --- |
| `\mbox{...}` | Onbreekbare horizontale doos; houdt ook de inhoud op één regel. |
| `\makebox[3cm][r]{...}` | Vak met een vaste breedte met gekozen uitlijning (l, c, r, s). |
| `\fbox{...}` | Tekent een kader rond de inhoud. |
| `\framebox[3cm][c]{...}` | Ingelijste doos met een vaste breedte en gekozen uitlijning. |
| `\parbox{5cm}{...}` | Een alineavak: een minikolom met tekst van de opgegeven breedte. |
| `\raisebox{2pt}{...}` | Verschuift de inhoud omhoog (of omlaag met een negatieve lengte). |
| `\regel{2cm}{0,4pt}` | Tekent een gevulde rechthoek; het werkpaard voor aangepaste lijnen. |
| `\colorbox{geel}{...}` | Plaatst tekst op een gekleurd achtergrondvak (xcolor). |
| `\fcolorbox{rood}{geel}{...}` | Gekleurde doos met gekleurd kader (xcolor). |

## Pagina's, nummering en kopteksten

| Commando | Wat het doet |
| --- | --- |
| `\nieuwepagina` | Beëindigt de huidige pagina en begint een nieuwe. |
| `\clearpage` | Start een nieuwe pagina nadat eerst alle openstaande figuren en tabellen zijn doorgespoeld. |
| `\cleardoublepage` | Vind '\clearpage' leuk, maar zorg er ook voor dat de volgende pagina een rechter (oneven) pagina is. |
| `\paginaeinde` | Vraagt ​​op dit punt om een ​​pagina-einde, waarbij de pagina tot volledige hoogte wordt uitgerekt. |
| `\nopagebreak` | Ontmoedigt een pagina-einde op dit punt. |
| `\paginanummering{romaans}` | Stelt de paginanummerstijl in (Arabisch, Romeins, Romeins, alph, Alph), waarbij de teller op 1 wordt gezet. |
| `\pagestyle{mooi}` | Stelt de lopende kop-/voettekststijl in (gewoon, leeg, koppen, mijnkoppen, fancy) voor alle volgende pagina's. |
| `\dezepaginastijl{leeg}` | Overschrijft alleen de kop-/voettekststijl voor de huidige pagina. |
| `\depagina` | Drukt het huidige paginanummer af; gebruikt in kop- en voetteksten. |
| `\margepar{...}` | Plaatst een notitie in de paginamarge naast de huidige regel. |
| `\fancyhf{}` | Wist alle fancyhdr kop- en voettekstvelden voordat u uw eigen velden instelt. |
| `\fancyhead[R]{...}` | Stelt een fancyhdr-kopveld in, hier het rechterveld. |
| `\fancyfoot[C]{\depagina}` | Stelt een fancyhdr-voettekstveld in, hier een gecentreerd paginanummer. |
| `\headrulewidth` | fancyhdr-macro voor de dikte van de headerregel; vernieuw naar 0pt om de regel te verwijderen. |
| `\voetregelbreedte` | fancyhdr-macro voor de dikte van de voettekstregel, standaard 0pt. |
| `\nieuwegeometrie{marge=2cm}` | Wijzigt de paginageometrie midden in het document (geometrie). |
| `\herstelgeometrie` | Keert terug naar de preambule-geometrie na `\newgeometry` (geometrie). |

## Speciale tekens

De tien gereserveerde tekens en hoe u deze kunt afdrukken, plus veelgebruikte tekstsymbolen.

| Commando | Wat het doet |
| --- | --- |
| `\%` | Drukt een procentteken af ​​(kale `%` begint een opmerking). |
| `\&` | Drukt een ampersand af (kale `&` is het tabelkolomscheidingsteken). |
| `\#` | Drukt een hash af (kale `#` markeert macro-argumenten). |
| `\_` | Drukt een onderstrepingsteken af ​​(kale `_` is een wiskunde-subscript). |
| `\{` en `\}` | Accolades afdrukken (groep blote accolades). |
| `\$` | Drukt een dollarteken af ​​(zonder `$` schakelt de wiskundige modus in). |
| `\textbackslash` | Drukt een backslash in de tekst af. |
| `\textasciititilde` | Drukt een tilde af in tekst (kale `~` is een niet-afbrekende spatie). |
| `\textasciicircum` | Drukt een dakje in de tekst af (kale `^` is een wiskundig superscript). |
| `\tekstbalk` | Drukt een verticale balk in de tekst af. |
| `\textless`, `\textgroter` | Druk < en > correct af in tekstmodus. |
| `\ldots`, `\dots` | Ellipsis met correcte afstand; `\dots` past zich aan in de wiskundige modus (amsmath). |
| `\textellipsis` | De tekstmodus-ellips die `\dots` buiten wiskunde gebruikt. |
| `\textemdash`, `\textendash` | Benoemde opdrachten voor de em en en dash (dezelfde uitvoer als `---` en `--`). |
| `\textquotedblleft`, `\textquotedblright` | Gekrulde dubbele aanhalingstekens (meestal getypt als backtick-paren en apostrof-paren). |
| `\guillemetleft`, `\guillemetright` | Franse hoekaanhalingstekens (oudere spelling: `\guillemotleft`/`\guillemotright`). |
| `\dag`, `\ddag` | Dolk en dubbele dolk in de tekst, gebruikelijk bij auteursrelaties. |
| `\S` | Sectieteken, zoals in S 2.1 van een juridisch document. |
| `\P` | Paragraafteken (pilcrow). |
| `\pond` | Brits hekje. |
| `\euro` | Euroteken (eurosym-pakket; de kernel biedt ook `\texteuro`). |
| `\auteursrecht` | Copyright-teken. |
| `\tekstgeregistreerd` | Geregistreerd handelsmerkteken. |
| `\teksthandelsmerk` | Handelsmerk teken. |
| `\textdegree` | Gradenteken: `25\textdegree C`. |
| `\tekstmu` | Rechtopstaande microteken voor tekst zoals microns. |
| `\textperduizend` | Promille teken. |

## Accenten en speciale letters

Voor tekstaccenten uit het pdfLaTeX-tijdperk; met XeLaTeX/LuaLaTeX en UTF-8-invoer kun je meestal gewoon het teken typen.

| Commando | Wat het doet |
| --- | --- |
| `\'{e}` | Acuut accent: e-acuut zoals in café met een accent. |
| `` \`{e} `` | Ernstig accent. |
| `\^{o}` | Circumflex-accent. |
| `\"{u}` | Umlaut/dieresis. |
| `\~{n}` | Tilde-accent, zoals in het Spaans n-tilde. |
| `\c{c}` | Cedille, zoals in het Frans c-cedille. |
| `\v{s}` | Caron (hacek), gebruikelijk in Tsjechische en Kroatische namen. |
| `\H{o}` | Hongaars dubbel acuut accent. |
| `\k{a}` | Ogonek, zoals in het Pools a-ogonek. |
| `\b{o}` | Bar-onder accent. |
| `\d{u}` | Punt-onder accent, gebruikt bij transliteratie. |
| `\r{a}` | Ringaccent, zoals in Scandinavische a-ring. |
| `\u{o}` | Breve-accent. |
| `\.{o}` | Dot-over-accent. |
| `\t{oo}` | Bindaccent dat twee letters verbindt. |
| `\i`, `\j` | Puntloze i en j, voor het stapelen van accenten: `\'{\i}`. |
| `\ae`, `\AE` | De ae-ligatuur, kleine letters en hoofdletters. |
| `\oe`, `\OE` | De oe-ligatuur, zoals in het Franse oeuvre. |
| `\ss` | Duitse scherpe s (eszett). |
| `\o`, `\O` | Slashed o, zoals in Deense en Noorse namen. |
| `\l`, `\L` | Pools sneed l. |
| `\aa`, `\AA` | A-ring als een op zichzelf staande letter, zoals in de naam van Angstrom. |

## Lettertypen en formaten

| Commando | Wat het doet |
| --- | --- |
| `\tekstbf{...}` | Vette tekst. |
| `\textit{...}` | Cursieve tekst. |
| `\nadruk{...}` | Nadruk die zich aanpast aan de context: cursief bij staande tekst, rechtop bij cursieve tekst. |
| `\textsc{...}` | Tekst in kleinkapitalen. |
| `\teksttt{...}` | Typemachine (monospace) tekst, goed voor code en bestandsnamen. |
| `\textrm{...}` | Romeinse (serif) familietekst. |
| `\tekstsf{...}` | Sans-serif familietekst. |
| `\textmd{...}` | Gemiddeld (normaal) gewicht, vetgedrukt ongedaan makend. |
| `\textup{...}` | Rechtopstaande vorm, cursief of schuin ongedaan makend. |
| `\textsl{...}` | Schuine (schuine) vorm, anders dan echt cursief. |
| `\tekstnormaal{...}` | Wordt in één stap teruggezet naar het standaardlettertype van het document. |
| `\onderstrepen{...}` | Onderstreept tekst; gebruik spaarzaam, de nadruk ligt meestal op `\emph`. |
| `\rmfamily`, `\sffamily`, `\ttfamily` | Verklaringen waarbij de lettertypefamilie (serif, sans, mono) wordt gewijzigd totdat de groep eindigt. |
| `\bfserie`, `\mdserie` | Verklaringen die overschakelen naar vet of terug naar gemiddeld gewicht. |
| `\itshape`, `\slshape`, `\scshape`, `\upshape` | Declaraties wisselen van vorm: cursief, schuin, kleinkapitalen, rechtopstaand. |
| `\normaallettertype` | Verklaring waarbij familie, series en vorm worden teruggezet naar de standaardwaarden. |
| `\em` | Declaratievorm van `\emph`: `{\em like this}`. |
| `\klein` | Kleinste van de tien grootteopdrachten. |
| `\scriptgrootte` | Op één na kleinste maat, ongeveer in subscriptformaat. |
| `\voetnootgrootte` | Het formaat dat wordt gebruikt voor voetnoten. |
| `\klein` | Iets kleiner dan normaal. |
| `\normalegrootte` | De basisgrootte van het document. |
| `\groot`, `\Groot`, `\LARGE` | Eén, twee en drie stappen groter dan normaal. |
| `\enorm`, `\Enorme` | De twee grootste standaardmaten. |
| `\fontsize{14}{17}\selectfont` | Stelt een willekeurige lettergrootte en basislijnoverslaan in en activeert deze vervolgens. |
| `\selectfont` | Activeert het in behandeling zijnde lettertypekenmerkwijzigingen (NFSS). |
| `\textsuperscript{...}` | Verhoogde kleine tekst, zoals in markeringen in de eerste of voetnootstijl. |
| `\textsubscript{...}` | Kleine tekst verlaagd in tekstmodus. |
| `\familiedefault` | Macro met de standaardlettertypefamilie; vernieuw het om het lettertype van het hele document te wijzigen. |
| `\sfdefault` | Macro noemt de schreefloze familie; `\renewcommand{\familydefault}{\sfdefault}` maakt het document sans. |
| `\sethoofdlettertype{...}` | Stelt het hoofdlettertype in op naam onder XeLaTeX of LuaLaTeX (fontspec). |
| `\setsansfont{...}` | Stelt het schreefloze lettertype in op naam onder XeLaTeX of LuaLaTeX (fontspec). |
| `\setmonofont{...}` | Stelt het monospace-lettertype in op naam onder XeLaTeX of LuaLaTeX (fontspec). |

## Kleur (xkleur)

| Commando | Wat het doet |
| --- | --- |
| `\textcolor{rood}{...}` | Kleurt een stukje tekst. |
| `\kleur{blauw}` | Aangifteformulier: kleurt alles totdat de groep eindigt. |
| `\definecolor{brand}{HTML}{2F6F4F}` | Definieert een benoemde kleur voor later gebruik. |
| `\paginakleur{grijs!10}` | Stelt de achtergrondkleur van de hele pagina in. |
| `\rijkleur{grijs!20}` | Kleurt één tabelrij (xcolor met de `table` optie, via colortbl). |
| `\celkleur{grijs!20}` | Kleurt één tabelcel (colortbl). |
| `\rowcolors{2}{grijs!10}{wit}` | Afwisselende rijkleuren beginnend bij een bepaalde rij (xcolor `table` optie). |

## Afbeeldingen (grafischx)

| Commando | Wat het doet |
| --- | --- |
| `\includegraphics[breedte=\lijnbreedte]{plot.pdf}` | Voegt een afbeeldingsbestand in; belangrijkste opties: `breedte`, `hoogte`, `schaal`, `hoek`, `trim`+`clip`, `pagina`. |
| `\grafisch pad{{figuren/}}` | Vertelt LaTeX in welke mappen naar afbeeldingsbestanden moet worden gezocht. |
| `\rotatebox[origin=c]{90}{...}` | Roteert de inhoud over een hoek. |
| `\scalebox{0.8}{...}` | Schaalt de inhoud ervan met een factor. |
| `\resizebox{5cm}{!}{...}` | Wijzigt de grootte van de inhoud naar een doelbreedte en/of -hoogte; `!` behoudt de beeldverhouding. |
| `\reflectbox{...}` | Spiegelt de inhoud horizontaal. |
| `\includepdf[pagina's=-]{paper.pdf}` | Voegt hele pagina's uit een andere PDF (pdfpages) in. |

## Wiskundige modus openen

| Commando | Wat het doet |
| --- | --- |
| `$...$` | Inline wiskunde binnen een zin. |
| `\(...\)` | LaTeX's officiële inline wiskundige scheidingstekens, gelijk aan `$...$`. |
| `\[...\]` | Ongenummerde weergegeven vergelijking op een eigen regel. |
| `$$...$$` | Eenvoudige TeX-weergavewiskunde; afgeraden in LaTeX, gebruik in plaats daarvan `\[...\]`. |
| `x^2`, `x_i` | `^` maakt superscripts en `_` maakt subscripts; zet scripts die uit meerdere tekens bestaan ​​tussen haakjes: `x^{10}`. |

## Wiskunde: Griekse letters

Deze werken allemaal alleen in de wiskundige modus. Er bestaan ​​hoofdlettervormen waarbij de Griekse hoofdstad verschilt van de Latijnse hoofdstad.

| Commando | Wat het doet |
| --- | --- |
| `\alpha` `\beta` `\gamma` `\delta` | Griekse letters alpha, beta, gamma, delta. |
| `\epsilon` `\zeta` `\eta` `\theta` | Griekse letters epsilon, zeta, eta, theta. |
| `\iota` `\kappa` `\lambda` `\mu` `\nu` | Griekse letters jota, kappa, lambda, mu, nu. |
| `\xi` `\pi` `\rho` `\sigma` `\tau` | Griekse letters xi, pi, rho, sigma, tau. |
| `\ upsilon` `\phi` `\chi` `\psi` `\omega` | Griekse letters upsilon, phi, chi, psi, omega. |
| `\Gamma` `\Delta` `\Theta` `\Lambda` `\Xi` `\Pi` | Griekse hoofdletters Gamma tot en met Pi. |
| `\Sigma` `\Upsilon` `\Phi` `\Psi` `\Omega` | Griekse hoofdletters Sigma tot en met Omega. |
| `\varepsilon` `\vartheta` `\varpi` | Variantvormen van epsilon (de gekrulde variant die de meeste papieren gebruiken), theta en pi. |
| `\varrho` `\varsigma` `\varphi` | Variantvormen van rho, sigma (woordfinale) en phi (open krullend). |
| `\varGamma` `\varDelta` `\varTheta` `\varLambda` | Cursief Griekse varianten in hoofdletters (amsmath). |
| `\varXi` `\varPi` `\varSigma` `\varUpsilon` `\varPhi` `\varPsi` `\varOmega` | De overige cursieve Griekse varianten in hoofdletters (amsmath). |

## Wiskunde: binaire operatoren

| Commando | Wat het doet |
| --- | --- |
| `\pm`, `\mp` | Plus-min en min-plustekens. |
| `\tijden` | Vermenigvuldigingskruis, ook gebruikt voor afmetingen zoals 3 x 3. |
| `\div` | Divisie (obelus) teken. |
| `\cdot` | Gecentreerde punt voor vermenigvuldiging. |
| `\ast`, `\star`, `\bullet`, `\circ` | Asterisk-, ster-, kogel- en kleine cirkeloperatoren; `\circ` is ook functiesamenstelling. |
| `\oplus`, `\ominus` | Omcirkelde plus (directe som, XOR) en omcirkelde min. |
| `\otimes`, `\oslash`, `\odot` | Omcirkelde tijden (tensorproduct), omcirkelde schuine streep, omcirkelde punt. |
| `\wig`, `\vee` | Wedge (logische AND, exterieurproduct) en vee (logische OR, join). |
| `\land`, `\lor` | Aliassen van `\wedge` en `\vee` genoemd naar hun logische lezing. |
| `\kap`, `\kop` | Stel kruispunt- en vakbondsborden in. |
| `\setminus` | Stel verschil-backslash in: `A \setminus B`. |
| `\plus` | Unie met een plus, voor meervoudige of disjuncte unie. |
| `\sqcap`, `\sqcup` | Vierkante dop en beker, ontmoet en doe mee aan de roostertheorie. |
| `\amalg` | Samensmelting (ondersteboven product), gebruikt voor coproducten. |
| `\dolk`, `\ddagger` | Dolk en dubbele dolk als wiskundige operatoren, b.v. conjugaat transponeren `A^\dagger`. |
| `\grotedriehoekup`, `\grotedriehoekdown` | Driehoekoperatoren, b.v. symmetrisch verschil. |
| `\driehoeklinks`, `\driehoekrecht` | Zijwaartse driehoeken, b.v. normale subgroeprelatie. |

## Wiskunde: relaties

| Commando | Wat het doet |
| --- | --- |
| `\leq`, `\le` | Kleiner dan of gelijkteken (`\le` is de korte alias). |
| `\geq`, `\ge` | Groter-dan-of-is-gelijk-teken (`\ge` is de korte alias). |
| `\neq`, `\ne` | Niet-gelijkteken (`\ne` is de korte alias). |
| `\ll`, `\gg` | Veel-minder-dan en veel-groter-dan-tekens. |
| `\ongeveer` | Ongeveer-gelijkteken. |
| `\sim` | Tilde-relatie, gelezen als 'wordt gedistribueerd als' of 'is vergelijkbaar met'. |
| `\simeq` | Asymptotisch gelijkteken (tilde over gelijk aan). |
| `\cong` | Congruent teken (tilde over twee maten), gebruikt voor isomorfisme. |
| `\equiv` | Identiek aan (drievoudige streep) teken, ook gebruikt voor congruentie. |
| `\propto` | Proportioneel-aan-teken. |
| `\asymp` | Asymptotisch-equivalente relatie (gestapelde curven). |
| `\doteq` | Is gelijk aan teken met een punt, gelezen als 'benadert' of 'wordt gedefinieerd als'. |
| `\prec`, `\succ` | Gaat vooraf aan en volgt relaties, gebogen ordeningen op. |
| `\preceq`, `\succeq` | Gaat vooraf aan of is gelijk aan en volgt of is gelijk aan. |
| `\subset`, `\subseteq` | Juiste subset- en subset-of-gelijktekens. |
| `\supset`, `\supseteq` | Juiste superset- en superset-of-gelijktekens. |
| `\sqsubseteq`, `\sqsupseteq` | Vierkante subset- en superset-relaties, gebruikt voor informatievolgorde. |
| `\in`, `\notin` | Stel het lidmaatschap en de ontkenning ervan in: `x \in A`. |
| `\ni` | Omgekeerd lidmaatschap: de set bevat het element. |
| `\vdash`, `\dashv` | Tourniquet 'bewijst' en het omgekeerde. |
| `\modellen` | Dubbel tourniquet, semantische gevolgen. |
| `\verdachte` | Loodrechte / onafhankelijkheidsrelatie. |
| `\parallel` | Relatie tussen evenwijdige staven. |
| `\midden` | Verticale balk met relatie-afstand, zoals in set-builder-notatie of 'divides'. |
| `\niet` | Negeert de volgende relatie door een schuine streep te plaatsen: `\not\subset`. |

## Wiskunde: pijlen

| Commando | Wat het doet |
| --- | --- |
| `\naar`, `\pijl naar rechts` | Pijl naar rechts, zoals bij functietypen `f: A \to B` en limieten `x \to 0`. |
| `\gets`, `\linkerpijl` | Pijl naar links, ook gebruikt voor toewijzing in pseudocode. |
| `\linkerrechtspijl` | Tweekoppige enkele pijl. |
| `\Pijl naar rechts` | Dubbele pijl naar rechts, gelezen als 'impliceert'. |
| `\Pijl naar links` | Dubbele pijl naar links, gelezen als 'wordt geïmpliceerd door'. |
| `\Links-rechtspijl` | Dubbele tweekoppige pijl, gelezen als 'als en slechts als'. |
| `\impliceert`, `\implicietdoor` | Uit elkaar geplaatste `\Rightarrow` en `\Leftarrow` voor logica (amsmath). |
| `\iff` | Uitgespreide `\Leftrightarrow` voor 'als en slechts als'. |
| `\mapsto` | Maps-to-pijl met een staafstaart: `x \mapsto x^2`. |
| `\longmapsto` | Lange versie van `\mapsto`. |
| `\hookrightarrow` | Pijl naar rechts met een haakstaart, voor insluitsels/inbedding. |
| `\rightharpoenup` | Rechter harpoen (halve pijl), gebruikt voor zwakke convergentie. |
| `\rightleftharpoenen` | Gepaarde tegengestelde harpoenen, zoals in chemisch evenwicht. |
| `\leidtnaar` | Kronkelige pijl naar rechts, 'leidt naar' (amsymmb). |
| `\omhoog`, `\omlaag` | Pijlen omhoog en omlaag. |
| `\pijl omlaag` | Dubbelkoppige verticale pijl. |
| `\Naar boven`, `\Naar beneden`, `\Naar beneden` ​​| Dubbel omlijnde verticale pijlen. |
| `\nearrow`, `\searrow` | Diagonale pijlen noordoost en zuidoost, b.v. oplopend/aflopend tot een limiet. |
| `\swarrow`, `\nwarrow` | Diagonale pijlen zuidwest en noordwest. |
| `\longrightarrow`, `\longleftarrow` | Lange enkele pijlen. |
| `\Longrightarrow`, `\Longleftarrow`, `\Longleftrightarrow` | Lange dubbele pijlen. |
| `\xrechterpijl{f}` | Uitbreidbare pijl naar rechts met een label erop, groeiend om te passen (amsmath). |
| `\xlinkerpijl{f}` | Uitbreidbare pijl naar links met een label bovenaan (amsmath). |

## Wiskunde: grote operators

| Commando | Wat het doet |
| --- | --- |
| `\som_{i=1}^{n}` | Sommatiebord met limieten. |
| `\prod_{i=1}^{n}` | Productbord met limieten. |
| `\coprod` | Coproduct (ondersteboven product) bord. |
| `\int_0^1` | Integraal bord met grenzen. |
| `\iint` | Dubbel integraalteken (amsmath). |
| `\iiint` | Drievoudig integraalteken (amsmath). |
| `\punt` | Contour (gesloten lus) integraal teken. |
| `\bigcap`, `\bigcup` | Groot kruispunt en vereniging over een familie van sets. |
| `\bigsqcup` | Grote vierkante cup (disjuncte unie). |
| `\bigvee`, `\bigwedge` | Grote OR en grote AND over een indexset. |
| `\bigoplus`, `\bigotimes`, `\bigodot` | Grote omcirkelde plus, tijden en punt voor geïndexeerde bedragen en producten van structuren. |
| `\biguplus` | Grote unie-met-plus over een indexset. |
| `\limieten` | Forceert de sub-/superscripts van de volgende operator boven en onder: `\int\limits_0^1`. |
| `\geenlimieten` | Forceert sub-/superscripts naar de zijkant in plaats van boven en onder. |

## Wiskunde: scheidingstekens en grootte

| Commando | Wat het doet |
| --- | --- |
| `\links( ... \rechts)` | Een automatisch aangepast scheidingstekenpaar dat meegroeit met de inhoud. |
| `\links.` en `\rechts.` | Onzichtbare partner wanneer slechts één kant van een groot paar gewenst is, zoals in evaluatiebalken. |
| `\midden|` | Automatisch aangepast middenscheidingsteken tussen `\left` en `\right` (zoals bij voorwaardelijke waarschijnlijkheid). |
| `\big( \Big( \bigg( \Bigg(` | Scheidingstekens met handmatige grootte, van enigszins groot tot zeer groot. |
| `\bigl(...\bigr)` | Groottescheidingstekens met de juiste open/dicht-afstand (ook `\Bigl`, `\biggl`, `\Biggl`). |
| `\lvloer`, `\rvloer` | Vloerbeugels. |
| `\lceil`, `\rceil` | Plafondbeugels. |
| `\langle`, `\rangle` | Afbakeningen voor linker- en rechterhoekbeugels. |
| `\|` | Dubbele verticale staafbegrenzing (normstaven). |
| `\lvert`, `\rvert` | Staven met absolute waarden en de juiste scheidingstekenafstand (amsmath). |
| `\lVert`, `\rVert` | Dubbele staven voor normen, met de juiste scheidingstekenafstand (amsmath). |
| `\backslash` | Backslash als wiskundig symbool of scheidingsteken. |

## Wiskunde: accenten en decoraties

| Commando | Wat het doet |
| --- | --- |
| `\hoed{x}` | Klein hoedaccent boven één symbool. |
| `\controle{x}` | Caron-accent (omgekeerde hoed). |
| `\breve{x}` | Breve (afgerond) accent. |
| `\acute{x}`, `\graf{x}` | Acute en ernstige accenten in wiskunde. |
| `\tilde{x}` | Tilde-accent boven één symbool. |
| `\balk{x}` | Korte balk boven één symbool. |
| `\vec{v}` | Kleine pijl boven één symbool. |
| `\punt{x}`, `\ddot{x}` | Eén of twee punten boven een symbool, gebruikelijk bij tijdderivaten. |
| `\dddot{x}` | Drie stippen boven een symbool (amsmath). |
| `\mathring{x}` | Ringaccent boven een symbool. |
| `\brede hoed{abc}` | Brede hoed die zich over meerdere symbolen uitstrekt. |
| `\widetilde{abc}` | Brede tilde die zich over meerdere symbolen uitstrekt. |
| `\rechterpijl{AB}` | Pijl-rechts over een uitdrukking uitstrekken, zoals in vectoren van A naar B. |
| `\overlinkerpijl{AB}` | Pijl-links over een uitdrukking uitstrekken. |
| `\overline{x + y}` | Lijn over een hele uitdrukking. |
| `\onderstrepen{x + y}` | Lijn onder een hele uitdrukking (werkt ook in tekst). |
| `\overbrace{...}^{n}` | Horizontale accolade boven een uitdrukking, met een optioneel label erbovenop. |
| `\onderbeugel{...}_{n}` | Horizontale accolade onder een uitdrukking, met een optioneel label eronder. |
| `\overset{!}{=}` | Plaatst een symbool boven een ander, b.v. 'moet gelijk zijn' (amsmath). |
| `\underset{i}{\max}` | Plaatst een symbool onder een ander symbool (amsmath). |
| `\stackrel{\text{def}}{=}` | Oudere kernelopdracht waarbij een symbool over een relatie wordt gestapeld. |
| `\vetsymbool{\beta}` | Vetgedrukte wiskunde die ook Griekse letters en symbolen vetgedrukt maakt (amsmath). |
| `\prime` | Prime-symbool; `x'` is de gebruikelijke afkorting voor `x^{\prime}`. |

## Wiskunde: logachtige operatoren

Allemaal rechtopstaand gezet met de juiste tussenruimte; de limieten die de limiet nemen, plaatsen subscripts hieronder in de weergavewiskunde.

| Commando | Wat het doet |
| --- | --- |
| `\sin`, `\cos`, `\tan`, `\cot` | De basis trigonometrische functies. |
| `\sec`, `\csc` | Secans en cosecans. |
| `\arcsin`, `\arccos`, `\arctan` | Inverse trigonometrische functies. |
| `\sinh`, `\cosh`, `\tanh`, `\coth` | Hyperbolische functies. |
| `\exp`, `\ln`, `\log`, `\lg` | Exponentieel en logaritmen (`\lg` is volgens afspraak loggrondtal 2 of 10). |
| `\det`, `\dim`, `\ker`, `\deg` | Determinant, dimensie, kern, graad. |
| `\gcd`, `\hom`, `\arg`, `\Pr` | Grootste gemene deler, thuissets, complexe argumenten, waarschijnlijkheid. |
| `\lim_{x \tot 0}` | Limietoperator, rechtopstaand met het onderstaande subscript in de weergavewiskunde. |
| `\limsup`, `\liminf` | Beperk superieur en inferieur. |
| `\inf`, `\sup` | Infimum en supremum operators, rechtop gezet. |
| `\min`, `\max` | Minimum- en maximumoperatoren, rechtop gezet met onderstaande limieten in de weergavewiskunde. |
| `\bmod` | Binaire mod-operator met operatorafstand: `a \bmod n`. |
| `\pmod{n}` | Tussen haakjes achter '(mod n)'. |
| `\mod{n}` | Volg 'mod n' zonder haakjes (amsmath). |
| `\operatornaam{lcm}` | Eenmalige rechtopstaande operatornaam zonder preambuleverklaring (amsmath). |
| `\operatornaam*{ess\,sup}` | Eenmalige operator die limieten daaronder hanteert (amsmath). |

## Wiskunde: breuken, binomialen en stapelen

| Commando | Wat het doet |
| --- | --- |
| `\frac{a}{b}` | Gestapelde breuk: teller boven noemer. |
| `\dfrac{a}{b}` | Fractie gedwongen tot volledige weergavegrootte, zelfs inline (amsmath). |
| `\tfrac{a}{b}` | Breuk gedwongen tot kleine inline-grootte, zelfs bij weergavewiskunde (amsmath). |
| `\cfrac{a}{b}` | Vervolgfractie met geneste niveaus op volledige grootte (amsmath). |
| `\sqrt{x}`, `\sqrt[3]{x}` | Vierkantswortel; het optionele argument levert een n-de wortel op. |
| `\binom{n}{k}` | Binominale coëfficiënt tussen haakjes (amsmath). |
| `\dbinom{n}{k}`, `\tbinom{n}{k}` | Geforceerde binominale weergavegrootte en tekstgrootte (amsmath). |
| `{n \kies k}` | Gewoon TeX binomiale primitief; afgeraden in LaTeX, gebruik `\binom`. |
| `{a \over b}` | Gewoon TeX-fractie primitief; afgeraden in LaTeX, gebruik `\frac`. |
| `{a \bovenop b}` | Gewoon TeX stapelen primitief zonder balk; afgeraden, gebruik `\substack` of `\genfrac`. |
| `\genfrac{(}{)}{0pt}{}{a}{b}` | Algemene breukbouwer achter `\frac`, `\binom` en vrienden (amsmath). |
| `\substack{i < n \\ j < m}` | Meerregelig subscript onder een grote operator (amsmath). |
| `\sideset{_a^b}{_c^d}{\prod}` | Bevestigt indices aan alle vier de hoeken van een grote operator (amsmath). |
| `\voorschrift{a}{b}{X}` | Linkse super/subscripts, zoals in isotopennotatie (mathtools). |

## Wiskunde: afstand en stijlen

| Commando | Wat het doet |
| --- | --- |
| `\,` | Dunne wiskundige ruimte, zoals tussen een getal en zijn eenheid. |
| `\:` | Middelgrote wiskunderuimte. |
| `\;` | Dikke wiskunderuimte. |
| `\!` | Negatieve dunne ruimte, waardoor symbolen dichterbij komen. |
| `\quad`, `\qquad` | Eén-em- en twee-em-spaties, in wiskunde of tekst. |
| `\displaystyle` | Dwingt volledige weergave-wiskundige afmetingen af, b.v. grote grenzen binnen inline wiskunde. |
| `\tekststijl` | Forceert inline-wiskundige afmetingen binnen de weergavewiskunde. |
| `\scriptstijl`, `\scriptscriptstijl` | Forceer de grootte van subscript en sub-subscript. |

## Wiskunde: letters, alfabetten en diverse symbolen

| Commando | Wat het doet |
| --- | --- |
| `\mathbb{R}` | Schoolbord vetgedrukte letters voor cijferreeksen (amsymmb). |
| `\mathbf{x}` | Vetgedrukte, rechtopstaande letters in wiskunde, gebruikelijk voor vectoren en matrices. |
| `\mathcal{L}` | Kalligrafische hoofdletters, b.v. een verlies of Lagrangiaan. |
| `\mathfrak{g}` | Fraktur-letters, gebruikt in algebra en logica. |
| `\mathscr{F}` | Schrijf hoofdletters, krullender dan `\mathcal` (mathrsfs). |
| `\mathrm{d}x` | Staande (Romeinse) letters in wiskunde, voor eenheden en namen met meerdere letters. |
| `\mathit{diff}` | Cursieve identificatie van meerdere letters met woordachtige spatiëring. |
| `\mathsf{T}`, `\mathtt{x}` | Schreefloze en typemachineletters in wiskunde. |
| `\bm{\bèta}` | Vetgedrukte wiskundige symbolen, een alternatief voor `\boldsymbol` (bm-pakket). |
| `\tekst{if } x > 0` | Normale rechtopstaande tekst binnen wiskunde met de juiste spatiëring (amsmath). |
| `\infty` | Oneindigheidsteken. |
| `\gedeeltelijk` | Gedeeltelijk afgeleid (krullend d) teken. |
| `\nabla` | Nabla (del) operator voor gradiënten en divergentie. |
| `\hbar` | Gereduceerde Planck-constante, h met een balk. |
| `\el` | Script kleine letter l, gebruikt om verwarring met het cijfer 1 te voorkomen. |
| `\wp` | Weierstrass p. |
| `\Re`, `\Ik ben` | Echte en denkbeeldige deelsymbolen (Fraktur R en I). |
| `\alef` | Aleph, voor oneindige kardinalen. |
| `\legeset` | Leeg teken. |
| `\varnothing` | Een rondere, lege variant waar veel auteurs de voorkeur aan geven (amsymmb). |
| `\hoek` | Hoek symbool. |
| `\meetdangle` | Meethoeksymbool met een boog (amsymmb). |
| `\driehoek` | Driehoek symbool. |
| `\vierkant`, `\zwartvierkant` | Open en gevulde vierkanten; de gevulde eindigt vaak met bewijzen (amsymmb). |
| `\diamant`, `\ruit` | Kleine diamantoperator; ruitsymbool (amsymmb voor de laatste). |
| `\top`, `\bot` | Bovenste (waar) en onderste (onwaar/ongedefinieerd) symbolen. |
| `\vooralle`, `\bestaat` | Universeel ('voor iedereen')en existentiële ('er bestaat') kwantoren. |
| `\nexisten` | Ontkende existentiële kwantificator (amsymmb). |
| `\neg` | Logisch NIET-teken. |
| `\daarom`, `\omdat` | Driepuntige 'daarom'- en 'omdat'-tekens (amssymb). |
| `\plat`, `\natuurlijk`, `\scherp` | Muzikale voortekens, ook gebruikt in wiskundige notatie. |
| `\surd` | Kaal radicaalsymbool zonder argument. |
| `\vinkje` | Vinkje (amsymmb). |
| `\cdots` | Gecentreerde punten, tussen operatoren: `x_1 + \cdots + x_n`. |
| `\vdots`, `\ddots` | Verticale en diagonale stippen, meestal in matrices. |
| `\dotsb`, `\dotsc` | Semantische punten: tussen binaire operatoren en tussen komma's (amsmath). |

## amsmath en mathtools geven tools weer

| Commando | Wat het doet |
| --- | --- |
| `\tag{...}` | Vervangt het automatische vergelijkingsnummer door uw eigen label (amsmath). |
| `\tag*{...}` | Zoals `\tag` maar zonder de omringende haakjes (amsmath). |
| `\notag` | Onderdrukt het vergelijkingsnummer op één regel van een genummerde omgeving (amsmath). |
| `\geen nummer` | Ouder synoniem van `\notag`. |
| `\getalbinnen{vergelijking}{sectie}` | Nummervergelijkingen per sectie: (2.1), (2.2) (amsmath). |
| `\intertext{...}` | Onderbreekt een uitlijningsblok met een regel tekst over de volledige breedte, waarbij de uitlijning behouden blijft (amsmath). |
| `\korteintertext{...}` | Zoals `\intertext` met minder verticale ruimte (mathtools). |
| `\allowdisplaybreaks` | Laat weergaven met meerdere regels over pagina's heen lopen (amsmath). |
| `\displaybreak` | Vraagt ​​om een ​​pagina-einde op dit punt van een weergave (amsmath). |
| `\smashoperator{\sum_{i=1}^{n}}` | Zorgt ervoor dat brede operatorlimieten overhangen, zodat de inhoud niet uit elkaar wordt geduwd (mathtools). |
| `\mathclap{...}` | Wiskundige inhoud met nulbreedte, voor brede onder-/overscripts (mathtools). |
| `\coloneqq` | Dubbele punt is gelijk aan definitieteken:= met de juiste spatiëring (mathtools). |
| `\DeclarePairedDelimiter{\abs}{\lvert}{\rvert}` | Definieert een scheidingstekenmacro met een formulier voor automatisch aanpassen van de grootte (mathtools). |
| `\eqref{eq:verlies}` | Drukt een vergelijkingsnummer af met de haakjes (amsmath). |
| `\qedhier` | Verplaatst het einde-van-proef-vierkant naar de huidige regel, b.v. na een weergegeven vergelijking (amsthm). |

## Wiskundige omgevingen

| Milieu | Wat het doet |
| --- | --- |
| `vergelijking` | Eén weergegeven, genummerde vergelijking. |
| `vergelijking*` | Eén weergegeven, ongenummerde vergelijking (amsmath). |
| `uitlijnen` | Meerdere weergegeven vergelijkingen uitgelijnd op `&`-markeringen, elk genummerd (amsmath). |
| `uitlijnen*` | Uitgelijnde vergelijkingen zonder cijfers (amsmath). |
| `verzamelen` | Meerdere gecentreerde vergelijkingen zonder uitlijning, elk genummerd (amsmath). |
| `alignat` | Uitgelijnde vergelijkingen met handmatig gecontroleerde afstand tussen kolommen (amsmath). |
| `flalign` | Uitgelijnde vergelijkingen naar de linker- en rechtermarge geduwd (amsmath). |
| `split` | Splitst één lange vergelijking over uitgelijnde lijnen onder één getal, binnen 'vergelijking' (amsmath). |
| `meerlijn` | Eén lange vergelijking, verdeeld over lijnen: eerste regel links, laatste regel rechts (amsmath). |
| `uitgelijnd`, `verzameld` | Bouwsteenversies van uitlijnen/verzamelen bruikbaar in een ander display (amsmath). |
| `subvergelijkingen` | Nummert de vergelijkingen erin als 1a, 1b, 1c (amsmath). |
| `gevallen` | Accolade-gegroepeerde hoofdletteronderscheidingen, zoals in stuksgewijze functies (amsmath). |
| `dgevallen` | `cases` met vermeldingen in weergavestijl, zodat breuken op volledige grootte blijven (mathtools). |
| `matrix` | Kale matrix zonder scheidingstekens (amsmath). |
| `pmatrix` | Matrix tussen haakjes (amsmath). |
| `bmatrix` | Matrix tussen vierkante haken (amsmath). |
| `Bmatrix` | Matrix gewikkeld in accolades (amsmath). |
| `vmatrix` | Matrix verpakt in verticale balken, standaard determinantennotatie (amsmath). |
| `Vmatrix` | Matrix omwikkeld met dubbele staven (amsmath). |
| `kleine matrix` | Compact matrixformaat voor inline gebruik (amsmath). |
| `matrix` | Raster in wiskundige modus met uitlijning per kolom, het wiskundige neefje van 'tabelvormig'. |
| `eqnarray` | Oude vergelijkingsomgeving met drie kolommen; ontmoedigd, de afstand is verkeerd, gebruik `align`. |

## Kruisverwijzingen en links

| Commando | Wat het doet |
| --- | --- |
| `\label{fig:setup}` | Benoemt een plek (vergelijking, figuur, sectie) zodat u ernaar kunt verwijzen. |
| `\ref{fig:instellingen}` | Drukt het nummer van een gelabeld artikel af. |
| `\pageref{fig:setup}` | Drukt het paginanummer af waar het label zich bevindt. |
| `\cref{fig:setup}` | Drukt automatisch het nummer EN de typenaam af: 'fig. 1' (slim). |
| `\Cref{fig:setup}` | Aan het begin van een zin wordt '\cref' met een hoofdletter geschreven: 'Figuur 1' (cleveref). |
| `\crefrange{eq:a}{eq:d}` | Drukt een bereik af: 'eqs. 1 tot 4' (slimef). |
| `\labelcref{fig:setup}` | Drukt alleen het labelnummer af in slimme stijl, zonder de typenaam (cleveref). |
| `\vref{fig:setup}` | Referentie plus een automatische 'op de volgende pagina'-zin wanneer dat nodig is (varioref). |
| `\autoref{fig:setup}` | hyperref's getypte verwijzing: 'Figuur 1', met de hele zin gekoppeld. |
| `\nameref{sec:intro}` | Drukt de titeltekst af van de sectie waarnaar wordt verwezen (hyperref). |
| `\href{https://example.com}{linktekst}` | Maakt een klikbare link met aangepaste tekst (hyperref). |
| `\url{https://voorbeeld.com}` | Zet een URL in het typemachinetype en maakt deze klikbaar. |
| `\hyperref[sec:intro]{die sectie}` | Maakt een willekeurige tekstlink naar een label (hyperref). |
| `\hypertarget{spot}{...}` | Creëert een benoemd linkdoel ergens in het document (hyperref). |
| `\hyperlink{spot}{tekst}` | Links naar een `\hypertarget` (hyperref). |
| `\fantoomsectie` | Creëert een anker zodat links naar ongenummerde koppen op de juiste plaats terechtkomen (hyperref). |
| `\texorpdfstring{$\alpha$}{alpha}` | Geeft een alternatief in platte tekst voor wiskunde in koppen, zodat PDF-bladwijzers geldig blijven (hyperref). |
| `\pdfbookmark[1]{Titel}{naam}` | Voegt handmatig een PDF-bladwijzerinvoer toe (hyperref). |

## Citaties en bibliografie

| Commando | Wat het doet |
| --- | --- |
| `\cite{knuth1984}` | Citeert een bibliografie-item per sleutel. |
| `\nocite{sleutel}` | Voegt een vermelding toe aan de bibliografie zonder deze in de tekst te citeren; `\nocite{*}` voegt alles toe. |
| `\citep{knuth1984}` | Citaat tussen haakjes '(Knuth, 1984)' in natbib-auteurjaarstijl. |
| `\citet{knuth1984}` | Tekstcitaat 'Knuth (1984)' in natbib-auteurjaarstijl. |
| `\citeauteur{knuth1984}` | Drukt alleen de auteursnamen af ​​(natbib en biblatex). |
| `\citejaar{knuth1984}` | Drukt alleen het jaartal af (natbib en biblatex). |
| `\citealp{knuth1984}` | natbib citaat tussen haakjes zonder de haakjes, om je eigen citaat te maken. |
| `\citealt{knuth1984}` | natbib tekstcitaat zonder haakjes rond het jaar. |
| `\parencite{knuth1984}` | biblatex's citaat tussen haakjes, het analogon van `\citep`. |
| `\textcite{knuth1984}` | biblatex's tekstuele citaat, het analogon van `\citet`. |
| `\autocite{knuth1984}` | biblatex-citaat dat de voorkeursvorm van de stijl volgt (tussen haakjes, voetnoot, enz.). |
| `\footcite{knuth1984}` | biblatex-citaat in een voetnoot geplaatst. |
| `\fullcite{knuth1984}` | Drukt de volledige bibliografietekst van het item inline af (biblatex). |
| `\citetitle{knuth1984}` | Drukt de titel van het werk af (biblatex). |
| `\bibliografie{refs}` | BibTeX: drukt de referentielijst af vanuit een .bib-bestand. |
| `\bibliografiestijl{plainnat}` | BibTeX: kiest het referentieformaat; Klassieke stijlen zijn onder meer plain, unsrt, alpha, abbrv, ieeetr, acm, apalike. |
| `\addbibresource{refs.bib}` | biblatex: registreert een .bib-bestand in de preambule. |
| `\printbibliografie` | biblatex: drukt de referentielijst af waar u deze plaatst. |
| `\bibitem{sleutel}` | Eén handgeschreven vermelding in een `thebibliography`-omgeving. |
| `debibliografie` (milieu) | Met de hand geschrevenreferentielijst die wordt gebruikt als u BibTeX volledig overslaat. |

## Drijvers, figuren en tabellen

| Commando of omgeving | Wat het doet |
| --- | --- |
| `figuur` (milieu) | Zwevende container voor een afbeelding plus bijschrift; LaTeX kiest de eindpositie. |
| `figuur*` (omgeving) | Figuur die beide kolommen beslaat in een document met twee kolommen. |
| `tafel` (omgeving) | Zwevende container voor een tabellarisch plusbijschrift; LaTeX kiest de eindpositie. |
| `tabel*` (omgeving) | Tabel die beide kolommen beslaat in een document met twee kolommen. |
| `\begin{figuur}[htbp]` | Plaatsingstips: hier, boven, onder, eigen pagina; `!` versoepelt de regels, `[H]` (float-pakket) betekent precies hier. |
| `tabelvormig` (omgeving) | Het eigenlijke raster van rijen en kolommen: cellen gesplitst door `&`, rijen eindigen met `\\`. |
| `tabel*` (omgeving) | In tabelvorm uitgerekt tot een opgegeven totale breedte. |
| `tabularx` (omgeving) | Tabel met vaste breedte waarvan de 'X'-kolommen de overgebleven ruimte delen (tabularx). |
| `matrix` (omgeving) | Raster in wiskundige modus met uitlijning per kolom. |
| `longtable` (omgeving) | Tabel die over pagina's kan worden verdeeld, met herhalende kopteksten (longtable). |
| `minipagina` (omgeving) | Minipagina met vaste breedte binnen de pagina, gebruikt om inhoud naast elkaar te plaatsen. |
| `subfiguur` (milieu) | Eén subpaneel met een eigen bijschrift, zoals (a) en (b), in een figuur (subbijschrift). |
| `wrapfigur` (omgeving) | Figuur met de hoofdtekst eromheen (wrapfig). |
| `zijwaartsfiguur`, `zijwaartstafel` (omgevingen) | Floats 90 graden gedraaid op hun eigen pagina (roterend). |
| `landschap` (milieu) | Roteert hele pagina's naar liggend, waarbij de PDF-pagina automatisch wordt geroteerd (pdflscape). |
| `driedelige tafel` (omgeving) | Verpakt een tabel zodat voetnoten worden uitgelijnd met de tabelbreedte (driedelige tabel). |
| `tafelnotities` (milieu) | De notities staan ​​onder een driedelige tabel, gemarkeerd met `\tnote{a}`. |
| `adjustbox` (omgevingen `\adjustbox`) | Schaalt, vergroot of verkleint inhoud of snijdt deze bij met sleutel/waarde-opties (adjustbox). |
| `\bijschrift{...}` | Voegt een genummerd bijschrift toe aan een figuur of tabel; plaats er `\label` achter. |
| `\bijschrift*{...}` | Onderschrift zonder nummer of lijstvermelding (onderschriftpakket). |
| `\captionsetup{...}` | Configureert bijschriftlettertypen, labels en spatiëring (bijschriftpakket). |
| `\topregel` | Zware regel bovenaan een boekentafel. |
| `\midregel` | Middelmatige regel tussen de koptekst en de hoofdtekst van een booktabs-tabel. |
| `\onderregel` | Zware regel onderaan een boekentafel. |
| `\cmidrule(lr){2-3}` | Gedeeltelijke regel die geselecteerde kolommen (boekentabbladen) omvat. |
| `\addlinespace` | Kleine extra verticale ruimte tussen de rijen van de boekentabbladen, in plaats van een regel. |
| `\hlijn` | Horizontale lijn over de volledige breedte in een gewone tabel; Regels voor booktabs zien er meestal beter uit. |
| `\cline{2-3}` | Horizontale lijn die geselecteerde kolommen overspant in een gewone tabel. |
| `\vlijn` | Verticale lijn op dit punt van een tabelrij; kolom `|` specificaties zijn op de gebruikelijke manier. |
| `\multicolumn{2}{c}{Header}` | Voegt cellen over kolommen in één rij samen. |
| `\multirow{2}{*}{Label}` | Voegt cellen verticaal samen over rijen (meerdere rijen). |
| `\arraystretch` | Factor voor de rijhoogte van de tabel; ingesteld met `\renewcommand{\arraystretch}{1.3}`. |
| `\tabcolsep` | Lengte van de opvulling aan elke zijde van een tabelkolom. |
| `\nieuwkolomtype{C}{>{\centering\arraybackslash}X}` | Definieert een herbruikbare kolomspecificatie (arraypakket). |
| `\endfirsthead` | longtable: markeert het einde van de koptekst die alleen op de eerste pagina wordt weergegeven. |
| `\eindkop` | longtable: markeert het einde van de koptekst die op elke volgende pagina wordt herhaald. |
| `\eindvoet` | longtable: markeert het einde van de voettekst die bij elk pagina-einde wordt weergegeven. |
| `\endlastfoot` | longtable: markeert het einde van de voettekst die alleen aan het einde wordt weergegeven. |
|`\FloatBarrier` | Stopt vlotters die voorbij dit punt drijven (placeins). |

## Voetnoten

| Commando | Wat het doet |
| --- | --- |
| `\voetnoot{...}` | Plaatst een notitie onderaan de pagina, gemarkeerd met een automatisch nummer. |
| `\voetnoot` | Drukt alleen de voetnootmarkering af, voor plaatsen waar `\voetnoot` niet is toegestaan. |
| `\voetnoottekst{...}` | Levert de tekst voor een eerder `\footnotemark`. |

## Stellingen en bewijzen

| Commando of omgeving | Wat het doet |
| --- | --- |
| `\nieuwestelling{lemma}{Lemma}` | Verklaart een stellingachtige omgeving (amsthm). |
| `\nieuwestelling*{opmerking}{Opmerking}` | Verklaart een ongenummerde stellingachtige omgeving (amsthm). |
| `\stellingstijl{definitie}` | Stelt het uiterlijk in (plain, definitie, opmerking) voor de volgende `\newtheorem`-declaraties (amsthm). |
| `stelling` (omgeving) | Genummerd stellingblok, gemaakt door `\newtheorem{stelling}{Stelling}`. |
| `bewijs` (milieu) | Proefblok dat 'Bewijs' afdrukt. en eindigt met het QED-vierkant (amsthm). |

## Woordelijk, code en lijsten

| Commando of omgeving | Wat het doet |
| --- | --- |
| `\werkwoord|code|` | Inline woordelijk: drukt precies af wat u typt, gescheiden door herhaalde tekens. |
| `woordelijk` (omgeving) | Tekstblok precies afgedrukt zoals getypt, in typemachinelettertype. |
| `\verbatiminput{bestand.txt}` | Drukt een heel bestand woordelijk af (woordelijk pakket). |
| `lstlisting` (omgeving) | Broncodelijst met optionele syntaxisaccentuering (lijsten). |
| `\lstinline|code|` | Inline codefragment in advertentiestijl (advertenties). |
| `\lstset{taal=Python}` | Configureert standaardinstellingen voor lijsten: taal, nummering, kleuren (lijsten). |
| `\lstinputlisting{script.py}` | Zet een heel bronbestand als een vermelding (lijsten). |
| `geslagen` (milieu) | Door Pygments aangedreven gemarkeerde codeblokken; heeft `-shell-escape` nodig tijdens het compileren (geslagen). |
| `\mintinline{python}|code|` | Inline gemarkeerde code (geslagen). |

## Beamer (dia's)

| Commando of omgeving | Wat het doet |
| --- | --- |
| `frame` (omgeving) | Eén Beamer-dia: `\begin{frame}{Diatitel} ... \end{frame}`. |
| `\frame{...}` | Beamer's diavorm met één opdracht; de `frame`-omgeving is de gebruikelijke manier. |
| `\frametitel{...}` | Stelt de diatitel in vanuit een frame. |
| `\framesubtitle{...}` | Stelt een kleinere ondertitel in onder de frametitel. |
| `\titelpagina` | Beamer: drukt binnen een frame de titeldia af vanuit uw titelmetadata. |
| `\inhoudsopgave[huidigesectie]` | Overzichtsdia waarin de sectie wordt gemarkeerd waarin u zich bevindt. |
| `\pauze` | Beamer: onthult de rest van het frame bij de volgende diastap. |
| `\onslide<2->` | Inhoud verschijnt vanaf een bepaalde overlay-stap en verder. |
| `\slechts<2>{...}` | Inhoud bestaat alleen op de gegeven stappen en neemt elders geen ruimte in beslag. |
| `\ontdek<2->{...}` | Inhoud is onzichtbaar vóór zijn stap, maar behoudt altijd zijn ruimte. |
| `\zichtbaar<2->{...}`, `\onzichtbaar<2>{...}` | Toon of verberg inhoud op bepaalde stappen zonder de lay-out te wijzigen. |
| `\waarschuwing{...}` | Markeert tekst in de waarschuwingskleur van het thema, meestal rood. |
| `blok` (omgeving) | Doos met titel in de standaardkleur van het thema. |
| `alertblock` (omgeving) | Vak met een titel in de waarschuwingskleur, voor waarschuwingen of belangrijke punten. |
| `voorbeeldblok` (omgeving) | Doos met titel in de voorbeeldkleur, meestal groen. |
| `kolommen` (omgeving) en `\kolom{0.5\textwidth}` | Naast elkaar gelegen lay-outgebieden op een dia. |
| `\gebruikthema{Madrid}` | Beamer: kiest het presentatiethema in de inleiding. |
| `\gebruikkleurthema{zeepaardje}` | Wisselt alleen het kleurenpalet van het thema. |
| `\gebruiklettertype{serif}` | Wisselt alleen de lettertypekeuzes van het thema. |
| `\setbeamertemplate{navigatiesymbolen}{}` | Overschrijft één thema-element, waarbij hier de navigatiepictogrammen worden verwijderd. |
|`\setbeamercolor{title}{fg=zwart}` | Overschrijft één themakleur. |
| `\note{...}` | Sprekernotities bevestigd aan een frame, alleen weergegeven in de uitvoer van notities. |

## TikZ en diagrammen

| Commando of omgeving | Wat het doet |
| --- | --- |
| `tikzpicture` (omgeving) | Canvas voor TikZ-tekeningen; alle commando's `\draw` en `\node` gaan erin. |
| `\tikz` | Inline afbeelding in één keer: `\tikz \draw (0,0) cirkel (2pt);`. |
| `\teken (0,0) -- (1,1);` | TikZ-padopdracht die lijnen en vormen tekent; opties zoals `[dik, rood, ->]` stylen het. |
| `\vul` | TikZ-padopdracht die een vorm vult in plaats van deze te aaien. |
| `\vultekening` | TikZ-padopdracht die een vorm zowel vult als omlijnt. |
| `\schaduw` | TikZ-padopdracht die vult met een verloop. |
| `\clip` | TikZ-pad dat alle latere tekeningen beperkt tot het interieur. |
| `\pad` | TikZ-pad dat coördinaten berekent zonder te tekenen, b.v. voor het plaatsen van knooppunten. |
| `\node op (0,0) {label};` | TikZ-opdracht die tekst of vormen op coördinaten plaatst. |
| `\coördinaat (a) op (1,2);` | Noemt een punt voor hergebruik in latere paden. |
| `\foreach \i in {1,...,5}` | Lus die tekencode herhaalt over een lijst (TikZ/pgffor). |
| `\tikzset{mijnstijl/.stijl={...}}` | Definieert herbruikbare TikZ-stijlen op een moderne manier. |
| `\tikzstyle` | Syntaxis van oude stijldefinitie; verouderd, gebruik `\tikzset`. |
| `\usetikzlibrary{positionering}` | Laadt extra TikZ-functies in de preambule. |
| `\matrix` (TikZ) | Raster-uitgelijnde rangschikking van knooppunten binnen een tikzpicture. |
| `tikzcd` (milieu) | Raster voor commutatieve diagrammen; cellen gesplitst door `&` (tikz-cd). |
| `\pijl[r, "f"]` | Tekent een pijl tussen cellen in een tikz-cd-commutatief diagram. |

## Eenheden (siunitx)

| Commando | Wat het doet |
| --- | --- |
| `\num{12345.678}` | Formatteert een getal met de juiste cijfergroepering en decimale markeringen. |
| `\qty{9,8}{\meter\per\second\kwadraat}` | Nummer met eenheid, correct verdeeld (siunitx v3-naam). |
| `\eenheid{\kilo\gram}` | Alleen eenheid (siunitx v3-naam). |
| `\SI{9,8}{\meter\per\seconde\kwadraat}` | v2 naam van `\qty`; nog steeds veel te zien in de kranten. |
| `\si{\kilo\gram}` | v2 naam van `\unit`. |
| `\sisinstellingen{...}` | Globale siunitx-configuratie. |
| `\DeclareSIUnit{\parsec}{pc}` | Definieert een aangepaste eenheid (siunitx). |

## Woordenlijsten en acroniemen

| Commando | Wat het doet |
| --- | --- |
| `\gls{svm}` | Drukt een woordenlijst of acroniem af en breidt deze uit bij het eerste gebruik (woordenlijsten). |
| `\Gls{svm}` | Vorm met hoofdletter voor zinsbegin (woordenlijsten). |
| `\glspl{svm}` | Meervoudsvorm van de vermelding (woordenlijsten). |
| `\newglossaryentry{boom}{naam=boom, beschrijving={...}}` | Declareert een woordenlijstterm (woordenlijsten). |
| `\newacronym{svm}{SVM}{ondersteuningsvectormachine}` | Verklaart een acroniem met korte en lange vormen (woordenlijsten). |
| `\acrshort{svm}`, `\acrlong{svm}` | Forceer de korte of lange vorm, ongeacht het eerste gebruik (woordenlijsten). |
| `\maakwoordenlijsten` | Preambuleopdracht die de verwerking van woordenlijsten/acroniemen (woordenlijsten) activeert. |
| `\printwoordenlijst` | Drukt één woordenlijstlijst af waar u deze plaatst (woordenlijsten). |
| `\printwoordenlijsten` | Drukt de woordenlijst en acroniemenlijsten af ​​waar u deze plaatst (woordenlijsten). |

## Algoritmen en pseudocode

Trefwoordopdrachten zijn afkomstig van algpseudocode (algorithmicx); de 'algoritme'-vlotter omhult ze.

| Commando of omgeving | Wat het doet |
| --- | --- |
| `algoritme` (omgeving) | Zwevende container voor pseudocode, met bijschrift en nummer (algoritme). |
| `algoritmisch` (omgeving) | De pseudocode zelf, met de trefwoordopdrachten (algpseudocode). |
| `\Staat` | Eén instructieregel pseudocode. |
| `\Als{...}`, `\ElsIf{...}`, `\Else`, `\EndIf` | Voorwaardelijke blokzoekwoorden. |
| `\For{...}`, `\ForAll{...}`, `\EndFor` | Zoekwoorden herhalen over een bereik of een set. |
| `\Terwijl{...}`, `\EndWhile` | While-loop-trefwoorden. |
| `\Function{Naam}{args}`, `\EndFunction` | Functiedefinitieblok. |
| `\Procedure{Naam}{args}`, `\EndProcedure` | Proceduredefinitieblok. |
| `\Retour` | Het retourzoekwoord. |
| `\Commentaar{...}` | Rechts uitgelijnd commentaar op een pseudocoderegel. |
| `\Vereist`, `\Zorg ervoor` | Randvoorwaarden en postvoorwaarden bovenaan een algoritme. |

## Taal-, citaten- en redactionele pakketten

| Commando | Wat het doet |
| --- | --- |
| `\selecttaal{duits}` | Verandert de actieve taal: woordafbreking, bijschriften, datums (babel). |
| `\vreemdetaal{frans}{...}` | Zet een korte passage onder de regels van een andere taal (babel). |
| `\encitaat{...}` | Contextbewuste aanhalingstekens die correct nesten en lokaliseren (csquotes). |
| `\todo{Dit oplossen}` | Margenotitie die nog te doen werk markeert (todonotes). |
| `\lijststoftodos` | Drukt een lijst af met alle todo-notities (todonotes). |
| `\ontbrekendcijfer{...}` | Plaatsaanduidingsvak voor een figuur die je nog niet hebt gemaakt (todonotes). |
| `\xspatie` | Voegt aan het einde van een macro een spatie toe, tenzij er leestekens volgen (xspatie). |
| `\patchcmd{\cmd}{find}{replace}{ok}{fail}` | Herstelt de definitie van een bestaande macro (etoolbox). |
| `\apptocmd`, `\pretocmd` | Code toevoegen of voorafgaan aan een bestaande macro (etoolbox). |
| `\newtoggle{draft}`, `\toggletrue{draft}`, `\iftoggle{draft}{...}{...}` | Lichtgewicht Booleaanse vlaggen (etoolbox). |

## Lay-out- en typografiepakketten in één regel

| Pakket of opdracht | Wat het doet |
| --- | --- |
| `\setstretch{1.25}` | Stelt een exacte regelafstandsfactor in (setspace). |
| `\dubbele spatiëring` | Schakelt over naar dubbele regelafstand (setspace). |
| `\éénhalfafstand` | Schakelt over naar anderhalve regelafstand (setspace). |
| `\singlespacing` | Schakelt terug naar enkele regelafstand (setspace). |
| `afstand` (omgeving) | Stelt een aangepaste regelafstandsfactor in voor de inhoud ervan (setspace). |
| `\titelformaat{\sectie}{...}{...}{...}{...}` | Herontwerpt hoe een sectiekop eruitziet (titlesec). |
| `\titlespacing{\section}{0pt}{12pt}{6pt}` | Past de ruimte rond een kop aan (titlesec). |
| `\setlist[itemize]{noitemsep}` | Configureert de lijstafstand en labels globaal of per niveau (enumitem). |
| `parskip` (pakket) | Schakelt het document over naar blokparagrafen: spatie ertussen, geen inspringing. |
| `microtype` (pakket) | Subtiel uitsteeksel en uitzetting die de rechtvaardiging verbetert; laad het gewoon. |
| `multicols` (milieu) | Evenwichtige tekst met meerdere kolommen zonder de optie voor klassen met twee kolommen (multicol). |

## Scheikunde, natuurkunde en domeinnotatie

| Commando | Wat het doet |
| --- | --- |
| `\ce{H2O}` | Zet een chemische formule of reactie (mhchem). |
| `\chemfig{...}` | Tekent een chemisch structuurdiagram (chemfig). |
| `\braket{\phi|\psi}` | Zet Dirac bra-ket-notatie in met automatische maatstaven (braket). |

## Uitgeversklasseopdrachten

| Commando of omgeving | Wat het doet |
| --- | --- |
| `\IEEEauthorblockN{...}` | IEEEtran: formatteert een auteursnaamblok in het titelgebied van de IEEE-conferentie. |
| `\IEEEauthorblockA{...}` | IEEEtran: formatteert een auteursaffiliatieblok in het titelgebied van de IEEE-conferentie. |
| `\ccsdesc[500]{...}` | acmart: declareert één ACM CCS-concept voor de classificatie van het papier. |
| `CCSXML` (omgeving) | acmart: bevat de machineleesbare ACM CCS-concepten XML uit de ACM-classificatietool. |
| `\Universiteit{...}` | Klasse-specifieke metadata-opdracht zoals te zien in proefschriftsjablonen, niet in standaard LaTeX. |

## Omgevingen in het algemeen

Een omgeving is een regio geopend met `\begin{naam}` en afgesloten met `\end{naam}`; alles tussen de twee krijgt het gedrag van die omgeving. Het volledige verhaal staat in [commands vs Environments](/learn/commands-environments/). De algemene doeleinden:

| Milieu | Wat het doet |
| --- | --- |
| `document` | De hoofdtekst van elk document bevindt zich tussen `\begin{document}` en `\end{document}`. |
| `abstracte` | Drukt de samenvatting van het papier af met de standaardkop en lay-out van de klas. |
| `titelpagina` | Omhult een handgemaakte volledige titelpagina; de pagina is ongenummerd. |
| `centrum` | Centreert de inhoud horizontaal. |
| `flushlinks` | Links uitlijnen van de inhoud, onregelmatig rechts. |
| `flushright` | Lijnt de inhoud rechts uit, onregelmatig links. |
| `opsomming` | Lijst met opsommingstekens; elk item begint met `\item`. |
| `opsommen` | Genummerde lijst; elk item begint met `\item`. |
| `beschrijving` | Gelabelde lijst; vermeldingen beginnen met `\item[Label]`. |
| `\item` | Start één item binnen de lijst met opsommingen, opsommingen of beschrijvingen. |
| `citaat` | Ingesprongen blok voor korte citaten, geen alinea-inspringing. |
| `citaat` | Ingesprongen blok voor langere citaten, met alinea-inspringingen. |
| `vers` | Ingesprongen blok voor poëzie, waarbij `\\` elke versregel beëindigt. |
| `slordigpar` | Alinea's zijn gezet met ontspannen regelafbrekingen, de omgevingsvorm '\slordig'. |
| `lijst` | De algemene lijstbouwer waaruit de specificatie en vrienden worden gedefinieerd. |
| `trivlijst` | Kale lijst zonder labels of marges, gebruikt in macrodefinities. |
| `bestandsinhoud` | Schrijft de hoofdtekst tijdens het compileren naar een bestand, b.v. om een ​​.slab binnen de .tex te verzenden. |
| `bijlagen` | Verpakt de appendixhoofdstukken, waardoor `\appendixpage` en per-appendix-tools (appendixpakket) worden ingeschakeld. |

## Waar heen te gaan

Deze pagina is het woordenboek. De lessen zijn de grammatica. Voor een plakklare one-pager houdt u [de cheatsheet](/learn/cheatsheet/) open. Voor het verschil tussen de blokken `\command{...}` en `\begin{...}` leest u [commands vs Environments](/learn/commands-environments/). Voor een symbool dat je wel kunt voorstellen, maar niet kunt benoemen, gebruik je [wiskundige symbolen](/learn/math-symbols-cheatsheet/). Om te zien hoe een opdracht in de wiskundige modus eruit ziet, plakt u deze in [de live preview] (/live/) en ziet u hoe deze wordt weergegeven.