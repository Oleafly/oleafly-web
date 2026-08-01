---

title: "Índices que não explodem"
description: "Chaves para scripts de vários caracteres, primos, pontos."
category: "equation-craft"
order: 4
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Índices que não explodem

Subscritos e sobrescritos são a primeira sintaxe matemática que todos aprendem no LaTeX e também a fonte da primeira saída confusa que todos produzem. O sublinhado `_` diminui o que segue, o cursor `^` aumenta e ambos se aplicam a exatamente um caractere, a menos que você diga o contrário. Essa regra de um caractere está por trás de quase todos os índices mutilados que você já viu.

## Os formulários básicos

```latex
x_i x^2
x_{ij} x^{2n}
x_i^2 x_{i_j}^{2n}
```

`x_i` coloca um único `i` na posição do subscrito e `x^2` levanta um único `2`. Como `_` e `^` capturam apenas o próximo token, qualquer coisa maior que um caractere deve ser colocada entre colchetes: `x_{ij}` subscreve ambas as letras, e `x^{2n}` aumenta o `2n` inteiro. Você pode anexar um subscrito e um sobrescrito ao mesmo símbolo, em qualquer ordem, e o LaTeX os empilha corretamente: `x_i^2`. Os scripts também se aninham. Em `x_{i_j}` o `j` é um subscrito de `i`, que é em si um subscrito de `x`, e cada nível é definido progressivamente menor.

Scripts com vários caracteres **devem** usar colchetes: `x_ij` é `x_i` e depois `j`. O LaTeX não relata isso como um erro, porque `x_i` seguido por uma variável `j` é matemática perfeitamente legal. A fórmula é compilada, parece quase correta à primeira vista e significa algo diferente. Crie o hábito do aparelho desde o início. Em caso de dúvida, prepare o script.

A mesma armadilha aparece nos limites e limites. `\sum_i=1^n` não faz o que parece. A forma correta é `\sum_{i=1}^{n}`, onde todo `i=1` é um subscrito entre colchetes. Se você usar `_` ou `^` inteiramente fora do modo matemático, obterá o erro clássico abordado em [Dólar ausente inserido](/learn/missing-dollar/).

## Primos e pontos

```latex
f' f'' \dot{x} \ddot{x}
```

Para derivadas, você raramente deseja um sobrescrito literal. A chave do apóstrofo produz um primo: `f'` é renderizado como f com um primo, `f''` com dois, e o LaTeX lida com o aumento e o espaçamento em si, então não há necessidade de `f^{\prime}`. Para derivadas de tempo no estilo da física, `\dot{x}` coloca um único ponto sobre x e `\ddot{x}` coloca dois. Esses são acentos, então eles consideram seus argumentos entre colchetes.

Mais uma sutileza: se você precisar de um sobrescrito depois de um primo, basta encadeá-los, como em `f'^2`. LaTeX os combina em um único cluster sobrescrito.

## Verifique sua saída

A maneira mais rápida de internalizar a regra das chaves é digitar `x_ij` e `x_{ij}` um ao lado do outro no [live playground](/live/) e observar a renderização da diferença. Sempre que um índice parece sutilmente errado em um documento compilado, a primeira coisa a verificar é a falta de um par de colchetes.