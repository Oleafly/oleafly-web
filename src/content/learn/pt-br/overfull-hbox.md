---

title: "Caixa horizontal muito cheia"
description: "Linhas que aparecem na margem e quando cuidar."
category: "log-literacy"
order: 3
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Caixa horizontal muito cheia

## O sintoma

O log informa algo como `Overfull \hbox (14,2pt too wide) no parágrafo nas linhas 87--92`, e no PDF uma linha desse parágrafo se destaca na margem direita. O documento ainda é compilado, porque se trata de um aviso e não de um erro, mas a linha saliente é visível na impressão e os revisores percebem. No modo rascunho (`\documentclass[draft]{...}`) o LaTeX marca cada infrator com um retângulo preto, o que os torna fáceis de detectar.

## Por que isso acontece

O TeX divide os parágrafos em linhas pesando todos os pontos de quebra possíveis e escolhendo o arranjo com a menor "maldade" total, onde a maldade mede quanto os espaços em uma linha tiveram que esticar ou encolher. Às vezes, não existe nenhum arranjo aceitável: um URL longo não contém nenhum ponto de interrupção, a matemática embutida é tratada como quase inquebrável ou uma palavra longa não tem entrada de hifenização. Em vez de esticar os espaços além de sua tolerância e produzir uma linha visivelmente lacunada, o TeX permite que a linha se estenda e informa sobre isso. A caixa cheia demais é o TeX se recusando a tornar o parágrafo feio de uma maneira diferente.

## Correções, da melhor à mais contundente

A melhor solução é editorial. Reformular a frase, afastar a palavra longa do final da linha ou dividir uma frase em duas geralmente elimina o problema sem qualquer código e muitas vezes melhora a prosa de qualquer maneira.

Para URLs, coloque o endereço em `\url{...}` do pacote `url` ou `hyperref` para que ele possa quebrar em barras e pontos, e carregue o pacote `xurl` quando precisar de quebras em quase qualquer caractere. Para uma fórmula embutida ampla, exiba-a ou use um ambiente quebrável como `multline` de `amsmath` quando a equação em si for muito longa para a linha.

Duas melhorias no nível do preâmbulo ajudam globalmente. Carregar `microtype` permite que os caracteres se projetem fracionadamente e expanda ligeiramente as fontes, o que resolve muitos casos marginais sem você perceber. Definir o idioma do documento corretamente através de `babel` ou `polyglossia` dá ao TeX os padrões de hifenização corretos, já que uma palavra que ele não pode hifenizar é uma palavra que não pode quebrar.

## Quando se importar

O número no aviso é o overshoot. Qualquer coisa abaixo de aproximadamente 2 pontos é invisível para os leitores e segura para ser ignorada em um rascunho. Vale a pena corrigir dezenas de pontos antes que alguém veja o PDF. O fluxo de trabalho sensato é ignorar as caixas cheias demais durante a gravação e, em seguida, varrer o log uma vez antes do envio e corrigir as poucas que restam, primeiro as maiores. Resista ao `\sloppy` e outros hacks de tolerância global: eles trocam algumas linhas salientes por espaçamentos soltos e irregulares em todo o documento.