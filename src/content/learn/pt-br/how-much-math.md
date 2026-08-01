---

title: "De quanta matemática um trabalho precisa"
description: "Notação como precisão, disciplina de símbolos, quando numerar equações e permanência consistente."
category: "paper-anatomy"
order: 9
level: "intermediate"
tags: ["writing", "math"]
featured: false
updated: 2026-07-25
---

# De quanta matemática um trabalho precisa

Exatamente tanto quanto suas reivindicações exigem, e nem um símbolo a mais. A matemática em um artigo não é um sinal de sofisticação; é uma ferramenta de precisão. Os artigos mais bem escritos usam notação onde a prosa seria ambígua e prosa onde a notação seria ruído.

## Notação é precisão, não decoração

Escreva $f: \mathcal{X} \to \mathcal{Y}$ quando o leitor precisar conhecer exatamente o domínio e o contradomínio. Escreva "o modelo mapeia imagens para rótulos" quando isso não acontecer. Um parágrafo que poderia ser em inglês simples, mas é traduzido como uma sopa de símbolos, não parece rigoroso, parece evasivo, e os revisores o traduzem de volta para verificar se algo está realmente sendo reivindicado. Antes de formalizar uma declaração, pergunte-se: a versão simbólica exclui uma leitura errada que a versão em prosa permite? Se não, mantenha a prosa.

## Defina cada símbolo uma vez e nunca o redefina

A memória de trabalho do leitor é o seu recurso mais escasso. A disciplina:

- Introduzir cada símbolo na primeira utilização: "seja $n$ o número de amostras."
- Um significado por símbolo para todo o papel. Se $\alpha$ é uma taxa de aprendizagem na Seção 3, não pode ser um nível de significância na Seção 5.
- Para trabalhos com muitas notações, uma pequena tabela de notação se paga logo no início.

| Hábito | Efeito no leitor |
|---|---|
| Símbolo definido na primeira utilização | Nunca é preciso caçar para trás |
| Um símbolo, um significado | Nunca questione o contexto |
| Tabela de notação | Possui mapa para todo o jornal |

## Equações numéricas somente quando você as referencia

Um número de equação é uma promessa: “apontaremos para isso”. Numerar tudo enterra as equações que importam sob aquelas que não o fazem.

```latex
\begin{equation}
  \mathcal{L} = \mathcal{L}_{\text{task}} + \lambda \mathcal{L}_{\text{reg}}
  \label{eq:loss}
\end{equation}
```

Referencie-o com `\eqref{eq:loss}`. Para exibir matemática que você nunca cita, use `\[ ... \]` ou os ambientes marcados com estrela e pule o número. O mecanismo de referência é abordado em [referências cruzadas](/learn/cross-references/).

## Ambientes de teorema, de uma só vez

Se o seu artigo provar coisas, envolva afirmações em ambientes de `teorema`, `lema` e `prova` em vez de colocar o "Teorema 1" em negrito à mão: eles se numeram, fazem referências cruzadas de forma limpa e sinalizam exatamente o que é afirmado versus o que é comentário. Configuração e uso estão em [teoremas e provas](/learn/theorems-proofs/).

## Consistência é metade da batalha

Escolha convenções e mantenha-as durante todo o artigo:

- Vetores em negrito ($\mathbf{x}$) ou com setas, nunca ambos.
- Matrizes maiúsculas em negrito, escalares em itálico e minúsculas.
- Conjuntos em quadro negro ou caligráfico ($\mathbb{R}$, $\mathcal{D}$), de forma consistente.
- Mesma convenção nas figuras e tabelas do texto.

Macros personalizadas tornam a consistência barata: defina `\newcommand{\vx}{\mathbf{x}}` uma vez e uma mudança tardia de notação é uma edição de uma linha em vez de uma busca em todo o papel.

## Calibrar para o local

Um local teórico espera declarações formais e provas completas. Um local aplicado espera uma configuração de problema limpa e talvez uma função de perda. Leia três artigos aceitos no local de destino e compare sua densidade. Para a mecânica de escrever qualquer um deles, comece com [modo matemático](/learn/math-mode/) e mantenha a [folha de truques de símbolos matemáticos](/learn/math-symbols-cheatsheet/) aberta em uma guia.