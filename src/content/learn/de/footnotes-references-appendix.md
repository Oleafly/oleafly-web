---

title: "Fußnoten, Referenzen und Anhänge: Wer macht was?"
description: "Wo Nebenbemerkungen, Beweise und Überlaufmaterial jeweils hingehören und wer sie tatsächlich liest."
category: "paper-anatomy"
order: 6
level: "beginner"
tags: ["writing", "structure", "citations"]
featured: false
updated: 2026-07-25
---

# Fußnoten, Referenzen und Anhänge: Wer macht was?

In einer Arbeit gibt es drei Stellen, an denen Material abgelegt werden kann, die nicht zum Hauptfluss gehören, und jede hat eine eigene Aufgabe. Platzieren Sie die richtigen Inhalte an der richtigen Stelle und die Leser behalten die Orientierung. Mischen Sie sie und Ihre Arbeit liest sich wie eine Müllschublade.

## Fußnoten: die Höflichkeit beiseite

Eine Fußnote steht für etwas, das es wert ist, gesagt zu werden, aber es lohnt sich nicht, den Satz zu unterbrechen für: eine URL, eine Klarstellung, einen Vorbehalt, ein „Wir danken einem Rezensenten für diese Beobachtung.“

```latex
We use the standard split.\footnote{Available at
\url{https://example.org/data}.}
```

Gehen Sie sparsam damit um. Eine Arbeit mit einer Fußnote pro Absatz ist eine Arbeit, die mit sich selbst streitet. Wenn der Inhalt wesentlich ist, heben Sie ihn im Text hervor. Wenn es sich um eine zitierfähige Vorarbeit handelt, gehört sie stattdessen in die Referenzen. Und einige Veranstaltungsorte verbieten Fußnoten für URLs zugunsten korrekter Zitate, also prüfen Sie die Vorlage.

## Referenzen: die Beweisspur

Wenn Sie ein Werk zitieren, verweisen Sie auf die Beweise hinter einer Behauptung: Diese Tatsache wurde dort festgestellt, diese Methode wurde von ihnen eingeführt, dieser Datensatz stammt von hier. Die Referenzliste ist die vollständige Übersicht darüber, auf wem Sie aufbauen, und Prüfer prüfen sie sorgfältig, sowohl auf fehlende Einträge als auch auf Behauptungen, die an Zitate geheftet sind, die sie nicht wirklich stützen.

In LaTeX erfolgt die Mechanik automatisch: „\cite{key}“ im Text, ein Eintrag in Ihrer „.bib“-Datei und die Liste rendert sich selbst.

```latex
Transformers \cite{vaswani2017attention} replaced recurrence
with attention.
```

Der vollständige Arbeitsablauf besteht aus [Zitaten hinzufügen](/learn/add-citations/) und [einer Bibliographie erstellen](/learn/create-bibliography/). Oleafly kann einen „.bib“-Eintrag aus einer DOI-Suche ausfüllen, was das manuelle Eintippen von Autorenlisten übertrifft.

## Anhang: der Überlaufraum

Der Anhang enthält Material, das die Arbeit unterstützt, aber ihren Fluss unterbrechen würde: vollständige Beweise, zusätzliche Ergebnistabellen, Hyperparameterraster, Eingabeaufforderungsvorlagen, Datensatzdokumentation. Es gilt die Regel, dass das Hauptpapier für sich allein stehen muss. Ein Leser, der den Anhang nie öffnet, sollte dennoch überzeugt sein; Ein Leser, der es öffnet, sollte jedes versprochene Detail finden.

```latex
\appendix
\section{Full proofs}
```

Nach „\appendix“ beschriften sich die Abschnitte automatisch mit A, B, C.

## Ergänzendes Material: außerhalb des PDF

Ergänzendes Material ist alles, was in einem PDF überhaupt nicht leben kann: Code, Daten, Videos, interaktive Demos. Viele Veranstaltungsorte sammeln es als separaten Upload mit eigenen Größenbeschränkungen. Behandeln Sie es als Teil Ihrer Reproduzierbarkeitsgeschichte und verweisen Sie im Methodenabschnitt explizit darauf, damit die Leser wissen, dass es existiert.

## Wer liest eigentlich was?

| Teil | Rezensentenverhalten |
|---|---|
| Fußnoten | Im Vorbeilesen gelesen, schnell vergessen |
| Referenzen | Auf fehlende Arbeiten gescannt, insbesondere auf ihre eigenen |
| Anhang | Wird geöffnet, wenn ein Anspruch im Papier überprüft werden muss |
| Ergänzend | Geöffnet von dem einen Prüfer, der Ihren Code ausführt |

Was das in der Praxis bedeutet: Verstecken Sie niemals etwas Wesentliches in einer Fußnote oder einem Anhang. Rezensenten beurteilen den Haupttext, und „die Antwort war in Anhang F“ hat noch nie eine Rezension abgeschwächt. Platzieren Sie Ihr bestes Material dort, wo der Überflieger es findet, und lassen Sie das hintere Material tun, was es am besten kann: die Quittungen ruhig halten.