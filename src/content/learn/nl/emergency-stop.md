---

title: "Noodstop en wegloopruzie"
description: "Fatale afbrekingen vanwege ontbrekende uiteinden, beugels of slechte inclusies."
category: "log-literacy"
order: 6
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Noodstop en op hol geslagen argument

## Het symptoom

De compiler sterft regelrecht. Het logboek eindigt met `! Noodstop.` of toont `Runaway argument?` gevolgd door een lange strook van uw eigen tekst, vaak met een begeleidende regel zoals `Bestand beëindigd tijdens het scannen met \textbf` of `Paragraaf eindigde voordat \foo compleet was`. In tegenstelling tot de meeste LaTeX-fouten is er helemaal geen PDF en verwijst het gerapporteerde regelnummer vaak naar het einde van het bestand in plaats van naar de echte fout.

## Waarom het gebeurt

Beide berichten komen voort uit hetzelfde probleem: TeX begon iets te lezen dat gesloten moest worden en bereikte het einde van de invoer voordat het sluitingstoken arriveerde. Wanneer je `\textbf{` schrijft, verzamelt TeX alles tot aan het overeenkomende `}` als argument. Als die accolade nooit komt, blijft TeX tekst doorslikken, via paragrafen en secties, totdat het bestand op is. "Runaway argument" is TeX die je laat zien wat het heeft ingeslikt. "Noodstop" is dat TeX het opgeeft omdat het niet verder kan zonder het ontbrekende stukje. Een ontbrekend `\end{document}`, een niet-gesloten omgeving, of een `\input` van een bestand dat niet bestaat, produceert dezelfde terminalstatus.

## Hoe u de echte locatie kunt vinden

Vertrouw het lijnnummer niet; het markeert waar TeX geen input meer had, niet waar de onbalans begon. Lees in plaats daarvan het blok 'Runaway argument?' in het logboek. De eerste paar woorden van de ingeslikte tekst vertellen je waar in het document de runaway begon, en de regel 'Bestand eindigde tijdens het scannen met gebruik van ...' noemt het commando waarvan het argument nooit werd gesloten. Zoek naar dat commando in de buurt van de geciteerde tekst en tel de accolades.

Als het logboek niet nuttig is, doorzoekt u het document binair. Geef commentaar op de tweede helft van de hoofdtekst (of plaats deze in `\iffalse ... \fi`) en compileer opnieuw. Als de fout verdwijnt, zit het probleem in de helft die u hebt verwijderd; blijf halveren totdat de foutieve paragraaf is geïsoleerd. Dit klinkt grof, maar in een groot document wordt in een handvol compilaties een enkele ontbrekende accolade aangetroffen.

## De gebruikelijke verdachten

Controleer of er een `{` zonder `}` aanwezig is in de buurt van vetgedrukte, cursieve, voetnoten en bijschriften, aangezien deze opdrachten gebruik maken van accolades die u met de hand typt. Controleer of elke `\begin{...}` een overeenkomende `\end{...}` heeft met dezelfde omgevingsnaam. Bevestig dat het bestand eindigt met `\end{document}` en dat elke `\input` en `\include` een bestand benoemt dat op dat pad bestaat. De redactie helpt hier: Olafly markeert overeenkomende accolades en omgevingsparen terwijl je typt, waardoor de meeste hiervan worden opgevangen voordat de compiler ze ooit ziet.