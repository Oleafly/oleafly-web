---

title: "Zeigen Sie Linien beim Klicken an"
description: "Overlay-Spezifikationen, nur Pause, ohne es zu übertreiben."
category: "on-stage"
order: 2
level: "intermediate"
tags: ["beamer"]
featured: false
updated: 2026-07-25
---

# Linien beim Klicken sichtbar machen

Ein Beamer-Rahmen kann mehr als eine physische Folie sein. Wenn Sie Aufzählungspunkte einzeln anzeigen, generiert Beamer aus demselben Frame mehrere PDF-Seiten, auf denen jeweils etwas mehr angezeigt wird. Beim Vorwärtsgehen im PDF-Viewer werden die einzelnen Schritte durchlaufen. Diese generierten Seiten werden Overlays genannt. Zu lernen, sie zu kontrollieren, macht aus einem statischen Deck ein temporeiches Gespräch.

```latex
\begin{itemize}
 \item<1-> Always visible from slide 1
 \item<2-> Appears on slide 2
 \item<3-> Appears on slide 3
\end{itemize}

\pause % simpler step-through
```

## Overlay-Spezifikationen

Die spitze Klammerschreibweise nach „\item“ ist eine Overlay-Angabe. Es gibt an, auf welchen Overlays des Rahmens das Element sichtbar ist. Die Zahl ist der Overlay-Index innerhalb dieses Frames und der Bindestrich macht ihn zu einem Bereich: „<2->“ bedeutet ab Overlay 2, das Element erscheint also im zweiten Schritt und bleibt bestehen. Ein bloßes „<2>“ würde nur Overlay 2 bedeuten, sodass das Element angezeigt und dann wieder verschwinden würde. Sie können auch Listen wie „<1,3>“ angeben. Beamer erstellt so viele Overlays wie die höchste genannte Anzahl, sodass der obige Rahmen drei PDF-Seiten erzeugt.

Overlay-Spezifikationen funktionieren nicht nur bei Artikeln. „\textbf<2->{Schlüsselbegriff}“ macht Text ab Overlay 2 fett und „\only<2>{...}“ schließt seinen Inhalt ausschließlich auf Overlay 2 ein. Da „\only“ den Inhalt auf anderen Overlays vollständig entfernt, wird das umgebende Layout neu umbrochen, was es zum Werkzeug zum Ersetzen einer Figur durch eine andere an derselben Stelle macht: Geben Sie zwei „\only“-Blöcken die gleiche Position und aufeinanderfolgende Spezifikationen. Sein Cousin „\uncover“ reserviert den Platz, während der Inhalt ausgeblendet wird, sodass sich nichts verschiebt.

## Das einfachere Werkzeug

„\pause“ teilt den Frame an dieser Stelle. Alles davor wird sofort angezeigt, alles danach wartet auf den nächsten Schritt und wiederholte „\pause“-Befehle erstellen aufeinanderfolgende Schritte. Es sind keine Zahlen und keine Planung erforderlich, daher ist es die richtige Standardvorgabe für eine einfache Laibung von oben nach unten. Greifen Sie nur dann zu expliziten Spezifikationen, wenn die Offenlegungsreihenfolge von der Quellreihenfolge abweicht oder wenn Elemente erscheinen und verschwinden müssen.

Eine nützliche Abkürzung, wenn jedes Element in einer Liste in der Reihenfolge angezeigt werden soll, ist „\begin{itemize}[<+->]“, das automatisch steigende Overlay-Nummern zuweist.

## Zurückhaltung

Overlays können leicht überbeansprucht werden. Ein Deck, bei dem jede Kugel auf jeder Folie nacheinander einrastet, erschöpft sowohl den Präsentator (ständiges Klicken) als auch das Publikum (kein Weiterlesen). Reservieren Sie abgestufte Enthüllungen für die wenigen Stellen, an denen das Tempo ein Argument darstellt, etwa beim Aufbau einer Ableitung oder beim Vergleich von Vorher und Nachher. Bei jeder Überlagerung handelt es sich um eine echte PDF-Seite, sodass Handout-Kopien in Ballonform ausgeführt werden, es sei denn, Sie kompilieren mit „\documentclass[handout]{beamer}“, wodurch jedes Bild auf die endgültige Überlagerung reduziert wird. Frame-Grundlagen werden in [einem ersten Beamer-Deck](/learn/beamer-basics/) behandelt.