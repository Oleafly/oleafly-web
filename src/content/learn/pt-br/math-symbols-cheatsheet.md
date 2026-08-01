---

title: "Cartão de mesa símbolo"
description: "Acentos, grandes operadores, conjuntos de números e delimitadores elásticos em uma página."
category: "equation-craft"
order: 8
level: "beginner"
tags: ["math", "cheatsheet"]
featured: true
updated: 2026-07-25
---

# Cartão de mesa de símbolo

Esta página é um cartão de referência e não uma lição. Acentos, grandes operadores, conjuntos de números e delimitadores que cobrem a maior parte da matemática do dia-a-dia, tudo em um só lugar. Cada comando aqui funciona apenas no modo matemático, e os conjuntos de números precisam de `\usepackage{amssymb}` no preâmbulo. Para o alfabeto grego e as relações básicas, consulte [Símbolos gregos e cotidianos](/learn/greek-letters/). Para saber como o modo matemático funciona, comece com [noções básicas do modo matemático](/learn/math-mode/).

## Acentos

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{xyz}
```

| Comando | Renderiza como | Significado convencional |
| --- | --- | --- |
| `\hat{x}` | x com circunflexo | Estimadores, vetores unitários, operadores |
| `\bar{x}` | x com barra | Médias amostrais, conjugados complexos |
| `\tilde{x}` | x com til | Aproximações, variáveis ​​transformadas |
| `\vec{x}` | x com seta | Vetores |
| `\ponto{x}`, `\ddot{x}` | um ou dois pontos | Derivadas de primeira e segunda vez |
| `\widehat{xyz}`, `\overline{xyz}` | sotaque esticado | Acentos sobre expressões com várias letras |

Os acentos simples cabem em uma única letra; as variantes `wide` e `over` se estendem para abranger tudo o que está entre colchetes.

## Grandes operadoras

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint
\lim_{x \to 0} \max_{x} \inf_{x}
```

| Comando | Significado |
| --- | --- |
| `\soma_{i=1}^n` | Soma com limites inferior e superior |
| `\prod_{i=1}^n` | Produto |
| `\int_a^b` | Integral definida |
| `\oint` | Contorno integral |
| `\lim_{x \to 0}` | Limite |
| `\max_{x}`, `\inf_{x}` | Máximo, ínfimo sobre uma variável |

Os limites são anexados com a sintaxe comum de subscrito e sobrescrito, entre colchetes quando têm mais de um caractere. Na exibição matemática, somas, produtos e limites colocam seus limites acima e abaixo do símbolo. Os integrais mantêm os seus ao lado. Essa é a convenção padrão.

## Conjuntos de números

```latex
\mathbb{N} \mathbb{Z} \mathbb{Q} \mathbb{R} \mathbb{C}
```

Estes são os números naturais, inteiros, racionais, reais e complexos em negrito no quadro-negro. O alfabeto `\mathbb` e seus parentes são abordados em [Blackboard, script, Fraktur](/learn/mathbb-mathcal/).

## Delimitadores

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
```

`\left` e `\right` aumentam seu delimitador até a altura do material incluído, então os parênteses em torno de uma fração alta envolvem-no em vez de recortá-lo na altura do texto. Eles devem vir em pares. Para mostrar apenas um lado, feche com `\right.` e o parceiro invisível satisfaz o emparelhamento. Chaves são caracteres especiais, então chaves definidas são escritas `\{` e `\}`. Os colchetes angulares para produtos internos são `\langle` e `\rangle`, nunca os sinais de menor que e maior que do teclado, que são símbolos de relação com formato e espaçamento incorretos.

Qualquer linha deste cartão pode ser colada no [live playground](/live/) para ver o formulário renderizado próximo à fonte.