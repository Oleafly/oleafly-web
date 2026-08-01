---

title: "TikZ autônomo para PDF ou PNG"
description: "classe autônoma e externalizar caches."
category: "draw-in-tex"
order: 5
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# TikZ independente para PDF ou PNG

Uma imagem TikZ normalmente fica dentro de um papel, mas muitas vezes você precisa do diagrama como seu próprio arquivo: para reutilizá-lo em uma apresentação de slides, para entregá-lo a um coautor que trabalha no Word, para carregá-lo onde um PNG é necessário ou simplesmente para evitar a recompilação de um desenho caro em cada construção de documento. A classe de documento `standalone` existe exatamente para isso. Ele compõe uma imagem em uma página cortada no tamanho da imagem:

```latex
\documentclass[tikz,border=2pt]{standalone}
\begin{document}
\begin{tikzpicture}
 \draw (0,0) -- (1,1);
\end{tikzpicture}
\end{document}
```

## O que as opções de classe fazem

A opção `tikz` carrega o pacote TikZ para você e diz ao `standalone` para cortar a página de saída bem ao redor do `tikzpicture`, para que o PDF resultante seja exatamente tão grande quanto o desenho, sem margens de página. A opção `border=2pt` adiciona uma almofada de dois pontos em todos os lados, o que evita que os traços que ficam exatamente na caixa delimitadora sejam removidos pelos visualizadores ou impressores. Compile este arquivo como qualquer documento e a saída será um PDF pequeno e bem recortado contendo apenas o diagrama.

Prefira aquele PDF, porque é vetorial: ele pode ser dimensionado para qualquer tamanho sem desfocar. Soltá-lo em outro documento com `\includegraphics` funciona conforme descrito em [uma página PDF como gráfico](/learn/include-pdf-as-figure/). Quando uma cópia raster for realmente necessária, converta o PDF compilado em vez de recriar o desenho. Ferramentas de linha de comando como `pdftoppm -png -r 300 figure.pdf figure` produzem um PNG de 300 dpi e `pdf2svg` ou Inkscape produzem SVG. Exporte em 300 dpi ou mais se o PNG for impresso.

## Armazenando imagens em cache com externalização

Dentro de um documento grande, as imagens do TikZ são redesenhadas a cada compilação e alguns gráficos complexos podem dominar o tempo de construção. A biblioteca `externa` corrige isso compilando cada imagem em seu próprio PDF uma vez e reutilizando o arquivo em cache até que o código da imagem mude:

```latex
\usetikzlibrary{external}
\tikzexternalize[prefix=tikz-cache/]
```

A opção `prefix` mantém os arquivos gerados em sua própria pasta. A externalização executa o compilador em um modo que gera subcompilações, portanto, ele precisa do escape do shell habilitado e interage mal com algumas configurações. Se isso não acontecer, mova cada imagem grande para seu próprio arquivo "autônomo" e inclua os PDFs compilados. Isso proporciona o mesmo cache manualmente, com menos maquinário. Os tempos de compilação em geral são abordados em [menor espera pelo PDF](/learn/speed-up-compilation/).

Um erro comum merece um aviso: não faça captura de tela de um diagrama renderizado para obter um PNG. As capturas de tela capturam a resolução da tela, que parece aceitável em uma visualização de slide e confusa em qualquer outro lugar. Converta do PDF, onde a resolução é sua.