---

title: "Einfach, halb, doppelt"
description: "setspace für das gesamte Dokument oder einen lokalen Block."
category: "the-page"
order: 2
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Einfach, halb, doppelt

Standardmäßig setzt LaTeX den Text in einem Zeilenabstand, wobei der Abstand zwischen den Zeilen passend zur Schriftart gewählt wird. So sieht ein fertiges Buch aus, aber viele Dokumente müssen lockerer sein: Die Vorschriften für Abschlussarbeiten verlangen oft einen Abstand von eineinhalb oder zwei Zeilen, und Zeitschriften verlangen für Manuskripte einen doppelten Zeilenabstand, damit die Gutachter Platz zum Kritzeln haben. Ändern Sie den Zeilenabstand mit dem Paket „setspace“. Es passt den Textkörper an, ohne die Teile des Dokuments zu unterbrechen, die einzeilig bleiben sollen.

## Dokumentweiter Abstand

```latex
\usepackage{setspace}
\onehalfspacing
% \doublespacing
% \singlespacing
```

Laden Sie das Paket in die Präambel und geben Sie dann eine der drei Deklarationen ab. „\onehalfspacing“ stellt das gesamte Dokument auf eineinhalb Zeilenabstand ein, „\doublespacing“ verdoppelt ihn und „\singlespacing“ kehrt zum Normalzustand zurück, was nützlich ist, wenn Sie mittendrin zurückwechseln müssen. Die Erklärungen treten an dem Ort in Kraft, an dem sie erscheinen. Das Einfügen einer solchen Erklärung in die Präambel deckt also alles ab.

Der Grund, setspace zu verwenden, anstatt manuell mit „\baselinestretch“ oder „\linespread“ herumzufummeln, liegt darin, was bewusst weggelassen wird: Fußnoten, Abbildungs- und Tabellenüberschriften sowie Gleitkommastellen bleiben einzeilig, was genau das ist, was die Richtlinien und typografischen Konventionen für Abschlussarbeiten erwarten. Eine naive globale Dehnung würde auch dazu führen, dass Ihre Fußnoten einen doppelten Abstand haben, und das liest sich schlecht.

Wenn Sie einen Faktor benötigen, den die Tastenkombinationen nicht abdecken, akzeptiert „\setstretch{1.25}“ jeden Multiplikator. Beachten Sie, dass „doppelter Abstand“ im Textverarbeitungssinn einer Dehnung von etwa 1,66 in LaTeX-Begriffen entspricht und „\doublespacing“ dies bereits berücksichtigt. Widerstehen Sie also dem Drang, „\setstretch{2}“ zu schreiben, es sei denn, eine Vorschrift schreibt dies wörtlich vor.

## Abstand nur für einen Block

Manchmal benötigt nur ein Teil des Dokuments einen anderen Abstand: ein langes Zitat, eine Deklarationsseite oder eine Zusammenfassung, die einen doppelten Abstand haben muss, der Rest hingegen nicht.

```latex
\begin{spacing}{1.2}
 ...
\end{spacing}
```

Die „spacing“-Umgebung wendet den angegebenen Dehnungsfaktor, hier 1,2, nur auf den Text zwischen „\begin“ und „\end“ an und stellt dann das wieder her, was zuvor in Kraft war. Das Paket stellt außerdem vorgefertigte „Singlespace“- und „Doublespace“-Umgebungen für die häufigsten Fälle bereit. Da die Änderung von der Umgebung abhängt, können Sie nicht vergessen, zurück zu wechseln. Dies ist der übliche Fehlermodus bei der Ausgabe einfacher Deklarationen mitten im Dokument.

## Ein Wort der Vorsicht

Verwenden Sie keinen Zeilenabstand, um die Seitenzahl zu ermitteln. Das Dehnen auf 1.1, um eine Arbeit länger aussehen zu lassen, ist der älteste Trick im Buch, und Veranstaltungsorte mit strenger Formatierung führen automatische Prüfungen durch, um dies zu erkennen. Der [Seitenlimit-Leitfaden](/learn/page-limits-without-crimes/) behandelt legitime Alternativen. Bewahren Sie den Setspace für den Zweck auf, für den er gedacht ist: Erfüllen einer expliziten Abstandsanforderung und anschließendes Zurückschalten auf den einfachen Abstand für die kamerabereite Version.