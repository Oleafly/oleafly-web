---

title: "Redação clínica e de subsídios: privacidade, rascunhos rastreáveis ​​e LaTeX off-line"
description: "Por que os redatores da área médica, de saúde pública e de bolsas se preocupam com o local onde o rascunho é armazenado e como um editor de pesquisa local com Git real, compilação off-line e nenhuma conta se adapta aos ciclos de revisão."
date: 2026-07-14
tags: [medicine, grants, privacy, local-first]
---

Manuscritos clínicos e narrativas de subsídios muitas vezes incluem detalhes delicados, mesmo
antes que a desidentificação seja final. Colocar cada pressionamento de tecla em um terceiro
editor é tanto uma decisão política quanto uma preferência de ferramentas. IRBs, uso de dados
acordos, e a TI hospitalar não se importa que um editor em nuvem seja conveniente em
23h.

Esta postagem é sobre rascunho e composição tipográfica de uma forma que você possa explicar
conformidade. Trate isso como um conselho sobre fluxo de trabalho, não como uma revisão jurídica.

## Arquivos simples são mais fáceis de raciocinar

Uma pasta de `.tex` e figuras pode ficar dentro de um disco criptografado, um hospital
imagem de laptop ou uma máquina sem ar. Você pode apontar a conformidade para um caminho.
Projetos de navegador exigem confiança no modelo de acesso, no caminho de exportação e no caminho de exportação de um fornecedor.
lista de subprocessadores.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) foi criado para
propositalmente: sem conta, sem telemetria de produto, projetos como pastas comuns
com um repositório Git real. A [página de privacidade](/privacy/) é curta porque o
documento não precisa de um servidor Oleafly para existir. A rede é para ações que você
take (pacotes, pesquisa de citação opcional, IA hospedada se você habilitá-la, GitHub),
não para cada pressionamento de tecla do rascunho.

Se a política proibir a IA na nuvem, deixe o assistente desligado ou aponte-o para um local
modelo. O editor, o loop de compilação e o Git ainda funcionam.

## Acompanhe as alterações sem precisar usar o Word

Os Grant PIs ainda pedem "controlar alterações". Na terra do LaTeX, isso geralmente significa
Histórico do Git mais comentários em PDF de coautores ou uma pequena exportação do Word para o
pessoa que se recusa a instalar qualquer coisa. Mantenha `.tex` como fonte da verdade;
veja [coautores que falam apenas Word](/learn/collaborator-uses-word/).

No Oleafly, todo projeto é um repositório Git desde o primeiro dia: pontos de verificação automáticos
após compilações bem-sucedidas e edições inativas, diferenças lado a lado, um clique
restaurar, GitHub opcional quando você deseja um controle remoto privado. Você pode bifurcar um inteiro
pacote de aplicativos em um segundo projeto (histórico completo) para tentar um corte arriscado
sem tocar na cópia da submissão. Se você usar o assistente de IA opcional, ele
pontos de verificação antes da primeira edição e só realiza alterações por meio de aprovação
diferenças.

Nomeie os commits após os objetivos ou seções (`aim2-methods-cut`) para que um PI possa folhear
história sem ler diferenças como um engenheiro de software.

## Offline é útil em hospitais

As redes clínicas bloqueiam domínios SaaS aleatórios. Um compilador local continua escrevendo
possível entre as sessões EHR. Oleafly envia Tectonic (e Typst) no aplicativo;
cache de pacotes após o primeiro uso, e o modo offline pode recusar a rede para o
compilador. A verificação ortográfica e a gramática são executadas localmente na prosa (eles ignoram comandos e
matemática). Essas são as restrições com as quais a TI hospitalar geralmente se preocupa, portanto,
editores de pesquisa aparecem com frequência.

SyncTeX e um PDF ao lado da fonte são importantes quando você está fixando um limite de páginas
em um computador de posto de enfermagem com Wi-Fi não confiável.

## Modelos, limites de página e simulação

Os modelos básicos e de estilo NIH tratam de margens, fontes e limites de página.
Os pacotes de geometria e fontes são mais importantes do que macros inteligentes. Compilar para PDF e
verifique a contagem de páginas após cada corte importante, não na noite anterior ao portal
fecha. Comece com um modelo conhecido na galeria quando houver; ainda combina
o FOA atual para fontes, margens e estrutura (objetivos específicos como uma página
significa uma página).

Quando o PDF tem que sobreviver a um leitor automático (resumos, alguns
portais), Preflight mostra resultados de extração de estrutura e estilo analisador
antes de enviar. Esses são sinais de risco heurísticos que você pode ler e agir.

## Colaboração multi-PI

Possui arquivos por seção ou objetivo. Uma pessoa possui o mestre `.bib` ou compartilhado
Exportação do grupo Zotero. Combine se os coautores editarão o TeX ou retornarão comentários no PDF.
Controles remotos privados somente em hosts Git institucionais aprovados quando a política exigir
isso; nem todo rascunho de concessão pertence ao GitHub público.

## Gerenciadores de bibliografia

Grupos compartilhados do Zotero exportam um `.bib` que vários PIs podem atualizar. Importar para
o projeto, cole DOIs ao adicionar novas citações e valide os campos ausentes
antes do envio, para que os anos não apareçam como `[?]` no PDF montado:
[validador BibTeX](/tools/bibtex-validator/). Oleafly completa e verifica
chaves de citação na bibliografia do projeto enquanto você escreve, tão quebradas
As chaves `\cite` aparecem antes do log.

## Números e PHI

Nunca coloque dados identificáveis do paciente em figuras ou legendas destinadas a um
repo que outros podem clonar. Use esquemas não identificados. Guarde qualquer coisa parada
sensível sob os mesmos controles do conjunto de dados clínicos, não próximo ao
diagrama de métodos públicos.

## O que isso não é

Local-first ainda está sob revisão do IRB, acordos de uso de dados e
desidentificação. Ative a IA hospedada ou pressione um controle remoto e alguns bytes saem do
máquina sob as políticas desses serviços. Quais mudanças locais são o padrão
caminho para a elaboração de uma narrativa sensível: uma pasta que você controla, um editor que
funciona off-line e o histórico pode ser restaurado sem solicitar um fornecedor
exportar.

## Configuração inicial prática

1. Crie um projeto local; habilite a compilação offline assim que os pacotes forem armazenados em cache.
2. Deixe a IA desativada, a menos que a política e a equipe concordem com um fornecedor.
3. Remoto privado apenas em um host aprovado.
4. Propriedade da seção e proprietário único da bibliografia.
5. Verificações da contagem de páginas após cada corte importante nos objetivos e na estratégia de pesquisa.

Escreva como se um responsável pela conformidade fosse perguntar onde estava o rascunho. Se a resposta
é "uma pasta no laptop criptografado, histórico local do Git, privado opcional
remoto", você está em melhor forma do que "uma conta em um serviço que nunca
revisado."