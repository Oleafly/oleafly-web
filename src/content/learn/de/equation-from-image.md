---

title: "Whiteboard-Foto als Quelle"
description: "Zuschneiden, OCR oder multimodal, kompilieren, Indizes nach Augenmaß korrigieren."
category: "human-plus-model"
order: 2
level: "beginner"
tags: ["ai", "math"]
featured: false
updated: 2026-07-25
---

# Whiteboard-Foto zur Quelle

Eine Ableitung auf einem Whiteboard, eine gescannte Seite mit Vorlesungsnotizen, eine Gleichung in einer PDF-Datei, aus der Sie nicht kopieren können: Das manuelle Eintippen von Mathematik in LaTeX ist langsam und fehleranfällig. Moderne Tools können das meiste davon anhand eines Fotos erledigen. Die Konvertierung ist jetzt wirklich gut, aber betrachten Sie die Ausgabe als Entwurf und nicht als fertige Transkription. Der folgende Workflow ist darauf aufgebaut.

## Beginnen Sie mit einem besseren Foto

Die Bildqualität bestimmt das Ergebnis mehr als die Werkzeugauswahl. Schießen Sie geradeaus und nicht schräg, da verzerrte Grundlinien dazu führen, dass tiefgestellte und hochgestellte Zeichen nicht eindeutig sind. Sorgen Sie für eine gleichmäßige Beleuchtung ohne Blendung auf der Tafel und schneiden Sie sie genau auf die gewünschte einzelne Gleichung zu, da umliegende Diagramme und verirrte Markierungen zu halluzinierten Symbolen werden. Wenn ein Foto drei Gleichungen enthält, schneiden Sie es in drei Bilder zu und konvertieren Sie diese nacheinander. Ergebnisse pro Gleichung sind durchweg besser als Ergebnisse pro Seite.

## Konvertieren Sie mit dem Tool, das Sie haben

Drei Arten von Werkzeugen übernehmen diese Aufgabe. Spezielle Gleichungs-OCR-Dienste sind bei sauberer Eingabe genau. Allgemeine multimodale Modelle akzeptieren ein Bild im Chat und geben LaTeX zurück, wenn Sie dazu aufgefordert werden. Sie können antworten: „Der zweite Index sollte j sein, nicht i“, um eine korrigierte Version zu erhalten. Oleafly hat Image-to-LaTeX integriert und läuft über Ihren eigenen API-Schlüssel mit dem von Ihnen konfigurierten Anbieter, sodass ein Snippet vom Screenshot zur Quelle gelangen kann, ohne den Editor zu verlassen. Informationen zur Konfiguration finden Sie unter [AI-Setup](/docs/ai-setup/). Bei klarer Eingabe konvergieren die drei Ansätze, weshalb die Fotoempfehlung oben wichtiger ist als die Werkzeugentscheidung.

## Sofort kompilieren

Fügen Sie die Ausgabe in einer „Gleichungs“-Umgebung in Ihr Dokument ein und kompilieren Sie sie, bevor Sie etwas anderes tun. Es gibt zwei Arten von Konvertierungsfehlern, und der Compiler fängt die erste Art für Sie ab: unausgeglichene geschweifte Klammern, nicht übereinstimmende Trennzeichen „\left“ und „\right“ sowie unbekannte Befehle schlagen lautstark fehl und die Korrekturen erfolgen mechanisch. [Fehlendes Dollarzeichen](/learn/missing-dollar/) deckt die häufigsten dieser Fehler ab.

## Dann lesen Sie die Mathematik Korrektur

Die zweite Art von Fehler lässt sich perfekt kompilieren und ist falsch. Lesen Sie die wiedergegebene Gleichung Symbol für Symbol anhand des Originals und achten Sie dabei besonders auf die Stellen, an denen die Konvertierung zuverlässig abläuft: tiefgestellte und hochgestellte Zeichen, bei denen kleine Glyphen miteinander verschwimmen und „x_i“ zu „x_j“ wird; Primzahlen und Hüte, die verschwinden oder wandern; die Doppelpaare wie „1“, „l“ und „I“ oder „\rho“ und „p“; und Grenzen für Summen und Integrale. Genau diese Details verändern die Bedeutung einer Formel und machen sie gleichzeitig typografisch plausibel. Zwei Minuten Vergleich pro Gleichung sind die Gesamtkosten und weitaus günstiger, als wenn ein Prüfer den falschen Index in gedruckter Form findet.