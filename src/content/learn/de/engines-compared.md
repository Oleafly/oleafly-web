---

title: "Welcher Motor für dieses Projekt"
description: "pdfLaTeX, XeLaTeX, LuaLaTeX, Tectonic: Unicode, Schriftarten, Journal-Anpassung."
category: "runtime"
order: 1
level: "intermediate"
tags: ["engines"]
featured: true
updated: 2026-07-25
---

# Welche Engine für dieses Projekt

Eine Engine ist das Programm, das Ihre „.tex“-Quelle tatsächlich in ein PDF umwandelt. LaTeX selbst ist eine Makroebene, die auf einer Ebene ausgeführt wird, und es stehen mehrere zur Auswahl. Sie akzeptieren fast die gleichen Dokumente, unterscheiden sich jedoch in der Art und Weise, wie sie mit Unicode-Text und -Schriftarten umgehen, und eine Vorlage, die für eine Engine geschrieben wurde, kann unter einer anderen völlig fehlschlagen. Wählen Sie einmal pro Projekt aus und bleiben Sie dabei.

| Motor | Unicode | Systemschriftarten | Notizen |
| --- | --- | --- | --- |
| pdfLaTeX | Teilweise | Nein | Maximale Journalkompatibilität |
| XeLaTeX | Ja | Ja (`fontspec`) | Ideal für mehrsprachige Dokumente |
| LuaLaTeX | Ja | Ja | Modern, skriptfähig |
| Tektonische | Xe-artig | Ja | Automatischer Paketabruf; Oleafly-Standard |

## Wofür jeder Motor gedacht ist

pdfLaTeX ist der direkte Nachkomme des ursprünglichen TeX und bleibt die Standardannahme der meisten Zeitschriften, Konferenzen und Einreichungssysteme. Es ist älter als Unicode, daher erfordert die Eingabe mit Akzent die „inputenc“-Konventionen und Schriftarten sind auf speziell verpackte TeX-Schriftarten beschränkt. Im Gegenzug ist es schnell und wird allgemein unterstützt, und jahrzehntelange Vorlagen zielen darauf ab.

XeLaTeX liest UTF-8 nativ und verwendet über das Paket „fontspec“ alle auf Ihrem System installierten Schriftarten namentlich, z. B. „\setmainfont{Georgia}“. Das macht es zur praktischen Wahl für Dokumente mit gemischten Skripten, für Sprachen außerhalb der westeuropäischen Sprachen und für alle mit besonderen Anforderungen an Schriftarten. [Wann man XeLaTeX verwenden sollte](/learn/when-use-xelatex/) geht tiefer.

LuaLaTeX bietet die gleiche Unicode- und Schriftartenunterstützung und bettet die Skriptsprache Lua ein, sodass Pakete Dinge zur Kompilierungszeit berechnen können, die früher unmöglich waren. Es ist der langfristige Nachfolger unter den traditionellen Engines, allerdings mit etwas langsameren Kompilierungen.

Tectonic ist eine moderne, eigenständige Version der XeTeX-Engine. Sein besonderes Merkmal ist die automatische Abhängigkeitsbehandlung: Wenn ein Dokument ein Paket benötigt, das Sie nicht haben, lädt Tectonic es bei Bedarf herunter, anstatt zu scheitern. Oleafly bündelt Tectonic aus genau diesem Grund als Standard-Engine, sodass bei einer Neuinstallation reale Dokumente ohne jegliche TeX-Verwaltung kompiliert werden.

## So entscheiden Sie

Folgen Sie der Vorlage. Wenn eine Journal-Kurs- oder Abschlussarbeitsvorlage eine Engine dokumentiert, verwenden Sie diese. Vorlagen kodieren Engine-Annahmen auf eine Weise, die an anderer Stelle als verwirrende Fehler auftauchen, wie in [Universitätsklassendateien, die nicht kompiliert werden können](/learn/fix-broken-template/) beschrieben. Wenn das Dokument von Grund auf Ihr eigenes ist, ist die Faustregel einfach: pdfLaTeX, wenn ein konservativer Ort Ihre Quellen kompiliert, und XeLaTeX, LuaLaTeX oder Tectonic, wenn Sie echten Unicode oder echte Schriftarten benötigen. Was auch immer Sie auswählen, behalten Sie es für die gesamte Lebensdauer des Dokuments bei. Kleine Unterschiede in den Abständen und Schriftarten machen den Wechsel mitten im Projekt zu einer Zeitverschwendung.