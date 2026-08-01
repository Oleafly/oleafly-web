---

title: "Leere Bibliographie"
description: "Pfad, Backend, fehlendes Zitat, gedruckte Bibliographie vs. Bibliographie."
category: "log-literacy"
order: 4
level: "beginner"
tags: ["errors", "citations"]
featured: false
updated: 2026-07-25
---

# Leere Bibliographie

## Das Symptom

Ihr Dokument wird ohne schwerwiegenden Fehler kompiliert, aber der Abschnitt „Referenzen“ fehlt vollständig oder die Überschrift wird ohne Untertitel angezeigt. Oft wird jedes „\cite“ im Text gleichzeitig als fettes Fragezeichen angezeigt. Es ist nichts abgestürzt, es gibt also keinen offensichtlichen Fehler, dem nachgegangen werden muss, was dieses Spiel frustrierend macht.

## Warum es passiert

Die Bibliographie wird nicht allein von LaTeX erstellt. LaTeX schreibt zunächst die Liste der zitierten Schlüssel in eine Hilfsdatei. Ein separates Backend-Programm („bibtex“ oder „biber“) liest Ihre „.bib“-Datenbank und formatiert die passenden Einträge. Schließlich liest LaTeX das formatierte Ergebnis beim nächsten Durchgang wieder ein. Eine leere Bibliographie bedeutet, dass diese Pipeline irgendwo kaputt gegangen ist: Das Backend wurde nie ausgeführt, es wurde ausgeführt, konnte die Datenbank aber nicht finden, es hat die Datenbank gefunden, aber es wurden keine Schlüssel angefordert, oder das Dokument fragt mit dem falschen Befehl nach dem Ergebnis.

## Gehen Sie die Ursachen der Reihe nach durch

Stellen Sie zunächst sicher, dass die Datenbankdatei dort vorhanden ist, wo sie im Dokument angegeben ist. „\bibliography{refs}“ und „\addbibresource{refs.bib}“ suchen beide nach „refs.bib“ relativ zur Hauptdatei, daher muss eine Datei, die sich in einem „bib/“-Unterordner befindet, als „bib/refs“ oder „bib/refs.bib“ referenziert werden. Ein falscher Weg scheitert still und leise.

Zweitens stellen Sie sicher, dass das Backend tatsächlich ausgeführt wurde. Eine einzige Kompilierung reicht nie aus; Der gesamte Zyklus ist LaTeX, dann „bibtex“ oder „biber“, dann noch zweimal LaTeX. Oleafly führt diesen Zyklus automatisch durch, aber ein manueller Build oder eine falsch konfigurierte Editor-Toolchain kann den mittleren Schritt überspringen und das Ergebnis ist genau eine leere Referenzliste.

Überprüfen Sie drittens, ob mindestens ein „\cite“-Befehl vorhanden ist. Das Backend formatiert nur Einträge, die das Dokument anfordert, sodass ein Entwurf, der noch keine Zitate enthält, standardmäßig eine leere Liste erhält. Während der frühen Entwurfsphase können Sie mit „\nocite{*}“ alles erzwingen, wodurch jeder Eintrag in der Datenbank angefordert wird, ohne dass etwas im Text gedruckt wird.

Viertens: Passen Sie den Befehl an das System an. Klassische BibTeX-Dokumente enden mit „\bibliographystyle{...}“ und „\bibliography{refs}“. Biblatex-Dokumente laden die Datenbank in der Präambel mit „\addbibresource{refs.bib}“ und drucken sie mit „\printbibliography“. Das Mischen der beiden, zum Beispiel das Laden von biblatex, aber dennoch den Aufruf von „\bibliography“, führt zu genau diesem Fehler. Das Gleiche gilt für die Ausführung des falschen Backends: biblatex benötigt „biber“, und die Fütterung des klassischen „bibtex“ bringt nichts.

## Lesen Sie das eigene Protokoll des Backends

Das Backend schreibt seine Beschwerden in eine „.blg“-Datei neben Ihrem Dokument, und dort werden fehlerhafte Einträge, doppelte Schlüssel und Meldungen „Ich konnte die Datenbankdatei nicht öffnen“ angezeigt. Wenn die obigen Schritte richtig aussehen, die Liste aber noch leer ist, nennt das „.blg“-Protokoll fast immer den wahren Schuldigen. Informationen zu Fragezeichen, die nach dem Erscheinen der Bibliographie selbst bestehen bleiben, finden Sie unter [Mystery-Zitatzeichen löschen](/learn/citation-question-mark/).