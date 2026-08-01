---

title: "Inhaltsverzeichnis, Abbildungsverzeichnisse, Tabellenverzeichnisse"
description: "Inhaltsverzeichnis und warum der zweite Durchgang wichtig ist."
category: "paper-bones"
order: 3
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Inhaltsverzeichnis, Abbildungsverzeichnisse, Tabellenverzeichnisse

Ein Inhaltsverzeichnis in LaTeX ist nicht etwas, das Sie erstellen oder verwalten. Sie fügen einen einzelnen Befehl an der gewünschten Stelle ein und LaTeX setzt die Einträge aus den Überschriften zusammen, die Sie bereits geschrieben haben. Das Gleiche gilt für das Abbildungsverzeichnis und das Tabellenverzeichnis, in denen Bildunterschriften statt Überschriften enthalten sind. Dies ist einer der Orte, an denen sich die Deklaration von Struktur direkt auszahlt: Benennen Sie einen Abschnitt um oder verschieben Sie eine Figur, und die Titelsache wird von selbst festgelegt.

## Die drei Befehle

```latex
\tableofcontents
\listoffigures
\listoftables
```

„\tableofcontents“ druckt das Inhaltsverzeichnis an der Stelle, an der es erscheint, normalerweise direkt nach der Titelseite oder der Zusammenfassung. Jedes nummerierte „\chapter“, „\section“ und „\subsection“ wird mit seiner Nummer, seinem Titel und seiner Seite angezeigt, bis zu der Tiefe, die durch den in [der Überschriftenlektion](/learn/sections/) beschriebenen „toc Depth“-Zähler festgelegt wird. „\listoffigures“ und „\lisoftables“ machen dasselbe für Abbildungs- und Tabellenbeschriftungen und ziehen den Text aus jedem „\caption{...}“. In Artikeln sind sie ungewöhnlich, aber Abschlussarbeiten erfordern häufig beides und werden auf einer eigenen Seite nach dem Inhaltsverzeichnis platziert.

## Warum der zweite Durchgang wichtig ist

Nach strukturellen Änderungen **zweimal** kompilieren. Das ist kein Aberglaube. So funktioniert der Mechanismus. Während einer Kompilierung kann LaTeX nicht wissen, was auf Seite 2 landen wird, daher schreibt es jede Überschrift und ihre endgültige Seitenzahl in eine Hilfsdatei („.toc“, „.lof“, „.lot“). „\tableofcontents“ liest die Datei, die vom vorherigen Lauf übrig geblieben ist. In einem neuen Projekt existiert diese Datei noch nicht, daher erzeugt die erste Kompilierung ein leeres Inhaltsverzeichnis. Nachdem Sie Abschnitte hinzugefügt oder verschoben haben, zeigt das Inhaltsverzeichnis bis zum nächsten Durchlauf veraltete Titel oder falsche Seitenzahlen an. Die zweite Kompilierung liest die frisch geschriebene Datei und alles richtet sich aus. Editoren, die latexmk oder einen gleichwertigen Wrapper ausführen, übernehmen die Wiederholungen für Sie, weshalb Sie es vielleicht nie bemerkt haben. Wenn Ihr Inhaltsverzeichnis jemals falsch aussieht, kompilieren Sie es noch einmal, bevor Sie etwas anderes debuggen.

## Markierte Abschnitte und das Inhaltsverzeichnis

Markierte Abschnitte benötigen „\addcontentsline{toc}{section}{Title}“, wenn sie im Inhaltsverzeichnis erscheinen sollen. Bei einer mit einem Sternchen versehenen Überschrift wie „\section*{Acknowledgments}“ wird bewusst sowohl die Nummerierung als auch die Inhaltsdatei übersprungen. Wenn Sie also eine Auflistung wünschen, fügen Sie den Eintrag selbst hinzu. Die drei Argumente des Befehls sind die Datei, in die geschrieben werden soll („toc“), die Ebene des Eintrags („section“) und der anzuzeigende Text. Platzieren Sie die Zeile unmittelbar nach der markierten Überschrift, damit die aufgezeichnete Seitenzahl richtig ist.

Eine Gewohnheit, die es wert ist, sich anzueignen: Bevor Sie eine PDF-Datei freigeben, werfen Sie einen Blick auf das Inhaltsverzeichnis und achten Sie auf die verräterischen Anzeichen eines veralteten Builds, z. B. Fragezeichen, fehlende Einträge oder einen letzten Eintrag, der kurz vor Ihrem letzten Kapitel endet. Es wird fast immer durch eine weitere Kompilierung behoben. Es ist billiger, es selbst zu fangen, als wenn ein Rezensent es fängt. Die gleichen Hilfsdatei-Tanzkräfte „\ref“ und Freunde, behandelt in [Querverweise](/learn/cross-references/).