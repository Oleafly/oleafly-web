---

title: "Anhänge, die sauber neu nummeriert werden"
description: "Anhang, A/B-Kapitel, Zähler, die konsistent bleiben."
category: "long-form"
order: 3
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Anhänge, die sauber neu nummeriert werden

Ein Anhang enthält Material, das den Haupttext unterstützt, ihn aber unterbrechen würde: lange Korrekturen, Übersichtsinstrumente, zusätzliche Tabellen, Einzelheiten zur Implementierung. Leser erwarten, dass Anhänge die Buchstaben A, B, C tragen, anstatt die Kapitelnummern fortzusetzen, und erwarten, dass das darin enthaltene Material diesem Beispiel folgt, sodass eine Abbildung in Anhang A Abbildung A.1 und nicht Abbildung 47 ist. In LaTeX handelt es sich um einen einzelnen Schalter und nicht um eine Umstrukturierungsaufgabe.

## Der Schalter

```latex
\appendix
\chapter{Extra proofs} % becomes Appendix A
\section{Lemma details}
```

„\appendix“ ist eine Deklaration, keine Umgebung: Es gibt nichts zu schließen. Ab dem Punkt, an dem es erscheint, werden die Schnittzähler zurückgesetzt und auf Buchstaben umgeschaltet. In den Klassen „report“ und „book“ wird jedes „\chapter“ danach zu Anhang A, Anhang B usw., und ein „\section“ darin wird zu A.1. Sie schreiben immer noch nur Ihren eigenen Überschriftentext; Die Beschriftung „Anhang A“ und die Beschriftung stammen aus der Klasse, genau wie die Kapitelnummern vor der Umstellung.

In „article“, das keine Kapitel hat, benennt „\appendix“ stattdessen „\section“ um: Der erste Abschnitt danach wird zu Anhang A. Alles nachgelagerte bleibt automatisch konsistent. Das Inhaltsverzeichnis listet die mit Buchstaben versehenen Überschriften auf, und ein in einem Anhang platziertes „\label“ wird ohne besondere Behandlung über „\ref“ zu „A“ oder „A.2“ aufgelöst.

## Was wird neu nummeriert und was nicht

In „Bericht“ und „Buch“ sind Abbildungen, Tabellen und Gleichungen innerhalb der Kapitel nummeriert, sodass sie den Buchstaben kostenlos übernehmen: Die erste Abbildung von Anhang B ist Abbildung B.1. In „article“ laufen diese Zähler kontinuierlich durch das gesamte Dokument und „\appendix“ berührt sie nicht, sodass die Nummerierung der Gleichungen einfach weitergeht. Das ist normal für eine kurze Arbeit; Bekämpfen Sie es nur, wenn ein Veranstaltungsort ausdrücklich nach Nummern mit A-Präfix fragt.

## Wenn Sie mehr wollen

Das „appendix“-Paket fügt Verfeinerungen hinzu, die dem einfachen Schalter fehlen. Seine „Anhänge“-Umgebung kann das Wort „Anhang“ in jeder Überschrift und im Inhaltsverzeichnis („\usepackage[toc,titletoc,title]{appendix}“) drucken und eine Trennseite einfügen, die die Anhänge ankündigt. Bei einer Abschlussarbeit, deren Vorlage dies nicht bereits berücksichtigt, ersparen diese Optionen manuelles Fummeln.

Ein häufiger Fehler besteht darin, die Beschriftung selbst in die Überschrift zu schreiben, wie in „\chapter{Anhang A: Zusätzliche Beweise}“. Die Klasse fügt ihre eigene Bezeichnung hinzu, sodass die Ausgabe „Anhang A Anhang A: Zusätzliche Beweise“ lautet. Geben Sie der Überschrift nur den Titel und lassen Sie die Nummerierungsmaschinerie ihre einzige Aufgabe erledigen. Wenn Sie einen einzelnen Anhang haben, ist der einzige „Anhang A“ eine Stilfrage; Die meisten Veranstaltungsorte akzeptieren es, und einige bevorzugen ein unbeschriftetes „\chapter*{Appendix}“.