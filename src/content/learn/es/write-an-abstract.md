---

title: "Resúmenes que ganan el clic"
description: "Una fórmula de cuatro oraciones para resúmenes, más LaTeX y los errores a evitar."
category: "paper-anatomy"
order: 2
level: "beginner"
tags: ["writing", "abstract"]
featured: false
updated: 2026-07-25
---

# Resúmenes que ganan el clic

Su resumen es la única parte del artículo que la mayoría de la gente leerá. Los revisores lo usan para decidir qué tan malhumorado deben estar, los motores de búsqueda lo usan para clasificarlo y los investigadores ocupados lo usan para decidir si vale la pena abrir el PDF. Su trabajo es simple y brutal: vender el periódico completo en 150-250 palabras.

## La fórmula de cuatro frases

Puede redactar un resumen sólido respondiendo cuatro preguntas en orden. Cada respuesta es una o dos oraciones.

| oración | Pregunta que responde |
|---|---|
| Contexto | ¿Qué área problemática es esta y por qué es importante? |
| Brecha | ¿Qué falta o qué no funciona en los enfoques actuales? |
| Contribución | ¿Qué construiste, probaste o descubriste? |
| Resultado | ¿Cuál es el número del titular o hallazgo? |

Por ejemplo: "Entrenar modelos grandes es costoso. Los métodos de compresión existentes intercambian demasiada precisión por velocidad. Introducimos una técnica de poda que preserva la precisión al apuntar a cabezas de atención redundantes. En tres puntos de referencia, reduce el costo de inferencia en un 40% con una pérdida de precisión de menos del 0,5%". Cuatro frases, artículo completo.

Amplíe cada tiempo según sea necesario, pero mantenga el orden. Los lectores esperan el embudo: amplio, estrecho, nuestro, prueba.

## Resumen vs introducción

La gente los confunde constantemente. El resumen es el tráiler de la película: estropea el final a propósito, porque los investigadores quieren saber el resultado antes de invertir una hora. La introducción es el primer acto: construye el argumento lentamente, cita la literatura y justifica cada afirmación. Nunca escriba un resumen que provoque ("exploramos si...") cuando podría indicar el resultado. Consulte [introducciones y trabajo relacionado](/aprender/introducción-y-trabajo-relacionado/) para el primer acto.

## El látex

El entorno `abstracto` va después de `\maketitle` en la mayoría de las clases de artículos:

```latex
\maketitle
\begin{abstract}
Training large models is expensive. Existing compression
methods trade too much accuracy for speed. We introduce...
\end{abstract}
```

Algunas clases de revistas quieren el resumen antes de `\maketitle` o usan su propio comando, así que verifique la plantilla. Más información sobre la portada circundante en [la lección de la página de título](/learn/title-page/).

## Errores comunes

- **Citas en resumen.** Los resúmenes se muestran solos, en bases de datos y servicios de indexación, donde `[12]` no apunta a nada. Nombra el trabajo anterior con palabras si es necesario y guarda `\cite` para el cuerpo.
- **Afirmaciones vagas.** "Mejora significativamente el rendimiento" no le dice nada al lector. "Reduce el costo de inferencia en un 40%" genera el clic. Pon tu mejor número concreto.
- **Escribirlo primero.** El resumen resume un artículo que existe. Redactelo temprano si le ayuda a pensar, pero vuelva a escribirlo al final, cuando sepa lo que realmente mostró.
- **Exagerar el presupuesto de palabras.** Los lugares imponen límites, a menudo de 150 a 250 palabras. Toda oración que no sea contexto, vacío, contribución o resultado es candidata a ser eliminada.

## Una autoprueba rápida

Cubre todo excepto tu resumen y entrégaselo a un colega. Si pueden decirte lo que hiciste y por qué es importante, funciona. Si dicen "suena interesante, ¿qué encontraste?", la oración de resultado falta o es vaga. Corrija esa oración y el resumen generalmente encajará.