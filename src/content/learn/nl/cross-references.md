---

title: "Wijs naar andere delen van de PDF"
description: "label en ref, plus slimef voor automatische namen."
category: "paper-bones"
order: 5
level: "beginner"
tags: ["structure", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Wijs naar andere delen van de PDF

Met de hand "zie figuur 3" typen is een belofte die u niet kunt nakomen. Voeg één cijfer eerder in het papier toe en elk met de hand getypt cijfer erna is fout. LaTeX lost dit op met een tweeledig mechanisme: `\label` koppelt een naam naar keuze aan een genummerd ding, en `\ref` drukt het nummer af waar dat ding uiteindelijk mee eindigde. Je verwijst naar namen en de compiler houdt de cijfers eerlijk.

## Etiket en ref

```latex
\section{Methods}\label{sec:methods}
\begin{equation}\label{eq:main} ... \end{equation}
\begin{figure}
 ...
 \caption{...}\label{fig:pipeline}
\end{figure}

See Section~\ref{sec:methods}, Eq.~\eqref{eq:main}, and Figure~\ref{fig:pipeline}.
```

`\label{sec:methods}` registreert het meest recent toegewezen nummer, hier de sectie, onder de sleutel `sec:methods`. Later drukt `\ref{sec:methods}` dat getal af, en `\eqref` is de amsmath-variant die de haakjesconventie voor vergelijkingen toevoegt, waarbij "(1)" wordt afgedrukt in plaats van "1".

Twee details in dit voorbeeld zijn van groot belang. Ten eerste moet binnen een figuur het label na `\caption` komen, omdat het bijschrift de stappen in de cijferteller is; een label dat ervoor wordt geplaatst, neemt in plaats daarvan stilletjes het huidige sectienummer op. Ten tweede is de `~` in `Figuur~\ref{...}` een niet-afbrekende spatie, die het woord en het nummer ervan op dezelfde regel houdt in plaats van dat "Figuur" de ene regel eindigt en "3" de volgende begint.

De voorvoegsels `sec:`, `fig:` en `eq:` zijn pure conventie. LaTeX heeft ze niet nodig, maar ze maken sleutels leesbaar en laten de editor uw labels automatisch groeperen op soort.

## Waarom zie je ??

Bij de eerste compilatie na het toevoegen van een label, wordt met `\ref` `??` afgedrukt. Getallen worden opgelost via het `.aux`-bestand dat tijdens de vorige run is geschreven, dus een nieuw label heeft nog één compiler nodig om te verschijnen; [waarom je meer dan eens compileert](/learn/compile-to-pdf/) legt het mechanisme uit. Een `??` die twee opeenvolgende compilaties overleeft, betekent bijna altijd dat de sleutel in `\ref` niet overeenkomt met de sleutel in `\label`.

## slimmeef schrijft het woord voor jou

Met slimef (laden na hyperref):

```latex
\usepackage{cleveref}
\cref{fig:pipeline}
```

`\cref{fig:pipeline}` print "Figuur 3", inclusief de typenaam, en past zich aan als het label in plaats daarvan een tabel of een vergelijking blijkt te zijn. `\Cref` wordt met hoofdletters gebruikt voor het begin van de zin, en `\cref{eq:a,eq:b,eq:c}` comprimeert een lijst tot een bereik. Let op de laadvolgorde: Cleveref is een van de weinige pakketten die na [hyperref](/learn/hyperlinks/) moet komen, het omgekeerde van de gebruikelijke regel. Adopteer het vroeg. Het achteraf inbouwen van `\cref` in een papier vol met handgeschreven "Figuur~\ref"-zinnen is vervelend.