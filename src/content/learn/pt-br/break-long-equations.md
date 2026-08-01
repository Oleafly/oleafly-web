---

title: "Equações que não cabem"
description: "multilinha e divisão quando a medida é muito estreita."
category: "notation-depth"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Equações que não cabem

Mais cedo ou mais tarde, uma derivação produz uma equação mais larga que o bloco de texto, e o LaTeX permitirá que ela chegue até a margem, em vez de adivinhar onde quebrá-la. Dois ambientes `amsmath` permitem que você mesmo coloque a quebra: `multline` para uma única expressão longa e `split` para uma quebra que deve permanecer alinhada.

## multilinha

```latex
\begin{multline}
 a + b + c + d + e + f \\
 + g + h + i + j
\end{multline}
```

`multline` se adapta a uma fórmula longa sem ponto de alinhamento natural. Você escolhe a quebra com `\\`, e o ambiente cuida do layout: a primeira linha é alinhada à esquerda, a última à direita e todas as linhas do meio são centralizadas. A expressão inteira recebe um número de equação, colocado na última linha. A convenção é quebrar antes de um operador binário, então o `+` abre a linha de continuação e o leitor vê rapidamente que a expressão continua.

## dividir

```latex
\begin{equation}
\begin{split}
 a &= b + c \\
 &\quad + d + e
\end{split}
\end{equation}
```

`split` também produz um único número, mas alinha suas linhas da mesma forma que `align`, com `&` marcando o ponto de alinhamento. Não é um ambiente independente; ele fica dentro de `equação` ou outro ambiente de exibição, que fornece o número. Aqui o `&` fica antes do sinal de igual na primeira linha, e a continuação começa com `&\quad`, um ponto de alinhamento vazio seguido por um quadrante de espaço, então a segunda linha recua logo após o sinal de igual. Esse travessão diz ao leitor que este ainda é o lado direito, não uma nova equação.

## Escolhendo entre eles

Use `multline` quando a equação for uma soma longa sem nenhuma estrutura que valha a pena alinhar. Use `split` quando houver um sinal de igual sob o qual a continuação deve ficar suspensa. Se você tiver várias equações genuinamente separadas, nenhuma delas está certa; esse é um trabalho para `align`, abordado em [equações multilinhas que se alinham](/learn/align-equations/).

Antes de tentar qualquer um deles, considere reescrever a matemática. Nomear uma subexpressão na frase anterior, fatorar ou dividir em duas equações geralmente mantém a largura sob controle e também torna a leitura melhor. Prefira isso a diminuir o tipo. Uma tela comprimida para caber quase sempre tem uma leitura pior do que uma quebra limpa.

Um erro a saber: `split` usado sozinho, sem uma `equação` delimitadora, termina com um "Erro de pacote amsmath". Embrulhe primeiro e depois compile. Ambos os ambientes são fáceis de experimentar no [playground ao vivo](/live/).