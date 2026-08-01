---

title: "Veröffentlichen Sie Ihren ersten arXiv-Preprint"
description: "Empfehlung, Kategorien, Quellenbereinigung, Lizenzen und der Ankündigungszyklus."
category: "ship-your-paper"
order: 3
level: "intermediate"
tags: ["arxiv", "preprint", "publishing"]
featured: false
updated: 2026-07-25
---

# Veröffentlichen Sie Ihren ersten arXiv-Preprint

Durch das Posten auf arXiv wird Ihre Arbeit öffentlich, zitierfähig und mit einem Zeitstempel versehen. Der Prozess weist einige Eigenheiten auf, die jeden beim ersten Mal überraschen. Wenn Sie [was arXiv ist] (/learn/what-is-arxiv/) noch nicht gelesen haben, beginnen Sie dort und kehren Sie dann zurück.

## Bestätigung: der Türsteher an der Tür

Neue Einreicher benötigen in den meisten Kategorien die Empfehlung eines etablierten arXiv-Autors. Wenn Ihr Konto eine akademische E-Mail-Adresse verwendet und Sie Co-Autoren mit arXiv-Verlauf haben, geschieht dies oft automatisch oder schnell. Ansonsten fragen Sie Ihren Betreuer oder einen Co-Autor; Das System gibt Ihnen einen Bestätigungscode zum Versenden. Klären Sie dies Tage vor dem geplanten Posten, nicht am Abend.

## Wählen Sie Ihre Kategorien

arXiv ist in moderierte Kategorien wie „cs.LG“ (maschinelles Lernen), „cs.CL“ (Berechnung und Sprache), „math.OC“ (Optimierung) und „stat.ML“ unterteilt. Sie wählen eine primäre Kategorie und optional einige sekundäre. Suchen Sie nach Artikeln, die Sie zitieren, und folgen Sie ihnen. Die primäre Kategorie bestimmt, welche Mailingliste Ihren Beitrag ankündigt, also entscheidet sie, wer ihn zuerst sieht.

## arXiv möchte Ihre Quelle, nicht Ihr PDF

Das ist das Große. Wenn Ihre Arbeit mit LaTeX erstellt wurde, benötigt arXiv die LaTeX-Quelle und nicht nur ein PDF. Ihr AutoTeX-System kompiliert es auf ihren Servern und dieser Build wird von den Lesern heruntergeladen. Folgen:

- Jede Datei, die Ihre Arbeit benötigt, muss im Upload enthalten sein: Abbildungen, „.bbl“-Datei (arXiv führt BibTeX nicht für Sie aus, also fügen Sie die generierte „.bbl“ ein), Stildateien, die nicht dem Standard entsprechen.
- Wenn es auf ihrem System nicht kompiliert werden kann, reparieren Sie es, bis es funktioniert.

## Bereinigen Sie zuerst Ihre Quelle

Ihre Kommentare werden mit Ihrer Quelle geliefert und jeder kann sie herunterladen. Der Entwurf einer Notiz mit der Aufschrift „% TODO: Ist diese Behauptung überhaupt wahr?“ wird öffentlich sein. Vor dem Hochladen:

- [ ] Kommentare entfernen. Das Tool „arxiv-latex-cleaner“ automatisiert dies und entfernt auch nicht verwendete Dateien.
- [ ] Nicht verwendete Abbildungen und alte Abschnitte löschen
- [ ] Auf peinliche Dateinamen prüfen (`final_v7_ACTUALLY_final.tex`)
- [ ] Kompilieren Sie die bereinigte Kopie einmal von Grund auf

Die Arbeit mit einem Git-gestützten Projekt hilft hier: In Oleafly können Sie von einem Prüfpunkt abzweigen, die Quelle bereinigen und mit dem Original vergleichen, um zu bestätigen, dass sich nichts Wesentliches geändert hat, bevor Sie die ZIP-Datei exportieren.

## Lizenzen

arXiv fordert Sie auf, eine Lizenz auszuwählen. Die minimale reine arXiv-Lizenz ist die gängige Standardeinstellung und hält Ihre Optionen bei Zeitschriften offen. CC BY ist freizügiger. Wenn das Papier an einen bestimmten Verlag geht, überprüfen Sie dessen Preprint-Richtlinien, bevor Sie sich für etwas Unwiderrufliches entscheiden.

## Der Ankündigungszyklus und seine Folklore

arXiv kündigt neue Beiträge stapelweise an, nach einem festen Wochentagsplan mit Abgabeschluss. Beiträge, die direkt nach dem Stichtag eingereicht werden, erscheinen ganz oben in der nächsten Liste, und eine kleine Folklore-Industrie behauptet, dass Beiträge, die ganz oben auf der Liste stehen, mehr Aufmerksamkeit erhalten. Vielleicht. Verlieren Sie nicht den Schlaf darüber; Eine gute Zusammenfassung ist weitaus wichtiger als die Platzierung auf der Liste.

## Versionen: v1, v2 und nach der Akzeptanz

Ihr erster Beitrag ist Version 1 und dauerhaft: Sie können Versionen hinzufügen, diese jedoch niemals löschen. Veröffentlichen Sie Version 2, wenn Sie echte Verbesserungen haben, normalerweise die akzeptierte Version nach [Peer Review](/learn/peer-review-explained/). Aktualisieren Sie nach der Annahme die arXiv-Kopie mit dem für die Kamera geeigneten Inhalt (unter Beachtung der Richtlinien des Herausgebers) und fügen Sie den DOI oder den Veranstaltungsort im Feld „Journal Reference“ hinzu. Die Leser werden es Ihnen danken.