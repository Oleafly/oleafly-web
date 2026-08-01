---

title: "Um arquivo raiz, muitos capítulos"
description: "incluir vs entrada, incluir apenas e redigir um capítulo de cada vez."
category: "long-form"
order: 1
level: "intermediate"
tags: ["thesis"]
featured: true
updated: 2026-07-25
---

# Um arquivo raiz, muitos capítulos

Uma tese em um único arquivo `.tex` torna-se miserável para trabalhar em algum lugar por volta do segundo capítulo: a rolagem substitui o pensamento e cada compilação processa tudo. A cura padrão é um arquivo raiz que contém a classe e o preâmbulo, com cada capítulo em seu próprio arquivo. O arquivo raiz os une.

## O arquivo raiz

```latex
% main.tex
\documentclass{report}
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

`main.tex` é o único arquivo que você compila. Cada `\include` nomeia outro arquivo sem sua extensão `.tex`, usando barras em todas as plataformas, e extrai seu conteúdo nesse ponto. Os próprios arquivos de capítulo contêm apenas conteúdo, normalmente começando com `\chapter{...}`. Eles não têm `\documentclass` e nenhum ambiente `document` próprio, porque são fragmentos deste documento, não documentos.

## incluir versus entrada

Os dois comandos de inclusão se comportam de maneira diferente e as diferenças decidem qual usar e onde. `\include` inicia uma nova página antes do material, que se adapta aos capítulos, e escreve um arquivo `.aux` separado para cada arquivo incluído, que é o que torna possível a compilação seletiva. `\input` é uma pasta textual simples: sem quebra de página, sem `.aux` separado e pode ser aninhado dentro de outra entrada. Isso torna `\input` a ferramenta certa para fragmentos menores que um capítulo, como uma tabela grande mantida em seu próprio arquivo ou um [arquivo de macros] compartilhado(/learn/custom-commands/). Uma regra estrutural a ser lembrada é que `\include` não pode ser aninhado dentro de um arquivo incluído, enquanto `\input` pode ser usado em qualquer lugar.

## Elaborar um capítulo de cada vez

```latex
\includeonly{chapters/methods}
```

Colocado no preâmbulo, `\includeonly` diz ao LaTeX para processar apenas os arquivos listados enquanto ainda lê os dados `.aux` salvos de todos os outros. A compilação fica dramaticamente mais rápida e, como os rótulos e contagens de páginas dos outros capítulos são reproduzidos a partir de seus arquivos `.aux`, as referências cruzadas e a numeração no capítulo que você está redigindo permanecem corretas. Essa segunda metade é a razão para preferir isso a comentar as linhas `\include`, o que esquece completamente os outros capítulos e transforma cada `\ref` neles em `??`.

Comente a linha `\includeonly` para compilações completas e sempre execute uma compilação completa antes de compartilhar um PDF, uma vez que dados `.aux` obsoletos podem ficar atrasados ​​em relação às edições feitas nos capítulos excluídos. Para saber quais arquivos da pasta resultante são seus e quais são gerados, consulte [os arquivos em um projeto real](/learn/latex-file-types/).