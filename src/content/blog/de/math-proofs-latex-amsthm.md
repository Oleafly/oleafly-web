---

title: "Mathematikstudenten: Theoreme, Beweise und Notation, die konsistent bleibt"
description: "Amsthm-Stile, Lemma-Nummerierung, Makrohygiene, lange Ableitungen und Multi-File-Gewohnheiten für reine und angewandte Mathematikaufsätze."
date: 2026-07-12
tags: [mathematics, proofs, math]
---

Mathematikarbeiten bestehen aus Notation und Beweisstruktur. LaTeX ist die Standardeinstellung, weil beides
Wird in Word schmerzhaft, wenn das Argument länger als eine Seite dauert. Der Compiler ist
nicht der schwierige Teil. Konsistenz ist: Theoremzahlen, die springen, wenn Sie a einfügen
Lemma, ein Buchstabe „V“, der drei verschiedene Dinge bedeutet, und Beweise, die das verlassen
QED-Markierung in der nächsten Zeile schwebend.

Dies ist ein praktischer Aufbau für Kursarbeiten, arXiv-Notizen und Kapitel von Abschlussarbeiten.
Stehlen Sie, was Sie brauchen; ignoriere den Rest, bis es weh tut.

## amsthm früh, vor dem ersten Lemma

Laden Sie „amsthm“, bevor Sie einen ad-hoc-mutigen „Theorem“ erfinden. Überschriften:

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{proposition}[theorem]{Proposition}
\newtheorem{corollary}[theorem]{Corollary}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]
\newtheorem{example}{Example}[section]
\theoremstyle{remark}
\newtheorem*{remark}{Remark}
```

Durch die Nummerierung nach Abschnitt bleiben die Referenzen stabil, wenn Sie Material über a einfügen
Ergebnis. Es ist üblich, einen Zähler („[Theorem]“) für Lemmata und Sätze zu teilen
in reiner Mathematik; Bewerbungsunterlagen nummerieren manchmal alles unabhängig voneinander. Wählen Sie eine aus
und bleiben Sie für das gesamte Dokument dabei.

Lektion: [Theorem- und Beweisblöcke](/learn/theorems-proofs/).

## Beweise, die sauber enden

Verwenden Sie die „Proof“-Umgebung, damit die End-of-Proof-Marke an der richtigen Stelle landet:

```latex
\begin{proof}
  ...
\end{proof}
```

Wenn die letzte Zeile eine angezeigte Gleichung ist, enden Sie mit „\qedhere“, damit das Feld angezeigt wird
not orphan in der folgenden Zeile. Verschachtelte Beweise (Behauptung innerhalb eines Beweises) funktionieren
besser als „Claim“-Umgebungen mit eigenen kurzen Beweisen als als eingerückte Umgebungen
Prosa, die niemals endet.

Für Hausaufgaben, bei denen der Lehrer handmarkierte Schritte wünscht, verwenden Sie dennoch LaTeX
die saubere Einreichungs-PDF, aber bewahren Sie grobe Arbeiten in einer separaten Notizdatei auf, damit Sie sie erledigen können
Beim Neuschreiben wird nicht die einzig richtige Zeile gelöscht.

## Makrohygiene

Symbole einmalig definieren:

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\eps}{\varepsilon}
\DeclareMathOperator{\Hom}{Hom}
\DeclareMathOperator{\Spec}{Spec}
```

Wenn zwei Begriffe einen Buchstaben haben, disambiguieren Sie sie mit Makros („\VectSpace“ vs
`\RandomVar`), anstatt `V` mit verschiedenen Schriftarten wiederzuverwenden. Mitautoren werden dies nicht tun
Erraten Sie, welche Schriftart welches Objekt bedeutet. Wenn ein Notationsblatt über den Bildschirm hinauswächst,
Fügen Sie es in „notation.tex“ ein und geben Sie es ein, damit jeder eine Datei bearbeitet.

KI-Tools lieben es, neue Symbole zu erfinden. Wenn Sie einen verwenden, fügen Sie Ihren Makroblock ein
Die Eingabeaufforderung und die Aufforderung verwenden nur definierte Namen. Es gilt die gleiche Disziplin
ohne KI: neues Symbol → zum Blatt hinzufügen → dann eingeben.

## Für lange Ableitungen ausrichten

„align“ und „split“ sorgen dafür, dass mehrzeilige Berechnungen lesbar bleiben. Die Zahl leitet dich nur an
wird mit `\eqref` zitieren. Einer Wand aus nummerierten Gleichungen ist schwerer zu folgen als a
kurze Erzählung mit zwei getaggten Zeilen.

