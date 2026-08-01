---

title: "Alles oben beginnt{document}"
description: "Pakete, Metadaten und Ladereihenfolge: Was in die Präambel gehört und was nicht."
category: "open-the-loop"
order: 3
level: "beginner"
tags: ["basics", "preamble"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Preamble check'
  questions:
    - prompt: 'What is the preamble?'
      choices:
        - 'Everything after \end{document}'
        - 'Everything between \documentclass{...} and \begin{document}'
        - 'Only the bibliography file'
        - 'The PDF outline panel'
      answer: 'B'
      level: beginner
    - prompt: 'Does preamble material print as body text on its own?'
      choices:
        - 'Yes. Every package prints a banner page.'
        - 'No. It configures the run; visible text starts in the body.'
        - 'Only if you use article.'
        - 'Only on the second compile.'
      answer: 'B'
      level: beginner
    - prompt: 'Why is hyperref usually loaded late in the preamble?'
      choices:
        - 'Loading it earlier is illegal.'
        - 'It rewrites a lot of commands, so it wants other packages loaded first.'
        - 'It only works after \maketitle.'
        - 'Loaded early, it disables amsmath.'
      answer: 'B'
      level: intermediate
    - prompt: 'Which of these belongs in the preamble?'
      choices:
        - 'A multi-paragraph introduction'
        - '\usepackage{amsmath} and \title{...}'
        - '\section{Results}'
        - 'The main \includegraphics for a figure'
      answer: 'B'
      level: beginner
    - prompt: 'What do options like 11pt on \documentclass mostly control?'
      choices:
        - 'Journal acceptance rate'
        - 'Global defaults such as base font size (and often paper size)'
        - 'Which OS you compiled on'
        - 'How many figures you''re allowed'
      answer: 'B'
      level: beginner
---

# Alles oben begin{document}

Alles zwischen „\documentclass{...}“ und „\begin{document}“ ist die **Präambel**. Es wird kein sichtbarer Text erzeugt. Es konfiguriert den Lauf. Schriftarten, Ränder, Pakete, benutzerdefinierte Befehle und Dokumentmetadaten sind alle hier zu finden, weshalb die Einleitung eines ausgereiften Artikels oft länger ist als seine Einleitung. Sobald Sie wissen, was jede Zeile bewirkt, ist eine kopierte Vorlage kein Zauber mehr, sondern wird zu einer Checkliste.

## Anatomie

```latex
\documentclass[11pt,a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx,booktabs}
\usepackage{hyperref} % load late

\title{Title}
\author{You}
\date{\today}
```

Die Optionen unter „\documentclass“ legen globale Standardwerte fest: „11pt“ ist die Basisschriftgröße, von der aus alles andere skaliert wird, und „a4paper“ gibt die Papiergröße an. Die beiden Codierungszeilen sind historische Begleiter: „inputenc“ teilt der Engine mit, dass Ihre Quelldatei UTF-8 ist, und „fontenc“ wählt die Schriftartencodierung aus, sodass akzentuierte Zeichen echte Glyphen und keine zusammengesetzten Zeichen sind. Aktuelles LaTeX geht bereits von UTF-8-Eingaben aus, daher werden diese Zeilen in neuen Dokumenten weggelassen, aber sie sind harmlos und werden aus Kompatibilitätsgründen in Vorlagen beibehalten.

Der mittlere Block lädt Funktionspakete. [geometry](/learn/margins-geometry/) legt die Ränder in einer Option fest, „amsmath“ und „amssymb“ stellen die mathematischen Umgebungen und Symbole bereit, die fast jedes technische Dokument benötigt, „graphicx“ aktiviert „\includegraphics“ für Abbildungen und „booktabs“ stellt die Regeln bereit, die Tabellen professionell aussehen lassen. Schließlich macht [hyperref](/learn/hyperlinks/) Referenzen und Zitate anklickbar und wird absichtlich zuletzt geladen, da es Interna vieler anderer Pakete neu definiert.

Die Zeilen „\title“, „\author“ und „\date“ speichern nur Metadaten. Es wird nichts gedruckt, bis „\maketitle“ im Hauptteil ausgeführt wird, weshalb diese überhaupt in der Präambel stehen können.

## Faustregeln

Ein paar Gewohnheiten halten Präambeln gesund. Laden Sie ein Paket pro Auftrag und vermeiden Sie es, Pakete zu stapeln, die sich über dasselbe Gebiet streiten, wie z. B. zwei Möglichkeiten zum Festlegen von Rändern. Behalten Sie hyperref am Ende bei, mit den wenigen dokumentierten Ausnahmen wie cleveref, die danach folgen müssen. Fügen Sie dokumentweite Auswahlmöglichkeiten in die Klassenoptionen ein, anstatt sie zu verstreuen, sodass „11pt“ oder „twocolumn“ einmal deklariert wird, wo es jeder sehen kann. Und sobald Ihre [benutzerdefinierten Makros](/learn/custom-commands/) über ein paar Zeilen hinauswachsen, verschieben Sie sie in eine „.sty“-Datei, damit mehrere Dokumente einen Definitionssatz gemeinsam nutzen können.

Die nützlichste Disziplin ist die negative: Wenn Sie nicht wissen, warum eine Präambelzeile vorhanden ist, finden Sie es heraus, bevor Ihr Dokument davon abhängt. In kopierten Präambeln häufen sich Deadlines an, und in Deadlines verbergen sich Paketkonflikte. Siehe auch [das Dokumentgerüst](/learn/document-skeleton/) und [Vergleich der Engines](/learn/engines-compared/).