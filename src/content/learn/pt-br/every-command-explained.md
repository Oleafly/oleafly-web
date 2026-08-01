---

title: "Cada \\\\comando no universo LaTeX, explicado"
description: "A referência global: centenas de comandos e ambientes LaTeX, do kernel ao amsmath, hyperref, TikZ, biblatex e Beamer, cada um explicado em uma linha."
category: "desk-reference"
order: 0
level: "beginner"
tags: ["reference", "commands"]
featured: true
updated: 2026-07-25
---

# Cada \command no universo LaTeX, explicado

Esta página define todos os comandos e ambientes LaTeX que aparecem em qualquer lição do Oleafly Learn, além do vocabulário padrão mais amplo que você encontrará em trabalhos reais. Kernel, amsmath, hyperref, graphicx, booktabs, biblatex, TikZ, Beamer e os pacotes que os pesquisadores realmente carregam. Navegue por categoria ou pesquise na página com Ctrl/Cmd-F o comando que você acabou de conhecer. Cada entrada é uma linha: o que faz e, onde importa, de qual pacote vem.

## Classes e configuração de documentos

| Comando | O que faz |
| --- | --- |
| `\documentclass{artigo}` | Primeira linha de cada documento: escolhe o layout geral; artigo é a escolha padrão para artigos. |
| `\documentclass{relatório}` | Classe para relatórios mais longos: adiciona `\chapter` e inicia o resumo em sua própria página. |
| `\documentclass{livro}` | Aula para livros: capítulos, layout frente e verso, capa/principal/verso. |
| `\documentclass{letra}` | Classe para correspondência, com comandos `\opening`, `\closing` e address. |
| `\documentclass{beamer}` | Aula para apresentações de slides construídas a partir de ambientes `frame`. |
| `\documentclass[11pt,a4paper]{artigo}` | Opções comuns de classe: tamanho da fonte (10pt, 11pt, 12pt), papel (a4paper, letterpaper), `twocolumn`, `twoside`, `landscape`, `draft`, `titlepage`. |
| `\usepackage{amsmath}` | Carrega um pacote no preâmbulo para adicionar recursos. |
| `\usepackage[margem=1in]{geometria}` | Define as margens da página e o tamanho do papel (geometria). |
| `\título{...}` | Armazena o título do documento, impresso posteriormente por `\maketitle`. |
| `\autor{...}` | Armazena a lista de autores de `\maketitle`; separe vários autores com `\and`. |
| `\e` | Separador entre nomes de autores dentro de `\author{...}`. |
| `\data{...}` | Armazena a data mostrada por `\maketitle`; `\date{}` esconde, `\date{\today}` mostra hoje. |
| `\hoje` | Imprime a data atual em tempo de compilação. |
| `\maketitle` | Imprime o bloco de título de `\title`, `\author` e `\date`. |
| `\obrigado{...}` | Anexa uma nota de rodapé a um título ou nome de autor, por ex. para financiamento ou informações de contato. |
| `\instituto{...}` | Comando de afiliação de autor usado pelo Beamer e pela classe Springer LNCS. |
| `\inst{1}` | Marcador sobrescrito de afiliação nas listas de autores do LNCS e Beamer: `Ada Lovelace\inst{1}`. |
| `\palavras-chave{...}` | Imprime a lista de palavras-chave do artigo no editoraulas como acmart e llncs. |
| `\endereço{...}` | classe de carta: armazena o endereço do remetente para o papel timbrado. |
| `\assinatura{...}` | classe de letras: armazena o nome impresso abaixo do fechamento. |
| `\abertura{Caro...}` | classe de letras: imprime a saudação e inicia o corpo da carta. |
| `\closing{Atenciosamente,}` | classe de letras: imprime o bloco de aprovação e assinatura. |
| `\LaTeX` | Imprime o logotipo do LaTeX com suas letras em relevo e em baixo. |
| `\TeX` | Imprime o logotipo do TeX com seu E rebaixado. |
| `\input{arquivo}` | Cola outro arquivo .tex no lugar, como se você o tivesse digitado lá. |
| `\include{capítulo1}` | Insere um arquivo de capítulo começando em uma nova página; permite compilações parciais via `\includeonly`. |
| `\includeonly{capítulo1,capítulo3}` | Lista de preâmbulo que restringe quais arquivos `\include` realmente são compilados. |
| `\hipersetup{...}` | Configura opções de hiperref, como cores de links e metadados de PDF. |
| `\AtBeginDocument{...}` | Executa o código logo após `\begin{document}`, útil para configuração tardia. |
| `\AtEndDocument{...}` | Executa o código pouco antes de o documento terminar. |
| `\makeatletter` | Torna `@` temporariamente uma letra para que você possa usar ou corrigir comandos internos. |
| `\makeatother` | Restaura `@` ao normal após `\makeatletter`. |
| `\typeout{...}` | Imprime uma mensagem no log de compilação e no terminal, útil para depuração. |
| `\proteger` | Protege um comando frágil dentro de um argumento móvel como `\caption` ou `\section`. |
| `\arquivos de lista` | Comando de preâmbulo que registra cada arquivo carregado e sua versão, para relatórios de bugs. |

## Estrutura e seccionamento

| Comando | O que faz |
| --- | --- |
| `\parte{...}` | Divisão de nível mais alto, acima dos capítulos, nas aulas de livros e relatórios. |
| `\capítulo{...}` | Título de capítulo numerado nas aulas de livros e relatórios (não no artigo). |
| `\seção{...}` | Título de nível superior numerado em um artigo. |
| `\subseção{...}` | Título numerado um nível abaixo de `\section`. |
| `\subsubsection{...}` | Título numerado um nível abaixo de `\subsection`. |
| `\parágrafo{...}` | Título de nível mais baixo: um título em negrito no início de um parágrafo. |
| `\subparágrafo{...}` | Um nível abaixo de `\paragraph`, raramente necessário. |
| `\seção*{...}` | O seccionamento com estrela imprime o título sem um número ou entrada de sumário. |
| `\apêndice` | Muda a numeração para que os capítulos ou seções seguintes se tornem Apêndice A, B, C. |
| `\apêndice` | Imprime uma página divisória "Apêndices" separada (pacote de apêndices). |
| `\índice de conteúdo` | Imprime o índice, criado a partir de seus comandos de seccionamento. |
| `\listadefiguras` | Imprime uma lista de todas as legendas de figuras com números de página. |
| `\listoftables` | Imprime uma lista de todas as legendas de tabelas com números de página. |
| `\frontmatter` | Mudança de classe de livro para as páginas de pré-conteúdo: números de páginas romanos, capítulos não numerados. |
| `\principal` | A aula de livro volta ao conteúdo principal: números de páginas em árabe, capítulos numerados. |
| `\backmatter` | Troca de classe de livro para as páginas finais: os capítulos deixam de ser numerados. |
| `\addcontentsline{toc}{chapter}{...}` | Adiciona manualmente uma entrada ao índice (ou uma lista de figuras/tabelas). |
| `\addtocontents{toc}{...}` | Grava material arbitrário (como espaçamento) em um arquivo de conteúdo. |
| `\setcounter{secnumprofundidade}{3}` | Controla a profundidade dos números de corte. |
| `\setcounter{tocprofundidade}{2}` | Controla a profundidade do sumário. |

## Definindo comandos e ambientes

| Comando | O que faz |
| --- | --- |
| `\newcommand{\R}{\mathbb{R}}` | Define seu próprio comando; erros se o nome já existir. |
| `\renewcommand{...}{...}` | Redefine um comando existente; erros se não existir. |
| `\providecommand{...}{...}` | Define um comando somente se ainda não estiver definido; caso contrário, silenciosamente não faz nada. |
| `\NovoDocumentoCommand` | Definição de comando moderna com argumentos opcionais flexíveis (LaTeX3/xparse). |
| `\newenvironment{nome}{código inicial}{código final}` | Define seu próprio ambiente com código executado em `\begin` e `\end`. |
| `\renewenvironment{nome}{...}{...}` | Redefine um ambiente existente. |
| `\ensuremath{...}` | Faz com que o conteúdo matemático de uma macro funcione dentro e fora do modo matemático. |
| `\DeclareMathOperator{\E}{E}` | Define um nome de operador vertical; a forma estrelada coloca limites abaixo (amsmath). |
| `\DeclareMathOperator*{\argmin}{arg\,min}` | Forma com estrela: o operador assume os limites abaixo na matemática de exibição (amsmath). |
| `\newtheorem{lema}{lema}` | Declara um ambiente semelhante a um teorema (amsthm). |
| `\foo` | Nome de exemplo para uma macro definida pelo usuário na lição `\newcommand`, não um comando LaTeX real. |
| `\abs{x}` | Exemplo de macro definida pelo usuário da lição de comandos personalizados que compõe barras de valores absolutos. |
| `\mat{A}` | Exemplo de macro definida pelo usuário da lição de comandos personalizados para um símbolo de matriz em negrito. |
| `\vect{v}` | Exemplo de macro definida pelo usuário da lição de comandos personalizados para um símbolo vetorial em negrito. |
| `\set{...}` | Exemplo de macro definida pelo usuário da lição de comandos personalizados que define o tamanho dos colchetes. |
| `\citepair` | Exemplo de macro auxiliar de citação definida pelo usuário da lição de comandos personalizados, não de um comando padrão. |
| `\E` | Exemplo de operador definido pelo usuário para expectativa, normalmente definido com`\DeclareMathOperator` ou `\newcommand`. |
| `\R` | Exemplo de macro definida pelo usuário para os reais: `\newcommand{\R}{\mathbb{R}}`. |
| `\argmax`, `\argmin` | Nomes de operadores para arg max / arg min, definidos neste curso com `\DeclareMathOperator*` para que os subscritos fiquem abaixo. |

## Contadores e comprimentos

