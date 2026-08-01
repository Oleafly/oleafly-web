---

title: "Überschriften, die sich selbst nummerieren"
description: "Abschnitt durch Absatz, markierte Formen, Seknumtiefe."
category: "paper-bones"
order: 2
level: "beginner"
tags: ["structure"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Sections check'
  questions:
    - prompt: 'What does \section{Introduction} mainly do?'
      choices:
        - 'Only bold the next paragraph'
        - 'Print a numbered heading and register it for the TOC / PDF outline'
        - 'Start a new PDF file'
        - 'Insert a citation'
      answer: 'B'
      level: beginner
    - prompt: 'How do you get an unnumbered section heading?'
      choices:
        - '\section*{...}'
        - '\section[none]{...}'
        - '\unnumber{\section{...}}'
        - 'Just write \textbf{...}'
      answer: 'A'
      level: beginner
    - prompt: 'Why use real heading commands instead of hand-bolded lines?'
      choices:
        - 'Bold is illegal in LaTeX'
        - 'Headings drive numbering, the TOC, and navigation. Fake bold doesn''t.'
        - 'Manual bold compiles faster'
        - 'Sections can''t hold math'
      answer: 'B'
      level: beginner
    - prompt: 'What''s the usual next level under \section?'
      choices:
        - '\chapter (even in article)'
        - '\subsection'
        - '\maketitle'
        - '\bibliography'
      answer: 'B'
      level: beginner
---

# Überschriften, die sich selbst nummerieren

In einem Textverarbeitungsprogramm nummerieren Sie Überschriften von Hand und nummerieren sie jedes Mal neu, wenn Sie eine Überschrift verschieben. LaTeX weigert sich, Ihnen das zu erlauben. Sie geben an, um welche Überschrift es sich handelt, um einen Abschnitt, einen Unterabschnitt oder ein Kapitel, und die Nummerierung erledigt sich von selbst. Fügen Sie einen neuen Abschnitt in die Mitte Ihres Dokuments ein und nummerieren Sie alles danach bei der nächsten Kompilierung neu, zusammen mit jedem Querverweis und jedem Inhaltsverzeichniseintrag, der darauf verweist.

## Die Hierarchie

```latex
\part{...} % book
\chapter{...} % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
```

Diese Befehle bilden eine feste Leiter. „\section“ ist das alltägliche Arbeitstier in der Klasse „article“, wobei „\subsection“ und „\subsubsection“ darunter verschachtelt sind. „\chapter“ existiert nur in den Klassen „report“ und „book“, weshalb das Einfügen von Dissertationskapiteln in eine Artikelvorlage mit einer undefinierten Kontrollsequenz fehlschlägt. „\part“ steht über Kapiteln und ist außerhalb langer Bücher selten. „\paragraph“ ist das Seltsame: Es erzeugt eine fette Einlaufüberschrift in derselben Zeile wie der folgende Text und nicht eine Überschrift in einer eigenen Zeile, was fast jeden beim ersten Mal überrascht.

Jeder Befehl nimmt den Überschriftentext in geschweiften Klammern, druckt ihn in der von der Klasse gewählten Schriftart und -größe, nummeriert ihn und zeichnet ihn auf, damit „\tableofcontents“ ihn später finden kann. Sie formatieren Überschriften niemals inline. Wenn Sie unterschiedliche Schriftarten für Überschriften wünschen, ist dies eine dokumentweite Entscheidung, die in der Präambel getroffen wird.

## Zahlen unterdrücken

Markierte Formulare unterdrücken Zahlen: `\section*{Acknowledgements}`. Durch den Stern wird außerdem die Überschrift vollständig aus dem Inhaltsverzeichnis und aus der Nummerierungsreihenfolge herausgehalten, sodass der Abschnitt danach so fortgesetzt wird, als ob der Stern nicht vorhanden wäre. Das ist genau das, was Sie sich für eine Danksagung, ein Vorwort oder einen eigenständigen Schluss in einer kurzen Arbeit wünschen. Sollte ein markierter Abschnitt dennoch im Inhaltsverzeichnis erscheinen, gibt es eine einzeilige Lösung, die in [der Inhaltsverzeichnis-Lektion](/learn/table-of-contents/) behandelt wird.

## Nummerierungstiefe steuern

```latex
\setcounter{secnumdepth}{2}
\setcounter{tocdepth}{2}
```

„secnum Depth“ entscheidet, wie tief die Nummerierung geht. In „Artikel“ sind Abschnitte Ebene 1, Unterabschnitte Ebene 2 und Unterunterabschnitte Ebene 3. Wenn Sie also den Zähler auf 2 nummerieren, werden Abschnitte und Unterabschnitte nummeriert, die Überschriften der Unterabschnitte werden jedoch nicht nummeriert, während ihre Formatierung beibehalten wird. „toc Depth“ ist die gleiche Idee für das Inhaltsverzeichnis: Es steuert, wie tief die Inhaltsverzeichnisliste geht, unabhängig davon, was auf der Seite nummeriert wird. Beide Zeilen gehören in die Präambel.

Ein häufiger Fehler besteht darin, Ebenen zu überspringen, beispielsweise von „\section“ direkt zu „\subsubsection“ zu springen, weil Ihnen die kleinere Überschrift gefällt. Die Nummerierung funktioniert immer noch, führt jedoch zu seltsamen Ergebnissen wie „1.0.1“ und der Leser verliert den Überblick über die Struktur. Wählen Sie die Bedeutungsebenen der Überschriften aus und überlassen Sie die Klasse das Erscheinungsbild. Wenn Sie sich nicht sicher sind, wie das Grundgerüst Ihres Dokuments zusammenpasst, führt Sie [die Lektion zum Dokumentgerüst](/learn/document-skeleton/) durch.