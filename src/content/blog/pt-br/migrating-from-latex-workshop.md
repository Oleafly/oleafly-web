---

title: "Beyond LaTeX Workshop: um editor de pesquisa em sua máquina"
description: "Um editor de pesquisa desenvolvido especificamente com inteligência para todo o projeto, SyncTeX, revisão offline, compiladores integrados, Git real e citações. O VS Code + LaTeX Workshop ainda possui receitas, controle remoto e mercado de extensão."
date: 2026-07-31
tags: [latex-workshop, migration, local-first, research-workspace, editor]
---

[LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) no VS Code é excelente. Gratuito, MIT, cuidadosamente mantido. Se sua semana for baseada em receitas de compilação de formato livre, texdoc, Docker/WSL/remote, Live Share ou mercado de extensão completo, mantenha essa pilha. Foi construído para essa vida.

Esta postagem é para quando você deseja um aplicativo que prioriza o documento: documentos com vários arquivos, compiladores, PDF, Git, citações, figuras e revisão já interligados. Gratuito e de código aberto (AGPL). LaTeX, Typst, Markdown. Pastas simples. Nenhuma conta.

Mapa de recursos e atalhos: [Vindo do LaTeX Workshop](https://github.com/Oleafly/Oleafly/blob/main/docs/ComingFromLatexWorkshop.md).

## O editor

CodeMirror 6 com um índice para todo o projeto em LaTeX, Typst, Markdown e BibTeX.

O que você realmente ganha no dia a dia:

- Vá para a definição, encontre referências, renomeie rótulos e macros (avisos de conflito)
- Verificações ao vivo para referências quebradas, citações incorretas, inclusões ausentes (`\cref`, `\eqref`, referências de intervalo,…)
- Visualizações locais + estrutura do projeto; filtrar e pular
- Conclusões para chaves, caminhos e macros que seu projeto define (`\newcommand`, formas de argumento xparse)
- suporte `.tex`, `.ltx`, `.sty`, `.cls`; trechos de argumentos; verificações ambientais
- TexLab para LaTeX (configuração opcional); Navios Tinymist para Typst
- Diagnóstico unificado: sintaxe, compilação, serviço de linguagem, referências, citações, ortografia, gramática
- Pré-visualizações matemáticas ao vivo do KaTeX; a fonte permanece editável
- Harper + Hunspell offline apenas em prosa (comandos e matemática mascarados)
- Modo visual para estruturas comuns; Vim; comandos de barra; guias de vários arquivos
- A conclusão do comando com reconhecimento de pacote de um grande corpus é a próxima (dados MIT do LaTeX Workshop, fornecidos com atribuição)

Espaço de trabalho PDF: rolagem contínua, páginas espelhadas, pesquisa, contorno, janela destacável. SyncTeX bidirecional em arquivos de capítulos. O mapeamento ainda funciona enquanto uma reconstrução está pendente. O último PDF bom permanece ativo. Desfaça o conjunto de fontes compilado e a visualização poderá ser atualizada sem uma recompilação completa.

CI em escala de livro: manuscrito de aproximadamente 6.200 linhas, matemática multifamiliar, capítulos, citações, revisão, orçamentos de desempenho em rolar/digitar/colar/desfazer/concluir/recompilar/SyncTeX.

LaTeX Workshop é uma extensão forte em um IDE geral. A Oleafly envia esse loop de documentos já montado, então você não conecta a mesma pilha de configurações e escolhas de mercado a cada semestre.

## Compiladores no aplicativo

Tectonic (LaTeX) e Typst são fornecidos com o aplicativo. Markdown via Pandoc gerenciado quando você precisar. Primeiro compile os pacotes de cache; depois disso, as compilações em cache funcionam offline. O modo offline pode bloquear o compilador no cache.

Compilação automática (debounced, cancelável, vitórias mais recentes). Recompilação `Cmd/Ctrl-Enter`. Botão Parar. Cartões de erro humanizados na linha. Último PDF válido enquanto uma versão mais recente é executada.

Receitas, cadeias latexmk, shell-escape e `.latexmkrc` personalizado permanecem na casa do leme do LaTeX Workshop. A maioria dos artigos e teses só precisa de um mecanismo supervisionado confiável.

Modelos: 23 pacotes iniciais (IEEE, ACM, Elsevier, Beamer, teses, currículos, espaços em branco do Typst,…) mais 99 em pacotes para download. Salve qualquer projeto como modelo. Geração opcional de modelo de IA quando um modelo é configurado.

## Biblioteca, Git, ferramentas de pesquisa

Projetos como livros: cor da capa, emblema do mecanismo, linhagem do fork, visualização instantânea da última página do PDF, marcadores, pesquisa `/docs` em cada documento. Fork mantém o histórico completo do Git para uma reescrita arriscada ao lado da cópia do envio.

Verdadeiro Git desde o primeiro dia. Preparação, diferenças lado a lado (árvore de trabalho editável), descarte, restauração. Pontos de verificação automáticos após compilações bem-sucedidas e edições ociosas; AI executa o ponto de verificação antes da primeira gravação. GitHub opcional (PAT ou OAuth de fluxo de dispositivo). Terminal `git log` corresponde ao aplicativo.

Cole DOI / arXiv / title → desduplicação → `.bib` → `\cite`. Importação em lote BibTeX, RIS, EndNote, Zotero RDF. Pesquisa de citações em arXiv, Semantic Scholar, Crossref, PubMed, OpenAlex. Compositor de diagramas para TikZ editável. Validador, tabelas, equações, pesquisa de laboratório, prazos, PDF para LaTeX, imagem para LaTeX com modelo de visão.

## IA opcional

Desligado até você configurá-lo. OpenAI, Antrópico, Z.AI, Groq, OpenRouter, DeepSeek, Mistral, xAI, Ollama. Chaves criptografadas no disco. As solicitações vão para o provedor que você escolheu.

O assistente edita, compila, lê registros, extrai texto em PDF, pesquisa literatura, mantém planos. As gravações são diferenças de aprovação. As exclusões precisam de uma confirmação separada. Ask-AI inline em uma seleção. Loopback MCP para Claude Code, Cursor e amigos. Com a IA desativada, o editor, a compilação, o Git e as citações ainda funcionam.

## Comprovação, exportação, privacidade

Comprovação: estrutura, referências indefinidas, rótulos duplicados, visualização de extração no estilo do analisador, descobertas orientadas ao leitor de tela. Cada sinalizador de risco vem com contexto suficiente para que você mesmo possa verificá-lo, em vez de confiar em uma pontuação de caixa preta.

Exportar: PDF sempre; DOCX/HTML/Markdown quando o Pandoc está disponível; PowerPoint para apresentações; EPUB para livros; ZIP de origem para transferência.

Nenhuma conta Oleafly. Sem telemetria do produto. Os relatórios de falhas abrem um problema pré-preenchido do GitHub que você analisa. Rede para pacotes, modelos, IA hospedada, citações, atualizações, GitHub. Edição, compilação em cache, gramática, verificação ortográfica e Git local funcionam offline.

## Quando o LaTeX Workshop ainda cabe

- Receitas de formato livre, latexmk, shell-escape, `.latexmkrc`
- texdoc no editor
- Docker, WSL, desenvolvimento remoto
- Live Share e edição multiusuário ao vivo
- Viver dentro do mercado VS Code para trabalhos não documentais

Oleafly é uma versão beta pública. Arquivos pesados ​​de classe de editor ainda podem atrapalhar a Tectonic; denunciá-los.

## Experimente

1. Baixe do
   [página de lançamentos](https://github.com/Oleafly/Oleafly/releases/latest)
   (macOS assinado/autenticado em cartório; o Windows pode usar o SmartScreen uma vez).
2. Importe seu `.tex`, `.bib` e figuras (ou comece a partir de um modelo).
3. Compile uma vez e depois escreva em um papel de verdade por um dia.

Mantenha o código VS instalado. Os mesmos arquivos funcionam em qualquer aplicativo. Se um dia no papel real for melhor no Oleafly, transfira mais projetos; se receitas e controle remoto ainda vencerem para uma determinada árvore, deixe essa árvore no Workshop.