| Comando | O que faz |
| --- | --- |
| `\newcounter{exemplos}` | Cria um novo contador, opcionalmente redefinido por um pai: `\newcounter{examples}[section]`. |
| `\setcounter{página}{1}` | Define o valor de um contador, aqui reiniciando os números das páginas. |
| `\addtocounter{exemplos}{2}` | Adiciona um valor a um contador sem imprimir nada. |
| `\stepcounter{exemplos}` | Aumenta um contador em um. |
| `\refstepcounter{exemplos}` | Incrementa um contador e o torna o alvo do próximo `\label`. |
| `\valor{exemplos}` | Lê o valor de um contador para uso em aritmética ou comparações. |
| `\árabe{exemplos}` | Imprime um contador como algarismos arábicos: 1, 2, 3. |
| `\roman{exemplos}`, `\Roman{exemplos}` | Imprime um contador como algarismos romanos minúsculos ou maiúsculos. |
| `\alph{exemplos}`, `\Alph{exemplos}` | Imprime um contador em letras minúsculas ou maiúsculas. |
| `\fnsymbol{nota de rodapé}` | Imprime um contador como símbolos de nota de rodapé: asterisco, punhal e assim por diante. |
| `\newlength{\mygap}` | Cria um novo registro de comprimento. |
| `\setlength{\parskip}{6pt}` | Atribui um valor a um registro de comprimento. |
| `\addtolength{\texttheight}{1cm}` | Adiciona a um comprimento existente. |
| `\settowidth{\mygap}{texto}` | Define um comprimento para a largura natural de algum texto. |
| `\parindent` | Comprimento do recuo do parágrafo da primeira linha; definido com `\setlength{\parindent}{0pt}`. |
| `\parskip` | Comprimento do espaço vertical entre parágrafos; definido com `\setlength`. |
| `\largura de linha` | Comprimento da linha atual, útil para dimensionamento: `width=\linewidth`. |
| `\largura do texto` | Comprimento da largura completa do bloco de texto na página. |
| `\textheight` | Comprimento da altura do bloco de texto completo na página. |
| `\largura da coluna` | Largura de uma coluna em um layout de múltiplas colunas. |
| `\baselineskip` | Distância vertical entre linhas de base de linhas consecutivas. |
|`\linespread{1.3}` | Dimensiona o entrelinhamento (espaçamento entre linhas) para todo o documento; precisa de `\selectfont` ou de um comando de tamanho para entrar em vigor. |

## Parágrafos, quebras de linha e hifenização

| Comando | O que faz |
| --- | --- |
| `\\` | Termina a linha atual dentro de parágrafos, tabelas e matrizes. |
| `\\[6pt]` | Quebra de linha com espaço vertical extra depois dela. |
| `\nova linha` | Quebra a linha sem justificá-la e sem permitir quebra de página. |
| `\linebreak` | Solicita uma quebra de linha justificada aqui; opcional `[0-4]` define a insistência. |
| `\nolinebreak` | Desencoraja uma quebra de linha neste momento. |
| `\par` | Termina o parágrafo, da mesma forma que uma linha em branco na fonte. |
| `\noindent` | Suprime o recuo da primeira linha do parágrafo seguinte. |
| `\recuo` | Força o recuo da primeira linha onde, de outra forma, seria suprimido. |
| `\-` | Marca um ponto de hifenização permitido dentro de uma palavra. |
| `\hifenização{conjunto de dados}` | Lista de preâmbulos ensinando ao LaTeX como hifenizar palavras específicas. |
| `\desleixado` | Afrouxa as regras de espaçamento para que as linhas quebrem com mais facilidade, evitando caixas muito cheias. |
| `\ exigente` | Restaura regras estritas de espaçamento após `\sloppy`. |
| `\raggedright` | Alinha à esquerda o texto a seguir em vez de justificá-lo. |
| `\raggedleft` | Alinha à direita o texto a seguir. |
| `\centralização` | Centraliza tudo o que segue dentro do grupo atual, por ex. imagem de uma figura. |
| `\mesma página` | Desencoraja quebras de página no grupo atual. |
| `\enlargethispage{\baselineskip}` | Torna apenas a página atual um pouco mais alta, para inserir mais uma linha. |
| `~` | Espaço inseparável: `Figure~1` mantém o número na mesma linha. |

## Espaçamento

| Comando | O que faz |
| --- | --- |
| `\quad` | Insere um espaço horizontal com a largura de um M maiúsculo. |
| `\qquad` | Insere duas vezes o espaço de `\quad`. |
| `\espaço` | Insere metade de um `\quad` de espaço horizontal. |
| `\hspace{1cm}` | Insere espaço horizontal; desaparece em uma quebra de linha. |
| `\hspace*{1cm}` | Espaço horizontal que sobrevive mesmo em caso de quebra de linha. |
| `\vespaço{1cm}` | Insere espaço vertical de um determinado comprimento. |
| `\vespaço*{1cm}` | Espaço vertical que sobrevive mesmo em caso de quebra de página. |
| `\smallskip` | Insere um pequeno espaço vertical entre os parágrafos. |
| `\medskip` | Insere um espaço vertical médio entre os parágrafos. |
| `\bigskip` | Insere um grande espaço vertical entre os parágrafos. |
| `\hfill` | Espaço horizontal elástico que separa o conteúdo para preencher a linha. |
| `\vfill` | Espaço vertical elástico que separa o conteúdo para preencher a página. |
| `\dotfill` | Preenche a linha restante com pontos, como em uma linha de menu ou conteúdo. |
| `\hrulefill` | Preenche a linha restante com uma régua horizontal. |
| `\ esticar{2}` | Cola elástica com peso, para espaçamento proporcional: `\hspace{\stretch{2}}`. |
| `\preencher` | O comprimento elástico da unidade; `\hspace{\fill}` é para onde `\hfill` se expande. |
| `\fantasma{texto}` | Ocupa exatamente o espaço do seu argumento, mas não imprime nada. |
| `\hphantom{texto}` | Ocupa apenas a largura do seu argumento, com altura zero. |
| `\vphantom{texto}` | Ocupa apenas a altura do seu argumento, com largura zero. |
| `\smash{...}` | Imprime seu argumento, mas finge que tem altura e profundidade zero. |
| `\strut` | Suporte invisível na altura de uma linha normal, para uniformizar a altura das linhas. |
| `\mathstrut` | O modo matemático tem o tamanho de um parêntese, para alinhar radicais e frações. |

## Caixas e regras

| Comando | O que faz |
| --- | --- |
| `\mbox{...}` | Caixa horizontal inquebrável; também mantém seu conteúdo em uma linha. |
| `\makebox[3cm][r]{...}` | Caixa de largura definida com alinhamento escolhido (l, c, r, s). |
| `\fbox{...}` | Desenha uma moldura em torno do seu conteúdo. |
| `\framebox[3cm][c]{...}` | Caixa emoldurada de largura definida com alinhamento escolhido. |
| `\parbox{5cm}{...}` | Uma caixa de parágrafo: uma minicoluna de texto com a largura especificada. |
| `\raisebox{2pt}{...}` | Desloca seu conteúdo para cima (ou para baixo com comprimento negativo). |
| `\rule{2cm}{0.4pt}` | Desenha um retângulo preenchido; o burro de carga para linhas personalizadas. |
| `\colorbox{amarelo}{...}` | Coloca o texto em uma caixa de fundo colorida (xcolor). |
| `\fcolorbox{vermelho}{amarelo}{...}` | Caixa colorida com moldura colorida (xcolor). |

## Páginas, numeração e cabeçalhos

| Comando | O que faz |
| --- | --- |
| `\novapágina` | Encerra a página atual e inicia uma nova. |
| `\clearpage` | Inicia uma nova página após primeiro liberar todas as figuras e tabelas pendentes. |
| `\cleardoublepage` | Como `\clearpage`, mas também garante que a próxima página seja uma página à direita (ímpar). |
| `\pagebreak` | Solicita uma quebra de página neste ponto, esticando a página até a altura total. |
| `\nopagebreak` | Desencoraja uma quebra de página neste momento. |
| `\pagenumbering{roman}` | Define o estilo do número da página (árabe, romano, romano, alfa, alfa), zerando o contador para 1. |
| `\pagestyle{fancy}` | Define o estilo de cabeçalho/rodapé em execução (simples, vazio, títulos, myheadings, sofisticado) para todas as páginas seguintes. |
| `\thispagestyle{vazio}` | Substitui o estilo de cabeçalho/rodapé apenas da página atual. |
| `\apágina` | Imprime o número da página atual; usado dentro de cabeçalhos e rodapés. |
| `\marginpar{...}` | Coloca uma nota na margem da página próxima à linha atual. |
| `\fancyhf{}` | Limpa todos os campos de cabeçalho e rodapé do fancyhdr antes de definir o seu próprio. |
| `\fancyhead[R]{...}` | Define um campo de cabeçalho sofisticado, aqui o da direita. |
| `\fancyfoot[C]{\thepage}` | Define um campo de rodapé sofisticado, aqui um número de página centralizado. |
| `\headrulewidth` | macro fancyhdr para a espessura da regra do cabeçalho; renove para 0pt para remover a linha. |
| `\footrulewidth` | macro fancyhdr para a espessura da regra do rodapé, 0pt por padrão. |
| `\newgeometry{margem=2cm}` | Altera a geometria da página no meio do documento (geometria). |
| `\restoregeometry` | Retorna à geometria do preâmbulo após `\newgeometry` (geometria). |

## Caracteres especiais

Os dez caracteres reservados e como imprimi-los, além de símbolos de texto comuns.

