---

title: "Qual motor para este projeto"
description: "pdfLaTeX, XeLaTeX, LuaLaTeX, Tectonic: Unicode, fontes, ajuste de diário."
category: "runtime"
order: 1
level: "intermediate"
tags: ["engines"]
featured: true
updated: 2026-07-25
---

# Qual motor para este projeto

Um mecanismo é o programa que realmente transforma sua fonte `.tex` em um PDF. O próprio LaTeX é uma camada macro executada sobre uma e há várias para escolher. Eles aceitam quase os mesmos documentos, mas diferem na forma como lidam com texto e fontes Unicode, e um modelo escrito para um mecanismo pode falhar completamente em outro. Escolha uma vez por projeto e persista.

| Motor | Unicode | Fontes do sistema | Notas |
| --- | --- | --- | --- |
| pdfLaTeX | Parcial | Não | Compatibilidade máxima do diário |
| XelaTeX | Sim | Sim (`fontspec`) | Ótimo para documentos poliglotas |
| LuaLaTeX | Sim | Sim | Moderno, programável |
| Tectônico | Tipo Xe | Sim | Busca automática de pacotes; Oleafly padrão |

## Para que serve cada motor

pdfLaTeX é o descendente direto do TeX original e continua sendo a suposição padrão da maioria dos periódicos, conferências e sistemas de submissão. Ele é anterior ao Unicode, portanto a entrada acentuada precisa das convenções `inputenc` e as fontes são limitadas a fontes TeX especialmente empacotadas. Em troca, é rápido e tem suporte universal, e décadas de modelos são direcionados a ele.

XeLaTeX lê UTF-8 nativamente e, através do pacote `fontspec`, usa qualquer fonte instalada em seu sistema pelo nome, como `\setmainfont{Georgia}`. Isso o torna a escolha prática para documentos que misturam escritas, para idiomas além dos da Europa Ocidental e para qualquer pessoa com requisitos específicos de fontes. [Quando usar XeLaTeX](/learn/when-use-xelatex/) é mais profundo.

LuaLaTeX oferece o mesmo suporte a Unicode e fontes e incorpora a linguagem de script Lua, para que os pacotes possam computar coisas em tempo de compilação que costumavam ser impossíveis. É o sucessor de longo prazo entre os motores tradicionais, ao custo de compilações um pouco mais lentas.

Tectonic é uma versão moderna e independente do mecanismo XeTeX. Seu diferencial é o tratamento automático de dependências: quando um documento precisa de um pacote que você não possui, o Tectonic o baixa sob demanda, em vez de falhar. O Oleafly inclui o Tectonic como seu mecanismo padrão exatamente por esse motivo, portanto, uma nova instalação compila documentos do mundo real sem qualquer administração do TeX.

## Como decidir

Siga o modelo. Se uma classe de diário ou modelo de tese documentar um mecanismo, use-o. Os modelos codificam suposições do mecanismo de maneiras que aparecem como erros confusos em outros lugares, conforme descrito em [Arquivos de classe universitária que não serão compilados](/learn/fix-broken-template/). Se o documento for seu do zero, a regra é simples: pdfLaTeX quando um local conservador irá compilar suas fontes, e XeLaTeX, LuaLaTeX ou Tectonic quando você precisar de Unicode real ou fontes reais. Seja o que for que você escolher, mantenha-o durante a vida do documento. Espaçamentos sutis e diferenças de fonte fazem com que a mudança no meio do projeto seja um mau uso do tempo.