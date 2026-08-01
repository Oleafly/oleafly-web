---

title: "Kies een editor die u daadwerkelijk wilt openen"
description: "Wat beginners nodig hebben: een compiler, preview, SyncTeX en bestanden die op schijf blijven."
category: "open-the-loop"
order: 6
level: "beginner"
tags: ["tools"]
featured: true
updated: 2026-07-25
---

# Kies een editor die u daadwerkelijk wilt openen

De beste LaTeX-editor voor een beginner is niet de krachtigste. Het is degene die u met de minste wrijving van een leeg bestand naar een gecompileerde PDF brengt. Vroeg compileren is vaak belangrijker dan welke functie dan ook. Vier mogelijkheden dekken wat u op de eerste dag nodig heeft.

Ten eerste zou het compileren moeten werken zonder handmatig een TeX-distributie van meerdere gigabytes te installeren. Ten tweede wilt u een zij-aan-zij PDF-voorbeeld met SyncTeX, zodat een klik in de PDF naar de overeenkomende bronregel en terug springt. Ten derde moeten je bestanden gewoon '.tex' op schijf staan, zodat je ze kunt zippen, e-mailen of in Git kunt zetten zonder een exportstap. Ten vierde moeten fouten binnenkomen als leesbare berichten, en niet alleen als een onbewerkt TeX-logboek.

## De realistische opties

| Redacteur | Opstelling | Werkt offline | Opmerkingen |
| --- | --- | --- | --- |
| Olifant | Download de app | Altijd bewerken; compileert gebruik cachepakketten | Gebundelde engine, Git-geschiedenis, optionele AI met uw eigen sleutel |
| TeXShop / TeXworks | Installeer eerst een TeX-distributie | Ja | Minimaal en betrouwbaar |
| VS Code + LaTeX-workshop | Installeer eerst een TeX-distributie | Ja | Past goed als je al in VS Code | werkt
| Op de achterzijde | Maak een account aan in de browser | Beperkt | Geen installatie; projecten live op hun servers |

De middelste twee rijen delen verborgen kosten: voordat de editor nuttig wordt, installeer en onderhoud je TeX Live of MiKTeX zelf. Dat is waar veel beginners blijven hangen. De browseroptie verwijdert de instellingen, maar verplaatst uw bestanden naar een account. De afwegingen worden uitgebreider behandeld in [browserproject versus map op schijf](/learn/overleaf-vs-local/).

## Een redelijke standaard

Als je lokale bestanden wilt zonder TeX-beheer, begin dan met [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest): de compiler wordt in de app geleverd en downloadt pakketten de eerste keer dat een document ze nodig heeft. Welke editor je ook kiest, koppel hem aan de [eerste document-tutorial](/learn/first-document/) en houd de [cheatsheet](/learn/cheatsheet/) bij de hand. De editor doet er minder toe dan vandaag uw eerste pagina samenstellen.