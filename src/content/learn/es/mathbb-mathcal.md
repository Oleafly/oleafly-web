---

title: "Pizarra, guión, Fraktur"
description: "mathbb, mathcal, mathfrak, mathrm y cuándo aparece cada alfabeto."
category: "notation-depth"
order: 6
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Pizarra, guión, Fraktur

Las matemáticas utilizan más de un alfabeto. Los números reales obtienen una R en negrita de pizarra, un lagrangiano obtiene una L caligráfica, un álgebra de Lie obtiene una Fraktur g, y cada uno de estos es un comando distinto en LaTeX en lugar de una fuente que usted activa. Usados ​​consistentemente, los alfabetos le dicen al lector qué tipo de objeto nombra una letra antes que la oración circundante.

```latex
\usepackage{amssymb}

x \in \mathbb{R}^n, \quad
\mathcal{L}(\theta), \quad
\mathfrak{g} = \mathfrak{su}(2), \quad
\int f(x)\,\mathrm{d}x
```

## Los cuatro alfabetos

| Comando | Mirar | Uso típico |
| --- | --- | --- |
| `\mathbb{R}` | Pizarra | Conjuntos de números |
| `\mathcal{L}` | Caligráfico | Lagrangianos, pérdida |
| `\mathfrak{g}` | Fractura | Álgebras de mentira |
| `\mathrm{d}` | Vertical | Diferenciales, nombres de operadores |

`\mathbb` produce negrita de pizarra, las letras de doble trazo se usan casi exclusivamente para conjuntos de números: `\mathbb{N}`, `\mathbb{Z}`, `\mathbb{Q}`, `\mathbb{R}`, `\mathbb{C}`. Proviene del paquete `amssymb` y cubre únicamente mayúsculas. La fuente no tiene alfabeto en minúsculas, por lo que un argumento en minúsculas imprime glifos incorrectos o nada útil.

`\mathcal` proporciona mayúsculas caligráficas, la elección habitual para los lagrangianos, funciones de pérdida y familias de conjuntos. También cubre únicamente mayúsculas y funciona en el núcleo LaTeX sin ningún paquete adicional.

`\mathfrak`, también de `amssymb`, es Fraktur, con ambos casos disponibles. Fraktur en minúsculas nombra álgebras de Lie, y las mayúsculas aparecen en álgebra y teoría de conjuntos, para ideales y cardinales, entre otras cosas.

`\mathrm` no es un alfabeto decorativo sino un cambio al alfabeto romano vertical dentro de las matemáticas. Es la herramienta adecuada para cualquier cosa que sea notación en lugar de una variable: el diferencial en `\mathrm{d}x`, unidades o subetiquetas textuales como `x_{\mathrm{max}}`. Para operadores con nombre, como tr y rango, existe un mecanismo mejor, cubierto en [operadores que inventas una vez](/learn/argmin-argmax/).

## Notas prácticas

Si `\mathcal` parece demasiado simple para su propósito, el paquete `mathrsfs` agrega `\mathscr`, un script más elaborado que se usa a menudo para gavillas y álgebras sigma. Los dos pueden coexistir y denotar objetos diferentes en el mismo papel.

El error común es tratar estos alfabetos como decoración. Cada uno tiene un significado convencional en la mayoría de los campos, y un lector que vea `\mathbb{A}` esperará algo parecido a un conjunto y con sabor a números. Verifique las convenciones de su campo antes de asignar letras y, una vez asignadas, mantenga un alfabeto por objeto para todo el documento. Los cuatro se renderizan uno al lado del otro en segundos en el [área de juegos en vivo](/live/).