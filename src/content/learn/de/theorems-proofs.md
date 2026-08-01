---

title: "Theorem- und Beweisblöcke"
description: "amsthm-Stile, gemeinsame Zähler, End-of-Proof-Markierungen."
category: "field-kits"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Theorem- und Beweisblöcke

Mathematische Schriften basieren auf nummerierten Aussagen: Sätzen, Lemmata und Definitionen, die jeweils vom Text abgesetzt und nummeriert sind, damit spätere Beweise sie zitieren können. Das Paket „amsthm“ stellt die Maschinerie bereit. Sie deklarieren die Arten von Blöcken, die Ihr Dokument benötigt, einmal in der Präambel und verwenden sie dann als normale Umgebungen.

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]

\begin{theorem}[Optional name]
 Statement.
\end{theorem}
\begin{proof}
 Argument. \qedhere
\end{proof}
```

## Deklarieren der Umgebungen

„\newtheorem{theorem}{Theorem}[Abschnitt]“ erstellt eine „Theorem“-Umgebung. Das erste Argument ist der Umgebungsname, den Sie eingeben werden, das zweite ist der Überschriftentext, der gedruckt wird, und das abschließende „[Abschnitt]“ verknüpft die Nummerierung mit Abschnitten, sodass der dritte Satz von Abschnitt 2 Satz 2.3 ist und der Zähler bei jedem neuen Abschnitt zurückgesetzt wird.

„\newtheorem{lemma}[theorem]{Lemma}“ platziert das optionale Argument an der anderen Position, wo es etwas anderes bedeutet: „[theorem]“ besagt, dass Lemmata den Theoremzähler gemeinsam nutzen, anstatt ihren eigenen zu behalten. Ein gemeinsamer Zähler erzeugt eine einzelne Sequenz, Satz 2.1, gefolgt von Lemma 2.2. Das ist einfacher zu verfolgen als parallele Folgen, bei denen sowohl Lemma 2.1 als auch Satz 2.1 existieren.

„\theoremstyle“ legt das Aussehen jeder darauf folgenden Deklaration fest. Der „plain“-Stil druckt den Hauptteil kursiv, die traditionelle Behandlung von Theoremen, Lemmata und Sätzen. Der „Definitions“-Stil hält den Körper aufrecht, was zu Definitionen und Beispielen passt. Ein dritter Stil, „Bemerkung“, ist noch leichter und eignet sich für Notizen und Beobachtungen. Gruppieren Sie Ihre Deklarationen nach dem Stil, den sie jeweils verwenden sollten.

## Verwendung der Blöcke

Das optionale Argument der Umgebung gibt einen Namen nach der Überschrift aus, sodass „\begin{theorem}[Optionaler Name]“ etwa Theorem 2.4 (Fubini) ergibt. Die „Proof“-Umgebung druckt eine kursive Proof-Überschrift und schließt mit der End-of-Proof-Markierung, dem kleinen Quadrat, das bündig nach rechts gesetzt ist.

„\qedhere“ positioniert dieses Quadrat neu, wenn der Beweis nicht in einem normalen Text endet. Wenn die letzte Zeile eines Beweises eine angezeigte Gleichung ist, würde die automatische Markierung auf eine leere Zeile darunter fallen. Wenn Sie „\qedhere“ in die Anzeige schreiben, wird das Quadrat auf die eigene Zeile der Gleichung gesetzt. Wenn ein Beweis wie im Beispiel im Klartext endet, ist der Befehl harmlos, aber unnötig.

Theorem-Blöcke sind nummerierte Objekte wie alle anderen, daher funktionieren „\label{thm:main}“ innerhalb der Umgebung und „Theorem~\ref{thm:main}“ im Text mit den üblichen Zwei-Durchgangs-Regeln, die in [Zahlen und Zeiger für Gleichungen](/learn/number-equations/) beschrieben sind. Der häufigste Deklarationsfehler besteht darin, jede Umgebung unter „\theoremstyle{plain}“ zu platzieren, wodurch Definitionen mit mehreren Absätzen kursiv gesetzt werden. Behalten Sie Definitionen und Beispiele im Stil „Definition“.