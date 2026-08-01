---

title: "Physik-Dissertationen: Gleichungen, Einheiten und Vernunft in mehreren Dateien"
description: "Notation, Siunitx, Projekte mit mehreren Kapiteln, zweispaltige Journalfallen und Offline-Kompilierungsgewohnheiten für Physik- und Astronomiestudenten."
date: 2026-06-20
tags: [physics, thesis, math]
---

Physikmanuskripte enthalten mehr Mathematik pro Seite als die meisten Fachgebiete. Das ist in Ordnung
bis ein halbfertiges Kapitel die gesamte Kompilierung unterbricht, weil ein Label verschoben wurde,
oder bis jeder Co-Autor eine andere Fett-Vektor-Konvention erfindet.

Dies ist ein praktischer Aufbau für MSc/PhD-Kapitel, Notizen zur Zusammenarbeit und ein Tagebuch
Einreichungen, die noch zwei Spalten benötigen.

## Multi-File von Anfang an

Sogar eine kurze Abschlussarbeit profitiert von einer Stammdatei und einem Kapitel, das Folgendes enthält:

```latex
\documentclass{report} % or the university class
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

Verwenden Sie beim Entwurf „\includeonly{chapters/methods}“, damit Sie nicht neu erstellen
drei Kapitel, um eine Gleichung zu klären. Einzelheiten:
[eine Stammdatei, viele Kapitel](/learn/split-chapter-files/).

Bewahren Sie Abbildungen unter „figures/ch2/“ auf und benennen Sie Gleichungen mit kapitelbezogenen Beschriftungen
(`eq:ch2-hamiltonian`), damit Zusammenführungen nicht kollidieren.

## Einheiten sind kein Text

Schreiben Sie „$v = 3.0\,\mathrm{m\,s^{-1}}$“ bei Bedarf manuell oder laden Sie „siunitx“.
und verwenden Sie „\qty{3.0}{m.s^{-1}}“. Zeitschriften unterscheiden sich hinsichtlich der Abstände und dünnen Zwischenräume; wählen
einen Paketpfad und bleiben Sie dabei. Gemischte Stile sehen aus wie zwei Autoren, die nie
traf.

Bei Wertetabellen richten die Spaltentypen „siunitx“ Dezimalstellen aus und behalten die Einheit bei
Header konsistent. Mischen Sie „m/s“ und „ms^{-1}“ nicht ohne a im selben Papier
Der in den Methoden angegebene Grund.

## Dirac, Vektoren und fette Konventionen

Quantengruppen und Gruppen kondensierter Materie benötigen häufig die Dirac-Notation. Pakete wie
`physics` oder dedizierte Makros für `\ket`, `\bra`, `\braket` schlagen Ad-hoc
Kombinationen von Winkeln. Gruppen der klassischen Mechanik streiten über Fettdruck vs. Pfeil
Vektoren. Dokumentieren Sie die Konvention in der Präambel und lehnen Sie Ad-hoc-Ausnahmen ab
Mitte des Kapitels.

Siehe [Dirac-Notation](/learn/physics-braket/) und [bold math](/learn/bold-math/).

Definieren Sie Operatoren einmal (`\DeclareMathOperator`), also Differentialoperatoren und
Benannte Funktionen weichen nicht in der Schriftart ab.

## Nummerierung und Querverweise

Zahlengleichungen, die Sie zitieren werden; Lassen Sie den Rest nicht nummeriert. Eine Seite von
„(1)(2)(3)...“ ist schwerer zu lesen als eine kurze Erzählung mit zwei getaggten Zeilen.
Verwenden Sie „\eqref“ für Gleichungen und stabile Beschriftungen. Projektweite Referenzprüfung
fängt ein gelöschtes Label ab, bevor der Advisor es tut.

Theoreme und Lemmata (falls Sie sie verwenden) sollten ein klares Nummerierungsschema haben
der Rest der Abteilungsvorlage. Siehe auch
[Theoreme und Beweise](/learn/theorems-proofs/).

## Zweispaltige Journalfallen

APS, IOP und ähnliche Klassen ändern das Float-Verhalten. Eine Figur, die gut aussah
in „Artikel“ kann sich weigern, neben dem Absatz zu stehen, der ihn zitiert. Kompilieren
gegen die echte Klasse früh, nicht am Wochenende vor der Einreichung.

Voreinstellungen, die helfen:

- Figurenbreite etwa `0,45\textwidth` oder `\columnwidth` in zwei Spalten
- breite Zahlen als „Abbildung*“ (oft nur oben auf der Seite)
- lange Ableitungen in „multline“ / „split“ oder in einen Anhang verschoben

Verkleinern Sie die Formelschrift nicht, bis sie nicht mehr lesbar ist. Rezensenten bemerken es.

## Abbildungen: Diagramme und Schaltpläne

Wenn möglich, exportieren Sie Diagramme als PDF aus matplotlib/gnuplot/Root. Raster-PNGs sind
für Fotos und Detektorbilder, bei ausreichender Auflösung. Schaltpläne können TikZ oder sein
externe Vektorgrafiken; Behalten Sie die Quelle im Repo. Leerzeichen vorher zuschneiden
`\includegraphics`.

## Offline, wenn das Labornetzwerk ausfällt

Beamlines und Reinräume sind nicht für stabiles WLAN bekannt.
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) versendet die
Compiler und hält SyncTeX, den PDF-Arbeitsbereich und die Mathematikvorschau lokal. Jeder
Das Projekt ist echtes Git mit automatischen Prüfpunkten, daher ist eine schlechte Gleichungsbearbeitung eine davon
wiederherstellen weg. Die PDF-Datei wird weiterhin erstellt, wenn ein Browser-Editor nicht geladen wird.

Sie können einen ähnlichen Offline-Stack mit TeX Live, einem PDF-Viewer und Git by zusammenstellen
Hand. In jedem Fall sollte die Neukompilierung der Arbeit nicht auf ein Captive-Portal angewiesen sein
Kapitel drei.

## Zusammenarbeit

Eigene Kapitel nach Möglichkeit nach Autor. Teilen Sie ein Notationsblatt. Vollständiges Dokument ausführen
Wird wöchentlich kompiliert, sodass kapitelübergreifende Verweise frühzeitig fehlschlagen. Private Git-Remote für
unveröffentlichte Ergebnisse; Nur dann öffentlich, wenn die Zusammenarbeitsrichtlinie dies zulässt.

## Anhänge und ergänzendes Material

Lange Ableitungen und zusätzliche Handlungsstränge gehören in einen Anhang oder eine gesonderte Ergänzung
PDF, wenn das Journal zweispaltig und seitenbegrenzt ist. Querverweis explizit
(„siehe Anhang B“) mit echten Etiketten. Gehen Sie nicht davon aus, dass der Schiedsrichter einen Reißverschluss öffnet
aus losen Abbildungen ohne Bildunterschriften.

## Wenn der Berater auf Papier redigiert

Markieren Sie die TeX-Quelle möglichst noch am selben Tag. Papierstapel veralten.
Wenn zwei Berater widersprüchliche Notationen markieren, aktualisieren Sie das Präambelblatt und senden Sie eine
Einseitiges Notations-PDF, damit das Argument nicht bei jedem Entwurf erneut verhandelt wird.

## Vorabeinreichung

Notationsblatt vollständig, Vektoren und Klammern konsistent, Einheiten über ein System
(„siunitx“ oder ein vereinbarter manueller Stil). Kapitel sollten sauber mit eingefügt werden
`\ref`/`\eqref` wird aufgelöst. Erstellen Sie das echte Journal oder die Abschlussarbeit ohne Schriftart
Überraschungen. Abbildungen entsprechen den DPI- und Farbregeln; Untertitel stehen für sich allein. Archiv
Quelle und PDF mit einem Commit-Hash für die übermittelte Version.

Physikschreiben ist schwer genug. Die Toolchain soll langweilig bleiben.