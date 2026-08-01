---

title: "Obtenha um TeX funcional em qualquer sistema operacional"
description: "Oleafly com um mecanismo incluído ou uma instalação completa do TeX Live / MiKTeX."
category: "local-studio"
order: 2
level: "beginner"
tags: ["setup"]
featured: false
updated: 2026-07-25
---

# Obtenha um TeX funcional em qualquer sistema operacional

Escrever LaTeX localmente requer um sistema TeX: o mecanismo que compila seu código-fonte e os milhares de pacotes dos quais os documentos dependem. Existem duas maneiras sensatas de conseguir um. Um deles é um aplicativo com mecanismo integrado, que permite compilar em minutos. A outra é uma distribuição TeX completa, que instala o conjunto completo de ferramentas de linha de comando que qualquer editor pode usar. Ambos os caminhos terminam no mesmo lugar: um arquivo `.tex` se transformando em PDF na sua máquina.

## Caminho A: um aplicativo com o mecanismo incluído

Baixe [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) para Mac, Windows ou Linux. Ele agrupa o mecanismo Tectonic, portanto não há instalação separada do TeX para gerenciar: você abre o aplicativo, cria um projeto e compila. Quando um documento utiliza um pacote que não está presente, a Tectonic o busca sob demanda, o que requer uma conexão de rede na primeira vez que um determinado pacote é utilizado e nada depois disso. Este caminho é adequado para qualquer pessoa que queira escrever artigos em vez de administrar uma instalação do TeX, e deixa arquivos `.tex` e `.bib` comuns no disco que qualquer outra ferramenta pode ler.

## Caminho B: uma distribuição TeX completa

A instalação de uma distribuição fornece `pdflatex`, `xelatex`, `lualatex` e o gerenciador de pacotes como comandos do sistema. Em um Mac, instale o MacTeX, que é um pacote TeX Live para macOS; se o download de vários gigabytes não for bem-vindo, o BasicTeX é um pequeno núcleo que você estende através do TeX Live Utility conforme necessário. No Windows, o MiKTeX é a escolha comum e pode instalar pacotes ausentes durante a compilação, enquanto o TeX Live funciona igualmente bem. No Linux, instale `texlive-full` do seu gerenciador de pacotes para tudo de uma vez, ou um esquema menor como `texlive-latex-extra` mais a ferramenta `tlmgr` para adicionar pacotes posteriormente. Espere que uma instalação completa demore um pouco e vários gigabytes de disco.

## Verifique a instalação

Abra um terminal e pergunte a versão de um mecanismo:

```bash
pdflatex --version
# or
xelatex --version
```

Um banner de versão significa que o conjunto de ferramentas está no seu caminho e pronto. Um erro informando que o comando não foi encontrado geralmente significa que as alterações do instalador em seu PATH ainda não entraram em vigor; reiniciar o terminal ou sair e entrar novamente no Windows resolve o problema.

##Qual caminho seguir

Escolha o aplicativo se você está começando ou simplesmente deseja o caminho mais curto para um PDF compilado. Escolha uma distribuição completa se precisar de mecanismos específicos, compilações de linha de comando ou integração com um editor existente. Os dois coexistem sem conflito, portanto, começar pelo Caminho A e adicionar o Caminho B posteriormente não custa nada. De qualquer forma, o próximo passo é o mesmo: compilar [seu primeiro documento](/learn/first-document/).