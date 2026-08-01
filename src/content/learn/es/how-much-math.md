---

title: "¿Cuánta matemática necesita un trabajo?"
description: "Notación como precisión, disciplina de símbolos, cuándo numerar ecuaciones y mantener la coherencia."
category: "paper-anatomy"
order: 9
level: "intermediate"
tags: ["writing", "math"]
featured: false
updated: 2026-07-25
---

# ¿Cuánta matemática necesita un trabajo?

Exactamente tanto como requieran sus reclamaciones y ni un símbolo más. Las matemáticas en un trabajo no son una señal de sofisticación; es una herramienta de precisión. Los artículos mejor escritos utilizan notación cuando la prosa sería ambigua y prosa donde la notación sería ruido.

## La notación es precisión, no decoración.

Escriba $f: \mathcal{X} \to \mathcal{Y}$ cuando el lector necesite conocer el dominio y el codominio exactamente. Escriba "el modelo asigna imágenes a etiquetas" cuando no es así. Un párrafo que podría estar en inglés sencillo pero que se presenta como una sopa de símbolos no parece riguroso, parece evasivo y los revisores lo traducen para verificar si realmente se afirma algo. Antes de formalizar una afirmación, pregunte: ¿la versión en símbolo descarta una mala lectura que permite la versión en prosa? Si no, quédate con la prosa.

## Defina cada símbolo una vez, luego nunca lo redefina

La memoria de trabajo del lector es su recurso más escaso. La disciplina:

- Introduzca cada símbolo en su primer uso: "sea $n$ el número de muestras".
- Un significado por símbolo para todo el documento. Si $\alpha$ es una tasa de aprendizaje en la Sección 3, no puede ser un nivel de significancia en la Sección 5.
- Para papeles con mucha notación, una pequeña tabla de notación se amortiza desde el principio.

| Hábito | Efecto sobre el lector |
|---|---|
| Símbolo definido en el primer uso | Nunca tiene que cazar hacia atrás |
| Un símbolo, un significado | Nunca dudes del contexto |
| Tabla de notación | Tiene un mapa para todo el periódico |

## Ecuaciones numéricas solo cuando haces referencia a ellas

Un número de ecuación es una promesa: "señalaremos esto". Numerar todo entierra las ecuaciones que importan bajo las que no lo son.

```latex
\begin{equation}
  \mathcal{L} = \mathcal{L}_{\text{task}} + \lambda \mathcal{L}_{\text{reg}}
  \label{eq:loss}
\end{equation}
```

Haga referencia a él con `\eqref{eq:loss}`. Para mostrar matemáticas que nunca cita, use `\[... \]` o los entornos destacados y omita el número. El mecanismo de referencia se trata en [referencias cruzadas](/learn/cross-references/).

## Entornos de teoremas, de una vez

Si su artículo prueba cosas, envuelva las afirmaciones en entornos de "teorema", "lema" y "prueba" en lugar de escribir en negrita el "Teorema 1" a mano: se numeran, hacen referencias cruzadas limpiamente y señalan exactamente lo que se afirma versus lo que es comentario. La configuración y el uso se encuentran en [teoremas y pruebas](/learn/theorems-proofs/).

## La coherencia es la mitad de la batalla

Elija convenciones y manténgalas para todo el artículo:

- Vectores en negrita ($\mathbf{x}$) o con flechas, nunca ambas.
- Matrices en mayúsculas negrita, escalares en cursiva minúsculas.
- Conjuntos en pizarra o caligráficos ($\mathbb{R}$, $\mathcal{D}$), de forma consistente.
- Misma convención en figuras y tablas que en el texto.

Las macros personalizadas abaratan la coherencia: defina `\newcommand{\vx}{\mathbf{x}}` una vez y un cambio de notación tardío será una edición de una línea en lugar de una búsqueda en todo el documento.

## Calibrar al lugar

Un lugar de teoría espera declaraciones formales y pruebas completas. Un lugar aplicado espera una configuración de problema limpia y tal vez una función de pérdida. Lea tres artículos aceptados en el lugar de destino y haga coincidir su densidad. Para conocer la mecánica de escribirlo, comience con [modo matemático](/learn/math-mode/) y mantenga la [hoja de referencia de símbolos matemáticos](/learn/math-symbols-cheatsheet/) abierta en una pestaña.