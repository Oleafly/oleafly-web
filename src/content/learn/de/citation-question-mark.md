---

title: "Löschen von mysteriösen Zitatzeichen"
description: "Tippfehler, fehlende Pässe, falscher Pfad, Diskrepanz zwischen BibTeX und Biber."
category: "cite-your-sources"
order: 5
level: "beginner"
tags: ["citations", "errors"]
featured: true
updated: 2026-07-25
---

# Mysterium-Zitatzeichen löschen

## Das Symptom

Das Dokument wird kompiliert, aber an der Stelle, an der ein Zitat erscheinen sollte, wird ein fettes Fragezeichen „[?]“ angezeigt, und das Protokoll enthält Zeilen wie „LaTeX-Warnung: Zitat 'knuth84' undefiniert“. Manchmal ist jedes Zitat betroffen, manchmal nur ein oder zwei. Da es sich hierbei eher um eine Warnung als um einen Fehler handelt, wird die PDF-Datei trotzdem erstellt und die Markierungen können leicht übersehen werden, bis ein Leser sie darauf hinweist.

## Warum es passiert

LaTeX löst Zitate nicht direkt auf. Beim ersten Durchgang zeichnet es jeden angeforderten Schlüssel in einer Hilfsdatei auf. Ein Backend-Programm („bibtex“ oder „biber“) sucht dann nach diesen Schlüsseln in Ihrer „.bib“-Datenbank und schreibt formatierte Einträge. Zwei weitere LaTeX-Durchläufe falten die Ergebnisse wieder zusammen. Ein Fragezeichen bedeutet, dass zum Zeitpunkt des letzten Durchgangs kein formatierter Eintrag für diesen Schlüssel vorhanden war. Jede Ursache dieses Symptoms ist eine Möglichkeit, diese Pipeline zu unterbrechen.

## Gehen Sie die Ursachen der Reihe nach durch

Überprüfen Sie zunächst den Schlüssel selbst. „\cite{knuth84}“ und „@article{knuth1984,...}“ sind unterschiedliche Zeichenfolgen und die Übereinstimmung ist genau, einschließlich Groß- und Kleinschreibung. Durchsuchen Sie Ihre „.bib“-Datei nach dem in der Warnung genannten Schlüssel. Ein Tippfehler auf beiden Seiten ist der häufigste Schuldige, und die erste Warnung wegen fehlendem Schlüssel im Protokoll ist diejenige, der man nachgehen sollte.

Stellen Sie als Nächstes sicher, dass der gesamte Kompilierungszyklus ausgeführt wurde. Die Reihenfolge ist LaTeX, dann „bibtex“ oder „biber“, dann noch zweimal LaTeX. Eine einzelne Kompilierung kann niemals Zitate auflösen, da das Backend noch nicht ausgeführt wurde. Oleafly steuert den gesamten Zyklus automatisch, aber ein manueller Build oder ein falsch konfigurierter Editor kann nach dem ersten Durchgang stoppen.

Drittens überprüfen Sie den Datenbankpfad. „\bibliography{refs}“ und „\addbibresource{refs.bib}“ werden relativ zur Hauptdatei aufgelöst, daher muss eine Datenbank in einem Unterordner als „bib/refs“ oder „bib/refs.bib“ geschrieben werden. Ein falscher Weg scheitert stillschweigend und zieht in der Regel die gesamte Referenzliste mit sich; siehe [Leere Bibliographie](/learn/bibliography-empty/) für diesen größeren Fehler.

Passen Sie abschließend das Backend an das System an. Ein Dokument, das biblatex lädt, muss mit „biber“ verarbeitet werden. Wenn man es mit dem klassischen „bibtex“ füttert, entsteht keine brauchbare Ausgabe, und jedes Zitat bleibt ein Fragezeichen, egal wie oft man es neu kompiliert.

## Wenn alles andere fehlschlägt

Veraltete Hilfsdateien können einen alten, defekten Zustand beibehalten. Löschen Sie die Dateien „.aux“, „.bbl“ und „.blg“ neben Ihrem Dokument und erstellen Sie es von Grund auf neu. Es lohnt sich auch, die Datei „.blg“ zu lesen, bevor Sie sie löschen: Sie ist das eigene Protokoll des Backends und benennt fehlende Datenbanken und fehlerhafte Einträge explizit.