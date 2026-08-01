---

title: "Größerer und kleinerer Typ"
description: "Klassenoptionen wie 11pt und lokale Größenschalter, die den Zeilenabstand nicht beeinträchtigen."
category: "type-and-shape"
order: 2
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Größerer und kleinerer Typ

Die Schriftgröße in LaTeX wird auf zwei Ebenen festgelegt: eine dokumentweite Basisgröße, die einmal in den Klassenoptionen ausgewählt wird, und lokale Schalter für Bereiche, die unterschiedlich sein müssen. Die Basisgröße bestimmt alles andere. Überschriften, Fußnoten und die lokalen Größen werden alle relativ dazu definiert.

## Dokumentweit

```latex
\documentclass[11pt]{article} % 10pt, 11pt, 12pt common
```

Die Klassenoption legt die Größe des Textkörpers fest. „10pt“ ist die Standardeinstellung und „11pt“ und „12pt“ sind die gängigen Alternativen; Die Standardklassen unterstützen nur diese drei. Durch Ändern der Option wird das gesamte Dokument proportional neu skaliert, da Überschriftengrößen, Fußnotengrößen und Zeilenabstände alle von der Basis abgeleitet werden. Wenn Sie eine Basisgröße von mehr als 12 pt benötigen, bieten Klassen wie „extarticle“ oder die KOMA-Script-Klassen eine größere Auswahl an Optionen.

## Lokale Schalter

```latex
{\large larger} {\Large larger}
{\small smaller} {\footnotesize notes}
{\tiny tiny}
```

Hierbei handelt es sich eher um Deklarationen als um Befehle mit Argumenten: „\large“ ändert die Größe von diesem Punkt bis zum Ende der aktuellen Gruppe, und die geschweiften Klammern um „{\large größer}“ begrenzen die Reichweite. Die vollständige Leiter, vom kleinsten zum größten, ist „\tiny“, „\scriptsize“, „\footnotesize“, „\small“, „\normalsize“, „\large“, „\Large“, „\LARGE“, „\huge“, „\Huge“. Jeder Schritt wird einer konkreten Größe zugeordnet, die von der Klassenoption abhängt, sodass „\large“ unter „12pt“ größer ist als „\large“ unter „10pt“. Stellen Sie sich die Schalter als Schritte vom Textkörper vor, nicht als feste Größen.

Der Zeilenabstand hat eine Feinheit. Ein Größenschalter passt den Grundlinienabstand nur für Absätze an, die enden, während er aktiv ist. Halten Sie bei einem größeren Abschnitt mit mehreren Absätzen den Absatzumbruch innerhalb der Gruppe, indem Sie mit „\par“ vor der schließenden Klammer enden, wie in „{\large ... \par}“. Andernfalls behält der letzte Absatz unter übergroßen Buchstaben den normalen Zeilenabstand bei und die Zeilen kollidieren.

## Größen versus Struktur

Vermeiden Sie die Verwendung von Größenschaltern, um Überschriften zu fälschen. „\section“ und seine Verwandten legen die Größe für Sie fest, außerdem nummerieren sie die Überschrift, fügen sie dem Inhaltsverzeichnis hinzu und erstellen PDF-Lesezeichen. Eine von Hand erstellte Zeile „{\Large \textbf{...}}“ gibt nichts davon. Die gleiche Idee gilt für die Hervorhebung, die in [Hervorhebung ohne Kampf gegen die Schriftart] (/learn/bold-italic/) behandelt wird. Reservieren Sie manuelle Größenänderungen für wirklich lokale Bedürfnisse, wie etwa eine Anmerkung in Fußnotengröße unter einer Tabelle oder eine Zeile auf einer Titelseite. Wenn jede Überschrift in einem Dokument neu gestaltet werden muss, ändern Sie die Klasse oder verwenden Sie ein Paket wie „titlesec“, anstatt die Größe jeder Überschrift manuell anzupassen.