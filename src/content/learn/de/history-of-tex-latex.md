---

title: "TeX, LaTeX und 45 Jahre schöne Dokumente"
description: "Wie ein verärgerter Informatiker 1978 das Satzsystem aufbaute, die Forschung geht noch immer weiter."
category: "research-101"
order: 8
level: "beginner"
tags: ["research", "basics", "latex"]
featured: false
updated: 2026-07-25
---

# TeX, LaTeX und 45 Jahre schöne Dokumente

Jedes Werkzeug, das Sie zum Schreiben von Arbeiten verwenden, ist auf die Frustration eines Mannes über hässliche Korrekturabzüge zurückzuführen. Die Geschichte ist kurz und erklärt viel darüber, warum wissenschaftliches Schreiben so funktioniert.

## 1978: Knuth ärgert sich

Donald Knuth, ein Informatiker aus Stanford, schrieb gerade seine epische Buchreihe „The Art of Computer Programming“. Als der Verlag vom traditionellen Metallsatz auf frühe digitale Systeme umstieg, sahen die neuen Korrekturabzüge schrecklich aus, insbesondere die Mathematik. Knuths Reaktion war herrlich unverhältnismäßig: Er pausierte die Bücher und verbrachte Jahre damit, sein eigenes Satzsystem **TeX** (ausgesprochen „tech“, das X ist ein griechisches Chi) zu entwickeln, das er 1978 veröffentlichte.

TeX war ein Programm, das einfachen Text mit Markup-Befehlen verarbeitete und typografisch hervorragende Seiten erzeugte: perfekte mathematische Abstände, elegante Absatzzeilenumbrüche, das funktionierte. Knuth hat schließlich seinen Kern eingefroren und bietet für jeden gefundenen Fehler eine Kopfgeldprüfung an. Es wurden nur sehr wenige Ansprüche geltend gemacht.

## 1984: Lamport macht es nutzbar

Raw TeX ist leistungsstark, aber auf niedrigem Niveau, wie eine Assemblersprache für Seiten. 1984 veröffentlichte Leslie Lamport (später Gewinner des Turing-Preises für verteilte Systeme) **LaTeX**, eine benutzerfreundliche Ebene darüber: Anstatt Dinge von Hand zu positionieren, schreiben Sie „\section{Introduction}“ und „\cite{knuth78}“ und überlassen die Nummerierung, Referenzen und das Layout dem System. LaTeX ist das, was heute fast jeder meint, wenn er sagt, dass er „in TeX schreibt“. Ihr [erstes Dokument](/learn/first-document/) ist ein LaTeX-Dokument.

## Warum es vier Jahrzehnte überlebt hat

Textverarbeitungsprogramme kamen und gingen; LaTeX blieb, aus langweiligen, aber guten Gründen:

- **Mathe.** Gleichungen werden immer noch nicht so gut gesetzt. Siehe [Mathe-Modus](/learn/math-mode/).
- **Klarer Text.** Eine .tex-Datei aus dem Jahr 1985 wird heute geöffnet und funktioniert einwandfrei mit Versionskontrolle.
- **Automatisierung.** Nummerierung, Querverweise und Bibliografien funktionieren bereits bei 300 Seiten.
- **Vorlagen.** Herausgeber kodieren ihren genauen Hausstil als Klassendatei, sodass jede Einreichung identisch ist. Das ist der Grund, warum [ACM, IEEE und Freunde](/learn/acm-ieee-and-friends/) Ihnen alle .tex-Vorlagen geben und warum Zeitschriften immer noch .tex-Quellen wollen, die sie in ihrem eigenen Layout kompilieren können.

## Die Motorenfamilie in einem Atemzug

Die ursprüngliche TeX-Engine brachte moderne Nachfolger hervor: **pdfTeX** fügte die direkte PDF-Ausgabe hinzu, **XeTeX** fügte Unicode und Systemschriftarten hinzu und **LuaTeX** fügte eine Skriptsprache innerhalb der Engine hinzu. Meistens wählen Sie einfach das aus, was Ihre Vorlage erwartet. Die praktischen Unterschiede bestehen darin, welche Engine für dieses Projekt verwendet wird (/learn/engines-compared/).

## 2023: Geben Sie Typst ein

**Typst** ist der erste ernsthafte moderne Herausforderer: eine neue, von Grund auf neu entwickelte Satzsprache mit saubererer Syntax, sofortiger Kompilierung und benutzerfreundlicheren Fehlermeldungen. Es ist wirklich angenehm und wächst schnell. Seine Grenzen sind die Kehrseite der Stärken von LaTeX: vierzig Jahre Pakete und vor allem die Akzeptanz durch Herausgeber. Veranstaltungsorte benötigen heute .tex, daher bleibt LaTeX die Sprache der Einreichung, während Typst sich hervorragend für Notizen, Berichte und alles eignet, dessen Ausgabe Sie steuern. Oleafly kompiliert LaTeX, Typst und Markdown nebeneinander, sodass Sie jedes dort verwenden können, wo es funktioniert, ohne die App wechseln zu müssen.

## Das Essen zum Mitnehmen

TeX ist die Engine, LaTeX die Sprache, die jeder schreibt, Typst der junge Rivale und Tagebücher der Grund, warum die alte Garde fortbesteht. Wo diese bei Overleaf, Redakteuren und Referenzmanagern passen, ist das Thema [der Toolbox für wissenschaftliches Schreiben, damals und heute] (/learn/research-tools-landscape/).