---

title: "Índices que no explotan"
description: "Llaves para guiones de varios caracteres, números primos y puntos."
category: "equation-craft"
order: 4
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Índices que no explotan

Los subíndices y superíndices son la primera sintaxis matemática que todos aprenden en LaTeX, y también la fuente del primer resultado confuso que todos producen. El guión bajo `_` reduce lo que sigue, el signo de intercalación `^` lo aumenta y ambos se aplican exactamente a un carácter a menos que indique lo contrario. Esa regla de un carácter está detrás de casi todos los índices destrozados que jamás hayas visto.

## Las formas básicas

```latex
x_i x^2
x_{ij} x^{2n}
x_i^2 x_{i_j}^{2n}
```

`x_i` coloca una sola `i` en la posición del subíndice y `x^2` genera un solo `2`. Debido a que `_` y `^` toman solo el siguiente token, cualquier cosa que tenga más de un carácter debe estar entre llaves: `x_{ij}` subíndice ambas letras y `x^{2n}` eleva el `2n` completo. Puede adjuntar un subíndice y un superíndice al mismo símbolo, en cualquier orden, y LaTeX los apila correctamente: `x_i^2`. Los guiones también anidan. En `x_{i_j}`, `j` es un subíndice de `i`, que a su vez es un subíndice de `x`, y cada nivel se establece progresivamente más pequeño.

Los scripts de varios caracteres **deben** usar llaves: `x_ij` es `x_i` y luego `j`. LaTeX no informa esto como un error, porque `x_i` seguido de una variable `j` es una matemática perfectamente legal. La fórmula se compila, parece casi correcta a primera vista y significa algo diferente. Desarrolle el hábito de los frenillos desde el principio. En caso de duda, refuerce el guión.

La misma trampa aparece en límites y límites. `\sum_i=1^n` no hace lo que parece. La forma correcta es `\sum_{i=1}^{n}`, donde el `i=1` completo es un subíndice entre llaves. Si usa `_` o `^` fuera del modo matemático por completo, obtendrá el error clásico cubierto en [Falta dólar insertado](/learn/missing-dollar/).

## Primos y puntos

```latex
f' f'' \dot{x} \ddot{x}
```

Para los derivados rara vez se desea un superíndice literal. La tecla de apóstrofe produce un número primo: `f'` se representa como f con un primo, `f''` con dos, y LaTeX maneja el aumento y el espaciado por sí mismo, por lo que no hay necesidad de `f^{\prime}`. Para derivadas de tiempo en el estilo de física, `\dot{x}` coloca un solo punto sobre la x y `\ddot{x}` coloca dos. Estos son acentos, por lo que llevan su argumento entre llaves.

Una sutileza más: si necesita un superíndice después de un número primo, simplemente encadenelos, como en `f'^2`. LaTeX los combina en un único grupo de superíndices.

## Verifique su salida

La forma más rápida de internalizar la regla de las llaves es escribir `x_ij` y `x_{ij}` uno al lado del otro en el [área de juegos en vivo](/live/) y observar cómo se representa la diferencia. Siempre que un índice parece sutilmente incorrecto en un documento compilado, lo primero que hay que comprobar es que faltan un par de llaves.