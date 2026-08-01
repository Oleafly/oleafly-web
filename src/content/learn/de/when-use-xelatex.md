---

title: "Warum Menschen zu XeLaTeX wechseln"
description: "Systemschriftarten, komplexe Skripte, Fontspec-Vorlagen."
category: "runtime"
order: 2
level: "intermediate"
tags: ["engines"]
featured: false
updated: 2026-07-25
---

# Warum Menschen zu XeLaTeX wechseln

LaTeX ist eine Sprache, die jedoch von mehreren Engines kompiliert wird und sich in ihren Fähigkeiten unterscheidet. Die traditionelle Engine ist pdfLaTeX und die beiden modernen sind XeLaTeX und LuaLaTeX. Der Hauptgrund für den Wechsel zu

## Die drei Gründe für einen Wechsel

Der erste ist der direkte Zugriff auf Systemschriftarten. Mit dem Paket „fontspec“ besteht die Auswahl einer Schriftart aus einer lesbaren Zeile, und für die gewünschte Schriftart muss kein TeX-spezifisches Schriftartenpaket vorhanden sein. Ob das Ziel „\setmainfont{Inter}“ für ein modernes Erscheinungsbild oder Times New Roman für eine Zeitschriftenanforderung ist, der Mechanismus ist derselbe:

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

„fontspec“ erfordert XeLaTeX oder LuaLaTeX; Unter pdfLaTeX kommt es einfach zu Fehlern. Schriftarten können auch innerhalb des Projektordners statt im System übertragen werden, wie in [einer Schriftartendatei neben dem Projekt](/learn/install-custom-font/) gezeigt.

Der zweite ist nativer Unicode und komplexe Skripte. XeLaTeX liest UTF-8-Eingaben direkt und verarbeitet Schreibsysteme, die pdfLaTeX nicht kann, einschließlich Arabisch, Devanagari, Chinesisch, Japanisch und Koreanisch, mit der richtigen Form und, durch das „polyglossia“-Paket, korrekte Silbentrennung und Richtung pro Sprache. Wenn Ihr Dokument Skripte vermischt oder auch nur einen Namen mit ungewöhnlichen diakritischen Zeichen zitiert, entscheidet allein dies über die Engine.

Das dritte sind Vorlagen, die für Sie entscheiden. Viele moderne Vorlagen für Lebensläufe, Abschlussarbeiten und Präsentationen laden „fontspec“ oder „polyglossia“ in ihren ersten Zeilen, und eine solche Vorlage lässt sich nur auf XeLaTeX oder LuaLaTeX kompilieren. Wenn eine heruntergeladene Vorlage sofort mit der Fehlermeldung „fontspec“ fehlschlägt, ist ein Wechsel der Engine die Lösung, nicht das Bearbeiten der Vorlage.

## Was du aufgibst

Die Kompromisse sind bescheiden, aber real. Einige pdfLaTeX-spezifische Pakete gelten nicht, insbesondere die Schriftartenerweiterung von „microtype“, die XeLaTeX nur teilweise unterstützt. Auch Kompilierungen laufen etwas langsamer. Einige ältere Journal-Pipelines gehen immer noch von pdfLaTeX aus. Überprüfen Sie daher die Anweisungen des Veranstaltungsortes, bevor Sie ein mit XeLaTeX erstelltes Manuskript einreichen. LuaLaTeX teilt die Schriftart- und Unicode-Funktionen und fügt Lua-Skripting hinzu. Wählen Sie zwischen den beiden die Vorlage oder den Veranstaltungsortnamen aus. Dokumente, die auf „fontspec“ basieren, werden normalerweise auf beiden kompiliert.

## Auswählen in der Praxis

Eine vernünftige Regel besteht darin, pdfLaTeX zu verwenden, wenn die Vorlage eines Veranstaltungsortes darauf abzielt, und XeLaTeX für alles, wo Sie die Schriftarten auswählen: Abschlussarbeiten, Lebensläufe, Folien und mehrsprachige Dokumente. Die mitgelieferte Engine von Oleafly basiert auf XeTeX (Tectonic), daher werden „fontspec“-Dokumente dort ohne Engine-Konfiguration kompiliert. Der häufigste Fehler ist das Mischen von Epochen, zum Beispiel das Laden von „fontspec“ zusammen mit Nur-PDF-LaTeX-Schriftartenpaketen wie „newtxtext“. Wählen Sie ein Schriftartensystem pro Dokument aus und die Engine-Frage beantwortet sich größtenteils von selbst.