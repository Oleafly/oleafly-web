---

title: "Ingenieurstudenten: IEEE- und ACM-Vorlagen ohne lästiges Wochenende"
description: "Beginnen Sie mit der echten Klassendatei, überstehen Sie zweispaltige Gleitkommazahlen und Gleichungen, machen Sie Referenzen richtig und versionieren Sie die Arbeit, bevor sie für die Kamera bereit ist."
date: 2026-06-28
tags: [engineering, templates, ieee]
---

IEEE- und ACM-Vorlagen sind keine optionale Dekoration. Sie sind die Vorlage
formatieren. Ausgehend von einer zufälligen ZIP-Datei, die jemand vor drei Jahren erneut hochgeladen hat, geht es so
Sie verbringen die Nacht vor Ablauf der Frist damit, Schriftarten umzubenennen und nachzujagen
„undefinierte Kontrollsequenz“ in einer Klasse, die Sie nie bearbeiten wollten.

Dies gilt für Kursprojekte, Designarbeiten für Senioren und die erste Konferenz
Einsendungen.

## Beginnen Sie mit der offiziellen Klasse

Laden Sie den Kurs und das Beispiel von der Gesellschaft oder der Konferenzseite herunter
*dieses Jahr*. Fügen Sie die „.cls“, eine beliebige „.bst“ und die Beispiel-„.tex“ in Ihr Projekt ein
Wurzel. Kompilieren Sie einmal, bevor Sie einen einzelnen Originalsatz schreiben, damit Sie den kennen
Umgebung funktioniert.

Oleaflys [Vorlagengalerie](/templates/) und die kostenlose App-Installation bieten genau das
Verfolgen Sie gängige Veranstaltungsorte (IEEE, ACM und Freunde) und kompilieren Sie sie dann mit dem Paket
Engine und fangen Sie defekte Referenzen und Zitate vorher im Projekteditor ab
Kamerabereit. Überprüfen Sie immer noch anhand des Aufrufs zur Einreichung von Beiträgen für dieses Jahr: Kolumne
Anzahl, Seitenbegrenzung und Änderung des Bibliografiestils.

Wenn die Konferenz eine modifizierte Klasse ausliefert, verwenden Sie deren Klasse und kein generisches IEEEtran
aus der Erinnerung.

## Zweispaltige Float-Regeln

Im Zweispaltenmodus verwenden breite Abbildungen „figure*“ und erscheinen oft nur am
oben auf einer Seite. Platzieren Sie den Float in der Nähe der ersten Referenz und stellen Sie die Breite auf ein
`\columnwidth` oder `\textwidth` absichtlich. Bei nebeneinander liegenden Unterfiguren ist Vorsicht geboten
Breiten oder sie laufen in den Rand über.

```latex
\begin{figure}[t]
  \centering
  \includegraphics[width=\columnwidth]{block.pdf}
  \caption{System overview.}\label{fig:sys}
\end{figure}
```

Wenn ein Float drei Seiten entfernt flieht, verkleinern Sie ihn oder teilen Sie die Panels auf, bevor Sie kämpfen
„[H]“ für eine Stunde: [Float-Platzierung](/learn/figure-wrong-position/).

## Gleichungen in schmalen Spalten

Lange Ableitungen brechen in „\columnwidth“. Verwenden Sie „Multiline“ oder „Split“ oder verschieben Sie
die Ableitung zu einem Anhang. Verkleinern Sie die Formelschrift nicht bis zur Zeile
ist unlesbar; Rezensenten bemerken. Zahlen Sie nur Gleichungen ein, die Sie tatsächlich zitieren.

Algorithmen gehören in „Algorithmen“ / „algorithmische“ Umgebungen, die für die Größe ausgelegt sind
Spalte, keine Screenshots einer IDE.

## Referenzen

Die numerischen IEEE-Stile und die ACM-Stile sind sich in Details nicht einig. Nutzen Sie die Bibliographie
Stil, mit dem die Vorlage geliefert wird. Erfinden Sie keine Mischung aus Autor-Jahr und
Klammernummern.

Überprüfen Sie die „.bib“ auf fehlende Felder, bevor die Kamera bereit ist:
[BibTeX-Validator](/tools/bibtex-validator/). Der Export von Wissenschaftlern ist chaotisch; sauber
Schlüssel („Autor: Jahr: Schlüsselwort“) und korrigieren Sie Titel, die in ALLEN GROSSBUCHSTABEN eingegeben wurden.

