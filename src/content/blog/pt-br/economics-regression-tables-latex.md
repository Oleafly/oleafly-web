---

title: "Economia e ciências sociais: tabelas de regressão que os periódicos aceitam"
description: "booktabs, threeparttable, estrelas siunitx, notas sob estimativas, hábitos biblatex e versões de documentos de trabalho para economia, ciência política e sociologia."
date: 2026-06-26
tags: [economics, social-science, tables]
---

A ciência social empírica vive e morre por meio de tabelas. Um decimal desalinhado ou um
estrela de significado ausente pode queimar um ciclo de revisar e reenviar que não tinha nada
a ver com sua estratégia de identificação. Os periódicos se preocupam quase com a legibilidade
tanto quanto coeficientes.

O que se segue é para estudantes e RAs que exportam do Stata ou R e depois limpam
LaTeX à mão.

## booktabs não é opcional

As regras verticais e as linhas horizontais duplas parecem o Word dos anos 1990. Utilize os três
regras horizontais de `booktabs`:

```latex
\usepackage{booktabs}
\begin{tabular}{lccc}
  \toprule
  & (1) & (2) & (3) \\
  \midrule
  Treatment & 0.12 & 0.09 & 0.08 \\
  \bottomrule
\end{tabular}
```

Consulte [tabelas de três regras](/learn/booktabs-beautiful/). Exportar de R
(`modelsummary`, ferramentas estilo `estout`, antigo `stargazer`) ou Stata para LaTeX
fragmentos e limpe você mesmo a linha do cabeçalho. Os cabeçalhos gerados automaticamente são
geralmente muito amplo ou muito enigmático para o PDF final.

## Notas embaixo da mesa, não notas de rodapé aleatórias

`trêsparttable` mantém a legenda, tabular e notas com a mesma largura:

```latex
\begin{table}
\begin{threeparttable}
  \caption{Main results}\label{tab:main}
  \begin{tabular}{...} ... \end{tabular}
  \begin{tablenotes}
    \small
    \item Notes: Robust standard errors in parentheses.
    Sample is ... Fixed effects: ...
  \end{tablenotes}
\end{threeparttable}
\end{table}
```

Coloque o tamanho da amostra, efeitos fixos, notas SE agrupadas e a estrela de significância
lenda aqui. Não pendure uma nota de rodapé em uma única célula que apenas alguns leitores
notará. Os rótulos dos painéis (A/B) pertencem à legenda ou às regras intermediárias com clareza
texto, não em uma legenda em estilo de figura que nunca aparece no PDF.

## Colunas numéricas e estrelas de significado

Os tipos de coluna `siunitx` (`S`) se alinham no ponto decimal. Só isso já faz um
tabela de resultados parece intencional. As estrelas quebram colunas numéricas puras, então você
geralmente precisa de um formato personalizado ou de uma coluna de texto. Padrões comuns:

Relatar coeficientes e SEs em linhas separadas (padrão em economia) ou agrupar estrelas
então o alinhamento ainda funciona (`0.012^{***}` com um tipo de coluna dedicado).

Seja consistente em todas as tabelas: mesmos limites de estrelas, mesmo estilo SE, mesmo número
de decimais para a mesma métrica. Os revisores comparam a Tabela 2 com a Tabela 3 em
propósito.

Um primeiro rascunho visual é bom. O navegador
[gerador de tabela](/tools/table-generator/) pode esboçar estrutura; a final
tabela ainda deve passar por `booktabs` e suas notas SE.

## Do software de regressão ao pronto para câmera

O loop típico se parece com isso. Congele o script de estimativa e a propagação. Exportar um
Fragmento LaTeX ou CSV de estimativas. Solte-o em um shell de mesa com stable
rótulos (`tab:main`, `tab:robust`). Escreva a legenda para que um skimmer conheça o
variável dependente, amostra e estimador sem ler as notas duas vezes.
Compile e conserte caixas excessivamente cheias cortando colunas; gire apenas como último
recurso.

Se uma tabela for maior que uma página, mude para `longtable` (ou painéis divididos)
antes da semana do prazo final, não depois que a revista reclamar das fontes 7pt.

## Citações: autor-ano é o dialeto

A maioria dos locais de economia e ciência política esperam o ano do autor. `biblatex` com
`style=authoryear` (ou o estilo da revista) é mais fácil a longo prazo do que lutar
Arquivos `.bst`. Se o laboratório ainda usa `natbib`, tudo bem; só não misture
ambas as pilhas em um preâmbulo. Visão geral:
[BibTeX ou biblatex](/learn/bibtex-vs-biblatex/).

As chaves devem ser estáveis ​​(`author:year:keyword`). Reexportando do Zotero sob
novas chaves no meio do projeto é como `\cite` interrompe a semana de submissão. Validar
o `.bib` para anos e diários faltantes:
[validador BibTeX](/tools/bibtex-validator/).

## Documentos de trabalho e SSRN

As versões do documento de trabalho mudam mensalmente. Mantenha a data da página de título em uma macro:

```latex
\newcommand{\paperdate}{June 2026}
```

Bata nele ao reexportar o PDF. A história local do Git é mais honesta do que
`final_final_v7.pdf` em uma unidade compartilhada. Confirmar quando a tabela principal for definida
compila; marque ou envie uma mensagem explicitamente à versão de envio.

Um editor de pesquisa que trata o projeto como um repositório Git real (pontos de verificação
após compilação, restauração, GitHub privado opcional) corresponde à forma como o trabalho empírico
já versões de código. O papel e os scripts de estimativa não devem viver
sob diferentes hábitos de backup.

## Identificação e ética de mesa (versão resumida)

O LaTeX não pode consertar um design fraco, mas pode tornar legível um design forte.
Indique o estimador e a amostra na legenda. Não esconda o fato de que
a coluna (3) coloca metade da amostra em uma nota de rodapé que ninguém lê. Se você mostrar
tabelas de robustez, mantenha a mesma ordem de variáveis dependentes da tabela principal para
os leitores podem digitalizar.

## Lista de verificação pré-envio

Coisas que mordem as pessoas tarde:

- Tabelas de três regras; sem regras verticais.
- Alinhamento decimal; estrelas consistentes e notas SE.
- A legenda indica resultado, amostra, estimador.
- Rótulos estáveis; o texto cita `\ref{tab:...}`.
- O estilo da bibliografia corresponde ao local; `.bib` validado.
- A data do documento de trabalho e o commit do Git correspondem ao que você carregou.

## Pacotes de replicação

Mais periódicos querem código e dados. Mantenha scripts de exportação de tabela próximos ao papel
repo (ou vinculado a um hash de commit). Quando um coeficiente muda porque o
script de limpeza alterado, gere novamente o fragmento LaTeX e confirme ambos novamente. Um
tabela que não pode ser reproduzida é uma responsabilidade, mesmo que pareça limpa.

## Beamer para seminários

Reutilize os mesmos fragmentos de `booktabs` em slides quando puder ou exporte PDF
colheitas das mesas. Reconstruir números manualmente em uma apresentação de slides é como
os slides do seminário discordam do artigo.

Acerte as tabelas e a estratégia de identificação terá uma audiência justa. Obter
eles estão errados e você passa uma rodada discutindo sobre formatação.