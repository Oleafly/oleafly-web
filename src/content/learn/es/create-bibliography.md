---

title: "Construye un babero que dure"
description: "Tipos de entrada, campos obligatorios, claves estables."
category: "cite-your-sources"
order: 2
level: "beginner"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Construye un babero que dure

Un archivo `.bib` es una pequeña base de datos en texto plano de todo lo que puedas citar. Cada entrada tiene un tipo, una clave y un conjunto de campos, y el mismo archivo puede servir para todos los artículos que escriba durante años. Un poco de disciplina ahora, en la forma de elegir tipos, completar campos y nombrar claves, le ahorrará un verdadero dolor de cabeza cuando un estilo de diario de repente quiera un campo que nunca registró.

## Anatomía de una entrada

```bibtex
@article{knuth84,
  author  = {Knuth, Donald E.},
  title   = {Literate Programming},
  journal = {The Computer Journal},
  year    = {1984},
  volume  = {27},
  number  = {2},
  pages   = {97--111}
}
```

La palabra después de `@` es el tipo de entrada, que le indica al estilo qué tipo de trabajo es y, por lo tanto, qué campos esperar. `knuth84` es la clave de cita, el identificador que escribe dentro de `\cite{...}`. Todo lo demás es un campo. El campo "autor" usa la forma "Apellido, Primero" para que el estilo pueda abreviar y ordenar nombres de manera confiable, y "páginas" usa un guión doble, que LaTeX escribe como un guión de rango de páginas.

## Los tipos de entrada que realmente necesitas

Seis tipos cubren casi todos los escritos académicos. Utilice `@article` para artículos de revistas, `@inproceedings` para artículos de conferencias y talleres, `@book` para libros, `@phdthesis` para disertaciones, `@techreport` para informes institucionales y muchos preprints, y `@misc` para cualquier otra cosa, incluidos software y sitios web. Elegir el tipo correcto es importante porque los estilos dan formato a cada uno de manera diferente: una entrada "@inproceedings" quiere un "título del libro" (el nombre de la conferencia), mientras que una "@artículo" quiere una "diario".

## Campos obligatorios y por qué se quejan los validadores

Cada tipo tiene campos obligatorios, y la falta de uno es la razón más común por la que una entrada de bibliografía aparece dañada o genera una advertencia de backend. Para "@artículo", los elementos esenciales son "autor", "título", "revista" y "año"; para `@inproceedings`, `autor`, `título`, `título del libro` y `año`. Faltar "año" o "autor" es el error clásico, porque los estilos autor-año literalmente no pueden construir una etiqueta de cita sin ellos. Los campos opcionales como "volumen", "páginas", "doi" y "editor" hacen que las entradas sean más útiles, así que regístrelas mientras la fuente esté frente a usted. Puede verificar un archivo completo a la vez con el [validador BibTeX](/tools/bibtex-validator/).

## Claves que sobreviven a una década

Las claves de citas son para siempre. Cada `\cite{knuth84}` en cada borrador, nota y presentación de diapositivas se refiere a esa cadena exacta, por lo que cambiar el nombre de una clave significa buscar cada uso. Elija una convención como `authorYEAR` o `authorYEARkeyword`, aplíquela desde el primer día y nunca "limpie" claves en una base de datos establecida. Si administra referencias en Zotero, el complemento Better BibTeX puede generar y fijar claves estables por usted; consulte [Zotero en un archivo .bib](/learn/zotero-latex/). Para conectar el archivo a un documento, comience con [De la clave .bib a la cita en el texto](/learn/add-citations/).