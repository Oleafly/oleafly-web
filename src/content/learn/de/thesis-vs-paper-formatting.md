---

title: "Formatierung einer Abschlussarbeit vs. Papierformatierung"
description: "Universitätskurse, Titel, Kapitel, Bindungsränder und Wiederverwendung von Papiermaterial."
category: "venue-formats"
order: 7
level: "intermediate"
tags: ["venues", "thesis"]
featured: false
updated: 2026-07-25
---

# Formatierung von Abschlussarbeiten vs. Papierformatierung

Eine Arbeit wird für einen Verlag formatiert. Eine Abschlussarbeit wird für eine Graduiertenschule verfasst, ein ganz anderes Biest mit ganz anderen Regeln. Wenn Sie nur schriftliche Hausarbeiten verfasst haben, wird Sie die Vorlage für eine Abschlussarbeit in besonderer Weise überraschen.

## Wer legt die Regeln fest?

Papiere: Der Veranstaltungsort stellt Ihnen einen Kurs zur Verfügung ([IEEEtran](/learn/ieee-format-in-practice/), [acmart](/learn/acm-format-in-practice/), llncs) und jeder weltweit verwendet den gleichen. Thesen: Ihre Universität schreibt eine eigene Klasse oder eine Seite mit typografischen Regeln vor (Ränder, Zeilenabstand, Titelseitentext), und keine zwei Universitäten sind sich einig. Holen Sie sich zuerst den offiziellen Kurs von Ihrer Abteilung oder Ihrer Graduiertenschule. Wenn es alt ist und sich nicht kompilieren lässt, ist das häufig genug, um [eine eigene Lektion] (/learn/fix-broken-template/) zu haben.

## Die strukturellen Unterschiede

| Aspekt | Papier | These |
|---|---|---|
| Oberste Einheit | `\section` | `\chapter` |
| Klassenbasis | Veranstaltungsortklasse | „Buch“/„Bericht“-Derivat |
| Titelsache | Titel + Zusammenfassung | Titelseite, Deklaration, Abstract, Inhaltsverzeichnis, Abbildungs- und Tabellenverzeichnisse |
| Länge | 8 bis 30 Seiten | 80 bis 300 Seiten |
| Layout | oft zweispaltig | einspaltig, großzügiger Abstand |
| Seiten | einseitiges PDF | oft zweiseitig zum Drucken |

Kapitel ändern alles im weiteren Verlauf: Die Nummerierung wird zu „3.2“, Abbildungen werden zu „Abbildung 3.1“ und jedes Kapitel beginnt normalerweise auf einer neuen (manchmal rechten) Seite.

## Die erste Sache ist die halbe Miete

Die Einleitungssequenz einer Abschlussarbeit läuft typischerweise wie folgt ab: Titelseite, Originalitätserklärung, Zusammenfassung, Danksagungen, Inhaltsverzeichnis, Abbildungsverzeichnis, Tabellenverzeichnis, dann Kapitel 1. Das meiste davon ist automatisiert:

```latex
\frontmatter          % roman page numbers i, ii, iii
\maketitle
\tableofcontents
\listoffigures
\listoftables
\mainmatter           % arabic numbers restart at 1
\chapter{Introduction}
```

Der Roman-dann-Arabisch-Seitennummerierungstanz bringt jeden einmal zum Stolpern, [Titelseite und Seitenzahlen](/learn/front-matter-page-numbers/) deckt ihn richtig ab.

## Beidseitiger Druck und Bindungsränder

Druckarbeiten sind in der Regel zweiseitig (Klassenoption „twoside“), was zu asymmetrischen Rändern führt: Der innere Rand ist breiter, um die Bindung zu überstehen. In den Regeln Ihrer Universität steht etwa „linker Rand 35 mm, andere 25 mm“, was in einem zweiseitigen Dokument *innen* und nicht links bedeutet. Bekämpfen Sie dies nicht mit manuellem „\hspace“, die Klassenoption plus „geometry“-Einstellungen handhaben es:

```latex
\documentclass[12pt,twoside,openright]{report}
\usepackage[inner=35mm,outer=25mm,top=25mm,bottom=25mm]{geometry}
```

„openright“ zwingt Kapitel auf die rechte Seite, Standard für gebundene Kopien.

## Wiederverwendung Ihrer Aufsätze als Kapitel

Die meisten Abschlussarbeiten beinhalten veröffentlichte Arbeiten, und die meisten Universitäten erlauben dies ausdrücklich. Die Mechanik: Entfernen Sie bei jedem Artikel die Präambel des Veranstaltungsorts, stufen Sie bei Bedarf seine „\Abschnitte“ herab, vereinheitlichen Sie Notation und Makros über die Kapitel hinweg und führen Sie die Bibliographien zu einer zusammen. Indem Sie jedes Kapitel in einer eigenen Datei aufbewahren, ist dies überschaubar. [Kapitel in Dateien aufteilen](/learn/split-chapter-files/) zeigt das `\input`/`\include`-Setup, das einen 200-Seiten-Build sauber hält.

Eine ehrliche Warnung: Vorlesungen für Abschlussarbeiten an Universitäten neigen dazu, paketlastig zu sein, sodass die erste Kompilierung auf einem neuen Computer möglicherweise einen Stapel Pakete herunterlädt, bevor sie erfolgreich ist. Lassen Sie es einmal fertig sein, und nachfolgende Builds gehen schnell vonstatten.