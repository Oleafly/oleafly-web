---

title: "Times, Arial, pilhas tipo Helvetica"
description: "Os periódicos de mapeamento newtx, helvet ou fontspec ainda solicitam."
category: "typefaces"
order: 1
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Times, Arial, pilhas tipo Helvetica

As diretrizes de periódicos e conferências ainda exigem rotineiramente Times para o corpo do texto ou Arial para figuras, décadas depois que essas fontes deixaram de ser a primeira escolha estética de qualquer pessoa. No LaTeX existem duas maneiras de satisfazer tal requisito, e qual delas se aplica depende do seu mecanismo. O pdfLaTeX clássico não pode carregar os arquivos Times New Roman ou Arial reais, portanto ele usa clones compatíveis com métricas enviados como pacotes. XeLaTeX e LuaLaTeX carregam as fontes reais do sistema através do `fontspec`.

## A rota do pacote

```latex
\usepackage{newtxtext,newtxmath} % Times-like
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
```

`newtxtext` muda a fonte do texto para um clone do Times e `newtxmath` fornece matemática correspondente. O emparelhamento é importante: altere apenas a fonte do texto e as equações permanecem no padrão Computer Modern. Um parágrafo do Times próximo a Computer Modern math é imediatamente visível. `newtx` é o sucessor mantido dos antigos pacotes `times` e `txfonts`, que você deve evitar em novos documentos. As pilhas antigas deixavam a matemática sem conversão e algumas produziam as fontes bitmap descritas em [texto borrado no visualizador de PDF](/learn/fuzzy-font-pdf/).

`helvet` fornece um clone Helvetica como a família sans-serif, que também substitui Arial, já que Arial foi projetado para corresponder às métricas da Helvetica. Carregá-lo não altera a fonte do documento, pois o corpo do texto usa a família serifada. A linha `\renewcommand{\familydefault}{\sfdefault}` executa essa mudança: `\familydefault` é a família que o LaTeX usa para texto comum, e defini-la como `\sfdefault` torna todo o documento semelhante ao Helvetica. Omita essa linha se precisar apenas de títulos sem serifa ou rótulos de figuras. Se Helvetica ficar um pouco grande próximo à fonte do seu texto, `\usepackage[scaled=0.92]{helvet}` alinha-a.

## A rota fontspec

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
\setsansfont{Arial}
```

Sob XeLaTeX ou LuaLaTeX, `fontspec` endereça as fontes por nome e as carrega do sistema operacional, então isso define o Times New Roman genuíno como a família principal (serif) e o Arial genuíno como a família sans. As fontes devem realmente estar instaladas na máquina. Isso afeta quando um documento é transferido entre computadores ou para CI. Uma fonte que acompanha o projeto evita o problema, conforme mostrado em [um arquivo de fontes próximo ao projeto](/learn/install-custom-font/). A matemática é novamente uma preocupação separada, tratada por `unicode-math` ou mantendo `newtxmath` ao lado. As compensações do mecanismo são abordadas em [por que as pessoas mudam para o XeLaTeX](/learn/when-use-xelatex/).

## A regra prática

Antes de escolher qualquer uma das rotas, verifique se o arquivo de classe do próprio local já define as fontes. A maioria sim. Empilhar seus próprios pacotes de fontes sobre uma classe que já falou produz, na melhor das hipóteses, avisos. Adicione pacotes de fontes somente a documentos cuja classe deixe a escolha para você.