---

title: "Strukturieren Sie eine Abschlussarbeit in LaTeX, bevor die Panik ausbricht"
description: "Titelseite, Kapitel enthält Akronyme, Universitätskursdateien, Kompilierungsgeschwindigkeit und Git-Verlauf für Master- und Doktoranden."
date: 2026-06-30
tags: [thesis, graduate, workflow]
---

Die These ist eine lange Arbeit mit angehängter Bürokratie. LaTeX verarbeitet das lange
Papier gut. Bei der Bürokratie handelt es sich in der Regel um eine im Jahr 2009 verfasste Universitäts-Vorlesungsakte
und zuletzt auf einem anderen TeX Live getestet.

Beginnen Sie frühzeitig mit der Strukturierung, auch wenn die Kapitel noch leer sind. Verschieben von Inhalten zwischen
Dateien im letzten Monat sind die Art und Weise, wie Querverweise und Abbildungspfade unterbrochen werden.

## Akzeptieren Sie die Klassendatei, schränken Sie den Rest ein

Fügen Sie die „.cls“-Datei der Universität (und die erforderlichen „.bst“-/Logo-Dateien) in das Projekt ein.
Schreiben Sie die Klasse nicht neu. Fügen Sie Ihre Makros, Pakete und Kapitelinhalte ein
Dateien, die Sie kontrollieren:

```text
thesis/
  main.tex
  macros.tex
  chapters/
  figures/
  university.cls
```

Wenn die Klasse auf einer modernen Engine abbricht, führen Sie eine Triage durch
[Universitätsklassendateien, die nicht kompiliert werden können](/learn/fix-broken-template/).
Dokumentieren Sie, welche Engine das Dissertationsbüro akzeptiert (pdfLaTeX vs. XeLaTeX vs
LuaLaTeX), bevor Sie in „fontspec“ investieren.

## Hauptsache, die Ausschüsse erwarten

Römische Seitenzahlen für Zusammenfassung, Widmung, Danksagungen, Inhaltsverzeichnis, Listen von
Abbildungen/Tabellen; Arabisch für die Hauptkapitel. Buch-/Berichtsklassen exponieren
`\frontmatter` / `\mainmatter`; Artikelbasierte Vorlagen benötigen ein Handbuch
`\Seitennummerierung`. Anleitung:
[römisch, dann arabisch](/learn/front-matter-page-numbers/).

Der Inhalt der Titelseite muss oft mit einem Word-Muster aus der Graduiertenschule übereinstimmen.
Kopieren Sie den Wortlaut genau. Kreativität wird hier von a abgelehnt
Checkliste.

## Kapitel als Dateien

Eine Wurzel, viele beinhaltet:

```latex
\include{chapters/intro}
\include{chapters/background}
\include{chapters/methods}
\include{chapters/results}
\include{chapters/conclusion}
```

Eigene Kapitel selbst, auch wenn Co-Autoren bei Arbeiten helfen, die die These stützen.
Bewahren Sie die Figuren unter „figures/chapter3/“ auf, damit die Pfade beim Neuordnen stabil bleiben.
Verwenden Sie beim Verfassen „\includeonly{chapters/methods}“, damit die vollständige Abschlussarbeit zusammengestellt wird
sind nicht die Kosten für jede Gleichungsbearbeitung:
[geteilte Kapiteldateien](/learn/split-chapter-files/).

Beschriftungen sollten im gesamten Projekt eindeutig sein („eq:ch3-main“, nicht „eq:main“ in
jede Datei). Projektweite Strukturansichten und Hilfe zur Live-Referenzprüfung auf einem
200-seitiger Baum.

## Akronyme und Symbole

Glossarpakete sind leistungsstark und wählerisch. Bei vielen Abschlussarbeiten handelt es sich um eine handgepflegte
Die Liste der Symbole im Titelblatt reicht aus. Wenn Sie eine automatische Erweiterung benötigen
Akronyme, planen Sie einen Tag ein, um vor der Woche „Glossare-Extra“ zu lernen
Unterwerfung, nicht währenddessen.

Definieren Sie mathematische Makros in „macros.tex“ und behandeln Sie diese Datei als gemeinsames Gesetz. Notation
Dass zwischen Kapitel 2 und Kapitel 5 schwankt, ist ein Geschenk für einen pedantischen Prüfer.

## Bibliographie

