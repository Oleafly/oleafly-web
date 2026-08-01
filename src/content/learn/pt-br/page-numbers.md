---

title: "Números de página ativados ou desativados"
description: "simples, vazio, romano versus árabe, suprimindo números na página de título."
category: "type-and-shape"
order: 5
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Números de página ativados ou desativados

Os números das páginas aparecem por padrão em `article`: as classes padrão usam o estilo de página `plain`, que centraliza o número na parte inferior de cada página. Geralmente isso é bom e você nunca pensa sobre isso. As três situações em que você pensa sobre isso são ocultar o número em uma página de título, desativar totalmente a numeração e alternar entre algarismos romanos e arábicos em um documento mais longo.

## Escondendo o número na página de título

Uma página de título com um “1” solitário na parte inferior parece inacabada. A correção é uma linha colocada logo após o título ser definido:

```latex
\maketitle
\thispagestyle{empty}
```

`\thispagestyle{empty}` altera o estilo da página apenas para a página atual, e `empty` é o estilo integrado que não imprime nada no cabeçalho ou rodapé. A ordem é importante: ela deve vir depois de `\maketitle` na mesma página, porque o próprio `\maketitle` redefine o estilo da página. Observe que a página ainda conta; a próxima página será numerada 2. Se você usar `\begin{titlepage}...\end{titlepage}` em vez de `\maketitle`, o número será suprimido para você e a página seguinte começará em 1.

## Estilos e sistemas de numeração

```latex
\pagestyle{plain} % number at bottom
\pagestyle{empty} % nothing
\pagenumbering{roman}
\pagenumbering{arabic}
```

Esses dois pares de comandos controlam coisas diferentes, e misturá-los é o clássico tropeço. `\pagestyle{...}` controla onde o número aparece e o que o rodeia: `plain` fornece o número do rodapé centralizado, `empty` remove cabeçalhos e rodapés de todas as páginas daquele ponto em diante. Não diz nada sobre a aparência do número.

`\pagenumbering{...}` controla como o número é escrito: `roman` produz i, ii, iii, enquanto `arabic` produz 1, 2, 3. Existem também `Roman` para I, II, III e `alph` para a, b, c, embora você raramente precise deles. `\pagenumbering` também redefine o contador de páginas para 1. Essa redefinição é um recurso, não um bug: é o que permite a uma tese numerar seu prefácio de i a vi e então iniciar o capítulo um na página 1.

Se você deseja controle total sobre o posicionamento, como o número em um canto ou emparelhado com um título em execução, esse é o trabalho do pacote fancyhdr, e não desses integrados. Consulte [cabeças e pés em execução](/learn/headers-footers/).

## O erro comum

Escrever `\pagestyle{empty}` quando você quis dizer `\thispagestyle{empty}` remove silenciosamente os números de todo o documento, e você pode não perceber até que um revisor pergunte por que suas páginas não estão numeradas. Lembre-se da regra: `\thispagestyle` é uma exceção de uma página, `\pagestyle` é uma opção para todo o documento.

Matéria inicial da tese: [Guia romano/árabe](/learn/front-matter-page-numbers/).