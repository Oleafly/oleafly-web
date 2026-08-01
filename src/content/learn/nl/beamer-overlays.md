---

title: "Onthul lijnen met een klik"
description: "Overlay-specificaties, alleen pauzeren, zonder het te overdrijven."
category: "on-stage"
order: 2
level: "intermediate"
tags: ["beamer"]
featured: false
updated: 2026-07-25
---

# Onthul lijnen bij klikken

Een Beamer-frame kan uit meer dan één fysieke dia bestaan. Wanneer u de opsommingstekens één voor één weergeeft, genereert Beamer verschillende PDF-pagina's uit hetzelfde frame, waarbij elke pagina iets meer laat zien. Als u door de PDF-viewer gaat, loopt u er doorheen. Deze gegenereerde pagina's worden overlays genoemd. Door ze te leren beheersen, verandert een statisch kaartspel in een tempogesprek.

```latex
\begin{itemize}
 \item<1-> Always visible from slide 1
 \item<2-> Appears on slide 2
 \item<3-> Appears on slide 3
\end{itemize}

\pause % simpler step-through
```

## Overlay-specificaties

De notatie tussen de hoekhaken na `\item` is een overlay-specificatie. Hierin staat op welke overlays van het frame het item zichtbaar is. Het nummer is de overlay-index binnen dit frame, en het koppelteken maakt er een bereik van: `<2->` betekent vanaf overlay 2, dus het item verschijnt op de tweede stap en blijft staan. Een kale `<2>` zou alleen overlay 2 betekenen, dus het item zou verschijnen en vervolgens verdwijnen. Je kunt ook lijsten opgeven als `<1,3>`. Beamer maakt evenveel overlays als het hoogst genoemde aantal, zodat het frame hierboven drie PDF-pagina's oplevert.

Overlay-specificaties werken op meer dan alleen items. Met `\textbf<2->{sleutelterm}` wordt de tekst vetgedrukt vanaf overlay 2, en `\only<2>{...}` neemt de inhoud alleen op overlay 2 op. Omdat `\only` de inhoud volledig verwijdert op andere overlays, wordt de omringende lay-out opnieuw geplaatst, waardoor het een hulpmiddel wordt om de ene figuur door een andere op dezelfde plek te vervangen: geef twee `\only` blokken dezelfde positie en opeenvolgende specificaties. Zijn neef `\uncover` reserveert de ruimte terwijl de inhoud wordt verborgen, zodat er niets verschuift.

## Het eenvoudigere hulpmiddel

`\pauze` splitst het frame op dat punt. Alles ervoor wordt onmiddellijk weergegeven, alles erna wacht op de volgende stap, en herhaalde `\pause`-opdrachten creëren opeenvolgende stappen. Het heeft geen cijfers en geen planning nodig, dus het is de juiste standaard voor een duidelijke onthulling van boven naar beneden. Streef alleen naar expliciete specificaties als de onthullingsvolgorde afwijkt van de bronvolgorde, of wanneer items moeten verschijnen en verdwijnen.

Een handige sneltoets wanneer elk item in een lijst op volgorde moet staan ​​is `\begin{itemize}[<+->]`, waarmee automatisch oplopende overlaynummers worden toegewezen.

## Beheersing

Overlays zijn gemakkelijk te overmatig gebruiken. Een kaartspel waarin elke kogel op elke dia één voor één inklikt, put de presentator (constant klikken) en het publiek (niet vooruit lezen) uit. Reservestapjes onthullen de weinige plaatsen waar pacing een argument met zich meebrengt, zoals het opbouwen van een afleiding of het contrasteren van voor en na. Elke overlay is een echte PDF-pagina, dus de hand-out kopieert een ballon, tenzij u compileert met `\documentclass[handout]{beamer}`, waardoor elk frame wordt samengevouwen tot de uiteindelijke overlay. De basisbeginselen van het frame worden behandeld in [een eerste Beamer-deck](/learn/beamer-basics/).