| Comando | O que faz |
| --- | --- |
| `\%` | Imprime um sinal de porcentagem (simples `%` inicia um comentário). |
| `\&` | Imprime um e comercial (`&` é o separador de colunas da tabela). |
| `\#` | Imprime um hash (`#` simples marca argumentos de macro). |
| `\_` | Imprime um sublinhado (`_` simples é um subscrito matemático). |
| `\{` e `\}` | Imprimir chaves (grupo de chaves). |
| `\$` | Imprime um cifrão (simples `$` alterna o modo matemático). |
| `\textbarra invertida` | Imprime uma barra invertida no texto. |
| `\textasciitilde` | Imprime um til no texto (bare `~` é um espaço inseparável). |
| `\textasciicircum` | Imprime um sinal de intercalação no texto (`^` é um sobrescrito matemático). |
| `\barra de texto` | Imprime uma barra vertical no texto. |
| `\textless`, `\textgreater` | Imprima < e > corretamente em modo texto. |
| `\ldots`, `\dots` | Reticências com espaçamento correto; `\dots` se adapta no modo matemático (amsmath). |
| `\textellipsis` | As reticências em modo texto que `\dots` usa fora da matemática. |
| `\textemdash`, `\textendash` | Comandos nomeados para o em e o travessão (mesma saída de `---` e `--`). |
| `\textquotedblleft`, `\textquotedblright` | Aspas duplas curvas (geralmente digitadas como pares de crases e pares de apóstrofos). |
| `\guillemetleft`, `\guillemetright` | Aspas angulares francesas (grafia antiga: `\guillemotleft`/`\guillemotright`). |
| `\dag`, `\ddag` | Punhal e punhal duplo no texto, comuns para filiações de autores. |
| `\S` | Sinal de seção, como em S 2.1 de um documento legal. |
| `\P` | Sinal de parágrafo (pilcrow). |
| `\libras` | Sinal de libra britânica. |
| `\euro` | Sinal do euro (pacote eurosym; o kernel também fornece `\texteuro`). |
| `\direitos autorais` | Sinal de direitos autorais. |
| `\textregistrado` | Sinal de marca registrada. |
| `\texttrademark` | Sinal de marca registrada. |
| `\textdegree` | Sinal de grau: `25\textdegree C`. |
| `\textmu` | Micro verticalassine para texto como mícrons. |
| `\textpermil` | Sinal por mil. |

## Acentos e letras especiais

Para acentos de texto da era pdfLaTeX; com entrada XeLaTeX/LuaLaTeX e UTF-8 você normalmente pode apenas digitar o caractere.

| Comando | O que faz |
| --- | --- |
| `\'{e}` | Sotaque agudo: e-agudo como no café com sotaque. |
| `` \`{e} `` | Acento grave. |
| `\^{o}` | Sotaque circunflexo. |
| `\"{u}` | Trema/dierese. |
| `\~{n}` | Sotaque til, como em espanhol n-tilde. |
| `\c{c}` | Cedilla, como em francês c-cedilla. |
| `\v{s}` | Caron (hacek), comum em nomes tchecos e croatas. |
| `\H{o}` | Acento agudo duplo húngaro. |
| `\k{a}` | Ogonek, como em polonês a-ogonek. |
| `\b{o}` | Sotaque de barra inferior. |
| `\d{u}` | Acento ponto abaixo, usado na transliteração. |
| `\r{a}` | Acento de anel, como no anel escandinavo. |
| `\u{o}` | Breve sotaque. |
| `\.{o}` | Acento pontilhado. |
| `\t{oo}` | Amarre o acento unindo duas letras. |
| `\i`, `\j` | I e j sem ponto, para empilhar acentos: `\'{\i}`. |
| `\ae`, `\AE` | A ligadura ae, minúsculas e maiúsculas. |
| `\oe`, `\OE` | A ligadura oe, como na obra francesa. |
| `\ss` | S sustenido alemão (eszett). |
| `\o`, `\O` | O cortado, como nos nomes dinamarqueses e noruegueses. |
| `\l`, `\L` | Polonês cortado l. |
| `\aa`, `\AA` | A-ring como uma letra independente, como no nome de Angstrom. |

## Fontes e tamanhos

| Comando | O que faz |
| --- | --- |
| `\textbf{...}` | Texto em negrito. |
| `\textit{...}` | Texto em itálico. |
| `\emph{...}` | Ênfase que se adapta ao contexto: itálico no texto vertical, vertical no texto itálico. |
| `\textsc{...}` | Texto em versalete. |
| `\texttt{...}` | Texto de máquina de escrever (monoespaçado), bom para códigos e nomes de arquivos. |
| `\textrm{...}` | Texto familiar romano (serif). |
| `\textsf{...}` | Texto de família sem serifa. |
| `\textmd{...}` | Peso médio (normal), desfazendo negrito. |
| `\textup{...}` | Formato vertical, desfazendo o itálico ou inclinado. |
| `\textsl{...}` | Forma inclinada (oblíqua), distinta do itálico verdadeiro. |
| `\textnormal{...}` | Redefine a fonte padrão do documento em uma única etapa. |
| `\sublinhado{...}` | Sublinha o texto; use com moderação, a ênfase geralmente é `\emph`. |
| `\rmfamily`, `\sffamily`, `\ttfamily` | Declarações trocando a família de fontes (serif, sans, mono) até o final do grupo. |
| `\bfseries`, `\mdseries` | Declarações mudando para negrito ou voltando para peso médio. |
| `\itshape`, `\slshape`, `\scshape`, `\upshape` | Declarações mudando de formato: itálico, inclinado, versalete, vertical. |
| `\normalfont` | Declaração redefinindo família, série e forma para os padrões. |
| `\em` | Forma de declaração de `\emph`: `{\em assim}`. |
| `\minúsculo` | O menor dos dez comandos de tamanho. |
| `\tamanho do script` | Segundo menor tamanho, aproximadamente tamanho subscrito. |
| `\footnotesize` | O tamanho usado para notas de rodapé. |
| `\pequeno` | Um pouco menor que o normal. |
| `\tamanho normal` | O tamanho base do documento. |
| `\grande`, `\Grande`, `\LARGE` | Um, dois e três passos maiores que o normal. |
| `\enorme`, `\Enorme` | Os dois maiores tamanhos padrão. |
| `\fontsize{14}{17}\selectfont` | Define um tamanho de fonte arbitrário e um salto de linha de base e, em seguida, ativa-o. |
| `\selectfont` | Ativa o atributo de fonte pendentealterações (NFSS). |
| `\textsuperscript{...}` | Texto pequeno em relevo, como em marcadores de primeira linha ou de nota de rodapé. |
| `\textsubscript{...}` | Texto pequeno reduzido no modo de texto. |
| `\famíliapadrão` | Macro que contém a família de fontes padrão; renove-o para alterar a fonte de todo o documento. |
| `\sfdefault` | Macro nomeando a família sans-serif; `\renewcommand{\familydefault}{\sfdefault}` torna o documento sem. |
| `\setmainfont{...}` | Define a fonte do corpo principal por nome em XeLaTeX ou LuaLaTeX (fontspec). |
| `\setsansfont{...}` | Define a fonte sans-serif por nome em XeLaTeX ou LuaLaTeX (fontspec). |
| `\setmonofont{...}` | Define a fonte monoespaçada por nome em XeLaTeX ou LuaLaTeX (fontspec). |

## Cor (xcolor)

| Comando | O que faz |
| --- | --- |
| `\textcolor{vermelho}{...}` | Colore um pedaço de texto. |
| `\cor{azul}` | Formulário de declaração: colore tudo até o final do grupo. |
| `\definecolor{marca}{HTML}{2F6F4F}` | Define uma cor nomeada para uso posterior. |
| `\pagecolor{cinza!10}` | Define a cor de fundo de toda a página. |
| `\rowcolor{cinza!20}` | Colore uma linha da tabela (xcolor com a opção `table`, via colortbl). |
| `\cellcolor{cinza!20}` | Colore uma célula da tabela (colortbl). |
| `\rowcolors{2}{cinza!10}{branco}` | Cores de linha alternadas começando em uma determinada linha (opção xcolor `table`). |

## Gráficos (gráficox)

| Comando | O que faz |
| --- | --- |
| `\includegraphics[largura=\linewidth]{plot.pdf}` | Insere um arquivo de imagem; opções de teclas: `largura`, `altura`, `escala`, `ângulo`, `trim`+`clip`, `página`. |
| `\graphicspath{{figuras/}}` | Informa ao LaTeX quais pastas procurar por arquivos de imagem. |
| `\rotatebox[origem=c]{90}{...}` | Gira seu conteúdo em um ângulo. |
| `\scalebox{0.8}{...}` | Dimensiona seu conteúdo por um fator. |
| `\resizebox{5cm}{!}{...}` | Redimensiona o conteúdo para uma largura e/ou altura desejada; `!` mantém a proporção. |
| `\reflectbox{...}` | Espelha seu conteúdo horizontalmente. |
| `\includepdf[pages=-]{paper.pdf}` | Insere páginas inteiras de outro PDF (pdfpages). |

## Entrando no modo matemático

| Comando | O que faz |
| --- | --- |
| `$...$` | Matemática embutida em uma frase. |
| `\(...\)` | Delimitadores matemáticos embutidos oficiais do LaTeX, equivalentes a `$...$`. |
| `\[...\]` | Equação não numerada exibida em sua própria linha. |
| `$$...$$` | Matemática de exibição do Plain TeX; desencorajado em LaTeX, use `\[...\]` em vez disso. |
| `x^2`, `x_i` | `^` cria sobrescritos e `_` cria subscritos; chaves scripts de vários caracteres: `x^{10}`. |

## Matemática: letras gregas

Tudo isso funciona apenas no modo matemático. Existem formas maiúsculas onde a maiúscula grega difere da latina.