```latex
\begin{align}
  f(x)
  &= g(x) + h(x) \label{eq:decomp} \\
  &= \cdots
\end{align}
```

Für eine einzelne mehrzeilige Gleichung, die eine Zahl enthalten soll, verwenden Sie „split“.
innerhalb von „Gleichung“. Für Fälle ist „cases“ oder „aligned“ besser als eine selbst erstellte Reihe von
Rohre.

## Querverweise, die eine Neuordnung überdauern

Schreiben Sie „nach Satz 2.3“ niemals als bloßen Text. Verwenden Sie „\ref“ oder, mit „cleveref“,
`\cref{thm:main}`. Beschriftungen folgen der Bildunterschrift oder der Theorem-Titelzeile, nicht
vor. Wenn zwei Kapitel gemeinsame Bezeichnungen wie „thm:main“ haben, stellen Sie das Kapitel nach Kapitel voran
(`ch3-thm:main`) oder Sie erhalten stillschweigend falsche Ziele, wenn Sie Dateien zusammenführen.

Projektweite Go-to-Definition- und Live-Überprüfungen defekter Referenzen helfen bei mehreren Dateien
Thesen. Das ist mittlerweile normales Recherche-Redakteur-Territorium und kein Luxus mehr.

## Notizen und Abschlussarbeiten mit mehreren Dateien

Selbst ein langer Hausaufgabensatz ist mit einer Stammdatei und Abschnittseingaben einfacher. Thesen
Sie möchten fast immer „\include“ pro Kapitel und „\includeonly“, während Sie eines entwerfen
Kapitel für Kapitel. Behalten Sie die Zahlen unter „figures/ch3/“, damit die Neuordnung der Kapitel funktioniert
keine Wege brechen.

Das Kompilieren vollständiger Abschlussarbeiten wird langsam. Figurenmodus entwerfen, schweres TikZ externalisieren und
Kompilieren Sie nach Möglichkeit nur das Kapitel, das Sie bearbeiten. Siehe
[geteilte Kapiteldateien](/learn/split-chapter-files/) und
[Kompilierung beschleunigen](/learn/speed-up-compilation/).

## Wenn das PDF die Abgabe ist

Kursarbeit braucht immer noch die langweilige Hülle: Ränder gemäß Lehrplan, Seitenzahlen,
Titel und manchmal eine Erklärung der akademischen Integrität. Die
[Kurzreferenz](/learn/cheatsheet/) deckt das ab, damit Sie sich darauf konzentrieren können
der Beweis.

Behalten Sie die Quelle. Ein markiertes PDF ohne „.tex“ ist eine Sackgasse, wenn das nächste Problem auftritt
set verwendet dieselbe Präambel wieder. Ein lokaler Ordner mit dem Git-Verlauf (oder einer Recherche
Editor, den Checkpoints für Sie kompiliert) schlägt „final_v3_really.pdf“ auf dem
Desktop.

## Bevor Sie absenden

Stellen Sie sicher, dass Theoreme und Lemmata ein kohärentes Nummerierungsschema haben, jedes Symbol darin
Der Körper wird im Makroblatt definiert und Beweise verwenden „proof“ / „\qedhere“.
wo nötig. Nummerieren Sie nur die Gleichungen, die Sie zitieren. Alle Querverweise sollten vorhanden sein
`\ref`/`\cref`, keine fest codierten Zahlen. Öffnen Sie das PDF einmal: Schriftarten einbetten, Ränder
passen Sie zum Briefing.

## Hausaufgaben vs. Papier

Bei Hausaufgaben ist Klarheit wichtiger als Paket-Klugheit. Für eine Arbeit oder ein Dissertationskapitel,
Investieren Sie einmal in den Satzaufbau und das Makroblatt und verwenden Sie es dann wieder. Nicht neu aufbauen
Nummerierung mitten im Projekt, weil in einem Blogbeitrag ein anderer Stil vorgeschlagen wurde.

## Teilen mit Co-Autoren

Senden Sie ein PDF zum Lesen und ein Repo (oder eine ZIP-Datei mit Quellen) zum Bearbeiten. Wenn ein
Co-Autor gibt nur gescanntes Markup zurück, wendet es am selben Tag an und schreibt es fest. Abgestanden
Papierstapel sind die Art und Weise, wie zwei Personen dasselbe Lemma unterschiedlich „fixieren“.

Nach dieser Einrichtungsarbeit verschwindet LaTeX größtenteils und Sie können über die Mathematik nachdenken.