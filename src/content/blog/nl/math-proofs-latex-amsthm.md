---

title: "Wiskundestudenten: stellingen, bewijzen en notatie die consistent blijven"
description: "amsthm-stijlen, lemmanummering, macrohygiëne, lange afleidingen en gewoonten met meerdere bestanden voor pure en toegepaste wiskundige beschrijvingen."
date: 2026-07-12
tags: [mathematics, proofs, math]
---

Wiskundepapieren zijn notatie plus bewijsstructuur. LaTeX is de standaard omdat beide
pijnlijk worden in Word zodra het argument langer duurt dan een pagina. De compiler is
niet het moeilijkste deel. Consistentie is: stellingnummers die springen als je a invoegt
lemma, een letter 'V' die drie verschillende dingen betekent, en bewijzen die de
QED-markering zweeft op de volgende regel.

Dit is een praktische opstelling voor cursussen, arXiv-aantekeningen en scriptiehoofdstukken.
Steel wat je nodig hebt; negeer de rest totdat het pijn doet.

## amsthm vroeg, vóór het eerste lemma

Laad `amsthm` voordat u ad-hoc vetgedrukte "Stelling" bedenkt. rubrieken:

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{proposition}[theorem]{Proposition}
\newtheorem{corollary}[theorem]{Corollary}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]
\newtheorem{example}{Example}[section]
\theoremstyle{remark}
\newtheorem*{remark}{Remark}
```

Door nummering op sectie blijven de verwijzingen stabiel wanneer u materiaal boven a invoegt
resultaat. Het delen van een teller (`[stelling]`) voor lemma's en proposities is gebruikelijk
in pure wiskunde; toegepaste papieren nummeren soms alles onafhankelijk. Kies er één
en houd je hieraan voor het hele document.

Les: [stelling- en bewijsblokken](/learn/stellingen-bewijzen/).

## Bewijzen die netjes eindigen

Gebruik de `proof`-omgeving zodat de einde-proefmarkering op de juiste plaats terechtkomt:

```latex
\begin{proof}
  ...
\end{proof}
```

Als de laatste regel een weergegeven vergelijking is, eindig dan met `\qedhere`, zodat het vak dat ook doet
niet wees op de volgende regel. Geneste bewijzen (claim binnen een bewijs) werken
beter als `claim`-omgevingen met hun eigen korte bewijzen dan als ingesprongen
proza dat nooit sluit.

Voor huiswerk waarbij de docent met de hand gemarkeerde stappen wil, gebruik dan nog steeds LaTeX
de schone PDF-inzending, maar bewaar het ruwe werk in een apart notitiebestand, zodat u dat kunt doen
verwijder niet de enige juiste regel tijdens het herschrijven.

## Macrohygiëne

Definieer symbolen één keer:

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\eps}{\varepsilon}
\DeclareMathOperator{\Hom}{Hom}
\DeclareMathOperator{\Spec}{Spec}
```

Als twee begrippen een letter delen, ondubbelzinnig maken met macro's (`\VectSpace` vs
`\RandomVar`) in plaats van `V` te hergebruiken met verschillende lettertypen. Coauteurs niet
raad eens welk lettertype welk object betekent. Wanneer een notatieblad voorbij een scherm groeit,
plaats het in `notation.tex` en `\input` zodat iedereen één bestand bewerkt.

AI-tools vinden het heerlijk om nieuwe symbolen te bedenken. Als u er een gebruikt, plakt u uw macroblok erin
de prompt en eis dat alleen gedefinieerde namen worden gebruikt. Dezelfde discipline is van toepassing
zonder AI: nieuw symbool → toevoegen aan blad → typ vervolgens.

## Uitlijnen voor lange afleidingen

`align` en `split` houden berekeningen met meerdere regels leesbaar. Nummer geeft je alleen lijnen
zal citeren met `\eqref`. Een muur van genummerde vergelijkingen is moeilijker te volgen dan een
kort verhaal met twee getagde regels.

