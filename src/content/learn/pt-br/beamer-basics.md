---

title: "Um primeiro deck Beamer"
description: "Tema, quadro de título, esboço, um slide de resultados."
category: "on-stage"
order: 1
level: "intermediate"
tags: ["beamer"]
featured: true
updated: 2026-07-25
---

# Um primeiro deck Beamer

Beamer é a classe de documento LaTeX padrão para apresentações. Em vez de páginas, o documento produz slides, e tudo o que você já sabe é transferido: a mesma matemática, os mesmos números, os mesmos comandos bibliográficos. A vantagem prática para os autores de artigos é a reutilização. Equações e diagramas TikZ do manuscrito são colados na palestra inalterados. Aqui está um deck mínimo, mas completo:

```latex
\documentclass{beamer}
\usetheme{Madrid}
\title{Talk Title}
\author{You}
\begin{document}
\frame{\titlepage}
\begin{frame}{Outline}
 \tableofcontents
\end{frame}
\begin{frame}{Results}
 \begin{itemize}
 \item Finding one
 \item Finding two
 \end{itemize}
\end{frame}
\end{document}
```

## Quadros, não páginas

A unidade principal é o quadro, e cada ambiente `quadro` torna-se um slide. O argumento opcional entre colchetes, como em `\begin{frame}{Resultados}`, define o título do slide. O primeiro slide usa a abreviatura `\frame{\titlepage}`, onde `\titlepage` renderiza os metadados declarados no preâmbulo por `\title` e `\author`. Você também pode adicionar `\institute` e `\date` e eles aparecem no mesmo layout. Uma moldura comporta visivelmente menos que uma página, aproximadamente 128 mm por 96 mm de tela, portanto o conteúdo que transborda é um sinal para dividir o material em duas molduras em vez de reduzir a fonte.

## Temas e o esboço

`\usetheme{Madrid}` seleciona um design visual completo: cores, barras de cabeçalho e rodapé e como os títulos dos quadros são desenhados. O Beamer oferece dezenas de temas. `Madrid`, `Berlin` e o deliberadamente simples `default` são escolhas comuns, e trocar o tema é uma mudança de uma linha que reestiliza todo o baralho. Muitas conferências e laboratórios distribuem seu próprio tema. Nesse caso, você coloca o arquivo de estilo no projeto e nomeia-o aqui.

O quadro de estrutura de tópicos chama `\tableofcontents`, que lista a estrutura seccional da palestra. Um problema: ele lista comandos `\section`, e este exemplo mínimo não tem nenhum, então o contorno fica vazio até que você adicione linhas como `\section{Method}` entre os frames. As seções no Beamer não imprimem títulos nos slides; eles existem para estruturar o esboço e os elementos de navegação que alguns temas exibem.

## Conteúdo em slides

Dentro de um quadro, `itemize` funciona como em qualquer documento, e cada `\item` se torna um marcador. Os slides toleram muito menos texto do que o papel, portanto, mantenha os itens em linhas únicas sempre que possível e mova os detalhes para o que você diz. Figuras, tabelas e matemática também funcionam dentro de quadros, embora a saída do Beamer não seja renderizada nessas visualizações na página, então compile a apresentação para vê-la.

O erro inicial mais comum é o conteúdo literal: `\verb` e listagens de código quebram dentro de frames comuns devido à forma como os frames processam seu conteúdo. A correção é a opção frágil, escrita `\begin{frame}[fragile]`, em qualquer frame contendo código. Quando o deck é elaborado, as revelações passo a passo são a próxima ferramenta a ser aprendida, abordada em [revelar linhas ao clicar](/learn/beamer-overlays/).