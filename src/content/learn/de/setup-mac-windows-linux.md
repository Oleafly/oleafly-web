---

title: "Holen Sie sich ein funktionierendes TeX auf jedem Betriebssystem"
description: "Oleafly mit einer gebündelten Engine oder einer vollständigen TeX Live-/MiKTeX-Installation."
category: "local-studio"
order: 2
level: "beginner"
tags: ["setup"]
featured: false
updated: 2026-07-25
---

# Holen Sie sich ein funktionierendes TeX auf jedem Betriebssystem

Das lokale Schreiben von LaTeX erfordert ein TeX-System: die Engine, die Ihre Quelle kompiliert, sowie die Tausenden von Paketen, von denen Dokumente abhängen. Es gibt zwei sinnvolle Möglichkeiten, eine zu bekommen. Eine davon ist eine Anwendung mit integrierter Engine, mit der Sie das Kompilieren in wenigen Minuten durchführen können. Die andere ist eine vollständige TeX-Distribution, die die komplette Befehlszeilen-Toolchain installiert, die jeder Editor verwenden kann. Beide Pfade enden an der gleichen Stelle: Eine „.tex“-Datei wird auf Ihrem Computer in eine PDF-Datei umgewandelt.

## Pfad A: eine App mit integrierter Engine

Laden Sie [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) für Mac, Windows oder Linux herunter. Es bündelt die Tectonic-Engine, sodass keine separate TeX-Installation verwaltet werden muss: Sie öffnen die App, erstellen ein Projekt und kompilieren. Wenn ein Dokument ein Paket verwendet, das nicht vorhanden ist, ruft Tectonic es bei Bedarf ab, was bei der ersten Verwendung eines bestimmten Pakets eine Netzwerkverbindung erfordert und danach nichts mehr. Dieser Pfad eignet sich für jeden, der Arbeiten schreiben möchte, anstatt eine TeX-Installation zu verwalten, und er hinterlässt gewöhnliche „.tex“- und „.bib“-Dateien auf der Festplatte, die jedes andere Tool lesen kann.

## Pfad B: eine vollständige TeX-Distribution

Durch die Installation einer Distribution erhalten Sie „pdflatex“, „xelatex“, „lualatex“ und den Paketmanager als Systembefehle. Installieren Sie auf einem Mac MacTeX, das TeX Live-Paket für macOS; Wenn der Multi-Gigabyte-Download unerwünscht ist, ist BasicTeX ein kleiner Kern, den Sie bei Bedarf über das TeX Live Utility erweitern können. Unter Windows ist MiKTeX die gängige Wahl und kann fehlende Pakete während der Kompilierung im Handumdrehen installieren, während TeX Live genauso gut funktioniert. Installieren Sie unter Linux „texlive-full“ von Ihrem Paketmanager für alles auf einmal oder ein kleineres Schema wie „texlive-latex-extra“ plus das Tool „tlmgr“, um Pakete später hinzuzufügen. Rechnen Sie damit, dass eine vollständige Installation eine Weile dauern und mehrere Gigabyte Speicherplatz in Anspruch nehmen wird.

## Überprüfen Sie die Installation

Öffnen Sie ein Terminal und fragen Sie eine Engine nach ihrer Version:

```bash
pdflatex --version
# or
xelatex --version
```

Ein Versionsbanner bedeutet, dass die Toolchain auf Ihrem Weg und bereit ist. Eine Fehlermeldung, dass der Befehl nicht gefunden wurde, bedeutet normalerweise, dass die Änderungen des Installationsprogramms an Ihrem PATH noch nicht wirksam wurden; Durch einen Neustart des Terminals oder durch Abmelden und erneutes Anmelden unter Windows wird das Problem behoben.

## Welchen Weg wir einschlagen sollen

Wählen Sie die App, wenn Sie gerade erst anfangen oder einfach den kürzesten Weg zu einem kompilierten PDF wünschen. Wählen Sie eine vollständige Distribution, wenn Sie bestimmte Engines, Befehlszeilen-Builds oder die Integration mit einem vorhandenen Editor benötigen. Die beiden koexistieren ohne Konflikte, sodass es nichts kostet, mit Pfad A zu beginnen und später Pfad B hinzuzufügen. In jedem Fall ist der nächste Schritt derselbe: Kompilieren Sie [Ihr erstes Dokument] (/learn/first-document/).