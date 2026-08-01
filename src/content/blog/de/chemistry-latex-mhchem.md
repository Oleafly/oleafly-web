---

title: "Chemiearbeiten in LaTeX: Formeln, Schemata und SI-Einheiten"
description: "Reaktionen mit mhchem, Strukturen, experimentellen Tabellen, SI-Einheiten, Bibliographien und privaten Entwürfen für Studierende der Chemie und des Chemieingenieurwesens."
date: 2026-06-22
tags: [chemistry, research]
---

Chemiker tauchen normalerweise aus einem von zwei Gründen in LaTeX auf: Die Zeitschrift besteht darauf,
oder ein Mitarbeiter arbeitet bereits so. So oder so sehen die Schmerzpunkte aus
vertraut: Reaktionsschemata, Isotopenmarkierungen, Zustandstabellen und a
Bibliographie voller Zeitschriften und Patente.

Dieser Leitfaden deckt Bachelor-Berichte bis hin zu ersten Zeitschrifteneinreichungen ab. Das wird es
Ersetzen Sie ChemDraw nicht für komplexe Naturprodukte. Das Manuskript bleibt erhalten
und der experimentelle Teil vom Kampf gegen den Compiler.

## Reaktionen mit mhchem

„mhchem“ ist die übliche Antwort für Formeln und Reaktionen:

```latex
\usepackage[version=4]{mhchem}
\ce{CO2 + C -> 2CO}
\ce{^{14}C}
\ce{H2SO4}
\ce{Fe^2+ <=>[\ce{H2O}] Fe^3+}
```

Pin-Version 4, damit die Syntax nicht zwischen Co-Autoren oder Overleaf schwankt
und eine lokale TeX-Installation. Längere Komplettlösung:
[chemische Formeln](/learn/chemistry-notation/).

Mehrstufige Schemata mit Reagenzien oberhalb und unterhalb des Pfeils erfordern mehr als
inline `\ce`. mhchem verwaltet die Formeln; Das Layout erfordert oft ein Journalschema
Umgebung oder eine externe Figur. Überfüllen Sie keine Totalsynthese mit zwanzig Schritten
in eine Reihe von Inline-Chemielinien.

## Strukturen: Chemfig oder externe Zeichnungen

`chemfig` zeichnet einfache Strukturen in reinem TeX und behält alles bei
vektorlokal. Komplexe Naturprodukte sind fast immer besser als ChemDraw,
Marvin oder ähnlich, als PDF exportiert, dann „\includegraphics“. Bevorzugen Sie Vektor-PDF
über einem Screenshot-PNG, damit die Verbindungslinien im Ausdruck und in zwei Spalten scharf bleiben
Layout.

Benennen Sie Dateien nach Verbindungs-ID („cmpd-12.pdf“). Behalten Sie die bearbeitbare ChemDraw-Quelle bei
im Laborarchiv, auch wenn Git nur die PDF-Datei enthält, die in der Arbeit enthalten ist.

## Experimentelle Abschnitte und lange Tabellen

Zustandstabellen (Temperatur, Lösungsmittel, Ausbeute, Katalysatorbeladung) funktionieren gut
mit „booktabs“ und oft „siunitx“ für numerische Spalten:

```latex
\usepackage{booktabs,siunitx}
\begin{tabular}{l S S}
  \toprule
  {Entry} & {T / \degreeCelsius} & {Yield / \percent} \\
  \midrule
  1 & 25 & 72 \\
  \bottomrule
\end{tabular}
```

Wenn eine Tabelle länger als eine Seite dauert, wechseln Sie vor Ablauf der Frist zu „Longtable“.
Woche, nicht nachdem sich die Zeitschrift über 7pt-Schriftarten beschwert hat. Die Bildunterschrift sollte lauten
Was „Ausbeute“ bedeutet (isoliert, NMR, GC), damit die Leser nicht raten.

## Einheiten und Spektroskopieausschnitte

Wählen Sie einen Einheitenstil und bleiben Sie dabei: „siunitx“ oder manuell „\mathrm“, wenn die Gruppe
Darauf habe ich mich schon geeinigt. NMR- und HRMS-Schnipsel in experimentellen Abschnitten sind
oft einfacher Text mit sorgfältigen Abständen. Erfinden Sie keine fragile Makrosprache
Mitte der Arbeit, es sei denn, das Labor teilt bereits eines.

Melden Sie wichtige Zahlen wie das Notebook. LaTeX druckt problemlos
falsche Präzision, wenn Sie es eingeben.

