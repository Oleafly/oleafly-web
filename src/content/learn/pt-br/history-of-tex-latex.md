---

title: "TeX, LaTeX e 45 anos de belos documentos"
description: "Como um cientista da computação irritado em 1978 construiu o sistema de composição tipográfica a pesquisa ainda continua."
category: "research-101"
order: 8
level: "beginner"
tags: ["research", "basics", "latex"]
featured: false
updated: 2026-07-25
---

# TeX, LaTeX e 45 anos de lindos documentos

Cada ferramenta que você usará para escrever artigos vem da frustração de um homem com provas feias. A história é curta e explica muito sobre por que a redação de pesquisas funciona dessa maneira.

## 1978: Knuth fica irritado

Donald Knuth, um cientista da computação de Stanford, estava escrevendo sua série épica de livros *The Art of Computer Programming*. Quando a editora passou da composição tradicional de metal para os primeiros sistemas digitais, as novas provas pareciam terríveis, especialmente as matemáticas. A resposta de Knuth foi gloriosamente desproporcional: ele pausou os livros e passou anos construindo seu próprio sistema tipográfico, **TeX** (pronuncia-se “tech”, o X é um chi grego), lançando-o em 1978.

TeX era um programa que pegava texto simples com comandos de marcação e produzia páginas tipograficamente excelentes: espaçamento matemático perfeito, quebra de linha de parágrafo elegante, tudo bem. Knuth eventualmente congelou seu núcleo e oferece uma verificação de recompensa para cada bug encontrado. Muito poucos foram reivindicados.

## 1984: Lamport torna-o utilizável

Raw TeX é poderoso, mas de baixo nível, como a linguagem assembly para páginas. Em 1984, Leslie Lamport (mais tarde vencedor do Prêmio Turing para sistemas distribuídos) lançou **LaTeX**, uma camada amigável no topo: em vez de posicionar as coisas manualmente, você escreve `\section{Introduction}` e `\cite{knuth78}` e deixa o sistema lidar com numeração, referências e layout. LaTeX é o que quase todo mundo quer dizer hoje quando diz que “escreve em TeX”. Seu [primeiro documento](/learn/first-document/) é um documento LaTeX.

## Por que sobreviveu quatro décadas

Os processadores de texto vieram e desapareceram; O LaTeX permaneceu, por razões chatas e excelentes:

- **Matemática.** Nada compõe equações também, ainda. Consulte [modo matemático](/learn/math-mode/).
- **Texto simples.** Um arquivo .tex de 1985 é aberto hoje e funciona perfeitamente com controle de versão.
- **Automação.** Numeração, referências cruzadas e bibliografias funcionam apenas em 300 páginas.
- **Modelos.** Os editores codificam seu estilo interno exato como um arquivo de classe, para que cada envio seja idêntico. É por isso que [ACM, IEEE e amigos](/learn/acm-ieee-and-friends/) entregam modelos .tex, e é por isso que os periódicos ainda querem fontes .tex que possam compilar em seu próprio layout.

## A família de motores, de uma só vez

O mecanismo TeX original gerou sucessores modernos: **pdfTeX** adicionou saída direta em PDF, **XeTeX** adicionou fontes Unicode e de sistema e **LuaTeX** adicionou uma linguagem de script dentro do mecanismo. Basicamente, você apenas escolhe o que seu modelo espera. As diferenças práticas estão em [qual mecanismo para este projeto](/learn/engines-compared/).

## 2023: digite Typst

**Typst** é o primeiro desafiante moderno sério: uma nova linguagem de composição construída do zero com sintaxe mais limpa, compilação instantânea e mensagens de erro mais amigáveis. É genuinamente agradável e está crescendo rapidamente. Seus limites são o outro lado dos pontos fortes do LaTeX: quarenta anos de pacotes e, acima de tudo, aceitação dos editores. Os locais querem .tex hoje, então o LaTeX continua sendo a linguagem de envio, enquanto o Typst é ótimo para notas, relatórios e qualquer coisa que você controle a saída. Oleafly compila LaTeX, Typst e Markdown lado a lado, para que você possa usar cada um onde ele brilhar, sem trocar de aplicativo.

## A conclusão

TeX é o motor, LaTeX é a linguagem que todos escrevem, Typst é o jovem rival e os diários são a razão pela qual a velha guarda persiste. Onde isso se encaixa entre Overleaf, editores e gerentes de referência é o assunto da [caixa de ferramentas de redação de pesquisa, então e agora](/learn/research-tools-landscape/).