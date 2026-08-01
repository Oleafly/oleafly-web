---

title: "Wirtschafts- und Sozialwissenschaften: Regressionstabellen, die von Zeitschriften akzeptiert werden"
description: "Booktabs, Threeparttable, Siunitx Stars, Notizen unter Schätzungen, Biblatex-Gewohnheiten und Arbeitspapierversionierung für Wirtschaft, Politikwissenschaft und Soziologie."
date: 2026-06-26
tags: [economics, social-science, tables]
---

Die empirische Sozialwissenschaft lebt und stirbt von Tabellen. Eine falsch ausgerichtete Dezimalzahl oder ein
Ein fehlender Signifikanzstern kann einen Überarbeitungs- und Neuvorlagezyklus zum Scheitern bringen, in dem es nichts gab
was mit Ihrer Identifikationsstrategie zu tun hat. Zeitschriften legen großen Wert auf Lesbarkeit
ebenso wie Koeffizienten.

Was folgt, richtet sich an Studenten und RAs, die aus Stata oder R exportieren und dann bereinigen
LaTeX von Hand.

## booktabs ist nicht optional

Vertikale Linien und doppelte horizontale Linien sehen aus wie Word aus den 1990er Jahren. Benutze die drei
horizontale Regeln von `booktabs`:

```latex
\usepackage{booktabs}
\begin{tabular}{lccc}
  \toprule
  & (1) & (2) & (3) \\
  \midrule
  Treatment & 0.12 & 0.09 & 0.08 \\
  \bottomrule
\end{tabular}
```

Siehe [Drei-Regel-Tabellen](/learn/booktabs-beautiful/). Export aus R
(„modelsummary“, Tools im „estout“-Stil, älteres „stargazer“) oder Stata zu LaTeX
Fragmente, dann reinigen Sie die Kopfzeile selbst. Automatisch generierte Header sind
meist zu breit oder zu kryptisch für das endgültige PDF.

## Notizen unter der Tabelle, keine zufälligen Fußnoten

„Threeparttable“ behält die gleiche Breite der tabellarischen Beschriftung und der Notizen bei:

```latex
\begin{table}
\begin{threeparttable}
  \caption{Main results}\label{tab:main}
  \begin{tabular}{...} ... \end{tabular}
  \begin{tablenotes}
    \small
    \item Notes: Robust standard errors in parentheses.
    Sample is ... Fixed effects: ...
  \end{tablenotes}
\end{threeparttable}
\end{table}
```

Geben Sie die Stichprobengröße, feste Effekte, geclusterte SE-Notizen und den Signifikanzstern ein
Legende hier. Hängen Sie keine Fußnote an eine einzelne Zelle, die nur einige Leser lesen
werde es merken. Panel-Beschriftungen (A/B) gehören in die Beschriftung oder in die durchsichtigen Mittellinien
Text, nicht in einer Legende im Abbildungsstil, die nie im PDF erscheint.

## Numerische Spalten und Bedeutungssterne

„siunitx“-Spaltentypen („S“) werden am Dezimalpunkt ausgerichtet. Das allein macht schon einen
Die Ergebnistabelle sieht gewollt aus. Sterne brechen reine Zahlenspalten, also Sie
benötigen normalerweise ein benutzerdefiniertes Format oder eine Textspalte. Häufige Muster:

Geben Sie Koeffizienten und SEs in separaten Zeilen an (Standard in Econ) oder wickeln Sie Sterne ein
die Ausrichtung funktioniert also immer noch (`0,012^{***}` mit einem dedizierten Spaltentyp).

Seien Sie tabellenübergreifend konsistent: gleiche Sternschwellenwerte, gleicher SE-Stil, gleiche Anzahl
von Dezimalstellen für die gleiche Metrik. Gutachter vergleichen Tabelle 2 mit Tabelle 3
Zweck.

Ein visueller erster Entwurf ist in Ordnung. Der Browser
[Tabellengenerator](/tools/table-generator/) kann Struktur skizzieren; das Finale
Die Tabelle sollte weiterhin „Booktabs“ und Ihre SE-Notizen durchgehen.

## Von der Regressionssoftware bis zur Kameratauglichkeit

Eine typische Schleife sieht so aus. Frieren Sie das Schätzungsskript und den Seed ein. Exportieren Sie a
LaTeX-Fragment oder CSV der Schätzungen. Legen Sie es in eine stabile Tischschale
Etiketten („tab:main“, „tab:robust“). Schreiben Sie die Überschrift so, dass ein Skimmer sie kennt
abhängige Variable, Stichprobe und Schätzer, ohne die Notizen zweimal lesen zu müssen.
Kompilieren Sie überfüllte Boxen und korrigieren Sie sie dann durch Ausschneiden von Spalten. nur als Letztes drehen
Resort.

