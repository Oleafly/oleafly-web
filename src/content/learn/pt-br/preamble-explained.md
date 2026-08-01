---

title: "Tudo acima começa{document}"
description: "Pacotes, metadados e ordem de carregamento: o que pertence ao preâmbulo e o que não pertence."
category: "open-the-loop"
order: 3
level: "beginner"
tags: ["basics", "preamble"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Preamble check'
  questions:
    - prompt: 'What is the preamble?'
      choices:
        - 'Everything after \end{document}'
        - 'Everything between \documentclass{...} and \begin{document}'
        - 'Only the bibliography file'
        - 'The PDF outline panel'
      answer: 'B'
      level: beginner
    - prompt: 'Does preamble material print as body text on its own?'
      choices:
        - 'Yes. Every package prints a banner page.'
        - 'No. It configures the run; visible text starts in the body.'
        - 'Only if you use article.'
        - 'Only on the second compile.'
      answer: 'B'
      level: beginner
    - prompt: 'Why is hyperref usually loaded late in the preamble?'
      choices:
        - 'Loading it earlier is illegal.'
        - 'It rewrites a lot of commands, so it wants other packages loaded first.'
        - 'It only works after \maketitle.'
        - 'Loaded early, it disables amsmath.'
      answer: 'B'
      level: intermediate
    - prompt: 'Which of these belongs in the preamble?'
      choices:
        - 'A multi-paragraph introduction'
        - '\usepackage{amsmath} and \title{...}'
        - '\section{Results}'
        - 'The main \includegraphics for a figure'
      answer: 'B'
      level: beginner
    - prompt: 'What do options like 11pt on \documentclass mostly control?'
      choices:
        - 'Journal acceptance rate'
        - 'Global defaults such as base font size (and often paper size)'
        - 'Which OS you compiled on'
        - 'How many figures you''re allowed'
      answer: 'B'
      level: beginner
---

# Tudo acima começa{document}

Tudo entre `\documentclass{...}` e `\begin{document}` é o **preâmbulo**. Não produz texto visível. Ele configura a execução. Fontes, margens, pacotes, comandos personalizados e metadados de documentos residem aqui, e é por isso que o preâmbulo de um artigo maduro costuma ser mais longo do que sua introdução. Depois de saber o que cada linha faz, um modelo copiado deixa de ser mágico e se torna uma lista de verificação.

## Anatomia

```latex
\documentclass[11pt,a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx,booktabs}
\usepackage{hyperref} % load late

\title{Title}
\author{You}
\date{\today}
```

As opções em `\documentclass` definem padrões globais: `11pt` é o tamanho base da fonte a partir do qual todo o resto é dimensionado, e `a4paper` declara o tamanho do papel. As duas linhas de codificação são companheiras históricas: `inputenc` informa ao mecanismo que seu arquivo de origem é UTF-8, e `fontenc` seleciona a codificação da fonte para que os caracteres acentuados sejam glifos reais em vez de compostos. O LaTeX atual já assume a entrada UTF-8, então você verá essas linhas omitidas em novos documentos, mas elas são inofensivas e os modelos as mantêm para compatibilidade.

O bloco intermediário carrega pacotes de recursos. [geometry](/learn/margins-geometry/) define as margens em uma opção, `amsmath` e `amssymb` fornecem os ambientes matemáticos e símbolos que quase todos os documentos técnicos precisam, `graphicx` permite `\includegraphics` para figuras e `booktabs` fornece as regras que fazem as tabelas parecerem profissionais. Finalmente, [hyperref](/learn/hyperlinks/) torna as referências e citações clicáveis ​​e é deliberadamente carregado por último, porque redefine os componentes internos de muitos outros pacotes.

As linhas `\title`, `\author` e `\date` armazenam apenas metadados. Nada é impresso até que `\maketitle` seja executado no corpo, e é por isso que eles podem ficar no preâmbulo.

## Regras práticas

Alguns hábitos mantêm os preâmbulos saudáveis. Carregue um pacote por trabalho e resista ao empilhamento de pacotes que disputam o mesmo território, como duas formas de definir margens. Mantenha o hyperref no final, com algumas exceções documentadas, como o intelligentef, que devem vir depois dele. Coloque as opções de todo o documento nas opções de classe em vez de espalhá-las, de modo que `11pt` ou `twocolumn` sejam declarados uma vez, onde qualquer pessoa possa vê-los. E quando suas [macros personalizadas](/learn/custom-commands/) ultrapassarem algumas linhas, mova-as para um arquivo `.sty` para que vários documentos possam compartilhar um conjunto de definições.

A disciplina mais útil é a negativa: se você não sabe por que existe uma linha de preâmbulo, descubra antes que seu documento dependa dela. Os preâmbulos copiados acumulam prazos e os prazos são onde os conflitos de pacotes se escondem. Veja também [o esqueleto do documento](/learn/document-skeleton/) e [mecanismos comparados](/learn/engines-compared/).