| Comando | O que faz |
| --- | --- |
| `\alpha` `\beta` `\gamma` `\delta` | Letras gregas alfa, beta, gama, delta. |
| `\epsilon` `\zeta` `\eta` `\theta` | Letras gregas épsilon, zeta, eta, theta. |
| `\iota` `\kappa` `\lambda` `\mu` `\nu` | Letras gregas iota, kappa, lambda, mu, nu. |
| `\xi` `\pi` `\rho` `\sigma` `\tau` | Letras gregas xi, pi, rho, sigma, tau. |
| `\upsilon` `\phi` `\chi` `\psi` `\omega` | Letras gregas upsilon, phi, chi, psi, ômega. |
| `\Gamma` `\Delta` `\Theta` `\Lambda` `\Xi` `\Pi` | Letras gregas maiúsculas de gama a Pi. |
| `\Sigma` `\Upsilon` `\Phi` `\Psi` `\Omega` | Letras gregas maiúsculas de Sigma a Omega. |
| `\varepsilon` `\vartheta` `\varpi` | Formas variantes de épsilon (o encaracolado que a maioria dos artigos usa), teta e pi. |
| `\varrho` `\varsigma` `\varphi` | Formas variantes de rho, sigma (final da palavra) e phi (cacheado aberto). |
| `\varGamma` `\varDelta` `\varTheta` `\varLambda` | Variantes gregas em maiúsculas e itálico (amsmath). |
| `\varXi` `\varPi` `\varSigma` `\varUpsilon` `\varPhi` `\varPsi` `\varOmega` | As restantes variantes gregas em itálico e maiúsculas (amsmath). |

## Matemática: operadores binários

| Comando | O que faz |
| --- | --- |
| `\pm`, `\mp` | Sinais de mais-menos e menos-mais. |
| `\vezes` | Cruz de multiplicação, também usada para dimensões como 3 x 3. |
| `\div` | Sinal de divisão (obelus). |
| `\cdot` | Ponto centralizado para multiplicação. |
| `\ast`, `\star`, `\bullet`, `\circ` | Operadores de asterisco, estrela, marcador e pequenos círculos; `\circ` também é composição de função. |
| `\oplus`, `\ominus` | Circulado mais (soma direta, XOR) e circulado menos. |
| `\otimes`, `\oslash`, `\odot` | Tempos circulados (produto tensorial), barra circulada, ponto circulado. |
| `\cunha`, `\vee` | Cunha (E lógico, produto exterior) e vee (OU lógico, junção). |
| `\terra`, `\lor` | Aliases de `\wedge` e `\vee` nomeados de acordo com sua leitura lógica. |
| `\cap`, `\copo` | Defina sinais de interseção e união. |
| `\setminus` | Definir barra invertida de diferença: `A \setminus B`. |
| `\uplus` | União com sinal positivo, para união multiconjunto ou disjunta. |
| `\sqcap`, `\sqcup` | Tampa e copo quadrados, encontram-se e unem-se na teoria da rede. |
| `\amalg` | Amálgama (produto invertido), utilizado para coprodutos. |
| `\dagger`, `\ddagger` | Punhal e punhal duplo como operadores matemáticos, por ex. transposição conjugada `A^\dagger`. |
| `\bigtriangleup`, `\bigtriangledown` | Operadores triangulares, por ex. diferença simétrica. |
| `\triangleleft`, `\triangleright` | Triângulos laterais, por ex. relação normal de subgrupo. |

## Matemática: relações

| Comando | O que faz |
| --- | --- |
| `\leq`, `\le` | Sinal de menor ou igual (`\ le` é o alias curto). |
| `\geq`, `\ge` | Sinal de maior ou igual (`\ge` é o alias curto). |
| `\neq`, `\ne` | Sinal de diferença (`\ne` é o alias curto). |
| `\ll`, `\gg` | Sinais de muito menos e muito maior que. |
| `\aprox` | Sinal aproximadamente igual. |
| `\sim` | Relação til, lida como 'é distribuída como' ou 'é semelhante a'. |
| `\simeq` | Sinal assintoticamente igual (til sobre igual). |
| `\cong` | Sinal congruente (til sobre duas barras), usado para isomorfismo. |
| `\equiv` | Sinal idêntico ao (barra tripla), também usado para congruência. |
| `\propto` | Sinal proporcional ao. |
| `\asymp` | Relação assintoticamente equivalente (curvas empilhadas). |
| `\doteq` | Sinal de igual com um ponto, lido como 'aproxima-se' ou 'é definido como'. |
| `\prec`, `\succ` | Precede e sucede relações, ordenações curvas. |
| `\preceq`, `\succeq` | Precede ou é igual e sucede ou é igual. |
| `\subset`, `\subseteq` | Subconjunto adequado e sinais de subconjunto ou de igual. |
| `\supset`, `\supsetq` | Superconjunto adequado e sinais de superconjunto ou de igual. |
| `\sqsubseteq`, `\sqsupseteq` | Relações quadradas de subconjunto e superconjunto, usadas para ordem de informações. |
| `\in`, `\notin` | Defina a associação e sua negação: `x \in A`. |
| `\ni` | Associação invertida: o conjunto contém o elemento. |
| `\vdash`, `\dashv` | Torniquete 'prova' e seu reverso. |
| `\modelos` | Torniquete duplo, implicação semântica. |
| `\perp` | Relação perpendicular/independência. |
| `\paralelo` | Relação de barras paralelas. |
| `\meio` | Barra vertical com espaçamento de relação, como na notação construtora de conjuntos ou 'divisões'. |
| `\não` | Nega a seguinte relação imprimindo uma barra: `\not\subset`. |

## Matemática: setas

| Comando | O que faz |
| --- | --- |
| `\para`, `\rightarrow` | Seta para a direita, como nos tipos de função `f: A \to B` e limites `x \to 0`. |
| `\gets`, `\leftarrow` | Seta para a esquerda, também usada para atribuição em pseudocódigo. |
| `\leftrightarrow` | Flecha única de duas pontas. |
| `\Rightarrow` | Seta dupla para a direita, lida como 'implica'. |
| `\Leftarrow` | Seta dupla para a esquerda, lida como 'está implícito em'. |
| `\Leftrightarrow` | Seta dupla de duas pontas, lida como 'se e somente se'. |
| `\implies`, `\impliedby` | `\Rightarrow` e `\Leftarrow` espaçados para lógica (amsmath). |
| `\iff` | `\Leftrightarrow` espaçado para 'se e somente se'. |
| `\mapasto` | Seta de mapeamento com cauda de barra: `x \mapsto x^2`. |
| `\longmapsto` | Versão longa de `\mapsto`. |
| `\hookrightarrow` | Seta para a direita com cauda em gancho, para inclusões/incrustações. |
| `\rightharpoonup` | Arpão direito (meia flecha), usado para convergência fraca. |
| `\rightleftharpoons` | Arpões opostos emparelhados, como no equilíbrio químico. |
| `\leva a` | Seta ondulada para a direita, 'leva a' (amssymb). |
| `\uparrow`, `\downarrow` | Setas para cima e para baixo. |
| `\updownarrow` | Seta vertical de duas pontas. |
| `\Uparrow`, `\Downarrow`, `\Updownarrow` | Setas verticais com linhas duplas. |
| `\nearrow`, `\searrow` | Setas diagonais nordeste e sudeste, por ex. aumentando/diminuindo até um limite. |
| `\nwarrow`, `\nwarrow` | Setas diagonais sudoeste e noroeste. |
| `\longrightarrow`, `\longleftarrow` | Setas longas e simples. |
| `\Longrightarrow`, `\Longleftarrow`, `\Longleftrightarrow` | Setas duplas longas. |
| `\xrightarrow{f}` | Seta extensível para a direita com um rótulo na parte superior, crescendo para caber (amsmath). |
| `\xleftarrow{f}` | Seta extensível para a esquerda com um rótulo no topo (amsmath). |

## Matemática: grandes operadores

| Comando | O que faz |
| --- | --- |
| `\sum_{i=1}^{n}` | Sinal de soma com limites. |
| `\prod_{i=1}^{n}` | Sinal do produto com limites. |
| `\coprod` | Sinal de coproduto (produto invertido). |
| `\int_0^1` | Sinal integral com limites. |
| `\iint` | Sinal integral duplo (amsmath). |
| `\iiint` | Sinal integral triplo (amsmath). |
| `\oint` | Sinal integral de contorno (circuito fechado). |
| `\bigcap`, `\bigcup` | Grande intersecção e união em uma família de conjuntos. |
| `\bigsqcup` | Taça quadrada grande (união disjunta). |
| `\bigvee`, `\bigwedge` | Grande OR e grande AND sobre um conjunto de índices. |
| `\bigoplus`, `\bigotimes`, `\bigodot` | Grande sinal de mais circulado, tempos e ponto para somas indexadas e produtos de estruturas. |
| `\biguplus` | Grande união com mais em um conjunto de índices. |
| `\limites` | Força os seguintes sub/sobrescritos do operador acima e abaixo: `\int\limits_0^1`. |
| `\nolimites` | Força sub/sobrescritos para o lado em vez de acima e abaixo. |

## Matemática: delimitadores e dimensionamento

| Comando | O que faz |
| --- | --- |
| `\esquerda( ... \direita)` | Par delimitador de tamanho automático que cresce para caber em seu conteúdo. |
| `\esquerda.` e `\direita.` | Parceiro invisível quando se deseja apenas um lado de um par dimensionado, como nas barras de avaliação. |
| `\meio|` | Delimitador central de tamanho automático entre `\left` e `\right` (como em probabilidade condicional). |
| `\big( \Big( \bigg( \Bigg(` | Delimitadores dimensionados manualmente, de ligeiramente grande a muito grande. |
| `\bigl(...\bigr)` | Delimitadores dimensionados com espaçamento correto de abertura/fechamento (também `\Bigl`, `\biggl`, `\Biggl`). |
| `\lfloor`, `\rfloor` | Suportes de piso. |
| `\lceil`, `\rceil` | Suportes de teto. |
| `\langle`, `\rangle` | Delimitadores de colchetes angulares esquerdo e direito. |
| `\|` | Delimitador de barra vertical dupla (barras normativas). |
| `\lvert`, `\rvert` | Barras de valor absoluto com espaçamento delimitador correto (amsmath). |
| `\lVert`, `\rVert` | Barras duplas para normas, com espaçamento correto entre delimitadores (amsmath). |
| `\barra invertida` | Barra invertida como símbolo matemático ou delimitador. |

