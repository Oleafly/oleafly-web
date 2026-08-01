---

title: "Eine Woche Schreiben in Oleafly"
description: "Bibliothek, Vorlagen, Kompilierung, SyncTeX, Zitate, Git-Verlauf, optionale KI."
category: "local-studio"
order: 6
level: "beginner"
tags: ["oleafly", "workflow"]
featured: true
updated: 2026-07-25
---

# Eine Woche Schreiben in Oleafly

So sieht eine Arbeit in Oleafly jeden Tag aus, vom leeren Projekt bis zum Entwurf, den Sie an einen Co-Autor senden können. Die App benötigt kein Konto und keinen Server: Ein Projekt ist ein Ordner mit „.tex“-, „.bib“- und Figure-Dateien auf Ihrer Festplatte, und alles darunter wird in diesem Ordner ausgeführt.

## Tag eins: Beginnen Sie mit einer Vorlage

Erstellen Sie in der Bibliothek ein Projekt, entweder leer oder aus einer [Vorlage](/templates/) für gängige Formate wie IEEE- und ACM-Papiere oder ein Dissertationsgerüst. Mit einer Vorlage erhalten Sie sofort ein Kompilierungsdokument, in dem die Klassenoptionen und die Präambel bereits sinnvoll sind, was das Zusammenstellen einer Präambel Zeile für Zeile am ersten Tag übertrifft. Drücken Sie einmal auf „Kompilieren“, um zu bestätigen, dass Sie ein PDF erhalten, bevor Sie etwas schreiben.

## Midweek: die Write-Compile-Schleife

Die meiste Zeit der Woche gibt es eine Schleife zwischen dem Editor und dem PDF-Bereich. Der Editor vervollständigt automatisch Befehle, Umgebungen sowie die in Ihrem Projekt vorhandenen Beschriftungen und Zitatschlüssel, und Schrägstrichbefehle fügen größere Strukturen wie Abbildungen und Tabellen ein, ohne dass Sie sich deren Grundbausteine ​​merken müssen. Kompilieren Sie häufig, denn ein neuer Fehler in einem Text, den Sie vor zwei Minuten geschrieben haben, lässt sich leicht einordnen, ein Fehler, der nach einem Nachmittag voller Änderungen auftaucht, hingegen nicht. SyncTeX verbindet die beiden Bereiche: Klicken Sie auf einen Absatz im PDF, um zur Quellzeile zu springen, oder springen Sie von der Quelle zum PDF, was bei der Überarbeitung bestimmter Seiten eines langen Dokuments am wichtigsten ist.

## Zitate im Laufe der Zeit

Behalten Sie eine „.bib“-Datei im Projekt und zitieren Sie sie beim Schreiben mit „\cite{...}“, wobei Sie die Schlüssel automatisch vervollständigen lassen. Das Hinzufügen von Referenzen zum Zeitpunkt des Schreibens ist kostengünstig. Das Rekonstruieren von Platzhaltern für „Zitat erforderlich“ aus drei Wochen ist nicht möglich. Wenn Einträge aus Zotero oder dem Export eines Herausgebers stammen, erkennt der [BibTeX-Validator](/tools/bibtex-validator/) fehlende Felder, bevor sie als seltsam aussehende Referenzen auftauchen. Die vollständige Pipeline wird in [Vom .bib-Schlüssel zum In-Text-Zitat](/learn/add-citations/) beschrieben.

## Geschichte ohne Zeremonie

Oleafly kann einen Git-Commit automatisch nach jeder erfolgreichen Kompilierung aufzeichnen, sodass die Woche eine Zeitleiste mit Arbeitszuständen hinterlässt, die Sie überprüfen oder zu denen Sie zurückkehren können. Wenn es sich lohnt, den Entwurf zu teilen, verschieben Sie den Ordner in ein privates GitHub-Repository. [Stellen Sie das Papier auf GitHub](/learn/sync-with-github/) zeigt die Einrichtung.

## Optional: der Assistent

Wenn Sie einen API-Schlüssel für einen gehosteten Anbieter hinzufügen oder die App auf das lokale Ollama verweisen, kann ein Assistent Fragen zu Ihrem Projekt beantworten, Änderungen hinter Genehmigungsunterschieden vorschlagen und kompilieren, um die eigene Arbeit zu überprüfen. Optional: Jeder oben genannte Schritt funktioniert auch ohne. Einzelheiten finden Sie in [Assistant inside Oleafly](/learn/oleafly-ai/), und die umfassendere Designabsicht hinter der App finden Sie in [Erste Schritte](/docs/getting-started/) und [Philosophie](/docs/philosophy/).