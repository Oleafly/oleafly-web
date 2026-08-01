---

title: "Links im PDF"
description: "Hyperref, URL, Href, Farben und PDF-Metadaten."
category: "paper-bones"
order: 6
level: "intermediate"
tags: ["structure", "hyperref"]
featured: false
updated: 2026-07-25
---

# Links im PDF

Ein PDF ist nicht nur Papier auf einem Bildschirm. Es kann Live-Links enthalten: anklickbare URLs, Querverweise, die zur richtigen Abbildung springen, Zitate, die zur Bibliographie springen, und eine Seitenleistenübersicht, die aus Ihren Abschnittsüberschriften erstellt wird. In LaTeX bietet ein Paket all dies: „hyperref“. Laden Sie es und jeder „\ref“-, „\cite“- und Inhaltsverzeichniseintrag in Ihrem Dokument wird leise anklickbar, ohne dass Änderungen am Rest Ihrer Quelle vorgenommen werden.

## Laden und Konfigurieren von Hyperref

```latex
\usepackage[colorlinks=true,linkcolor=blue,citecolor=blue,urlcolor=blue]{hyperref}
\url{https://oleafly.com}
\href{https://oleafly.com}{Oleafly}
\hypersetup{pdftitle={My Paper}, pdfauthor={You}}
```

Die Optionen in eckigen Klammern steuern, wie Links aussehen. Standardmäßig zeichnet Hyperref ein farbiges Rechteck um jeden Link, was die meisten Leute hässlich finden. Durch die Einstellung „colorlinks=true“ werden die Felder stattdessen durch farbigen Text ersetzt, und die drei Farboptionen teilen diesen nach Linktyp auf: „linkcolor“ deckt interne Sprünge wie Abschnitts- und Abbildungsverweise ab, „citecolor“ deckt Zitate ab und „urlcolor“ deckt Webadressen ab. Es ist wichtig, sie aufzuteilen, denn ein Papier voller Zitate kann sonst zu einer blauen Wand werden.

## URL versus href

Die beiden Verknüpfungsbefehle erledigen unterschiedliche Aufgaben. „\url{...}“ druckt die Adresse selbst in einer Schreibmaschinenschrift und macht sie anklickbar, was Sie in einer Bibliographie oder Fußnote wünschen, in der der Leser sehen soll, wohin der Link führt. „\href{address}{text}“ verbirgt die Adresse hinter dem von Ihnen eingegebenen Text, z. B. einem Link auf einer Webseite. Bevorzugen Sie „\url“ in Dokumenten, die gedruckt werden könnten, da ein „\href“-Etikett einem Papierleser keine Möglichkeit gibt, die Adresse einzugeben.

Ein praktischer Bonus: „\url“ weiß, wie man lange Adressen über Zeilen hinweg umbricht, ohne einen Bindestrich einzufügen, der die Adresse verfälschen würde, was eine einfache URL in Schreibmaschinenschrift nicht kann.

## PDF-Metadaten

Mit „\hypersetup“ können Sie jede Hyperref-Option nach dem Laden ändern und dort auch die Metadaten des Dokuments festlegen. Die Felder „pdftitle“ und „pdfauthor“ füllen den Titel und Autor aus, den Ihr PDF-Reader in seiner Fensterleiste und in den Dateieigenschaften anzeigt. Ohne sie zeigen Leser oft den Dateinamen oder die erste Überschrift an, die in einem Dokument, das Sie einreichen oder teilen, unvollendet wirken. Sie können „\hypersetup“ in der Präambel jederzeit nach „\usepackage{hyperref}“ aufrufen.

## Druckfreundliche Dokumente

Für druckfreundliche Dokumente verwenden Sie „hidelinks“. Wenn Sie es als Option übergeben, „\usepackage[hidelinks]{hyperref}“, bleibt jeder Link auf dem Bildschirm anklickbar, entfernt jedoch sowohl die farbigen Kästchen als auch den farbigen Text, sodass die gedruckte Seite völlig normal aussieht. Viele Zeitschriftenkurse erfordern genau dies.

Ein häufiger Fehler, den Sie vermeiden sollten: Hyperref definiert viele interne Befehle neu und sollte daher als eines der letzten Pakete in Ihrer Präambel geladen werden. Wenn Ihre Links auf die falschen Seiten verweisen oder Sie seltsame Fehler von einem anderen Paket erhalten, ist die Ladereihenfolge das erste, was Sie überprüfen müssen. Siehe [Querverweise](/learn/cross-references/) für die „\label“- und „\ref“-Mechaniken, die Hyperref anklickbar macht.