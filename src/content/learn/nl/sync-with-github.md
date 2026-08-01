---

title: "Zet het papier op GitHub"
description: "Initiëren, aux-bestanden negeren, privéopslagplaatsen, gewoonten die samenvoegingen van co-auteurs gezond houden."
category: "local-studio"
order: 3
level: "intermediate"
tags: ["git", "github"]
featured: false
updated: 2026-07-25
---

# Zet het papier op GitHub

Een LaTeX-manuscript is platte tekst, waardoor het ideaal is voor Git. Elk concept wordt een commit waar je naar terug kunt keren, elke wijziging is zichtbaar als een verschil op regelniveau, en GitHub geeft je een externe kopie plus een manier voor coauteurs om de huidige status op te halen. Niets van dit alles vereist geavanceerde Git. Een paper heeft misschien vijf commando's nodig die consequent worden gebruikt.

## De initiële installatie

```bash
git init
# add a .gitignore for *.aux *.log *.out *.toc *.synctex.gz
git add main.tex refs.bib figures/
git commit -m "Initial manuscript"
gh repo create my-paper --private --source=. --push
```

Voer dit één keer uit in de projectmap. De stap `.gitignore` is belangrijker dan het lijkt. Elke compilatie regenereert de bestanden `.aux`, `.log`, `.out`, `.toc` en `.synctex.gz`, en het committen ervan begraaft je echte wijzigingen onder machinegeluid en creëert zinloze merge-conflicten tussen coauteurs. Houd alleen bij wat u heeft geschreven: de `.tex`-bronnen, de `.bib`-database, cijfers en eventuele klasse- of stijlbestanden die de locatie u heeft gegeven. De PDF is ook een buildproduct. De meeste teams laten het achterwege en bouwen het lokaal opnieuw op, hoewel het toevoegen van een exemplaar aan een getagde release een redelijke manier is om een ​​ingediende versie te bevriezen. Houd de repository privé totdat het werk openbaar is. Een ongepubliceerd manuscript is niet iets om te indexeren.

## Gewoonten die coauteurs gezond houden

Breng voor elke commit één logische wijziging aan, zoals "herzie de intro van sectie 3" of "voeg ablatietabel toe". De geschiedenis leest dan als een verhaal van de krant, en een slechte bewerking kan worden teruggedraaid zonder bijkomende schade. Trek voordat je aan een schrijfsessie begint en duw als je stopt. Fusieconflicten groeien naarmate de tijd die takken apart doorbrengen, toeneemt. Forceer nooit een gedeelde tak als de co-auteurs eraan hebben getrokken: dat herschrijft de geschiedenis onder hun voeten. Houd grote binaire artefacten (datasets, video's) uit de papieren opslagplaats. Link naar een archief of gebruik een aparte datarepository. Git bewaart elke versie van elk binair bestand voor altijd.

Eén gewoonte die specifiek is voor LaTeX: het schrijven van één zin per bronregel maakt diffs aanzienlijk leesbaarder, omdat een bewerking van één woord wordt weergegeven als een wijziging van één regel in plaats van als een opnieuw geplaatste alinea.

## Hoe Oleafly daarin past

Elk Oleafly-project is een gewone map op schijf, dus deze opdrachten werken er onveranderd op. De app kan ook automatisch een Git-commit aanmaken na elke succesvolle compilatie, waardoor je een fijnmazig vangnet hebt tussen je doelbewuste commits. Zie [Git-geschiedenis](/docs/git-history/). Voor samenwerkingspatronen die hier bovenop zijn gebouwd, inclusief patchuitwisseling en hoofdstukeigendom, zie [Coauteur zonder live cursor](/learn/offline-collaboration/).