## Schemata vs. Figuren

Viele Chemiezeitschriften unterscheiden Schemata (Reaktionen) von Zahlen (Diagramme,
ORTEP, Spektren). Verwenden Sie die Umgebungen, die die Journal-Klasse bereitstellt („Schema“,
`figure`), sodass die Nummerierung mit der Produktion übereinstimmt. Querverweis mit „\ref“ und stabil
Etiketten („sch:reduction“, „fig:ortep-1“).

## Sicherheit des Entwurfs

Unveröffentlichte Routen und Industriepartner machen Cloud-only-Editoren zu einem
politische Frage, nicht nur eine Zweckmäßigkeitsfrage. Behalten Sie „.tex“ und Zahlen bei
Da gewöhnliche Dateien auf der Festplatte mit Git auf nützliche Weise langweilig sind.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) ist ein Einheimischer
Forschungseditor: gebündelte Compiler, projektweite Referenz- und Zitatprüfungen, offline
Rechtschreibung und Grammatik nur für Prosa (daher sind „\ce“ und Zitierschlüssel nicht als markiert).
„Tippfehler“), echte Git-Checkpoints, optionale KI, die nur nach Genehmigung bearbeitet
Unterschiede. Kein Konto. Für den Entwurf ist kein externer Editor erforderlich.
Das Netzwerk ist für Pakete, Zitatsuche oder KI vorgesehen, wenn Sie diese aktivieren.

## Zitieren Sie die richtige Primärliteratur

Chemiebibliografien stützen sich stark auf Zeitschriften und Patente. Export aus Zotero
oder EndNote in eine „.bib“ mit stabilen Schlüsseln umwandeln, dann fehlende Felder vorher validieren
Einreichung: [BibTeX-Validator](/tools/bibtex-validator/). Leere Bibliographien
sind fast immer ein Pfad- oder Backend-Fehler, nicht fehlende Zitate.

Die Zeitschriftenstile unterscheiden sich (ACS, RSC, Springer). Verwenden Sie den Bibliographiestil
Vorlage wird mitgeliefert. Kleben Sie nicht die Zahl und das Jahr des Autors zusammen
Präambel.

## Zusammenarbeit

Eigene Abschnitte nach Person, wenn Sie können. Eine Person besitzt die „.bib“. Einverstanden
mhchem-Version und Struktur-Exportformat im Voraus. Bei mehreren experimentellen
Abschnitte wachsen parallel. Kompilieren Sie jede Woche das vollständige PDF, um die Integration zu ermöglichen
Überraschungen tauchen früh auf.

## Checkliste vor der Einreichung

Einen letzten Durchgang wert:

- mhchem-Version angepinnt; Formeln werden ohne Warnungen kompiliert
  ignorieren.
- Strukturen sind nach Möglichkeit Vektoren; Verbund-IDs stimmen über Text, Schemata usw. hinweg überein.
  und SI.
- Tabellen verwenden den Drei-Regel-Stil; Einheiten konsistent; Die in der Bildunterschrift definierten Erträge
  oder Notizen.
- Schema-/Abbildungsnummerierung entspricht der Zeitschriftenklasse.
- `.bib` validiert; Der Stil entspricht der Vorlage.
– Sensible Routen bleiben in einem lokalen Ordner mit einer Zugriffskontrolle, die dem Labor entspricht
  Politik.

## SI- und Journal-Checklisten

Viele Chemiezeitschriften veröffentlichen Autoren-Checklisten (Grafikauflösung, TOC).
Grafikgröße, Charakterisierung der Verbindungen). Überfliegen Sie das PDF, bevor Sie zeichnen
Schemata. Ein falsches TOC-Grafikseitenverhältnis ist für einen Administrator ein dummer Grund
Ablehnung.

## Unterstützende Informationen

SI verfügt oft über eigene Vorlagen oder Überschriftenregeln. Behalten Sie die gleichen SI-Quellen bei
repo als Hauptpapier mit eindeutigen Dateinamen. Wenn das Journal voll sein muss
Überprüfen Sie bei der Charakterisierung, ob jede zusammengesetzte Zahl im Haupttext tatsächlich vorhanden ist
taucht im SI auf.

Die chemische Formatierung ist anspruchsvoll, da die Objekte dicht sind. Holen Sie sich die Reaktionen
und Tabellen richtig und der experimentelle Teil liest sich wie sorgfältige Arbeit, nicht wie eine
Aus einem Notizbuch-PDF einfügen.