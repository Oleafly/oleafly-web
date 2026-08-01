---

title: "Doppelblind richtig gemacht"
description: "Was Sie anonymisieren, wie Sie sich selbst zitieren und welche Metadaten Sie verraten."
category: "venue-formats"
order: 6
level: "intermediate"
tags: ["venues", "review"]
featured: false
updated: 2026-07-25
---

# Doppelblind richtig gemacht

Doppelblinde Begutachtung bedeutet, dass die Gutachter nicht wissen, wer die Arbeit geschrieben hat. Etwas falsch zu machen ist einer der wenigen Formatierungsfehler, die dazu führen können, dass ein Aufsatz ungelesen abgelehnt wird. Behandeln Sie die Anonymisierung daher als eine Checkliste und nicht als bloße Laune.

## Was muss weg

| Artikel | Was zu tun ist |
|---|---|
| Autorennamen und Zugehörigkeiten | Entfernen oder durch „Anonymer Autor(en)“ | ersetzen
| Danksagungen | Zur Einreichung löschen (Geldgeber und Kollegen identifizieren Sie) |
| Repo- und Projektlinks | Durch einen anonymisierten Link ersetzen, siehe unten |
| Institutionsspezifische Details | „Der Cluster unserer Universität“ schlägt „den Stanford GPU-Cluster“ |
| Formulierung „Unsere bisherigen Arbeiten“ | In der dritten Person umschreiben, siehe unten |
| Logos, Wasserzeichen, Header | Alles mit einem Gruppen- oder Labornamen entfernen |

Viele Klassen automatisieren die erste Zeile. Bei der ACM-Klasse gibt es eine Möglichkeit:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

Andere Veranstaltungsorte versenden eine Einreichungsvariante ihrer Vorlage. [IEEEtran](/learn/ieee-format-in-practice/) Veranstaltungsorte fordern Sie oft einfach auf, den Autorenblock wegzulassen.

## Zitieren Ihrer eigenen Arbeit

Die Regel ist einfach: Zitieren Sie sich selbst genau so, wie Sie einen Fremden zitieren würden.

Falsch: „In unserer vorherigen Arbeit [7] haben wir gezeigt…“
Rechts: „Lovelace et al. [7] zeigten …“

Lassen Sie Ihre eigenen relevanten Unterlagen nicht aus. Rezensenten erwarten, dass die offensichtlich verwandte Arbeit zitiert wird, und eine verdächtige Lücke kann Sie genauso effektiv deanonymisieren wie ein Name. Die einzige Ausnahme bilden wirklich unveröffentlichte Arbeiten, die Sie stattdessen als anonymes Ergänzungsmaterial hochladen können.

## Anonyme Artefakte

Prüfer erwarten zunehmend Code und Daten. GitHub-Links sind radioaktiv: Der Benutzername ist genau dort. Optionen, die funktionieren:

- Dafür entwickelte Dienste (anonymous.4open.science ist der Feldstandard)
– Ein neues Repository unter einem Wegwerfkonto mit bereinigtem Commit-Verlauf
- Zusätzliche ZIP-Datei wird mit der Einreichung hochgeladen, wobei Autorennamen aus Dateikopfzeilen und Notizbüchern entfernt werden

Überprüfen Sie die Zip-Datei vor dem Hochladen: Lizenzdateien, „AUTHORS“, Notebook-Metadaten und fest codierte Home-Verzeichnispfade („/home/ada/...“), alle Leak-Namen.

## Die Unfälle, die dich verraten

Der Papiertext ist anonym, das PDF darf jedoch nicht sein:

- **PDF-Metadaten.** Das Feld „Autor“ wird häufig automatisch von Ihrem System ausgefüllt. Überprüfen Sie es mit „pdfinfo“ oder den Dokumenteigenschaften Ihres Viewers und löschen Sie es über „\hypersetup{pdfauthor={}}“.
- **Dateinamen.** `lovelace-sigconf-final.pdf` macht alles rückgängig. Nennen Sie es „paper.pdf“ oder die Einreichungsnummer.
- **Abbildungsquellen.** Aus Tools exportierte Diagramme können Benutzernamen in Metadaten oder in einem sichtbaren Pfad in einem Screenshot einbetten.
- **Vorabdrucke.** Das Posten auf arXiv vor dem Einreichen ist an vielen Orten erlaubt und an anderen verboten. Das sagt die CFP. Lesen Sie es. Dies ist [Teil der Auswahl des Veranstaltungsortes](/learn/choose-your-venue/).

## Kamerabereit schaltet es zurück

Nach der Annahme wird alles zurückgegeben: Namen, Zugehörigkeiten, Danksagungen, der echte Repo-Link und die Ich-Formulierung, wenn Sie möchten. Planen Sie eine Stunde für den De-Anonymisierungs-Pass ein. Es berührt mehr Orte, als Sie sich erinnern, und die [Kamera-Ready-Checkliste](/learn/first-paper-roadmap/) ist der Moment, Nachzügler zu fangen.