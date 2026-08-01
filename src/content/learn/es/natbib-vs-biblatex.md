---

title: "hábitos natbib vs comandos biblatex"
description: "Citas entre paréntesis y textuales, y los nombres que las reemplazan."
category: "cite-your-sources"
order: 8
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# hábitos natbib vs comandos biblatex

La cita del año del autor necesita dos tipos de comando de cita. A veces los autores son parte de su frase, como en "Knuth (1984) introdujo la programación alfabetizada". A veces la cita es un paréntesis, como en "La programación alfabetizada mezcla código y prosa (Knuth, 1984)". El `\cite` simple no puede hacer esa distinción, razón por la cual existe el paquete `natbib` y por el cual biblatex envía su propio conjunto de nombres para las mismas ideas. Si aprendiste uno y te entregan una plantilla usando el otro, esta página es la tabla de traducción.

## Los comandos natbib

```latex
\usepackage{natbib}
\citet{knuth84}  % Knuth (1984)
\citep{knuth84}  % (Knuth, 1984)
\citep*{knuth84} % (Knuth, Lamport, and Mittelbach, 1984): full author list
```

La mnemónica es que `\citet` es una cita *textual* que se lee como parte de la oración, mientras que `\citep` es una cita *entre paréntesis* entre corchetes. Las variantes destacadas imprimen la lista completa de autores en lugar de "et al.", que en ocasiones es necesario la primera vez que se cita una obra. natbib también ofrece `\citeauthor` solo para los nombres, `\citeyear` solo para el año y un argumento opcional para los números de página, como en `\citep[p.~42]{knuth84}`. natbib es un paquete de la era del preprocesador: funciona con BibTeX clásico y un estilo `.bst` compatible como `plainnat` o `apalike`.

## Los equivalentes de biblatex

biblatex cubre el mismo terreno con diferentes nombres. `\textcite{knuth84}` produce la forma textual "Knuth (1984)", `\parencite{knuth84}` produce el paréntesis "(Knuth, 1984)", y `\cite{knuth84}` simple produce una cita simple cuyo aspecto exacto depende del estilo cargado. También hay análogos directos para el resto: `\citeauthor`, `\citeyear` y notas previas y posteriores para cosas como números de página, escritos `\parencite[see][p.~42]{knuth84}`. Si la memoria muscular es el problema, biblatex incluso tiene una opción de paquete `natbib=true` que define `\citet` y `\citep` como alias, lo que hace que la migración sea casi indolora.

## Migrar un documento de natbib a biblatex

Su archivo `.bib` no necesita ningún cambio. Ambos sistemas leen la misma base de datos. La migración toca sólo el preámbulo y la compilación. Elimine `\usepackage{natbib}` y la línea `\bibliographystyle`, luego cargue `\usepackage[backend=biber,style=authoryear]{biblatex}` y apúntelo a su base de datos con `\addbibresource{refs.bib}`. Reemplace `\bibliography{refs}` al final del documento con `\printbibliography`. Finalmente, asegúrese de que la compilación ejecute `biber` en lugar de `bibtex`, porque biblatex almacena sus datos en un formato diferente y el antiguo backend no producirá nada silenciosamente. Si prefiere no tocar el texto del cuerpo, mantenga los nombres de los comandos natbib a través de la opción de compatibilidad y solo cambia el preámbulo.

## ¿Cuál elegir?

Si la plantilla de diario ya carga natbib, quédese con ella. Rara vez vale la pena luchar contra un archivo de clase. Para los documentos nuevos que usted elija, biblatex es más flexible y maneja mejor Unicode. La comparación más amplia se encuentra en [BibTeX clásico o biblatex](/learn/bibtex-vs-biblatex/), y el cambio de estilos posterior se trata en [Numérico, año de autor, estilos de revista](/learn/change-citation-style/).