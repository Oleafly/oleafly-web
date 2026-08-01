---

title: "Tafeln mit der Bezeichnung a, b, c"
description: "Untertitel für mehrteilige Abbildungen unter einem Titel."
category: "float-surgery"
order: 4
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Tafeln mit der Bezeichnung a, b, c

Aufsätze benötigen ständig Abbildungen mit mehreren Feldern: die Architektur in Feld (a), die Trainingskurve in (b), eine Ablation in (c), alle mit einer Abbildungsnummer und einer Gesamtüberschrift. Der saubere Weg, dies zu erstellen, ist das Paket „subcaption“, das Ihnen eine „subfigure“-Umgebung bietet, die die Beschriftung (a), (b), die Beschriftungen pro Panel und die Referenzierung automatisch verarbeitet.

## Das Muster

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{First}\label{fig:p-a}
 \end{subfigure}\hfill
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Second}\label{fig:p-b}
 \end{subfigure}
 \caption{Overall caption}\label{fig:p}
\end{figure}
```

Hier ist, was jedes Stück bewirkt. Die äußere „figure“-Umgebung ist ein normaler Float, und „[htbp]“ listet die Platzierungen auf, die LaTeX versuchen kann, in der Reihenfolge: hier im Text, oben auf einer Seite, unten auf einer Seite oder auf einer dedizierten Float-Seite. Jede „Unterfigur“ ist ein Feld mit einer angegebenen Breite, hier „0,48\textwidth“ (48 Prozent der Textbreite). Zwei Panels mit 0,48 lassen eine kleine Lücke und die „\hfill“ zwischen ihnen wird gedehnt, sodass die Panels bündig am linken und rechten Rand anliegen. Innerhalb jedes Panels skaliert „width=\linewidth“ das Bild auf die Breite des Panels, nicht auf die gesamte Seite. Das letzte Detail ist das, was die Leute am häufigsten falsch machen.

Die `\caption` innerhalb einer `subfigure` erzeugt die kleine Stilbeschriftung „(a) First“ unter diesem Panel. Die „\caption“ am Ende, innerhalb von „figure“, aber außerhalb jeder „subfigure“, ist die Hauptüberschrift, die die Abbildungsnummer trägt. Behalten Sie jedes „\label“ unmittelbar nach seinem „\caption“ bei, da ein Label die zuletzt ausgegebene Nummer aufzeichnet, wie in [Untertitel und Labels](/learn/captions-labels/) erläutert.

## Verweisende Panels

Bei den obigen Beschriftungen gibt „\ref{fig:p}“ die Nummer der Figur aus, beispielsweise 2, während „\ref{fig:p-a}“ 2a ausgibt. Wenn Sie nur den Buchstaben möchten, gibt `\subref{fig:p-a}` nur „a“ aus, praktisch für Sätze wie „Panels (a) und (b)“. Das ist der eigentliche Vorteil von „Subcaption“ gegenüber der manuellen Eingabe von „(a)“ unter Bildern. Die Buchstaben werden neu nummeriert, wenn Sie Felder hinzufügen oder neu anordnen, und alle Verweise bleiben korrekt.

## Zeilen, Abstände und ein häufiger Fehler

Verkleinern Sie für ein drittes Panel entweder die Breite auf etwa „0,31\textwidth“ und fügen Sie eine weitere „Unterfigur“ mit „\hfill“ zwischen jedem Paar hinzu, oder beginnen Sie eine neue Zeile, indem Sie eine Leerzeile zwischen den Reihen der Unterfiguren lassen. Eine Leerzeile innerhalb einer Zeile ist jedoch der klassische Fehler: Jede Leerzeile zwischen zwei „Unterfigur“-Umgebungen beginnt einen neuen Absatz, der die Felder vertikal statt nebeneinander stapelt. Wenn Ihre Panels sich weigern, in einer Reihe zu sitzen, suchen Sie zuerst nach einer freien Leerzeile und denken Sie daran, dass „%“ am Ende einer Zeile den unsichtbaren Zeilenendebereich auskommentiert, der ein Panel auch zu weit verschieben kann, um hineinzupassen.