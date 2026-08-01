---

title: "Ein erstes Beamer-Deck"
description: "Thema, Titelrahmen, Gliederung, eine Ergebnisfolie."
category: "on-stage"
order: 1
level: "intermediate"
tags: ["beamer"]
featured: true
updated: 2026-07-25
---

# Ein erstes Beamer-Deck

Beamer ist die Standard-LaTeX-Dokumentklasse für Präsentationen. Anstelle von Seiten werden im Dokument Folien erstellt, und alles, was Sie bereits wissen, wird übernommen: dieselbe Mathematik, dieselben Zahlen, dieselben Bibliographiebefehle. Der praktische Gewinn für Papierautoren ist die Wiederverwendung. Gleichungen und TikZ-Diagramme aus dem Manuskript werden unverändert in den Vortrag eingefügt. Hier ist ein minimales, aber vollständiges Deck:

```latex
\documentclass{beamer}
\usetheme{Madrid}
\title{Talk Title}
\author{You}
\begin{document}
\frame{\titlepage}
\begin{frame}{Outline}
 \tableofcontents
\end{frame}
\begin{frame}{Results}
 \begin{itemize}
 \item Finding one
 \item Finding two
 \end{itemize}
\end{frame}
\end{document}
```

## Frames, keine Seiten

Die Kerneinheit ist der Rahmen, und jede „Rahmen“-Umgebung wird zu einer Folie. Das optionale Argument in geschweiften Klammern, wie in „\begin{frame}{Results}“, legt den Titel der Folie fest. Auf der ersten Folie wird die Abkürzung „\frame{\titlepage}“ verwendet, wobei „\titlepage“ die in der Präambel durch „\title“ und „\author“ deklarierten Metadaten wiedergibt. Sie können auch „\institute“ und „\date“ hinzufügen und sie erscheinen im gleichen Layout. Ein Rahmen fasst deutlich weniger als eine Seite, etwa 128 mm mal 96 mm Leinwand. Überlaufende Inhalte sind also ein Zeichen dafür, dass das Material auf zwei Rahmen aufgeteilt wird, anstatt die Schrift zu verkleinern.

## Themen und Gliederung

„\usetheme{Madrid}“ wählt ein vollständiges visuelles Design aus: Farben, Kopf- und Fußzeilen und die Art und Weise, wie Rahmentitel gezeichnet werden. Beamer liefert Dutzende von Themes. „Madrid“, „Berlin“ und das bewusst schlichte „default“ sind gängige Optionen, und der Austausch des Themas ist eine einzeilige Änderung, die das gesamte Deck neu gestaltet. Viele Konferenzen und Labore verbreiten ihr eigenes Thema. In diesem Fall legen Sie ihre Style-Datei im Projekt ab und benennen sie hier.

Der Gliederungsrahmen nennt sich „\tableofcontents“, das die Abschnittsstruktur des Vortrags auflistet. Ein Haken: Es listet „\section“-Befehle auf, und dieses Minimalbeispiel hat keine, sodass die Gliederung leer bleibt, bis Sie Zeilen wie „\section{Method}“ zwischen Frames hinzufügen. Abschnitte in Beamer drucken keine Überschriften auf Folien; Sie dienen zur Strukturierung der Gliederung und der Navigationselemente, die einige Themen anzeigen.

## Inhalte auf Folien

Innerhalb eines Frames funktioniert „itemize“ wie in jedem anderen Dokument, und jedes „\item“ wird zu einem Aufzählungszeichen. Folien vertragen viel weniger Text als Papier. Beschränken Sie die Elemente daher nach Möglichkeit auf einzelne Zeilen und integrieren Sie Details in das, was Sie sagen. Abbildungen, Tabellen und Mathematik funktionieren auch innerhalb von Frames, allerdings wird die Beamer-Ausgabe in diesen In-Page-Vorschauen nicht gerendert, also kompilieren Sie das Deck, um es zu sehen.

Der häufigste frühe Fehler ist wörtlicher Inhalt: „\verb“ und Codeauflistungen werden aufgrund der Art und Weise, wie Frames ihren Inhalt verarbeiten, innerhalb gewöhnlicher Frames unterbrochen. Die Lösung ist die fragile Option, geschrieben „\begin{frame}[fragile]“, auf jedem Frame, der Code enthält. Wenn das Deck entworfen ist, sind Schritt-für-Schritt-Enthüllungen das nächste zu erlernende Werkzeug, das unter [Zeilen beim Klicken enthüllen](/learn/beamer-overlays/) behandelt wird.