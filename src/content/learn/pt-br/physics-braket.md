---

title: "Notação de Dirac"
description: "pacote de freio para sutiãs, kets e elementos de matriz."
category: "field-kits"
order: 2
level: "intermediate"
tags: ["physics"]
featured: false
updated: 2026-07-25
---

# Notação Dirac

A mecânica quântica escreve os estados como kets, seus duais como bras e os produtos internos como pares entre colchetes. Construir a notação manualmente a partir de `\langle`, `|` e `\rangle` funciona, mas é tedioso e os delimitadores não crescem com o conteúdo. O pacote `braket` fornece comandos que montam a notação e dimensionam tudo para caber.

```latex
\usepackage{braket}
\braket{\psi|\phi}
\braket{\psi|A|\phi}
\set{\vec{x}|x > 0}
```

## O que cada comando faz

`\braket{\psi|\phi}` define o produto interno completo: colchetes angulares na parte externa, uma barra vertical entre os dois estados, todos com altura correspondente. Com duas barras, `\braket{\psi|A|\phi}` torna-se o elemento da matriz do operador A entre os dois estados, a forma usada para valores esperados e cálculos de perturbação. O pacote também fornece `\bra{\psi}` e `\ket{\phi}` para as duas metades por conta própria. Um bare ket é a forma usual de nomear um estado em prosa.

`\set{\vec{x}|x > 0}` é um bônus do mesmo pacote: notação de construtor de conjuntos com colchetes e uma barra intermediária, útil muito além da física.

O dimensionamento é o verdadeiro motivo para usar o pacote. Coloque uma fração ou soma dentro de `\braket` e os colchetes e as barras se esticam para corresponder. Um `\langle ... \rangle` feito à mão precisa de `\left` e `\right` em cada delimitador e ainda tende a ficar fora de proporção.

## Alternativas e vizinhos

O pacote `physics` oferece um conjunto semelhante, incluindo `\bra`, `\ket`, `\ev` para valores esperados e `\mel` para elementos de matriz, juntamente com abreviações para derivadas e comutadores. Ambos os pacotes definem `\bra` e `\ket`, então escolha um por documento em vez de carregar ambos. Em um modelo onde você não pode adicionar pacotes, `\langle \psi | \phi \rangle` com `\left`/`\right` em torno de conteúdos altos produz a mesma saída com mais digitação.

Para diagramas de Feynman, que geralmente residem nos mesmos documentos, pacotes como `tikz-feynman` são construídos no TikZ; essa é uma habilidade de desenho separada, mais próxima em espírito de [diagramas comutativos](/learn/diagramas-comutativos/) do que qualquer coisa nesta página.

O erro comum é digitar `<\psi|\phi>` com os caracteres angulares do teclado. Essas são as relações menor que e maior que, então o LaTeX as espaça como comparações e as desenha na altura errada. Os colchetes reais do Dirac vêm de `\langle` e `\rangle` ou, melhor, dos comandos acima. A diferença é óbvia no momento em que você coloca os dois formulários próximos um do outro no [live playground](/live/).