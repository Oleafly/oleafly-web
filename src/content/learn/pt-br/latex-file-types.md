---

title: "Os arquivos em um projeto real"
description: ".tex, .bib, .cls, .sty e o lixo gerado você não deve confirmar."
category: "open-the-loop"
order: 4
level: "beginner"
tags: ["basics", "files"]
featured: false
updated: 2026-07-25
---

# Os arquivos em um projeto real

Abra a pasta de qualquer projeto LaTeX real após a compilação e você encontrará muito mais arquivos do que escreveu. Isso surpreende a maioria dos iniciantes, e o medo de excluir o que está errado mantém as pastas desordenadas para sempre. A distinção que esclarece tudo: alguns arquivos são fontes que você edita, alguns são estilos fornecidos por um modelo ou pacote e o restante é espaço de rascunho gerado que o compilador recria em cada execução.

## Os arquivos que você escreve

Seus arquivos `.tex` contêm o documento real: o texto, seções, figuras e matemática. Um arquivo `.bib` é seu banco de dados bibliográfico, uma entrada por artigo ou livro que você pode citar; você pode mantê-lo manualmente ou exportá-lo de um gerenciador de referências como o Zotero. Esses são os arquivos que vale a pena fazer backup e colocar no controle de versão, porque todo o resto pode ser reconstruído a partir deles.

## Os arquivos que um modelo fornece

Um arquivo `.cls` define uma classe de documento, aquilo que você nomeia em `\documentclass{...}`. Periódicos e conferências são enviados por conta própria, então cada submissão parece idêntica e você quase nunca edita uma. Um arquivo `.sty` é um pacote: macros reutilizáveis ​​e configurações carregadas com `\usepackage`. Você só escreverá um quando quiser compartilhar comandos personalizados em vários documentos. Um arquivo `.bst` descreve um estilo de citação do BibTeX e também geralmente é colocado em um local.

## Os arquivos que o compilador cria

O arquivo `.aux` armazena dados de referência cruzada e citação entre passagens de compilação; nunca edite-o e sinta-se à vontade para excluí-lo, pois a próxima compilação o reescreverá. O arquivo `.log` registra tudo o que o compilador fez e vale a pena abri-lo apenas quando algo dá errado. O `.pdf` é a saída que você realmente queria.

| Extensão | Função | Editar manualmente? |
| --- | --- | --- |
| `.tex` | Documentos de origem e capítulos | Sim |
| `.bib` | Base de dados bibliográfica | Sim (ou exportar do Zotero) |
| `.cls` | Classe de documento | Raramente, modelos de fornecedores |
| `.sty` | Pacotes/arquivos de estilo | Ao escrever suas próprias macros |
| `.bst` | Estilo BibTeX | Raramente |
| `.aux` | Dados de referência cruzada | **Não:** gerado |
| `.log` | Registro do compilador | Leia durante a depuração |
| `.pdf` | Saída | Ver/enviar |

## Layout do projeto que pode ser dimensionado

```text
paper/
 main.tex
 chapters/
 figures/
 refs.bib
```

Um `main.tex` no nível superior atua como ponto de entrada, os capítulos ficam em sua própria pasta e são puxados com `\input` ou `\include`, as imagens ficam em `figures/` e a bibliografia permanece em um `refs.bib`. Este layout permanece gerenciável quer o projeto seja um artigo de quatro páginas ou uma tese. [Arquivos de capítulos divididos](/learn/split-chapter-files/) mostra como as peças se conectam.

Se você usa Git, adicione `*.aux`, `*.log` e os outros arquivos gerados a `.gitignore` para que seu histórico rastreie apenas a fonte real. Os projetos Oleafly são pastas simples no disco, portanto este conselho se aplica inalterado lá. O erro mais comum é o inverso: ao procurar um erro de compilação estranho, excluir os arquivos `.aux` geralmente é a solução, porque um arquivo obsoleto de uma execução interrompida pode envenenar todas as compilações posteriores.