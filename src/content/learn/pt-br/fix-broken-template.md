---

title: "Arquivos de aulas universitárias que não serão compilados"
description: "Triagem: primeiro erro, mecanismo, pacotes obsoletos, busca binária."
category: "long-form"
order: 6
level: "advanced"
tags: ["thesis", "errors"]
featured: false
updated: 2026-07-25
---

# Arquivos de aulas universitárias que não serão compilados

Os modelos de teses universitárias são um tipo especial de código legado. Um estudante de pós-graduação escreveu o arquivo da aula há quinze anos contra a distribuição do TeX da época, formou-se e deixou-o congelado enquanto o ecossistema LaTeX avançava. Quando você baixa `universitythesis.cls` hoje e ele morre com uma tela de erros, a classe geralmente não está quebrada, mas sim presa no tempo. Os modos de falha são previsíveis e uma ordem de triagem fixa resolve a maioria deles.

## Comece apenas com o primeiro erro

Uma falha no LaTeX se espalha em cascata: um comando indefinido no início da classe pode produzir dezenas de erros posteriores que não significam nada. Role o log até a primeira linha que começa com `!`, corrija isso e recompile antes de ler qualquer outra coisa. A repetição desse ciclo geralmente elimina uma parede de erros intimidante em três ou quatro passagens. Se o primeiro erro for um comando desconhecido, [Sequência de controle indefinida](/learn/undefined-control-sequence/) percorre o diagnóstico.

## Verifique o motor

Muitos modelos assumem um mecanismo específico e falham estranhamente em qualquer outro. Uma classe que carrega `fontspec` ou define fontes por nome requer XeLaTeX ou LuaLaTeX; uma classe construída em torno de primitivas específicas do `pdftex` pode falhar em ambos. Procure um comentário próximo ao topo do arquivo da turma ou uma linha nas instruções da universidade nomeando o mecanismo pretendido e combine-o antes de depurar qualquer outra coisa. As diferenças estão resumidas em [Qual mecanismo para este projeto](/learn/engines-compared/).

## Modernize o que você controla

Modelos antigos carregam pacotes obsoletos cujos substitutos modernos já estão em sua distribuição, e a dupla então briga; [Pacotes que lutam entre si](/learn/package-conflicts/) lista as combinações clássicas. A estratégia viável é deixar o arquivo de classe em si, já que os requisitos de formatação da universidade residem nele, e modernizar apenas seu próprio preâmbulo: remover linhas `\usepackage` obsoletas, carregar o `hyperref` tarde e evitar recarregar qualquer coisa que a classe já carregue.

## Pesquisa binária no preâmbulo

Quando o erro resistir à inspeção, comente a segunda metade do seu preâmbulo e recompile. Se o erro desaparecer, o gatilho estará na metade comentada; restaure metade e repita. Algumas compilações isolam a única linha com falha, o que é muito mais rápido do que raciocinar sobre um preâmbulo que você não escreveu.

## Pesquise antes de sofrer

Todos os alunos daquela universidade compilam a mesma turma, então é quase certo que seu erro já ocorreu antes. Pesquise a mensagem de erro exata junto com o nome do arquivo da turma e verifique se a universidade ou um aluno sucessor mantém um fork corrigido no GitHub. Usar um fork mantido, quando existe, é melhor do que consertar bugs conhecidos por conta própria.