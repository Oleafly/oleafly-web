---

title: "Betonung, ohne die Schriftart anzugreifen"
description: "textbf, textit, emph, mono und warum emph besser verschachtelt ist als hartcodierte Kursivschrift."
category: "type-and-shape"
order: 1
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Betonung, ohne die Schriftart anzugreifen

Der Schwerpunkt in LaTeX liegt auf einer kleinen Reihe von Befehlen, die jeweils den betroffenen Text als Argument in geschweiften Klammern übernehmen. LaTeX trennt zwei Ideen, die die meisten Textverarbeitungsprogramme miteinander verschmelzen: das Anwenden einer bestimmten Schriftart und das Markieren eines Bereichs als Hervorhebung. Wenn Sie wissen, welcher Befehl dies bewirkt, bleiben Dokumente konsistent, wenn sich Stile ändern.

```latex
\textbf{bold}
\textit{italic}
\emph{emphasis} % preferred in running text
\underline{avoid} % rarely used in body text
\texttt{monospace}
\textsc{Small Caps}
```

## Die Befehle

„\textbf“ setzt Fettdruck, die Standardschrift für starke Hervorhebung und für Stichwörter in Definitionen. `\textit` legt den kursiven Typ direkt fest. „\texttt“ wechselt zur monospaced Schreibmaschinenschriftart, der Konvention für Dateinamen, Befehle und Code-IDs in Fließtext. „\textsc“ setzt Kapitälchen, die üblicherweise für Autorennamen in Bibliographien und für Akronyme verwendet werden, die sonst eine Textzeile dominieren würden.

„\underline“ existiert, verdient aber im Beispiel seinen Kommentar. Unterstreichen ist ein Ersatz für Kursivschrift aus der Schreibmaschinenzeit, und in LaTeX gibt es auch ein mechanisches Problem: Der unterstrichene Text wird in einem Feld platziert, sodass er nicht über Zeilen hinweg umbrechen kann, und eine lange unterstrichene Phrase läuft über den Rand hinaus. In der Drucktypografie übernimmt die Kursivschrift die Funktion, die früher die Unterstreichung erfüllte.

Die Befehle sind verschachtelt, sodass „\textbf{\textit{bold italic}}“ beides kombiniert, wenn die Schriftart das Gesicht liefert.

## Warum \emph

„\emph“ markiert eher die Bedeutung als das Erscheinungsbild: Es heißt „betonen Sie dies“ und lässt den Kontext entscheiden, wie. Bei aufrechtem Text wird Kursivschrift gedruckt. Innerhalb von Text, der bereits kursiv ist, wird er wieder aufrecht gesetzt, sodass die Hervorhebung innerhalb der Hervorhebung sichtbar bleibt. Fest codiertes „\textit“ in kursivem Text bleibt einfach kursiv und die innere Hervorhebung verschwindet. Der Markierungswille zahlt sich auch später aus. Eine Klasse oder ein Paket kann die Hervorhebung an einer Stelle neu definieren, ohne dass im gesamten Dokument Änderungen vorgenommen werden müssen.

Faustregel: Verwenden Sie „\emph“ zur Hervorhebung in fließender Prosa und reservieren Sie „\textit“ für Dinge, die konventionell kursiv geschrieben sind, unabhängig vom Kontext, wie Buchtitel, Fremdphrasen und Artennamen.

## Grenzen und Gewohnheiten

Dies sind alles Befehle im Textmodus und sie verhalten sich innerhalb von Formeln schlecht. Fettgedruckte mathematische Symbole benötigen „\mathbf“ oder „\boldsymbol“, behandelt in [bold math](/learn/bold-math/). Widerstehen Sie der Stapelbetonung, denn wenn alles fett ist, fällt nichts auf. Erstellen Sie Überschriften aus Strukturbefehlen wie „\section“ und nicht aus manueller Fettschrift, da die Struktur auch das Inhaltsverzeichnis und die PDF-Lesezeichen speist. [Größere und kleinere Schriftart](/learn/font-size/) führt das gleiche Argument für Schriftgrößen an.