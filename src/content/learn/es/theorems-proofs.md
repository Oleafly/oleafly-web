---

title: "Bloques de teoremas y pruebas"
description: "estilos amsthm, contadores compartidos, marcas de fin de prueba."
category: "field-kits"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Bloques de teoremas y pruebas

La escritura matemática se basa en enunciados numerados: teoremas, lemas y definiciones, cada uno de ellos separado del texto y numerado para que las pruebas posteriores puedan citarlos. El paquete `amsthm` suministra la maquinaria. Usted declara los tipos de bloques que su documento necesita una vez en el preámbulo y luego los utiliza como entornos normales.

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]

\begin{theorem}[Optional name]
 Statement.
\end{theorem}
\begin{proof}
 Argument. \qedhere
\end{proof}
```

## Declarando los entornos

`\newtheorem{theorem}{Theorem}[sección]` crea un entorno de `teorema`. El primer argumento es el nombre del entorno que escribirá, el segundo es el texto del encabezado que se imprime y la `[sección]` final vincula la numeración a las secciones, por lo que el tercer teorema de la sección 2 es el Teorema 2.3 y el contador se reinicia en cada nueva sección.

`\newtheorem{lema}[teorema]{Lema}` coloca el argumento opcional en la otra posición, donde significa algo diferente: `[teorema]` dice que los lemas comparten el contador del teorema en lugar de mantener el suyo propio. Un contador compartido produce una secuencia única, el teorema 2.1 seguido del lema 2.2. Esto es más fácil de seguir que las secuencias paralelas donde existen tanto el Lema 2.1 como el Teorema 2.1.

`\theoremstyle` establece el aspecto de cada declaración que le sigue. El estilo "simple" imprime el cuerpo en cursiva, el tratamiento tradicional para teoremas, lemas y proposiciones. El estilo "definición" mantiene el cuerpo erguido, lo que se adapta a definiciones y ejemplos. Un tercer estilo, "observación", es aún más ligero y se adapta a notas y observaciones. Agrupa tus declaraciones bajo el estilo que cada una debe utilizar.

## Usando los bloques

El argumento opcional del entorno imprime un nombre después del encabezado, por lo que `\begin{theorem}[Optional name]` produce algo como el Teorema 2.4 (Fubini). El entorno "prueba" imprime un título de prueba en cursiva y se cierra con la marca de fin de prueba, el pequeño cuadrado colocado al ras a la derecha.

`\qedhere` reposiciona ese cuadrado cuando la prueba no termina en texto normal. Si la última línea de una prueba es una ecuación mostrada, la marca automática caerá en una línea vacía debajo de ella. Escribir `\qedhere` dentro de la pantalla coloca el cuadrado en la propia línea de la ecuación. Cuando una prueba termina en texto plano, como en el ejemplo, el comando es inofensivo pero innecesario.

Los bloques de teoremas son objetos numerados como cualquier otro, por lo que `\label{thm:main}` dentro del entorno y `Theorem~\ref{thm:main}` en el texto funcionan con las reglas habituales de dos pasos descritas en [números y punteros para ecuaciones](/learn/number-ecuations/). El error de declaración común es poner cada entorno bajo `\theoremstyle{plain}`, lo que establece definiciones de varios párrafos en cursiva. Mantenga las definiciones y ejemplos bajo el estilo "definición".