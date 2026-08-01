---

title: "Vektoren und fette Symbole"
description: "mathbf, Boldsymbol und ein konsistentes Vektormakro."
category: "notation-depth"
order: 5
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Vektoren und fettgedruckte Symbole

In vielen Feldern werden Vektoren und Matrizen fett dargestellt: **x** für einen Vektor, **A** für eine Matrix, fettes Beta für einen Koeffizientenvektor. In LaTeX gibt es zwei verschiedene Fettdruck-Befehle für Mathematik, die nicht austauschbar sind. Wenn man weiß, nach welcher man greifen muss, und die Wahl in ein Makro verpackt, bleibt die Notation während der gesamten Arbeit konsistent.

## Die beiden Befehle

```latex
\mathbf{x} % upright bold (often matrices)
\boldsymbol{\beta} % bold italic Greek (amsmath)
```

„\mathbf“ ändert sein Argument in eine aufrechte fette römische Schriftart. Es funktioniert gut für lateinische Buchstaben, sodass Sie mit „\mathbf{A}“ ein solides, aufrechtes, fettes A erhalten, das in vielen Texten für Matrizen verwendet wird. Die Einschränkung besteht darin, dass es nur Buchstaben und Ziffern abdeckt: „\mathbf{\beta}“ macht nichts Sinnvolles, da die fette römische Schriftart einfach keine griechischen Glyphen enthält und die Beta unverändert gedruckt wird.

„\boldsymbol“, bereitgestellt von „amsmath“ (technisch gesehen von der „bm“-ähnlichen Maschinerie in „amsbsy“, die „amsmath“ lädt), macht jedes Symbol, das Sie ihm geben, fett und behält dabei seine Form bei. „\boldsymbol{\beta}“ erzeugt ein fettes kursives Beta und „\boldsymbol{x}“ erzeugt ein fettes kursives x, das dem schrägen Stil gewöhnlicher mathematischer Variablen entspricht. Wenn Ihre Konvention vorsieht, dass Vektoren fett und kursiv dargestellt werden, ist dies der gewünschte Befehl.

Die praktische Aufteilung ist also: aufrechte fette lateinische Buchstaben, verwenden Sie „\mathbf“; alles Griechische oder Fettgedruckte, das kursiv bleiben soll, verwenden Sie „\boldsymbol“.

## Makros einmalig definieren

Anstatt diese Befehle im gesamten Dokument einzugeben, definieren Sie semantische Makros in der Präambel:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
```

Jetzt schreiben Sie „\vect{x}“ für einen Vektor und „\mat{A}“ für eine Matrix. „[1]“ besagt, dass jedes Makro ein Argument akzeptiert, und „#1“ ist der Ort, an dem dieses Argument landet. Die Auszahlung kommt später: Wenn eine Zeitschrift erfordert, dass Vektoren aufrecht fett statt fett und kursiv dargestellt werden, bearbeiten Sie eine Zeile so, dass „\vect“ „\mathbf“ umschließt, und jeder Vektor im Papier wird bei der nächsten Kompilierung aktualisiert. Das ist besser als das Suchen und Ersetzen in zweihundert Gleichungen.

Makros machen die Absicht auch in der Quelle lesbar. In sechs Monaten sagt Ihnen „\vect{w}“, dass w ein Vektor ist; Ein bloßes „\boldsymbol{w}“ sagt Ihnen nur, dass es fett ist.

## Ein häufiger Fehler

Fälschen Sie kein fettes Griechisch mit „\textbf“ in der Mathematik und verwenden Sie nicht „\mathbf“ dafür und gehen Sie davon aus, dass es funktioniert hat. Kompilieren und genau hinschauen: Eine ungefettete Beta neben fett gedruckten Nachbarn ist auf dem Bildschirm leicht zu übersehen und in gedruckter Form deutlich zu erkennen. Wenn Sie Kandidaten schnell ins Auge fassen möchten, fügen Sie eine Zeile wie „\boldsymbol{\beta} \mathbf{\beta} \beta“ in den [Live-Spielplatz](/live/) ein und vergleichen Sie die drei nebeneinander. Um ganze Gleichungen, einschließlich Symbolen wie „\sum“, fett darzustellen, schauen Sie sich den „\bm“-Befehl des „bm“-Pakets an, der mehr Symbolklassen als „\boldsymbol“ verarbeitet.

Fett im Fließtext ist ein anderes Thema mit anderen Befehlen; siehe [Hervorhebung im Text](/learn/bold-italic/).