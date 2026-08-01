---

title: "Espera mais curta pelo PDF"
description: "Rascunho de figuras, inclusão apenas, externalização TikZ, CPU local."
category: "long-form"
order: 5
level: "intermediate"
tags: ["thesis", "compile"]
featured: false
updated: 2026-07-25
---

# Menor espera pelo PDF

Uma tese que leva noventa segundos para ser compilada muda a forma como você escreve. Você para de recompilar após pequenas edições, os erros se acumulam sem serem vistos e o ciclo de feedback que torna o LaTeX agradável desaparece. Antes de otimizar, saiba para onde vai o tempo. Na maioria dos documentos longos, não é o número de pacotes, mas um punhado de recursos pesados, acima de tudo imagens grandes e imagens TikZ complexas, que dominam a construção. As técnicas abaixo os atacam diretamente.

## Pule as figuras durante o rascunho

A opção `draft` faz com que o LaTeX substitua cada imagem por uma caixa vazia do mesmo tamanho, o que preserva o layout e as quebras de página enquanto pula o processamento da imagem:

```latex
\documentclass[draft]{article}
```

O `rascunho` em nível de classe também marca linhas muito cheias com barras pretas, o que algumas pessoas consideram úteis e outras consideram barulhentas. Para limitar o efeito às imagens, passe a opção para o pacote, como `\usepackage[draft]{graphicx}`, ou para um único culpado com `\includegraphics[draft]{...}`. Lembre-se de removê-lo antes de compartilhar um PDF, pois um rascunho parece quebrado para quem não conhece a opção. Independentemente do modo rascunho, reduza a escala de fotografias enormes uma vez, conforme descrito em [colocar uma figura](/learn/insert-images/), porque uma imagem de 40 megabytes custa para sempre em cada compilação.

## Compila apenas o capítulo atual

Se seus capítulos residem em arquivos separados extraídos com `\include`, o comando `\includeonly` restringe uma compilação aos arquivos que você nomeia:

```latex
\includeonly{chapters/04-results}
```

Coloque-o no preâmbulo e o LaTeX compila apenas aquele capítulo enquanto lê os arquivos `.aux` dos outros, para que os números das páginas e as referências cruzadas do resto do documento permaneçam aproximadamente corretos. Esta é a maior economia para uma tese, transformando rotineiramente uma construção de um minuto em segundos. Ele só funciona com `\include`, não com `\input`, que é uma das razões para estruturar documentos longos conforme descrito em [dividir um documento em arquivos](/learn/split-chapter-files/).

## Armazene fotos caras em cache

As imagens do TikZ são redesenhadas do zero em cada compilação. A biblioteca `external`, carregada com `\usetikzlibrary{external}` mais `\tikzexternalize`, compila cada imagem em seu próprio PDF uma vez e a reutiliza até que o código mude. A configuração possui bordas nítidas e a alternativa manual de mover imagens grandes para arquivos independentes também funciona; ambos são abordados em [TikZ independente para PDF ou PNG](/learn/tikz-export/).

## Menos passadas, ferro mais rápido

A resolução de bibliografia e de referências cruzadas exige várias passagens, mas ao redigir uma prosa você raramente precisa delas, portanto, uma única passagem rápida é suficiente e a sequência completa pode esperar até que você verifique as referências. Hardware e localidade também são importantes: um mecanismo local compila em sua própria CPU sem upload ou fila, que é como o Oleafly executa compilações.

Aplique `\includeonly` e rascunhe figuras juntas e até mesmo uma tese grande geralmente retorna em alguns segundos, que é o ponto em que você começa a recompilar novamente após cada parágrafo.