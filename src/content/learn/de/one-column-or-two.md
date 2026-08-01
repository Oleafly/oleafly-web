---

title: "Eine oder zwei Spalten"
description: "Warum sich Layouts je nach Veranstaltungsort unterscheiden, was zwei Spalten mit Zahlen und Gleichungen machen und wer entscheidet."
category: "paper-anatomy"
order: 7
level: "beginner"
tags: ["structure", "formatting"]
featured: false
updated: 2026-07-25
---

# Eine oder zwei Spalten

Öffnen Sie zehn Zeitungen und Sie werden zwei Stämme sehen: dichte zweispaltige Seiten, die wie Zeitungspapier aussehen, und luftige einspaltige Seiten, die wie ein Buch aussehen. Beides ist nicht besser. Jedes hat sich aus einem bestimmten Grund entwickelt, und die Wahl liegt fast nie bei Ihnen.

## Warum sich die Veranstaltungsorte unterscheiden

Zweispaltige Layouts sind eine Konferenztradition, die entstand, als Protokolle gedruckt wurden und die Seitenbudgets knapp waren. Schmale Spalten enthalten mehr Wörter pro Seite und kurze Zeilenlängen lassen sich leichter scannen. Die meisten CS-Konferenzen (ACM, IEEE und Freunde) verwenden sie immer noch.

In Zeitschriften, Preprints und Abschlussarbeiten dominieren einspaltige Layouts. Sie geben Gleichungen, Abbildungen und Tabellen Raum zum Atmen und eignen sich besser zum Lesen langer Texte. Preprint-Server und viele ML-Veranstaltungsorte sind zum Teil aus genau diesem Grund auf die einspaltige Version umgestiegen.

| Layout | Typisches Zuhause | Persönlichkeit |
|---|---|---|
| Zweispaltig | Tagungsband | Dicht, scanbar, seitenbegrenzt |
| Einspaltig | Zeitschriften, Preprints, Abschlussarbeiten | Geräumig, lesbar, gleichungsfreundlich |

## Was zwei Spalten mit Ihren Zahlen machen

In einem zweispaltigen Dokument schwebt eine normale „Figur“ innerhalb einer Spalte, die für eine detaillierte Darstellung oft zu schmal ist. Die markierte Variante erstreckt sich über beide Spalten:

```latex
\begin{figure*}
  \centering
  \includegraphics[width=\textwidth]{wide-results.pdf}
  \caption{A figure that needs the full page width.}
\end{figure*}
```

Gleicher Trick für breite Tabellen mit „table*“. Ein Haken: Markierte Floats landen normalerweise oben auf einer Seite und können nicht unten oder hier platziert werden. Planen Sie Ihre breiten Zahlen daher frühzeitig. Die Grundlagen der Größenbestimmung finden Sie in [Bilder einfügen](/learn/insert-images/).

## Gleichungen werden eng

Eine etwa 3,3 Zoll breite Spalte ist ein gefährlicher Ort für lange Gleichungen. In zweispaltigen Arbeiten brechen Sie Gleichungen häufiger, kürzen aggressiver und stützen sich auf mehrzeilige Umgebungen. Wenn Ihre Arbeit viele Gleichungen enthält und Sie den Ort frei wählen können, sparen Sie mit einer einzigen Spalte echte Formatierungszeit. Die Werkzeuge finden Sie unter [Mathe-Modus](/learn/math-mode/).

## Bildschirme und Screenreader bevorzugen eine Spalte

Für alles, was keine formelle Papiereinreichung ist (Berichte, Dokumentationen, Lebensläufe, Vorabdrucke, die die Leute auf Laptops und Telefonen lesen), gewinnt eine einzelne Spalte. PDFs fließen nicht um, daher zwingen zweispaltige Seiten Bildschirmleser und Textextraktoren dazu, die Lesereihenfolge zu erraten, und sie zwingen Menschen, innerhalb jeder Seite nach oben und unten zu scrollen. Lebenslauf-Parsing-Systeme sind dafür berüchtigt, mehrspaltige Layouts durcheinander zu bringen. Reservieren Sie zwei Säulen für Veranstaltungsorte, die dies erfordern.

## Die Dokumentklasse entscheidet für Sie

Hier ist der entspannende Teil: Sie konfigurieren dies fast nie von Hand. Der Veranstaltungsort stellt Ihnen einen Kurs oder eine Vorlage zur Verfügung, und das Layout liegt bei.

```latex
\documentclass{article}              % one column
\documentclass[twocolumn]{article}   % two columns
\documentclass[sigconf]{acmart}      % venue class, layout included
```

Schreiben Sie Ihre Inhalte einmal, und durch den Wechsel der Vorlagen wird alles neu gestaltet. Dafür gibt es LaTeX: Dieselbe Quelle wird zu einer zweispaltigen Konferenzversion und einem einspaltigen Vorabdruck mit einer einzeiligen Änderung kompiliert. Behalten Sie Ihre Abbildungen im Vektorformat und Ihre Gleichungen in Standardumgebungen, und der Layoutwechsel ist nahezu schmerzlos.