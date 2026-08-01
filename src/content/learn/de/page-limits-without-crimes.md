---

title: "Seitenbegrenzungen ohne typografische Verbrechen"
description: "Legitime Möglichkeiten, das Limit einzuhalten, die Hacks, die dazu führen, dass Papiere gemeldet werden, und warum Veranstaltungsorte dies überprüfen."
category: "venue-formats"
order: 5
level: "advanced"
tags: ["venues", "formatting"]
featured: false
updated: 2026-07-25
---

# Seitenbegrenzungen ohne typografische Verbrechen

Ihre Arbeit umfasst 10,4 Seiten. Das Limit liegt bei 10. Was in der nächsten Stunde passiert, bestimmt, ob Sie das Papier reparieren oder einen Formatierungsverstoß begehen, der dazu führt, dass es vom Schreibtisch abgelehnt wird.

## Drücken Sie den Inhalt zusammen, nicht das Format

Arbeiten Sie diese Liste der Reihe nach ab. Jeder Schritt ist für Formatprüfer unsichtbar, da er das Papier und nicht die Vorlage verändert.

1. **Zuerst die Prosa straffen.** Eine halbe Seite Überlauf besteht normalerweise aus einem wortreichen Abschnitt mit verwandten Arbeiten und drei redundanten Übergangssätzen. Das Schneiden von Wörtern verbessert die Arbeit. Das Ausschneiden von Leerzeichen funktioniert nicht.
2. **Witwen jagen.** Ein Absatz, dessen letzte Zeile ein oder zwei Wörter enthält, verschwendet eine ganze Zeile. Wenn Sie einen Satz in diesem Absatz umschreiben, erhalten Sie ihn zurück.
3. **Größe der Figuren ehrlich ändern.** Viele Figuren haben große interne Ränder. Schneiden Sie den Leerraum in der Abbildung selbst ab oder verschieben Sie eine zweispaltige Abbildung in eine Spalte, wenn sie lesbar bleibt.
4. **Schlanke Tabellen.** „Booktabs“-Tabellen ohne vertikale Linien sind kompakter und sehen besser aus, siehe [schöne Tabellen](/learn/booktabs-beautiful/), und abgekürzte Spaltenüberschriften sorgen für echte Breite.
5. **Verwenden Sie Vektorfiguren.** PDF-Plots lassen sich sauber verkleinern, sodass Sie sie stärker verkleinern können als pixelige PNGs, bevor die Lesbarkeit verloren geht. Unscharfe Rasterfiguren haben ihre eigenen Probleme, siehe [unscharfe Schriftarten in PDFs](/learn/fuzzy-font-pdf/).
6. **Material in einen Anhang oder eine Ergänzung verschieben**, sofern der Veranstaltungsort dies zulässt. Beweise, zusätzliche Ablationen und Hyperparametertabellen sind klassische Überlaufkandidaten. Prüfen Sie, ob der Anhang auf das Limit angerechnet wird. Viele Veranstaltungsorte schließen ihn aus, andere nicht.

## Die Verbrechen

Diese verändern die Vorlage statt des Papiers. Programmausschüsse führen automatisierte Formatprüfer gerade deshalb durch, weil die Leute sie ausprobieren:

| Kriminalität | Wie es gefangen wird |
|---|---|
| `\vspace{-8pt}` überall verstreut | Sichtbar enge Abstände, Abweichungen von den Klassenvorgaben |
| `\usepackage[margin=...]{geometry}` | Automatisierte Margenmessung |
| „\baselinestretch“ oder Schriftgröße wird verkleinert | Zeilenanzahl pro Spalte, Schriftgrößenprüfungen |
| `\small` oder `\footnotesize` für Fließtext oder Bildunterschriften | Schriftgrößenprüfungen, Rezensenten-Augäpfel |
| Negatives „\itemsep“, zerstörte Listen | Enger Blick, Checker-Heuristik |
| Umbenennen der Klassendatei mit Änderungen darin | Prüfsumme gegen die offizielle Klasse |

## Warum Veranstaltungsorte tatsächlich prüfen

Eine Seitenbegrenzung ist ein Fairnessvertrag: Jeder Autor erhält den gleichen Platz und jeder Rezensent verpflichtet sich, eine begrenzte Menge zu lesen. Eine Arbeit, die sich auf 10 Seiten schleicht, ist in Wirklichkeit eine 11-seitige Arbeit, die mit ehrlichen 10-seitigen Arbeiten konkurriert. Aus diesem Grund werden Verstöße als Integritätsproblem und nicht als Stilfehler behandelt. Viele Veranstaltungsorte lehnen den Antrag ohne Prüfung ab, und es gibt keinen Einspruch mit der Aussage „Aber der Inhalt war gut“.

## Der ehrliche letzte Ausweg

Wenn Sie die Prosa gestrafft, die Floats verschlankt, die Beweise in den Anhang verschoben haben und immer noch am Ende sind: Schneiden Sie ein Ergebnis ab. Schmerzhaft, aber eine konzentrierte 10-seitige Arbeit ist auf jeden Fall besser als eine vollgestopfte. Gutachter können die Dichte spüren, und die Wahl eines Veranstaltungsortes (/learn/choose-your-venue/) mit einem längeren Format ist immer eine Option für die nächste Einreichung.