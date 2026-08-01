---

title: "Natbib-Gewohnheiten vs. Biblatex-Befehle"
description: "Zitate in Klammern und im Text sowie die Namen, die sie ersetzen."
category: "cite-your-sources"
order: 8
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Natbib-Gewohnheiten vs. Biblatex-Befehle

Für die Zitierung nach Autorenjahr sind zwei Varianten des Zitierbefehls erforderlich. Manchmal sind die Autoren Teil Ihres Satzes, wie in „Knuth (1984) führte die literarische Programmierung ein.“ Manchmal steht das Zitat in Klammern nebenbei, wie in „Literate programming mixes code and prosa (Knuth, 1984)“. Einfaches „\cite“ kann diese Unterscheidung nicht treffen, weshalb das Paket „natbib“ existiert und warum biblatex seinen eigenen Satz von Namen für dieselben Ideen liefert. Wenn Sie das eine gelernt haben und eine Vorlage für das andere erhalten, ist diese Seite die Übersetzungstabelle.

## Die Natbib-Befehle

```latex
\usepackage{natbib}
\citet{knuth84}  % Knuth (1984)
\citep{knuth84}  % (Knuth, 1984)
\citep*{knuth84} % (Knuth, Lamport, and Mittelbach, 1984): full author list
```

Die Gedächtnisstütze lautet, dass „\citet“ ein *textuelles* Zitat ist, das als Teil des Satzes gelesen wird, während „\citep“ ein *in Klammern gesetztes* Zitat ist. Bei den markierten Varianten wird die vollständige Autorenliste anstelle von „et al.“ gedruckt, was gelegentlich beim ersten Zitieren eines Werks erforderlich ist. natbib bietet auch „\citeauthor“ nur für die Namen, „\citeyear“ nur für das Jahr und ein optionales Argument für Seitenzahlen, wie in „\citep[p.~42]{knuth84}“. natbib ist ein Paket aus der Präprozessor-Ära: Es funktioniert mit klassischem BibTeX und einem kompatiblen „.bst“-Stil wie „plainnat“ oder „apalike“.

## Die biblatex-Äquivalente

biblatex deckt dasselbe Gebiet mit unterschiedlichen Namen ab. „\textcite{knuth84}“ erzeugt die Textform „Knuth (1984)“, „\parencite{knuth84}“ erzeugt die Klammer „(Knuth, 1984)“ und einfaches „\cite{knuth84}“ erzeugt ein bloßes Zitat, dessen genaues Aussehen vom geladenen Stil abhängt. Auch für den Rest gibt es direkte Entsprechungen: „\citeauthor“, „\citeyear“ und Prenotes und Postnotes für Dinge wie Seitenzahlen, geschrieben „\parencite[see][p.~42]{knuth84}“. Wenn das Muskelgedächtnis das Problem ist, verfügt biblatex sogar über die Paketoption „natbib=true“, die „\citet“ und „\citep“ als Aliase definiert, was die Migration nahezu schmerzlos macht.

## Migrieren eines Dokuments von Natbib nach Biblatex

Ihre „.bib“-Datei benötigt keinerlei Änderungen. Beide Systeme lesen dieselbe Datenbank. Die Migration betrifft nur die Präambel und den Build. Entfernen Sie „\usepackage{natbib}“ und die Zeile „\bibliographystyle“, laden Sie dann „\usepackage[backend=biber,style=authoryear]{biblatex}“ und verweisen Sie es mit „\addbibresource{refs.bib}“ auf Ihre Datenbank. Ersetzen Sie „\bibliography{refs}“ am Ende des Dokuments durch „\printbibliography“. Stellen Sie abschließend sicher, dass der Build „biber“ anstelle von „bibtex“ ausführt, da biblatex seine Daten in einem anderen Format speichert und das alte Backend stillschweigend nichts produziert. Wenn Sie den Textkörper lieber nicht berühren möchten, behalten Sie die Natbib-Befehlsnamen über die Kompatibilitätsoption bei und ändern nur die Präambel.

## Welches soll ich wählen?

Wenn die Journalvorlage Natbib bereits lädt, bleiben Sie dabei. Der Kampf gegen eine Klassenakte lohnt sich selten. Für neue Dokumente, die Sie auswählen, ist biblatex flexibler und verarbeitet Unicode besser. Der breitere Vergleich findet in [Classic BibTeX oder biblatex](/learn/bibtex-vs-biblatex/) statt, und das anschließende Wechseln der Stile wird in [Numerisch, Autorenjahr, Zeitschriftenstile](/learn/change-citation-style/) behandelt.