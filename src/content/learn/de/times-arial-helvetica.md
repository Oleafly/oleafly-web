---

title: "Times, Arial, Helvetica-ähnliche Stapel"
description: "Newtx-, Helvet- oder Fontspec-Zuordnungen, nach denen Zeitschriften immer noch fragen."
category: "typefaces"
order: 1
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Mal-, Arial- und Helvetica-ähnliche Stapel

In den Richtlinien von Zeitschriften und Konferenzen wird immer noch routinemäßig „Times“ für Fließtexte oder „Arial“ für Zahlen gefordert, Jahrzehnte nachdem diese Schriftarten nicht mehr die ästhetische erste Wahl für jedermann waren. In LaTeX gibt es zwei Möglichkeiten, eine solche Anforderung zu erfüllen. Welche davon angewendet wird, hängt von Ihrer Engine ab. Das klassische pdfLaTeX kann die tatsächlichen Times New Roman- oder Arial-Dateien nicht laden und verwendet daher metrische kompatible Klone, die als Pakete geliefert werden. XeLaTeX und LuaLaTeX laden die echten Systemschriftarten über „fontspec“.

## Die Paketroute

```latex
\usepackage{newtxtext,newtxmath} % Times-like
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
```

„newtxtext“ schaltet die Textschriftart auf einen Times-Klon um und „newtxmath“ stellt passende Mathematik bereit. Auf die Paarung kommt es an: Ändern Sie nur die Textschriftart und die Gleichungen bleiben in der Standardeinstellung „Computer Modern“. Ein Times-Absatz neben Computer Modern Math ist sofort sichtbar. „newtx“ ist der gepflegte Nachfolger der alten Pakete „times“ und „txfonts“, die Sie in neuen Dokumenten vermeiden sollten. Bei den alten Stapeln wurde die Mathematik nicht konvertiert, und einige erzeugen die in [verschwommener Text im PDF-Viewer](/learn/fuzzy-font-pdf/) beschriebenen Bitmap-Schriftarten.

„helvet“ stellt einen Helvetica-Klon als Sans-Serif-Familie bereit, der auch für Arial steht, da Arial so konzipiert wurde, dass es den Metriken von Helvetica entspricht. Durch das Laden wird die Schriftart des Dokuments nicht geändert, da der Textkörper die Serifenfamilie verwendet. Die Zeile „\renewcommand{\familydefault}{\sfdefault}“ führt diesen Wechsel durch: „\familydefault“ ist die Familie, die LaTeX für gewöhnlichen Text verwendet, und wenn man sie auf „\sfdefault“ setzt, ähnelt das gesamte Dokument Helvetica. Lassen Sie diese Zeile weg, wenn Sie nur serifenlose Überschriften oder Abbildungsbeschriftungen benötigen. Wenn Helvetica neben Ihrer Textschriftart etwas größer angezeigt wird, wird sie mit „\usepackage[scaled=0.92]{helvet}“ ausgerichtet.

## Die Fontspec-Route

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
\setsansfont{Arial}
```

Unter XeLaTeX oder LuaLaTeX adressiert „fontspec“ Schriftarten nach Namen und lädt sie vom Betriebssystem, sodass die echte Times New Roman als Hauptfamilie (Serifenfamilie) und die echte Arial als Sans-Familie festgelegt wird. Die Schriftarten müssen tatsächlich auf dem Rechner installiert sein. Das schmerzt, wenn ein Dokument zwischen Computern oder in CI verschoben wird. Eine Schriftart, die mit dem Projekt übertragen wird, vermeidet das Problem, wie in [einer Schriftartendatei neben dem Projekt](/learn/install-custom-font/) gezeigt. Mathematik ist wiederum ein separates Anliegen, das von „unicode-math“ oder durch die Beibehaltung von „newtxmath“ erledigt wird. Die Engine-Kompromisse werden in [Warum Menschen zu XeLaTeX wechseln](/learn/when-use-xelatex/) behandelt.

## Die Faustregel

Bevor Sie sich für eine der beiden Routen entscheiden, prüfen Sie, ob die Schriftarten in der Kursdatei des Veranstaltungsorts bereits festgelegt sind. Die meisten tun es. Wenn Sie Ihre eigenen Schriftpakete über eine Klasse stapeln, die gesprochen hat, werden bestenfalls Warnungen ausgegeben. Fügen Sie Schriftpakete nur zu Dokumenten hinzu, deren Klasse Ihnen die Wahl lässt.