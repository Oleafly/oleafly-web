---

title: "Die Toolbox für wissenschaftliches Schreiben, damals und heute"
description: "Von Schreibmaschinen und E-Mail-Roundtrips bis hin zu Overleaf, Zotero, Typst und Local-First-Arbeitsbereichen."
category: "research-101"
order: 9
level: "beginner"
tags: ["research", "basics", "tools"]
featured: false
updated: 2026-07-25
---

# Die Toolbox für wissenschaftliches Schreiben, damals und heute

Jede Generation von Forschern glaubt, dass ihre Werkzeuge dauerhaft sind. Das sind sie nie. Ein kurzer Überblick darüber, wie Arbeiten verfasst wurden und wie die Toolbox heute aussieht, damit Sie Ihre Auswahl gezielt treffen können.

## Die Vorher-Zeiten

Bis in die 1980er Jahre wurden Arbeiten **auf Schreibmaschinen getippt**, Gleichungen von Hand eingezeichnet und an Zeitschriften verschickt. Dann kamen Textverarbeitungsprogramme: jahrzehntelange **Word-Vorlagen** mit fragiler Nummerierung, als Bilder eingefügte Gleichungen und Abbildungslayouts, die beim Verschieben eines Absatzes explodierten. Zusammenarbeit bedeutete **das Hin- und Herschicken von Dateien per E-Mail**: „paper_final_v3_REALLY_FINAL_jw_edits.docx“ ist kein Witz, es ist Geschichte. LaTeX existierte während all dieser Zeit (siehe [45 Jahre TeX](/learn/history-of-tex-latex/)), aber Sie haben es in einem Terminal kompiliert und auch per E-Mail geteilt.

## Der heutige Werkzeugkasten

| Werkzeug | Kategorie | Was es gut kann |
| --- | --- | --- |
| Rückseite | Cloud LaTeX-Editor | Echtzeit-Co-Editing im Browser, keine Einrichtung |
| TeXstudio / TeXmaker | Lokale LaTeX-IDE | Klassische Desktop-Bearbeitung, kostenlos |
| VS-Code + LaTeX-Workshop | Lokale IDE | Leistungsstark, wenn Sie bereits in VS Code | leben
| Oleafly | Lokaler Arbeitsbereich | LaTeX, Typst und Markdown mit gebündelten Compilern |
| Zotero | Referenzmanager | Zitate sammeln, organisieren und exportieren |
| Google Scholar | Entdeckung | Durchsuchen von Artikeln und Verfolgen von Zitaten |
| arXiv | Entdeckung + Vorabdrucke | Lesen Sie die neueste Arbeit kostenlos, siehe [die Preprint-Welt](/learn/what-is-arxiv/) |
| Typst | Neues Satzsystem | Schnelle, moderne Dokumente, wenn kein Veranstaltungsort .tex | erfordert

**Discovery-Tools** finden Aufsätze, **Referenzmanager** organisieren, was Sie gefunden haben, und **Redakteure** wandeln alles in ein PDF um. Am Ende erhalten Sie jeweils eines.

## Cloud vs. lokal, ehrlich gesagt

**Overleaf** machte LaTeX zum Mainstream, indem es die Installation vollständig entfernte, und die kollaborative Bearbeitung in Echtzeit ist wirklich sein Killerfeature. Wenn Ihre Co-Autoren im selben Moment dasselbe Dokument eintippen möchten, sind Cloud-Tools wie Overleaf heute einfach besser dafür geeignet.

**Lokal-zuerst**-Tools machen den Tausch anders: Ihre Dateien leben als einfache Dateien auf Ihrem Computer, Sie können in einem Zug oder hinter einer Krankenhaus-Firewall arbeiten, nichts hängt von einem Abonnement oder einem Server ab, der am Leben bleibt, und der Versionsverlauf ist echt [Git](/learn/oleafly-workflow/), keine proprietäre Zeitleiste. Der klassische Nachteil von lokalem LaTeX war die Installation einer Multi-Gigabyte-TeX-Distribution. Das ist der Teil, der sich geändert hat.

## Wo Oleafly passt

Oleafly ist ein kostenloser Open-Source-Desktop-Arbeitsbereich mit lokaler Ausrichtung. Compiler für LaTeX und Typst werden im Paket geliefert, sodass keine Distribution installiert werden muss. Zitate können per [DOI oder arXiv-ID](/learn/open-access-doi-explained/) abgerufen werden, Projekte sind Git-Repositories mit ehrlicher Historie, Veranstaltungsortvorlagen sind integriert und ein optionaler KI-Assistent hilft, wenn Sie es brauchen. Ziel ist es, den lokalen Pfad genauso reibungsarm zu gestalten wie den Cloud-Pfad. Um fair zu sein: Für die gleichzeitige Live-Mitbearbeitung ist Overleaf nach wie vor die bessere Wahl. Beim Eigentum an Ihren Dateien und bei der Offline-Arbeit gewinnt Local-First. Viele Leute verwenden beides, lokal entwerfen und über Git synchronisieren.

## Wählen ohne zu quälen

Beginnen Sie diesen Monat mit dem, was Ihnen am meisten Reibungsverluste bereitet. Die .tex-Dateien sind auf jedes Tool auf dem Tisch portierbar. Diese Portabilität ist der eigentliche Vorteil des Klartext-Schreibens, der in [LaTeX vs. Word](/learn/latex-vs-word/) behandelt wird. Schreiben Sie dann Ihr [erstes Dokument] (/learn/first-document/) und lassen Sie die Toolbox mit der Arbeit wachsen.