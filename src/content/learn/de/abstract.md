---

title: "Der abstrakte Block"
description: "Platzierung der abstrakten Umgebung für Artikel- und Zeitschriftenklassen."
category: "paper-bones"
order: 4
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Der abstrakte Block

Die Zusammenfassung ist die kurze Zusammenfassung, die zwischen Ihrem Titel und Ihrem ersten Abschnitt steht. Fast jeder Veranstaltungsort benötigt einen. LaTeX gibt ihm eine eigene Umgebung, anstatt es Ihnen zu überlassen, es mit einer fetten Überschrift vorzutäuschen. Die Klasse muss wissen, welcher Text die Zusammenfassung ist, damit Zeitschriftenklassen ihn in einem bestimmten Stil (häufig kleiner und eingerückt) setzen können und Einreichungssysteme ihn automatisch extrahieren können.

## Die Umwelt

```latex
\begin{abstract}
 We present a short abstract of at most 200 words.
\end{abstract}
```

Alles zwischen „\begin{abstract}“ und „\end{abstract}“ wird zum abstrakten Block. In der Standardklasse „Artikel“ erscheint es als schmaler Absatz mit zentrierter Überschrift unter dem Titel. Schreiben Sie einfache Prosa hinein. Inline-Mathematik ist in Ordnung, aber überspringen Sie alles Schwergewichtige: keine Zitate, wenn der Veranstaltungsort dies verbietet, keine Fußnoten, keine undefinierten Akronyme. Zusammenfassungen werden in Datenbanken und Suchergebnissen oft einzeln angezeigt, getrennt vom Rest der Arbeit.

## Wo es hingeht

Platzieren Sie es nach „\maketitle“ (oder wie von der Journalklasse gefordert). Die übliche Reihenfolge am Anfang eines Artikels ist „\maketitle“, dann die Zusammenfassung und dann „\section{Introduction}“. Die Umgebung muss nach „\begin{document}“ stehen, da sie eine Ausgabe erzeugt; Das Einfügen in die Präambel ist ein Kompilierungsfehler.

Zeitschriften- und Konferenzklassen ändern diesen Vertrag häufig und ihre Vorlagen ersetzen den Standard. Einige Klassen, darunter mehrere ACM- und IEEE-Varianten, möchten, dass die Zusammenfassung vor „\maketitle“ deklariert wird, damit sie sie in ihrem eigenen Titellayout platzieren können. Andere ersetzen die Umgebung vollständig durch einen Befehl wie „\abstract{...}“. Faustregel: Wenn Sie die Vorlage eines Veranstaltungsortes verwenden, platzieren Sie die Zusammenfassung dort, wo sie in der Beispieldatei der Vorlage abgelegt ist, und bekämpfen Sie den Kurs nicht. Die [Titelblock-Lektion](/learn/title-page/) behandelt die „\maketitle“-Maschinerie, an der diese hängt.

## Kurse ohne Zusammenfassung

Die Klasse „Buch“ definiert überhaupt keine abstrakte Umgebung, basierend auf der Theorie, dass Bücher stattdessen Vorworte haben. Wenn Sie eine solche in einer Abschlussarbeit im Berichtsstil benötigen, wird sie von der Klasse „report“ unterstützt, oder Sie können eine zentrierte, nicht nummerierte Überschrift gefolgt von einem normalen Absatz setzen, was alles ist, was die Umgebung wirklich kann.

Ein häufiger Fehler: Eine Leerzeile zwischen „\maketitle“ und der Zusammenfassung zu lassen ist in Ordnung, aber die Zusammenfassung leer zu lassen ist kein Kompilierungsfehler, daher wird ein vergessener Platzhalter wie „TODO“ häufiger an die Prüfer gesendet, als irgendjemand zugibt. Kompilieren Sie das PDF, schauen Sie sich die erste Seite an und lesen Sie die dortige Zusammenfassung mindestens einmal, bevor Sie es absenden. Ratschläge dazu, was die Zusammenfassung eigentlich sagen sollte und wohin sie geht, finden Sie unter [wie man eine Zusammenfassung schreibt](/learn/write-an-abstract/).