---

title: "Células que abrangem linhas ou colunas"
description: "multicolumn, multirow, cmidrule em cabeçalhos agrupados."
category: "float-surgery"
order: 2
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Células que abrangem linhas ou colunas

Tabelas reais geralmente precisam de células mescladas. Um cabeçalho como "Pontuações" que fica acima de duas colunas métricas abrange colunas, e um nome de modelo que se aplica a duas linhas de resultados abrange linhas. LaTeX lida com as duas direções com ferramentas diferentes: `\multicolumn` está embutido, enquanto `\multirow` vem do pacote de mesmo nome. Aqui está uma tabela compacta que usa ambos, além de uma regra parcial de `booktabs`:

```latex
\usepackage{multirow,booktabs}
\begin{tabular}{lcc}
 \toprule
 & \multicolumn{2}{c}{Scores} \\
 \cmidrule(lr){2-3}
 Model & Acc & F1 \\
 \midrule
 \multirow{2}{*}{Ours} & 0.9 & 0.88 \\
 & 0.91 & 0.89 \\
 \bottomrule
\end{tabular}
```

## Colunas abrangentes

`\multicolumn{2}{c}{Scores}` substitui duas células comuns por uma. O primeiro argumento é quantas colunas absorver, o segundo é uma especificação de coluna apenas para esta célula, aqui `c` para centralizado, e o terceiro é o conteúdo. Observe o único `&` antes dela: a primeira coluna dessa linha está deliberadamente vazia, então "Pontuações" começa na coluna 2 e cobre as colunas 2 e 3. Como o segundo argumento substitui o tipo de coluna localmente, `\multicolumn{1}{c}{...}` também é o truque padrão para centralizar uma única célula de cabeçalho acima de uma coluna alinhada à esquerda.

## A regra parcial

`\cmidrule(lr){2-3}` desenha uma regra horizontal apenas nas colunas 2 a 3, que vincula visualmente o cabeçalho agrupado às suas colunas. A opção `(lr)` corta ligeiramente a regra nas extremidades esquerda e direita, de forma que `\cmidrule`s adjacentes não toquem e sejam lidos como marcadores de grupo separados. Este é um comando `booktabs`, e o corte é um dos detalhes que faz com que essas tabelas pareçam compostas em vez de desenhadas. O estilo completo de três regras é abordado em [tabelas de três regras](/learn/booktabs-beautiful/).

## Linhas abrangentes

`\multirow{2}{*}{Ours}` imprime "Ours" centralizado verticalmente em 2 linhas. O primeiro argumento é a contagem de linhas, o segundo é a largura da célula, onde `*` significa a largura natural do conteúdo e o terceiro é o próprio conteúdo. O comando reserva apenas espaço visual, portanto a segunda linha ainda deve fornecer uma primeira célula vazia, e é por isso que a linha seguinte começa com um `&` vazio. Esquecer que a célula vazia desloca cada valor na linha uma coluna para a esquerda, e a mensagem de erro de desalinhamento aponta para a linha errada, então verifique primeiro a linha após um `\multirow`.

## Um limite prático

As células mescladas são melhor mantidas em cabeçalhos e grupos de linhas curtas. Uma tabela onde as células de dados se estendem em ambas as direções é difícil de ler e de manter, porque cada linha adicionada força você a recontar os intervalos. Se você estiver aninhando `\multirow` dentro de `\multicolumn`, considere reestruturar a tabela.