## Matemática: acentos e decorações

| Comando | O que faz |
| --- | --- |
| `\hat{x}` | Acento de chapéu pequeno sobre um símbolo. |
| `\verificar{x}` | Sotaque Caron (chapéu invertido). |
| `\breve{x}` | Sotaque Breve (arredondado). |
| `\acute{x}`, `\grave{x}` | Acentos agudos e graves em matemática. |
| `\tilde{x}` | Acento til sobre um símbolo. |
| `\bar{x}` | Barra curta sobre um símbolo. |
| `\vec{v}` | Seta pequena sobre um símbolo. |
| `\ponto{x}`, `\ddot{x}` | Um ou dois pontos sobre um símbolo, comum para derivadas de tempo. |
| `\dddot{x}` | Três pontos sobre um símbolo (amsmath). |
| `\materiais{x}` | Acento de anel sobre um símbolo. |
| `\widehat{abc}` | Chapéu largo que se estende por vários símbolos. |
| `\widetilde{abc}` | Til largo que se estende por vários símbolos. |
| `\overrightarrow{AB}` | Esticando a seta para a direita sobre uma expressão, como nos vetores de A a B. |
| `\overleftarrow{AB}` | Esticando a seta para a esquerda sobre uma expressão. |
| `\overline{x + y}` | Linha sobre uma expressão inteira. |
| `\sublinhado{x + y}` | Linha sob uma expressão inteira (também funciona em texto). |
| `\overbrace{...}^{n}` | Colchete horizontal acima de uma expressão, com um rótulo opcional na parte superior. |
| `\underbrace{...}_{n}` | Chave horizontal abaixo de uma expressão, com um rótulo opcional abaixo. |
| `\overset{!}{=}` | Coloca um símbolo acima de outro, por ex. 'deve ser igual' (amsmath). |
| `\underset{i}{\max}` | Coloca um símbolo abaixo de outro (amsmath). |
| `\stackrel{\text{def}}{=}` | Comando do kernel mais antigo empilhando um símbolo sobre uma relação. |
| `\boldsymbol{\beta}` | Matemática em negrito que também coloca letras e símbolos gregos em negrito (amsmath). |
| `\prime` | Símbolo principal; `x'` é a abreviatura usual para `x^{\prime}`. |

## Matemática: operadores semelhantes a log

Toda tipografada na vertical com espaçamento correto; os que tomam limites colocam subscritos abaixo na matemática de exibição.

| Comando | O que faz |
| --- | --- |
| `\sin`, `\cos`, `\tan`, `\cot` | As funções trigonométricas básicas. |
| `\sec`, `\csc` | Secante e cossecante. |
| `\arcsin`, `\arccos`, `\arctan` | Funções trigonométricas inversas. |
| `\sinh`, `\cosh`, `\tanh`, `\coth` | Funções hiperbólicas. |
| `\exp`, `\ln`, `\log`, `\lg` | Exponencial e logaritmos (`\lg` é log base 2 ou 10 por convenção). |
| `\det`, `\dim`, `\ker`, `\deg` | Determinante, dimensão, núcleo, grau. |
| `\gcd`, `\hom`, `\arg`, `\Pr` | Máximo divisor comum, hom-sets, argumento complexo, probabilidade. |
| `\lim_{x \to 0}` | Operador de limite, na vertical com o subscrito abaixo na exibição matemática. |
| `\limsup`, `\liminf` | Limite superior e inferior. |
| `\inf`, `\sup` | Operadores ínfimo e supremo, compostos na vertical. |
| `\min`, `\máx` | Operadores mínimo e máximo, digitados na vertical com limites abaixo na matemática de exibição. |
| `\bmod` | Operador mod binário com espaçamento entre operadores: `a \bmod n`. |
| `\pmod{n}` | À direita entre parênteses '(mod n)'. |
| `\mod{n}` | À direita de 'mod n' sem parênteses (amsmath). |
| `\nomedooperador{lcm}` | Nome de operador vertical único sem declaração de preâmbulo (amsmath). |
| `\nomedooperador*{ess\,sup}` | Operador único que leva limites abaixo (amsmath). |

## Matemática: frações, binômios e empilhamento

| Comando | O que faz |
| --- | --- |
| `\frac{a}{b}` | Fração empilhada: numerador sobre denominador. |
| `\dfrac{a}{b}` | Fração forçada para o tamanho total da tela, mesmo em linha (amsmath). |
| `\tfrac{a}{b}` | Fração forçada para um tamanho embutido pequeno, mesmo em matemática de exibição (amsmath). |
| `\cfrac{a}{b}` | Fração contínua com níveis aninhados em tamanho real (amsmath). |
| `\sqrt{x}`, `\sqrt[3]{x}` | Raiz quadrada; o argumento opcional fornece uma enésima raiz. |
| `\binom{n}{k}` | Coeficiente binomial entre parênteses (amsmath). |
| `\dbinom{n}{k}`, `\tbinom{n}{k}` | Binômios forçados de tamanho de exibição e tamanho de texto (amsmath). |
| `{n \escolha k}` | Primitiva binomial TeX simples; desencorajado em LaTeX, use `\binom`. |
| `{a \over b}` | Fração primitiva de TeX simples; desencorajado em LaTeX, use `\frac`. |
| `{a \ sobre b}` | Primitivo de empilhamento Plain TeX sem barra; desencorajado, use `\substack` ou `\genfrac`. |
| `\genfrac{(}{)}{0pt}{}{a}{b}` | Construtor de frações geral por trás de `\frac`, `\binom` e amigos (amsmath). |
| `\substack{i < n \\ j < m}` | Subscrito multilinha sob um grande operador (amsmath). |
| `\sideset{_a^b}{_c^d}{\prod}` | Anexa índices a todos os quatro cantos de um grande operador (amsmath). |
| `\prescript{a}{b}{X}` | Super/subscritos à esquerda, como na notação isotópica (mathtools). |

## Matemática: espaçamento e estilos

| Comando | O que faz |
| --- | --- |
| `\,` | Espaço matemático fino, como entre um número e sua unidade. |
| `\:` | Espaço matemático médio. |
| `\;` | Espaço matemático espesso. |
| `\!` | Espaço fino negativo, aproximando os símbolos. |
| `\quad`, `\qquad` | Espaços de um e dois em, em matemática ou texto. |
| `\estilo de exibição` | Força o dimensionamento matemático de exibição completo, por ex. grandes limites dentro da matemática in-line. |
| `\estilo de texto` | Força o dimensionamento matemático embutido dentro da matemática de exibição. |
| `\scriptstyle`, `\scriptscriptstyle` | Forçar o dimensionamento do subscrito e do subscrito. |

## Matemática: letras, alfabetos e símbolos diversos

| Comando | O que faz |
| --- | --- |
| `\mathbb{R}` | Letras em negrito do quadro negro para conjuntos de números (amssymb). |
| `\mathbf{x}` | Letras verticais em negrito em matemática, comuns para vetores e matrizes. |
| `\mathcal{L}` | Letras maiúsculas caligráficas, por ex. uma perda ou Lagrangiana. |
| `\mathfrak{g}` | Letras Fraktur, usadas em álgebra e lógica. |
| `\mathscr{F}` | Script em letras maiúsculas, mais curvas que `\mathcal` (mathrsfs). |
| `\mathrm{d}x` | Letras verticais (romanas) em matemática, para unidades e nomes com várias letras. |
| `\mathit{diferença}` | Identificador de várias letras em itálico com espaçamento semelhante a palavras. |
| `\mathsf{T}`, `\mathtt{x}` | Letras sem serifa e de máquina de escrever em matemática. |
| `\bm{\beta}` | Símbolos matemáticos em negrito, uma alternativa ao `\boldsymbol` (pacote bm). |
| `\texto{se } x > 0` | Texto vertical normal dentro de matemática com espaçamento adequado (amsmath). |
| `\infty` | Sinal do infinito. |
| `\parcial` | Sinal de derivada parcial (d encaracolado). |
| `\nabla` | Operador Nabla (del) para gradientes e divergência. |
| `\hbar` | Constante de Planck reduzida, h com uma barra. |
| `\ el` | Script l minúsculo, usado para evitar confusão com o dígito 1. |
| `\wp` | Weierstrass pág. |
| `\Re`, `\Im` | Símbolos de partes reais e imaginárias (Fraktur R e I). |
| `\aleph` | Aleph, para cardeais infinitos. |
| `\emptyset` | Sinal de conjunto vazio. |
| `\varnada` | Variante redonda de conjunto vazio que muitos autores preferem (amssymb). |
| `\ângulo` | Símbolo de ângulo. |
| `\ângulo medido` | Símbolo de ângulo medido com um arco (amssymb). |
| `\triângulo` | Símbolo do triângulo. |
| `\quadrado`, `\quadradopreto` | Quadrados abertos e preenchidos; o preenchido geralmente encerra as provas (amssymb). |
| `\diamante`, `\losango` | Operador de pequenos diamantes; símbolo de losango (amssymb para o último). |
| `\top`, `\bot` | Símbolos superior (verdadeiro) e inferior (falso/indefinido). |
| `\forall`, `\existe` | Universal ('para todos')e quantificadores existenciais (“existe”). |
| `\nexis` | Quantificador existencial negado (amssymb). |
| `\neg` | Sinal lógico NÃO. |
| `\portanto`, `\porque` | Sinais de três pontos 'portanto' e 'porque' (amssymb). |
| `\flat`, `\natural`, `\sharp` | Acidentes musicais, também usados ​​em notação matemática. |
| `\ surdo` | Símbolo radical nu sem argumento. |
| `\marca de seleção` | Marca de verificação (amssymb). |
| `\cdots` | Pontos centralizados, entre operadores: `x_1 + \cdots + x_n`. |
| `\vdots`, `\ddots` | Pontos verticais e diagonais, principalmente em matrizes. |
| `\dotsb`, `\dotsc` | Pontos semânticos: entre operadores binários e entre vírgulas (amsmath). |

