---

title: "Borrar marcas de citas misteriosas"
description: "Errores tipográficos, pases perdidos, camino equivocado, discrepancia entre BibTeX y Biber."
category: "cite-your-sources"
order: 5
level: "beginner"
tags: ["citations", "errors"]
featured: true
updated: 2026-07-25
---

# Borrar marcas de citas misteriosas

## El síntoma

El documento se compila, pero donde debería aparecer una cita aparece un signo de interrogación en negrita, `[?]`, y el registro contiene líneas como `LaTeX Advertencia: Cita 'knuth84' undefinida`. A veces todas las citas se ven afectadas, a veces sólo una o dos. Debido a que esto es una advertencia más que un error, el PDF aún se construye y es fácil pasar por alto las marcas hasta que un lector las señala.

## Por qué sucede

LaTeX no resuelve las citas directamente. En la primera pasada registra cada clave solicitada en un archivo auxiliar. Luego, un programa de backend (`bibtex` o `biber`) busca esas claves en su base de datos `.bib` y escribe entradas formateadas. Dos pases más de LaTeX vuelven a incluir los resultados. Un signo de interrogación significa que en el momento del pase final, no existía ninguna entrada formateada para esa clave. Cada causa de este síntoma es alguna forma de romper ese conducto.

## Resuelva las causas en orden

Primero verifique la clave. `\cite{knuth84}` y `@article{knuth1984,...}` son cadenas diferentes y la coincidencia es exacta, incluyendo mayúsculas y minúsculas. Busque en su archivo `.bib` la clave mencionada en la advertencia; un error tipográfico en cualquier lado es el culpable más común, y la primera advertencia de clave faltante en el registro es la que se debe perseguir.

A continuación, asegúrese de que se haya ejecutado el ciclo de compilación completo. La secuencia es LaTeX, luego `bibtex` o `biber`, luego LaTeX dos veces más. Una sola compilación nunca puede resolver las citas porque el backend aún no se ha ejecutado. Oleafly controla todo el ciclo automáticamente, pero una compilación manual o un editor mal configurado pueden detenerse después de la primera pasada.

En tercer lugar, verifique la ruta de la base de datos. `\bibliography{refs}` y `\addbibresource{refs.bib}` se resuelven en relación con el archivo principal, por lo que una base de datos en una subcarpeta debe escribirse como `bib/refs` o `bib/refs.bib`. Una ruta incorrecta falla silenciosamente y, por lo general, se lleva consigo toda la lista de referencias; consulte [Bibliografía vacía](/learn/bibliography-empty/) para conocer ese error mayor.

Finalmente, haga coincidir el backend con el sistema. Un documento que carga biblatex debe ser procesado con `biber`. Alimentarlo con el clásico `bibtex` no produce resultados utilizables, y cada cita sigue siendo un signo de interrogación sin importar cuántas veces se vuelva a compilar.

## Si todo lo demás falla

Los archivos auxiliares obsoletos pueden conservar un estado antiguo y roto. Elimine los archivos `.aux`, `.bbl` y `.blg` junto a su documento y reconstrúyalos desde cero. También vale la pena leer el archivo `.blg` antes de eliminarlo: es el propio registro del backend y nombra explícitamente las bases de datos faltantes y las entradas con formato incorrecto.