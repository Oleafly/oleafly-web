---

title: "Makros, die die Notation ehrlich halten"
description: "newcommand, NewDocumentCommand, eine gemeinsam genutzte Makrodatei."
category: "runtime"
order: 4
level: "intermediate"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# Makros, die die Notation ehrlich halten

In jeder Arbeit gibt es eine Notation, die sich wiederholt: die reellen Zahlen, einen Erwartungsoperator, einen absoluten Wert mit richtig großen Balken. Wenn Sie „\mathbb{R}“ an vierzig Stellen eingeben und Ihr Berater später „\mathbf{R}“ bevorzugt, müssen Sie vierzig Änderungen vornehmen und werden eine verpassen. Ein Makro wandelt diese Notation in einen einzigen benannten Befehl um, der einmal definiert wird. Ändern Sie die Definition und das gesamte Dokument folgt. So bleibt die Notation ehrlich: Die Quelle kann nicht aus der Synchronisierung mit sich selbst geraten.

## Befehle mit newcommand definieren

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\E}[1]{\mathbb{E}\left[#1\right]}
\newcommand{\abs}[1]{\left\lvert #1 \right\rvert}
```

Die erste Definition ist die einfachste: „\R“ ist jetzt eine reine Kurzschrift, und die Eingabe von „\R“ an einer beliebigen Stelle ergibt „\mathbb{R}“.

Die zweite Form erfordert ein Argument. Das „[1]“ nach dem Namen gibt an, dass „\E“ ein Argument akzeptiert, und „#1“ markiert, wo dieses Argument in der Erweiterung landet. So wird „\E{X}“ zu „\mathbb{E}\left[X\right]“. Die Definition erkauft mehr als nur Kürze: Das Paar „\left[“ und „\right]“ sorgt dafür, dass die Klammern so wachsen, dass sie zu allem passen, was darin steht, sodass „\E{\frac{X}{n}}“ automatisch hohe Klammern erhält. Das Makro „\abs“ macht dasselbe mit „\lvert“ und „\rvert“, dem richtigen Paar vertikaler Balken für den Absolutwert. Sie können bis zu neun Argumente deklarieren und diese als „#1“ bis „#9“ bezeichnen.

Wenn ein Befehl bereits existiert, weigert sich „\newcommand“, ihn neu zu definieren und stoppt mit einem Fehler, was Sie davor schützt, stillschweigend etwas kaputt zu machen. Um einen vorhandenen Befehl gezielt zu ersetzen, verwenden Sie stattdessen „\renewcommand“.

## Die moderne Schnittstelle

Aktuelles LaTeX bietet auch einen umfangreicheren Definitionsbefehl:

```latex
\NewDocumentCommand{\citepair}{mm}{\cite{#1}, \cite{#2}}
```

„\NewDocumentCommand“ verwendet eine Argumentspezifikationszeichenfolge anstelle einer Anzahl. Hier bedeutet „mm“ zwei obligatorische Argumente, daher zitiert „\citepair{knuth84}{lamport94}“ beide Schlüssel. Die Spezifikationssprache geht weiter, als „\newcommand“ es kann: „o“ deklariert ein optionales Argument in eckigen Klammern, „s“ erkennt eine Sternvariante und „O{default}“ gibt einem optionalen Argument einen Standardwert. Für alles, was über einen einfachen Ersatz hinausgeht, greifen Sie zu dieser Schnittstelle.

## Teilen Sie die Definitionen

Behalten Sie eine kapitelübergreifende Datei „macros.sty“ bei. Fügen Sie Ihre Definitionen in diese eine Datei ein, laden Sie sie mit „\usepackage{macros}“ aus jedem Dokument und jedem Kapitel einer Abschlussarbeit sowie den Folien und der Papierversion. Alle sind sich über die Notation einig. Wenn ein Mitarbeiter beitritt, liest er eine kurze Datei, um Ihre Konventionen zu lernen, anstatt sie aus dem Text zurückzuentwickeln. Dies lässt sich natürlich mit einem [Multi-File-Setup](/learn/split-chapter-files/) kombinieren.

Ein Tipp zur Benennung: Geben Sie Makros aussagekräftige Namen wie „\abs“ oder „\norm“ statt Namen, die auf dem Aussehen basieren, wie „\bigbars“. Der Name sollte sagen, was die Notation bedeutet, sodass die Definition frei geändert werden kann, wie sie aussieht. Und vermeiden Sie es, ein Makro für etwas zu definieren, das Sie zweimal verwenden. Die Auszahlung beginnt etwa bei der dritten Nutzung.