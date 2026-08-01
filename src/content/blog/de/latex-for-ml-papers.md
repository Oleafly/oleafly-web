---

title: "LaTeX für maschinelle Lernarbeiten ohne Notationschaos"
description: "Notationsblätter, Ablationstabellen, Algorithmen, Abbildungen aus Trainingsläufen und Git neben dem Papier vom ersten arXiv-Entwurf bis zur Kamerareife."
date: 2026-06-18
tags: [machine-learning, research, math]
---

Die meisten ML-Aufsätze scheitern in LaTeX auf die gleiche Weise: Die Mathematik auf Seite drei ist in Ordnung und
inkonsistent auf Seite zwölf. Ein Verlust ist „L“ in einem Abschnitt, „\mathcal{L}“ in
ein anderer, und fett gedruckte Vektoren erscheinen nur, wenn der Autor sich daran erinnert. Rezensenten
bemerken, auch wenn sie es nicht kommentieren.

Dies ist ein praktischer Leitfaden für Studenten, die Workshop- und Konferenzarbeiten schreiben
Einsendungen und Kapitel der Abschlussarbeit, die die gleiche DNA wie der Schulungscode haben.

## Wählen Sie am ersten Tag ein Notizblatt aus

Bevor Sie verwandte Arbeiten schreiben, schreiben Sie zwanzig Zeilen Makros:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
\DeclareMathOperator*{\argmax}{arg\,max}
\newcommand{\loss}{\mathcal{L}}
\newcommand{\expect}{\mathbb{E}}
\newcommand{\kl}{\mathrm{KL}}
```

Fügen Sie diesen Block in jeden Co-Autor-Zweig ein. Wenn ein Modell ein neues Symbol erfindet,
Fügen Sie es zuerst dem Blatt hinzu und verwenden Sie es dann. Die
[KI-Follow-Notation-Lektion](/learn/ai-follow-notation/) ist die gleiche Idee mit a
Sprachmodell in der Schleife: Das Modell muss dem Blatt gehorchen und darf keine Schriftarten erfinden.

Die Live-Mathe-Vorschau in einem Forschungseditor hilft Ihnen, das „\mathcal{L}“ und zu erkennen
„L“ ist während der Eingabe nicht dasselbe Objekt.

## Tische, die für die Kamera geeignet sind

Ablationstabellen wachsen, bis sie von der Seite fallen. Bevorzugen Sie „Booktabs“ mit Nr
vertikale Regeln, „siunitx“ für ausgerichtete Dezimalzahlen und eine Beschriftung, die die angibt
Metrik und die Aufteilung (ImageNet, CIFAR, In-Domain vs. OOD). Wenn die Tabelle spannt
Seiten verwenden Sie frühzeitig „longtable“, anstatt die Schriftart auf 7pt zu verkleinern.

Für den ersten Entwurf hilft ein visueller Builder: der
[Tabellengenerator](/tools/table-generator/) läuft im Browser. Der Finaltisch
sollte die Metrik weiterhin in der Überschrift benennen und ± als std oder se definieren.

Melden Sie Seeds und Hyperparameterbereiche in Anhangtabellen, wenn der Veranstaltungsort dies zulässt.
Haupttabellen bleiben scannbar.

## Algorithmen und Auflistungen

Pseudocode gehört in „algorithm2e“ oder „algorithmicx“, nicht in einen Monospace
Absatz. Echte Trainingsschnipsel gehören in „Listings“ oder „geprägt“ mit a
Die Sprache ist so eingestellt, dass Prüfer sie überfliegen können. Halten Sie den Hauptartikel kurz; Vollständige Konfigurationen einfügen
im Anhang oder ein Repo-Link mit einem Commit-Hash.

```latex
\begin{algorithm}
\caption{Training step}\label{alg:step}
...
\end{algorithm}
```

Zahlenalgorithmen, die Sie zitieren. Legen Sie nicht fünf Seiten PyTorch in die PDF-Datei ab.

## Zahlen von TensorBoard und matplotlib

Exportieren Sie PDF oder SVG, wenn Sie können. Raster-PNGs mit 300 dpi eignen sich gut für die Benutzeroberfläche
Screenshots, nicht für Liniendiagramme. Leerzeichen vor „\includegraphics“ zuschneiden. Wenn ein
Der Schwimmer flieht zum nächsten Abschnitt. Legen Sie Größe und Platzierung fest, bevor Sie gegen „[H]“ kämpfen
für eine Stunde: [Float-Platzierung](/learn/figure-wrong-position/).

Multi-Panel-Ablationen: Erstellen Sie TeX mit „Subcaption“ oder erstellen Sie es extern und
Fügen Sie ein PDF bei. Behalten Sie eine konsistente Farbe für „unsere“ Figuren bei, damit diese überstrichen werden
Lerne die Legende einmal.

## Zweispaltige Konferenzkurse

Klassen im NeurIPS-, ICML-, ICLR- und CVPR-Stil ändern Margen und Float-Regeln.
Kompilieren Sie frühzeitig mit der offiziellen Klasse. Seitenbeschränkungen sind real; nicht zerdrücken
Schriftarten. Verschieben Sie Korrekturabzüge und zusätzliche Ablationen in den Anhang oder in die ergänzende PDF-Datei, wenn
der Anruf erlaubt.

## Verwandte Arbeiten und Zitate

Verwenden Sie stabile Zitierschlüssel und saubere Scholar-Exporte. Validieren Sie die „.bib“:
[BibTeX-Validator](/tools/bibtex-validator/). Zitieren Sie den Code und die Datensätze, die Sie benötigen
hängen davon ab. Autorenjahr vs. numerisch hängt vom Veranstaltungsort ab; Verwenden Sie die Vorlage
Stil, kein Hybrid.

## Git neben dem Papier

Jede Architekturänderung sollte ein Commit sein, das Sie benennen können. Behandeln Sie das Papier und
Der Code ist dasselbe Projekt, nicht zwei separate Sicherungsgewohnheiten.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) behält das Papier
in einem echten Git-Repo neben einem projektorientierten Editor mit Live-Mathe-Vorschau,
Dateiübergreifende Verweise, Vervollständigung von Zitaten und SyncTeX PDF. Das entspricht dem ML-Code
lebt bereits. Kombinieren Sie es mit dem [Spickzettel](/learn/cheatsheet/), wenn Sie es vergessen
Syntax unter einer Frist.

Markieren Sie den Commit, der dem OpenReview- oder CMT-Upload entspricht. Du wirst es wollen
während der Widerlegung.

## Widerlegung und kameratauglich

Die Widerlegungsfristen sind kurz. Behalten Sie einen Zweig oder Ordner für „Widerlegungsexperimente“
damit Sie die übermittelte PDF-Quelle nicht verunreinigen. Kamerabereit ermöglicht oft eine
zusätzliche Seite; Verwenden Sie es aus Gründen der Übersichtlichkeit und nicht, um jeden fehlgeschlagenen Lauf zu löschen.

## Umfassendere Auswirkungen und Einschränkungen

Selbst wenn der Veranstaltungsort einen kurzen Absatz über soziale Auswirkungen oder Einschränkungen erfordert,
schreibe es in einfacher Sprache. LaTeX speichert keinen vagen Absatz. Negativ setzen
Ergebnisse, hinter denen Sie im Anhang stehen können, wenn das Hauptseitenlimit knapp ist,
und sagen Sie, dass Sie dies im Haupttext getan haben, damit die Rezensenten nicht davon ausgehen, dass Sie sie versteckt haben.

## Bevor Sie hochladen

Überprüfen Sie, ob das Notationsblatt abschnittsübergreifend konsistent ist, die Haupttabellen sind es auch
lesbar mit benannten und ± definierten Metriken sowie zitierten Algorithmen und Zahlen
in Ordnung. Bestätigen Sie, dass die offizielle Klasse innerhalb der Seitenbeschränkung ohne Schriftart kompiliert wird
Bei Verbrechen ist die „.bib“ sauber mit Code und zitierten Daten und ein Commit-Hash ist vorhanden
für das hochgeladene PDF erfasst.

ML-Experimente sind bereits laut genug. Halten Sie die Notizen und Tabellen ruhig.