---

title: "Prompt-Modelle zum Kompilieren von TeX"
description: "Senden Sie die Präambel, fordern Sie ein Diff, kompilieren Sie immer die Antwort."
category: "human-plus-model"
order: 1
level: "beginner"
tags: ["ai"]
featured: true
updated: 2026-07-25
---

# Prompt-Modelle zum Kompilieren von TeX

Wenn Sie ein Chat-Modell nach LaTeX fragen, erhalten Sie normalerweise Code, der richtig aussieht und sich nicht in Ihr Dokument kompilieren lässt. Das Modell weiß nicht, welche Klasse Sie verwenden, welche Pakete Sie laden oder welche Makros Sie definiert haben, daher antwortet es für ein generisches Dokument, das nicht Ihnen gehört. Die Ausgabe bricht dann mit fehlenden Paketen oder widersprüchlichen Definitionen ab, sobald Sie sie einfügen. Das meiste davon lässt sich mit drei Eingabeaufforderungsgewohnheiten und einer strengen Regel vermeiden: Kompilieren, bevor Sie vertrauen.

## Senden Sie die Präambel

Ihre Präambel ist der Kontext, der dem Modell fehlt. Fügen Sie es ein, oder zumindest die Zeile „\documentclass“ und die Liste „\usepackage“ und fragen Sie nach „einem Fragment, das unter dieser Präambel kompiliert wird“. Diese eine Angewohnheit blockiert den häufigsten Fehler: Die Antwort hängt stillschweigend von „tikz“, „siunitx“ oder einem anderen Paket ab, das Sie nie geladen haben. Es steuert das Modell auch auf die Befehle, die Ihr Setup tatsächlich bereitstellt. Wenn Ihr Projekt Makros definiert, schließen Sie diese ebenfalls ein, aus den unter [Geben Sie dem Modell Ihre Symboltabelle](/learn/ai-follow-notation/) genannten Gründen.

## Fragen Sie, wovon die Antwort abhängt

Fügen Sie eine Daueranfrage hinzu: „Wenn Ihr Code ein Paket benötigt, das ich nicht geladen habe, führen Sie es explizit oben in Ihrer Antwort auf.“ Dadurch werden versteckte Abhängigkeiten zu einer sichtbaren Checkliste. Wenn die Antwort ein Paket benennt, entscheiden Sie, ob Sie es hinzufügen möchten, anstatt die Abhängigkeit drei Kompilierungen später als Fehler „Undefinierte Steuersequenz“ zu entdecken. Dieser Fehler und seine Diagnose werden in [Undefinierte Steuersequenz](/learn/undefined-control-sequence/) behandelt.

## Bitten Sie um einen Unterschied, nicht um eine Umschreibung

Wenn Sie eine Änderung am vorhandenen Text wünschen, fügen Sie den kleinsten relevanten Snippet ein und bitten Sie das Modell, nur das zu ändern, was die Anfrage erfordert, und geben Sie an, was sich geändert hat. Bei einer gegebenen ganzen Datei schreiben Modelle frei um: Sie formatieren unberührte Absätze neu, ordnen Einleitungszeilen neu und lassen gelegentlich etwas auf den Boden fallen. Die wirkliche Veränderung verschwindet in der Abwanderung. Eine minimale, beschriebene Bearbeitung ist eine, die Sie tatsächlich überprüfen können. In Oleafly erzwingt der Assistent diese Form für Sie, indem er jede Bearbeitung als Rot/Grün-Unterschied vorschlägt, den Sie Zeile für Zeile genehmigen, wie unter [Assistent in Oleafly](/learn/oleafly-ai/) beschrieben.

## Kompilieren Sie, bevor Sie vertrauen

Versenden Sie niemals LaTeX, das Sie nicht kompiliert haben, egal wie plausibel es sich liest. Fügen Sie den Vorschlag in Ihr Dokument ein, kompilieren Sie ihn und lesen Sie den ersten Fehler, falls vorhanden. Die Rückübertragung dieser Fehlermeldung zusammen mit dem fehlerhaften Snippet an das Modell führt normalerweise zu einem funktionierenden zweiten Versuch. Behalten Sie das Projekt unter Git, damit jede modellgestützte Änderung mit einem Befehl rückgängig gemacht werden kann, ein Setup, das in [Papier auf GitHub stellen](/learn/sync-with-github/) behandelt wird. Das Modell schlägt vor; der Compiler entsorgt.