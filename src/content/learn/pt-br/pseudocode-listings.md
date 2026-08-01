---

title: "Algoritmos e listagens de fontes"
description: "Esboço do algoritmo2e e listagens para código real."
category: "field-kits"
order: 3
level: "intermediate"
tags: ["code"]
featured: false
updated: 2026-07-25
---

# Algoritmos e listagens de fontes

Os artigos apresentam o código em duas formas distintas e o LaTeX possui uma ferramenta separada para cada uma. Pseudocódigo é um esboço idealizado de um algoritmo, composto por palavras-chave e matemática, e o pacote `algorithm2e` cuida disso. As listagens de fontes são códigos reais reproduzidos literalmente em uma fonte monoespaçada, e o pacote `listings` lida com isso. Escolher a ferramenta errada é a fonte usual de atrito, por isso ajuda ver ambos.

## Pseudocódigo com algoritmo2e

```latex
\usepackage[ruled,vlined]{algorithm2e}
\begin{algorithm}
\caption{Train}
\While{not converged}{
 Update $\theta$\;
}
\end{algorithm}
```

As opções do pacote definem o estilo visual: `ruled` desenha regras horizontais acima e abaixo do algoritmo e coloca a legenda no topo, a convenção que a maioria dos locais espera, enquanto `vlined` desenha uma pequena linha vertical marcando a extensão de cada bloco, para que o aninhamento permaneça legível sem recuo pesado. O ambiente `\caption` é um float, como uma figura, então ele carrega a `\caption` que fornece um número para `\ref` citar.

Dentro, `\While{condição}{corpo}` compõe o loop com uma palavra-chave em negrito, a condição e o corpo como um bloco recuado. `\For`, `\If` e `\Return` seguem o mesmo padrão. As instruções terminam com `\;`, que imprime o terminador da linha e inicia uma nova linha. Esquecer é o clássico erro de iniciante: as linhas correm juntas. Como este é o LaTeX comum, matemática como `$\theta$` funciona inline, e é para isso que serve o pseudocódigo: descrever a regra de atualização em notação, e não em qualquer linguagem específica.

## Código real com listagens

```latex
\usepackage{listings}
\begin{lstlisting}[language=Python]
def f(x):
 return x**2
\end{lstlisting}
```

O ambiente `lstlisting` reproduz seu conteúdo com exatidão, preservando os espaços em branco e tratando os caracteres especiais literalmente, para que você possa colar o código sem escapar de nada. A opção `linguagem=Python` ativa o destaque de palavras-chave para esse idioma, e `listings` conhece dezenas de outros. Por padrão, a saída é simples. A maioria das pessoas adiciona um `\lstset{basicstyle=\ttfamily\small, numbers=left}` único no preâmbulo para obter uma fonte monoespaçada em um tamanho razoável com números de linha. Para incluir um arquivo diretamente em vez de colá-lo, `\lstinputlisting[linguagem=Python]{train.py}` o lê do disco, o que mantém o papel sincronizado com a fonte real. Se você deseja realce colorido e de alta fidelidade, o pacote `minted` é a alternativa mais forte, ao custo de exigir uma ferramenta externa e escape de casca.

## Escolhendo entre eles

Use pseudocódigo no corpo do artigo para comunicar a ideia e reserve listagens textuais para artefatos onde o código exato é importante, como apêndices ou descrições de ferramentas. Um erro comum é colocar um `lstlisting` dentro de um quadro do Beamer sem a opção `[frágil]`, o que falha com um erro opaco; o mesmo cuidado aparece em [um primeiro deck do Beamer](/learn/beamer-basics/).