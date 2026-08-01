---

title: "Ein Skelett, das Sie wiederverwenden können"
description: "Klasse, Präambel, Titel, Abschnitte, Bibliographie: die Form fast jeder Arbeit."
category: "open-the-loop"
order: 7
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Document skeleton check'
  questions:
    - prompt: 'What are the three main parts of a typical LaTeX document?'
      choices:
        - 'Abstract, figures, and appendix only'
        - 'The class line, the preamble, and the body between begin/end{document}'
        - 'Header, footer, and sidebar'
        - 'A .bib file, a style file, and a PDF'
      answer: 'B'
      level: beginner
    - prompt: 'Which class do you usually pick for a short paper or homework?'
      choices:
        - 'beamer'
        - 'article'
        - 'book'
        - 'no class at all'
      answer: 'B'
      level: beginner
    - prompt: 'Why does pasting \chapter into an article often blow up?'
      choices:
        - 'article turns off all numbering'
        - 'article has no \chapter; chapters live in report/book-style classes'
        - 'You forgot graphicx'
        - 'Chapters only work offline'
      answer: 'B'
      level: beginner
    - prompt: 'If you put real text before \begin{document}, what error do you usually see?'
      choices:
        - 'Undefined control sequence for \par'
        - 'Missing \begin{document}'
        - 'Overfull hbox'
        - 'Citation undefined'
      answer: 'B'
      explanation: 'The preamble is for setup only. It shouldn''t print body text.'
      level: beginner
    - prompt: 'What happens to text after \end{document}?'
      choices:
        - 'It becomes a second PDF page'
        - 'LaTeX ignores it'
        - 'It gets moved into the abstract'
        - 'It always fatal-errors'
      answer: 'B'
      level: beginner
---

# Ein Skelett, das Sie wiederverwenden können

Entfernen Sie den Inhalt und fast jedes LaTeX-Dokument hat das gleiche Grundgerüst: eine Klassendeklaration, eine Präambel des Setups und einen Text zwischen „\begin{document}“ und „\end{document}“. Sobald Sie diese Form kennen, starten Sie ein neues Projekt, indem Sie das Gerüst einfügen, den Titel ändern und schreiben.

```latex
\documentclass[11pt]{article}
% preamble: packages, macros, metadata
\title{...}
\author{...}
\begin{document}
\maketitle
% body: sections, figures, bibliography
\end{document}
```

Von oben nach unten lesen: „\documentclass[11pt]{article}“ wählt den Dokumenttyp aus und legt optional die Basisschriftgröße fest. Alles andere im Design ergibt sich aus dieser Wahl. Der Bereich zwischen der Klassenzeile und „\begin{document}“ ist die [Präambel](/learn/preamble-explained/), in der Pakete geladen und Metadaten wie „\title“ und „\author“ gespeichert werden. „\begin{document}“ markiert, wo sichtbarer Inhalt beginnt, „\maketitle“ setzt den gespeicherten Titelblock und der Hauptteil folgt in Form von Abschnitten, Abbildungen und schließlich einer Bibliographie. `\end{document}` schließt das Dokument. Alles, was danach folgt, wird stillschweigend ignoriert, wodurch gelegentlich ein Textblock verdeckt wird, den jemand an der falschen Stelle eingefügt hat.

## Klassenauswahl

| Klasse | Verwenden Sie |
| --- | --- |
| `Artikel` | Papiere, Hausaufgaben, Notizen |
| `Bericht` | Längere Berichte mit Kapiteln |
| „Buch“ | Bücher und viele Abschlussarbeiten |
| `Beamer` | Folien |

Die Klasse ist nicht kosmetisch; Es ändert, welche Befehle vorhanden sind. „article“ hat kein „\chapter“, daher schlägt das Einfügen von Kapiteln der Abschlussarbeit sofort fehl. „report“ fügt Kapitel hinzu und gibt dem Titel eine eigene Seite. „book“ geht von beidseitigem Druck aus und öffnet Kapitel auf der rechten Seite. „beamer“ strukturiert alles rund um Rahmen für Dias neu. Zeitschriften und Konferenzen bieten ihre eigenen Klassen an, und wenn Sie für einen Veranstaltungsort schreiben, ersetzt dessen Klasse diese Entscheidung vollständig.

Zwei Fehler sind für die meisten gebrochenen Skelette verantwortlich. Text, der vor „\begin{document}“ platziert wird, löst den Fehler „Missing \begin{document}“ aus, da die Präambel möglicherweise nur konfiguriert und niemals gedruckt wird. Und ein fehlendes „\end{document}“ lässt den Compiler am Ende der Datei mit einer nicht hilfreichen Meldung über das Ende der Eingabe warten. Wenn beides erscheint, überprüfen Sie den Rahmen des Dokuments, bevor Sie den Inhalt vermuten.

Die Skelettschuppen. Eine vierseitige Notiz hält den Text im Einklang; Eine Abschlussarbeit verschiebt jedes Kapitel in eine eigene Datei und ruft sie aus dem Stammverzeichnis ab, wie in [geteilte Kapiteldateien](/learn/split-chapter-files/) gezeigt. Der Rahmen um sie herum ändert sich nicht.