## ferramentas de exibição amsmath e mathtools

| Comando | O que faz |
| --- | --- |
| `\tag{...}` | Substitui o número da equação automática pelo seu próprio rótulo (amsmath). |
| `\tag*{...}` | Como `\tag` mas sem os parênteses (amsmath). |
| `\notag` | Suprime o número da equação em uma linha de um ambiente numerado (amsmath). |
| `\nonúmero` | Sinônimo mais antigo de `\notag`. |
| `\númerodentro{equação}{seção}` | Equações numéricas por seção: (2.1), (2.2) (amsmath). |
| `\intertexto{...}` | Interrompe um bloco de alinhamento com uma linha de texto de largura total, mantendo o alinhamento (amsmath). |
| `\shortintertext{...}` | Como `\intertext` com menos espaço vertical (mathtools). |
| `\allowdisplaybreaks` | Permite que exibições multilinhas sejam divididas entre páginas (amsmath). |
| `\displaybreak` | Solicita uma quebra de página neste ponto da exibição (amsmath). |
| `\smashoperator{\sum_{i=1}^{n}}` | Permite que os amplos limites do operador fiquem salientes para que não separem o conteúdo (mathtools). |
| `\mathclap{...}` | Conteúdo matemático de largura zero, para subscritos/sobrescritos amplos (mathtools). |
| `\coloneqq` | Sinal de definição de dois pontos igual: = com espaçamento correto (mathtools). |
| `\DeclarePairedDelimiter{\abs}{\lvert}{\rvert}` | Define uma macro delimitadora com um formulário de dimensionamento automático com estrela (mathtools). |
| `\eqref{eq:perda}` | Imprime um número de equação entre parênteses (amsmath). |
| `\qedaqui` | Move o quadrado do fim da prova para a linha atual, por ex. após uma equação exibida (amsthm). |

## Ambientes matemáticos

| Meio Ambiente | O que faz |
| --- | --- |
| `equação` | Uma equação exibida e numerada. |
| `equação*` | Uma equação exibida e não numerada (amsmath). |
| `alinhar` | Várias equações exibidas alinhadas nas marcas `&`, cada uma numerada (amsmath). |
| `alinhar*` | Equações alinhadas sem números (amsmath). |
| `reunir` | Múltiplas equações centralizadas sem alinhamento, cada uma numerada (amsmath). |
| `alinhar` | Equações alinhadas com espaçamento controlado manualmente entre colunas (amsmath). |
| `flaign` | Equações alinhadas empurradas para as margens esquerda e direita (amsmath). |
| `dividir` | Divide uma equação longa em linhas alinhadas sob um único número, dentro da `equação` (amsmath). |
| `multilinha` | Uma longa equação dividida em linhas: primeira linha à esquerda, última linha à direita (amsmath). |
| `alinhado`, `reunido` | Versões básicas de alinhamento/reunião utilizáveis ​​dentro de outro display (amsmath). |
| `subequações` | Numera as equações internas como 1a, 1b, 1c (amsmath). |
| `casos` | Distinções de casos agrupadas entre chaves, como em funções por partes (amsmath). |
| `dcasos` | `cases` com entradas em estilo de exibição para que as frações permaneçam em tamanho real (mathtools). |
| `matriz` | Matriz simples sem delimitadores (amsmath). |
| `pmatriz` | Matriz entre parênteses (amsmath). |
| `bmatriz` | Matriz entre colchetes (amsmath). |
| `Bmatriz` | Matriz entre chaves (amsmath). |
| `vmatriz` | Matriz envolta em barras verticais, notação de determinante padrão (amsmath). |
| `Vmatriz` | Matriz envolta em barras duplas (amsmath). |
| `matriz pequena` | Matriz compacta dimensionada para uso inline (amsmath). |
| `matriz` | Grade em modo matemático com alinhamento por coluna, a prima matemática de `tabular`. |
| `eqnarray` | Antigo ambiente de equação de três colunas; desencorajado, seu espaçamento está errado, use `align`. |

## Referências cruzadas e links

| Comando | O que faz |
| --- | --- |
| `\label{fig:setup}` | Nomeia um ponto (equação, figura, seção) para que você possa consultá-lo. |
| `\ref{fig:setup}` | Imprime o número de um item rotulado. |
| `\pageref{fig:setup}` | Imprime o número da página onde fica a etiqueta. |
| `\cref{fig:setup}` | Imprime o número E o nome do tipo automaticamente: 'fig. 1' (inteligente). |
| `\Cref{fig:setup}` | `\cref` em maiúscula para o início de uma frase: 'Figura 1' (cleveref). |
| `\crefrange{eq:a}{eq:d}` | Imprime um intervalo: 'eqs. 1 a 4' (inteligente). |
| `\labelcref{fig:setup}` | Imprime apenas o número da etiqueta no estilo intelligentef, sem o nome do tipo (cleveref). |
| `\vref{fig:setup}` | Referência mais uma frase automática 'na próxima página' quando necessário (varioref). |
| `\autoref{fig:setup}` | referência digitada do hyperref: 'Figura 1', com a frase inteira vinculada. |
| `\nameref{sec:introdução}` | Imprime o texto do título da seção referenciada (hiperref). |
| `\href{https://example.com}{texto do link}` | Cria um link clicável com texto personalizado (hiperref). |
| `\url{https://example.com}` | Compõe um URL em tipo de máquina de escrever e o torna clicável. |
| `\hyperref[sec:intro]{essa seção}` | Cria um link de texto arbitrário para um rótulo (hiperref). |
| `\hypertarget{spot}{...}` | Cria um destino de link nomeado em qualquer lugar do documento (hiperref). |
| `\hiperlink{spot}{texto}` | Links para um `\hypertarget` (hiperref). |
| `\seção fantasma` | Cria uma âncora para que links para títulos não numerados cheguem ao lugar certo (hiperref). |
| `\texorpdfstring{$\alpha$}{alpha}` | Oferece uma alternativa de texto simples para matemática em títulos para que os marcadores de PDF permaneçam válidos (hiperref). |
| `\pdfbookmark[1]{Título}{nome}` | Adiciona uma entrada manual de marcador de PDF (hiperref). |

## Citações e bibliografia

| Comando | O que faz |
| --- | --- |
| `\cite{knuth1984}` | Cita uma entrada bibliográfica por chave. |
| `\nocite{chave}` | Adiciona um verbete à bibliografia sem citá-lo no texto; `\nocite{*}` adiciona tudo. |
| `\citep{knuth1984}` | Citação entre parênteses '(Knuth, 1984)' no estilo autor-ano natbib. |
| `\citet{knuth1984}` | Citação textual 'Knuth (1984)' no estilo autor-ano natbib. |
| `\citeauthor{knuth1984}` | Imprime apenas os nomes dos autores (natbib e biblatex). |
| `\citeyear{knuth1984}` | Imprime apenas o ano (natbib e biblatex). |
| `\citealp{knuth1984}` | citação entre parênteses natbib sem parênteses, para construir a sua própria. |
| `\citealt{knuth1984}` | citação textual natbib sem parênteses ao redor do ano. |
| `\parêncite{knuth1984}` | citação entre parênteses do biblatex, o análogo de `\citep`. |
| `\textcite{knuth1984}` | citação textual do biblatex, o análogo de `\citet`. |
| `\autocite{knuth1984}` | citação biblatex que segue a forma preferida do estilo (parênteses, nota de rodapé, etc.). |
| `\footcite{knuth1984}` | citação do biblatex colocada em nota de rodapé. |
| `\fullcite{knuth1984}` | Imprime o texto bibliográfico completo da entrada in-line (biblatex). |
| `\citetitle{knuth1984}` | Imprime o título do trabalho (biblatex). |
| `\bibliografia{refs}` | BibTeX: imprime a lista de referências de um arquivo .bib. |
| `\bibliographystyle{plainnat}` | BibTeX: escolhe o formato de referência; os estilos clássicos incluem simples, unsrt, alfa, abbrv, ieeetr, acm, apalike. |
| `\addbibresource{refs.bib}` | biblatex: registra um arquivo .bib no preâmbulo. |
| `\printbibliografia` | biblatex: imprime a lista de referências onde você a coloca. |
| `\bibitem{chave}` | Uma entrada escrita à mão dentro de um ambiente `thebibliography`. |
| `thebibliography` (meio ambiente) | Escrito à mãolista de referência usada quando você ignora totalmente o BibTeX. |

## Carros alegóricos, figuras e tabelas

