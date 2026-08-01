---

title: "Operadores que você inventa uma vez"
description: "DeclareMathOperator para argmin, argmax e nomes semelhantes."
category: "notation-depth"
order: 3
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Operadores que você inventa uma vez

O LaTeX vem com operadores nomeados como `\sin`, `\log` e `\max` que são impressos em tipo vertical com espaçamento correto ao redor deles. Ele não vem com `\argmin` ou `\argmax`, embora os trabalhos de otimização os utilizem constantemente. Se você digitar `argmin` como letras simples dentro do modo matemático, o LaTeX o tratará como o produto de seis variáveis: as letras saem em itálico, comprimidas, sem espaçamento entre operadores. Declare você mesmo o operador, uma vez, no preâmbulo.

## Declarando o operador

```latex
\usepackage{amsmath}
\DeclareMathOperator*{\argmin}{arg\,min}
\DeclareMathOperator*{\argmax}{arg\,max}

\[
\theta^\star = \argmin_\theta \mathcal{L}(\theta)
\]
```

Aqui está o que cada peça faz. `\DeclareMathOperator` vem de `amsmath` e cria um novo comando cujo argumento é escrito como texto do operador: letras romanas verticais, com as regras de espaçamento que o LaTeX já aplica a `\max` e `\lim`. O primeiro argumento é o nome do comando que você digitará, o segundo é o texto que realmente será impresso. O `\,` dentro de `arg\,min` insere um espaço fino entre as duas palavras, que é melhor lido do que executá-las juntas.

A estrela depois de `\DeclareMathOperator` é importante. Uma declaração com estrela faz com que o operador se comporte como `\lim`: na matemática de exibição, qualquer coisa que você anexar com `_` fica diretamente abaixo do operador, em vez de seguir para o canto inferior direito. Isso é exatamente o que você deseja para `\argmin_\theta`, onde a variável que está sendo otimizada deve aparecer abaixo. Sem o asterisco, o subscrito fica ao lado, que é a convenção para operadores como `\log_2`. Na matemática inline, o subscrito fica ao lado de qualquer maneira, para evitar esticar a altura da linha.

## Reutilizando o padrão

A mesma técnica cobre qualquer operador que seu campo use e que o LaTeX não conheça. Alguns comuns:

```latex
\DeclareMathOperator{\tr}{tr}
\DeclareMathOperator{\rank}{rank}
\DeclareMathOperator{\diag}{diag}
\DeclareMathOperator*{\esssup}{ess\,sup}
```

Observe que `\tr`, `\rank` e `\diag` não têm estrela porque seus subscritos, quando possuem algum, pertencem ao lado. Somente operadores de estilo limite, como `\esssup`, recebem a estrela.

Declarar operadores no preâmbulo em vez de escrever `\mathrm{argmin}` inline compensa duas vezes. A notação permanece consistente em todo o documento e, se um diário solicitar uma renderização diferente, você altera uma linha em vez de procurar em todas as equações. Experimente a declaração e a linha de exibição juntas no [live playground](/live/) para ver como o posicionamento do subscrito com estrela se comporta.

Um erro comum: declarar um operador cujo nome colide com um comando existente, como `\max` ou `\deg`. O LaTeX irá parar com um erro "já definido". Escolha um novo nome ou use `\renewcommand` somente se você realmente pretende substituir o original.