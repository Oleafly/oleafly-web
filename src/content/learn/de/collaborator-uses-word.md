---

title: "Co-Autoren, die nur Word sprechen"
description: "Behalten Sie .tex als Quelle der Wahrheit bei, während Sie PDF oder DOCX gegen Kommentare austauschen."
category: "local-studio"
order: 5
level: "intermediate"
tags: ["workflow", "word"]
featured: false
updated: 2026-07-25
---

# Co-Autoren, die nur Word sprechen

Kollaborationen mit gemischten Tools sind üblich: Sie schreiben die Arbeit in LaTeX und ein Co-Autor, Berater oder klinischer Mitarbeiter arbeitet nur in Microsoft Word. Nichts lässt sich perfekt zwischen den beiden Formaten konvertieren. Vereinbaren Sie frühzeitig, welche Datei die eigentliche Arbeit ist, und legen Sie dann eine Routine fest, um das Feedback ohne Arbeitsverlust über die Lücke zu übertragen.

## Eine Quelle der Wahrheit

Entscheiden Sie frühzeitig, dass die „.tex“-Dateien kanonisch sind und alles andere eine abgeleitete Kopie zur Überprüfung ist. In dem Moment, in dem zwei „aktuelle Versionen“ in zwei Formaten existieren, gehen die Änderungen einer Person verloren, und der Abgleich einer Word-Datei mit einer LaTeX-Datei nach Augenmaß ist eine miserable Arbeit. Im Rahmen dieser Vereinbarung liegt Ihre Aufgabe im Satz und in der Integration. Die Aufgabe Ihres Co-Autors besteht darin, Inhalte und Kommentare bereitzustellen, die in dem von ihm bevorzugten Tool bereitgestellt werden.

## Wählen Sie den Export nach der Art des Feedbacks

Zum Lesen und für Kommentare auf hoher Ebene senden Sie das zusammengestellte PDF. Jeder Word-Benutzer kann ein PDF öffnen und die Anmerkungstools in jedem PDF-Reader umfassen Randnotizen und Hervorhebungen. Durch die manuelle Anwendung dieses Feedbacks behalten Sie die volle Kontrolle über die Quelle.

Wenn der Co-Autor Umschreibungen auf Satzebene mit nachverfolgten Änderungen vorschlagen muss, exportieren Sie ein DOCX. Pandoc konvertiert LaTeX für Überprüfungszwecke gut genug in Word, und Oleafly verfügt über einen integrierten DOCX-Export. Erwarten Sie, dass die Konvertierung annähernd erfolgt: Gleichungen, Querverweise und die Platzierung von Abbildungen verschlechtern sich, und Sie sollten dies im Voraus sagen, damit niemand Layoutprobleme in einer Wegwerfkopie meldet.

## Die Zusammenführungssitzung

Rückmeldungen in einer „.docx“-Datei müssen manuell in die „.tex“-Datei zurückgeführt werden. Behandeln Sie dies als eine geplante Aufgabe und nicht als fortlaufendes Rinnsal: Sammeln Sie die vom Co-Autor verfolgten Änderungen, öffnen Sie die Word-Datei und die LaTeX-Quelle nebeneinander und wenden Sie akzeptierte Änderungen nacheinander an, wobei Sie dabei Git übergeben, sodass jede Feedback-Runde ein Commit ist. Eine Regel sorgt dafür, dass dies praktikabel ist: Jede Überprüfungsrunde beginnt mit einem neuen Export der aktuellen Quelle. Lassen Sie dieselbe Word-Datei niemals über mehrere Runden hinweg weiterleben, da sie das Papier stillschweigend verzweigt.

## Wenn der Entwurf in Word beginnt

Manchmal kehrt sich der Ablauf um: Der Co-Autor schreibt den ersten Entwurf in Word und Sie übernehmen den Satz. Konvertieren Sie es einmal und zwar frühzeitig. Oleafly importiert „.docx“ in ein LaTeX-Projekt und pandoc macht dasselbe in der Befehlszeile. Ab diesem Zeitpunkt ist „.tex“ kanonisch und es gilt die obige Routine. Informationen zum Versionskontroll-Backbone, das all dies wiederherstellbar macht, finden Sie unter [Stellen Sie den Artikel auf GitHub](/learn/sync-with-github/).