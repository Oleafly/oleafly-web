---

title: "Webseiten, Videos, Datensätze"
description: "Verschiedene/Online-Einträge und Zugriffsdaten für fragile URLs."
category: "cite-your-sources"
order: 7
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Webseiten, Videos, Datensätze

BibTeX wurde in den 1980er Jahren für Zeitschriften, Bücher und Konferenzberichte entwickelt und hat daher keine native Vorstellung von einer Webseite, einem YouTube-Video oder einem Datensatz auf Zenodo. Sie müssen diese Dinge immer noch ständig zitieren, und die Standardlösung ist der Eintragstyp „@misc“, der fast jede Kombination von Feldern akzeptiert und sie im Stil sinnvoll drucken lässt.

## Das @misc-Muster

```bibtex
@misc{oleafly2026,
 author = {{Oleafly Contributors}},
 title = {Oleafly},
 year = {2026},
 howpublished = {\url{https://oleafly.com}},
 note = {Accessed: 2026-07-24}
}
```

Drei Details sind hier wichtig. Die doppelten Klammern um „{{Oleafly Contributors}}“ weisen BibTeX an, die gesamte Zeichenfolge als einen einzigen Literalnamen zu behandeln; Ohne sie würde es „Mitwirkende“ als Nachnamen analysieren und den Rest auf „O. Mitwirkende“ abkürzen. Das „howpublished“-Feld ist der übliche Ort für eine URL im klassischen BibTeX, und das Umschließen der Adresse in „\url{...}“ setzt sie in Monospace-Schriftart und ermöglicht einen sauberen Zeilenumbruch (laden Sie dazu das Paket „url“ oder „hyperref“). Das Feld „Notiz“ enthält das Zugriffsdatum, das wichtig ist, da sich Webinhalte ändern und verschwinden. Anhand dieses Datums erfahren die Leser, welche Version der Seite Sie tatsächlich gesehen haben.

## Die biblatex-Alternative: @online

Wenn Ihr Dokument biblatex verwendet, gibt es einen speziellen Typ. Ein „@online“-Eintrag benötigt die richtigen Felder „url“ und „urldate“, sodass dieselbe Quelle zu „url = {https://oleafly.com}“ und „urldate = {24.07.2026}“ wird und der Stil das Zugriffsdatum für Sie formatiert. Bevorzugen Sie „@online“, wenn der Bibliografiestil dies unterstützt, und greifen Sie auf „@misc“ zurück, wenn Sie mit einer klassischen „.bst“-Datei kompatibel bleiben müssen. Die Unterschiede zwischen den beiden Systemen sind in [Classic BibTeX oder biblatex](/learn/bibtex-vs-biblatex/) dargelegt.

## Datensätze und Software

Datensätze und Code-Releases verdienen mehr als eine bloße URL, wenn ein DOI vorhanden ist. Repositories wie Zenodo und Figshare prägen DOIs, sodass die Zitierung jedes einzelne Hosting-Setup überdauern kann. Geben Sie den DOI in ein „doi“-Feld oder in „howpublished“ als „\url{https://doi.org/10.5281/...}“ für klassische Stile ein. Fügen Sie bei der Versionierung des Artefakts einen „Versionshinweis“ hinzu, da „der Datensatz“, den ein Leser in fünf Jahren herunterlädt, möglicherweise nicht der von Ihnen analysierte ist. Viele Projekte veröffentlichen auch ein bevorzugtes Zitat, oft in einer „CITATION.cff“-Datei im Repository. Dies zu verwenden ist sowohl höflicher als auch genauer, als die Felder selbst zu erraten.

## Videos und andere seltsame Quellen

Geben Sie für ein Video den Kanal oder Ersteller unter „Autor“, den Videotitel unter „Titel“, die Plattform und URL unter „howpublished“ und das Upload-Jahr unter „year“ sowie Ihr Zugriffsdatum unter „note“ ein. Die allgemeine Regel für alles Ungewöhnliche ist dieselbe: Halten Sie fest, wer es gemacht hat, wie es heißt, wo ein Leser es finden kann und wann Sie gesucht haben, und „@misc“ trägt das alles sicher durch jeden Stil.