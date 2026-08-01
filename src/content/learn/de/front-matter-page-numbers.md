---

title: "Römische, dann arabische Seiten"
description: "Titelnummerierung, mit der die Ausschüsse noch rechnen."
category: "long-form"
order: 2
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Römische, dann arabische Seiten

Öffnen Sie fast jede Dissertation oder jedes Lehrbuch und Sie werden die gleiche Konvention sehen: Titelseite, Zusammenfassung, Inhaltsverzeichnis und Danksagungen sind mit i, ii, iii in kleinen römischen Ziffern nummeriert, und dann beginnt das erste richtige Kapitel auf Seite 1 in gewöhnlichen arabischen Ziffern von vorne. Das Titelthema wird als separate, vorläufige Sequenz behandelt, und Graduiertenschulen achten ausdrücklich auf diese Konvention. In LaTeX sind genau zwei Befehle erforderlich.

## Das Muster

```latex
\begin{document}
\pagenumbering{roman}
\maketitle
\tableofcontents
\pagenumbering{arabic}
\chapter{Introduction}
...
\end{document}
```

`\pagenumbering{roman}` bewirkt zwei Dinge gleichzeitig: Es ändert den Zahlenstil auf römische Kleinbuchstaben und setzt den Seitenzähler auf 1 zurück, sodass die Titelseite zur Seite i wird. Alles, was Sie danach platzieren, normalerweise „\maketitle“, die Zusammenfassung, das [Inhaltsverzeichnis](/learn/table-of-contents/) und alle Listen mit Abbildungen oder Tabellen, wird mit ii, iii, iv usw. nummeriert.

Dann, unmittelbar vor dem ersten Kapitel, schaltet „\pagenumbering{arabic}“ den Stil zurück und setzt den Zähler erneut zurück, sodass „\chapter{Introduction}“ auf einer neuen Seite 1 geöffnet wird. Das Zurücksetzen ist der springende Punkt: Ohne es würde Ihre Einleitung etwa auf Seite 7 beginnen, was nicht das ist, was Ausschüsse oder Zitierkonventionen erwarten.

Da „\chapter“ in den Klassen „book“ und „report“ immer eine neue Seite beginnt, benötigen Sie vor dem Wechsel kein explizites „\newpage“. In einer Klasse ohne Kapitel würden Sie zuerst „\clearpage“ hinzufügen, damit die Nummerierungsänderung nicht mitten auf der Seite landet.

## Klassen, die das für Sie erledigen

Einige Abschlussklassen bieten „\frontmatter“ / „\mainmatter“ / „\backmatter“. Diese stammen aus der Klasse „Buch“ und sind die übergeordnete Art, dasselbe auszudrücken. `\frontmatter` wechselt zur römischen Nummerierung und macht die Kapitel nicht nummeriert (daher erhält ein Vorwort keine Bezeichnung „Kapitel 1“). `\mainmatter` wechselt zu Arabisch und stellt nummerierte Kapitel wieder her. „\backmatter“ schaltet die Kapitelnummerierung für anhangartiges Material am Ende wieder aus. Wenn die Vorlage Ihrer Universität auf „Buch“ oder „Memoiren“ aufbaut, bevorzugen Sie diese Befehle gegenüber dem reinen „\Seitennummerieren“, da die Vorlage möglicherweise zusätzliches Verhalten an sie bindet, wie z. B. unterschiedliche Überschriften für die Titelseite. Die beiden Ansätze widersprechen nicht, es gibt jedoch keinen Grund, beide zu verwenden.

## Eine Sache, die Sie überprüfen sollten

Die römisch nummerierten Seiten sollten mit Ihrem Inhaltsverzeichnis übereinstimmen. Wenn Ihr Abstract im Inhaltsverzeichnis als Seite „iv“ angezeigt wird, aber als „2“ gedruckt wird, liegt dies normalerweise daran, dass ein „\pagenumbering“-Aufruf hinter dem Inhalt, den es abdecken sollte, platziert wird, oder an einer fehlenden zweiten Kompilierung: Seitenzahlen im Inhaltsverzeichnis stammen aus der „.aux“-Datei, daher müssen Sie [zweimal kompilieren](/learn/compile-to-pdf/), bevor Sie beurteilen können, ob die Nummerierung richtig ist. Kompilieren, erneut kompilieren und dann das Inhaltsverzeichnis mit den tatsächlichen Seiten vergleichen.