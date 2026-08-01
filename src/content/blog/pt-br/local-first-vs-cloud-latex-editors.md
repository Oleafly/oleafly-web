---

title: "Editores LaTeX locais versus em nuvem: o que você realmente negocia"
description: "Os editores do Cloud LaTeX trocam a propriedade por conveniência. Local primeiro significa arquivos em disco, um editor de pesquisa real, Git real, trabalho offline e rede apenas para ações que você executa, além do que ainda pertence ao navegador."
date: 2026-07-21
tags: [local-first, privacy, research-workspace, editor]
---

Os editores Cloud LaTeX venceram por um motivo simples: configuração zero. Abra uma aba, compile.
Durante anos, essa foi a maneira mais fácil de evitar uma distribuição TeX em um
laptop, e muitas pessoas ainda o preferem.

No entanto, a configuração não é mais a parte difícil para a maioria dos documentos. Motores como
A Tectonic pode ser enviada dentro de um aplicativo de desktop e extrair pacotes sob demanda, então
instalar e compilar é aproximadamente o tempo que leva para criar uma conta na nuvem. O
A pergunta que vale a pena fazer é o que a assinatura ainda compra para você e o que você
entregue por isso.

## Do que você abre mão na nuvem

Seu manuscrito está no banco de dados de outra pessoa. A exportação geralmente funciona, até
os planos mudam, uma empresa é adquirida ou um recurso desaparece, enquanto seu
o prazo permanece definido.

A criptografia em repouso mantém os estranhos afastados. O próprio serviço ainda pode ver
rascunhos, subvenções e resultados inéditos que passam por sua infraestrutura.

A latência é outro custo silencioso. Um pressionamento de tecla realizado em sua máquina é quase
sempre mais ágil. As filas de compilação e os tempos limite de nível gratuito só aparecem quando o
construir não é seu.

Off-line é a outra lacuna. Em um voo, no porão de um hospital ou em um local seguro
laboratório sem rede aberta, um editor de navegador é apenas uma guia em branco.

Alguns editores hospedados também colocam histórico completo, rastreiam alterações ou sincronização Git/GitHub
atrás de níveis pagos. O Git local não se importa com qual plano você comprou.

## Quais mudanças locais

Os projetos são arquivos simples em uma pasta que você pode abrir. A história pode ser real, pegue você
inspecionar de qualquer terminal. A compilação é executada em sua CPU sem fila. Seus arquivos
e o histórico do Git não depende da integridade da conta do fornecedor.

A digitação multiusuário ao vivo ainda é onde as ferramentas do navegador vencem. Muita pesquisa
semanas parecem diferentes: draft solo, viagens, redes restritas, desejo
propriedade ou necessidade de um editor de documentos completo que indexe todo o projeto.
Os laboratórios já ramificam e abrem solicitações pull de código. Os artigos podem usar o mesmo
padrão assíncrono para coautores que não precisam compartilhar um cursor.

## Network ainda acontece (de propósito)

As ferramentas locais ainda buscam pacotes de primeiro uso, pacotes de modelos, citações
metadados, IA hospedada se você ativá-la, controles remotos Git e atualizações. O ponto é
o padrão: o rascunho e as compilações em cache permanecem no disco.

Projetos, metadados, compilações e histórico do Git vivem localmente. A rede funciona quando
você realiza uma ação que precisa dela. A edição e a compilação em cache devem funcionar
off-line. Cole um DOI ou habilite um modelo de nuvem e essas solicitações irão para onde você
mirou-os. Diga isso claramente em qualquer artigo sobre privacidade, em vez de fingir
rede nunca acontece.

## A pilha em torno de um papel

Uma semana de pesquisa quase nunca é “apenas um editor”. Geralmente é uma mistura de:

- ambiente de escrita com inteligência real de projeto
- Distribuição TeX e manutenção de pacotes
- Visualizador de PDF com SyncTeX
- Cliente Git e host remoto
- pesquisa de citações e higiene bibliográfica
- ferramentas de gramática e ortografia
- diagrama ou figura pipeline
- prazos e outras ferramentas secundárias

Um espaço de trabalho de pesquisa local é útil quando essas peças ficam juntas
projeto de pasta simples: um editor com reconhecimento de projeto (refs, cita, macros, estrutura,
visualização matemática, revisão offline), compilação supervisionada, espaço de trabalho PDF com
SyncTeX tolerante a obsoletos, pontos de verificação Git automáticos, importação e exportação, comprovação
antes do envio, agente opcional que deve mostrar diferenças.

## Onde o Oleafly se encaixa

[Oleafly](https://github.com/Oleafly/Oleafly) foi desenvolvido para essa categoria: gratuito,
espaço de trabalho de desktop de código aberto para LaTeX, Typst e Markdown. Empacotado
compiladores. Biblioteca de projetos com bifurcação e pesquisa. Editor de todo o projeto
inteligência (definição, referências, renomeação, verificações de referência/citação ao vivo, estrutura
visualizações, suas macros com formas de argumento, TexLab/Tinymist quando disponível). Ao vivo
visualizações matemáticas. Harper e Hunspell off-line apenas em prosa. PDF integrado com
SyncTeX bidirecional que ainda mapeia enquanto uma reconstrução está pendente. Verdadeiro Git com
pontos de verificação automáticos e GitHub opcional. Pesquisar e colar citações. Diagrama
Compositor para TikZ editável. Pré-voo. IA opcional com aprovação controlada com sua chave
ou Ollama local.

A [página de privacidade](/privacy/) é curta propositalmente: sem conta Oleafly, sem
telemetria do produto. Os rascunhos ficam na sua máquina. IA hospedada, pesquisa de citações e
O GitHub conversa com esses serviços de acordo com suas políticas, com suas chaves e seus
ações.

Se você quiser experimentar um pouco sem instalar, o [navegador gratuito
tools](/tools/) executado no lado do cliente. O aplicativo de desktop é onde a inteligência,
compilação, histórico e a árvore do projeto realmente se encontram.

## Quando a nuvem ainda vence

Fique no navegador quando a coautoria em tempo real for o produto, quando um
colaborador não instalar nada, ou quando sua instituição já
padronizado em um editor hospedado para submissão.

Combine a ferramenta com a semana que você realmente tem. Se você precisar de multiusuário ao vivo
digitando, permaneça no navegador (ou use Git quando os coautores puderem trabalhar de forma assíncrona). Se você
preocupam-se mais com propriedade, profundidade off-line e um editor de pesquisa local completo,
mantenha o manuscrito como arquivos em disco, crie o PDF em sua máquina e mantenha
histórico em um repositório que qualquer ferramenta Git pode abrir.