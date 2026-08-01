---

title: "Zahlen und Zeiger für Gleichungen"
description: "label, ref, eqref und nummerieren Sie nur die Zeilen, die Sie meinen."
category: "equation-craft"
order: 6
level: "beginner"
tags: ["math", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Zahlen und Zeiger für Gleichungen

Die Nummerierung einer Gleichung ist ein Versprechen, dass Sie später darauf zurückgreifen werden. LaTeX erfüllt beide Hälften dieses Versprechens: Die Umgebung „equation“ weist die Zahl zu, und das Beschriftungssystem ermöglicht es Ihnen, von überall im Dokument darauf zu zeigen, ohne die Zahl jemals selbst eingeben zu müssen.

```latex
\begin{equation}
 \label{eq:bayes}
 p(\theta \mid y) \propto p(y \mid \theta)\, p(\theta)
\end{equation}
As shown in \eqref{eq:bayes}, ...
```

## Etiketten und Referenzen

„\begin{equation}“ nummeriert die angezeigte Zeile. „\label{eq:bayes}“ fügt der Nummer den Namen „eq:bayes“ hinzu. Den Namen können Sie selbst wählen, und ein „eq:“-Präfix sorgt dafür, dass sich Gleichungsbezeichnungen von Abbildungen und Tabellen unterscheiden. Um es zu zitieren: „\ref{eq:bayes}“ gibt die bloße Zahl aus, während „\eqref{eq:bayes}“ aus „amsmath“ sie in Klammern setzt, um der Darstellung der Zahl neben der Gleichung zu entsprechen. Bevorzugen Sie „\eqref“ für Gleichungen, damit die beiden Stile übereinstimmen.

Da Zahlen bei einem Durchlauf aufgezeichnet und beim nächsten gelesen werden, zeigt eine neue Kompilierung bis zum nächsten Durchlauf „??“ an. [Fragezeichen statt Zahlen](/learn/equations-show-qq/) deckt diesen Zyklus ab.

Wenn eine angezeigte Gleichung nie referenziert wird, nummerieren Sie sie nicht. Verwenden Sie stattdessen „\[ ... \]“ oder die mit Sternchen versehene „Gleichung*“, damit Zahlen nur die Zeilen markieren, die ein Leser möglicherweise erneut finden muss.

## Nummerierung einiger Zeilen in der Ausrichtung

Mehrzeilige Ableitungen in „align“ nummerieren standardmäßig jede Zeile, was selten das ist, was Sie wollen. Zwei Befehle passen das pro Zeile an:

```latex
\begin{align}
 a &= b \label{eq:a} \\
 c &= d \notag \\
 e &= f \label{eq:e}
\end{align}
```

„\notag“ unterdrückt die Nummer in seiner Zeile, daher bleibt hier der Zwischenschritt ohne Nummer, während die erste und letzte Zeile ihre Nummern und Beschriftungen behalten. Fügen Sie jedes „\label“ in der Zeile, die es benennt, vor dem „\\“ ein, damit es an die richtige Nummer gebunden wird. Die Alles-oder-Nichts-Abkürzung ist „align*“, die nichts nummeriert. Die gesamte Familie der mehrzeiligen Umgebungen wird in [mehrzeilige Gleichungen, die sich aneinanderreihen](/learn/align-equations/) behandelt.

Der häufigste Fehler besteht darin, die Literalzahl zu schreiben, wie in „siehe Gleichung 3“, die kaputt geht, sobald Sie eine Gleichung darüber einfügen. Gehen Sie immer ein Label durch und lassen Sie LaTeX bei jeder Kompilierung neu nummerieren. Sie können die Nummerierungsaktualisierung live verfolgen, während Sie „\notag“ im [Playground](/live/) hinzufügen und entfernen.