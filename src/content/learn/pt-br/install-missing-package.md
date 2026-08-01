---

title: "Esse pacote não está instalado"
description: "tlmgr, MiKTeX e busca sob demanda com Tectonic ou Oleafly."
category: "runtime"
order: 3
level: "beginner"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

#Esse pacote não está instalado

Mais cedo ou mais tarde, uma compilação para com uma linha como `! Erro LaTeX: Arquivo 'siunitx.sty' não encontrado`. A mensagem significa exatamente o que diz: seu documento solicitou um pacote, via `\usepackage{siunitx}`, e o compilador não conseguiu encontrar o arquivo `.sty` do pacote em sua máquina. Não há nada de errado com o seu documento. As distribuições LaTeX não enviam todos os pacotes por padrão e a correção depende de qual distribuição você executa.

## TeX ao vivo

TeX Live, a distribuição padrão no Linux e macOS (como MacTeX), inclui um gerenciador de pacotes chamado `tlmgr`. Instale o pacote ausente de um terminal:

```
tlmgr install siunitx
```

Se o TeX Live completo foi instalado, que tem muitos gigabytes, tudo já está presente e esse erro não deve ocorrer. Geralmente aparece com esquemas de instalação menores `básicos` ou `pequenos`. Observe que o argumento para `tlmgr` é o nome do pacote, não o nome do arquivo, portanto, não há extensão `.sty`.

##MiKTeX

O MiKTeX, comum no Windows, possui dois mecanismos. Seu recurso de instalação instantânea detecta o arquivo ausente durante a compilação e se oferece para buscá-lo, solicitando ou procedendo automaticamente, dependendo das configurações. Alternativamente, abra o console MiKTeX, vá para a guia Pacotes, procure o pacote e instale-o lá. Se a instalação on-the-fly parece travar uma compilação, geralmente ela está aguardando uma caixa de diálogo de confirmação escondida atrás de outra janela.

## Tectônica

O mecanismo Tectonic, incluído no Oleafly, pula a etapa manual: os pacotes são baixados sob demanda durante a compilação e vão para o cache local do mecanismo. A primeira compilação que usa `siunitx` o busca; compilações posteriores reutilizam o cache. Essa primeira execução pode demorar mais enquanto o download das dependências e precisa de uma conexão de rede.

## Ao instalar não corrige

Se o gerenciador de pacotes informar que tal pacote não existe, verifique a ortografia na página do pacote no CTAN, o arquivo central de pacotes LaTeX em ctan.org. Duas incompatibilidades são responsáveis ​​pela maioria dos casos teimosos. Primeiro, o arquivo e o pacote podem ter nomes diferentes, porque um pacote de distribuição pode conter vários arquivos `.sty`. Pesquisar no CTAN o nome exato do arquivo `.sty` da mensagem de erro resolve isso. Segundo, o erro às vezes nomeia um arquivo do seu próprio projeto, como um arquivo de classe que um modelo esqueceu de incluir, e nenhum gerenciador de pacotes pode fornecer isso. O arquivo deve vir de onde o modelo veio.

Uma última observação sobre um conselho antigo: baixar um arquivo `.sty` solitário da Internet para a pasta do seu projeto funciona, já que o LaTeX pesquisa primeiro o diretório atual, mas congela esse pacote em uma versão aleatória e o oculta das atualizações. Prefira o gerenciador de pacotes e mantenha o truque da cópia manual para emergências próximas aos prazos.