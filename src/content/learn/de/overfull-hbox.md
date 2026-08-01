---

title: "Übervoller horizontaler Kasten"
description: "Linien, die in den Rand hineinragen und wann darauf zu achten ist."
category: "log-literacy"
order: 3
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Überfülltes horizontales Feld

## Das Symptom

Das Protokoll meldet etwas wie „Übervoller \hbox (14,2pt zu breit) im Absatz in den Zeilen 87–92“, und in der PDF-Datei ragt eine Zeile dieses Absatzes am rechten Rand heraus. Das Dokument wird trotzdem kompiliert, da es sich dabei eher um eine Warnung als um einen Fehler handelt, aber die hervorstehende Zeile ist im Ausdruck sichtbar und wird von den Prüfern bemerkt. Im Entwurfsmodus („\documentclass[draft]{...}`) markiert LaTeX jeden Täter mit einem schwarzen Rechteck, wodurch er leicht zu erkennen ist.

## Warum es passiert

TeX unterteilt Absätze in Zeilen, indem es jeden möglichen Bruchpunkt abwägt und die Anordnung mit der geringsten Gesamt-„Schlechtigkeit“ wählt, wobei die Schlechtigkeit misst, um wie viel die Leerzeichen in einer Zeile gedehnt oder verkleinert werden mussten. Manchmal gibt es keine akzeptable Vereinbarung: Eine lange URL enthält überhaupt keine Haltepunkte, Inline-Mathematik wird als nahezu unzerbrechlich behandelt oder ein langes Wort hat keinen Silbentrennungseintrag. Anstatt Leerzeichen über die Toleranz hinaus zu dehnen und eine sichtbar lückenhafte Linie zu erzeugen, lässt TeX die Linie lang laufen und informiert Sie darüber. Das überfüllte Kästchen ist darauf zurückzuführen, dass TeX sich weigert, den Absatz auf andere Weise hässlich zu machen.

## Korrekturen, vom Besten bis zum Unverschämtesten

Die beste Lösung ist redaktionell. Das Umformulieren des Satzes, das Verschieben des langen Wortes vom Zeilenende oder die Aufteilung eines Satzes in zwei löst das Problem normalerweise ohne Code und verbessert oft trotzdem die Prosa.

Schließen Sie für URLs die Adresse in „\url{...}“ aus dem Paket „url“ oder „hyperref“ ein, damit sie bei Schrägstrichen und Punkten umgebrochen werden kann, und laden Sie das Paket „xurl“, wenn Sie bei fast jedem Zeichen Umbrüche benötigen. Zeigen Sie eine breite Inline-Formel entweder an oder verwenden Sie eine umbrechbare Umgebung wie „multline“ aus „amsmath“, wenn die Gleichung selbst zu lang für die Zeile ist.

Zwei Verbesserungen auf Präambelebene helfen weltweit. Durch das Laden von „Microtype“ ragen Zeichen geringfügig hervor und die Schriftarten werden leicht erweitert, wodurch viele Randfälle aufgelöst werden, ohne dass Sie es merken. Durch die korrekte Einstellung der Dokumentsprache durch „babel“ oder „polyglossia“ erhält TeX die richtigen Silbentrennungsmuster, da ein Wort, das es nicht trennen kann, ein Wort ist, das es nicht umbrechen kann.

## Wann Sie sich darum kümmern sollten

Die Zahl in der Warnung ist die Überschreitung. Alles unter etwa 2pt ist für Leser unsichtbar und kann in einem Entwurf problemlos ignoriert werden. Es lohnt sich, Dutzende Punkte zu beheben, bevor jemand anderes das PDF sieht. Der sinnvolle Arbeitsablauf besteht darin, überfüllte Kästchen beim Schreiben zu ignorieren, dann das Protokoll vor der Übermittlung einmal zu durchsuchen und die verbleibenden wenigen Kästchen, die größten zuerst, zu korrigieren. Widerstehen Sie „\sloppy“ und anderen globalen Toleranz-Hacks: Sie tauschen ein paar hervorstehende Zeilen gegen lockere, ungleichmäßige Abstände im gesamten Dokument ein.