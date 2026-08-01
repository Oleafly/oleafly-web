---

title: "Coloque o artigo no GitHub"
description: "Inicializar, ignorar arquivos auxiliares, repositório privado, hábitos que mantêm as fusões de coautor sãs."
category: "local-studio"
order: 3
level: "intermediate"
tags: ["git", "github"]
featured: false
updated: 2026-07-25
---

# Coloque o artigo no GitHub

Um manuscrito LaTeX é um texto simples, o que o torna ideal para o Git. Cada rascunho se torna um commit ao qual você pode retornar, cada alteração é visível como uma comparação em nível de linha e o GitHub oferece uma cópia externa, além de uma maneira para os coautores obterem o estado atual. Nada disso requer Git avançado. Um artigo precisa talvez de cinco comandos, usados ​​de forma consistente.

## A configuração inicial

```bash
git init
# add a .gitignore for *.aux *.log *.out *.toc *.synctex.gz
git add main.tex refs.bib figures/
git commit -m "Initial manuscript"
gh repo create my-paper --private --source=. --push
```

Execute isso uma vez na pasta do projeto. A etapa `.gitignore` é mais importante do que parece. Cada compilação regenera os arquivos `.aux`, `.log`, `.out`, `.toc` e `.synctex.gz`, e o commit deles enterra suas alterações reais sob o ruído da máquina e cria conflitos de mesclagem inúteis entre coautores. Rastreie apenas o que você cria: as fontes `.tex`, o banco de dados `.bib`, figuras e quaisquer arquivos de classe ou estilo que o local lhe forneceu. O PDF também é um produto de construção. A maioria das equipes o deixa de fora e o reconstrói localmente, embora anexar um a uma versão marcada seja uma maneira razoável de congelar uma versão enviada. Mantenha o repositório privado até que o trabalho seja público. Um manuscrito não publicado não é algo para indexar.

## Hábitos que mantêm os coautores sãos

Faça com que cada commit faça uma alteração lógica, como "revisar introdução da seção 3" ou "adicionar tabela de ablação". A história então é lida como uma história do jornal, e uma edição incorreta pode ser revertida sem danos colaterais. Puxe antes de iniciar uma sessão de escrita e empurre quando parar. Os conflitos de mesclagem aumentam com o tempo que as filiais passam separadas. Nunca force um branch compartilhado depois que os coautores o tiverem puxado: isso reescreve a história sob seus pés. Mantenha grandes artefatos binários (conjuntos de dados, vídeos) fora do repositório de papel. Vincule a um arquivo ou use um repositório de dados separado. O Git armazena todas as versões de cada binário para sempre.

Um hábito específico do LaTeX: escrever uma frase por linha de origem torna as diferenças dramaticamente mais legíveis, porque uma edição de uma palavra aparece como uma alteração de uma linha em vez de um parágrafo refeito.

## Como o Oleafly se encaixa

Cada projeto Oleafly é uma pasta comum no disco, portanto esses comandos funcionam inalterados. O aplicativo também pode criar um commit do Git automaticamente após cada compilação bem-sucedida, o que oferece uma rede de segurança refinada entre seus commits deliberados. Consulte [histórico do Git](/docs/git-history/). Para padrões de colaboração criados com base nisso, incluindo troca de patches e propriedade de capítulos, consulte [Coautor sem cursor ativo](/learn/offline-collaboration/).