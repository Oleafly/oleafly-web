---

title: "Git voor onderzoekspapers: wat echt werkt met coauteurs"
description: "Negeer regels, hoofdstukeigendom, commit-berichten, privé-afstandsbedieningen en hoe een onderzoekswerkruimte met echte Git, forks en AI-controlepunten ervoor zorgt dat papieren kunnen worden hersteld zonder van Git een tweede baan te maken."
date: 2026-07-10
tags: [git, collaboration, workflow, local-first]
---

Onderzoekers gebruiken Git al voor code. Papieren lijken veel op code: platte tekst,
omvat, bouw rommel. Een manuscript in een repo plaatsen is minder vreemd dan het
klinkt als je het een keer hebt geprobeerd.

## Negeer de rommel

Een verstandige `.gitignore` voor LaTeX:

```text
*.aux
*.log
*.out
*.toc
*.synctex.gz
*.bbl
*.blg
*.fdb_latexmk
*.fls
```

Commit `.tex`, `.bib`, cijfers die u niet opnieuw kunt genereren, en het klassenbestand if
de universiteit vereist dit. Sla het vastleggen van elke PDF over, tenzij het tijdschrift dat wil
een binair bestand in het archief.

Als je editor Git voor je start, controleer dan of je caches en PDF hebt gemaakt
tussenproducten worden genegeerd. Er komt een stroom lege "ruis" uit aux-bestanden
maakt het logboek waardeloos. Als je stopt met lezen, kan de geschiedenis je niet helpen
jij als er iets kapot gaat.

## Eigen bestanden, geen regels

Twee mensen in dezelfde paragraaf voegen pijn samen. Geef de voorkeur aan een hoofdstuk of sectie
eigendom. Gebruik pull-aanvragen wanneer de groep groot genoeg is om te beoordelen
helpt eigenlijk.

Live typen door meerdere gebruikers in één buffer is een ander hulpmiddel (browser LaTeX
redacteuren). Git-samenwerking is langzamer en explicieter: branch, push, review.
Dat werkt goed als je een papieren spoor nodig hebt. Wanneer drie mensen het
vanmiddag samen abstracteren, iets anders kiezen.

## Commit-berichten die je in de toekomst kunt lezen

"Repareer dingen" is binnen drie maanden nutteloos. "Herschrijf gerelateerd werk aan transformatoren"
is genoeg. Twee lagen helpen:

1. Mijlpalen die u noemt: sectieconcepten, indiening, gereed voor de camera.
2. Veiligheidscontrolepunten: frequente snapshots, zodat een slechte middag omkeerbaar is.

Als uw editor een controlepunt uitvoert na een succesvolle compilatie of nadat u bent gestopt met typen,
behandel die als een vloer, niet als de enige geschiedenis. Schrijf een echt bericht wanneer a
sectie komt terecht of een concept gaat naar coauteurs.

## Privé-afstandsbedieningen

Niet-gepubliceerd werk hoort thuis in privé GitHub- of GitLab-projecten. Afstuderen en
Lab-verplaatsingen zijn wanneer mensen de toegang verliezen tot willekeurige cloudeditor-accounts. Een afstandsbediening
u beheert is de back-up.

Druk op als je netwerk hebt. Wacht niet tot de avond vóór een deadline
ontdek dat de afstandsbediening nooit is aangesloten.

## Lokaal compileren, back-up op afstand

De meeste weken ziet de lus er als volgt uit: offline bewerken en compileren, pushen wanneer je
netwerk hebben. U hebt geen live browsersessie nodig om alleen maar te typen.

Wat je wilt van tooling:

- elk project al een echte Git repo (geen vergeten `git init`)
- automatische controlepunten na succesvolle compilaties en inactieve bewerkingen
- fase, side-by-side diff, weggooien en herstellen met één klik in dezelfde app als
  de editor en PDF
- GitHub optioneel voor afstandsbedieningen; geschiedenis werkt al op schijf
- splits een heel project met volledige geschiedenis op voor een parallel experiment (riskant
  methoden herschrijven, alternatief hervatten) terwijl de inzendingskopie blijft staan
- AI-bewerkingen, als je ze inschakelt, checkpoint eerst en land er alleen doorheen
  goedkeuring verschillen

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) is zo gebouwd
manier: gewone mappen, echte `.git`, automatische controlepunten die de bestanden een naam geven
verplaatst, Broncontrolepaneel met bewerkbare werkboom-diffs, herstel na
bevestigen, optioneel GitHub publiceren/duwen/trekken met vooruit/achter, projectvork met
stamboom in de bibliotheek. Terminal `git log` komt overeen met de app omdat het de
dezelfde opslagplaats. Het AI-controlepunt, als je er een gebruikt, komt daar terecht
geschiedenis waaruit u herstelt.

Je kunt delen hiervan benaderen met een zorgvuldige gewoonte en een aparte Git
klant. Het verschil is of geschiedenis iets is dat je opzet en onthoudt,
of iets wat de onderzoekswerkruimte op de eerste dag aanneemt naast SyncTeX en
compileren.

## Wat Git niet oplost

Git zal geen commentaar vervangen van een PI die alleen PDF's opent, en dat zal ook niet gebeuren
beslissen wiens samenvatting juist is. Binaire cijfers vloeien nog steeds slecht samen, dus houd vol
ze zijn klein, geven de voorkeur aan percelen die je kunt regenereren en komen vroegtijdig tot overeenstemming over het eigendom.

Voor coauteurs die Git weigeren, exporteer PDF of DOCX ter beoordeling en behoud `.tex` als
bron van waarheid. Zie
[coauteurs die alleen Word spreken](/learn/collaborator-uses-word/).

## Een minimale oefening

1. Eén repo per paper of scriptie, niet één mega-repo voor je hele carrière.
2. `.gitignore` voor build-rommel op de eerste dag.
3. Hoofdstukeigendom wanneer meer dan één persoon bewerkingen uitvoert.
4. Milestone commiteert zich met leesbare berichten.
5. Privé-afstandsbediening verbonden voordat het werk er toe doet.
6. Herstellen is expres één keer getest, dus de eerste noodsituatie is niet de eerste
   herstellen.

Als je je aan die lijst houdt, verdwijnt Git for papers meestal in de
achtergrond. Je wilt saaie betrouwbaarheid vóór een deadline, geen tweede hobby.