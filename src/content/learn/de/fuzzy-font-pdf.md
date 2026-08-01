---

title: "Verschwommener Text im PDF-Viewer"
description: "Typ 3-Bitmaps, Outline-Schriftarten, Vektorfiguren."
category: "typefaces"
order: 3
level: "intermediate"
tags: ["fonts", "errors"]
featured: false
updated: 2026-07-25
---

# Verschwommener Text im PDF-Viewer

Ihre PDF-Datei wird sauber kompiliert, aber der Text sieht auf dem Bildschirm weich oder gezackt aus, und durch das Vergrößern wird er schlechter statt besser. Mit Ihrem Viewer ist alles in Ordnung. Das Dokument enthält Bitmap-Schriftarten. Anstatt Buchstabenformen als skalierbare Umrisse zu speichern, werden sie als Pixelgitter gespeichert, die mit einer festen Auflösung gerendert werden. In der PDF-Terminologie sind dies Typ-3-Schriftarten. Sie drucken auf Papier mit der Auflösung, für die sie erstellt wurden, akzeptabel, weshalb das Problem jahrzehntelang bestehen blieb, aber auf Bildschirmen verschwimmen sie bei jeder anderen Zoomstufe als der nativen. Moderne Umrissformate (Typ 1, TrueType, OpenType) lassen sich sauber skalieren, da es sich bei den Formen um mathematische Kurven handelt.

## Bestätigung der Diagnose

Zoomen ist der Schnelltest: Outline-Schriftarten bleiben mit 800 Prozent gestochen scharf, Bitmaps lösen sich in sichtbare Pixel auf. Um sicherzugehen, öffnen Sie die Dokumenteigenschaften in Ihrem PDF-Viewer und sehen Sie sich das Schriftartenfenster an. In Adobe Reader befindet sich dies unter „Datei“, dann „Eigenschaften“, dann „Schriftarten“. Jede Schriftart, die als „Typ 3“ aufgeführt ist, ist eine Bitmap. Diese Prüfung ist nicht nur ästhetisch wichtig, da arXiv und viele Verlage Einsendungen mit Typ-3-Schriftarten ablehnen.

## Woher Bitmaps kommen und welche Korrekturen es gibt

Die übliche Quelle ist ein altes Schriftarten-Setup. Sehr alte TeX-Installationen haben Computer Modern über METAFONT in Bitmaps gerendert, und einige ältere Pakete und alte Stapel aus der „\usepackage{times}“-Ära ziehen immer noch Bitmap-Varianten. Beheben Sie das Problem, indem Sie die alten Schriftartenbefehle durch einen modernen Stapel ersetzen:

```latex
\usepackage{newtxtext,newtxmath}
```

Das ergibt einen Überblick über Times mit passender Mathematik, wie in [Times, Arial, Helvetica-ähnliche Stapel](/learn/times-arial-helvetica/) beschrieben. Wenn Sie das Standard-Erscheinungsbild anstelle von Times wünschen, tauscht „\usepackage{lmodern}“ Computer Modern gegen seinen Outline-Nachfolger Latin Modern aus. Durch das Kompilieren mit XeLaTeX oder LuaLaTeX und „fontspec“ wird das Problem vollständig umgangen, da diese Engines OpenType-Systemschriftarten verwenden, bei denen es sich konstruktionsbedingt um Konturen handelt. Eine moderne Engine wie die XeTeX-basierte Tectonic, die Oleafly bündelt, generiert selbst keinen Typ-3-Text; Wenn es dort erscheint, kommt die Bitmap-Schriftart über eine eingebundene Grafik.

## Die Abbildungsversion des gleichen Problems

Verschwommener Text in einer PDF-Datei ist nicht immer eine Dokumentschriftart. Wenn Absätze scharf sind, die Beschriftungen innerhalb eines Diagramms jedoch unscharf sind, handelt es sich bei der Abbildung selbst um ein Rasterbild, normalerweise um einen PNG-Screenshot eines Diagramms oder ein in Bildschirmauflösung exportiertes Diagramm. Die Lösung ist die gleiche Idee eine Ebene höher: Exportieren Sie Figuren als Vektor-PDF aus dem Plottool, sodass auch deren Text Umrisse enthält. Anleitungen zum Format finden Sie in [eine Abbildung einfügen](/learn/insert-images/).

Überprüfen Sie nach jeder Korrektur noch einmal das Schriftartenfenster, anstatt sich beim Standardzoom auf Ihre Augen zu verlassen. Ein einzelner Typ-3-Eintrag, der von einer Figur oder einem Paket zurückgelassen wird, reicht aus, um eine Einreichung zurückzuweisen.