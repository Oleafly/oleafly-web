---

title: "Uma mesa que parece uma mesa de papel"
description: "tabular, regras de booktabs, legenda, rótulo."
category: "floats-and-ink"
order: 1
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Tables check'
  questions:
    - prompt: 'Which environment builds the cell grid in a classic LaTeX table?'
      choices:
        - 'figure'
        - 'tabular'
        - 'itemize'
        - 'equation'
      answer: 'B'
      level: beginner
    - prompt: 'What is booktabs mainly for?'
      choices:
        - 'Drawing TikZ trees'
        - 'Clean horizontal rules (top, mid, bottom) instead of a heavy grid'
        - 'Building bibliographies'
        - 'Inline math spacing'
      answer: 'B'
      level: beginner
    - prompt: 'Where do \caption and \label usually go for a table float?'
      choices:
        - 'Only in the preamble'
        - 'Inside the table float, with the label after the caption'
        - 'After \end{document}'
        - 'In a separate .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'In a tabular column spec, what does l mean?'
      choices:
        - 'Landscape page'
        - 'Left-aligned column'
        - 'Large font'
        - 'Equation label column'
      answer: 'B'
      level: beginner
---

# Uma mesa que parece uma mesa de papel

As tabelas em LaTeX usam dois ambientes aninhados com trabalhos diferentes. O `tabular` interno constrói a grade de células. A `tabela` externa torna essa grade um espaço flutuante, para que ela possa conter um número, uma legenda e um rótulo, e assim o LaTeX pode colocá-la onde a página tiver espaço. Adicione o pacote `booktabs` para as regras horizontais e o resultado parecerá uma tabela de um artigo publicado, não uma captura de tela de planilha.

```latex
\usepackage{booktabs}
\begin{table}[htbp]
 \centering
 \caption{Results on the test set.}
 \label{tab:results}
 \begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
 \end{tabular}
\end{table}
```

## O ambiente externo

O argumento `[htbp]` lista onde o LaTeX pode colocar o ponto flutuante: aqui no texto, no topo de uma página, na parte inferior ou em uma página separada de pontos flutuantes. Ele os testa nessa ordem, e conceder todos os quatro evita que a mesa se desloque muito; a mecânica é explicada em [onde os carros alegóricos realmente pousam](/learn/position-figures/). `\centering` centraliza a grade horizontalmente. O `\caption` imprime a legenda numerada e, por convenção, as legendas da tabela ficam acima da tabela, ao contrário das legendas das figuras, que ficam abaixo. `\label` deve vir depois de `\caption`, porque uma etiqueta registra o número emitido mais recentemente, conforme abordado em [legendas e rótulos](/learn/captions-labels/). Com o rótulo no lugar, `Table~\ref{tab:results}` em seu texto sempre imprime o número correto.

## A grade interna

O `{lcc}` após `\begin{tabular}` declara uma coluna por letra: `l` é alinhado à esquerda, `c` é centralizado e `r` seria alinhado à direita. Três letras significam três colunas e cada linha deve fornecer exatamente esse número de células. Dentro de uma linha, `&` separa as células e `\\` termina a linha. Colunas de texto geralmente são melhor lidas quando alinhadas à esquerda, enquanto colunas numéricas curtas geralmente são centralizadas.

As três regras vêm de `booktabs`. `\toprule` abre a tabela, `\midrule` separa a linha do cabeçalho dos dados e `\bottomrule` a fecha. Eles substituem o comando `\hline` simples e vêm com espaçamento ajustado corretamente acima e abaixo, que é a principal razão pela qual a tabela parece configurada profissionalmente. Sem linhas verticais e sem regras entre as linhas de dados: o estilo `booktabs` deixa ambos de fora propositalmente. O raciocínio é apresentado em [tabelas de três regras](/learn/booktabs-beautiful/).

## Notas práticas

Os erros mais frequentes para iniciantes são uma incompatibilidade entre o número de separadores `&` e as colunas declaradas, e um `\\` esquecido no final de uma linha, ambos os quais produzem mensagens de erro confusas apontando para a próxima linha. Se você preferir não contar células manualmente, crie a grade visualmente com o [gerador de tabelas](/tools/table-generator/) e cole o resultado em seu documento.