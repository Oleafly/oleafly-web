---

title: "Por que as pessoas mudam para o XeLaTeX"
description: "Fontes do sistema, scripts complexos, modelos fontspec."
category: "runtime"
order: 2
level: "intermediate"
tags: ["engines"]
featured: false
updated: 2026-07-25
---

# Por que as pessoas mudam para o XeLaTeX

LaTeX é uma linguagem, mas vários motores a compilam e diferem no que podem fazer. O motor tradicional é o pdfLaTeX, e os dois modernos são o XeLaTeX e o LuaLaTeX. O maior motivo pelo qual as pessoas mudam para o XeLaTeX são as fontes: o pdfLaTeX usa apenas fontes empacotadas especificamente para o TeX, enquanto o XeLaTeX carrega qualquer fonte OpenType ou TrueType instalada em seu sistema, endereçada por seu nome comum.

## Os três motivos para mudar

O primeiro é o acesso direto às fontes do sistema. Com o pacote `fontspec`, a escolha da fonte é uma linha legível, e nenhum pacote de fontes específico do TeX precisa existir para o tipo de letra que você deseja. Quer o objetivo seja `\setmainfont{Inter}` para uma aparência moderna ou Times New Roman para um requisito de diário, o mecanismo é o mesmo:

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

`fontspec` requer XeLaTeX ou LuaLaTeX; no pdfLaTeX simplesmente há erros. As fontes também podem viajar dentro da pasta do projeto em vez do sistema, conforme mostrado em [um arquivo de fontes próximo ao projeto](/learn/install-custom-font/).

O segundo é o Unicode nativo e scripts complexos. O XeLaTeX lê entrada UTF-8 diretamente e lida com sistemas de escrita que o pdfLaTeX não consegue, incluindo árabe, Devanagari, chinês, japonês e coreano, com modelagem adequada e, por meio do pacote `polyglossia`, hifenização e direção corretas por idioma. Se o seu documento mistura scripts ou apenas cita um nome com diacríticos incomuns, isso por si só decide o mecanismo.

O terceiro são os modelos que decidem por você. Muitos modelos modernos de currículos, teses e apresentações carregam `fontspec` ou `polyglossia` em suas primeiras linhas, e tal modelo é compilado apenas em XeLaTeX ou LuaLaTeX. Se um modelo baixado falhar imediatamente com um erro mencionando `fontspec`, mudar o mecanismo é a solução, não editar o modelo.

## Do que você desiste

As compensações são modestas, mas reais. Alguns pacotes específicos do pdfLaTeX não se aplicam, mais notavelmente a expansão de fontes do `microtype`, que o XeLaTeX suporta apenas parcialmente. As compilações também são um pouco mais lentas. Alguns pipelines de periódicos mais antigos ainda assumem o pdfLaTeX, portanto, verifique as instruções do local antes de enviar um manuscrito construído em XeLaTeX. LuaLaTeX compartilha os recursos de fonte e Unicode e adiciona scripts Lua. Entre os dois, escolha o modelo ou o nome do local. Documentos construídos em `fontspec` geralmente são compilados em ambos.

## Escolhendo na prática

Uma regra razoável é usar pdfLaTeX quando o modelo de um local for direcionado a ele, e XeLaTeX para tudo onde você escolher as fontes: teses, currículos, slides e documentos multilíngues. O motor empacotado do Oleafly é baseado em XeTeX (Tectonic), então os documentos `fontspec` são compilados lá sem qualquer configuração do motor. O erro comum é misturar eras, por exemplo, carregar `fontspec` junto com pacotes de fontes somente pdfLaTeX como `newtxtext`. Escolha um sistema de fontes por documento e a pergunta do mecanismo será respondida sozinha.