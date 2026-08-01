---

title: "Seu primeiro relatório de laboratório em LaTeX na graduação"
description: "Do zero a um relatório de compilação: modelo, equações, figuras, referências e um caminho de compilação que não requer administração manual do TeX Live."
date: 2026-07-02
tags: [students, beginners, lab-report]
---

Você não precisa dominar o LaTeX para concluir um relatório de laboratório. Você precisa de um modelo, um
poucos comandos e um botão de compilação que funciona no primeiro dia. Todo o resto pode
espere até que um curso posterior solicite um documento de aula de tese.

Este é um caminho curto que prioriza um PDF limpo em vez de uma composição tipográfica perfeita.

## Pule a instalação de vários gigabytes se puder

Um editor de pesquisa de desktop com um mecanismo integrado (por exemplo
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest)) leva você a um PDF
sem administrar TeX Live. Você obtém modelos, cartões de erro na linha que
quebrou, PDF ao lado da fonte com clique para pular e histórico de arquivo sem
curso Git separado. Se o seu instrutor exigir uma distribuição específica ou
No verso, siga as notas do curso. Caso contrário, otimize para começar.

Editores de nuvem também funcionam bem quando o curso já os utiliza. O objetivo é um PDF
dentro do prazo, não uma identidade de conjunto de ferramentas.

## Roube um esqueleto e exclua metade dele

Comece com um modelo simples de `artigo`:

```latex
\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,graphicx}
\begin{document}
\title{Lab 3: RC circuits}
\author{Your Name \and Lab Partner}
\date{Due date}
\maketitle

\section{Objective}
\section{Method}
\section{Results}
\section{Discussion}
\section{Conclusion}
\end{document}
```

Mais detalhes: [compile seu primeiro PDF](/learn/first-document/) e o
[referência rápida](/learn/cheatsheet/).

Exclua seções que sua rubrica não solicita. Não copie uma tese de 40 pacotes
preâmbulo "por precaução". Pacotes extras são como os iniciantes obtêm erros que não conseguem
leia.

## Equações para o laboratório, não para um livro didático

Em linha: `$F = ma$`. Mostrar:

```latex
\[
  v = v_0 + at
\]
```

Numere apenas o que você cita posteriormente com `\eqref`. Se o TA pedisse incerteza,
coloque-o em uma frase ou em uma pequena tabela, não em um `align` de dez linhas, você não
entendi ainda. Frações: `\frac{a}{b}`. Raízes quadradas: `\sqrt{x}`.

Quando o log de compilação disser algo assustador, corrija apenas o primeiro erro e depois
recompilar. Erros posteriores geralmente são ruídos do primeiro.

## Uma figura, bem feita

Exporte um gráfico como PDF ou PNG da sua ferramenta de análise. Inclua-o com:

```latex
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.85\textwidth]{plot.pdf}
  \caption{Measured voltage vs time for trial 2.}\label{fig:vr}
\end{figure}
```

No texto: `Figura~\ref{fig:vr} mostra...`. Legenda abaixo da figura. Etiqueta
após a legenda. Se a figura flutuar para a página errada, reduza ligeiramente a largura
antes de lutar contra as opções de posicionamento por uma hora:
[colocação do flutuador](/learn/figure-wrong-position/).

## Mesas sem sofrimento

Para algumas linhas, uma simples `tabular` é suficiente. Coloque uma legenda acima com `table`
+ `\legenda`. Alinhe os números para que o TA possa digitalizá-los. Você não precisa
`booktabs` de nível de publicação no laboratório 1, mas evite sopa de linhas verticais, se puder.

## Referências sem fluxo de trabalho bibliográfico de doutorado

Para três citações, uma lista manual funciona:

```latex
\begin{thebibliography}{9}
\bibitem{textbook}
  Author, \emph{Title}, year.
\end{thebibliography}
```

Para mais informações, exporte um `.bib` do Google Scholar ou Zotero e limpe as chaves para
eles são curtos e legíveis. Citações quebradas são impressas como `[?]`:
[limpando aspas misteriosas](/learn/citation-question-mark/).

Cite o manual do laboratório e o livro didático da maneira que o curso pede (IEEE, APA-ish ou
uma lista numerada simples). Combinar a rubrica é melhor que combinar um diário.

## Erros comuns para iniciantes

- Esquecendo `\usepackage{graphicx}` antes de `\includegraphics`
- Caracteres especiais como `%` e `_` no texto sem escape
- Delimitadores matemáticos `$` incompatíveis
- Nomes de arquivos com espaços (`my plot.pdf`) que incluem break
- Editando uma pasta diferente daquela que você compilou

Diminua a velocidade, corrija a primeira linha de log e recompile.

## Entregue o PDF, mantenha a fonte

Envie o que o LMS pede (geralmente PDF). Mantenha o `.tex` e as figuras em um
pasta que você ainda terá após o término do curso. Futuro você reutilizará o esqueleto
para o próximo relatório. Se o seu editor mantém o histórico do Git automaticamente, mesmo
melhor: você pode recuperar uma versão anterior à exclusão da equação correta.

## Uma primeira sessão de 90 minutos

Se você está começando hoje à noite:

1. Abra um modelo ou cole o esqueleto acima.
2. Preencha título, nome e cabeçalhos de seção da rubrica.
3. Adicione uma equação que você já sabe que está correta.
4. Exporte uma parcela; inclua-o; legenda; citá-lo em Resultados.
5. Adicione duas referências conforme o curso pede.
6. Compile até que o PDF pareça um relatório e não um artigo em branco.

Pare quando a rubrica estiver coberta. Não perca a noite com opções de pacotes.

## Quando algo quebra

Leia apenas o primeiro erro. Correções comuns: falta de `$`, falta de pacote para
gráficos, nome de arquivo errado, `}` extra. Salve uma cópia de uma versão de compilação antes
grandes edições para que você possa voltar atrás. Se o preâmbulo de um colega funcionar para o curso,
pegue emprestado os pacotes mínimos que eles usaram, não toda a pilha de teses.

## Como é o sucesso

O PDF abre, as margens parecem razoáveis, as figuras têm legendas, as equações são
legível e os itens da rubrica têm cabeçalhos claros. Isso é suficiente para um primeiro
Relatório de laboratório LaTeX. A perfeição tipográfica pode esperar por um papel que realmente precise
isso.