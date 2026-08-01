---

title: "Énfasis sin luchar contra la fuente."
description: "textbf, textit, emph, mono y por qué emph se anida mejor que las cursivas codificadas."
category: "type-and-shape"
order: 1
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Énfasis sin luchar contra la fuente.

El énfasis en LaTeX proviene de un pequeño conjunto de comandos, cada uno de los cuales toma el texto afectado como un argumento entre llaves. LaTeX separa dos ideas que la mayoría de los procesadores de texto combinan: aplicar un tipo de letra específico y marcar un intervalo como enfatizado. Saber qué comando mantiene la coherencia de los documentos cuando cambian los estilos.

```latex
\textbf{bold}
\textit{italic}
\emph{emphasis} % preferred in running text
\underline{avoid} % rarely used in body text
\texttt{monospace}
\textsc{Small Caps}
```

## Los comandos

`\textbf` establece negrita, el tratamiento estándar para énfasis fuerte y para encabezados en definiciones. `\textit` establece el tipo de cursiva directamente. `\texttt` cambia a la fuente de máquina de escribir monoespaciada, la convención para nombres de archivos, comandos e identificadores de código en texto en ejecución. `\textsc` establece versalitas, comunes para los nombres de autores en bibliografías y para acrónimos que de otro modo dominarían una línea de texto.

`\underline` existe pero gana su comentario en el ejemplo. El subrayado es un sustituto de la cursiva en la era de las máquinas de escribir, y en LaTeX también tiene un problema mecánico: el texto subrayado se coloca en un cuadro, por lo que no puede atravesar líneas, y una frase larga subrayada desbordará el margen. En tipografía impresa, la cursiva hace el trabajo que solía hacer el subrayado.

Los comandos se anidan, por lo que `\textbf{\textit{bold italic}}` combina ambos cuando la fuente proporciona la cara.

## ¿Por qué?

`\emph` marca el significado más que la apariencia: dice "enfatiza esto" y deja que el contexto decida cómo. En texto vertical se imprime en cursiva. Dentro del texto que ya está en cursiva, se vuelve a colocar en posición vertical, por lo que el énfasis dentro del énfasis permanece visible. `\textit` codificado dentro del texto en cursiva simplemente permanece en cursiva y el énfasis interno desaparece. La intención de marcar también da sus frutos más adelante. Una clase o paquete puede redefinir cómo se ve el énfasis en un lugar sin realizar modificaciones en todo el documento.

Regla general: use `\emph` para enfatizar la prosa y reserve `\textit` para cosas que están convencionalmente en cursiva independientemente del contexto, como títulos de libros, frases extranjeras y nombres de especies.

## Límites y hábitos

Todos estos son comandos en modo texto y se comportan mal dentro de las fórmulas. Los símbolos matemáticos en negrita necesitan `\mathbf` o `\boldsymbol`, cubiertos en [negrita matemática](/learn/bold-math/). Resista el énfasis en apilar, porque cuando todo está en negrita, nada destaca. Cree títulos a partir de comandos estructurales como `\sección` en lugar de negrita manual, ya que la estructura también alimenta la tabla de contenido y los marcadores de PDF. [Tipo más grande y más pequeño](/learn/font-size/) presenta el mismo argumento para los tamaños de fuente.