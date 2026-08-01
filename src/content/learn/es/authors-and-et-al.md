---

title: "Listas de autores, orden y et al."
description: "¿Qué y otros? es decir, convenciones de orden de autor por campo y la maquinaria del crédito."
category: "paper-anatomy"
order: 8
level: "beginner"
tags: ["writing", "publishing"]
featured: false
updated: 2026-07-25
---

# Listas de autores, orden y et al.

La lista de autores parece la parte más simple de un artículo. En realidad, es un pequeño y denso libro de crédito con reglas específicas para cada campo. Interpretarlo mal es un error clásico de los recién llegados.

## ¿Qué "et al." medio

"Y otros." es latín, abreviatura de *et alii*, "y otros". Cuando una cita dice "Vaswani et al. 2017", significa Vaswani más los autores restantes, cuyo nombre no se menciona por razones de brevedad. Es una convención de citas, no un juicio: los otros autores importan igualmente, simplemente no hay espacio para enumerar ocho nombres cada vez.

Los estilos de cita se truncan mecánicamente. Muchos estilos nombran hasta dos o tres autores y luego cambian a "First et al". más allá de eso. Su estilo de bibliografía maneja esto automáticamente, lo cual es una razón más para [dejar que BibTeX administre las citas](/learn/add-citations/) en lugar de escribirlas a mano.

## El orden del autor es un código y el código varía según el campo

| Convención | Dónde | Cómo leerlo |
|---|---|---|
| El primer autor hizo más | La mayor parte de CS, biología, medicina | La primera posición es el premio |
| El último autor es el PI | Ciencias de laboratorio, gran parte del aprendizaje automático | Autor principal que lidera el grupo y financiación |
| Alfabético | Teoría CS, matemáticas, economía | El pedido no contiene ninguna información |

Esto es importante cuando se leen CV en distintos campos: una posición intermedia en un campo de orden alfabético no dice nada, mientras que en un campo de primer autor indica un papel de apoyo. Cuando tenga dudas sobre un artículo específico, no infiera demasiado. Cuando escriba el suyo, acuerde el orden con anticipación, idealmente antes de que comience a escribir. Las disputas sobre el orden de los autores en el momento de la presentación son un género de drama académico genuinamente miserable.

## El elenco de símbolos de apoyo

Los bloques de autor modernos llevan anotaciones adicionales:

- **Autor correspondiente**, a menudo marcado con un símbolo de sobre o un asterisco: la persona que maneja el envío y responde el correo electrónico del lector.
- **Contribución igual**, normalmente una daga o un asterisco con una nota a pie de página como "Estos autores contribuyeron por igual". Es común cuando dos personas realmente codirigen el trabajo.
- **Afiliaciones**, emparejadas por números en superíndice cuando los autores abarcan instituciones.

```latex
\author{Ada Lovelace\thanks{Equal contribution.} \and
        Charles Babbage\thanks{Equal contribution.} \and
        Mary Somerville\thanks{Corresponding author.}}
```

Cada clase de lugar tiene su propio marcado de autor, así que copie el patrón de la plantilla. La mecánica general del tema inicial se encuentra en [la lección de la página de título](/learn/title-page/).

## ORCID: tu identificación permanente

Los nombres chocan y cambian. Un ORCID iD es un identificador persistente (un número de 16 dígitos en orcid.org) que lo sigue a través de cambios de nombre, instituciones y cada J. Smith en su campo. Muchas revistas ahora exigen una del autor correspondiente. Regístrese una vez, adjúntelo a los envíos y su registro de publicación permanecerá inequívoco de por vida.

## La única regla que nunca varía

Cualquiera que sea la convención de ordenación, la autoría en sí tiene una norma compartida: todos los que figuran en la lista contribuyeron de manera significativa al trabajo, y todos los que contribuyeron de manera significativa figuran en la lista. La autoría donada y la autoría fantasma son faltas de conducta en la mayoría de los códigos de ética. El orden es política; la lista es integridad.