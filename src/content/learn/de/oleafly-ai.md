---

title: "Assistent bei Oleafly"
description: "Ihr API-Schlüssel, Projektkontext, Unterschiede, kompilierungsfähige Änderungen."
category: "human-plus-model"
order: 5
level: "beginner"
tags: ["ai", "oleafly"]
featured: true
updated: 2026-07-25
---

# Assistent in Oleafly

Oleafly enthält einen KI-Assistenten, der innerhalb Ihres Projekts und nicht in einem separaten Chat-Fenster arbeitet. Im Gegensatz zum Einfügen von LaTeX in einen allgemeinen Chatbot läuft es auf Ihrem eigenen API-Schlüssel, kann das bearbeitete Projekt lesen und zeigt jede vorgeschlagene Änderung zur Genehmigung an, bevor es Ihre Dateien berührt.

## Ihr Schlüssel, Ihr Anbieter

Der Assistent tätigt keine Modellaufrufe über die Server von Oleafly. Sie stellen einen API-Schlüssel für einen von neun unterstützten gehosteten Anbietern bereit oder verweisen die App auf eine lokale Ollama-Installation und verwenden ein Modell, das auf Ihrer eigenen Hardware läuft. Anfragen gehen von Ihrem Gerät zu den Bedingungen dieses Anbieters an den von Ihnen konfigurierten Anbieter und Sie bezahlen den Anbieter direkt zu seinen Tarifen. Welches Modell Sie wählen und wie Sie einen Schlüssel oder ein Ollama einrichten, wird im [KI-Setup](/docs/ai-setup/) behandelt.

## Was der Assistent sehen kann

Wenn Sie eine Frage stellen oder eine Bearbeitung anfordern, arbeitet der Assistent anhand einer Karte Ihres Projekts und liest die für die Anfrage relevanten Dateien, z. B. das Kapitel, das Sie bearbeiten, die Präambel, die Ihre Makros definiert, oder die „.bib“-Datei hinter einer Zitationsfrage. Dieser Kontext ist der Grund, warum die Frage „Warum schwebt Abbildung 3 auf der nächsten Seite“ zu Ihrer tatsächlichen Abbildung 3 beantwortet werden kann und warum ihre Änderungen tendenziell mit der Notation und den Befehlen übereinstimmen, die Ihr Dokument bereits verwendet.

## Änderungen, die Sie überprüfen, keine Änderungen, die einfach passieren

Der Assistent schreibt niemals direkt in Ihre Dateien. Änderungen werden als Diff vorgeschlagen, mit entfernten Zeilen in Rot und hinzugefügten Zeilen in Grün, und Sie können jede einzelne akzeptieren oder ablehnen. Bevor eine akzeptierte Änderung angewendet wird, zeichnet Oleafly einen Git-Prüfpunkt auf, sodass der Status vor der Bearbeitung im [Git-Verlauf](/docs/git-history/) immer einen Schritt entfernt ist. Das Löschen einer Datei wird gesondert behandelt und bedarf immer Ihrer ausdrücklichen Bestätigung, unabhängig davon, was der Assistent sonst noch tut.

## Die Schleife mit dem Compiler schließen

Da der Assistent in der Nähe des Gebäudes wohnt, kann er seine eigene Arbeit überprüfen. Nach einer Bearbeitung kann eine Kompilierung ausgelöst, das Protokoll gelesen und überprüft werden, ob die Änderung einen Fehler beheben sollte. Es kann auch den Text der kompilierten PDF-Datei lesen und so bestätigen, dass eine angeforderte Änderung tatsächlich in der Ausgabe angezeigt wird. Modelle erzeugen immer noch falsches LaTeX, also lesen Sie, was Sie akzeptieren. Der Vorteil besteht darin, dass fehlerhafte Vorschläge dazu neigen, innerhalb der Schleife aufgefangen und korrigiert zu werden und nicht später von Ihnen.

Die alltäglichen Mechaniken finden sich in den Dokumenten für [Chat](/docs/ai-chat/) und [Inline-Bearbeitung](/docs/ai-inline-edit/), und [Eine Woche Schreiben in Oleafly](/learn/oleafly-workflow/) zeigt, wo der Assistent in eine vollständige Schreibschleife passt.