Zitieren Sie Datensätze und Software, wenn der Veranstaltungsort dies erwartet. Ein fehlender DOI ist einfacher
Jetzt zu beheben als im Fenster „Kamera bereit aktualisieren“ des Portals.

## Seitenbegrenzungen ohne Straftaten

Seitenbegrenzungen sind real. Ränder unterhalb der Vorlage nicht quetschen, einstellen
`\scriptsize` für den gesamten Ergebnisbereich oder verstecken Sie Text in großen Zahlen.
Inhalte schneiden. Verschieben Sie Beweise und zusätzliche Diagramme in ein ergänzendes oder erweitertes arXiv
Version, wenn der Anruf dies zulässt. Halten Sie die Einreichung lesbar. Längere Checkliste:
[Seitenlimits ohne Verbrechen](/learn/page-limits-without-crimes/).

## Die Versionskontrolle ist jetzt Teil des Laborberichts

Senior-Design- und Konferenzbeiträge profitieren beide von Commits im Anschluss
erfolgreiche Kompilierung. Ein Forschungsredakteur wie
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) behält echtes Git
neben PDF, SyncTeX und Live-Diagnose, sodass Sie keine ZIP-Datei versenden
Dateien mit dem Namen „submission_really_final.zip“. Private Fernbedienungen bleiben unveröffentlicht
Bearbeiten Sie den öffentlichen GitHub, bis die Richtlinien dies zulassen.

Markieren Sie den genauen Commit, den Sie auf das Portal hochgeladen haben, oder senden Sie ihm eine Nachricht.

## Team-Workflows

Eigene Abschnitte nach Schüler. Eine Person besitzt die „.bib“- und die Klassendatei. Zusammenführen
durch Pull-Anfragen, wenn die Gruppe groß genug ist. Stellen Sie das vollständige PDF auf a zusammen
Zeitplan, damit die Integration nicht erst am Vorabend stattfindet.

Wenn ein Teamkollege nur Word bearbeitet, exportieren Sie für ihn und behalten Sie TeX als Quelle:
[Mitautoren, die nur Word sprechen](/learn/collaborator-uses-word/).

## Kamerabereite Woche

Die Anweisungen zur Vorbereitung der Kamera weichen häufig vom Testformat ab. Laden Sie sie daher erneut herunter
sie. Aktualisieren Sie die Autorenblock-, Finanzierungs- und IEEE/ACM-Urheberrechtsformulare als
erforderlich. Kompilieren Sie mit den endgültigen Klassenoptionen neu (oft anders als
Rezension). Überprüfen Sie jede Zahl auf DPI und Schriftarten. Betten Sie Schriftarten in das PDF ein, wenn dies der Fall ist
Das Portal erfordert dies. Laden Sie dann das PDF und alle vom Portal geforderten Quell-ZIP-Dateien hoch
beides archivieren.

## Autorensperre und Zugehörigkeiten

IEEE/ACM-Autorenblöcke sind heikel: gleiche Beitragsnoten, mehrere
Zugehörigkeiten, dank Förderagenturen. Kopieren Sie den Autor der Beispieldatei
Markieren und ersetzen Sie den Text sorgfältig. Das Erfinden Ihres eigenen „\Thanks“-Stacks ist eine
häufige Ursache für unvollständig ausgefüllte Kästchen und fehlende Kommas im PDF.

## Blindbewertung

Wenn es sich um einen doppelblinden Anruf handelt, geben Sie bitte die Namen, die Finanzierung, die das Labor identifiziert, usw. an
Selbstzitate mit der Aussage „in unserer bisherigen Arbeit“. Aktivieren Sie sie erneut, damit sie für die Kamera bereit sind.
Behalten Sie eine „blinde“ Klassenoption oder eine kleine Umschaltdatei bei, damit Sie nicht manuell bearbeiten
Identität an sechs Orten.

## Fazit

Beginnen Sie mit der offiziellen Klasse, respektieren Sie das zweispaltige Layout und passen Sie es an
Bibliographiestil, mit dem die Vorlage geliefert wird. Version alles. Die
Ohne eine gefälschte Vorlage aus dem Jahr 2019 sind technische Inhalte schon schwer genug.