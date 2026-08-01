---

title: "Por que você compila mais de uma vez"
description: "Arquivos auxiliares, passes de bibliografia e por que as referências são impressas ?? na primeira corrida."
category: "open-the-loop"
order: 5
level: "beginner"
tags: ["compile"]
featured: false
updated: 2026-07-25
---

# Por que você compila mais de uma vez

Mais cedo ou mais tarde você compilará um documento, abrirá o PDF e encontrará `??` onde deveria estar um número de figura ou citação. Nada está quebrado. Uma única compilação é uma passagem pelo seu arquivo, e algumas informações realmente não podem ser conhecidas de uma só vez.

Aqui está o problema em miniatura. Na página 2 você escreve "veja a Figura \ref{fig:results}", mas esse número vai para a página 7. Quando o mecanismo compõe a página 2, ele ainda não chegou à página 7, então não tem ideia de qual número a figura receberá. O mesmo se aplica ao índice, que precisa do número da página de cada seção antes mesmo de a página um ser concluída.

## Como o motor resolve isso

Um mecanismo LaTeX lê seu arquivo `.tex`, resolve cada macro e grava um PDF. Junto com o PDF ele também grava pequenos arquivos auxiliares: `.aux` para rótulos e citações, `.toc` para o índice, `.bbl` para a bibliografia formatada. Esses arquivos são notas que o mecanismo deixa para o seu futuro.

1. Na primeira passagem, o mecanismo compõe seu texto e escreve cada `\label` e `\cite` que encontra no arquivo `.aux`, imprimindo `??` sempre que precisar de um número que ainda não conhece.
2. Se você citar alguma coisa, uma ferramenta bibliográfica (bibtex ou biber) lê o arquivo `.aux`, procura cada citação em seu banco de dados `.bib` e grava a lista de referências formatada em um arquivo `.bbl`.
3. Na segunda e às vezes na terceira passagem, o mecanismo lê esses arquivos auxiliares de volta, de modo que referências cruzadas, entradas de índice e rótulos de citação finalmente resolvem para números reais.

As configurações modernas executam essas passagens automaticamente, portanto, na prática, você raramente digita os comandos sozinho. Mas conhecer o ciclo explica o sintoma: um novo `??` após adicionar um rótulo ou citação significa apenas que os arquivos auxiliares ainda não foram atualizados e mais uma compilação corrige o problema.

## Motores em uma linha cada

Vários programas podem desempenhar o papel de “motor”. pdfLaTeX é a escolha clássica com o mais amplo suporte a periódicos. XeLaTeX adiciona Unicode completo e permite usar fontes instaladas em seu sistema. LuaLaTeX também fala Unicode e incorpora uma linguagem de script para pacotes avançados. Tectonic é um mecanismo moderno que baixa pacotes sob demanda na primeira vez que você precisa deles. Oleafly agrupa-o para que um novo projeto seja compilado sem instalar primeiro uma distribuição TeX.

Para a maioria dos documentos as diferenças pouco importam; escolha o que seu modelo ou local espera e siga em frente. Consulte [mecanismos comparados](/learn/engines-compared/) quando precisar escolher deliberadamente.

## Quando algo realmente falha

Uma compilação com falha despeja um log longo, e o instinto natural é lê-lo de baixo para cima. Resista a isso. Leia o primeiro erro no log e corrija apenas isso; erros posteriores são muitas vezes ruído em cascata causado pelo primeiro. Se as referências ainda imprimirem `??` após duas compilações consecutivas bem-sucedidas, o culpado usual é um erro de digitação no nome `\label` ou `\ref` em vez de uma passagem perdida.