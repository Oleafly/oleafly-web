---

title: "Ableitungen und Integrale"
description: "Gewöhnliche und partielle Ableitungen, bestimmte Integrale, dünne Räume vor Differentialen."
category: "notation-depth"
order: 2
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Ableitungen und Integrale

Mit der Analysis-Notation verdient LaTeX seinen Lebensunterhalt. Gestapelte Ableitungsbrüche, Integralzeichen mit Grenzwerten und Punkte über Variablen sind jeweils ein oder zwei Befehle. Diese Lektion behandelt die Handvoll Befehle, die fast jede Ableitung und jedes Integral erzeugen, die Sie jemals schreiben werden, sowie die Gewohnheit mit kleinen Abständen, die polierte Papiere von groben Entwürfen trennt.

## Derivate

```latex
\frac{dy}{dx}
\frac{\partial f}{\partial x}
\nabla f \quad \nabla^2 f
f'(x) \quad \dot{x}
```

Eine gewöhnliche Ableitung ist nur ein Bruch: „\frac{dy}{dx}“ stapelt „dy“ über „dx“. Tauschen Sie für partielle Ableitungen das „d“ gegen „\partial“ aus, wodurch das geschweifte Teilsymbol ausgegeben wird. „\frac{\partial f}{\partial x}“ ist die Standardform. Teiltöne höherer Ordnung folgen dem gleichen Muster, zum Beispiel „\frac{\partial^2 f}{\partial x \partial y}“.

„\nabla“ gibt das Verlaufssymbol an, und da es ein gewöhnliches Symbol ist, können Sie es wie alles andere erhöhen: „\nabla^2 f“ für den Laplace-Operator. Für eine kompakte Notation verwendet „f“(x)“ direkt den Apostroph-Schlüssel und LaTeX wandelt ein oder mehrere „“-Zeichen in ordnungsgemäß erhöhte Primzahlen um. Newtons Punktnotation für Zeitableitungen ergibt sich aus den Akzentbefehlen „\dot{x}“ und „\ddot{x}“, die einen oder zwei Punkte über dem Argument platzieren.

Eine Stilwahl: Einige Zeitschriften möchten, dass das Differential „d“ aufrecht steht und „\mathrm{d}“ geschrieben wird. Wenn dies bei Ihnen der Fall ist, definieren Sie „\newcommand{\dd}{\mathrm{d}}“ einmal in der Präambel und schreiben Sie „\frac{\dd y}{\dd x}“, damit Sie die Auswahl später umkehren können.

## Integrale

```latex
\int_a^b f(x)\,dx
\iint_D f\,dA
```

„\int“ ist das Integralzeichen, und die bekannte tiefgestellte und hochgestellte Syntax fügt die Grenzen hinzu: „_a“ für die untere Grenze, „^b“ für die obere. In der Inline-Mathematik liegen die Grenzen neben dem Vorzeichen, um die Linie kompakt zu halten; In der Darstellungsmathematik stehen sie immer noch neben dem Vorzeichen für Integrale (im Gegensatz zu Summen), was die Standardkonvention ist. Doppelte und dreifache Integrale erhalten ihre eigenen Befehle, „\iint“ und „\iiint“, die die wiederholten Zeichen korrekt platzieren, zusammen mit „\oint“ für Konturintegrale.

Das „\“ vor „dx“ ist ein dünnes Leerzeichen. Ohne sie führt „f(x)dx“ den Integranden direkt in das Differential ein und das Auge muss sie entwirren. Der dünne Raum ist eine weit verbreitete Konvention, also machen Sie es sich zur Gewohnheit: Integrand, dann „\“, dann das Differential.

## Versuchen Sie es und ein häufiger Fehler

Diese Schnipsel werden gerendert, während Sie den [Live-Spielplatz](/live/) eingeben. Dies ist eine schnelle Möglichkeit, einen abgeleiteten Stapel zu überprüfen, bevor er in ein Dokument eingefügt wird. siehe [Grundlagen des Mathematikmodus](/learn/math-mode/), wenn die Trennzeichen „$“ und „\[“ noch neu sind.

Der häufigste Fehler hierbei ist die Eingabe von Ableitungen im „d/dx“-Stil mit einem Schrägstrich in der Anzeigemathematik, wo ein gestapeltes „\frac“ gewünscht war, oder das Vergessen von geschweiften Klammern bei Mehrzeichengrenzen: „\int_a^b+1“ fügt nur das „b“ in den hochgestellten Index ein. Schreiben Sie „\int_a^{b+1}“, damit der gesamte Ausdruck ausgelöst wird.