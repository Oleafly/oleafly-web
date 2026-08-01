---

title: "Limites de páginas sem crimes tipográficos"
description: "Maneiras legítimas de atingir o limite, os hacks que fazem com que os documentos sejam sinalizados e por que os locais verificam."
category: "venue-formats"
order: 5
level: "advanced"
tags: ["venues", "formatting"]
featured: false
updated: 2026-07-25
---

# Limites de páginas sem crimes tipográficos

Seu artigo tem 10,4 páginas. O limite é 10. O que acontece na próxima hora determina se você corrige o artigo ou comete uma violação de formatação que faz com que ele seja rejeitado.

## Aperte o conteúdo, não o formato

Trabalhe esta lista em ordem. Cada etapa é invisível para os verificadores de formatação porque altera o papel, não o modelo.

1. **Aperte a prosa primeiro.** Meia página excedente geralmente é uma seção prolixa de trabalho relacionado e três frases de transição redundantes. Cortar palavras melhora o papel. Cortar espaços em branco não.
2. **Cace viúvas.** Um parágrafo cuja última linha contém uma ou duas palavras desperdiça uma linha inteira. Reescrever uma frase desse parágrafo o recupera.
3. **Redimensione os números honestamente.** Muitos números têm enormes margens internas. Corte o espaço em branco na própria figura ou solte uma figura de duas colunas em uma coluna se ela permanecer legível.
4. **Tabelas finas.** Tabelas `booktabs` sem regras verticais são mais compactas e têm melhor aparência, consulte [belas tabelas](/learn/booktabs-beautiful/), e cabeçalhos de colunas abreviados compram largura real.
5. **Use figuras vetoriais.** Os gráficos de PDF são reduzidos de forma limpa, para que você possa reduzi-los ainda mais do que PNGs pixelados antes que a legibilidade acabe. Figuras raster difusas têm seus próprios problemas, consulte [fontes difusas em PDFs](/learn/fuzzy-font-pdf/).
6. **Mova o material para um apêndice ou suplemento** se o local permitir. Provas, ablações extras e tabelas de hiperparâmetros são candidatos clássicos a overflow. Verifique se o apêndice conta no limite, muitos locais o excluem, outros não.

## Os crimes

Estes alteram o modelo em vez do papel. Os comitês do programa executam verificadores de formato automatizados precisamente porque as pessoas os testam:

| Crime | Como é pego |
|---|---|
| `\vspace{-8pt}` espalhado por toda parte | Espaçamento visivelmente limitado, difere dos padrões de classe |
| `\usepackage[margin=...]{geometria}` | Medição de margem automatizada |
| Diminuindo `\baselinestretch` ou tamanho da fonte | Contagens de linhas por coluna, sondagens de tamanho de fonte |
| `\small` ou `\footnotesize` no corpo do texto ou nas legendas | Sondas de tamanho de fonte, olhos do revisor |
| `\itemsep` negativo, listas esmagadas | Aparência restrita, heurística do verificador |
| Renomeando o arquivo de classe com edições internas | Soma de verificação em relação à classe oficial |

## Por que os locais realmente verificam

Um limite de páginas é um contrato de justiça: cada autor recebe o mesmo espaço e cada revisor se compromete a ler uma quantidade limitada. Um artigo que chega a 10 páginas é, na verdade, um artigo de 11 páginas competindo com artigos honestos de 10 páginas. É por isso que as violações são tratadas como uma questão de integridade e não como uma questão de estilo. Muitos locais rejeitam sem revisão e não há apelo que diga "mas o conteúdo era bom".

## O último recurso honesto

Se você apertou a prosa, reduziu os flutuadores, moveu as provas para o apêndice e ainda assim acabou: corte um resultado. Doloroso, mas um artigo focado de 10 páginas analisa melhor do que um abarrotado de qualquer maneira. Os revisores podem sentir a densidade, e [escolher um local](/learn/choose-your-venue/) com um formato mais longo é sempre uma opção para o próximo envio.