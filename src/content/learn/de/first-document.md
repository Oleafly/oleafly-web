---

title: "Stellen Sie Ihr erstes PDF zusammen"
description: "Ein kleiner Artikel, eine Kompilierung und die drei Ideen, mit denen Sie LaTeX optimal nutzen können."
category: "open-the-loop"
order: 1
level: "beginner"
tags: ["basics", "compile"]
featured: true
updated: 2026-07-25
quiz:
  title: 'First document check'
  questions:
    - prompt: 'What does compiling a LaTeX file actually do?'
      choices:
        - 'Uploads your paper to a journal.'
        - 'Runs a LaTeX engine over your .tex file and writes a PDF.'
        - 'Turns Word formatting into markdown.'
        - 'Only checks grammar; layout is separate.'
      answer: 'B'
      level: beginner
    - prompt: 'What does \documentclass{article} mainly set?'
      choices:
        - 'Only the title font.'
        - 'The document type and the usual defaults for fonts, margins, and headings.'
        - 'Your bibliography style forever.'
        - 'That math mode is off.'
      answer: 'B'
      level: beginner
    - prompt: 'When do title, author, and date show up on the page?'
      choices:
        - 'As soon as you write \title{...} in the preamble.'
        - 'When you call \maketitle in the body.'
        - 'Only after bibtex runs.'
        - 'Never. Titles are only PDF metadata.'
      answer: 'B'
      explanation: '\title, \author, and \date just store values. \maketitle is what prints them.'
      level: beginner
    - prompt: 'Which three ideas cover most of day-to-day LaTeX?'
      choices:
        - 'Themes, clipart, and track changes.'
        - 'Commands (backslash + braces), environments (begin/end), and a preamble before begin{document}.'
        - 'WYSIWYG, stylesheets, and mail merge.'
        - 'HTML, CSS, and JavaScript.'
      answer: 'B'
      level: beginner
    - prompt: 'Where does visible body content start?'
      choices:
        - 'On the first line of the .tex file'
        - 'After \begin{document}'
        - 'Only inside \section{}'
        - 'After \end{document}'
      answer: 'B'
      level: beginner
---

# Stellen Sie Ihr erstes PDF zusammen

Wenn Sie bisher nur in Word oder Google Docs geschrieben haben, werden Sie von LaTeX aufgefordert, eine Gewohnheit aufzugeben. Anstatt Text während der Eingabe zu formatieren, beschreiben Sie Ihr Dokument im Klartext und lassen es von einem Programm für Sie setzen. Dieser Klartext befindet sich in einer „.tex“-Datei: einer gewöhnlichen Textdatei, die Sie in jedem Editor öffnen können, mit Ihren Wörtern und Befehlen wie „\section{...}“, die sagen, was jedes Stück *ist*. Durch das Kompilieren wird aus dieser Quelle ein fertiges PDF. Eine LaTeX-Engine liest Ihre Datei von oben nach unten, interpretiert jeden Befehl, gestaltet die Seiten und schreibt das PDF. Sie formatieren die Ausgabe niemals direkt. Sie bearbeiten die Quelle und kompilieren erneut.

## Das kleinste echte Dokument

```latex
\documentclass{article}

\title{My First Document}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
Hello, \LaTeX! Math works inline like $E = mc^2$ or on its own line:
\[
 x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\end{document}
```

Lesen Sie es von oben bis unten. „\documentclass{article}“ teilt der Engine mit, um welche Art von Dokument es sich handelt, wodurch sinnvolle Standardeinstellungen für Schriftarten, Ränder und Überschriftenstile festgelegt werden. Die Zeilen „\title“, „\author“ und „\date“ speichern nur Metadaten; Es wird noch nichts gedruckt und „\today“ bedeutet einfach das Datum des Tages, den Sie kompilieren. „\begin{document}“ markiert den Beginn des eigentlichen Inhalts. „\maketitle“ ist der Moment, in dem der gespeicherte Titelblock auf der Seite erscheint. „\section{Introduction}“ gibt eine nummerierte Überschrift aus und zeichnet sie still auf, damit sie später in einem Inhaltsverzeichnis gefunden werden kann. Die letzten Zeilen zeigen die beiden Gesichter der Mathematik: „$...$“ setzt eine Formel innerhalb eines Satzes, während „\[ ... \]“ ihr eine eigene zentrierte Anzeigezeile verleiht.

## Drei Ideen, die die Sprache tragen

1. Befehle beginnen mit einem Backslash und nehmen normalerweise ein Argument in geschweiften Klammern an, daher bedeutet „\textbf{hello}“ „Hallo in Fettschrift setzen“.
2. Umgebungen umschließen einen Bereich zwischen „\begin{...}“ und „\end{...}“, und der Hauptteil Ihrer Datei ist selbst eine große „Dokument“-Umgebung.
3. Die Präambel ist alles vor „\begin{document}“; Es konfiguriert das Dokument, erzeugt jedoch niemals sichtbaren Text.

Fast alles andere in LaTeX ist eine Variation dieser drei.

## Kompilieren Sie es

Erstellen Sie in [Oleafly](/docs/getting-started/) ein Projekt, fügen Sie die Quelle oben ein und kompilieren Sie. Das PDF erscheint neben Ihrer Quelle und SyncTeX verknüpft die beiden Seiten: Klicken Sie auf eine Stelle im PDF, um zur entsprechenden Quellzeile zu springen, oder umgekehrt. Das allererste Kompilieren eines Projekts kann etwas länger dauern, während die Engine das abruft, was sie benötigt. Spätere Läufe sind schneller.

Eines ist zu erwarten: Früher oder später schlägt eine Kompilierung mit einer Fehlermeldung und einer Zeilennummer fehl. Dies ist völlig normal und bedeutet normalerweise einen Tippfehler im Befehlsnamen oder eine fehlende schließende Klammer. Korrigieren Sie die Linie, auf die es zeigt, und kompilieren Sie erneut.

## Nächste

Fahren Sie mit [der Präambel, erklärt](/learn/preamble-explained/) fort, um zu sehen, was die Setup-Zeilen wirklich bewirken, und dann mit dem [Mathe-Modus](/learn/math-mode/) für Formeln. Lassen Sie den [Spickzettel](/learn/cheatsheet/) geöffnet, während Sie Ihre erste richtige Seite schreiben.