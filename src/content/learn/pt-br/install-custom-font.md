---

title: "Um arquivo de fonte próximo ao projeto"
description: "fontspec Caminho para famílias locais otf ou ttf."
category: "typefaces"
order: 2
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Um arquivo de fonte próximo ao projeto

Suponha que sua tese use uma fonte que não esteja instalada em todas as máquinas que irão compilá-la: o laptop de um coautor, um servidor de compilação universitária ou seu próprio computador após uma reinstalação. A instalação da fonte em todo o sistema em cada um deles é frágil e às vezes não é permitida. Coloque os arquivos de fontes na pasta do projeto e aponte `fontspec` para eles, para que o documento carregue sua própria tipografia. Isto requer XeLaTeX ou LuaLaTeX, já que `fontspec` não funciona em pdfLaTeX. Os motivos são abordados em [por que as pessoas mudam para o XeLaTeX](/learn/when-use-xelatex/).

```latex
\usepackage{fontspec}
\setmainfont{MyFont}[
 Path = ./fonts/,
 Extension = .otf,
 UprightFont = *-Regular,
 BoldFont = *-Bold,
 ItalicFont = *-Italic
]
```

## O que cada tecla faz

`\setmainfont{MyFont}` declara a família de texto principal e fornece a ela o nome base usado para construir nomes de arquivos. `Path = ./fonts/` diz ao `fontspec` para procurar os arquivos em uma pasta `fonts` dentro do projeto, relativa ao arquivo `.tex` principal, em vez de perguntar ao sistema operacional. `Extension = .otf` indica o tipo de arquivo uma vez, para que não precise ser repetido por arquivo. Use `.ttf` se é isso que você tem.

As teclas restantes mapeiam formas de fonte para arquivos. Em cada um, o `*` se expande para o nome base, então `UprightFont = *-Regular` resolve para `MyFont-Regular.otf`, e da mesma forma `MyFont-Bold.otf` e `MyFont-Italic.otf`. Esses nomes devem corresponder exatamente aos nomes dos arquivos reais, incluindo letras maiúsculas, porque o caso é importante em servidores Linux, mesmo quando o sistema local o perdoa. Se a família tiver negrito e itálico, adicione `BoldItalicFont = *-BoldItalic`. Uma forma que você não mapeia é uma forma que o documento não pode usar: sem nenhuma linha `BoldFont`, `\textbf` não tem nada para onde mudar, e o compilador avisa que a forma em negrito é indefinida.

A mesma sintaxe funciona para as outras famílias, então `\setsansfont` e `\setmonofont` aceitam blocos de opções idênticos para uma fonte sans-serif local ou de código.

## Licenciamento e portabilidade

Envie os arquivos de fontes com o projeto somente se a licença permitir a redistribuição. Licenças abertas, como a SIL Open Font License, permitem isso, e as fontes do Google Fonts geralmente se qualificam, mas as fontes comerciais geralmente proíbem a passagem de cópias para colaboradores; nesse caso, cada máquina precisa de sua própria cópia licenciada e você deve documentar esse requisito no leia-me do projeto.

O erro comum é uma incompatibilidade silenciosa entre os nomes declarados e os arquivos, geralmente após renomear a pasta ou baixar um peso com nome diferente. A compilação então para com "A fonte 'MyFont-Regular' não pode ser encontrada". Quando isso acontecer, compare o nome do arquivo esperado do erro, caractere por caractere, com o conteúdo da pasta e confirme se o `Path` ainda aponta onde os arquivos residem. Como o mecanismo Tectonic incluído no Oleafly é baseado em XeTeX, esse padrão local do projeto funciona lá sem a instalação de fontes do sistema.