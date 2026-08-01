---

title: "Die Figur, die aus dem Abschnitt flieht"
description: "Schwimmbarrieren, Größe und Platzierung als letzter Ausweg."
category: "float-surgery"
order: 5
level: "intermediate"
tags: ["figures", "errors"]
featured: false
updated: 2026-07-25
---

# Die Figur, die aus dem Abschnitt flieht

Sie fügen eine Zahl am Ende von Abschnitt 4 ein und sie wird in der Mitte von Abschnitt 5 gedruckt oder am Ende des Kapitels mit drei anderen gestapelt. Zahlen sind Gleitkommazahlen: LaTeX behandelt ihre Position in der Quelle als Startpunkt und nicht als Ziel und verschiebt sie, um die Seiten voll zu halten. Auch die Floats müssen in der richtigen Reihenfolge erscheinen, sodass eine Figur, die nicht platziert werden kann, alle Figuren dahinter blockiert. Das allgemeine Platzierungssystem wird in [wo Floats tatsächlich landen](/learn/position-figures/) behandelt. Diese Lektion ist die Eskalationsleiter für den Fall, dass ein Float an einem Ort landet, den Sie nicht akzeptieren können.

## Schritt eins: Überprüfen Sie die Platzierungsoptionen

Stellen Sie sicher, dass in der Umgebung „[htbp]“ steht und nicht nur „[h]“. Die Buchstaben gewähren die Erlaubnis, den Float hier, oben auf einer Seite, unten oder auf einer speziellen Float-Seite zu platzieren. Das Gewähren von nur „h“ ist die häufigste Ursache für eine außer Kontrolle geratene Zahl, denn wenn die aktuelle Seite keinen Platz hat, hat LaTeX nirgendwo einen legalen Platz und trägt den Float auf unbestimmte Zeit weiter.

## Schritt zwei: Verschieben Sie den Code

Ein Float kann später als seine Quellposition driften, jedoch nie früher. Wenn die Abbildung zu spät erscheint, verschieben Sie die Umgebung in der Quelle nach oben, idealerweise direkt vor den Absatz, der sein erstes „\ref“ enthält. Diese eine Änderung behebt überraschend viele Platzierungsbeschwerden.

## Schritt drei: Zäunen Sie den Abschnitt ein

Das Paket „placeins“ stellt „\FloatBarrier“ bereit, einen Befehl, der die Platzierung aller ausstehenden Floats erzwingt, bevor der Text fortgesetzt wird:

```latex
\usepackage{placeins}
% ...
\FloatBarrier
\section{Next section}
```

Platzieren Sie die Barriere am Ende eines Abschnitts, damit keine Figur aus diesem Abschnitt in den nächsten gelangen kann. LaTeX fügt möglicherweise zusätzlichen vertikalen Platz ein, um die Floats zu leeren, was in der Nähe eines Abschnittswechsels normalerweise ein akzeptabler Preis ist.

## Schritt vier: der H-Hammer

Das Paket „float“ fügt einen Großbuchstaben „H“ hinzu, der Floating vollständig entfernt:

```latex
\usepackage{float}
\begin{figure}[H]
```

Eine „[H]“-Figur wird genau dort gedruckt, wo sich ihr Code befindet, wie ein großer Absatz. Der Nachteil besteht darin, dass LaTeX die Seite nicht mehr ausbalancieren kann, sodass möglicherweise eine große leere Lücke entsteht, wenn die Abbildung nicht in den verbleibenden Platz passt. Behandeln Sie es als letzten Ausweg für ein oder zwei hartnäckige Schwimmer, nicht als Standard.

## Schritt fünf: Die Figur verkleinern

Sehr große Floats werden zurückgestellt, da auf wenigen Seiten Platz dafür ist. Das Reduzieren von „width=0.9\textwidth“ auf „0.7\textwidth“ oder das Entfernen von Leerzeichen aus der Bilddatei führt oft dazu, dass LaTeX eine Zahl, die es an das Ende des Kapitels verschoben hatte, platziert.

Eine Gewohnheit, die es wert ist, beibehalten zu werden: Führen Sie diese Abstimmung einmal durch, nachdem der Text stabil ist. Mit jedem Absatz, den Sie hinzufügen oder löschen, werden die Seiten neu angeordnet, sodass die Platzierung während des Entwurfs ein Aufwand ist, den Sie wiederholen müssen.