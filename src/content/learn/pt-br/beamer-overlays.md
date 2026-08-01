---

title: "Revelar linhas ao clicar"
description: "Sobreponha especificações, pause, apenas, sem exagerar."
category: "on-stage"
order: 2
level: "intermediate"
tags: ["beamer"]
featured: false
updated: 2026-07-25
---

# Revela linhas ao clicar

Um quadro Beamer pode ter mais de um slide físico. Quando você revela marcadores, um de cada vez, o Beamer gera várias páginas PDF a partir do mesmo quadro, cada uma mostrando um pouco mais. Avançar no visualizador de PDF percorre-os. Essas páginas geradas são chamadas de sobreposições. Aprender a controlá-los é o que transforma uma apresentação estática em uma palestra ritmada.

```latex
\begin{itemize}
 \item<1-> Always visible from slide 1
 \item<2-> Appears on slide 2
 \item<3-> Appears on slide 3
\end{itemize}

\pause % simpler step-through
```

## Especificações de sobreposição

A notação de colchete angular após `\item` é uma especificação de sobreposição. Indica em quais sobreposições do quadro o item está visível. O número é o índice de sobreposição dentro deste quadro, e o hífen o torna um intervalo: `<2->` significa da sobreposição 2 em diante, então o item aparece na segunda etapa e permanece. Um `<2>` vazio significaria apenas a sobreposição 2, então o item apareceria e depois desapareceria. Você também pode fornecer listas como `<1,3>`. O Beamer cria tantas sobreposições quanto o maior número mencionado, de modo que o quadro acima produz três páginas PDF.

As especificações de sobreposição funcionam em mais do que itens. `\textbf<2->{key term}` coloca o texto em negrito da sobreposição 2 em diante, e `\only<2>{...}` inclui seu conteúdo somente na sobreposição 2. Como `\only` remove o conteúdo inteiramente em outras sobreposições, o layout circundante reflui, o que o torna a ferramenta para substituir uma figura por outra no mesmo local: dê a dois blocos `\only` a mesma posição e especificações consecutivas. Seu primo `\uncover` reserva o espaço enquanto oculta o conteúdo, então nada muda.

## A ferramenta mais simples

`\pause` divide o quadro nesse ponto. Tudo antes de ser exibido imediatamente, tudo depois espera pela próxima etapa e comandos `\pause` repetidos criam etapas sucessivas. Não precisa de números nem de planejamento, por isso é o padrão certo para uma revelação simples de cima para baixo. Alcance especificações explícitas somente quando a ordem de revelação for diferente da ordem de origem ou quando os itens precisarem aparecer e desaparecer.

Um atalho útil quando cada item em uma lista deve estar em ordem é `\begin{itemize}[<+->]`, que atribui números crescentes de sobreposição automaticamente.

## Restrição

As sobreposições são fáceis de usar em excesso. Uma apresentação onde cada marcador em cada slide clica, um de cada vez, esgota o apresentador (clique constante) e o público (sem leitura antecipada). Reserve revelações escalonadas para os poucos lugares onde o ritmo carrega um argumento, como construir uma derivação ou contrastar antes e depois. Cada sobreposição é uma página PDF real, então o folheto copia o balão, a menos que você compile com `\documentclass[handout]{beamer}`, que recolhe cada quadro até sua sobreposição final. Os princípios básicos do frame são abordados em [um primeiro deck do Beamer](/learn/beamer-basics/).