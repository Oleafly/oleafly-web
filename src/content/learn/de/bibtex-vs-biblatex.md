---

title: "Klassisches BibTeX oder Biblatex"
description: "Backends, Stile und was sich täglich ändert."
category: "cite-your-sources"
order: 3
level: "intermediate"
tags: ["citations"]
featured: true
updated: 2026-07-25
---

# Klassisches BibTeX oder Biblatex

LaTeX verfügt über zwei Zitationssysteme, die dieselben „.bib“-Dateien lesen, sich aber in fast allem anderen unterscheiden. Das klassische BibTeX stammt aus den 1980er Jahren: Ein kleines externes Programm formatiert Ihre Referenzen mithilfe von Stildateien, die in einer eigenen, stapelbasierten Sprache geschrieben sind. biblatex ist der moderne Ersatz: Die Formatierung erfolgt in LaTeX selbst, wobei ein Hilfsprogramm namens „biber“ die Sortierung und Datenverarbeitung übernimmt. Die Namen sind zum Verwechseln ähnlich. Denken Sie daran, dass „BibTeX“ sowohl das alte Programm als auch grob gesagt das alte System ist, während „biblatex“ ein LaTeX-Paket ist, das „biber“ als Backend verwendet.

| | BibTeX | biblatex + biber |
| --- | --- | --- |
| Alter | Klassisch | Modern |
| Stile | `.bst` | `.bbx`/`.cbx` |
| Unicode | Zerbrechlich | Stark |
| Zeitschriftenunterstützung | Universell | Wachsend |

## Was die Unterschiede in der Praxis bedeuten

Die Stilreihe ist am wichtigsten. BibTeX-Stile sind „.bst“-Dateien, die fast niemand lesen oder ändern kann, Sie nehmen also, was das Journal liefert. Biblatex-Stile sind gewöhnliches LaTeX, aufgeteilt in die Komponenten Bibliographie (`.bbx`) und Zitat (`.cbx`), und kleine Änderungen wie das Weglassen von URLs oder das Ändern der Zeichensetzung sind einzeilige Anpassungen. Die Unicode-Zeile ist wichtig, wenn Ihre Referenzen Namen mit Akzent oder nicht-lateinische Schriften enthalten. Das klassische BibTeX entstellt sie, es sei denn, jedes Zeichen wird als „\'{e}“ und Freunde maskiert, während biber UTF-8 nativ verarbeitet. In der letzten Zeile geht es darum, warum das klassische BibTeX überlebt: Die meisten Zeitschriften und Konferenzen verteilen immer noch eine „.bst“-Datei und erwarten die klassische Toolchain, und Einreichungssysteme lehnen oft alles andere ab.

## Wie ein Biblatex-Dokument aussieht

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84}
\printbibliography
```

Im Vergleich zum klassischen Muster rückt „\addbibresource{refs.bib}“ (mit der Erweiterung) in die Präambel, „\printbibliography“ ersetzt „\bibliography{refs}“ und es gibt keine Zeile „\bibliographystyle“, da der Stil eine Paketoption ist. Der Build muss „biber“ statt „bibtex“ ausführen; Das Ausführen des falschen Backends ist eine häufige Ursache für eine [leere Bibliographie](/learn/bibliography-empty/).

## So wählen Sie aus

Lassen Sie den Veranstaltungsort entscheiden, wann er kann. Wenn die Vorlage eine „.bst“-Datei enthält oder in den Anweisungen des Autors BibTeX erwähnt wird, verwenden Sie das klassische BibTeX und bekämpfen Sie es nicht. Wenn Sie das Format selbst steuern müssen, wie bei einer Abschlussarbeit, einem Vorabdruck oder Vorlesungsskripten, ist biblatex das bessere Werkzeug: sauberere Anpassung, echte Unicode-Unterstützung und speziell entwickelte Eintragstypen für Webquellen. Ihre „.bib“-Datenbank funktioniert unter beiden Systemen unverändert, daher ist die Auswahl nie dauerhaft. Die Zitierbefehle unterscheiden sich zwischen den beiden, und [Natbib-Gewohnheiten vs. Biblatex-Befehle](/learn/natbib-vs-biblatex/) ordnet einen Satz dem anderen zu.