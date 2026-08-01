---

title: "Método, resultados, discusión: la sala de máquinas."
description: "Reproducibilidad, resultados que responden preguntas, ablaciones y limitaciones honestas."
category: "paper-anatomy"
order: 4
level: "intermediate"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# Método, resultados, discusión: la sala de máquinas.

La mitad de un artículo es donde vive la ciencia real. También es donde la escritura vaga hace más daño, porque estas secciones se califican según la precisión. Esto es lo que cada uno le debe al lector.

## Método: la reproducibilidad es el listón

La prueba para una sección de método es contundente: ¿podría un compañero competente reproducir su trabajo a partir del texto más su material complementario? Eso significa detalles concretos, no vibraciones. Informe las configuraciones exactas, las divisiones de datos, los pasos de preprocesamiento y los hiperparámetros, o diga con precisión dónde se encuentran ("configuraciones completas en el Apéndice B").

Una disciplina útil: mientras escribe, mantenga una lista actualizada de cada decisión que tomó. Cada uno va en la sección de método, en el apéndice o en el código publicado. Si no llega a ninguna parte, un revisor lo encontrará.

## Resultados: responde las preguntas que hiciste

Las secciones de experimentos sólidas se abren planteando las preguntas que los experimentos responden, a menudo literalmente: "Preguntamos: (1) ¿La poda preserva la precisión? (2) ¿De dónde viene la aceleración?" Luego, cada subsección responde una pregunta. Los resultados que no responden a una pregunta formulada son trivialidades y los revisores notan la discrepancia entre las afirmaciones y la evidencia más rápido que cualquier otra cosa.

## Tablas vs gráficos

| Utilice una tabla cuando | Utilice un gráfico cuando |
|---|---|
| Los valores exactos importan | La tendencia importa |
| Comparación de métodos sobre puntos de referencia fijos | Mostrando comportamiento en una variable barrida |
| Pocos números, alta precisión | Muchos números, una forma |

La regla clásica: tablas para buscar, gráficos para comparar formas. Más información sobre cómo hacer que ambos sean legibles en [figuras, tablas y comparaciones](/learn/figures-tables-comparisons/), con mecánicas de LaTeX en [tablas](/learn/create-table/) y [subtítulos y etiquetas](/learn/captions-labels/).

##Ablaciones, en un párrafo

Una ablación elimina un componente de su método a la vez para demostrar que se gana su lugar. Si su método tiene tres partes y el sistema completo supera a todas las variantes de dos partes, cada parte está justificada. Los revisores en campos empíricos tratan las ablaciones como algo que está en juego: una sección de método que presenta cinco componentes y nunca los prueba individualmente se considera no respaldada. Una mesa compacta suele ser suficiente.

## Discusión versus conclusión

Estos se fusionan con tanta frecuencia que la gente olvida que son diferentes. La discusión interpreta: ¿qué significan los resultados, dónde sorprendieron, qué no muestran? La conclusión resume: ¿qué debe recordar el lector y qué viene después? Una discusión añade nuevas ideas. Una conclusión no añade nada nuevo, intencionadamente. Si su conclusión contiene una afirmación que no aparece en ningún otro lugar, muévala.

## Limitaciones: ahora estándar, realmente útil

Las secciones de limitaciones explícitas han pasado de ser opcionales a ser esperadas en muchos lugares, y algunas las requieren. Trate el suyo como un recurso de credibilidad, no como una confesión. Establezca los límites reales: conjuntos de datos que no probó, suposiciones que necesita prueba, costos de cómputo, casos de falla que observó. Los revisores los encontrarían de todos modos. Nombrarlos primero convierte las debilidades en evidencia de que usted comprende su propio trabajo, y es mucho mejor que un crítico que escriba "los autores no reconocen que..." en una reseña pública.

## Una punta estructural

Escriba primero la sección de resultados, a partir de sus números reales. Luego escribe la sección del método para explicar exactamente qué produjo esos números y la discusión para interpretarlos. Escribir en orden de lectura lo tienta a describir el método que pretendía ejecutar en lugar del método que ejecutó.