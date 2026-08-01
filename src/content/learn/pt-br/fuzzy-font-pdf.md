---

title: "Texto desfocado no visualizador de PDF"
description: "Digite 3 bitmaps, fontes de contorno, figuras vetoriais."
category: "typefaces"
order: 3
level: "intermediate"
tags: ["fonts", "errors"]
featured: false
updated: 2026-07-25
---

# Texto borrado no visualizador de PDF

Seu PDF é compilado corretamente, mas o texto parece macio ou irregular na tela, e aumentar o zoom torna tudo pior em vez de melhor. Não há nada de errado com seu visualizador. O documento contém fontes bitmap. Em vez de armazenar formas de letras como contornos escalonáveis, ele as armazena como grades de pixels renderizados em uma resolução fixa. Na terminologia PDF, essas são fontes Tipo 3. Eles imprimem de forma aceitável no papel na resolução para a qual foram gerados, e é por isso que o problema sobreviveu por décadas, mas nas telas eles desfocam em qualquer nível de zoom diferente do nativo. Os formatos de contorno modernos (Tipo 1, TrueType, OpenType) são dimensionados de forma limpa porque as formas são curvas matemáticas.

## Confirmando o diagnóstico

O zoom é o teste rápido: as fontes de contorno permanecem nítidas em 800 por cento, os bitmaps se dissolvem em pixels visíveis. Para ter certeza, abra as propriedades do documento em seu visualizador de PDF e observe o painel de fontes. No Adobe Reader, isso está em Arquivo, depois em Propriedades, em Fontes e qualquer fonte listada como "Tipo 3" é um bitmap. Essa verificação é importante além da estética, porque o arXiv e muitos editores rejeitam envios contendo fontes Tipo 3.

## De onde vêm os bitmaps e as correções

A fonte usual é uma configuração de fonte antiga. Instalações muito antigas do TeX renderizaram Computer Modern através do METAFONT em bitmaps, e alguns pacotes legados e pilhas antigas da era `\usepackage{times}` ainda usam variantes de bitmap. Corrija-o substituindo os comandos de fonte herdados por uma pilha moderna:

```latex
\usepackage{newtxtext,newtxmath}
```

Isso fornece um esboço dos tempos com matemática correspondente, conforme detalhado em [Times, Arial, pilhas semelhantes a Helvetica](/learn/times-arial-helvetica/). Se você quiser a aparência padrão em vez de Times, `\usepackage{lmodern}` troca Computer Modern por seu sucessor, Latin Modern. Compilar com XeLaTeX ou LuaLaTeX e `fontspec` evita totalmente o problema, já que esses motores usam fontes do sistema OpenType que são delineadas por construção. Um mecanismo moderno como o Tectonic baseado em XeTeX que o Oleafly agrupa não gera texto Tipo 3 por si só; quando aparece lá, a fonte bitmap está chegando através de um gráfico incluído.

## A versão figurada do mesmo problema

O texto borrado em um PDF nem sempre é uma fonte de documento. Se os parágrafos estiverem nítidos, mas os rótulos dentro de um gráfico estiverem confusos, a figura em si será uma imagem rasterizada, normalmente uma captura de tela PNG de um gráfico ou um diagrama exportado na resolução da tela. A cura é a mesma ideia um nível acima: exportar figuras como PDF vetorial a partir da ferramenta de plotagem, para que seu texto também seja contornado. A orientação de formato está em [colocar uma figura](/learn/insert-images/).

Após qualquer correção, verifique o painel de fontes novamente, em vez de confiar nos olhos no zoom padrão. Uma única entrada do Tipo 3 deixada por uma figura ou pacote é suficiente para rejeitar um envio.