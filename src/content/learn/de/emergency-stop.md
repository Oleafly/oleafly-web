---

title: "Vollbremsung und außer Kontrolle geratener Streit"
description: "Schwerwiegende Abbrüche aufgrund fehlender Enden, Klammern oder fehlerhafter Includes."
category: "log-literacy"
order: 6
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Nothalt und außer Kontrolle geratener Streit

## Das Symptom

Die Kompilierung stirbt sofort. Das Protokoll endet mit „!“ Notstopp.` oder zeigt „Runaway argument?“ gefolgt von einem langen Abschnitt Ihres eigenen Textes, oft mit einer Begleitzeile wie „Datei wurde beim Scannen mit \textbf beendet“ oder „Absatz endete, bevor \foo vollständig war“. Im Gegensatz zu den meisten LaTeX-Fehlern gibt es überhaupt kein PDF und die gemeldete Zeilennummer zeigt häufig auf das Ende der Datei und nicht auf den tatsächlichen Fehler.

## Warum es passiert

Beide Meldungen gehen auf das gleiche Problem zurück: TeX begann mit dem Lesen von etwas, das geschlossen werden muss, und erreichte das Ende der Eingabe, bevor das Schließtoken eintraf. Wenn Sie „\textbf{“ schreiben, sammelt TeX alles bis zum passenden „}“ als Argument. Wenn diese geschweifte Klammer nie kommt, verschluckt TeX so lange den Text über Absätze und Abschnitte, bis die Datei aufgebraucht ist. „Runaway argument“ ist TeX, das Ihnen zeigt, was es verschluckt hat. „Notstopp“ bedeutet, dass TeX aufgibt, weil es ohne das fehlende Teil nicht weitermachen kann. Ein fehlendes „\end{document}“, eine nicht geschlossene Umgebung oder ein „\input“ einer Datei, die nicht existiert, führt zum gleichen Endzustand.

## So finden Sie den tatsächlichen Standort

Vertrauen Sie der Zeilennummer nicht; Es markiert die Stelle, an der TeX keinen Input mehr hatte, nicht den Ort, an dem das Ungleichgewicht begann. Lesen Sie stattdessen den Block „Runaway argument?“ im Protokoll. Die ersten paar Wörter des verschluckten Textes sagen Ihnen, wo im Dokument der Ausreißer begann, und die Zeile „Datei wurde beim Scannen mit ... beendet“ benennt den Befehl, dessen Argument nie geschlossen wurde. Suchen Sie nach diesem Befehl in der Nähe des zitierten Textes und zählen Sie seine geschweiften Klammern.

Wenn das Protokoll nicht hilfreich ist, durchsuchen Sie das Dokument binär. Kommentieren Sie die zweite Körperhälfte aus (oder packen Sie sie in „\iffalse ... \fi“) ein und kompilieren Sie sie erneut. Wenn der Fehler verschwindet, liegt das Problem in der Hälfte, die Sie entfernt haben. Halbieren Sie weiter, bis der fehlerhafte Absatz isoliert ist. Das klingt grob, aber in einem großen Dokument findet es in einer Handvoll Kompilierungen eine einzige fehlende Klammer.

## Die üblichen Verdächtigen

Suchen Sie nach einem „{“ ohne „}“ in der Nähe von Fettdruck, Kursivschrift, Fußnoten und Bildunterschriften, da diese Befehle Argumentklammern erfordern, die Sie von Hand eingeben. Überprüfen Sie, ob jedes „\begin{...}“ ein passendes „\end{...}“ mit demselben Umgebungsnamen hat. Bestätigen Sie, dass die Datei mit „\end{document}“ endet und dass jedes „\input“ und „\include“ eine Datei benennt, die in diesem Pfad vorhanden ist. Editoren helfen hier: Oleafly hebt während der Eingabe übereinstimmende Klammern und Umgebungspaare hervor, wodurch die meisten davon erfasst werden, bevor der Compiler sie jemals sieht.