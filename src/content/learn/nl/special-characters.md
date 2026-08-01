---

title: "Personages die de bron doorbreken"
description: "Hoe u procent, dollar, ampersand, onderstrepingsteken en accolades typt zonder de lijn te verbreken."
category: "type-and-shape"
order: 7
level: "beginner"
tags: ["formatting", "errors"]
featured: false
updated: 2026-07-25
---

# Tekens die de bron breken

LaTeX reserveert een handvol alledaagse karakters als syntaxis, en als je er één typt waarbij je het letterlijke karakter bedoelt, stopt het compileren of wordt de uitvoer stilzwijgend verminkt. Elk gereserveerd personage heeft een ontsnappingsmogelijkheid en de hele set past in één tafeltje.

| Char | Code |
| --- | --- |
| % | `\%` |
| $ | `\$` |
| & | `\&` |
| # | `\#` |
| _ | `\_` |
| { } | `\{` `\}` |
| ~ | `\textasciititilde` |
| \ | `\textbackslash` |

## Wat de personages onontkoombaar doen

`%` begint een commentaar, dus alles vanaf het commentaar tot het einde van de regel wordt weggegooid. Dat is de gebruikelijke "mijn zin verdwenen" bug: schrijf 50% in een rapport en de rest van de regel verdwijnt zonder enige fout. `$` schakelt de wiskundige modus in, zodat een verdwaalde tekst stilletjes cursief maakt of fouten vermeldt die ver van de typefout verwijderd zijn. `&` is het uitlijningstabblad in tabellen en `uitlijn`-blokken; buiten hen mislukt het met "Misplaatste uitlijningstab". `#` markeert macroparameters. `_` en `^` behoren tot de wiskundemodus, en in tekst verhogen ze "Missing $ ingevoegd", wat [zijn eigen les heeft] (/learn/missing-dollar/). `~` is een niet-afbrekende spatie, dus een tilde die in een URL of pad wordt getypt, wordt stilletjes een spatie. `\` start elk commando en daarom kan het zichzelf niet ontlopen: `\\` is een regeleinde en het letterlijke teken heeft `\textbackslash` nodig.

## Ontsnappen in de praktijk

Voor de eerste zes tekens is de escape een backslash-voorvoegsel, en deze werkt hetzelfde binnen andere opdrachten:

```latex
The run reached 87\% accuracy; results are in
\texttt{results\_v2.csv}, and the job cost \$40.
```

Merk op dat het onderstrepingsteken zelfs binnen `\texttt` moet worden geëscaped. De twee ontsnappingen in commandostijl, `\textasciitilde` en `\textbackslash`, moeten worden gevolgd door `{}` of een spatie als er daarna een letter komt, zodat de naam van het commando het volgende woord niet opslokt.

Voor hele stukken code, paden of URL's kunt u de escape-functie helemaal overslaan. `\verb|...|` en de `verbatim`-omgeving drukken hun inhoud precies af zoals getypt, waarbij elk speciaal teken is uitgeschakeld, en `\url{...}` van het `url`-pakket verwerkt links compleet met tildes.

De karakters die het hardst bijten, zijn degenen die stilletjes falen, en `%` voert die lijst aan. Geplakte tekst is de gebruikelijke boosdoener: URL's, shell-opdrachten en financiële cijfers bevatten allemaal gereserveerde tekens. Wanneer een zin ontbreekt in de PDF, zoek dan eerst in die regel van de bron naar een kale `%`.