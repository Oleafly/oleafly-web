---

title: "Absätze, Umbrüche und Leerzeichen"
description: "Leerzeilen, Zwangsumbrüche, vspace und die wissenswerten Abstandsbefehle."
category: "type-and-shape"
order: 3
level: "beginner"
tags: ["formatting", "spacing"]
featured: false
updated: 2026-07-25
---

# Absätze, Umbrüche und Leerzeichen

In einem Textverarbeitungsprogramm formen Sie Absätze, indem Sie die Eingabetaste drücken und die Lücken betrachten. LaTeX funktioniert anders: Der Quelltext beschreibt die Struktur und der Compiler legt den Abstand fest. Sobald Sie wissen, wie LaTeX einen Absatz beginnt und wie Sie ihn bei Bedarf überschreiben können, vermeiden Sie die Formatierungskämpfe, die Anfänger normalerweise damit haben.

## Wie Absätze funktionieren

Eine Leerzeile in Ihrer Quelle beginnt einen neuen Absatz. Das ist die ganze Regel. Eine Leerzeile oder fünf, es macht keinen Unterschied; LaTeX fasst sie zu einem einzigen Absatzumbruch zusammen. Ebenso wird ein einzelner Zeilenumbruch innerhalb Ihrer Quelle als gewöhnliches Leerzeichen behandelt, sodass Sie Ihren Quelltext in beliebiger Breite umbrechen und ihn frei umfließen lassen können, ohne die Ausgabe überhaupt zu verändern.

Der Befehl „\par“ bedeutet genau dasselbe wie eine Leerzeile. Sie werden es selten selbst eingeben, aber Sie werden es in Makros und Klassendateien sehen, wo das Schreiben einer wörtlichen Leerzeile umständlich ist.

„\\“ ist etwas ganz anderes: Es erzwingt einen Zeilenumbruch innerhalb des aktuellen Absatzes, ohne einen neuen zu beginnen. Die neue Zeile erhält keinen Absatzeinzug und keinen zusätzlichen vertikalen Abstand. Es existiert für Stellen, an denen Zeilenumbrüche Inhalt sind, wie z. B. Adressen, Gedichte und Tabellenzeilen. Die Verwendung zum Beenden gewöhnlicher Absätze ist der klassische Anfängerfehler, da dadurch ein Absatz erzeugt wird, der nie wirklich beendet wurde, und LaTeX möglicherweise mit „Es gibt hier keine Zeile zum Beenden“ klagt, wenn sich zwei davon stapeln.

```latex
First paragraph.

Second paragraph, with a forced break\\
on this line.
```

## Vertikalen Raum hinzufügen

Manchmal möchten Sie eine bewusste Lücke, zum Beispiel vor einem Signaturblock oder zwischen logischen Teilen einer Titelseite.

```latex
\vspace{1em}
\bigskip \medskip \smallskip
```

„\vspace{1em}“ fügt genau den vertikalen Abstand ein, nach dem Sie fragen, in jeder Einheit, die LaTeX kennt („em“, „pt“, „cm“ usw.). Bei den drei Skip-Befehlen handelt es sich um voreingestellte Beträge: „\smallskip“, „\medskip“ und „\bigskip“. Sie fügen kleine, mittlere und große Lücken ein, deren Größe durch Ihre Dokumentklasse definiert wird, wodurch sie im gesamten Dokument konsistent bleiben. Bevorzugen Sie die Sprünge gegenüber manuell angepassten „\vspace“-Werten, da sie sich anpassen, wenn Sie die Klasse oder Schriftgröße ändern.

Ein nützliches Detail: Ein „\vspace“ oben auf einer Seite wird stillschweigend gelöscht, da LaTeX davon ausgeht, dass dehnbarer Raum an Seitengrenzen unbeabsichtigt ist. Wenn Sie es wirklich behalten möchten, verwenden Sie „\vspace*{1em}“ mit dem Stern.

## Leerzeichen zwischen allen Absätzen

Spam nicht mit „\\“, um Platz zwischen den Absätzen zu schaffen. Wenn Sie möchten, dass jeder Absatz durch eine Lücke getrennt wird, anstatt durch einen Einzug markiert zu werden, ist das eine dokumentweite Designentscheidung: Setzen Sie es einmal in der Präambel mit dem Paket „parskip“ oder überlegen Sie, ob Überschriften und Struktur die Trennung besser kommunizieren würden. Die andere Hälfte dieses Kompromisses finden Sie unter [Absatzeinrückung](/learn/paragraph-indent/).