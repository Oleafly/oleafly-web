---

title: "Befehl oder Umgebung?"
description: "Makros akzeptieren Argumente; Umgebungen umschließen Regionen."
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Commands vs environments'
  questions:
    - prompt: 'What makes something a LaTeX command?'
      choices:
        - 'It always wraps many pages'
        - 'A backslash name that substitutes something in place, often with brace arguments'
        - 'It has to live in a .bib file'
        - 'It can''t take optional arguments'
      answer: 'B'
      level: beginner
    - prompt: 'What defines an environment?'
      choices:
        - 'A matching \begin{name} ... \end{name} pair around a region'
        - 'Any bold text'
        - 'Only math mode'
        - 'A single optional star'
      answer: 'A'
      level: beginner
    - prompt: 'Which of these is an environment?'
      choices:
        - '\textbf{hello}'
        - '\begin{center} ... \end{center}'
        - '\cite{knuth84}'
        - '\frac{a}{b}'
      answer: 'B'
      level: beginner
    - prompt: 'What does \begin{itemize} ended by \end{document} usually mean?'
      choices:
        - 'itemize is banned in article'
        - 'You opened an environment and never closed it'
        - 'You need more RAM'
        - 'The bibliography is empty'
      answer: 'B'
      level: beginner
    - prompt: 'Why write \LaTeX{} is fun instead of \LaTeX is fun?'
      choices:
        - 'Every command needs braces'
        - 'Many commands eat the following space; empty braces keep the space'
        - 'It turns hyperref on'
        - 'It forces math mode'
      answer: 'B'
      level: intermediate
---

# Befehl oder Umgebung?

Alles, was Sie in LaTeX über einfachen Text hinaus eingeben, nimmt eine von zwei Formen an: einen Befehl oder eine Umgebung. Die Unterscheidung klingt akademisch, bis Sie auf die erste Fehlermeldung stoßen. Die Hälfte der Beschwerden von LaTeX beziehen sich darauf, dass eines dort verwendet wird, wo das andere hingehört. Wenn Sie lernen, zu erkennen, welche Form Sie betrachten, werden sowohl die Dokumentation als auch die Fehler lesbar.

## Befehle

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

Ein Befehl besteht aus einem Backslash gefolgt von einem Namen und führt an der Stelle, an der er erscheint, eine Ersetzung durch. „\textbf{argument}“ nimmt ein Argument in geschweiften Klammern und setzt es fett; Die Wirkung beginnt und endet mit der Zahnspange. Befehle können mehrere Klammerargumente annehmen, und viele akzeptieren auch ein optionales Argument in eckigen Klammern davor, wie in „\documentclass[11pt]{article}“.

Die ersten beiden Zeilen zeigen, dass Sie Befehle erstellen können. „\newcommand{\foo}{bar}“ definiert einen neuen Befehl namens „\foo“, dessen Erweiterung der Text „bar“ ist, und von da an erzeugt die Eingabe von „\foo“ an einer beliebigen Stelle „bar“. Dies ist der Mechanismus hinter [benutzerdefinierten Makros](/learn/custom-commands/) und es ist auch die Funktionsweise von Paketen: Ein Paket ist größtenteils eine Datei mit Befehlsdefinitionen.

Eine Eigenart, die es wert ist, frühzeitig bekannt zu werden: Ein Befehl wie „\LaTeX“ verschluckt das Leerzeichen danach, sodass „\LaTeX is fun“ die Wörter hintereinander ausgibt. Schreiben Sie „\LaTeX{} macht Spaß“ oder „\LaTeX\ ist“, um den Platz freizuhalten.

## Umgebungen

```latex
\begin{center}
 Centered block
\end{center}
```

Eine Umgebung umschließt einen Bereich des Dokuments zwischen einem passenden Paar „\begin{...}“ und „\end{...}“ und wendet ihr Verhalten auf alles darin an. Hier zentriert die Umgebung „center“ jede Zeile des Blocks. Umgebungen können verschachtelt werden, sofern sie in der umgekehrten Reihenfolge geschlossen werden, in der sie geöffnet wurden, und sie können auch Argumente annehmen: „\begin{tabular}{ll}“ öffnet eine Tabelle und übergibt ihr eine Spaltenspezifikation.

Da Umgebungen ausgewogen sein müssen, scheitern sie auf besondere Weise. Ein Fehler wie „\begin{itemize} endete mit \end{document}“ bedeutet, dass eine Umgebung geöffnet und nie geschlossen wurde. Suchen Sie das fehlende „\end“; Starren Sie nicht auf die Zeile mit den Fehlernamen.

## Die Faustregel

Wenn es eine Region mit einem klaren Anfang und Ende umschließt, handelt es sich wahrscheinlich um eine Umgebung. Wenn es sich um eine kleine Ersetzung oder einen Schalter handelt, handelt es sich um einen Befehl. Die beiden Formen überschneiden sich sogar: Jede Umgebung „foo“ wird unter der Haube als Befehlspaar „\foo“ und „\endfoo“ implementiert. Eine Tour durch die Befehle und Umgebungen, denen Sie am häufigsten begegnen werden, finden Sie unter [Erklärung aller Befehle](/learn/every-command-explained/) oder probieren Sie beide Formen im [Live-Spielplatz](/live/) aus.