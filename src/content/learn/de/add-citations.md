---

title: "Vom .bib-Schlüssel zum Zitieren im Text"
description: "Die übliche BibTeX-Schleife mit Cite- und Bibliography-Befehlen."
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Citations check'
  questions:
    - prompt: 'What''s the usual BibTeX setup?'
      choices:
        - 'A Word comment plus a footnote'
        - 'A .bib entry and a \cite{key} in the document'
        - 'A bare URL in the text'
        - 'A screenshot from Google Scholar'
      answer: 'B'
      level: beginner
    - prompt: 'What has to match between \cite{...} and the .bib file?'
      choices:
        - 'The journal impact factor'
        - 'The citation key, exactly, including capitalization'
        - 'Only the PDF filename'
        - 'The section number'
      answer: 'B'
      level: beginner
    - prompt: 'What do \bibliographystyle and \bibliography usually control?'
      choices:
        - 'Figure placement and image DPI'
        - 'How references look, which .bib file to read, and where the list prints'
        - 'Math delimiters'
        - 'Page margins only'
      answer: 'B'
      level: beginner
    - prompt: 'Why isn''t one LaTeX pass enough for citations?'
      choices:
        - 'Citations need a browser'
        - 'BibTeX or biber, then more LaTeX passes, turn keys into markers and the reference list'
        - 'You have to reboot'
        - '\cite only works offline'
      answer: 'B'
      level: intermediate
    - prompt: 'Citations show as bold question marks. What''s a common cause?'
      choices:
        - 'The title is too long'
        - 'You skipped the bibliography step, or the key isn''t in the .bib file'
        - 'You used article class'
        - 'Math mode is open'
      answer: 'B'
      level: beginner
---

# Vom .bib-Schlüssel zum Zitieren im Text

Das Zitieren einer Quelle in LaTeX umfasst zwei Teile: eine Klartextdatenbank, die jedes Werk einmal beschreibt, und einen „\cite“-Befehl in Ihrem Dokument, der anhand seines Schlüssels auf einen Eintrag verweist. LaTeX nummeriert die Zitate, formatiert die Referenzliste und sorgt dafür, dass alles konsistent bleibt, wenn Sie Abschnitte neu anordnen oder Quellen hinzufügen. Sie geben niemals „[12]“ von Hand ein und nummerieren niemals selbst etwas neu.

## Die Befehle im Dokument

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

„\cite{knuth84}“ fügt die In-Text-Markierung überall dort ein, wo das Zitat hingehört. Die beiden Befehle unten erledigen den Rest: „\bibliographystyle{plain}“ wählt aus, wie Zitate und Referenzen formatiert werden, und „\bibliography{refs}“ benennt die Datenbankdatei (ohne die Erweiterung „.bib“) und markiert, wo die Referenzliste gedruckt werden soll, normalerweise direkt vor „\end{document}“. In der Liste erscheinen nur die Quellen, die Sie tatsächlich zitieren.

## Der Eintrag in der Datenbank

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

Diese befindet sich in „refs.bib“, einer separaten Datei neben Ihrer „main.tex“. Das Wort nach „@“ ist der Eintragstyp, „knuth84“ ist der Zitierschlüssel und der Rest sind Felder, die der Stil zum Erstellen der formatierten Referenz verwendet. Der Schlüssel ist die einzige Verbindung zwischen den beiden Dateien, daher muss er genau mit dem Argument von „\cite“ übereinstimmen, einschließlich Groß- und Kleinschreibung. Mit dem [BibTeX-Validator](/tools/bibtex-validator/) können Sie eine ganze Datenbank auf fehlende Felder und fehlerhafte Einträge überprüfen.

## Warum eine Kompilierung nicht ausreicht

Die Bibliographie wird von einem separaten Programm erstellt. Beim ersten LaTeX-Durchlauf schreibt das Dokument die Liste der zitierten Schlüssel in eine Hilfsdatei. Das Programm „bibtex“ liest dann diese Liste, ruft die passenden Einträge aus „refs.bib“ ab und formatiert sie. Zwei weitere LaTeX-Durchläufe falten das Ergebnis wieder ein und lösen die In-Text-Markierungen auf. Oleafly führt diesen vollständigen Zyklus bei jeder Kompilierung für Sie aus. Wenn Sie von Hand erstellen und den mittleren Schritt überspringen, werden Zitate als fettgedruckte Fragezeichen angezeigt. Lesen Sie in diesem Fall den Abschnitt [Geheimnisvolle Zitatzeichen löschen](/learn/citation-question-mark/).

## Wohin von hier aus?

Eine einzelne „.bib“-Datei kann für jede Arbeit, die Sie schreiben, verwendet werden, daher lohnt es sich, sie sorgfältig zu erstellen. [Erstellen Sie eine .bib, die überdauert](/learn/create-bibliography/) deckt Eintragstypen, erforderliche Felder und Schlüssel ab, die ein Jahrzehnt überdauern. Wenn ein Veranstaltungsort ein anderes Erscheinungsbild wünscht, ändern Sie eine Zeile und nicht irgendwelche Einträge, wie unter [Numerisch, Autor-Jahr, Zeitschriftenstile](/learn/change-citation-style/) erläutert.