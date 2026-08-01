---

title: "Titelblöcke und Titelseiten"
description: "maketitle für Aufsätze, Titelseite für Abschlussarbeiten und Berichte."
category: "paper-bones"
order: 1
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Titelblöcke und Titelseiten

Eine Arbeit wird mit einem Titelblock geöffnet: Titel, Autoren, Datum, oben auf der ersten Seite. Eine Abschlussarbeit beginnt mit einem vollständigen Titelblatt, das nach den Vorgaben einer Universität gestaltet ist. LaTeX behandelt diese als zwei verschiedene Probleme. Die erste wird durch „\maketitle“ automatisiert und die zweite ist eine leere Leinwand namens „titlepage“-Umgebung.

## Der Titelblock

```latex
\title{A Study of Examples}
\author{Ada Lovelace\\University of Something}
\date{\today}
\begin{document}
\maketitle
```

Die ersten drei Befehle speichern nur Metadaten. Wenn sie ausgeführt werden, erscheint nichts im PDF, weshalb sie in der Präambel stehen können. „\maketitle“, hinter „\begin{document}“ platziert, ist der Zeitpunkt, an dem der gespeicherte Block gesetzt wird. Innerhalb von „\author“ bricht das „\\“ eine Zeile um (die übliche Art, eine Zugehörigkeit unter einem Namen anzugeben), und „\and“ trennt mehrere Autoren, sodass sie nebeneinander aufgeführt werden. `\date{\today}` gibt das Datum des Tages aus, den Sie kompilieren. Schreiben Sie „\date{}“ mit leeren Klammern, um die Datumszeile vollständig wegzulassen. Wenn Sie „\date“ ganz weglassen, wird immer noch das heutige Datum gedruckt.

In der Klasse „Artikel“ befindet sich der Block oben auf Seite eins, der Text folgt darunter. In „Bericht“ und „Buch“ erhält es eine eigene Seite. Journal- und Konferenzkurse ersetzen diese Maschinerie durch eigene Befehle für Zugehörigkeiten, E-Mails und ORCIDs. Daher sollten Sie in einer Veranstaltungsortvorlage deren Beispieldatei und nicht den Standardbefehlen folgen.

## Eine handgefertigte Titelseite

```latex
\begin{titlepage}
 \centering
 \vspace*{2cm}
 {\Large Thesis Title\\[1em]}
 {\large Author Name\\}
 \vfill
 Submitted for the degree of ...\\
 \today
\end{titlepage}
```

Die „Titelseite“-Umgebung bietet Ihnen eine nicht nummerierte Seite und vollständige manuelle Kontrolle, was normalerweise in den Vorschriften für Abschlussarbeiten gefordert wird. Jeder Teil des Beispiels verdient seinen Platz. „\centering“ zentriert alles, was innerhalb der Umgebung folgt. „\vspace*{2cm}“ verschiebt den Titel vom oberen Rand nach unten. Das markierte Formular ist wichtig, da ein nicht markiertes „\vspace“ oben auf einer Seite verworfen wird. Die geschweiften Klammern um „{\Large ...}“ fassen die Änderung der Schriftgröße so ein, dass sie dort endet, wo die Gruppe endet, und „\\[1em]“ bricht die Zeile mit einem zusätzlichen Leerzeichen darunter um. „\vfill“ fügt dehnbaren Raum ein, der die verbleibende Höhe aufnimmt, sodass die Gradangabe und das Datum am Ende der Seite landen, egal wie lang der Titel ist.

Verwenden Sie den einen oder anderen Mechanismus. Die Kombination von „\maketitle“ mit einer „titlepage“-Umgebung erzeugt zwei Titelseiten, und der klassische Fehler für Anfänger ist der leisere: „\title“ und „\author“ definieren, aber „\maketitle“ vergessen, sodass das Dokument sauber und ohne Titel kompiliert wird. Die [Dokument-Skelett-Lektion](/learn/document-skeleton/) zeigt, wo der Block in die Datei als Ganzes passt.