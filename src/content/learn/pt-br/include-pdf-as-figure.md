---

title: "Uma página PDF como gráfico"
description: "incluem gráficos com seleção de páginas e páginas em pdf para apêndices."
category: "float-surgery"
order: 6
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Uma página PDF como gráfico

PDF é o melhor formato de figura que o LaTeX pode consumir. Ao contrário do PNG ou JPG, um PDF armazena dados vetoriais, de modo que as linhas e os rótulos permanecem nítidos em qualquer nível de zoom e as fontes dentro dele acompanham o arquivo. Ferramentas como Matplotlib, Inkscape e draw.io exportam PDF, o que significa que o diagrama que você desenhou em outro lugar pode cair diretamente no seu documento. Mas os PDFs trazem uma desvantagem que as imagens não trazem: um PDF pode conter muitas páginas, e você tem que dizer ao LaTeX qual você deseja.

## Extraindo uma página de um PDF de várias páginas

O `\includegraphics` do pacote `graphicx` aceita uma opção `page` junto com as chaves de dimensionamento usuais:

```latex
\includegraphics[page=1,width=\textwidth]{diagram.pdf}
```

Aqui `page=1` seleciona a primeira página de `diagram.pdf`, e `width=\textwidth` dimensiona essa página para a largura total do bloco de texto. Se você omitir `page`, o LaTeX usará silenciosamente a página um, que geralmente é o que você deseja, mas pode surpreendê-lo quando um script de plotagem grava várias figuras em um único arquivo. Você pode incluir o mesmo PDF várias vezes com diferentes valores de `página`, uma vez por ambiente de figura, cada um com sua própria legenda e rótulo.

Envolva o comando em um ambiente `figure` normal para que ele receba uma legenda e um número, exatamente como faria para [qualquer outra imagem](/learn/insert-images/). A página incluída é cortada em sua própria caixa delimitadora, portanto, se o PDF de origem tiver margens generosas, a figura parecerá preenchida. Exporte novamente com uma caixa delimitadora estreita ou corte-a uma vez com uma ferramenta como `pdfcrop`, em vez de combater os espaços em branco com espaçamento negativo.

## Inserindo documentos inteiros com páginas pdf

Às vezes você não quer uma figura. Você deseja que páginas inteiras, literalmente, sejam inseridas em seu documento: um PDF suplementar, um formulário assinado, um questionário publicado em um apêndice de tese. Esse é o trabalho do pacote `pdfpages`:

```latex
\usepackage{pdfpages}
\includepdf[pages=-]{supplement.pdf}
```

O valor `pages=-` significa todas as páginas. Você também pode escrever `pages=2-5` para um intervalo ou `pages={1,3,7}` para uma lista específica. Cada página inserida preenche sua própria página de saída, mantém seu layout original e participa da numeração de páginas do documento, para que o apêndice seja lido continuamente. Adicione a opção `pagecommand={}` se os cabeçalhos ou rodapés da sua classe de documento estiverem sendo impressos sobre as páginas inseridas e você desejar que eles sejam suprimidos ou personalizados.

## Qual ferramenta para qual trabalho

Use `\includegraphics[page=...]` quando o conteúdo do PDF deve se comportar como uma figura, o que significa que ele flutua, carrega uma legenda e é referenciado no texto. Use `\includepdf` quando as páginas devem ficar sozinhas em tamanho real. O erro comum é usar `pdfpages` para um diagrama, o que fornece uma página inteira sem legenda e sem referência que você não pode citar com `\ref`. Se algum dia os leitores virem "veja a Figura 3", isso pertence a um ambiente de figura.