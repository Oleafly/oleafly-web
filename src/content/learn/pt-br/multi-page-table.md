---

title: "Tabelas com mais de uma página"
description: "cabeçalhos e rodapés longtable que se repetem."
category: "float-surgery"
order: 1
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Tabelas com mais de uma página

Um ambiente de `tabela` comum é um float, e um float deve caber em uma única página. Dê-lhe sessenta linhas e o LaTeX o coloca em uma página flutuante e deixa-o transbordar ou adia-o para sempre. A solução é o pacote `longtable`, que compõe uma tabela que se divide nas páginas e repete seu cabeçalho em cada uma delas, da mesma forma que uma planilha impressa.

```latex
\usepackage{longtable,booktabs}
\begin{longtable}{ll}
 \toprule
 Key & Value \\
 \midrule
 \endfirsthead
 \toprule Key & Value \\ \midrule \endhead
 \bottomrule \endfoot
 a & 1 \\
 % ... many rows
\end{longtable}
```

## Como funcionam os blocos de cabeçalho

Uma `longtable` começa com até quatro blocos de declaração antes das linhas de dados reais. Tudo acima de `\endfirsthead` é o cabeçalho impresso uma vez, bem no início da tabela. Tudo entre `\endfirsthead` e `\endhead` é o cabeçalho repetido no topo de cada página subsequente, e é por isso que a mesma linha "Chave e Valor" aparece duas vezes no exemplo. O bloco que termina em `\endfoot` é impresso na parte inferior de cada página que a tabela toca, aqui apenas uma `\bottomrule` de fechamento. Há também `\endlastfoot` para materiais que devem aparecer apenas nas linhas finais, como uma linha de totais. Se você quiser uma dica de continuação, um padrão comum é `\midrule \multicolumn{2}{r}{continua na próxima página} \\` no bloco do pé e o `\bottomrule` real no último pé.

Após as declarações vêm as linhas de dados, escritas exatamente como em uma `tabular` normal com `&` entre as células e `\\` no final de cada linha. As regras do `booktabs` funcionam inalteradas. Consulte [tabelas de três regras](/learn/booktabs-beautiful/) para saber o que elas substituem.

## Não é um carro alegórico e o que isso implica

A diferença comportamental mais importante é expressa em uma frase: `longtable` não é um float. Ele começa exatamente onde você o colocou no código-fonte, quebra onde as páginas quebram e não aceita nenhum argumento `[htbp]`. Isso também muda a forma como as legendas funcionam. Você não agrupa um `longtable` em um ambiente `table`. Em vez disso, coloque `\caption{...}\\` dentro da própria tabela, como a primeira linha do bloco first-head, e ela será numerada na mesma sequência que suas outras tabelas.

## Duas coisas que você deve saber antes de confiar nisso

Primeiro, as larguras das colunas são decididas globalmente, portanto o LaTeX pode precisar de vários passos de compilação antes que as colunas parem de mudar. Continue compilando até que o layout esteja resolvido. Segundo, `longtable` não pode ser usado dentro de um layout de duas colunas, o que o exclui para a maioria dos modelos de conferência. Nesses documentos, as opções realistas são reduzir a tabela, dividi-la em partes ou movê-la para um apêndice de uma coluna.