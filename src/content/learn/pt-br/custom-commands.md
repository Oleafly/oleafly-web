---

title: "Macros que mantêm a notação honesta"
description: "newcommand, NewDocumentCommand, um arquivo de macros compartilhado."
category: "runtime"
order: 4
level: "intermediate"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# Macros que mantêm a notação honesta

Todo artigo possui uma notação que se repete: os números reais, um operador de expectativa, um valor absoluto com barras de tamanho adequado. Se você digitar `\mathbb{R}` em quarenta lugares e seu orientador mais tarde preferir `\mathbf{R}`, você terá quarenta edições para fazer e perderá uma. Uma macro transforma essa notação em um único comando nomeado, definido uma vez. Mude a definição e todo o documento se seguirá. É assim que você mantém a notação honesta: a fonte não pode sair de sincronia consigo mesma.

## Definindo comandos com newcommand

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\E}[1]{\mathbb{E}\left[#1\right]}
\newcommand{\abs}[1]{\left\lvert #1 \right\rvert}
```

A primeira definição é do tipo mais simples: `\R` agora é pura abreviação, e digitar `\R` em qualquer lugar produz `\mathbb{R}`.

A segunda forma recebe um argumento. O `[1]` após o nome declara que `\E` aceita um argumento, e `#1` marca onde esse argumento chega na expansão. Então `\E{X}` se torna `\mathbb{E}\left[X\right]`. A definição compra mais do que brevidade: o par `\left[` e `\right]` faz com que os colchetes cresçam para caber no que quer que esteja dentro, então `\E{\frac{X}{n}}` obtém colchetes altos automaticamente. A macro `\abs` faz o mesmo com `\lvert` e `\rvert`, o par correto de barras verticais para valor absoluto. Você pode declarar até nove argumentos e referir-se a eles como `#1` até `#9`.

Se um comando já existir, `\newcommand` se recusa a redefini-lo e para com um erro, o que protege você de quebrar algo silenciosamente. Para substituir deliberadamente um comando existente, use `\renewcommand`.

## A interface moderna

O LaTeX atual também vem com um comando de definição mais rico:

```latex
\NewDocumentCommand{\citepair}{mm}{\cite{#1}, \cite{#2}}
```

`\NewDocumentCommand` usa uma string de especificação de argumento em vez de uma contagem. Aqui `mm` significa dois argumentos obrigatórios, então `\citepair{knuth84}{lamport94}` cita ambas as chaves. A linguagem de especificação vai além do que `\newcommand` pode: `o` declara um argumento opcional entre colchetes, `s` detecta uma variante em estrela e `O{default}` fornece um valor padrão a um argumento opcional. Para qualquer coisa além da simples substituição, acesse esta interface.

## Compartilhe as definições

Mantenha um `macros.sty` compartilhado entre os capítulos. Coloque suas definições naquele arquivo, carregue-o com `\usepackage{macros}` de cada documento, e cada capítulo de uma tese, mais os slides e a versão em papel, todos concordam em notação. Quando um colaborador ingressa, ele lê um pequeno arquivo para aprender suas convenções, em vez de fazer engenharia reversa delas a partir do texto. Isso combina naturalmente com uma [configuração de vários arquivos](/learn/split-chapter-files/).

Uma dica sobre nomenclatura: dê nomes significativos às macros como `\abs` ou `\norm` em vez de nomes baseados em aparência como `\bigbars`. O nome deve dizer o que a notação significa, então a definição é livre para alterar sua aparência. E resista a definir uma macro para algo que você usa duas vezes; a recompensa começa por volta do terceiro uso.