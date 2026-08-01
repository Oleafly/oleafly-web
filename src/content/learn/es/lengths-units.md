---

title: "pt, em, ancho de texto"
description: "Unidades absolutas y relativas a la fuente que usted realmente establezca."
category: "desk-reference"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# pt, em, ancho de texto

Casi todos los comandos de diseño en LaTeX toman una longitud: espacio vertical, ancho de imagen, márgenes, grosor de regla. Una longitud es un número más una unidad, y la elección de la unidad decide si el diseño se adapta cuando cambia el tamaño de la fuente o la geometría de la página, o se rompe el día que lo hace.

| Unidad | Significado |
| --- | --- |
| `pt` | Punto (base) |
| `ellos` | Ancho relativo a la fuente |
| `ex` | Altura relativa a la fuente |
| `cm` / `mm` / `pulg` | Absoluto |
| `\ancho de texto` | Ancho del bloque de texto |
| `\ancho de línea` | Ancho de la columna/minipágina actual |

## Unidades absolutas y relativas

`pt` es el punto de la impresora, la unidad base de TeX. Los tamaños de fuente y muchos valores predeterminados internos se indican en puntos, y una pulgada equivale a 72,27 puntos según los cálculos de TeX. `cm`, `mm` y `in` son las conocidas unidades absolutas, apropiadas cuando un requisito es genuinamente físico, como un margen obligatorio de una pulgada.

`em` y `ex` escalan con la fuente actual: una em es aproximadamente el tamaño de fuente expresado como ancho, y una ex tiene aproximadamente la altura de una x minúscula. Su ventaja es la proporcionalidad. Un `\vspace{1em}` permanece visualmente consistente si el documento pasa del tipo 10pt a 12pt, donde un `\vspace{12pt}` codificado se vuelve demasiado apretado o demasiado suelto.

## Longitudes que te proporciona el documento

`\textwidth` es el ancho del bloque de texto de la página. `\linewidth` es el ancho del contenedor actual, que es igual a `\textwidth` en texto normal pero se estrecha dentro de una minipágina, una lista o una columna. Un decimal al frente escala cualquiera de los dos, y esa es la forma estándar de dimensionar las figuras:

```latex
\vspace{1em}
\includegraphics[width=0.5\textwidth]{f.pdf}
```

La primera línea inserta un em de espacio vertical. El segundo establece la imagen en la mitad del ancho del bloque de texto, de modo que si los márgenes alguna vez cambian, la figura cambia de escala con ellos y nunca se desborda hacia el margen. Dentro de una minipágina o un diseño de dos columnas, prefiera `0.5\linewidth`, ya que `\textwidth` es más ancho que el espacio que realmente tiene.

Las longitudes también son configurables. `\setlength{\parindent}{0pt}` elimina la sangría de párrafo y el mismo comando ajusta la longitud de la mayoría de los diseños con nombre.

El error común es dimensionar las figuras en centímetros. Funciona hasta que cambian la clase del documento, el tamaño del papel o los márgenes, y luego es necesario volver a ajustar cada cifra a mano. Los anchos expresados ​​como fracciones de `\textwidth` o `\linewidth` sobreviven intactos a todos esos cambios, razón por la cual las plantillas los usan casi exclusivamente.