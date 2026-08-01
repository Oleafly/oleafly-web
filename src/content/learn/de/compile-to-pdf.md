---

title: "Warum Sie mehr als einmal kompilieren"
description: "Aux-Dateien, Bibliographie-Pässe und warum werden Referenzen gedruckt? beim ersten Lauf."
category: "open-the-loop"
order: 5
level: "beginner"
tags: ["compile"]
featured: false
updated: 2026-07-25
---

# Warum Sie mehr als einmal kompilieren

Früher oder später werden Sie ein Dokument zusammenstellen, das PDF öffnen und „??“ finden, wo eine Abbildungsnummer oder ein Zitat stehen sollte. Nichts ist kaputt. Bei einer einzelnen Kompilierung handelt es sich um einen Durchlauf Ihrer Datei, und einige Informationen können tatsächlich nicht in einem Durchlauf ermittelt werden.

Hier ist das Problem im Kleinformat. Auf Seite 2 schreiben Sie „siehe Abbildung \ref{fig:results}“, aber diese Abbildung landet auf Seite 7. Wenn die Engine Seite 2 setzt, hat sie Seite 7 noch nicht erreicht, sodass sie keine Ahnung hat, welche Nummer die Abbildung erhalten wird. Gleiches gilt für das Inhaltsverzeichnis, das die Seitenzahl jedes Abschnitts benötigt, bevor Seite eins überhaupt fertig ist.

## Wie die Engine das Problem löst

Eine LaTeX-Engine liest Ihre „.tex“-Datei, löst jedes Makro auf und schreibt ein PDF. Neben dem PDF schreibt es auch kleine Hilfsdateien: „.aux“ für Beschriftungen und Zitate, „.toc“ für das Inhaltsverzeichnis, „.bbl“ für die formatierte Bibliographie. Bei diesen Dateien handelt es sich um Notizen, die die Engine für ihr zukünftiges Selbst hinterlässt.

1. Im ersten Durchgang setzt die Engine Ihren Text und schreibt jedes `\label` und `\cite`, das ihr begegnet, in die `.aux`-Datei und gibt `??` überall dort aus, wo sie eine Nummer benötigt, die sie noch nicht kennt.
2. Wenn Sie etwas zitieren, liest ein Bibliographie-Tool (bibtex oder biber) dann die „.aux“-Datei, sucht nach jeder Zitierung in Ihrer „.bib“-Datenbank und schreibt die formatierte Referenzliste in eine „.bbl“-Datei.
3. Im zweiten und manchmal dritten Durchgang liest die Engine diese Hilfsdateien wieder ein, sodass Querverweise, Inhaltsverzeichniseinträge und Zitatbezeichnungen schließlich in reelle Zahlen aufgelöst werden.

Moderne Setups führen diese Durchgänge automatisch für Sie aus, sodass Sie die Befehle in der Praxis selten selbst eingeben. Aber die Kenntnis des Zyklus erklärt das Symptom: Ein neues „??“ nach dem Hinzufügen einer Beschriftung oder eines Zitats bedeutet lediglich, dass die Hilfsdateien noch nicht aufgeholt haben, und eine weitere Kompilierung behebt das Problem.

## Engines jeweils in einer Zeile

Mehrere Programme können die Rolle der „Engine“ übernehmen. pdfLaTeX ist die klassische Wahl mit der umfassendsten Zeitschriftenunterstützung. XeLaTeX fügt vollständigen Unicode hinzu und ermöglicht die Verwendung von auf Ihrem System installierten Schriftarten. LuaLaTeX spricht auch Unicode und integriert eine Skriptsprache für erweiterte Pakete. Tectonic ist eine moderne Engine, die Pakete bei Bedarf herunterlädt, wenn Sie sie zum ersten Mal benötigen. Oleafly bündelt es, sodass ein neues Projekt kompiliert werden kann, ohne zuerst eine TeX-Distribution zu installieren.

Bei den meisten Dokumenten spielen die Unterschiede kaum eine Rolle; Wählen Sie, was Ihre Vorlage oder Ihr Veranstaltungsort erwartet, und fahren Sie fort. Sehen Sie sich [Engines im Vergleich](/learn/engines-compared/) an, wenn Sie eine bewusste Auswahl treffen müssen.

## Wenn etwas tatsächlich fehlschlägt

Bei einer fehlgeschlagenen Kompilierung wird ein langes Protokoll ausgegeben, und der natürliche Instinkt besteht darin, es von unten nach oben zu lesen. Widerstehen Sie dem. Lesen Sie den ersten Fehler im Protokoll und beheben Sie nur diesen; Bei späteren Fehlern handelt es sich sehr oft um kaskadierendes Rauschen, das durch den ersten Fehler verursacht wurde. Wenn Referenzen nach zwei aufeinanderfolgenden erfolgreichen Kompilierungen immer noch „??“ ausgeben, liegt die Ursache normalerweise eher in einem Tippfehler im „\label“- oder „\ref“-Namen als in einem fehlenden Pass.