| Comando ou ambiente | O que faz |
| --- | --- |
| `figura` (ambiente) | Recipiente flutuante para uma imagem mais legenda; LaTeX escolhe a posição final. |
| `figura*` (ambiente) | Figura abrangendo ambas as colunas em um documento de duas colunas. |
| `mesa` (ambiente) | Contêiner flutuante para uma legenda tabular mais; LaTeX escolhe a posição final. |
| `tabela*` (ambiente) | Tabela abrangendo ambas as colunas em um documento de duas colunas. |
| `\begin{figura}[htbp]` | Dicas de posicionamento: aqui, superior, inferior, página própria; `!` relaxa as regras, `[H]` (pacote float) significa exatamente aqui. |
| `tabular` (ambiente) | A grade real de linhas e colunas: células divididas por `&`, as linhas terminam com `\\`. |
| `tabular*` (ambiente) | Tabular esticado até uma largura total especificada. |
| `tabularx` (ambiente) | Tabela de largura fixa cujas colunas `X` compartilham o espaço restante (tabularx). |
| `array` (ambiente) | Grade em modo matemático com alinhamento por coluna. |
| `longtable` (ambiente) | Tabela que pode ser dividida entre páginas, com cabeçalhos repetidos (tabela longa). |
| `minipágina` (ambiente) | Minipágina de largura fixa dentro da página, usada para colocar o conteúdo lado a lado. |
| `subfigura` (ambiente) | Um subpainel com legenda própria, como (a) e (b), dentro de uma figura (sublegenda). |
| `wrapfigure` (ambiente) | Figura com corpo de texto envolvendo-a (wrapfig). |
| `sidewaysfigure`, `sidewaystable` (ambientes) | Os carros alegóricos giraram 90 graus em sua própria página (girando). |
| `paisagem` (meio ambiente) | Gira páginas inteiras para paisagem, com a página PDF girada automaticamente (pdflscape). |
| `trêspartáveis` (ambiente) | Envolve uma tabela para que as notas de rodapé se alinhem com a largura da tabela (três partes). |
| `tablenotes` (ambiente) | A lista de notas está em uma tabela de três partes, marcada com `\tnote{a}`. |
| `adjustbox` (ambientee `\adjustbox`) | Dimensiona, redimensiona ou corta qualquer conteúdo com opções de valores-chave (adjustbox). |
| `\caption{...}` | Adiciona uma legenda numerada a uma figura ou tabela; coloque `\label` depois dele. |
| `\caption*{...}` | Legenda sem número ou entrada de lista (pacote de legenda). |
| `\captionsetup{...}` | Configura fontes de legenda, rótulos e espaçamento (pacote de legenda). |
| `\toprule` | Regra pesada no topo de uma tabela booktabs. |
| `\midrule` | Regra média entre o cabeçalho e o corpo de uma tabela booktabs. |
| `\bottomrule` | Regra pesada na parte inferior de uma tabela booktabs. |
| `\cmidrule(lr){2-3}` | Regra parcial que abrange colunas selecionadas (booktabs). |
| `\addlinespace` | Pequeno espaço vertical extra entre as linhas dos booktabs, em vez de uma regra. |
| `\hline` | Linha horizontal de largura total em tabela simples; as regras do booktabs geralmente parecem melhores. |
| `\cline{2-3}` | Linha horizontal abrangendo colunas selecionadas em uma tabela simples. |
| `\vline` | Linha vertical neste ponto de uma linha da tabela; os especificadores de coluna `|` são a maneira usual. |
| `\multicolumn{2}{c}{Cabeçalho}` | Mescla células em colunas em uma linha. |
| `\multirow{2}{*}{Rótulo}` | Mescla células verticalmente em linhas (várias linhas). |
| `\arraystretch` | Fator para altura da linha da tabela; definido com `\renewcommand{\arraystretch}{1.3}`. |
| `\tabcolsep` | Comprimento do preenchimento em cada lado de uma coluna tabular. |
| `\newcolumntype{C}{>{\centering\arraybackslash}X}` | Define um especificador de coluna reutilizável (pacote de array). |
| `\endfirsthead` | longtable: marca o final do cabeçalho mostrado apenas na primeira página. |
| `\endhead` | longtable: marca o final do cabeçalho repetido em todas as páginas seguintes. |
| `\endfoot` | longtable: marca o final do rodapé mostrado em cada quebra de página. |
| `\endlastfoot` | longtable: marca o final do rodapé mostrado apenas no final. |
|`\FloatBarrier` | Pára os carros alegóricos que passam por este ponto (placeins). |

## Notas de rodapé

| Comando | O que faz |
| --- | --- |
| `\nota de rodapé{...}` | Coloca uma nota no final da página, marcada com um número automático. |
| `\nota de rodapé` | Imprime apenas o marcador de nota de rodapé, para locais onde `\footnote` não é permitido. |
| `\footnotetext{...}` | Fornece o texto para um `\footnotemark` anterior. |

## Teoremas e provas

| Comando ou ambiente | O que faz |
| --- | --- |
| `\newtheorem{lema}{lema}` | Declara um ambiente semelhante a um teorema (amsthm). |
| `\newtheorem*{observação}{Observação}` | Declara um ambiente semelhante a um teorema não numerado (amsthm). |
| `\theoremstyle{definição}` | Define a aparência (simples, definição, observação) para as seguintes declarações `\newtheorem` (amsthm). |
| `teorema` (meio ambiente) | Bloco de teorema numerado, criado por `\newtheorem{teorema}{Teorema}`. |
| `prova` (ambiente) | Bloco de prova que imprime 'Prova'. e termina com o quadrado QED (amsthm). |

## Verbatim, código e listagens

| Comando ou ambiente | O que faz |
| --- | --- |
| `\verbo|código|` | Inline literalmente: imprime exatamente o que você digita, delimitado por qualquer caractere repetido. |
| `literalmente` (ambiente) | Bloco de texto impresso exatamente como digitado, em fonte de máquina de escrever. |
| `\verbatiminput{arquivo.txt}` | Imprime um arquivo inteiro literalmente (pacote literal). |
| `lstlisting` (ambiente) | Listagem de código-fonte com destaque de sintaxe opcional (listagens). |
| `\lstinline|código|` | Snippet de código embutido no estilo de listagens (listagens). |
| `\lstset{linguagem=Python}` | Configura padrões de listagens: idioma, numeração, cores (listagens). |
| `\lstinputlisting{script.py}` | Compõe um arquivo de origem inteiro como uma listagem (listagens). |
| `cunhado` (ambiente) | Blocos de código realçados alimentados por pigmentos; precisa de `-shell-escape` em tempo de compilação (cunhado). |
| `\mintinline{python}|código|` | Código destacado embutido (cunhado). |

## Projetor (slides)

| Comando ou ambiente | O que faz |
| --- | --- |
| `frame` (ambiente) | Um slide do Beamer: `\begin{frame}{Título do slide} ... \end{frame}`. |
| `\quadro{...}` | Formulário de slide de um comando do Beamer; o ambiente `frame` é o caminho usual. |
| `\frametitle{...}` | Define o título do slide dentro de um quadro. |
| `\framesubtitle{...}` | Define uma legenda menor abaixo do título do quadro. |
| `\página de título` | Beamer: dentro de um quadro, imprime o slide do título a partir dos metadados do título. |
| `\tabeladeconteúdo[seçãoatual]` | Descreva o slide destacando a seção em que você está. |
| `\pausa` | Beamer: revela o restante do quadro na próxima etapa do slide. |
| `\onslide<2->` | O conteúdo aparece a partir de uma determinada etapa de sobreposição. |
| `\somente<2>{...}` | O conteúdo existe apenas nas etapas fornecidas e não ocupa espaço em nenhum outro lugar. |
| `\descobrir<2->{...}` | O conteúdo é invisível antes de ser pisado, mas sempre reserva seu espaço. |
| `\visível<2->{...}`, `\invisível<2>{...}` | Mostre ou oculte conteúdo em determinadas etapas sem alterar o layout. |
| `\alert{...}` | Destaca o texto na cor de alerta do tema, geralmente vermelho. |
| `bloco` (ambiente) | Caixa intitulada na cor padrão do tema. |
| `alertblock` (ambiente) | Caixa intitulada na cor do alerta, para avisos ou pontos-chave. |
| `exampleblock` (ambiente) | Caixa intitulada na cor do exemplo, geralmente verde. |
| `columns` (ambiente) e `\column{0.5\textwidth}` | Regiões de layout lado a lado em um slide. |
| `\usetheme{Madrid}` | Beamer: escolhe o tema da apresentação no preâmbulo. |
| `\usecolortheme{cavalo marinho}` | Troca apenas a paleta de cores do tema. |
| `\usefonttheme{serif}` | Troca apenas as opções de fonte do tema. |
| `\setbeamertemplate{símbolos de navegação}{}` | Substitui um elemento do tema, removendo aqui os ícones de navegação. |
|`\setbeamercolor{título}{fg=preto}` | Substitui uma cor do tema. |
| `\nota{...}` | Notas do orador anexadas a um quadro, mostradas apenas na saída de notas. |

## TikZ e diagramas

| Comando ou ambiente | O que faz |
| --- | --- |
| `tikzpicture` (ambiente) | Tela para desenhos TikZ; todos os comandos `\draw` e `\node` vão dentro dele. |
| `\tikz` | Imagem embutida única: `\tikz \draw (0,0) círculo (2pt);`. |
| `\desenhar (0,0) -- (1,1);` | Comando de caminho TikZ que desenha linhas e formas; opções como `[thick, red, ->]` estilizam-no. |
| `\preencher` | Comando de caminho TikZ que preenche uma forma em vez de contorná-la. |
| `\filldraw` | Comando de caminho TikZ que preenche e contorna uma forma. |
| `\sombra` | Comando de caminho TikZ que é preenchido com um gradiente. |
| `\clip` | Caminho TikZ que restringe todos os desenhos posteriores ao seu interior. |
| `\caminho` | Caminho TikZ que calcula coordenadas sem desenhar, por ex. para colocar nós. |
| `\node em (0,0) {rótulo};` | Comando TikZ que coloca texto ou formas em coordenadas. |
| `\coordenada (a) em (1,2);` | Nomeia um ponto para reutilização em caminhos posteriores. |
| `\foreach \i em {1,...,5}` | Loop que repete o desenho do código em uma lista (TikZ/pgffor). |
| `\tikzset{meuestilo/.style={...}}` | Define estilos TikZ reutilizáveis ​​de maneira moderna. |
| `\tikzstyle` | Sintaxe de definição de estilo antigo; obsoleto, use `\tikzset`. |
| `\usetikzlibrary{posicionamento}` | Carrega recursos extras do TikZ no preâmbulo. |
| `\matriz` (TikZ) | Arranjo de nós alinhado à grade dentro de uma imagem tikz. |
| `tikzcd` (ambiente) | Grade para diagramas comutativos; células divididas por `&` (tikz-cd). |
| `\seta[r, "f"]` | Desenha uma seta entre as células em um diagrama comutativo tikz-cd. |

