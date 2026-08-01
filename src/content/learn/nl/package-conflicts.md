---

title: "Pakketten die met elkaar vechten"
description: "hyperref laatste, slimef na, verouderde paren, minimale voorbeelden."
category: "runtime"
order: 5
level: "advanced"
tags: ["packages", "errors"]
featured: false
updated: 2026-07-25
---

# Pakketten die met elkaar vechten

Het staat LaTeX-pakketten vrij om elkaars opdrachten te herdefiniëren, en velen doen dit opzettelijk. Zo verandert 'hyperref' elke kruisverwijzing in een link. Het betekent ook dat twee pakketten elk hetzelfde commando kunnen patchen met incompatibele aannames, en het resultaat varieert van een regelrechte fout zoals 'Commando \voetnoot al gedefinieerd' of 'Optieclash voor pakket xcolor' tot uitvoer die stilletjes verkeerd is. Conflicten komen bijna altijd naar voren direct nadat u een pakket aan een eerder werkende preambule hebt toegevoegd, wat ook de grootste aanwijzing is.

## De laadvolgorde is het halve werk

Veel conflicten worden puur op bestelling opgelost, omdat het later geladen pakket het laatste woord krijgt. De belangrijkste regel: laad `hyperref` aan het einde van de preambule. Het herschrijft grote delen van LaTeX's kruisverwijzingsmachinerie, en pakketten die daarna worden geladen, kunnen deze patches ongedaan maken. Een korte lijst met uitzonderingen zal nog later komen, en degene die je daadwerkelijk zult tegenkomen is `cleveref`, die is ontworpen om bovenop `hyperref` te staan ​​en daarna moet worden geladen:

```latex
\usepackage{graphicx}
\usepackage{amsmath}
% ... everything else ...
\usepackage{hyperref}
\usepackage{cleveref} % after hyperref, by design
```

Als de documentatie van een pakket een positie specificeert ten opzichte van een ander pakket, geloof dat dan. Deze aantekeningen bestaan ​​omdat iemand het conflict dat u gaat krijgen al heeft meegemaakt.

## Verouderde pakketten en hun vervangingen

Sommige conflicten komen voort uit het laden van een dood pakket naast zijn opvolger. Combineer `epsfig` niet met `graphicx`, `subfigure` met `subcaption`, of de oude `times` en `mathptmx` shims met moderne lettertypepakketten zoals `newtxtext`. Oude sjablonen zijn de gebruikelijke bron: ze laden wat actueel was toen de sjabloon werd geschreven, en je voegt het moderne equivalent erbovenop toe. Verwijder het verouderde exemplaar en bewaar het vervangende exemplaar. Het `nag`-pakket kan verouderd gebruik voor u markeren tijdens het compileren.

## Optie botst

'Optieclash voor pakket X' betekent dat het pakket tweemaal met verschillende opties is geladen, vaak één keer door uw documentklasse achter uw rug om. Je kunt het niet opnieuw laden met nieuwe opties, maar je kunt wel opties injecteren voordat iemand het laadt: plaats `\PassOptionsToPackage{table}{xcolor}` vóór `\documentclass`, en de opties worden samengevoegd in het laadproces dat het eerst plaatsvindt.

## Isoleer met een minimaal voorbeeld

Als de oorzaak niet duidelijk is, bouw dan een minimaal werkend voorbeeld: een document dat alleen `\documentclass`, de twee verdachte pakketten bevat, en een `\begin{document}...\end{document}` met één regel tekst. Als de fout zich herhaalt, wijzigt u de laadvolgorde en opties totdat dit niet meer het geval is. Als het zich niet voortplant, voeg dan je andere pakketten in tweeën toe totdat het terugkeert. Deze binaire zoekopdracht komt samen in een paar compilaties en geeft je een duidelijk paar om naar te zoeken. Dezelfde techniek redt overgeërfde preambules, zoals beschreven in [University class files that will not compile](/learn/fix-broken-template/).