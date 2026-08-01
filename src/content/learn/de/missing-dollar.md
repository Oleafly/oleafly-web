---

title: "Fehlender Dollar eingefügt"
description: "Indizes und mathematische Befehle, die in den Textmodus gelangt sind."
category: "log-literacy"
order: 2
level: "beginner"
tags: ["errors", "math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Missing dollar check'
  questions:
    - prompt: 'What does Missing $ inserted usually mean?'
      choices:
        - 'You need a payment method'
        - 'Math-only syntax showed up in text mode'
        - 'A PDF font license expired'
        - 'You forgot \maketitle'
      answer: 'B'
      level: beginner
    - prompt: 'Which characters often trigger this in text mode?'
      choices:
        - 'Comma and period'
        - 'Underscore _ and caret ^ (and many math commands)'
        - 'Space and tab'
        - 'The @ in every email address'
      answer: 'B'
      level: beginner
    - prompt: 'How do you print a literal underscore in text (say a gene name)?'
      choices:
        - 'DNA_seq unchanged'
        - 'DNA\_seq'
        - 'DNA\&seq'
        - 'DNA\section{seq}'
      answer: 'B'
      level: beginner
    - prompt: 'The flagged line looks fine. What should you check next?'
      choices:
        - 'Printer drivers'
        - 'An earlier unclosed $ or mismatched math delimiters above that line'
        - 'Only the bibliography style'
        - 'Whether the file is named main.tex'
      answer: 'B'
      level: intermediate
    - prompt: 'Why isn''t a successful PDF proof the error was harmless?'
      choices:
        - 'PDFs never show math'
        - 'LaTeX often recovers by inserting $, which leaves wrong italics or spacing'
        - 'Compilers ignore all errors'
        - 'SyncTeX deletes the log'
      answer: 'B'
      level: beginner
---

# Fehlender Dollar eingefügt

„Fehlendes $ eingefügt“ ist der häufigste LaTeX-Fehler, und sein Name führt in die Irre: LaTeX verlangt nicht, Geld auszugeben, sondern sagt Ihnen, dass im Textmodus nur mathematische Syntax angezeigt wird. Es fügt das „$“ selbst zur Wiederherstellung ein, fährt mit der Kompilierung fort und hinterlässt oft eine seltsame kursive Ausgabe im Nachhinein, sodass die Meldung eher eine echte Korrektur als ein Achselzucken verdient.

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

## Was es auslöst

Zwei Zeichen und eine Befehlsklasse gehören ausschließlich zum Mathematikmodus. Der Unterstrich „_“ und das Caretzeichen „^“ erzeugen tiefgestellte und hochgestellte Zeichen, und Befehle wie „\alpha“, „\frac“ und „\leq“ erzeugen mathematische Symbole. Jeder davon im Klartext löst den Fehler aus. Der klassische Fall ist ein Bezeichner, der einen Unterstrich enthält, z. B. ein Dateiname oder ein Genname: „DNA_seq“ in einem Satz löst auf dem „_“ aus.

Die Lösung hängt davon ab, was Sie gemeint haben. Wenn der Unterstrich ein Literalzeichen ist, maskieren Sie ihn: „DNA\_seq“ gibt den Namen mit einem echten Unterstrich aus. Wenn Sie einen Index meinten, dann meinten Sie Mathematik, also umschließen Sie den Ausdruck: „$x_i$“ setzt ein x mit dem Index i, in mathematischer Kursivschrift mit korrektem Abstand. Für die vollständige Liste der Zeichen, die im Text maskiert werden müssen, gibt es eine eigene Lektion (/learn/special-characters/), und die mathematischen Trennzeichen selbst werden in den [Grundlagen des Mathematikmodus] (/learn/math-mode/) behandelt.

## Wenn das Protokoll auf eine seltsame Stelle zeigt

Die gemeldete Zeilennummer gibt an, wo LaTeX das Problem bemerkt hat, nicht unbedingt, wo Sie es verursacht haben. Der übliche Schuldige ist ein nicht geschlossenes „$“ früher: Sie haben den Mathematikmodus geöffnet und nie geschlossen, also lief LaTeX im Mathematikmodus weiter, bis das Problem durch etwas erzwungen wurde, oft am Ende des Absatzes. Eine Leerzeile in „display math“ löst den gleichen Fehler aus, da Absatzumbrüche im Mathematikmodus unzulässig sind. Wenn die markierte Zeile also harmlos aussieht, suchen Sie nach oben nach einer ungeraden Anzahl von Dollarzeichen und prüfen Sie, ob zu jedem „\[“ ein passendes „\]“ vorhanden ist.

Syntaxhervorhebung ist der schnelle Weg, den Ausreißer zu erkennen: Jeder LaTeX-Editor färbt mathematische Bereiche unterschiedlich ein, sodass ein Absatz, der plötzlich in mathematischen Farben gerendert wird, den offenen Dollar auf einen Blick erkennt.

Eine letzte Warnung: Da LaTeX durch das Einfügen des fehlenden „$“ wiederhergestellt wird, wird häufig trotzdem eine PDF-Datei erstellt. Betrachten Sie das PDF nicht als Beweis dafür, dass der Fehler harmlos war. Die wiederhergestellte Ausgabe enthält normalerweise verirrte Kursivschrift oder verstümmelte Abstände an der Stelle, an der sich Ihr Text befinden sollte. Korrigieren Sie daher die Quelle, bis das Protokoll sauber ist.