## Unidades (siunitx)

| Comando | O que faz |
| --- | --- |
| `\num{12345.678}` | Formata um número com agrupamento de dígitos e marcadores decimais adequados. |
| `\qty{9,8}{\metro\por\segundo\quadrado}` | Número com unidade, espaçado corretamente (nome siunitx v3). |
| `\unidade{\quilo\grama}` | Unidade sozinha (nome siunitx v3). |
| `\SI{9,8}{\metro\por\segundo\quadrado}` | nome v2 de `\qty`; ainda amplamente visto em jornais. |
| `\si{\quilo\grama}` | v2 nome de `\unit`. |
| `\sisetup{...}` | Configuração global do siunitx. |
| `\DeclareSIUnit{\parsec}{pc}` | Define uma unidade personalizada (siunitx). |

## Glossários e siglas

| Comando | O que faz |
| --- | --- |
| `\gls{svm}` | Imprime uma entrada de glossário ou acrônimo, expandindo-o na primeira utilização (glossários). |
| `\Gls{svm}` | Forma maiúscula para início de frase (glossários). |
| `\glspl{svm}` | Forma plural da entrada (glossários). |
| `\newglossaryentry{árvore}{nome=árvore, descrição={...}}` | Declara um termo do glossário (glossários). |
| `\newacronym{svm}{SVM}{máquina de vetores de suporte}` | Declara um acrônimo com formas curtas e longas (glossários). |
| `\acrshort{svm}`, `\acrlong{svm}` | Forçar o formato curto ou longo, independentemente do primeiro uso (glossários). |
| `\makeglossários` | Comando de preâmbulo que ativa o processamento de glossários/siglas (glossários). |
| `\printglossário` | Imprime uma lista de glossário onde você a coloca (glossários). |
| `\printglossários` | Imprime o glossário e as listas de siglas onde você o coloca (glossários). |

## Algoritmos e pseudocódigo

Os comandos de palavras-chave são de algpseudocode (algorithmicx); o `algoritmo` float os envolve.

| Comando ou ambiente | O que faz |
| --- | --- |
| `algoritmo` (ambiente) | Container flutuante para pseudocódigo, com legenda e número (algoritmo). |
| `algorítmico` (ambiente) | O próprio corpo do pseudocódigo, contendo os comandos de palavras-chave (algpseudocódigo). |
| `\Estado` | Uma linha de instrução de pseudocódigo. |
| `\If{...}`, `\ElsIf{...}`, `\Else`, `\EndIf` | Palavras-chave de bloco condicional. |
| `\For{...}`, `\ForAll{...}`, `\EndFor` | Faça um loop de palavras-chave em um intervalo ou conjunto. |
| `\While{...}`, `\EndWhile` | Palavras-chave em loop while. |
| `\Function{Nome}{args}`, `\EndFunction` | Bloco de definição de função. |
| `\Procedure{Nome}{args}`, `\EndProcedure` | Bloco de definição de procedimento. |
| `\Retornar` | A palavra-chave de retorno. |
| `\Comentário{...}` | Comentário alinhado à direita em uma linha de pseudocódigo. |
| `\Exigir`, `\Garantir` | Linhas de pré-condições e pós-condições no topo de um algoritmo. |

## Idioma, citações e pacotes editoriais

| Comando | O que faz |
| --- | --- |
| `\selectidioma{alemão}` | Muda o idioma ativo: hifenização, legendas, datas (babel). |
| `\foreignlingual{francês}{...}` | Compõe uma passagem curta sob as regras de outro idioma (babel). |
| `\enquote{...}` | Aspas sensíveis ao contexto que aninham e são localizadas corretamente (csquotes). |
| `\todo{Corrigir isso}` | Nota de margem sinalizando trabalho a fazer (todonotes). |
| `\listadetodos` | Imprime uma lista de todas as notas de tarefas (todonotes). |
| `\missingfigure{...}` | Caixa de espaço reservado para uma figura que você ainda não fez (todonotes). |
| `\xespaço` | No final de uma macro, adiciona um espaço, a menos que haja pontuação (xspace). |
| `\patchcmd{\cmd}{find}{replace}{ok}{fail}` | Corrige a definição de uma macro existente (etoolbox). |
| `\apptocmd`, `\pretocmd` | Anexe ou acrescente código a uma macro existente (etoolbox). |
| `\newtoggle{rascunho}`, `\toggletrue{rascunho}`, `\iftoggle{rascunho}{...}{...}` | Sinalizadores booleanos leves (etoolbox). |

## Pacotes de layout e tipografia em uma linha

| Pacote ou comando | O que faz |
| --- | --- |
| `\setstretch{1.25}` | Define um fator exato de espaçamento entre linhas (setspace). |
| `\espaçamento duplo` | Muda para espaçamento duplo entre linhas (setspace). |
| `\onehalfespaçamento` | Muda para espaçamento entre linhas de um e meio (setspace). |
| `\espaçamento simples` | Volta para o espaçamento entre linhas simples (setspace). |
| `espaçamento` (ambiente) | Define um fator de espaçamento de linha personalizado para seu conteúdo (setspace). |
| `\titleformat{\section}{...}{...}{...}{...}` | Redesenha a aparência de um título de seção (titlesec). |
| `\titlespace{\section}{0pt}{12pt}{6pt}` | Ajusta o espaço ao redor de um título (titlesec). |
| `\setlist[itemize]{noitemsep}` | Configura o espaçamento e os rótulos da lista globalmente ou por nível (enumitem). |
| `parskip` (pacote) | Alterna o documento para bloquear parágrafos: espaço entre, sem recuo. |
| `microtipo` (pacote) | Protuberância e expansão sutis que melhoram a justificação; basta carregá-lo. |
| `multicols` (ambiente) | Texto balanceado de múltiplas colunas sem a opção de classe de duas colunas (multicol). |

## Química, física e notação de domínio

| Comando | O que faz |
| --- | --- |
| `\ce{H2O}` | Compõe uma fórmula química ou reação (mhchem). |
| `\chemfig{...}` | Desenha um diagrama de estrutura química (chemfig). |
| `\freio{\phi|\psi}` | Compõe a notação Dirac bra-ket com barras de tamanho automático (freio). |

## Comandos da classe do editor

| Comando ou ambiente | O que faz |
| --- | --- |
| `\IEEEauthorblockN{...}` | IEEEtran: formata um bloco de nome de autor na área de título da conferência IEEE. |
| `\IEEEauthorblockA{...}` | IEEEtran: formata um bloco de afiliação de autor na área de título da conferência IEEE. |
| `\ccsdesc[500]{...}` | acmart: declara um conceito ACM CCS para classificação do artigo. |
| `CCSXML` (ambiente) | acmart: contém o XML de conceitos CCS do ACM legível por máquina da ferramenta de classificação ACM. |
| `\Universidade{...}` | Comando de metadados específico de classe visto em modelos de tese, não no LaTeX padrão. |

## Ambientes em geral

Um ambiente é uma região aberta com `\begin{name}` e fechada com `\end{name}`; tudo entre os dois segue o comportamento daquele ambiente. A história completa está em [comandos vs ambientes](/learn/commands-environments/). Os de uso geral:

| Meio Ambiente | O que faz |
| --- | --- |
| `documento` | O corpo de cada documento fica entre `\begin{document}` e `\end{document}`. |
| `resumo` | Imprime o resumo do artigo com o título e layout padrão da turma. |
| `página de título` | Envolve uma página de título completa feita à mão; a página não é numerada. |
| `centro` | Centraliza seu conteúdo horizontalmente. |
| `flushleft` | Alinha seu conteúdo à esquerda, irregular à direita. |
| `flushright` | Alinha seu conteúdo à direita, irregular à esquerda. |
| `itemizar` | Lista com marcadores; cada entrada começa com `\item`. |
| `enumerar` | Lista numerada; cada entrada começa com `\item`. |
| `descrição` | Lista rotulada; as entradas começam com `\item[Label]`. |
| `\item` | Inicia uma entrada nas listas de itemização, enumeração ou descrição. |
| `citação` | Bloco recuado para citações curtas, sem recuo de parágrafo. |
| `citação` | Bloco recuado para citações mais longas, com recuo de parágrafo. |
| `verso` | Bloco recuado para poesia, onde `\\` termina cada linha do verso. |
| `desleixado` | Parágrafos compostos com quebra de linha relaxada, a forma ambiental de `\sloppy`. |
| `lista` | O construtor de lista geral a partir do qual itens e amigos são definidos. |
| `trivlist` | Lista básica sem rótulos ou margens, usada dentro de definições de macro. |
| `conteúdo do arquivo` | Grava seu corpo em um arquivo em tempo de compilação, por ex. para enviar um .bib dentro do .tex. |
| `apêndices` | Envolve os capítulos do apêndice, habilitando `\appendixpage` e ferramentas por apêndice (pacote de apêndice). |

## Para onde ir em seguida

Esta página é o dicionário. As lições são a gramática. Para um one-pager pronto para colar, mantenha [a folha de dicas](/learn/cheatsheet/) aberta. Para saber a diferença entre os blocos `\command{...}` e `\begin{...}`, leia [comandos vs ambientes](/learn/commands-environments/). Para um símbolo que você pode imaginar, mas não pode nomear, use [símbolos matemáticos](/learn/math-symbols-cheatsheet/). Para ver a aparência de qualquer comando do modo matemático, cole-o na [visualização ao vivo](/live/) e observe-o ser renderizado.