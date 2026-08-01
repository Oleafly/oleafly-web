---

title: "Uma semana escrevendo no Oleafly"
description: "Biblioteca, modelos, compilação, SyncTeX, citações, histórico do Git, IA opcional."
category: "local-studio"
order: 6
level: "beginner"
tags: ["oleafly", "workflow"]
featured: true
updated: 2026-07-25
---

# Uma semana escrevendo no Oleafly

É assim que um artigo realmente se parece no dia a dia no Oleafly, desde um projeto vazio até um rascunho que você pode enviar a um coautor. O aplicativo não precisa de conta nem de servidor: um projeto é uma pasta de `.tex`, `.bib` e arquivos de figura em seu disco, e tudo abaixo opera nessa pasta.

## Primeiro dia: comece com um modelo

Crie um projeto na Biblioteca, em branco ou a partir de um [modelo](/templates/) para formatos comuns, como artigos IEEE e ACM ou um esqueleto de tese. Um modelo fornece um documento de compilação imediatamente, com as opções de classe e preâmbulo já sensatos, o que é melhor do que montar um preâmbulo linha por linha no primeiro dia. Pressione compilar uma vez para confirmar que você obteve um PDF antes de escrever qualquer coisa.

## No meio da semana: o loop de gravação e compilação

A maior parte da semana é um loop entre o editor e o painel PDF. O editor preenche automaticamente comandos, ambientes e rótulos e chaves de citação que existem em seu projeto, e comandos de barra inserem estruturas maiores, como figuras e tabelas, sem que você memorize seus padrões. Compile com frequência, porque um novo erro no texto que você escreveu há dois minutos é fácil de localizar, enquanto um erro que surge após uma tarde de alterações não é. O SyncTeX une os dois painéis: clique em um parágrafo no PDF para ir para a linha de origem ou pule da fonte para o PDF, o que é mais importante ao revisar páginas específicas de um documento longo.

## Citações conforme você avança

Mantenha um arquivo `.bib` no projeto e cite com `\cite{...}` enquanto você escreve, deixando o preenchimento automático fornecer as chaves. Adicionar referências na hora de escrever é barato. Reconstruir três semanas de espaços reservados de "citação necessária" não é. Se as entradas vierem do Zotero ou de uma exportação de editora, o [validador BibTeX](/tools/bibtex-validator/) detecta os campos ausentes antes que eles apareçam como referências de aparência estranha. O pipeline completo é descrito em [Da chave .bib à citação no texto](/learn/add-citations/).

## História sem cerimônia

Oleafly pode registrar um commit do Git automaticamente após cada compilação bem-sucedida, de modo que a semana deixa para trás uma linha do tempo de estados de trabalho que você pode inspecionar ou reverter. Quando valer a pena compartilhar o rascunho, envie a pasta para um repositório GitHub privado; [Coloque o artigo no GitHub](/learn/sync-with-github/) mostra a configuração.

## Opcional: o assistente

Se você adicionar uma chave de API para um provedor hospedado ou apontar o aplicativo para Ollama local, um assistente poderá responder perguntas sobre seu projeto, propor edições após diferenças de aprovação e compilar para verificar seu próprio trabalho. Opcional: todas as etapas acima funcionam sem ele. Os detalhes estão em [Assistente dentro do Oleafly](/learn/oleafly-ai/), e a intenção de design mais ampla por trás do aplicativo está em [Primeiros passos](/docs/getting-started/) e [Filosofia](/docs/philosophy/).