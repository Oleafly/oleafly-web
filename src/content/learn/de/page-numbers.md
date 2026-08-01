---

title: "Seitenzahlen ein- oder ausschalten"
description: "schlicht, leer, römisch vs. arabisch, Zahlen auf der Titelseite werden unterdrückt."
category: "type-and-shape"
order: 5
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Seitenzahlen ein- oder ausschalten

Seitenzahlen erscheinen standardmäßig in „Artikel“: Die Standardklassen verwenden den „einfachen“ Seitenstil, der die Zahl am unteren Rand jeder Seite zentriert. Normalerweise ist das in Ordnung und man denkt nie darüber nach. Die drei Situationen, in denen Sie darüber nachdenken, sind das Ausblenden der Nummer auf einer Titelseite, das vollständige Ausschalten der Nummerierung und das Wechseln zwischen römischen und arabischen Ziffern in einem längeren Dokument.

## Versteckt die Nummer auf der Titelseite

Eine Titelseite mit einer einsamen „1“ am unteren Rand sieht unvollendet aus. Die Lösung besteht aus einer Zeile direkt nach dem Festlegen des Titels:

```latex
\maketitle
\thispagestyle{empty}
```

„\thispagestyle{empty}“ ändert den Seitenstil nur für die aktuelle Seite, und „empty“ ist der integrierte Stil, der nichts in der Kopf- oder Fußzeile druckt. Die Reihenfolge ist wichtig: Sie muss nach „\maketitle“ auf derselben Seite stehen, da „\maketitle“ selbst den Seitenstil zurücksetzt. Beachten Sie, dass die Seite weiterhin zählt; die nächste Seite wird mit 2 nummeriert. Wenn Sie „\begin{titlepage}...\end{titlepage}“ anstelle von „\maketitle“ verwenden, wird die Nummer für Sie unterdrückt und die folgende Seite beginnt bei 1.

## Stile und Nummerierungssysteme

```latex
\pagestyle{plain} % number at bottom
\pagestyle{empty} % nothing
\pagenumbering{roman}
\pagenumbering{arabic}
```

Diese beiden Befehlspaare steuern unterschiedliche Dinge, und ihre Verwechslung ist das klassische Stolpern. „\pagestyle{...}“ steuert, wo die Zahl erscheint und was sie umgibt: „plain“ gibt die zentrierte Fußzeilennummer an, „empty“ entfernt ab diesem Zeitpunkt Kopf- und Fußzeilen von jeder Seite. Es sagt nichts darüber aus, wie die Nummer aussieht.

„\pagenumbering{...}“ steuert, wie die Zahl geschrieben wird: „roman“ erzeugt i, ii, iii, während „arabic“ 1, 2, 3 erzeugt. Es gibt auch „Roman“ für I, II, III und „alph“ für a, b, c, obwohl Sie sie selten brauchen werden. „\pagenumbering“ setzt auch den Seitenzähler auf 1 zurück. Dieses Zurücksetzen ist eine Funktion, kein Fehler: Es ermöglicht einer Abschlussarbeit, ihr Vorwort von i bis vi zu nummerieren und dann Kapitel eins auf Seite 1 zu beginnen.

Wenn Sie die volle Kontrolle über die Platzierung haben möchten, z. B. die Nummer in einer Ecke oder gepaart mit einem laufenden Titel, ist dies die Aufgabe des Pakets fancyhdr und nicht dieser integrierten Funktionen. Siehe [laufende Kopf- und Fußzeilen](/learn/headers-footers/).

## Der häufige Fehler

Wenn Sie „\pagestyle{empty}“ schreiben, während Sie „\thispagestyle{empty}“ meinten, werden Nummern stillschweigend aus dem gesamten Dokument entfernt, und Sie bemerken es möglicherweise erst, wenn ein Prüfer fragt, warum Ihre Seiten nicht nummeriert sind. Beachten Sie die Regel: „\thispagestyle“ ist eine einseitige Ausnahme, „\pagestyle“ ist ein dokumentweiter Schalter.

Titelthema der Abschlussarbeit: [Römischer/Arabischer Leitfaden](/learn/front-matter-page-numbers/).