---

title: "BibTeX clássico ou biblatex"
description: "Back-ends, estilos e o que muda no dia a dia."
category: "cite-your-sources"
order: 3
level: "intermediate"
tags: ["citations"]
featured: true
updated: 2026-07-25
---

# Clássico BibTeX ou biblatex

O LaTeX possui dois sistemas de citação que leem os mesmos arquivos `.bib`, mas diferem em quase todo o resto. O BibTeX clássico data da década de 1980: um pequeno programa externo formata suas referências usando arquivos de estilo escritos em uma linguagem própria baseada em pilha. biblatex é o substituto moderno: a formatação acontece no próprio LaTeX, com um programa auxiliar chamado `biber` fazendo a classificação e manipulação de dados. Os nomes são confusamente semelhantes. Lembre-se que "BibTeX" é tanto o programa antigo quanto, vagamente, o sistema antigo, enquanto "biblatex" é um pacote LaTeX que usa `biber` como backend.

| | BibTeX | biblatex + biber |
| --- | --- | --- |
| Idade | Clássico | Moderno |
| Estilos | `.bst` | `.bbx`/`.cbx` |
| Unicode | Frágil | Forte |
| Suporte de periódico | Universais | Crescendo |

## O que as diferenças significam na prática

A linha de estilo é mais importante. Os estilos BibTeX são arquivos `.bst` que quase ninguém consegue ler ou modificar, então você pega o que o diário envia. Os estilos biblatex são LaTeX comuns, divididos em componentes de bibliografia (`.bbx`) e de citação (`.cbx`), e pequenas alterações como eliminação de URLs ou alteração de pontuação são personalizações de uma linha. A linha Unicode é importante se suas referências contiverem nomes acentuados ou scripts não latinos. O BibTeX clássico os deturpa, a menos que todos os caracteres sejam escapados como `\'{e}` e amigos, enquanto o biber lida com UTF-8 nativamente. A última linha é a razão pela qual o BibTeX clássico sobrevive: a maioria dos periódicos e conferências ainda distribuem um arquivo `.bst` e esperam o conjunto de ferramentas clássico, e os sistemas de submissão muitas vezes recusam qualquer outra coisa.

## Qual é a aparência de um documento biblatex

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84}
\printbibliography
```

Comparado com o padrão clássico, `\addbibresource{refs.bib}` (com a extensão) passa para o preâmbulo, `\printbibliography` substitui `\bibliography{refs}`, e não há linha `\bibliographystyle` porque o estilo é uma opção de pacote. A compilação deve executar `biber` em vez de `bibtex`; executar o back-end errado é uma causa comum de uma [bibliografia vazia](/learn/bibliography-empty/).

## Como escolher

Deixe o local decidir quando puder. Se o modelo enviar um arquivo `.bst` ou as instruções do autor mencionarem BibTeX, use o BibTeX clássico e não lute contra ele. Quando o formato é seu para controlar, como acontece com uma tese, uma pré-impressão ou notas de aula, o biblatex é a melhor ferramenta: personalização mais limpa, suporte real a Unicode e tipos de entrada criados especificamente para fontes da web. Seu banco de dados `.bib` funciona inalterado em qualquer sistema, portanto a escolha nunca é permanente. Os comandos de citação diferem entre os dois, e [hábitos natbib vs comandos biblatex](/learn/natbib-vs-biblatex/) mapeia um conjunto para o outro.