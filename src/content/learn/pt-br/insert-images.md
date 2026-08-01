---

title: "Coloque uma figura"
description: "gráficox, largura, caminhos, PDF vs PNG."
category: "floats-and-ink"
order: 2
level: "beginner"
tags: ["figures"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Figures check'
  questions:
    - prompt: 'Which package gives you \includegraphics?'
      choices:
        - 'amsmath'
        - 'graphicx'
        - 'babel'
        - 'hyperref only'
      answer: 'B'
      level: beginner
    - prompt: 'Why is width=0.8\textwidth a sensible default?'
      choices:
        - 'It always crops the image'
        - 'It scales with the text width, so it still fits if margins change'
        - 'It converts PNG to PDF'
        - 'It turns floating off'
      answer: 'B'
      level: beginner
    - prompt: 'What does float behavior mean for a figure?'
      choices:
        - 'The image is animated'
        - 'LaTeX may move the figure to a better spot on the page, not always right at the source line'
        - 'Images only appear on page 1'
        - 'You can''t add captions'
      answer: 'B'
      level: beginner
    - prompt: 'For plots and diagrams, which format is usually best?'
      choices:
        - 'A full-size 12-megapixel phone JPG'
        - 'Vector PDF (stays sharp when scaled)'
        - 'BMP only'
        - 'Screenshots of equations instead of real math'
      answer: 'B'
      level: beginner
    - prompt: 'Why is [htbp] usually safer than [h] alone?'
      choices:
        - 'It enables color'
        - 'It gives LaTeX fallbacks (here, top, bottom, float page), so figures are less likely to pile up'
        - 'graphicx requires it'
        - 'It turns captions off'
      answer: 'B'
      level: intermediate
---

# Solte uma figura

LaTeX não possui suporte de imagem integrado. Tudo isso vem do pacote `graphicx`, que fornece o comando `\includegraphics`, e por convenção a imagem é envolvida em um ambiente `figure` para que possa conter uma legenda e um número. Este é o padrão que você usará centenas de vezes:

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## O que cada linha faz

A linha `\usepackage{graphicx}` vai no seu preâmbulo, antes de `\begin{document}`, e só precisa aparecer uma vez, não importa quantas imagens você inclua.

O ambiente `figure` torna a imagem flutuante, o que significa que o LaTeX escolhe onde ela vai parar em vez de fixá-la neste ponto exato do texto. As letras `[htbp]` são suas preferências de posicionamento: `h` significa aqui onde o código aparece, `t` significa o topo de uma página, `b` significa a parte inferior de uma página e `p` significa uma página separada de carros flutuantes. O LaTeX os testa nessa ordem e pega o primeiro que produz uma página decente. Se sua figura flutuar em algum lugar surpreendente, esse é um comportamento normal de flutuação, e [onde os flutuadores realmente pousam](/learn/position-figures/) explica como negociar com ela.

`\centering` centraliza a imagem horizontalmente dentro do bloco de texto. `width=0.8\textwidth` dimensiona a imagem para 80 por cento da largura do texto, preservando sua proporção, o que é quase sempre melhor do que especificar um tamanho absoluto em centímetros, porque se adapta se as margens do documento mudarem. O caminho do arquivo é relativo à raiz do projeto, então `figures/pipeline.pdf` significa uma pasta `figures` próxima ao seu arquivo `.tex` principal. Finalmente, `\caption` imprime a legenda numerada e `\label` registra o número para que `\ref{fig:pipeline}` possa citá-lo no texto. O rótulo deve vir depois da legenda, por motivos abordados em [legendas e rótulos](/learn/captions-labels/).

## Qual formato de arquivo usar

Prefira PDF para qualquer coisa vetorial, ou seja, gráficos, diagramas e fluxogramas, porque os gráficos vetoriais permanecem nítidos em qualquer zoom e em qualquer tamanho de impressão. Use PNG para capturas de tela e outras imagens baseadas em pixels. JPG é aceitável para fotografias, onde seus artefatos de compressão são invisíveis. Evite incorporar conteúdo com muito texto como capturas de tela, pois ele fica borrado na impressão e não pode ser pesquisado.

Redimensione também fotografias grandes antes de incluí-las. Uma foto de 12 megapixels exibida com 8 centímetros de largura incha o PDF e retarda cada compilação, enquanto uma versão reduzida para cerca de 300 dpi em seu tamanho impresso parece idêntica.

## O erro a evitar

Não lute contra a flutuação no primeiro dia exigindo `[h]` sozinho. O LaTeX muitas vezes recusa e depois carrega a figura e tudo o que está por trás dela até o final do capítulo. Escreva `[htbp]`, coloque o código da figura próximo ao parágrafo que primeiro faz referência a ele e deixe os números e referências fazerem o rastreamento para você.