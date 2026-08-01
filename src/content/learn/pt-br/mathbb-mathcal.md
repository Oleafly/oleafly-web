---

title: "Quadro negro, roteiro, Fraktur"
description: "mathbb, mathcal, mathfrak, mathrm e quando cada alfabeto aparece."
category: "notation-depth"
order: 6
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Quadro negro, roteiro, Fraktur

A matemática usa mais de um alfabeto. Os números reais recebem um R em negrito no quadro-negro, um Lagrangiano recebe um L caligráfico, uma álgebra de Lie recebe um Fraktur g, e cada um deles é um comando distinto no LaTeX, em vez de uma fonte que você ativa. Usados ​​consistentemente, os alfabetos informam ao leitor que tipo de objeto uma letra nomeia antes da frase ao redor.

```latex
\usepackage{amssymb}

x \in \mathbb{R}^n, \quad
\mathcal{L}(\theta), \quad
\mathfrak{g} = \mathfrak{su}(2), \quad
\int f(x)\,\mathrm{d}x
```

## Os quatro alfabetos

| Comando | Veja | Uso típico |
| --- | --- | --- |
| `\mathbb{R}` | Quadro negro | Conjuntos de números |
| `\mathcal{L}` | Caligráfico | Lagrangianos, perda |
| `\mathfrak{g}` | Fratura | Álgebras de Lie |
| `\mathrm{d}` | Vertical | Diferenciais, nomes de operadores |

`\mathbb` produz blackboard negrito, as letras duplas usadas quase exclusivamente para conjuntos de números: `\mathbb{N}`, `\mathbb{Z}`, `\mathbb{Q}`, `\mathbb{R}`, `\mathbb{C}`. Vem do pacote `amssymb` e cobre apenas maiúsculas. A fonte não possui alfabeto em minúsculas, portanto, um argumento em minúsculas imprime glifos errados ou nada de útil.

`\mathcal` fornece capitais caligráficas, a escolha usual para Lagrangianos, funções de perda e famílias de conjuntos. Ele também cobre apenas letras maiúsculas e funciona no núcleo do LaTeX sem nenhum pacote extra.

`\mathfrak`, também de `amssymb`, é Fraktur, com ambos os casos disponíveis. Fraktur minúsculo nomeia álgebras de Lie, e as maiúsculas aparecem na álgebra e na teoria dos conjuntos, para ideais e cardeais, entre outras coisas.

`\ mathrm` não é um alfabeto decorativo, mas uma mudança para o romano vertical dentro da matemática. É a ferramenta certa para qualquer coisa que seja notação em vez de uma variável: o diferencial em `\mathrm{d}x`, unidades ou sub-rótulos textuais como `x_{\mathrm{max}}`. Para operadores nomeados como tr e rank existe um mecanismo melhor, abordado em [operadores que você inventa uma vez](/learn/argmin-argmax/).

## Notas práticas

Se `\mathcal` parece muito simples para o seu propósito, o pacote `mathrsfs` adiciona `\mathscr`, um script mais ornamentado frequentemente usado para feixes e álgebras sigma. Os dois podem coexistir e denotar objetos diferentes no mesmo papel.

O erro comum é tratar esses alfabetos como decoração. Cada um carrega um significado convencional na maioria dos campos, e um leitor que vê `\mathbb{A}` esperará algo semelhante a um conjunto e com sabor de número. Verifique as convenções do seu campo antes de atribuir letras e, uma vez atribuídas, mantenha um alfabeto por objeto para todo o documento. Todos os quatro são renderizados lado a lado em segundos no [playground ao vivo](/live/).