---

title: "Stellen Sie den Artikel auf GitHub"
description: "Init, Aux-Dateien ignorieren, privates Repo, Gewohnheiten, die Co-Autoren-Zusammenführungen vernünftig halten."
category: "local-studio"
order: 3
level: "intermediate"
tags: ["git", "github"]
featured: false
updated: 2026-07-25
---

# Stellen Sie den Artikel auf GitHub

Ein LaTeX-Manuskript besteht aus reinem Text und eignet sich daher ideal für Git. Jeder Entwurf wird zu einem Commit, zu dem Sie zurückkehren können, jede Änderung ist als Unterschied auf Zeilenebene sichtbar und GitHub bietet Ihnen eine Offsite-Kopie sowie eine Möglichkeit für Co-Autoren, den aktuellen Status abzurufen. Nichts davon erfordert fortgeschrittenes Git. Eine Arbeit benötigt vielleicht fünf Befehle, die konsequent verwendet werden.

## Die Ersteinrichtung

```bash
git init
# add a .gitignore for *.aux *.log *.out *.toc *.synctex.gz
git add main.tex refs.bib figures/
git commit -m "Initial manuscript"
gh repo create my-paper --private --source=. --push
```

Führen Sie dies einmal im Projektordner aus. Der Schritt „.gitignore“ ist wichtiger, als er aussieht. Bei jeder Kompilierung werden die Dateien „.aux“, „.log“, „.out“, „.toc“ und „.synctex.gz“ neu generiert. Durch das Festschreiben werden Ihre tatsächlichen Änderungen unter Maschinenlärm vergraben und es entstehen sinnlose Zusammenführungskonflikte zwischen Co-Autoren. Verfolgen Sie nur das, was Sie verfassen: die „.tex“-Quellen, die „.bib“-Datenbank, Abbildungen und alle Klassen- oder Stildateien, die Ihnen der Veranstaltungsort zur Verfügung gestellt hat. Das PDF ist ebenfalls ein Build-Produkt. Die meisten Teams lassen es weg und erstellen es lokal neu, obwohl das Anhängen eines solchen an eine getaggte Version eine sinnvolle Möglichkeit ist, eine eingereichte Version einzufrieren. Halten Sie das Repository privat, bis das Werk öffentlich ist. Ein unveröffentlichtes Manuskript ist nicht indexierbar.

## Gewohnheiten, die Co-Autoren bei Verstand halten

Nehmen Sie bei jedem Commit eine logische Änderung vor, z. B. „Einleitung zu Abschnitt 3 überarbeiten“ oder „Ablationstabelle hinzufügen“. Der Verlauf liest sich dann wie eine Geschichte des Papiers, und eine fehlerhafte Bearbeitung kann ohne Kollateralschaden rückgängig gemacht werden. Ziehen Sie, bevor Sie mit dem Schreiben beginnen, und drücken Sie, wenn Sie aufhören. Zusammenführungskonflikte nehmen mit der Zeit zu, die Zweige voneinander getrennt verbringen. Erzwingen Sie niemals einen gewaltsamen Push eines gemeinsamen Zweigs, nachdem Co-Autoren ihn gezogen haben: Das schreibt die Geschichte unter ihren Füßen neu. Halten Sie große binäre Artefakte (Datensätze, Videos) aus dem Papier-Repository fern. Verknüpfen Sie mit einem Archiv oder verwenden Sie ein separates Daten-Repository. Git speichert jede Version jeder Binärdatei für immer.

Eine LaTeX-spezifische Angewohnheit: Das Schreiben eines Satzes pro Quellzeile macht Unterschiede deutlich lesbarer, da eine Ein-Wort-Bearbeitung als einzeilige Änderung und nicht als umgebrochener Absatz angezeigt wird.

## Wie Oleafly dazu passt

Jedes Oleafly-Projekt ist ein gewöhnlicher Ordner auf der Festplatte, daher funktionieren diese Befehle unverändert darauf. Die App kann nach jeder erfolgreichen Kompilierung auch automatisch einen Git-Commit erstellen, wodurch Sie ein fein abgestimmtes Sicherheitsnetz zwischen Ihren absichtlichen Commits erhalten. Siehe [Git-Verlauf](/docs/git-history/). Informationen zu darauf aufbauenden Zusammenarbeitsmustern, einschließlich Patch-Austausch und Kapitelbesitz, finden Sie unter [Co-Autor ohne Live-Cursor](/learn/offline-collaboration/).