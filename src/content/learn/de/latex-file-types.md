---

title: "Die Dateien in einem echten Projekt"
description: ".tex, .bib, .cls, .sty und den generierten Müll sollten Sie nicht festschreiben."
category: "open-the-loop"
order: 4
level: "beginner"
tags: ["basics", "files"]
featured: false
updated: 2026-07-25
---

# Die Dateien in einem echten Projekt

Öffnen Sie nach einer Kompilierung den Ordner eines echten LaTeX-Projekts und Sie werden weit mehr Dateien finden, als Sie geschrieben haben. Das überrascht die meisten Anfänger und die Angst, das Falsche zu löschen, sorgt dafür, dass die Ordner für immer unübersichtlich bleiben. Der Unterschied, der es verdeutlicht: Einige Dateien sind Quelldateien, die Sie bearbeiten, andere sind Stile, die von einer Vorlage oder einem Paket bereitgestellt werden, und der Rest ist generierter Arbeitsspeicher, den der Compiler bei jedem Lauf neu erstellt.

## Die Dateien, die Sie schreiben

Ihre „.tex“-Dateien enthalten das eigentliche Dokument: den Text, Abschnitte, Abbildungen und Mathematik. Eine „.bib“-Datei ist Ihre Bibliografiedatenbank, ein Eintrag pro Aufsatz oder Buch, den Sie zitieren könnten; Sie können es manuell pflegen oder aus einem Referenzmanager wie Zotero exportieren. Dies sind die Dateien, die es wert sind, gesichert und einer Versionskontrolle unterzogen zu werden, da alles andere aus ihnen neu erstellt werden kann.

## Die Dateien, die Ihnen eine Vorlage liefert

Eine „.cls“-Datei definiert eine Dokumentklasse, das Ding, das Sie in „\documentclass{...}“ benennen. Zeitschriften und Konferenzen versenden ihre eigenen, sodass jede Einreichung identisch aussieht und Sie fast nie eine bearbeiten. Eine „.sty“-Datei ist ein Paket: wiederverwendbare Makros und Einstellungen, die mit „\usepackage“ geladen werden. Sie werden nur dann selbst einen schreiben, wenn Sie benutzerdefinierte Befehle in mehreren Dokumenten teilen möchten. Eine „.bst“-Datei beschreibt einen BibTeX-Zitierstil und wird normalerweise auch einfach von einem Ort eingefügt.

## Die Dateien, die der Compiler erstellt

Die „.aux“-Datei speichert Querverweise und Zitatdaten zwischen Kompilierungsdurchgängen; Bearbeiten Sie es niemals und löschen Sie es jederzeit, da es beim nächsten Kompilieren neu geschrieben wird. Die „.log“-Datei zeichnet alles auf, was der Compiler getan hat, und es lohnt sich, sie nur zu öffnen, wenn etwas schief geht. Das „.pdf“ ist die Ausgabe, die Sie tatsächlich wollten.

| Erweiterung | Rolle | Von Hand bearbeiten? |
| --- | --- | --- |
| `.tex` | Quelldokumente und Kapitel | Ja |
| `.bib` | Bibliographiedatenbank | Ja (oder Export aus Zotero) |
| `.cls` | Dokumentenklasse | Selten Anbietervorlagen |
| `.sty` | Pakete/Stildateien | Beim Schreiben eigener Makros |
| `.bst` | BibTeX-Stil | Selten |
| `.aux` | Querverweisdaten | **Nein:** generiert |
| `.log` | Compiler-Protokoll | Beim Debuggen lesen |
| `.pdf` | Ausgabe | Anzeigen/Senden |

## Projektlayout, das skaliert werden kann

```text
paper/
 main.tex
 chapters/
 figures/
 refs.bib
```

Eine „main.tex“ auf der obersten Ebene fungiert als Einstiegspunkt, Kapitel befinden sich in ihrem eigenen Ordner und werden mit „\input“ oder „\include“ eingefügt, Bilder befinden sich in „figures/“ und die Bibliographie bleibt in einer „refs.bib“. Dieses Layout bleibt überschaubar, unabhängig davon, ob es sich bei dem Projekt um eine vierseitige Arbeit oder eine Abschlussarbeit handelt. [Kapiteldateien aufteilen](/learn/split-chapter-files/) zeigt, wie die Teile zusammenhängen.

Wenn Sie Git verwenden, fügen Sie „*.aux“, „*.log“ und die anderen generierten Dateien zu „.gitignore“ hinzu, damit Ihr Verlauf nur die echte Quelle verfolgt. Oleafly-Projekte sind einfache Ordner auf der Festplatte, daher gilt dieser Hinweis auch dort unverändert. Der häufigste Fehler ist der umgekehrte: Bei der Suche nach einem seltsamen Kompilierungsfehler ist das Löschen der „.aux“-Dateien oft die Lösung, da eine veraltete Datei aus einem fehlerhaften Lauf jede Kompilierung danach vergiften kann.