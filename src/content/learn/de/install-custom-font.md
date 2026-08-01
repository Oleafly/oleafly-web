---

title: "Eine Schriftartdatei neben dem Projekt"
description: "Fontspec-Pfad für lokale OTF- oder TTF-Familien."
category: "typefaces"
order: 2
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Eine Schriftartdatei neben dem Projekt

Angenommen, Ihre Dissertation verwendet eine Schriftart, die nicht auf jedem Computer installiert ist, auf dem sie jemals kompiliert wird: auf dem Laptop eines Co-Autors, auf einem Build-Server der Universität oder auf Ihrem eigenen Computer nach einer Neuinstallation. Die systemweite Installation der Schriftart auf jedem von ihnen ist fragil und manchmal nicht zulässig. Legen Sie die Schriftartdateien im Projektordner ab und zeigen Sie stattdessen mit „fontspec“ darauf, damit das Dokument seine eigene Typografie trägt. Dies erfordert XeLaTeX oder LuaLaTeX, da „fontspec“ unter pdfLaTeX nicht funktioniert. Die Gründe werden in [Warum Menschen zu XeLaTeX wechseln](/learn/when-use-xelatex/) behandelt.

```latex
\usepackage{fontspec}
\setmainfont{MyFont}[
 Path = ./fonts/,
 Extension = .otf,
 UprightFont = *-Regular,
 BoldFont = *-Bold,
 ItalicFont = *-Italic
]
```

## Was jede Taste bewirkt

„\setmainfont{MyFont}“ deklariert die Haupttextfamilie und gibt ihr den Basisnamen, der zum Erstellen von Dateinamen verwendet wird. „Path = ./fonts/“ weist „fontspec“ an, nach den Dateien in einem „fonts“-Ordner innerhalb des Projekts zu suchen, relativ zur Hauptdatei „.tex“, anstatt das Betriebssystem zu fragen. „Extension = .otf“ gibt den Dateityp einmal an, sodass er nicht pro Datei wiederholt werden muss. Verwenden Sie „.ttf“, wenn Sie das haben.

Die übrigen Tasten ordnen Schriftartformen Dateien zu. In jedem wird das „*“ auf den Basisnamen erweitert, sodass „UprightFont = *-Regular“ zu „MyFont-Regular.otf“ aufgelöst wird, und ebenso zu „MyFont-Bold.otf“ und „MyFont-Italic.otf“. Diese Namen müssen genau mit den tatsächlichen Dateinamen übereinstimmen, einschließlich Groß- und Kleinschreibung, da auf Linux-Servern die Groß- und Kleinschreibung wichtig ist, selbst wenn Ihr lokales System dies verzeiht. Wenn die Familie eine fette Kursivschrift hat, fügen Sie „BoldItalicFont = *-BoldItalic“ hinzu. Eine Form, die Sie nicht zuordnen, ist eine Form, die das Dokument nicht verwenden kann: Ohne die Zeile „BoldFont“ hat „\textbf“ nichts, zu dem gewechselt werden kann, und der Compiler warnt, dass die fett gedruckte Form undefiniert ist.

Die gleiche Syntax funktioniert für die anderen Familien, daher akzeptieren „\setsansfont“ und „\setmonofont“ identische Optionsblöcke für eine lokale serifenlose oder Codeschriftart.

## Lizenzierung und Portabilität

Versenden Sie die Schriftartdateien nur dann mit dem Projekt, wenn die Lizenz eine Weiterverbreitung zulässt. Offene Lizenzen wie die SIL Open Font License erlauben dies, und Schriftarten von Google Fonts sind im Allgemeinen qualifiziert, kommerzielle Schriftarten verbieten jedoch normalerweise die Weitergabe von Kopien an Mitarbeiter. In diesem Fall benötigt jede Maschine eine eigene lizenzierte Kopie und Sie sollten diese Anforderung in der Projekt-Readme-Datei dokumentieren.

Der häufigste Fehler ist eine stille Diskrepanz zwischen den deklarierten Namen und den Dateien, oft nach dem Umbenennen des Ordners oder dem Herunterladen eines anders benannten Gewichts. Die Kompilierung stoppt dann mit „Die Schriftart ‚MyFont-Regular‘ kann nicht gefunden werden“. Wenn das passiert, vergleichen Sie den erwarteten Dateinamen des Fehlers Zeichen für Zeichen mit dem Ordnerinhalt und vergewissern Sie sich, dass der „Pfad“ immer noch dorthin zeigt, wo sich die Dateien befinden. Da die mitgelieferte Tectonic-Engine von Oleafly auf XeTeX basiert, funktioniert dieses projektlokale Muster dort ohne Installation von Systemschriftarten.