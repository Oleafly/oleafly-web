---

title: "Commando of omgeving?"
description: "Macro's nemen argumenten; omgevingen wrap-regio's."
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Commands vs environments'
  questions:
    - prompt: 'What makes something a LaTeX command?'
      choices:
        - 'It always wraps many pages'
        - 'A backslash name that substitutes something in place, often with brace arguments'
        - 'It has to live in a .bib file'
        - 'It can''t take optional arguments'
      answer: 'B'
      level: beginner
    - prompt: 'What defines an environment?'
      choices:
        - 'A matching \begin{name} ... \end{name} pair around a region'
        - 'Any bold text'
        - 'Only math mode'
        - 'A single optional star'
      answer: 'A'
      level: beginner
    - prompt: 'Which of these is an environment?'
      choices:
        - '\textbf{hello}'
        - '\begin{center} ... \end{center}'
        - '\cite{knuth84}'
        - '\frac{a}{b}'
      answer: 'B'
      level: beginner
    - prompt: 'What does \begin{itemize} ended by \end{document} usually mean?'
      choices:
        - 'itemize is banned in article'
        - 'You opened an environment and never closed it'
        - 'You need more RAM'
        - 'The bibliography is empty'
      answer: 'B'
      level: beginner
    - prompt: 'Why write \LaTeX{} is fun instead of \LaTeX is fun?'
      choices:
        - 'Every command needs braces'
        - 'Many commands eat the following space; empty braces keep the space'
        - 'It turns hyperref on'
        - 'It forces math mode'
      answer: 'B'
      level: intermediate
---

# Commando of omgeving?

Alles wat u in LaTeX typt, behalve gewone tekst, kan twee vormen aannemen: een opdracht of een omgeving. Het onderscheid klinkt academisch totdat je je eerste foutmelding tegenkomt. De helft van de klachten van LaTeX gaat over het feit dat het ene wordt gebruikt waar het andere thuishoort. Door te leren zien naar welke vorm je kijkt, worden zowel de documentatie als de fouten leesbaar.

## Commando's

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

Een opdracht is een backslash gevolgd door een naam, en voert een vervanging uit op het punt waar deze verschijnt. `\textbf{argument}` neemt één argument tussen accolades en zet het vetgedrukt; het effect begint en eindigt met de beugels. Commando's kunnen verschillende accolade-argumenten aannemen, en vele accepteren ook een optioneel argument tussen vierkante haakjes ervoor, zoals in `\documentclass[11pt]{article}`.

De eerste twee regels laten zien dat opdrachten iets zijn dat je kunt maken. `\newcommand{\foo}{bar}` definieert een nieuw commando met de naam `\foo` waarvan de uitbreiding de tekst `bar` is, en vanaf dat moment levert het typen van `\foo` ergens `bar` op. Dit is het mechanisme achter [aangepaste macro's](/learn/custom-commands/), en het is ook hoe pakketten werken: een pakket is grotendeels een bestand met opdrachtdefinities.

Eén eigenaardigheid die het waard is om vroeg te weten: een commando als `\LaTeX` slikt de spatie erna in, dus `\LaTeX is leuk` drukt de woorden achter elkaar af. Schrijf `\LaTeX{} is leuk` of `\LaTeX\ is` om de spatie te behouden.

## Omgevingen

```latex
\begin{center}
 Centered block
\end{center}
```

Een omgeving plaatst een gebied van het document tussen een overeenkomend `\begin{...}` en `\end{...}` paar, en past zijn gedrag toe op alles daarbinnen. Hier centreert de 'centrum'-omgeving elke regel van het blok. Omgevingen kunnen worden genest, op voorwaarde dat ze sluiten in de omgekeerde volgorde waarin ze zijn geopend, en ze kunnen ook argumenten aannemen: `\begin{tabular}{ll}` opent een tabel en geeft deze een kolomspecificatie door.

Omdat omgevingen in balans moeten zijn, falen ze op een onderscheidende manier. Een fout zoals `\begin{itemize} beëindigd door \end{document}` betekent dat een omgeving is geopend en nooit is gesloten. Zoek de ontbrekende `\end`; staar niet naar de regel met de foutnamen.

## De vuistregel

Als het een regio omvat met een duidelijk begin en einde, is het waarschijnlijk een omgeving. Als het een kleine vervanging of een omschakeling is, is het een commando. De twee vormen overlappen elkaar zelfs: elke omgeving `foo` wordt geïmplementeerd als een commandopaar `\foo` en `\endfoo` onder de motorkap. Voor een rondleiding door de commando's en omgevingen die je het meest zult tegenkomen, zie [elk commando uitgelegd](/learn/elke-command-explained/), of probeer beide vormen in de [live speeltuin](/live/).