---

title: "Ränder in einem Paket"
description: "Geometrie für Seitengröße, Ränder, Bindungsversatz."
category: "the-page"
order: 1
level: "beginner"
tags: ["layout"]
featured: true
updated: 2026-07-25
---

# Ränder in einem Paket

Die Standardränder von LaTeX sehen enorm aus, insbesondere auf A4-Papier. Das ist so gewollt: Die Standardeinstellungen zielen auf eine angenehme Zeilenlänge von etwa 66 Zeichen ab, was sich gut zum Lesen eignet, aber selten das ist, was eine Universitätsvorlage, ein Tagebuch oder der eigene Geschmack verlangt. Anstatt ein halbes Dutzend Low-Level-Längen manuell anzupassen, richten Sie die Seite mit dem „Geometry“-Paket ein und beschreiben das gewünschte Layout in einfachen Worten.

## Die zwei Möglichkeiten, wie Sie es tatsächlich verwenden werden

```latex
\usepackage[margin=1in]{geometry}
% or
\usepackage[a4paper,top=2.5cm,bottom=2.5cm,left=2.5cm,right=2.5cm]{geometry}
```

Die erste Form ist die schnelle: „margin=1in“ setzt alle vier Ränder in einer einzigen Option auf einen Zoll, und die Geometrie berechnet die Textbreite und -höhe entsprechend neu. Dies ist das standardmäßige Erscheinungsbild einer US-amerikanischen Abschlussarbeit und eine sinnvolle Vorgabe für Entwürfe.

Die zweite Form formuliert alles. „a4paper“ gibt das physische Papierformat an (verwenden Sie „letterpaper“ für US Letter). Ohne sie erbt die Geometrie die von der Dokumentklasse angenommene Klasse, die möglicherweise nicht mit den Erwartungen Ihres PDF-Viewers oder Druckers übereinstimmt. Die Optionen „oben“, „unten“, „links“ und „rechts“ legen dann jeden Rand unabhängig fest, sodass asymmetrische Layouts genauso einfach sind wie symmetrische. Sie können die Einheiten frei mischen: „in“, „cm“, „mm“ und „pt“ funktionieren alle.

Alles geschieht in der Präambel, vor „\begin{document}“. Geometry liest seine Optionen einmal und leitet daraus das gesamte Seitenlayout ab, weshalb es weniger fehleranfällig ist als die manuelle Optimierung.

## Bindungsversatz für gedruckte Kopien

Wenn das Dokument gedruckt und gebunden wird, benötigt der Innenrand zusätzlichen Platz, damit der Text nicht im Buchrücken verschwindet. Fügen Sie „bindingoffset=0.5cm“ zu den Optionen hinzu und die Geometrie verschiebt den Textblock auf jeder Seite nach außen. In einem „zweiseitigen“ Dokument wechselt die Verschiebung korrekt zwischen linker und rechter Seite, was von Hand mühsam ist.

## Was man nicht tun sollte

Vermeiden Sie es, Geometrie mit manuellem „\setlength{\textwidth}{...}“ zu vermischen, es sei denn, Sie wissen warum. Das Seitenlayout von LaTeX ist ein Netz voneinander abhängiger Längen („\textwidth“, „\oddsidemargin“, „\headheight“ und andere), und die Geometrie verwaltet sie alle als ein konsistentes System. Das Ändern einer Länge direkt nach dem Laden der Geometrie führt normalerweise dazu, dass die anderen Längen nicht übereinstimmen, und Sie erhalten einen Text, der über die Seite hinausläuft, oder Ränder, die von Ihren Anforderungen abweichen. Wenn Sie eine Änderung mitten im Dokument benötigen, stellt die Geometrie genau dafür „\newgeometry{...}“ und „\restoregeometry“ bereit.

Eine Warnung, bevor Sie etwas optimieren: Wenn Sie für eine Zeitschrift oder Konferenz schreiben, sind in der Klassendatei bereits die erforderlichen Ränder codiert, und das Hinzufügen von Geometrie darüber verstößt wahrscheinlich gegen das Einreichungsformat. Sparen Sie sich die Randanpassung für Dokumente, bei denen Sie das Layout steuern, wie zum Beispiel eine Abschlussarbeit, Notizen oder einen Lebenslauf, und prüfen Sie zunächst, was Ihnen Ihre [Dokumentklasse](/learn/document-skeleton/) bereits bietet.