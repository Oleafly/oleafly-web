---

title: "Projeto do navegador versus pasta no disco"
description: "Conveniência da nuvem em comparação com propriedade local, trabalho offline e Git real."
category: "local-studio"
order: 1
level: "beginner"
featured: true
updated: 2026-07-25
---

# Projeto do navegador versus pasta no disco

Quando você começa a escrever LaTeX, você enfrenta uma decisão antecipada: seu projeto fica em uma aba do navegador no servidor de outra pessoa ou em uma pasta em seu próprio disco? Ambos os modelos produzem o mesmo PDF. Eles diferem em quem detém a fonte, o que acontece quando a rede cai e quanto do conjunto de ferramentas circundante você controla.

## O que cada modelo oferece

| | Nuvem (por exemplo, no verso) | Local (Oleafly, TeX Live) |
| --- | --- | --- |
| Configuração | Instantâneo, nada para instalar | Uma instalação |
| Off-line | Limitado | A edição sempre funciona; compilações são executadas com pacotes em cache |
| Privacidade | O provedor armazena seus projetos | Os arquivos permanecem no seu disco |
| Git | Através de uma ponte de sincronização | Native, um verdadeiro repositório na pasta |
| Colaboração | Cursores em tempo real | Git, patches, pastas compartilhadas |
| Custo | Nível gratuito mais assinaturas | Grátis |

Um projeto de nuvem é uma linha em um banco de dados que o serviço renderiza para você. Um projeto local é um diretório que você pode abrir em um gerenciador de arquivos, copiar para uma unidade USB, pesquisar com qualquer ferramenta e versão com Git comum. Essa diferença parece abstrata até que um prazo coincida com uma interrupção, uma alteração no acesso pago ou um voo.

## Quando a nuvem é a escolha certa

A coedição em tempo real é a verdadeira vantagem da nuvem. Se três coautores precisarem digitar o mesmo parágrafo durante a última hora antes do prazo final e nenhum deles instalar o software, um editor de navegador é a resposta prática. Atualmente, nada local substitui cursores simultâneos.

## Quando local é a escolha certa

O local vence quando o rascunho é confidencial ou não publicado, quando você trabalha em planos ou redes restritas, quando seus números e dados são grandes ou quando você deseja um histórico de versões que não dependa de um nível de assinatura. Um repositório Git local registra suas alterações, independentemente de existir ou não algum serviço amanhã, e a mesma pasta funciona com um terminal, um editor de código ou um clone de um colaborador.

Oleafly é construído para o lado local desta tabela: o compilador vem dentro do aplicativo, os projetos são pastas simples com histórico real do Git e a IA opcional é executada com sua própria chave. Uma comparação mais longa está no [blog](/blog/local-first-vs-cloud-latex-editors/), e os documentos abordam [como os dois modelos podem funcionar juntos](/docs/why-oleafly/) por meio do GitHub.