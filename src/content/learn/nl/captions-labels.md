---

title: "Bijschriften die overeenkomen met het nummer"
description: "Plaats een label na het onderschrift, zodat het nummer blijft hangen."
category: "floats-and-ink"
order: 4
level: "beginner"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Bijschriften die overeenkomen met het nummer

Kruisverwijzingen zijn een van de dingen die LaTeX beter doet dan een tekstverwerker. U typt "Figuur 3" nooit met de hand. In plaats daarvan plakt u een label op de figuur en laat u LaTeX het nummer overal invullen waar het wordt vermeld, zodat de cijfers correct blijven, ongeacht hoeveel u opnieuw rangschikt, invoegt of verwijdert. Het mechanisme kent één regel waar bijna iedereen minstens één keer over struikelt: de volgorde van `\caption` en `\label` is van belang.

## Waarom de volgorde ertoe doet

Het `\caption` commando voert twee taken uit. Het drukt de bijschrifttekst onder uw figuur of tabel af en zet de teller in beweging, waardoor deze vlotter in Figuur 3 verandert. Het `\label`-commando doet iets dommers dan mensen verwachten: het registreert welk nummer het meest recentelijk is toegewezen, wat dat ook mag zijn. Het heeft geen idee dat het "in een figuur" zit. Het label moet dus na het onderschrift komen:

```latex
\caption{A neat diagram.}
\label{fig:neat}
```

Als u `\label` voor `\caption` plaatst, heeft het bijschrift nog geen stappen in de cijferteller gezet, dus neemt het label het meest recente nummer van ergens anders over, meestal de huidige sectie. Uw tekst zegt dan "zie figuur 2.4" terwijl de figuur eigenlijk figuur 7 is. Dit is het klassieke symptoom: verwijzingen die verwijzen naar sectienummers in plaats van figuurnummers betekenen bijna altijd dat een label te vroeg is geplaatst. De veiligste gewoonte is om elke keer '\label' op de regel te schrijven die onmiddellijk volgt op '\caption', zowel in figuren als in tabellen.

## Verwijzend naar het etiket

In uw tekst schrijft u de verwijzing als volgt:

```latex
Figure~\ref{fig:neat}
```

`\ref{fig:neat}` breidt zich uit tot het kale getal, en u geeft zelf het woord "Figuur" in. De `~` ertussen is een niet-afbrekende spatie, waardoor LaTeX nooit een regel na "Figuur" kan beëindigen en de volgende met "3" kan beginnen. Voorvoegsels zoals `fig:`, `tab:`, `sec:` en `eq:` zijn pure conventies, LaTeX interpreteert ze niet, maar ze houden uw labels leesbaar en voorkomen dat een figuur en een tabel per ongeluk een naam delen.

Merk op dat `\pageref{fig:neat}` het paginanummer geeft waarop het figuur terechtkwam, wat handig is in lange documenten waar een float ver van de vermelding af kan wijken. Voor een volledige rondleiding door de verwijzingsopdrachten, zie [elke opdracht uitgelegd](/learn/every-command-explained/).

## Twee keer compileren en andere valkuilen

Verwijzingen worden opgelost tijdens compilerruns: de eerste doorgang schrijft labelposities naar het `.aux`-bestand, en de tweede doorgang leest ze terug. Tot die tweede passage worden verwijzingen afgedrukt als vetgedrukte vraagtekens, dus `??` in uw PDF betekent meestal alleen maar "opnieuw compileren", niet dat er iets kapot is. De meeste redacteuren, waaronder Oleafly, voeren de passen automatisch opnieuw voor u uit. Als `??` herhaalde compilaties overleeft, bestaat het label niet. Waarschijnlijke oorzaken zijn een typfout in de labelnaam, of een `\caption` die u hebt verwijderd terwijl u het `\label` achterliet.