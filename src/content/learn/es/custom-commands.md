---

title: "Macros que mantienen la notación honesta"
description: "newcommand, NewDocumentCommand, un archivo de macros compartido."
category: "runtime"
order: 4
level: "intermediate"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# Macros que mantienen la notación honesta

Cada artículo tiene notación que se repite: los números reales, un operador de expectativa, un valor absoluto con barras del tamaño adecuado. Si escribe `\mathbb{R}` en cuarenta lugares y su asesor luego prefiere `\mathbf{R}`, tendrá cuarenta ediciones que realizar y se perderá una. Una macro convierte esa notación en un comando con un solo nombre, definido una vez. Cambie la definición y aparecerá el documento completo. Así es como se mantiene la notación honesta: la fuente no puede perder la sincronización consigo misma.

## Definiendo comandos con newcommand

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\E}[1]{\mathbb{E}\left[#1\right]}
\newcommand{\abs}[1]{\left\lvert #1 \right\rvert}
```

La primera definición es la más simple: `\R` ahora es pura taquigrafía, y escribir `\R` en cualquier lugar produce `\mathbb{R}`.

La segunda forma requiere un argumento. El `[1]` después del nombre declara que `\E` acepta un argumento, y `#1` marca dónde aterriza ese argumento en la expansión. Entonces `\E{X}` se convierte en `\mathbb{E}\left[X\right]`. La definición compra más que brevedad: el par `\left[` y `\right]` hace que los corchetes crezcan para adaptarse a lo que haya dentro, por lo que `\E{\frac{X}{n}}` obtiene corchetes altos automáticamente. La macro `\abs` hace lo mismo con `\lvert` y `\rvert`, el par correcto de barras verticales para el valor absoluto. Puede declarar hasta nueve argumentos y referirse a ellos como "#1" a "#9".

Si un comando ya existe, `\newcommand` se niega a redefinirlo y se detiene con un error, lo que le protege de romper algo silenciosamente. Para reemplazar deliberadamente un comando existente, use `\renewcommand` en su lugar.

## La interfaz moderna

LaTeX actual también incluye un comando de definición más rico:

```latex
\NewDocumentCommand{\citepair}{mm}{\cite{#1}, \cite{#2}}
```

`\NewDocumentCommand` usa una cadena de especificación de argumento en lugar de un recuento. Aquí `mm` significa dos argumentos obligatorios, por lo que `\citepair{knuth84}{lamport94}` cita ambas claves. El lenguaje de especificación va más allá de lo que `\newcommand` puede: `o` declara un argumento opcional entre corchetes, `s` detecta una variante de estrella y `O{default}` le da a un argumento opcional un valor predeterminado. Para cualquier cosa más allá de una simple sustitución, busque esta interfaz.

## Comparte las definiciones

Mantenga un `macros.sty` compartido entre los capítulos. Coloque sus definiciones en ese archivo, cárguelo con `\usepackage{macros}` de cada documento y cada capítulo de una tesis, además de las diapositivas y la versión impresa, todos coinciden en la notación. Cuando un colaborador se une, lee un archivo corto para aprender sus convenciones en lugar de realizar ingeniería inversa a partir del texto. Esto se combina naturalmente con una [configuración de múltiples archivos](/learn/split-chapter-files/).

Un consejo sobre los nombres: asigne a las macros nombres significativos como `\abs` o `\norm` en lugar de nombres basados ​​en la apariencia como `\bigbars`. El nombre debe decir lo que significa la notación, por lo que la definición puede cambiar su apariencia. Y resiste a definir una macro para algo que usas dos veces; la recompensa comienza alrededor del tercer uso.