---

title: "Years on Overleaf, depois um espaço de trabalho de pesquisa local"
description: "Overleaf tornou o LaTeX colaborativo popular - e contas gratuitas ainda medem colaborações, histórico, IA e tempo de compilação. Onde o navegador permanece fino (retomadas, bifurcações, exportação, trabalho com vários mecanismos) e o que um espaço de trabalho local livre em seu disco preenche."
date: 2026-07-31
tags: [overleaf, migration, local-first, research-workspace, free, open-source]
---

Durante anos, [Overleaf](https://www.overleaf.com/) foi a resposta padrão para "como faço para iniciar o LaTeX?" Compartilhe um link. Observe o cursor de um coautor. Compile na nuvem. Essa rampa de acesso é genuína. Para sprints de papel multijogador, ainda é.

Depois que você mora lá para uma tese, um pacote de mercado de trabalho ou uma longa reescrita solo, o produto gratuito começa a parecer pequeno. Um colaborador. História medida em horas. IA contada por dia. Tempo limite de compilação. O Git e o histórico completo estão por trás de planos pagos ou de uma licença de campus que você perde ao sair. O navegador é excelente por ser um navegador com buffer compartilhado. Nunca foi construído como um espaço de trabalho de pesquisa completo: currículos com verificações ATS, bifurcação de projetos, exportação multiformato, Typst próximo ao LaTeX, semanas offline, histórico local ilimitado.

É aqui que o Overleaf ainda ganha a guia aberta, onde o nível gratuito e o escopo do produto se esgotam e o que muda quando esses arquivos simples ficam em um aplicativo de desktop gratuito ([Oleafly](https://github.com/Oleafly/Oleafly)) que você baixa uma vez.

## Que anos no Overleaf realmente compraram para você

**Prós que ainda valem**

- Edição, comentários e bate-papo multiusuário em tempo real - ainda a melhor opção para "três pessoas, um resumo, esta noite"
- Instalação zero para um coautor que só abrirá um link
- Enorme galeria de modelos e editora / memória muscular institucional
- SSO do campus e licenças de site que tornam os recursos pagos gratuitos enquanto você estiver no campus
- Mudança visual/código e um polimento que ensinou ao campo o que significa "LaTeX online"

**Onde permanece fino (especialmente grátis)**

Planos individuais publicados (verifique novamente [preços do Overleaf](https://www.overleaf.com/user/subscription/plans); os números mudam):

| Grátis | Pago / organizacional |
| --- | --- |
| **1 colaborador** por projeto | 10 (Estudante/Padrão) ou ilimitado (Pro) |
| **5 usos de IA/dia** | Medidores mais altos; Assistente completo remunerado; Pro = IA máxima |
| **Tempo limite de compilação básico** | **24×** tempo limite básico |
| **Histórico: últimas 24 horas** | História completa |
| Integrações (Git/GitHub, Dropbox, Zotero/Mendeley, …) | Premium em muitos planos |
| Estudante ~$8–10/mês · Padrão ~$17–21/mês · Pro ~$33–42/mês · universidades: entre em contato com vendas | |

Portanto, o nível gratuito é um editor real para trabalho na nuvem principalmente individual. Ele se transforma em uma demonstração no momento em que você precisa de um segundo coautor, da versão do mês anterior, de compilações mais longas ou de mais de cinco estímulos de IA.

Há uma segunda questão que não tem a ver com o acesso pago: para que serve o produto. Overleaf otimiza documentos LaTeX colaborativos em um navegador. É mais fraco como um lugar para:

- Possuir portfólio de artigos, teses, pôsteres e currículos com bifurcação e linhagem
- Exporte o mesmo projeto para Word, HTML, Markdown, PowerPoint (Beamer), EPUB sem usar outras ferramentas
- Execute a simulação de ATS / acessibilidade antes que um formulário de emprego saia de suas mãos
- Mantenha Typst e Markdown próximos ao LaTeX em uma biblioteca e um modelo Git
- Trabalhe off-line em um avião ou em uma rede hospitalar bloqueada
- Use IA com sua própria chave ou modelo local, com cada edição como uma diferença de aprovação
- Trate o histórico como um Git real que você pode abrir em um terminal para sempre

Esses são problemas de pesquisa. No verso otimizado para multijogador primeiro; o resto da mesa nunca teve o mesmo peso.

## Escrita em papel: ambos os lados

**No verso.** Compartilhar um rascunho no meio do parágrafo é fácil. Comentários ao vivo no documento. Para grupos que nunca tocarão no Git, esse é o produto completo. O editor é competente. A visualização é adequada para a maioria dos artigos. Você nunca é a pessoa que precisa instalar o TeX Live para a graduação.

**Onde a escrita em papel ainda dói.** A inteligência de todo o projeto é limitada ao lado de um editor de pesquisa de desktop construído em torno de um índice completo: renomeie uma macro entre capítulos, verifique ao vivo `\cref` e citações com várias teclas, estruturar visualizações em uma árvore de 200 páginas, visualizações do KaTeX enquanto você digita, gramática que ignora `\commands`. Tempos limite de compilação gratuitos mordem teses complexas. A história gratuita evapora depois de um dia. Você não pode realmente bifurcar uma versão de envio em um branch experimental da mesma forma que bifurca um repositório – você duplica um projeto na nuvem e espera lembrar qual é qual.

**Lado Oleafly.** O artigo é um projeto de vários arquivos em disco. Definição de todo o projeto, referências, renomeação, diagnóstico de ref/cite ao vivo (incluindo a confusa família `\eqref` / `\cref`), visualizações de estrutura, conclusões para macros que você definiu com formas de argumentos reais, TexLab/Tinymist quando disponível, visualizações matemáticas ao vivo, Harper + Hunspell offline apenas em prosa. Espaço de trabalho PDF com SyncTeX tolerante a obsoletos, spreads e janela destacável. Compile automaticamente em sua CPU com erros humanizados. CI em escala de livro (~6.200 linhas) é como o editor é testado.

**Como as pessoas geralmente dividem.** A coautoria ao vivo permanece no Overleaf. Autoria profunda de vários arquivos, semanas off-line, compilação local ilimitada e movimentação de histórico local. Muitas pessoas fazem as duas coisas nos mesmos arquivos simples.

## Currículos e documentos que as máquinas leem

No verso compilará uma classe de currículo. O que não funcionará bem é tratar o PDF do mercado de trabalho como um produto: modelos baseados em ATS, texto selecionável determinístico e um painel Preflight que mostra o que uma extração no estilo de analisador realmente vê (nome, seções, riscos) – com pontuações nas quais você pode agir. Os criadores de currículos na Web vendem essa história por uma taxa mensal e prendem o layout em seu SaaS.

O Oleafly fornece modelos orientados para currículo, Preflight e Git gratuito, portanto "CV da indústria", "CV acadêmico" e "bolsa de estudos" são projetos bifurcados com histórico completo - e não três cópias na nuvem chamadas `cv_final_v4`.

Se a sua única saída for um documento compartilhado, pule esta seção. Se você também enviar aplicativos da mesma mesa, notará a lacuna rapidamente.

## Bifurcação, clonagem, linhagem

Existe um "projeto de cópia" na nuvem. O que as equipes de pesquisa desejam está mais próximo de um git fork: história completa, linhagem visível, experimento sem tocar na árvore pronta para a câmera. A biblioteca da Oleafly trata os projetos como livros em uma estante; fork copia o projeto e seu histórico do Git; linhagem aparece no cartão. Fluxos de trabalho estilo clone via push/pull do GitHub são gratuitos.

O histórico gratuito no verso é de 24 horas. O histórico pago é melhor; ainda é um cronograma de serviço, não um repositório que você mantém se a conta morrer.

## Exportação e transferência

Os portais de periódicos desejam PDF e, muitas vezes, um zip de origem. PIs querem o Word. Os sites de cursos querem PDF. As palestras querem slides. Os livros querem EPUB. O mundo do Overleaf é principalmente PDF da nuvem LaTeX mais fonte de download. Isso abrange muita academia.

O menu de exportação do Oleafly é sensível ao contexto: PDF e zip de origem sempre; Word, HTML, Markdown, texto simples via Pandoc gerenciado; PowerPoint do Beamer; EPUB para projetos semelhantes a livros; descubra caminhos PNG para projetos de imagem. A fidelidade varia (seja honesto sobre o complexo LaTeX → DOCX), mas o caminho é dentro do aplicativo e gratuito.

## AI, com o medidor à luz do dia

No verso grátis: cinco usos de IA por dia. Os planos pagos aumentam o limite e desbloqueiam o Assistente. As organizações podem desativar a IA para todos.

Oleafly: IA desativada por padrão. Sua chave ou Ollama. Nove provedores quando você quiser hospedado. O agente pode editar, compilar, ler logs, verificar texto em PDF, pesquisar literatura. Cada gravação é uma diferença de aprovação; as exclusões precisam de uma confirmação distinta; Ponto de verificação do Git primeiro. Pergunte-AI em linha. MCP para clientes externos. Nós não vendemos tokens para você.

Conveniência hospedada com limite diário e escala de assinaturas, ou traga seu próprio modelo e edições inspecionáveis. Escolha o modelo de confiança que você pode explicar a um laboratório ou IRB.

## Realidade multimotor

Overleaf é uma nuvem LaTeX (e amigos). Typst tem sua própria história na web em outro lugar. As notas de Markdown residem em mais uma ferramenta.

Oleafly executa LaTeX (Tectonic), Typst e Markdown em uma biblioteca, com compiladores gerenciados, um modelo Git, uma superfície PDF. Os modelos são filtrados por mecanismo. Esse é um formato de produto diferente – mesa de pesquisa, não outra aba LaTeX.

## Off-line, privacidade, propriedade

Navegador: sem rede, sem editor. Os rascunhos ficam em seus servidores sob seus termos. A exportação é a sua saída de emergência até que deixe de ser (acesso à conta, mudanças de plano, graduação).

Espaço de trabalho local: pastas simples, Git real, edição offline e compilações em cache, modo offline estrito opcional. Nenhuma conta Oleafly. Sem telemetria do produto. Rede para pacotes, citações, IA hospedada, GitHub, atualizações – quando você solicitar.

## Onde o Overleaf ainda vence

- Digitação e comentários multiusuário ao vivo esta hora
- Coautores com instalação zero
- SSO institucional e “todo mundo já tem Overleaf”
- Hábitos do editor que abrem um projeto na nuvem por padrão

O modo multijogador ao vivo para Oleafly está no roteiro. Até então, o Git é o caminho de colaboração, ou você mantém o Overleaf para o sprint ao vivo e o aplicativo local para a semana profunda. Como tudo são arquivos simples, alternar é uma infraestrutura monótona, e não um projeto de migração.

## Onde um espaço de trabalho local gratuito avança

- Profundidade total do editor (índice do projeto, macros, estrutura, visualização matemática, revisão com reconhecimento de prosa, servidores de idiomas)
- Espaço de trabalho PDF com SyncTeX tolerante a obsoletos
- Real Git + sincronização gratuita do GitHub + bifurcação do projeto com histórico
- Typst + Markdown ao lado do LaTeX
- Pesquisa/colar/importar citações, compositor de diagramas, comprovação, exportação multiformato
- IA sob suas chaves com diferenças de aprovação - ou totalmente local
- $0 para sempre, AGPL, baixe uma vez

## Tabela de instantâneo

| | No verso grátis | No verso pago / campus | Oleafly |
| --- | --- | --- | --- |
| Custo | Funil de $ 0 | US$ 8–US$ 42+/mês ou licença de site | **$0 para sempre** (AGPL) |
| Conta | Obrigatório | Obrigatório | Nenhum |
| Multijogador em tempo real | Sim (1 colaboração gratuita) | Mais colaborações | Roteiro; hoje = Git |
| História | 24 horas | Completo (plano) | Git completo em disco |
| Git/Github | Prémio | Prémio | Integrado, gratuito |
| Compilar | Servidor, tempo limite básico | Tempo limite de 24× | Local, seu hardware |
| Off-line | Não | Não | Sim (pacotes em cache) |
| Motores | LaTeX-primeira nuvem | LaTeX-primeira nuvem | LaTeX + Digitação + Markdown |
| Inteligência de projetos | Nível de navegador | Nível de navegador | Profundidade IDE completa de vários arquivos |
| PDF/SyncTeX | Visualização do navegador | Visualização do navegador | Espaço de trabalho completo + mapa obsoleto |
| IA | 5 utilizações/dia | Medido/máx. | Sua chave ou Ollama; diferenças de aprovação |
| Retomar / pré-voo ATS | Faça você mesmo | Faça você mesmo | Construído em |
| Garfo com história | Copiar projeto | Copiar projeto | Bifurcação de biblioteca + Git completo |
| Exportar | PDF + fonte | PDF + fonte | PDF, fonte, DOCX, HTML, MD, PPTX, EPUB… |
| Modelos | Grande conjunto de nuvens | Grande conjunto de nuvens | 23 pacotes + 99 pacotes + personalizados |
| Página inicial de dados | Seus servidores | Seus servidores | Seu disco |

## Tentando ambos sem drama

1. Compacte a fonte do Overleaf.
2. Instale o Oleafly a partir do
   [página de lançamentos](https://github.com/Oleafly/Oleafly/releases/latest).
3. Importação; compilar uma vez; escreva por um dia em um papel ou currículo real.
4. Mantenha o projeto Overleaf para qualquer multijogador ao vivo que você ainda precise.

A Tectonic ainda pode tropeçar em classes pesadas de editores – relate-as; eles moldam o roteiro. A maioria dos artigos e teses do estilo ACM/IEEE/Elsevier são adequados.

## Fechamento

No verso ganhou sua década. O modo multijogador gratuito ainda parece mágico quando três pessoas precisam do mesmo parágrafo esta noite. Para propriedade, edição profunda, bifurcações, exportações, trabalho com vários mecanismos, histórico ilimitado e IA que você controla, uma mesa local gratuita é a opção mais honesta. Baixe o Oleafly uma vez, mantenha o Overleaf para sprints ao vivo se ainda precisar deles e decida a partir de documentos reais em vez de uma matriz de recursos.