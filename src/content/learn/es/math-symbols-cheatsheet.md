---

title: "Tarjeta de escritorio con símbolo"
description: "Acentos, operadores grandes, conjuntos de números y delimitadores elásticos en una sola página."
category: "equation-craft"
order: 8
level: "beginner"
tags: ["math", "cheatsheet"]
featured: true
updated: 2026-07-25
---

# Tarjeta de escritorio con símbolo

Esta página es una tarjeta de referencia más que una lección. Acentos, grandes operadores, conjuntos de números y delimitadores que cubren la mayoría de las matemáticas cotidianas, todo en un solo lugar. Cada comando aquí funciona solo en modo matemático y los conjuntos de números necesitan `\usepackage{amssymb}` en el preámbulo. Para conocer el alfabeto griego y las relaciones básicas, consulte [Símbolos griegos y cotidianos](/learn/greek-letters/). Para saber cómo funciona el modo matemático, comience con [conceptos básicos del modo matemático](/learn/math-mode/).

## Acentos

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{xyz}
```

| Comando | Representa como | Significado convencional |
| --- | --- | --- |
| `\sombrero{x}` | x con circunfleja | Estimadores, vectores unitarios, operadores |
| `\bar{x}` | x con barra | Medios muestrales, conjugados complejos |
| `\tilde{x}` | x con tilde | Aproximaciones, variables transformadas |
| `\vec{x}` | x con flecha | Vectores |
| `\punto{x}`, `\ddot{x}` | uno o dos puntos | Derivados de primera y segunda vez |
| `\widehat{xyz}`, `\overline{xyz}` | acento estirado | Acentos sobre expresiones de varias letras |

Los acentos sencillos se ajustan a una sola letra; las variantes "ancho" y "sobre" se extienden para abarcar todo lo que esté entre los tirantes.

## Grandes operadores

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint
\lim_{x \to 0} \max_{x} \inf_{x}
```

| Comando | Significado |
| --- | --- |
| `\sum_{i=1}^n` | Suma con límites inferior y superior |
| `\prod_{i=1}^n` | Producto |
| `\int_a^b` | Integral definida |
| `\punto` | Integral de contorno |
| `\lim_{x\a 0}` | Límite |
| `\max_{x}`, `\inf_{x}` | Máximo, mínimo sobre una variable |

Los límites se adjuntan con la sintaxis ordinaria de subíndice y superíndice, entre llaves cuando tienen más de un carácter. En las matemáticas de visualización, las sumas, los productos y los límites colocan sus límites por encima y por debajo del símbolo. Las integrales mantienen las suyas a un lado. Ésa es la convención estándar.

## Conjuntos de números

```latex
\mathbb{N} \mathbb{Z} \mathbb{Q} \mathbb{R} \mathbb{C}
```

Estos son los números naturales, enteros, racionales, reales y complejos en negrita de pizarra. El alfabeto `\mathbb` y sus parientes se tratan en [Blackboard, script, Fraktur](/learn/mathbb-mathcal/).

## Delimitadores

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
```

`\left` y `\right` aumentan su delimitador hasta la altura del material encerrado, por lo que los paréntesis alrededor de una fracción alta lo envuelven en lugar de recortarlo a la altura del texto. Deben venir en parejas. Para mostrar solo un lado, cierre con `\right.` y el compañero invisible satisface el emparejamiento. Las llaves son caracteres especiales, por lo que las llaves establecidas se escriben `\{` y `\}`. Los corchetes angulares para los productos internos son `\langle` y `\rangle`, nunca los signos menor que y mayor que del teclado, que son símbolos de relación con la forma y el espaciado incorrectos.

Cualquier fila de esta tarjeta se puede pegar en el [área de juegos en vivo](/live/) para ver el formulario renderizado junto a la fuente.