---

title: "Correndo cabeças e pés"
description: "padrões fantasiahdr para título e número de página."
category: "the-page"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Correndo cabeças e pés

Um cabeçalho corrido é a faixa de texto no topo de cada página, e o pé corrido é sua contraparte na parte inferior. Em um livro ou tese, geralmente trazem o título do capítulo e o número da página. Em um artigo submetido, eles podem conter uma versão resumida do título, dos autores ou nada. Os estilos de página integrados do LaTeX (`plain`, `empty`, `headings`) cobrem o básico, mas no momento em que você deseja uma combinação específica, como o título à esquerda e o número da página à direita, você acessa o pacote `fancyhdr`.

## A receita padrão

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{Short title}
\fancyhead[R]{\thepage}
\renewcommand{\headrulewidth}{0.4pt}
```

Cada linha aqui faz um trabalho. `\usepackage{fancyhdr}` carrega o pacote em seu preâmbulo. `\pagestyle{fancy}` muda todo o documento para o estilo configurável do fancyhdr. `\fancyhf{}` limpa todos os campos de cabeçalho e rodapé, o que é importante porque o fancyhdr vem com padrões (número de página e marcas de seção) que você quase nunca deseja misturar com os seus. Começar do zero evita surpresas.

As próximas duas linhas preenchem os campos novamente. `\fancyhead[L]{Short title}` coloca o texto literal no espaço esquerdo do cabeçalho, e `\fancyhead[R]{\thepage}` coloca o número da página atual no espaço direito. `\thepage` é um comando que se expande para o número da página, portanto é atualizado automaticamente em cada página. Existe um `\fancyfoot[L/C/R]{...}` correspondente se você preferir colocar as coisas na parte inferior.

Finalmente, `\headrulewidth` controla a linha horizontal fina sob o cabeçalho. Definir como `0.4pt` desenha uma linha fina; defina-o como `0pt` para remover totalmente a regra. Um `\footrulewidth` também existe e o padrão é zero.

## Documentos frente e verso

Se a sua classe de documento usa `twoside` (o padrão para `book`), as páginas alternam entre pares e ímpares, e os cabeçalhos geralmente se espelham. O fancyhdr lida com isso com seletores pares/ímpares: `\fancyhead[LE,RO]{\thepage}` coloca o número da página à esquerda das páginas pares e à direita das páginas ímpares, que é onde o polegar do leitor o encontra. Você pode combinar isso com `\leftmark` e `\rightmark`, que contêm os títulos atuais dos capítulos e seções, para reproduzir o layout clássico do livro.

## Páginas de capítulo e a aparência vazia

As páginas de abertura de capítulo ignoram seu estilo sofisticado porque `\chapter` chama `\thispagestyle{plain}` nos bastidores. Isso é deliberado e a maioria dos designs o mantém. Se você quiser essas páginas vazias, adicione `\fancypagestyle{plain}{\fancyhf{}}` para redefinir o que `plain` significa.

Um aviso comum a ser esperado: o fancyhdr pode reclamar que `\headheight` é muito pequeno. A correção é exatamente o que a mensagem sugere, por exemplo `\setlength{\headheight}{14pt}` no preâmbulo, ou passar `headheight=14pt` para o [pacote de geometria](/learn/margins-geometry/) se você já o usa. É uma reserva de layout, não um erro, mas silenciá-la mantém seu log limpo e sua grade de linha de base honesta.