Ein „.bib“ für die gesamte Arbeit oder ein kleiner, sorgfältig zusammengeführter Satz. Stabile Schlüssel.
Vor der Soft-Bindung validieren:
[BibTeX-Validator](/tools/bibtex-validator/). Passen Sie den Stil an die Abteilung an
will (numerische, Autorenjahr-, fußnotenlastige geisteswissenschaftliche Stile). Nicht mischen
biblatex und klassische BibTeX-Stacks in einer Präambel.

## Geschwindigkeit

Das Kompilieren vollständiger Abschlussarbeiten wird langsam. Entwurfsmodus für Abbildungen, „\includeonly“ und
TikZ externalisiert Kaufstunden zurück. Hinweise:
[kürzeres Warten auf das PDF](/learn/speed-up-compilation/).

Führen Sie wöchentlich ein „vollständiges Kompilierungsritual“ durch, damit Sie immer noch kapitelübergreifende Fehler sehen
früh.

## Backup ist nicht dasselbe wie Verlauf

Eine Dropbox-Kopie ist ein Backup. Git ist eine Geschichte darüber, wie sich das Argument verändert hat.
Festschreiben, wenn ein Kapitel kompiliert wird. Pushen Sie auf eine private GitHub- oder GitLab-Remote.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) initialisiert a
echtes Repo pro Projekt, Prüfpunkte nach erfolgreichen Kompilierungen und Leerlaufbearbeitungen,
und Wiederherstellungen mit einem Klick, neben projektweiten Strukturansichten und SyncTeX
das funktioniert immer noch über Kapiteldateien hinweg. Das macht es schwieriger, die Gewohnheit zu überspringen.
Die gleiche Disziplin können Sie mit jedem Editor und sorgfältigem Git erreichen; die These
sollte nicht davon abhängen, dass man sich im achtzehnten Monat an „git init“ erinnert.

## Feedbackschleifen des Ausschusses

Exportieren Sie PDF für Leser, die keine Open Source verwenden. Verfolgen Sie Kommentare in Ausgaben oder
ein freigegebenes Dokument, aber Änderungen in TeX anwenden. Wenn ein Ausschussmitglied zurückkommt a
Wenn Sie ein gescanntes Markup-PDF herunterladen, benennen Sie die Datei mit Datum und Version, damit Sie wissen, welche
Quell-Commit, auf das verwiesen wird.

## Softbound- und Hardbound-Checkliste

Bevor Sie drucken oder einzahlen:

- Klassendatei und Engine entsprechen den Büroregeln der Abschlussarbeit.
- Seitennummerierung der Titelseite korrekt; Unterschriftenseite vorhanden, falls erforderlich.
- Alle `\ref`/`\cite`-Auflösungen; nein `[?]`.
- Abbildungen und Tabellen bei Bedarf aufgeführt; Untertitel konsistent.
- Ränder und Schriftgröße entsprechen der PDF-Checkliste (Testseite drucken).
- Quelle + PDF + Commit-Hash nach Einzahlung archiviert.

## Abbildungen, Tabellen und „Liste der“ Seiten

Viele Dissertationsbüros verlangen ein Abbildungs- und Tabellenverzeichnis. Bildunterschriften müssen vorhanden sein
konsistent sein und nicht den gesamten Methodenabschnitt in einer 20-zeiligen Überschrift ablegen. Benutzen
Kurztitel für die Listen und längere erläuternde Überschriften im Hauptteil, falls vorhanden
Die Klasse unterstützt optionale kurze Untertitel.

## Plagiate und frühere Veröffentlichungen

Wenn Kapitel veröffentlichte Beiträge neu vermischen, beachten Sie die Inklusionsregeln der Universität
und Mitautorenerlaubnis. Bewahren Sie das akzeptierte PDF jeder vorherigen Arbeit und die Abschlussarbeit auf
Kapitel in der Versionskontrolle mit einem Hinweis darauf, was sich geändert hat (Notation, erweitert
Experimente, einheitliche Einführung).

## Beginnen Sie diesen Monat, nicht den Monat, den Sie schreiben

Erstellen Sie das Gerüst, wenn Sie die Gliederung vorschlagen. Leere Kapitel, die kompiliert werden
zählen als Fortschritt. Die meisten Panikattacken im Spätstadium sind strukturelle Schulden und eine hartnäckige
Klassendatei, keine Lücke in der Wissenschaft. Bezahlen Sie diese Schulden frühzeitig.