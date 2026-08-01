---

title: "Erzwingen oder verweigern Sie einen Seitenumbruch"
description: "Newpage, Clearpage, Soft Pagebreak, Nopagebreak."
category: "the-page"
order: 4
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Einen Seitenumbruch erzwingen oder ablehnen

LaTeX entscheidet, wo Seiten enden. Meistens entscheidet es gut, aber manchmal muss man es außer Kraft setzen: Eine Abschnittsüberschrift bleibt am Ende einer Seite hängen, eine Tabelle landet eine Zeile zu spät oder Sie möchten, dass jedes Kapitel eines Berichts neu beginnt. LaTeX bietet Ihnen hierfür eine kleine Reihe von Befehlen, die von einer harten Anweisung bis zu einer höflichen Suggestion reichen.

```latex
\newpage % end page
\clearpage % end page + flush floats
\cleardoublepage
\pagebreak[3] % soft request
\nopagebreak
```

## Die harten Brüche

`\newpage` beendet sofort die aktuelle Seite und beginnt eine neue. Es ist das stumpfeste Werkzeug und das, das Sie beim Zeichnen am häufigsten verwenden werden.

„\clearpage“ macht das Gleiche, löscht aber zuerst alle ausstehenden Floats. Abbildungen und Tabellen in LaTeX sind Gleitkommazahlen: Sie wandern dorthin, wo der Algorithmus Platz findet, manchmal Seiten nach der Stelle, an der Sie sie geschrieben haben. „\clearpage“ zwingt alle Floats, die bisher in die Warteschlange gestellt wurden, auf die Seite, bevor es weitergeht. Daher ist es der richtige Befehl am Ende eines Kapitels oder vor einem Abschnitt, in dem Sie keine Nachzügler haben möchten. Wenn sich am Ende Ihres Dokuments Zahlen zu häufen scheinen, ist ein gut platziertes „\clearpage“ normalerweise die Lösung; Die ganze Geschichte finden Sie unter [warum sich Figuren bewegen](/learn/figure-wrong-position/).

„\cleardoublepage“ geht in zweiseitigen Dokumenten noch einen Schritt weiter: Nach dem Leeren von Floats stellt es sicher, dass die nächste Seite eine rechte (ungerade) Seite ist, und fügt bei Bedarf eine leere linke Seite ein. Buchkapitel werden traditionell auf der rechten Seite geöffnet, und die Klasse „Buch“ ruft dies bei jedem „\Kapitel“ für Sie auf.

## Die sanften Anfragen

„\pagebreak[n]“ führt keinen Befehl aus. Es fragt. Die optionale Zahl von 0 bis 4 gibt an, wie stark: „\pagebreak[1]“ bedeutet „hier wäre eine Pause schön“, „\pagebreak[4]“ bedeutet „hier eine Pause, Punkt“. Mit den mittleren Werten kann LaTeX Ihren Wunsch gegen sein eigenes Abstandsurteil abwägen, was normalerweise zu besser aussehenden Seiten führt als ein hartes „\newpage“, da „\pagebreak“ den Inhalt streckt, um die Seite auszufüllen, anstatt eine Lücke zu hinterlassen.

„\nopagebreak“ ist die entgegengesetzte Anforderung: Es rät von einer Pause an dieser Stelle ab. Dies ist direkt nach einer Überschrift oder vor einer kurzen Liste, die Sie zusammen mit der Einleitung führen möchten, nützlich. Wie „\pagebreak“ akzeptiert es eine optionale Stärke von 0 bis 4.

## Wann sollte man überhaupt danach greifen?

Der häufigste Fehler besteht darin, „\newpage“ durch einen Entwurf zu streuen, um das Layout zu korrigieren, und dann zuzusehen, wie jede Korrektur falsch wird, wenn der Text wächst. Seitenumbrüche hängen von allem davor ab, sodass ein manueller Umbruch, der heute perfekt aussieht, bei der nächsten Überarbeitung eine halbleere Seite hinterlassen kann. Der vernünftige Arbeitsablauf besteht darin, zuerst das gesamte Dokument zu schreiben und erst im letzten Durchgang Pausen einzufügen, wobei der weiche „\pagebreak[3]“ gegenüber harten Befehlen bevorzugt wird, wenn die genaue Position verhandelbar ist.