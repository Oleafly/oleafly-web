---

title: "Springer-, Elsevier- und LNCS-Formate"
description: "llncs, Springer Nature-Zeitschriften und elsarticle: einspaltige Klassen und aufnahmebereite Quelle."
category: "venue-formats"
order: 4
level: "intermediate"
tags: ["venues", "publishers"]
featured: false
updated: 2026-07-25
---

# Springer-, Elsevier- und LNCS-Formate

Außerhalb der IEEE- und ACM-Ökosysteme dominieren zwei Verlage: Springer (einschließlich Springer Nature) und Elsevier. Ihre Klassen sehen schlichter aus als die zweispaltigen Konferenzstile, und das ist beabsichtigt. Der Verlag setzt die endgültige Fassung.

## LNCS: das Arbeitspferd für Verfahren

Wenn Ihre Konferenz in Lecture Notes in Computer Science (oder seinen Geschwistern LNAI und LNBI) veröffentlicht wird, schreiben Sie in „llncs“:

```latex
\documentclass{llncs}
\usepackage{graphicx}

\title{Contribution Title}
\author{Ada Lovelace\inst{1} \and Charles Babbage\inst{2}}
\institute{University of London \and University of Cambridge}
```

LNCS-Artikel sind einspaltig, verwenden hochgestellte „\inst{}“, um Autoren den Instituten zuzuordnen, und haben ein bekanntermaßen knappes Standardseitenbudget (häufig 12 bis 16 Seiten einschließlich Referenzen). Die Klasse ist nicht standardmäßig in jeder TeX-Distribution enthalten. Laden Sie das Autoren-Kit von der LNCS-Seite von Springer herunter. Sein Bibliographiestil ist „splncs04“:

```latex
\bibliographystyle{splncs04}
\bibliography{references}
```

## Springer Nature-Zeitschriften

Springer-Zeitschriften verwendeten in der Vergangenheit „svjour3“ und migrierten auf die neuere Klasse „sn-jnl“ mit Stiloptionen pro Zeitschriftenfamilie („sn-mathphys-num“, „sn-basic“ und andere). Auf der Seite „Einreichungsrichtlinien“ der Zeitschrift werden die genaue Klasse und Option genannt. Raten Sie nicht: Zwei Springer-Zeitschriften können unterschiedliche Klassen wünschen.

## Elsevier: elsarticle

Elsevier-Zeitschriften teilen sich eine Klasse, „elsarticle“:

```latex
\documentclass[preprint,12pt]{elsarticle}
% later: \documentclass[final,3p,twocolumn]{elsarticle}
```

Die Option „Preprint“ bietet eine geräumige Einzelspalte mit doppeltem Zeilenabstand für die Durchsicht und „Final“ mit „1p“, „3p“ oder „5p“ ahmt das Drucklayout der Zeitschrift nach. Bibliographie-Stile sind „elsarticle-num“ (nummeriert) oder „elsarticle-harv“ (Autor-Jahr), passend zu dem, was die Zeitschrift verwendet.

## Schneller Vergleich

| Herausgeber | Klasse | Spalten | Latzstil |
|---|---|---|---|
| Springer LNCS | `llncs` | eins | `splncs04` |
| Springer Nature-Zeitschriften | `sn-jnl` (war `svjour3`) | eins | Option pro Journal |
| Elsevier | `elsarticle` | eins (Rezension) | `elsarticle-num` / `-harv` |

## Warum einspaltig? Weil Sie nicht der Schriftsetzer sind

Diese Klassen rendern Ihr *Manuskript*, nicht die letzte Seite. Das Produktionsteam des Verlags setzt angenommene Beiträge neu in das Hauslayout der Zeitschrift. Das ist auch der Grund, warum „kamerabereiter Quell-Upload“ hier etwas Besonderes bedeutet: Sie laden Ihre „.tex“-, „.bib“- und Figurendateien hoch, nicht nur eine PDF-Datei, damit die Produktion das Papier neu erstellen und neu gestalten kann. Praktische Konsequenzen:

- Halten Sie die Quelle sauber und kompilierbar aus einem neuen Checkout: keine absoluten Pfade, keine fehlenden Zahlen
- Hacken Sie keine Abstände oder Ränder. Die Produktion entfernt es trotzdem (und es kann [markiert werden](/learn/page-limits-without-crimes/))
- Verwenden Sie Standardpakete. Exotische Texte werden von der Produktion umgeschrieben oder an Sie zurückgesendet

Diese Klassen basieren auf einer beträchtlichen Anzahl von Paketen, sodass eine minimale Installation beim ersten Kompilieren möglicherweise mehrere Pakete abruft. Wenn eines nicht angezeigt wird, lesen Sie [fehlende Pakete installieren](/learn/install-missing-package/). Wenn die Vorlage völlig fehlerhaft ist, selektieren Sie sie wie jede andere [defekte Vorlage](/learn/fix-broken-template/).