```latex
\begin{align}
  f(x)
  &= g(x) + h(x) \label{eq:decomp} \\
  &= \cdots
\end{align}
```

Voor een enkele vergelijking met meerdere regels die één getal moet bevatten, gebruikt u 'split'
binnen `vergelijking`. Voor gevallen is 'gevallen' of 'uitgelijnd' beter dan een zelfgemaakte reeks
pijpen.

## Kruisverwijzingen die herschikking overleven

Schrijf "volgens Stelling 2.3" nooit als kale tekst. Gebruik `\ref` of, met `cleveref`,
`\cref{thm:main}`. Labels komen na het onderschrift of de titelregel van de stelling, niet
voor. Als twee hoofdstukken labels delen zoals `thm:main`, voorvoegsel per hoofdstuk
(`ch3-thm:main`) anders krijg je stille verkeerde doelen als je bestanden samenvoegt.

Projectbrede go-to-definitie en live controles op gebroken referenties helpen bij meerdere bestanden
scripties. Dat is tegenwoordig het normale terrein van onderzoeksredacteuren, geen luxe.

## Aantekeningen en scripties met meerdere bestanden

Zelfs een lange huiswerkset is eenvoudiger met een rootbestand en sectie-invoer. Scripties
wil bijna altijd `\include` per hoofdstuk en `\includeonly` terwijl je er een opstelt
hoofdstuk per keer. Bewaar de figuren onder `figures/ch3/`, zodat het herschikken van de hoofdstukken dat wel doet
geen paden breken.

Het compileren van volledige proefschriften wordt traag. Ontwerp de figuurmodus, externaliseer zware TikZ, en
compileer indien mogelijk alleen het hoofdstuk dat u aan het bewerken bent. Zie
[hoofdstukbestanden splitsen](/learn/split-chapter-files/) en
[compilatie versnellen](/learn/speed-up-compilation/).

## Wanneer de PDF is ingeleverd

Cursussen hebben nog steeds de saaie schil nodig: marges per syllabus, paginanummers,
titel, en soms een verklaring van wetenschappelijke integriteit. De
[snelle referentie](/learn/cheatsheet/) behandelt dit zodat u uw aandacht kunt besteden
het bewijs.

Bewaar de bron. Een gemarkeerde PDF zonder `.tex` is een doodlopende weg bij het volgende probleem
set hergebruikt dezelfde preambule. Een lokale map met Git-geschiedenis (of een research
editor die checkpoints voor je compileert) verslaat `final_v3_really.pdf` op de
bureaublad.

## Voordat je het verzendt

Zorg ervoor dat stellingen en lemma’s een samenhangend nummeringsschema delen, waarbij elk symbool erin voorkomt
de hoofdtekst wordt gedefinieerd in het macroblad, en bewijzen gebruiken `proof` / `\qedhere`
waar nodig. Nummer alleen de vergelijkingen die je aanhaalt. Alle kruisverwijzingen zouden dat moeten zijn
`\ref`/`\cref`, geen hardgecodeerde nummers. Open de PDF één keer: lettertypen insluiten, marges
overeenkomen met de opdracht.

## Huiswerk versus papier

Bij huiswerk wint de duidelijkheid het van de slimheid van het pakket. Voor een paper of scriptiehoofdstuk,
Investeer één keer in de stellingopstelling en het macroblad en hergebruik het vervolgens. Niet herbouwen
nummering halverwege het project omdat een blogpost een andere stijl suggereerde.

## Delen met coauteurs

Stuur een PDF om te lezen en een repository (of zip met bronnen) om te bewerken. Als een
co-auteur retourneert alleen gescande markeringen, past deze dezelfde dag toe en legt vast. Oud
Papierstapels zijn de manier waarop twee mensen hetzelfde lemma op verschillende manieren 'repareren'.

Na dat instelwerk verdwijnt LaTeX grotendeels en kun je nadenken over de wiskunde.