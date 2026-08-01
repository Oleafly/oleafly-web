---

title: "Farbe, die den Druck überdauert"
description: "xcolor, HTML-Spezifikationen und die Verwendung von Farben als Signal, wenn Zeitschriften in Graustufen umgewandelt werden."
category: "type-and-shape"
order: 6
level: "beginner"
tags: ["formatting", "color"]
featured: false
updated: 2026-07-25
---

# Farbe, die den Druck überlebt

Farbe in LaTeX stammt aus einem Paket, „xcolor“. Es bietet Ihnen benannte Farben, genaue Farbspezifikationen, Hintergrundfelder und die Möglichkeit, Ihre eigene Palette zu definieren. Der Fließtext in Zeitschriften ist fast immer schwarz, sodass Sie ihn seltener benötigen, als Sie vielleicht denken. Bei Folien, Entwürfen mit sichtbaren Anmerkungen und allem, was zur Palette einer Organisation passen muss, lohnt es sich immer noch.

## Die Befehle

```latex
\usepackage{xcolor}
\textcolor{red}{warning}
\textcolor[HTML]{2563EB}{brand blue}
\colorbox{gray!15}{highlighted}

\definecolor{brand}{HTML}{2563EB}
```

„\textcolor{red}{warning}“ färbt nur den Text in seinem zweiten Argument und verwendet dabei einen der vordefinierten Namen von xcolor; „Rot“, „Blau“, „Grau“, „Blaugrün“ und ein paar Dutzend andere funktionieren sofort. Wenn ein Name nicht präzise genug ist, akzeptiert das optionale „[HTML]“-Modell einen sechsstelligen Hex-Code, die gleiche Form, die Ihnen ein Webdesigner oder Styleguide gibt, sodass „2563EB“ ein bestimmtes Blau exakt reproduziert. Beachten Sie, dass xcolor die Hexadezimalziffern in Großbuchstaben und ohne das „#“ möchte.

„\colorbox{gray!15}{highlighted}“ malt einen Hintergrund hinter seinen Text, anstatt den Text selbst einzufärben. Das Argument „gray!15“ zeigt die Mischsyntax von xcolor: 15 Teile Grau gemischt mit 85 Teilen Weiß, was den blassen Farbton ergibt, der als Glanzlicht wirkt. Die gleiche Syntax funktioniert überall dort, wo eine Farbe erwartet wird, und Sie können sie verketten, wie in „blau!50!schwarz“ für ein abgedunkeltes Blau.

## Einmal definieren, überall verwenden

„\definecolor{brand}{HTML}{2563EB}“ registriert einen eigenen Namen. Nach dieser Zeile funktioniert „\textcolor{brand}{...}“ wie jede integrierte Farbe und der Hexadezimalwert befindet sich an genau einer Stelle. Wenn sich die Palette ändert, bearbeiten Sie eine Präambelzeile, anstatt nach rohen Hex-Codes im Dokument zu suchen. Dieselbe Idee wie bei [benutzerdefinierten Makros](/learn/custom-commands/): einmal definieren, überall wiederverwenden.

## Graustufen sind immer noch real

Verwenden Sie Farbe als Signal, nicht als Dekoration, und gehen Sie davon aus, dass einige Leser sie nicht sehen werden. Viele Zeitschriften drucken immer noch in Graustufen, bei denen Rot und Blau in ähnliche Grautöne übergehen, und ein erheblicher Teil der Leser leidet an irgendeiner Form von Farbsehschwäche. Als Faustregel gilt: Die Farbe kann eine Unterscheidung verstärken, sollte aber niemals das Einzige sein, was sie trägt. Kombinieren Sie farbigen Text mit Fettdruck oder einem Symbol und kombinieren Sie farbige Handlungslinien mit deutlichen Markierungen oder Strichmustern.

Noch etwas zum Umfang. Das manuelle Einfärben von Überschriften oder Textkörpern lässt ein Dokument schnell wie selbstgemacht aussehen, und in der Vorlage eines Veranstaltungsortes wird es ohnehin zurückgesetzt. Behalten Sie die manuelle Farbe an Stellen bei, an denen sie eine Bedeutung hat, z. B. beim Markieren von vom Prüfer angeforderten Änderungen in einer Revision, und entfernen Sie sie vor der endgültigen Version.