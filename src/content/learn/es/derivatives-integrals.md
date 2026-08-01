---

title: "Derivadas e integrales"
description: "Derivadas ordinarias y parciales, integrales definidas, espacios delgados antes de diferenciales."
category: "notation-depth"
order: 2
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Derivadas e integrales

La notación de cálculo es donde LaTeX comienza a ganarse la vida. Las fracciones derivadas apiladas, los signos integrales con límites y los puntos sobre variables son uno o dos comandos cada uno. Esta lección cubre el puñado de comandos que producen casi todos los derivados e integrales que jamás escribirá, además del pequeño hábito de espaciado que separa los papeles pulidos de los borradores.

## Derivados

```latex
\frac{dy}{dx}
\frac{\partial f}{\partial x}
\nabla f \quad \nabla^2 f
f'(x) \quad \dot{x}
```

Una derivada ordinaria es solo una fracción: `\frac{dy}{dx}` apila `dy` sobre `dx`. Para derivadas parciales, cambie `d` por `\partial`, que imprime el símbolo parcial rizado; `\frac{\partial f}{\partial x}` es la forma estándar. Los parciales de orden superior siguen el mismo patrón, por ejemplo `\frac{\partial^2 f}{\partial x \partial y}`.

`\nabla` proporciona el símbolo de gradiente, y dado que es un símbolo ordinario, puedes elevarlo como cualquier otra cosa: `\nabla^2 f` para el laplaciano. Para notación compacta, `f'(x)` usa la tecla de apóstrofe directamente y LaTeX convierte una o más marcas `'` en números primos correctamente elevados. La notación de puntos de Newton para las derivadas de tiempo proviene de los comandos de acento `\dot{x}` y `\ddot{x}`, que colocan uno o dos puntos sobre el argumento.

Una opción de estilo: algunas revistas quieren el diferencial `d` en posición vertical, escrito `\mathrm{d}`. Si el tuyo lo hace, define `\newcommand{\dd}{\mathrm{d}}` una vez en el preámbulo y escribe `\frac{\dd y}{\dd x}` para que puedas cambiar la elección más tarde.

## Integrales

```latex
\int_a^b f(x)\,dx
\iint_D f\,dA
```

`\int` es el signo integral, y la familiar sintaxis de subíndice y superíndice adjunta los límites: `_a` para el límite inferior, `^b` para el superior. En matemáticas en línea, los límites se ubican al lado del signo para mantener la línea compacta; en matemáticas de visualización todavía se ubican al lado del signo de integrales (a diferencia de las sumas), que es la convención estándar. Las integrales dobles y triples tienen sus propios comandos, `\iint` y `\iiint`, que espacian correctamente los signos repetidos, junto con `\oint` para integrales de contorno.

El `\,` antes de `dx` es un espacio delgado. Sin él, `f(x)dx` ejecuta el integrando directamente hacia el diferencial y el ojo tiene que desenredarlos. El espacio delgado es una convención ampliamente seguida, así que conviértalo en un hábito: integrando, luego `\,` y luego el diferencial.

## Pruébalo y un error común.

Estos fragmentos se representan a medida que escribe en el [área de juegos en vivo](/live/), que es una manera rápida de verificar una pila derivada antes de que entre en un documento; consulte [conceptos básicos del modo matemático](/learn/math-mode/) si los delimitadores `$` y `\[` aún son nuevos.

El error más común aquí es escribir derivados de estilo `d/dx` con una barra en la pantalla matemática donde se quería un `\frac` apilado, u olvidar las llaves en los límites de varios caracteres: `\int_a^b+1` coloca solo la `b` en el superíndice. Escriba `\int_a^{b+1}` para que se genere toda la expresión.