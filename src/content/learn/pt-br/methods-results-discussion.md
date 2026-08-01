---

title: "Método, resultados, discussão: a casa de máquinas"
description: "Reprodutibilidade, resultados que respondem a dúvidas, ablações e limitações honestas."
category: "paper-anatomy"
order: 4
level: "intermediate"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# Método, resultados, discussão: a casa de máquinas

O meio de um artigo é onde vive a ciência real. É também onde a escrita vaga causa mais danos, porque essas seções são avaliadas com base na precisão. Aqui está o que cada um deve ao leitor.

## Método: reprodutibilidade é a barra

O teste para uma seção de método é contundente: um colega competente poderia reproduzir seu trabalho a partir do texto mais seu material suplementar? Isso significa detalhes concretos, não vibrações. Relate as configurações exatas, divisões de dados, etapas de pré-processamento e hiperparâmetros, ou diga precisamente onde eles residem ("configurações completas no Apêndice B").

Uma disciplina útil: ao escrever, mantenha uma lista contínua de todas as decisões que você tomou. Cada um vai para a seção de métodos, para o apêndice ou para o código liberado. Se não levar a lugar nenhum, um revisor o encontrará.

## Resultados: responda às perguntas que você fez

Seções fortes de experimentos abrem com a declaração das perguntas que os experimentos respondem, muitas vezes literalmente: "Perguntamos: (1) A poda preserva a precisão? (2) De onde vem a aceleração?" Em seguida, cada subseção responde a uma pergunta. Os resultados que não respondem a uma pergunta declarada são triviais, e os revisores percebem a incompatibilidade entre as afirmações e as evidências mais rapidamente do que qualquer outra coisa.

## Tabelas vs gráficos

| Use uma tabela quando | Use um gráfico quando |
|---|---|
| Os valores exatos são importantes | A tendência é importante |
| Comparação de métodos em benchmarks fixos | Mostrando comportamento em uma variável varrida |
| Poucos números, alta precisão | Muitos números, uma forma |

A regra clássica: tabelas para pesquisa, gráficos para comparação de formas. Saiba mais sobre como tornar ambos legíveis em [figuras, tabelas e comparações](/learn/figures-tables-comparisons/), com a mecânica do LaTeX em [tabelas](/learn/create-table/) e [legendas e rótulos](/learn/captions-labels/).

## Ablações, em um parágrafo

Uma ablação remove um componente do seu método de cada vez para mostrar que ele merece seu lugar. Se o seu método tiver três partes e o sistema completo superar todas as variantes de duas partes, cada parte será justificada. Revisores em campos empíricos tratam as ablações como apostas de mesa: uma seção de método que introduz cinco componentes e nunca os testa individualmente é considerada sem suporte. Uma mesa compacta geralmente dá conta do recado.

## Discussão vs conclusão

Eles se fundem com tanta frequência que as pessoas esquecem que são diferentes. A discussão interpreta: o que significam os resultados, onde foram surpreendentes, o que não mostram? A conclusão resume: o que o leitor deve lembrar e o que vem a seguir? Uma discussão adiciona um novo pensamento. Uma conclusão não acrescenta nada de novo, propositalmente. Se a sua conclusão contém uma afirmação que não aparece em nenhum outro lugar, mova-a.

## Limitações: agora padrão, realmente útil

As seções de limitações explícitas passaram de opcionais para esperadas em muitos locais, e alguns as exigem. Trate a sua como um dispositivo de credibilidade, não como uma confissão. Estabeleça os limites reais: conjuntos de dados que você não testou, suposições que sua prova precisa, custos de computação, casos de falha que você observou. Os revisores iriam encontrá-los de qualquer maneira. Nomeá-los primeiro converte pontos fracos em evidências de que você entende seu próprio trabalho, e é muito melhor do que um revisor escrever “os autores não reconhecem isso…” em uma revisão pública.

## Uma dica estrutural

Escreva primeiro a seção de resultados, a partir de seus números reais. Em seguida, escreva a seção do método para explicar exatamente o que produziu esses números e a discussão para interpretá-los. Escrever em ordem de leitura o tenta a descrever o método que você pretendia executar, em vez daquele que executou.