---

title: "Fórmulas y estructuras químicas."
description: "reacciones mhchem y un boceto de chemfig."
category: "field-kits"
order: 1
level: "intermediate"
tags: ["chemistry"]
featured: false
updated: 2026-07-25
---

# Fórmulas y estructuras químicas.

La notación química combate los defectos de LaTeX. El modo matemático pone en cursiva los símbolos de los elementos como si fueran variables, y el modo texto no tiene ningún subíndice. Dos paquetes dividen el trabajo. `mhchem` compone fórmulas y reacciones a partir de notación química simple, y `chemfig` dibuja diagramas estructurales.

## Fórmulas y reacciones con mhchem

```latex
\usepackage[version=4]{mhchem}
\ce{H2O}
\ce{CO2 + C -> 2CO}
```

La opción `versión=4` selecciona la sintaxis actual. Todo lo químico va dentro de `\ce{...}`, que lee su contenido de la misma manera que lo escribe un químico. En `\ce{H2O}` el 2 se convierte en un subíndice automáticamente y los símbolos de los elementos permanecen en posición vertical, como lo requiere la convención. En la reacción, "+" obtiene el espaciado adecuado, "->" se convierte en una flecha de reacción y el 2 antes del CO se reconoce como un coeficiente estequiométrico, por lo que permanece en tamaño completo en la línea de base.

La misma notación se amplía. Las cargas viajan como superíndices, por lo que `\ce{SO4^2-}` da sulfato con su carga 2-. Los estados de la materia se adjuntan entre paréntesis, como en `\ce{H2O(l)}`; las flechas de equilibrio están escritas `<=>`; y `\ce{^{14}C}` coloca un número de isótopo antes del símbolo. `\ce` funciona tanto en modo texto como matemático, por lo que una fórmula puede ubicarse en una oración sin delimitadores adicionales.

## Estructuras con chemfig

```latex
\usepackage{chemfig}
\chemfig{H-C(-[2]H)(-[6]H)-H}
```

`\chemfig` dibuja estructuras a partir de un código lineal compacto. Los átomos se escriben como sus símbolos y `-` dibuja un enlace con el siguiente átomo. Un número entre corchetes establece la dirección del enlace en pasos de 45 grados en sentido antihorario desde el este: "[2]" apunta hacia arriba y "[6]" hacia abajo. Los paréntesis abren ramas del átomo actual, por lo que "C(-[2]H)(-[6]H)" genera un hidrógeno hacia arriba y otro hacia abajo mientras la cadena principal continúa hacia la derecha. El ejemplo es el metano plano: un carbono central unido a cuatro hidrógenos. Los enlaces dobles y triples se escriben `=` y `~`, y existe una sintaxis de anillo dedicada para estructuras cíclicas y aromáticas.

## Notas prácticas

Mantenga las dos herramientas en sus carriles. Utilice "mhchem" para cualquier cosa que se lea de izquierda a derecha como fórmula o ecuación, y "chemfig" cuando la geometría de la molécula sea el punto. Ambos se compilan con un motor LaTeX estándar y sin ningún programa de dibujo externo.

El error habitual de los principiantes es escribir fórmulas en modo matemático básico. `$H_2O$` compila, pero establece la H y la O en cursiva como variables, lo cual es incorrecto por convención. `\ce{H2O}` produce la forma vertical con menos escritura. Ambos paquetes están disponibles para probar en el [área de juegos en vivo](/live/).