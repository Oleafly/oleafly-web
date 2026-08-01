---

title: "Kürzere Wartezeiten auf das PDF"
description: "Entwurfszahlen, nur einschließen, TikZ externalisieren, lokale CPU."
category: "long-form"
order: 5
level: "intermediate"
tags: ["thesis", "compile"]
featured: false
updated: 2026-07-25
---

# Kürzere Wartezeit auf das PDF

Eine Abschlussarbeit, deren Erstellung neunzig Sekunden dauert, verändert Ihre Schreibweise. Nach kleinen Änderungen hören Sie auf, neu zu kompilieren, Fehler häufen sich unbemerkt und die Rückkopplungsschleife, die LaTeX so angenehm macht, verschwindet. Bevor Sie mit der Optimierung beginnen, sollten Sie wissen, wo die Zeit vergeht. In den meisten langen Dokumenten ist es nicht die Anzahl der Pakete, sondern eine Handvoll schwerer Assets, vor allem große Bilder und komplexe TikZ-Bilder, die den Build dominieren. Die folgenden Techniken greifen diese direkt an.

## Überspringen Sie die Zahlen beim Zeichnen

Die Option „Entwurf“ bewirkt, dass LaTeX jedes Bild durch ein leeres Feld derselben Größe ersetzt, wodurch das Layout und die Seitenumbrüche erhalten bleiben und die Bildverarbeitung übersprungen wird:

```latex
\documentclass[draft]{article}
```

Der „Entwurf“ auf Klassenebene markiert außerdem überfüllte Zeilen mit schwarzen Balken, was manche Leute nützlich und andere als störend empfinden. Um den Effekt auf Bilder zu beschränken, übergeben Sie die Option stattdessen an das Paket als „\usepackage[draft]{graphicx}“ oder an einen einzelnen Täter mit „\includegraphics[draft]{...}“. Denken Sie daran, es zu entfernen, bevor Sie eine PDF-Datei freigeben, da ein Build-Entwurf für jeden, der diese Option nicht kennt, fehlerhaft aussieht. Unabhängig vom Entwurfsmodus sollten Sie große Fotos einmal herunterskalieren, wie unter [Einfügen einer Abbildung](/learn/insert-images/) beschrieben, denn ein 40-Megabyte-Bild kostet Sie bei jeder Kompilierung ewig.

## Kompilieren Sie nur das aktuelle Kapitel

Wenn Ihre Kapitel in separaten Dateien gespeichert sind, die mit „\include“ eingefügt wurden, beschränkt der Befehl „\includeonly“ einen Build auf die von Ihnen benannten Dateien:

```latex
\includeonly{chapters/04-results}
```

Fügen Sie es in die Präambel ein und LaTeX kompiliert nur dieses Kapitel, während es die „.aux“-Dateien der anderen liest, sodass Seitenzahlen und Querverweise vom Rest des Dokuments ungefähr richtig bleiben. Dies ist die größte Einsparung für eine Abschlussarbeit, da ein einminütiger Build routinemäßig in Sekunden umgewandelt wird. Es funktioniert nur mit „\include“, nicht mit „\input“, was einer der Gründe ist, lange Dokumente wie in [Ein Dokument in Dateien aufteilen](/learn/split-chapter-files/) beschrieben zu strukturieren.

## Teure Bilder zwischenspeichern

TikZ-Bilder werden bei jeder Kompilierung von Grund auf neu gezeichnet. Die „externe“ Bibliothek, geladen mit „\usetikzlibrary{external}“ plus „\tikzexternalize“, kompiliert jedes Bild einmal zu einem eigenen PDF und verwendet es wieder, bis sich der Code ändert. Das Setup hat scharfe Kanten und die manuelle Alternative, große Bilder in eigenständige Dateien zu verschieben, funktioniert genauso gut; beide werden in [eigenständiges TikZ in PDF oder PNG](/learn/tikz-export/) behandelt.

## Weniger Pässe, schnelleres Eisen

Die Bibliographie und die Auflösung von Querverweisen erfordern mehrere Durchgänge, aber beim Verfassen von Prosa werden sie selten benötigt, sodass ein einziger schneller Durchgang ausreicht und die vollständige Sequenz warten kann, bis Sie die Referenzen überprüft haben. Auch Hardware und Lokalität spielen eine Rolle: Eine lokale Engine kompiliert auf Ihrer eigenen CPU ohne Upload oder Warteschlange, so führt Oleafly Builds aus.

Wenden Sie „\includeonly“ an und entwerfen Sie Abbildungen zusammen, und selbst eine große Abschlussarbeit ist in der Regel in weniger als ein paar Sekunden fertig, und das ist der Punkt, an dem Sie nach jedem Absatz erneut mit der Neukompilierung beginnen.