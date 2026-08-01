---

title: "Erstellen Sie eine .bib, die lange hält"
description: "Eintragstypen, Pflichtfelder, stabile Schlüssel."
category: "cite-your-sources"
order: 2
level: "beginner"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Erstellen Sie eine .bib, die lange hält

Eine „.bib“-Datei ist eine kleine Klartextdatenbank mit allem, was Sie zitieren. Jeder Eintrag hat einen Typ, einen Schlüssel und eine Reihe von Feldern, und dieselbe Datei kann jahrelang für jede Arbeit verwendet werden, die Sie schreiben. Ein wenig Disziplin bei der Auswahl von Typen, Füllfeldern und Benennungsschlüsseln erspart Ihnen später echte Schmerzen, wenn ein Journalstil plötzlich ein Feld benötigt, das Sie nie aufgezeichnet haben.

## Anatomie eines Eintrags

```bibtex
@article{knuth84,
  author  = {Knuth, Donald E.},
  title   = {Literate Programming},
  journal = {The Computer Journal},
  year    = {1984},
  volume  = {27},
  number  = {2},
  pages   = {97--111}
}
```

Das Wort nach „@“ ist der Eintragstyp, der dem Stil sagt, um welche Art von Arbeit es sich handelt und welche Felder somit zu erwarten sind. „knuth84“ ist der Zitierschlüssel, das Handle, das Sie in „\cite{...}“ eingeben. Alles andere ist ein Feld. Das Feld „Autor“ verwendet die Form „Last, First“, damit der Stil Namen zuverlässig abkürzen und sortieren kann, und „pages“ verwendet einen doppelten Bindestrich, den LaTeX als Bindestrich für den Seitenbereich setzt.

## Die Eintragstypen, die Sie tatsächlich benötigen

Sechs Typen decken nahezu das gesamte wissenschaftliche Schreiben ab. Verwenden Sie „@article“ für Zeitschriftenbeiträge, „@inproceedings“ für Konferenz- und Workshopbeiträge, „@book“ für Bücher, „@phdthesis“ für Dissertationen, „@techreport“ für institutionelle Berichte und viele Vorabdrucke und „@misc“ für alles andere, einschließlich Software und Websites. Die Wahl des richtigen Typs ist wichtig, da Stile jeden unterschiedlich formatieren: Ein „@inproceedings“-Eintrag benötigt einen „Booktitle“ (den Konferenznamen), während ein „@article“ ein „Journal“ benötigt.

## Erforderliche Felder und warum Validatoren sich beschweren

Jeder Typ verfügt über Pflichtfelder, und ein fehlendes Feld ist der häufigste Grund dafür, dass ein Bibliografieeintrag fehlerhaft ausgegeben wird oder eine Backend-Warnung auslöst. Für „@article“ sind die wesentlichen Angaben „Autor“, „Titel“, „Zeitschrift“ und „Jahr“; für „@inproceedings“, „Autor“, „Titel“, „Buchtitel“ und „Jahr“. Das Fehlen von „Jahr“ oder „Autor“ ist der klassische Fehler, da Autor-Jahres-Stile ohne sie buchstäblich keine Zitatbezeichnung erstellen können. Optionale Felder wie „Volume“, „Seiten“, „Doi“ und „Herausgeber“ machen Einträge nützlicher, also zeichnen Sie sie auf, während die Quelle vor Ihnen liegt. Sie können eine ganze Datei auf einmal mit dem [BibTeX-Validator](/tools/bibtex-validator/) überprüfen.

## Schlüssel, die ein Jahrzehnt überleben

Zitierschlüssel sind für immer gültig. Jedes „\cite{knuth84}“ in jedem Entwurf, jeder Notiz und jedem Foliensatz bezieht sich auf genau diese Zeichenfolge. Das Umbenennen eines Schlüssels bedeutet also, jede Verwendung aufzuspüren. Wählen Sie eine Konvention wie „authorYEAR“ oder „authorYEARkeyword“, wenden Sie sie vom ersten Tag an an und „bereinigen“ Sie niemals Schlüssel in einer etablierten Datenbank. Wenn Sie Referenzen in Zotero verwalten, kann das Better BibTeX-Plugin stabile Schlüssel für Sie generieren und anpinnen; siehe [Zotero in eine .bib-Datei](/learn/zotero-latex/). Um die Datei in ein Dokument zu integrieren, beginnen Sie mit [Vom .bib-Schlüssel zum Zitieren im Text](/learn/add-citations/).