---

title: "Viñetas, números y listas de definiciones"
description: "detallar, enumerar, describir, anidar y etiquetas de elementos personalizados."
category: "type-and-shape"
order: 4
level: "beginner"
tags: ["formatting", "lists"]
featured: false
updated: 2026-07-25
---

# Viñetas, números y listas de definiciones

Las listas en LaTeX son entornos: abre una con `\begin{...}`, la cierra con `\end{...}` y marca cada entrada con `\item`. Luego, LaTeX maneja la numeración, las viñetas, la sangría y el espaciado por usted. Esa última parte es el punto. Nunca se vuelve a numerar nada a mano y, si se elimina la tercera entrada de una lista numerada, las entradas del cuatro al diez se convierten silenciosamente del tres al nueve.

## Los tres entornos de lista.

```latex
\begin{itemize}
 \item Bullet
\end{itemize}

\begin{enumerate}
 \item Numbered
\end{enumerate}

\begin{description}
 \item[Term] Definition style
\end{description}
```

`itemize` produce una lista de viñetas desordenada y es la opción correcta cuando las entradas no tienen secuencia, como una lista de suposiciones. `enumerar` numera cada entrada automáticamente, que es lo que desea para los pasos que ocurren en orden o para los elementos a los que planea consultar. Incluso puedes poner una `\label` después de un `\item` en una enumeración y hacer referencia a su número más tarde con `\ref`, tal como lo harías con una sección.

`descripción` es la menos conocida de las tres pero muy útil. Cada `\item` toma un argumento opcional entre corchetes, y ese argumento se imprime en negrita como una etiqueta con el texto de definición a continuación. Es el entorno natural para glosarios, listas de notación o cualquier estructura de "explicación de términos".

## Anidamiento

Entornos Nest para listas multinivel. Coloque un bloque completo `\begin{itemize} ... \end{itemize}` dentro de un `\item` de una lista externa y LaTeX lo sangra y cambia el símbolo de viñeta automáticamente. Lo mismo funciona para "enumerar", donde el anidamiento cambia el estilo de numeración en cada nivel: primero los números arábigos, luego las letras y luego los números romanos. LaTeX admite cuatro niveles de anidamiento, que es más de lo que necesita cualquier documento legible. Si te encuentras en tres niveles de profundidad, el material probablemente prefiera ser prosa o una tabla.

## Etiquetas personalizadas

Cualquier elemento puede anular su propio marcador con el argumento opcional: `\item[(a)]` imprime "(a)" en lugar de la viñeta o el número. Esto es útil para casos puntuales, pero si desea cambiar el estilo de una lista completa, cambiar cada elemento a mano anula la automatización. Para eso, cargue el paquete `enumitem`, que le permite escribir cosas como `\begin{enumerate}[label=(\alph*)]` para volver a etiquetar la lista completa en un solo lugar, y también le brinda opciones para ajustar el espaciado vertical.

Un error común de los principiantes es dejar una línea en blanco entre las entradas `\item` con la esperanza de espaciarlas. La línea en blanco es inofensiva dentro de una lista, pero no hace nada visual. El espaciado lo controla el propio entorno de la lista o las opciones "enumitem". Otro: cada entorno de lista debe contener al menos un `\item` antes de cualquier texto, o obtendrás el confuso error "Algo anda mal, tal vez falta un \item". Puedes experimentar con los tres entornos en el [área de juegos en vivo](/live/).