Wenn eine Tabelle länger als eine Seite ist, wechseln Sie zur „Longtable“ (oder zu geteilten Panels).
vor der Deadline-Woche, nicht nachdem sich die Zeitschrift über 7pt-Schriftarten beschwert hat.

## Zitate: Autorenjahr ist der Dialekt

Die meisten Veranstaltungsorte für Wirtschaft und Politik erwarten ein Autorenjahr. `biblatex` mit
„style=authoryear“ (oder der Stil der Zeitschrift) ist auf lange Sicht einfacher als Kämpfen
„.bst“-Dateien. Wenn das Labor immer noch „natbib“ verwendet, ist das in Ordnung; einfach nicht mischen
beide Stapel in einer Präambel. Übersicht:
[BibTeX oder biblatex](/learn/bibtex-vs-biblatex/).

Die Schlüssel sollten stabil sein („Autor:Jahr:Schlüsselwort“). Wiederexport aus Zotero unter
Mit neuen Schlüsseln in der Mitte des Projekts unterbricht „\cite“ die Woche der Einreichung. Validieren
die „.bib“ für fehlende Jahrgänge und Zeitschriften:
[BibTeX-Validator](/tools/bibtex-validator/).

## Arbeitspapiere und SSRN

Die Arbeitspapierversionen ändern sich monatlich. Behalten Sie das Datum der Titelseite in einem Makro bei:

```latex
\newcommand{\paperdate}{June 2026}
```

Stoßen Sie darauf, wenn Sie das PDF erneut exportieren. Die lokale Git-Geschichte ist ehrlicher als
„final_final_v7.pdf“ auf einem freigegebenen Laufwerk. Festschreiben, wenn die Haupttabelle festgelegt ist
kompiliert; Markieren oder benachrichtigen Sie die Einreichungsversion explizit.

Ein Forschungsredakteur, der das Projekt als echtes Git-Repo (Checkpoints) behandelt
nach dem Kompilieren, Wiederherstellen, optional privatem GitHub) entspricht der empirischen Arbeit
Code bereits versioniert. Das Papier und die Schätzungsskripte sollten nicht überleben
unter verschiedenen Backup-Gewohnheiten.

## Identifikation und Tabellenethik (Kurzfassung)

LaTeX kann ein schwaches Design nicht reparieren, aber es kann ein starkes lesbar machen.
Geben Sie in der Bildunterschrift den Schätzer und die Stichprobe an. Verheimlichen Sie die Tatsache nicht
Spalte (3) fügt die Hälfte der Stichprobe in eine Fußnote ein, die niemand liest. Wenn du es zeigst
Robustheitstabellen behalten daher die gleiche Reihenfolge der abhängigen Variablen wie die Haupttabelle bei
Leser können scannen.

## Checkliste vor der Einreichung

Dinge, die Menschen spät beißen:

- Tabellen mit drei Regeln; keine vertikalen Regeln.
- Dezimalausrichtung; konsistente Sterne und SE-Noten.
- In der Bildunterschrift sind Ergebnis, Stichprobe und Schätzer aufgeführt.
- Etiketten stabil; Der Text zitiert „\ref{tab:...}“.
- Der Stil der Bibliographie passt zum Veranstaltungsort. `.bib` validiert.
- Das Datum des Arbeitspapiers und das Git-Commit stimmen mit dem überein, was Sie hochgeladen haben.

## Replikationspakete

Immer mehr Zeitschriften wollen Code und Daten. Bewahren Sie Tabellenexportskripte neben dem Papier auf
Repo (oder mit einem Commit-Hash verknüpft). Wenn sich ein Koeffizient ändert, weil der
Wenn sich das Reinigungsskript geändert hat, generieren Sie das LaTeX-Fragment neu und übertragen Sie beide erneut. A
Eine Tabelle, die nicht reproduziert werden kann, stellt eine Belastung dar, auch wenn sie sauber aussieht.

## Beamer für Seminare

Verwenden Sie dieselben „Booktabs“-Fragmente in Folien wieder, wenn Sie können, oder exportieren Sie PDF
Ausschnitte der Tische. So können Sie Zahlen von Hand in ein Dia-Deck umwandeln
Seminarfolien stimmen nicht mit der Arbeit überein.

Machen Sie die Tabellen richtig und die Identifizierungsstrategie erhält faires Gehör. Erhalten
Sie sind falsch und Sie verbringen eine Runde damit, über die Formatierung zu streiten.