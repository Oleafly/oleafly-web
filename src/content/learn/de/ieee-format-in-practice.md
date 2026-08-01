---

title: "IEEE-Format in der Praxis"
description: "IEEEtran-Konferenz- und Journalmodi, Autorenblöcke und zweispaltige Fallstricke."
category: "venue-formats"
order: 2
level: "intermediate"
tags: ["venues", "ieee"]
featured: false
updated: 2026-07-25
---

# IEEE-Format in der Praxis

IEEE-Veranstaltungsorte, von kleinen Werkstätten bis hin zu Flaggschiff-Zeitschriften, teilen sich eine Klassendatei: „IEEEtran“. Wenn Sie es einmal lernen, eröffnen sich Hunderte von Veranstaltungsorten.

## Konferenz- vs. Journalmodus

Dieselbe Klasse erzeugt je nach Optionen unterschiedliche Layouts:

```latex
% Conference paper
\documentclass[conference]{IEEEtran}

% Journal article
\documentclass[journal]{IEEEtran}
```

Im Konferenzmodus erhalten Sie das klassische Erscheinungsbild: 10pt-Zeiten, zwei Spalten, standardmäßig keine Seitenzahlen. Der Journalmodus ändert das Titellayout, fügt am Ende Autorenbiografien hinzu und optimiert die Abstände. Verwenden Sie immer den Modus, den Ihr Veranstaltungsort verlangt, sie sind nicht austauschbar. Für den breiteren Vergleich zwischen IEEE und ACM siehe [ACM, IEEE und Freunde](/learn/acm-ieee-and-friends/).

## Autoren nach IEEE-Art

Der Konferenzmodus verfügt über ein eigenes Autoren-Markup. Bekämpfen Sie es nicht mit „\\“ und manueller Zentrierung:

```latex
\author{
  \IEEEauthorblockN{Ada Lovelace}
  \IEEEauthorblockA{Analytical Engines Lab\\
  University of London\\
  ada@example.edu}
  \and
  \IEEEauthorblockN{Charles Babbage}
  \IEEEauthorblockA{Department of Mathematics\\
  University of Cambridge\\
  cb@example.edu}
}
```

„\IEEEauthorblockN“ enthält Namen, „\IEEEauthorblockA“ enthält Zugehörigkeiten und „\and“ unterteilt Autoren in Spalten.

## Leben mit zwei Säulen

Ein zweispaltiges Layout ist der Punkt, an dem Anfänger stecken bleiben. Die Regeln:

| Problem | Fix |
|---|---|
| Breite Figur oder Tisch | Verwenden Sie „figure*“ / „table*“, um an den Anfang einer Seite zu gelangen |
| Lange Gleichung läuft über | Brechen Sie es, sehen Sie sich die Zwei-Spalten-Taktik in [eine Spalte oder zwei](/learn/one-column-or-two/) | an
| Letzte Seitenspalten ungleichmäßig | Balancieren Sie sie manuell mit „\IEEEtriggeratref“ oder dem „balance“-Paket |
| URL läuft in den Rand | `\usepackage{url}` oder `xurl` zum besseren Brechen |

Die markierten Float-Umgebungen sind für umfangreiche Inhalte nicht verhandelbar:

```latex
\begin{figure*}[t]
  \centering
  \includegraphics[width=\textwidth]{pipeline}
  \caption{Full-width figures need the starred environment.}
\end{figure*}
```

Beachten Sie, dass „figure*“ die Platzierung von „[h]“ verweigert und immer an den Seitenanfang schwebt. Planen Sie das ein, anstatt dagegen anzukämpfen.

## Bibliographie

IEEE verwendet numerische Zitate mit seinem eigenen BibTeX-Stil:

```latex
\bibliographystyle{IEEEtran}
\bibliography{references}
```

Das passende „IEEEtran.bst“ wird mit der Klasse geliefert. Ersetzen Sie nicht „plain“ oder „ieeetr“, wie Rezensenten bemerken, und die Kamera-Ready-Checkliste wird es trotzdem erkennen.

## Wo man die echte Vorlage bekommt

Beginnen Sie immer mit der offiziellen Quelle: dem IEEE Template Selector auf ieee.org oder der eigenen Autoren-Kit-Seite der Konferenz. Konferenzorganisatoren patchen manchmal die Vorlage (Copyright-Hinweis, zusätzliche Fußzeilen), damit die Version des Veranstaltungsortes gegenüber einer generischen Kopie überzeugt. Die [Vorlagengalerie](/templates/) von Oleafly enthält einen Konferenzstarter im IEEE-Stil, der sofort auf der mitgelieferten Tectonic-Engine kompiliert werden kann und praktisch für die Erstellung von Entwürfen ist, bevor Sie das offizielle Kit einwerfen.

## Checkliste für häufige Fallstricke

- Mit pdfLaTeX-kompatiblem Code kompilieren, IEEEtran ist älter als Fontspec und erwartet klassische Engines
- Fügen Sie keine „Geometrie“ hinzu und ändern Sie keine Ränder, die Klasse legt sie genau fest
- „\IEEEpeerreviewmaketitle“ wird in einigen Zeitschrifteneinreichungen nach „\maketitle“ benötigt
- Wenn die Vorlage auf Ihrem Computer fehlerhaft ist, selektieren Sie sie wie jede andere [defekte Vorlage](/learn/fix-broken-template/)