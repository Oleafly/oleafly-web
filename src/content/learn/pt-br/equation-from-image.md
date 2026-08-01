---

title: "Foto do quadro branco para a fonte"
description: "Corte, OCR ou multimodal, compile e corrija índices a olho nu."
category: "human-plus-model"
order: 2
level: "beginner"
tags: ["ai", "math"]
featured: false
updated: 2026-07-25
---

# Foto do quadro branco para a fonte

Uma derivação em um quadro branco, uma página digitalizada de notas de aula, uma equação em um PDF que você não pode copiar: redigitar matemática em LaTeX manualmente é lento e sujeito a erros. As ferramentas modernas podem fazer a maior parte disso a partir de uma foto. A conversão está realmente boa agora, mas trate o resultado como um rascunho, não como uma transcrição finalizada. O fluxo de trabalho abaixo é construído em torno disso.

## Comece com uma foto melhor

A qualidade da imagem determina o resultado mais do que a escolha da ferramenta. Fotografe diretamente em vez de em ângulo, pois as linhas de base distorcidas tornam os subscritos e sobrescritos ambíguos. Obtenha uma iluminação uniforme sem reflexos no quadro e recorte com precisão a equação única desejada, porque os diagramas circundantes e as marcas perdidas tornam-se símbolos alucinados. Se uma foto tiver três equações, corte-a em três imagens e converta-as uma de cada vez; os resultados por equação são consistentemente melhores do que os resultados de página de uma só vez.

## Converta com a ferramenta que você possui

Três tipos de ferramentas fazem esse trabalho. Os serviços dedicados de OCR de equações são precisos em entradas limpas. Modelos multimodais gerais aceitam uma imagem no chat e retornam LaTeX quando solicitados, e você pode responder "o segundo subscrito deve ser j, não i" para obter uma versão corrigida. Oleafly possui imagem para LaTeX integrada, executando por meio de sua própria chave de API com qualquer provedor que você configurou, para que um snippet possa ir da captura de tela à fonte sem sair do editor. Consulte [Configuração de IA](/docs/ai-setup/) para configuração. Com informações claras, as três abordagens convergem, e é por isso que o conselho fotográfico acima é mais importante do que a decisão da ferramenta.

## Compile imediatamente

Cole a saída em seu documento dentro de um ambiente `equation` e compile antes de fazer qualquer outra coisa. Os erros de conversão são divididos em dois tipos, e o compilador captura o primeiro tipo para você: colchetes desequilibrados, delimitadores `\left` e `\right` incompatíveis e comandos desconhecidos falham ruidosamente e as correções são mecânicas. [Símbolo de dólar ausente](/learn/missing-dollar/) cobre as falhas mais comuns.

## Então revise a matemática

O segundo tipo de erro compila perfeitamente e está errado. Leia a equação renderizada em relação ao símbolo original por símbolo, com atenção especial aos locais em que a conversão ocorre de forma confiável: subscritos e sobrescritos, onde pequenos glifos se confundem e `x_i` se torna `x_j`; primos e chapéus, que desaparecem ou migram; os pares semelhantes, como `1`, `l` e `I` ou `\rho` e `p`; e limites em somas e integrais. São exatamente esses detalhes que mudam o significado de uma fórmula e ao mesmo tempo a deixam tipograficamente plausível. Dois minutos de comparação por equação são o custo total e é muito mais barato do que um revisor encontrar o índice errado na impressão.