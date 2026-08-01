---

title: "Zeigen Sie auf andere Teile des PDFs"
description: "label und ref, plus cleveref für automatische Namen."
category: "paper-bones"
order: 5
level: "beginner"
tags: ["structure", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Zeigen Sie auf andere Teile des PDFs

Die handschriftliche Eingabe von „siehe Abbildung 3“ ist ein Versprechen, das Sie nicht halten können. Fügen Sie eine Zahl weiter oben in der Arbeit hinzu und jede handgeschriebene Zahl danach, die falsch ist. LaTeX löst dieses Problem mit einem zweiteiligen Mechanismus: „\label“ fügt einem nummerierten Ding einen Namen Ihrer Wahl hinzu und „\ref“ gibt die Nummer aus, die das Ding letztendlich hatte. Sie beziehen sich auf Namen und der Compiler sorgt dafür, dass die Zahlen ehrlich sind.

## Label und Ref

```latex
\section{Methods}\label{sec:methods}
\begin{equation}\label{eq:main} ... \end{equation}
\begin{figure}
 ...
 \caption{...}\label{fig:pipeline}
\end{figure}

See Section~\ref{sec:methods}, Eq.~\eqref{eq:main}, and Figure~\ref{fig:pipeline}.
```

„\label{sec:methods}“ zeichnet die zuletzt zugewiesene Nummer, hier die des Abschnitts, unter dem Schlüssel „sec:methods“ auf. Später gibt „\ref{sec:methods}“ diese Zahl aus, und „\eqref“ ist die amsmath-Variante, die die Klammerkonvention für Gleichungen hinzufügt und „(1)“ statt „1“ ausgibt.

Zwei Details in diesem Beispiel sind sehr wichtig. Erstens muss innerhalb einer Abbildung die Beschriftung nach „\caption“ stehen, da die Überschrift den Abbildungszähler vorantreibt; Eine davor platzierte Beschriftung übernimmt stattdessen stillschweigend die aktuelle Abschnittsnummer. Zweitens ist das „~“ in „Figure~\ref{...}“ ein geschütztes Leerzeichen, das das Wort und seine Zahl in derselben Zeile hält, anstatt „Figure“ eine Zeile beenden und „3“ die nächste beginnen zu lassen.

Die Präfixe „sec:“, „fig:“ und „eq:“ sind reine Konvention. LaTeX erfordert sie nicht, aber sie machen Schlüssel lesbar und ermöglichen die automatische Vervollständigung des Editors, Ihre Beschriftungen nach Typ zu gruppieren.

## Warum siehst du ??

Bei der ersten Kompilierung nach dem Hinzufügen einer Bezeichnung gibt „\ref“ „??“ aus. Die Zahlen werden durch die beim vorherigen Durchlauf geschriebene „.aux“-Datei aufgelöst, sodass ein neues Etikett noch einmal kompiliert werden muss, um angezeigt zu werden. [warum Sie mehr als einmal kompilieren](/learn/compile-to-pdf/) erklärt den Mechanismus. Ein „??“, das zwei aufeinanderfolgende Kompilierungen übersteht, bedeutet fast immer, dass der Schlüssel in „\ref“ nicht mit dem Schlüssel in „\label“ übereinstimmt.

##cleveref schreibt das Wort für Sie

Mit cleveref (nach Hyperref laden):

```latex
\usepackage{cleveref}
\cref{fig:pipeline}
```

„\cref{fig:pipeline}“ gibt „Abbildung 3“ aus, einschließlich des Typnamens, und passt sich an, wenn sich herausstellt, dass es sich bei der Beschriftung stattdessen um eine Tabelle oder eine Gleichung handelt. „\Cref“ schreibt Satzanfänge groß und „\cref{eq:a,eq:b,eq:c}“ komprimiert eine Liste in einen Bereich. Beachten Sie die Ladereihenfolge: cleveref ist eines der wenigen Pakete, die nach [hyperref](/learn/hyperlinks/) stehen müssen, das Gegenteil der üblichen Regel. Übernehmen Sie es frühzeitig. Das Nachrüsten von „\cref“ in ein Papier voller handgeschriebener „Figure~\ref“-Phrasen ist mühsam.