---

title: "ACM-Format in der Praxis"
description: "Die acmart-Klasse: Sigconf, Metadaten, anonyme Überprüfung und Überraschungen beim ersten Kompilieren."
category: "venue-formats"
order: 3
level: "intermediate"
tags: ["venues", "acm"]
featured: false
updated: 2026-07-25
---

# ACM-Format in der Praxis

ACM hat 2017 alle seine Vorlagen in einer Klasse, „acmart“, zusammengefasst. Eine Klasse, viele Gesichter: Die Formatoption entscheidet darüber, ob Sie einen zweispaltigen Konferenzbeitrag oder einen einspaltigen Zeitschriftenartikel erhalten.

## Wählen Sie Ihre Formatoption

```latex
% Conference proceedings (SIGCHI, SIGPLAN, most SIGs)
\documentclass[sigconf]{acmart}

% Small journal format (TOCE, TAP, ...)
\documentclass[acmsmall]{acmart}

% Large journal format (TOG, ...)
\documentclass[acmlarge]{acmart}
```

„sigconf“ ist das, was Sie für fast jede ACM-Konferenz benötigen. Die CFP des Veranstaltungsortes nennt die genaue Option; Vertraue ihr mehr als der Gewohnheit. Wenn Sie sich immer noch zwischen Veranstaltungsortfamilien entscheiden müssen, vergleicht [ACM, IEEE und Freunde](/learn/acm-ieee-and-friends/) diese.

## Die Metadaten sind obligatorisch

Im Gegensatz zu IEEEtran weigert sich acmart, ohne seine Metadatenblöcke richtig auszusehen (und der Herausgeber weigert sich, dies zu akzeptieren):

```latex
\begin{CCSXML}
... % generated at dl.acm.org/ccs
\end{CCSXML}
\ccsdesc[500]{Software and its engineering~Compilers}

\keywords{compilers, optimization, benchmarks}
```

Die CCS-Konzepte stammen von einem Picker auf der ACM-Website, der sowohl die XML- als auch die „\ccsdesc“-Zeilen generiert. Fügen Sie sie wörtlich ein. Schlüsselwörter kommen in „\keywords“, nicht in der Zusammenfassung. Der ACM-Referenzformatblock (das graue Zitierfeld auf Seite eins) wird automatisch aus „\acmConference“, „\acmYear“ und anderen generiert, die der Herausgeber zum Zeitpunkt der Aufnahme ausfüllt oder überprüft.

## Doppelblind einreichen

Die meisten ACM-Konferenzen werden anonym bewertet. Eine Option erledigt das:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

„anonymous“ verbirgt Autoren und Zugehörigkeiten, „review“ fügt Zeilennummern für Rezensenten hinzu. Schalten Sie beide aus, um sie für die Kamera bereit zu machen. Die Klasse kümmert sich um die Mechanik, aber die Anonymisierung ist wichtiger als eine Flagge. Siehe [Doppelblind richtig gemacht](/learn/anonymization-double-blind/).

## Zitate: nummeriert oder Autorenjahr

acmart verwendet darunter Natbib und unterstützt beide Stile:

| Option | Ergebnis |
|---|---|
| Standard | Nummeriert: [3] |
| `natbib=true` + `\citestyle{acmauthoryear}` | Autorenjahr: (Lovelace, 1843) |

Einige SIGs schreiben das Jahr des Autors vor (historisch CHI), andere nummerieren. Nochmals: Die CFP entscheidet.

## Überraschungen beim ersten Kompilieren

acmart ist pakethungrig. Erwarten Sie Folgendes bei einem neuen Setup:

- **Libertine-Schriftarten.** Die Klasse lädt Linux Libertine und Biolinum sowie „newtxmath“. Bei einer minimalen TeX-Installation werden diese beim ersten Kompilieren als Downloads angezeigt. Die mitgelieferte Tectonic-Engine von Oleafly ruft sie bei der ersten Verwendung automatisch ab, sodass die erste Kompilierung länger dauert als die zweite. Das ist normal, kein Hänger.
- **Strenge Float-Regeln.** acmart blockiert einige Pakete (wie „titlesec“) vollständig und gibt einen Fehler aus, wenn Sie sie laden.
- **`\authorsaddresses{}`** bringt den Fußzeilenfehler „Autorenadressen“ in Entwürfen zum Schweigen.

Wenn ein Paket wirklich nicht aufgelöst werden kann, ist die Lösung die übliche: [das fehlende Paket installieren](/learn/install-missing-package/).

## Wo man es bekommt

Laden Sie die offizielle Vorlage von den Autorenseiten von acm.org oder der Website Ihrer Konferenz herunter und halten Sie „acmart.cls“ auf dem neuesten Stand. ACM überarbeitet es mehrmals im Jahr und prüft die Kamerabereitschaft anhand der neuesten Version.