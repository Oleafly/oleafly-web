---

title: "Uma coluna ou duas"
description: "Por que os layouts diferem de acordo com o local, o que duas colunas fazem com números e equações e quem decide."
category: "paper-anatomy"
order: 7
level: "beginner"
tags: ["structure", "formatting"]
featured: false
updated: 2026-07-25
---

# Uma coluna ou duas

Abra dez jornais e você verá duas tribos: páginas densas de duas colunas que parecem papel de jornal e páginas arejadas de uma coluna que parecem um livro. Nenhum dos dois é melhor. Cada um evoluiu por uma razão, e a escolha quase nunca é sua.

## Por que os locais são diferentes

Os layouts de duas colunas são uma tradição de conferências, nascidos quando os anais eram impressos e os orçamentos de páginas eram apertados. Colunas estreitas contêm mais palavras por página e linhas curtas são mais fáceis de digitalizar. A maioria das conferências de CS (ACM, IEEE e amigos) ainda os utiliza.

Layouts de uma coluna dominam periódicos, preprints e teses. Eles dão espaço para equações, figuras e tabelas respirarem e são mais amigáveis ​​​​para leituras longas. Servidores de pré-impressão e muitos locais de ML mudaram para coluna única, em parte exatamente por esse motivo.

| Disposição | Casa típica | Personalidade |
|---|---|---|
| Duas colunas | Anais da conferência | Denso, digitalizável, com páginas limitadas |
| Uma coluna | Periódicos, preprints, teses | Espaçoso, legível e fácil de usar |

## O que duas colunas fazem com seus números

Em um documento de duas colunas, uma “figura” normal flutua dentro de uma coluna, que geralmente é muito estreita para um gráfico detalhado. A variante com estrela abrange ambas as colunas:

```latex
\begin{figure*}
  \centering
  \includegraphics[width=\textwidth]{wide-results.pdf}
  \caption{A figure that needs the full page width.}
\end{figure*}
```

O mesmo truque para tabelas largas com `table*`. Um problema: os carros alegóricos com estrela normalmente aparecem no topo de uma página e não podem usar o posicionamento inferior ou aqui, então planeje seus números largos com antecedência. As noções básicas de dimensionamento estão em [inserção de imagens](/learn/insert-images/).

## As equações ficam restritas

Uma coluna com cerca de 3,3 polegadas de largura é um local hostil para equações longas. Em artigos de duas colunas, você quebrará equações com mais frequência, abreviará de forma mais agressiva e se apoiará em ambientes multilinhas. Se o seu artigo tiver muitas equações e você puder escolher o local, uma única coluna economizará tempo real de formatação. Consulte [modo matemático](/learn/math-mode/) para ver as ferramentas.

## Telas e leitores de tela preferem uma coluna

Para qualquer coisa que não seja um envio formal em papel (relatórios, documentação, currículos, pré-impressões que as pessoas lerão em laptops e telefones), a coluna única vence. Os PDFs não refluem, portanto, as páginas de duas colunas forçam os leitores de tela e extratores de texto a adivinhar a ordem de leitura e forçam os humanos a rolar para cima e para baixo em cada página. Os sistemas de análise de currículo são famosos por embaralhar layouts de várias colunas. Reserve duas colunas para locais que as exijam.

## A classe do documento decide por você

Aqui está a parte relaxante: quase nunca você configura isso manualmente. O local entrega a você uma aula ou modelo, e o layout vem com ele.

```latex
\documentclass{article}              % one column
\documentclass[twocolumn]{article}   % two columns
\documentclass[sigconf]{acmart}      % venue class, layout included
```

Escreva seu conteúdo uma vez e a troca de modelos reflui tudo. É para isso que serve o LaTeX: a mesma fonte compila para uma versão de conferência de duas colunas e uma pré-impressão de uma coluna com uma alteração de uma linha. Mantenha suas figuras em formatos vetoriais e suas equações em ambientes padrão, e a troca de layout será quase indolor.