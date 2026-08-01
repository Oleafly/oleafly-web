---

title: "Geben Sie dem Modell Ihre Symboltabelle"
description: "Makros und eine kurze Notationsliste, damit die Variablen stabil bleiben."
category: "human-plus-model"
order: 4
level: "intermediate"
tags: ["ai"]
featured: false
updated: 2026-07-25
---

# Geben Sie dem Modell Ihre Symboltabelle

Bitten Sie ein Modell, einen mathematischen Text zu entwerfen oder zu überarbeiten, und die Prosa kommt normalerweise gut zustande, während die Notation abweicht. Ihr Vektor „\vect{x}“ wird in einem Absatz als „\mathbf{x}“ und in einem anderen als „\vec{x}“ zurückgegeben. Die Erwartung, die Sie als „\E[X]“ schreiben, kommt als „\mathbb{E}(X)“ zurück. Jede Variante wird kompiliert, sodass keine Fehler auftreten. Die Inkonsistenz tritt nur dann zutage, wenn dem Leser auffällt, dass dasselbe Objekt auf drei verschiedene Arten geschrieben wurde. Das Modell hat alle existierenden Notationskonventionen und, ohne Anweisungen, Beispiele von allen kennengelernt. Geben Sie es ausdrücklich Ihnen.

## Makros machen die Notation erzwingbar

Die Grundlagenarbeit ist unabhängig von der KI und lohnt sich auf jeden Fall: Leiten Sie jedes wiederkehrende Symbol durch ein Makro, sodass in der Quelle „\vect{x}“ statt „\boldsymbol{x}“ steht. Dadurch erhält jedes Konzept einen Namen, Sie können das gesamte Dokument durch Bearbeiten einer Definition umgestalten und dem Modell steht ein kleines Vokabular zur Verfügung, an dem Sie festhalten können, anstatt Varianten zu erfinden. Das Definieren von Makros wird in [Benutzerdefinierte Befehle](/learn/custom-commands/) behandelt.

## Was in die Eingabeaufforderung eingefügt werden soll

Fügen Sie neben Ihrer eigentlichen Anfrage einen kompakten Notationsblock hinzu: die Makrodefinitionen sowie einen Kommentar pro Zeile, der angibt, wozu die einzelnen Makros dienen.

```latex
% vectors: bold italic \vect{x}
% matrices: bold upright \mat{A}
% expectation: \E{X}
```

Geben Sie dann die Einschränkung direkt an: „Verwenden Sie nur diese Makros für diese Konzepte. Führen Sie keine neue Notation für irgendetwas Aufgeführtes ein, und wenn Sie ein Symbol benötigen, das nicht aufgeführt ist, sagen Sie es, anstatt eines zu erfinden.“ Models befolgen konkrete, überprüfbare Anweisungen weitaus besser als ein vages „Passt zu meinem Stil“. Bewahren Sie den Block für eine vollständige Arbeit als kurzen Notationskommentar in der Nähe der Präambel auf, damit er aktuell bleibt und zum Einfügen bereit bleibt.

## Mechanisch überprüfen

Die Makroschicht macht die Prüfung kostengünstig. Wenn jeder Vektor „\vect{...}“ sein muss, ist jedes rohe „\mathbf{“ oder „\vec{“ in der Modellausgabe ein Verstoß, den Sie mit einer Textsuche finden können, anstatt die Mathematik erneut zu lesen. Führen Sie diese Suche über alles durch, was Sie einfügen, korrigieren Sie die Nachzügler, und die Notation bleibt einheitlich, egal wie viele modellgestützte Änderungen im Papier landen.

## In Oleafly

Der [Assistent in Oleafly](/learn/oleafly-ai/) liest Projektdateien, einschließlich der Präambel, in der sich Ihre Makros befinden, sodass er normalerweise definierte Befehle aufnimmt, ohne dass es ihm mitgeteilt wird. Die explizite Anweisung hilft immer noch: Zu sehen, dass ein Makro existiert, ist schwächer, als zu sagen, dass es obligatorisch ist. Fügen Sie Ihrer Anfrage eine Zeile hinzu („Verwenden Sie die Notationsmakros aus der Präambel“) und überprüfen Sie den Rot/Grün-Unterschied, bevor Änderungen eintreten. Das hält die Drift von der Quelle fern.