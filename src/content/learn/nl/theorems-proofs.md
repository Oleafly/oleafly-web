---

title: "Stelling- en bewijsblokken"
description: "amsthm-stijlen, gedeelde tellers, einde-proefmarkeringen."
category: "field-kits"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Stelling- en bewijsblokken

Wiskundig schrijven draait op genummerde uitspraken: stellingen, lemma's en definities, die elk uit de tekst voortkomen en genummerd zijn zodat latere bewijzen ze kunnen citeren. Het `amsthm`-pakket levert de machines. U geeft in de inleiding aan welke soorten blokken uw document nodig heeft en gebruikt ze vervolgens als gewone omgevingen.

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]

\begin{theorem}[Optional name]
 Statement.
\end{theorem}
\begin{proof}
 Argument. \qedhere
\end{proof}
```

## De omgevingen declareren

`\newtheorem{theorem}{Stelling}[sectie]` creëert een `stelling`-omgeving. Het eerste argument is de omgevingsnaam die u gaat typen, het tweede is de koptekst die wordt afgedrukt, en het daaropvolgende `[sectie]` verbindt de nummering met secties, dus de derde stelling van sectie 2 is Stelling 2.3 en de teller wordt bij elke nieuwe sectie opnieuw ingesteld.

`\nieuwestelling{lemma}[stelling]{Lemma}` plaatst het optionele argument in de andere positie, waar het iets anders betekent: `[stelling]` zegt dat lemma's de stellingteller delen in plaats van hun eigen argument te behouden. Een gedeelde teller produceert een enkele reeks, Stelling 2.1 gevolgd door Lemma 2.2. Dat is gemakkelijker te volgen dan parallelle reeksen waarin Lemma 2.1 en Stelling 2.1 beide bestaan.

`\theoremstyle` bepaalt het uiterlijk van elke declaratie die erop volgt. De 'gewone' stijl drukt de hoofdtekst cursief af, de traditionele behandeling voor stellingen, lemma's en stellingen. De ‘definitie’-stijl houdt het lichaam rechtop, wat past bij definities en voorbeelden. Een derde stijl, 'opmerking', is nog lichter en past bij aantekeningen en observaties. Groepeer uw declaraties onder de stijl die iedereen moet gebruiken.

## De blokken gebruiken

Het optionele argument van de omgeving drukt een naam af na de kop, dus `\begin{stelling}[Optionele naam]` levert iets op als Stelling 2.4 (Fubini). De 'proof'-omgeving drukt een cursieve proefkop af en sluit af met de markering voor het einde van de proef, waarbij het kleine vierkant gelijk rechts staat.

`\qedhere` herpositioneert dat vierkantje als het bewijs niet eindigt in gewone tekst. Als de laatste regel van een bewijs een weergegeven vergelijking is, valt de automatische markering op een lege regel eronder. Als u '\qedhere' op het scherm schrijft, wordt het kwadraat op de eigen regel van de vergelijking geplaatst. Wanneer een bewijs eindigt in platte tekst, zoals in het voorbeeld, is het commando onschadelijk maar onnodig.

Stellingblokken zijn net als alle andere genummerde objecten, dus `\label{thm:main}` in de omgeving en `Stelling~\ref{thm:main}` in de tekst werken met de gebruikelijke regels voor twee doorgangen, beschreven in [getallen en verwijzingen naar vergelijkingen](/learn/number-equations/). De veel voorkomende declaratiefout is dat elke omgeving onder `\theoremstyle{plain}` wordt geplaatst, waardoor definities van meerdere alinea's cursief worden weergegeven. Houd definities en voorbeelden onder de stijl 'definitie'.