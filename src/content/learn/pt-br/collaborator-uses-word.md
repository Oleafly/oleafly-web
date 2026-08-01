---

title: "Coautores que só falam Word"
description: "Mantenha .tex como fonte de verdade ao trocar PDF ou DOCX por comentários."
category: "local-studio"
order: 5
level: "intermediate"
tags: ["workflow", "word"]
featured: false
updated: 2026-07-25
---

# Coautores que falam apenas Word

Colaborações com ferramentas mistas são comuns: você escreve o artigo em LaTeX e um coautor, consultor ou colaborador clínico trabalha apenas no Microsoft Word. Nada converte perfeitamente entre os dois formatos. Combine desde o início qual arquivo é o verdadeiro documento e, em seguida, estabeleça uma rotina para transferir o feedback através da lacuna sem perder trabalho.

## Uma fonte de verdade

Decida antecipadamente que os arquivos `.tex` são canônicos e todo o resto é uma cópia derivada para revisão. No momento em que existem duas "versões atuais" em dois formatos, as edições de alguém se perdem e reconciliar um arquivo Word com um arquivo LaTeX a olho nu é um trabalho miserável. Sob este acordo, seu trabalho é composição tipográfica e integração. O trabalho do seu coautor é conteúdo e comentários, entregues na ferramenta de sua preferência.

## Escolha a exportação pelo tipo de feedback

Para leitura e comentários de alto nível, envie o PDF compilado. Cada usuário do Word pode abrir um PDF, e as ferramentas de anotação em qualquer leitor de PDF cobrem notas de margem e destaques. Aplicar esse feedback manualmente mantém você no controle total da fonte.

Quando o coautor precisar propor reescritas em nível de frase com alterações controladas, exporte um DOCX. Pandoc converte LaTeX em Word bem o suficiente para fins de revisão, e Oleafly tem exportação DOCX integrada. Espere que a conversão seja aproximada: equações, referências cruzadas e posicionamento de figuras degradam, e você deve dizer isso com antecedência para que ninguém relate problemas de layout em uma cópia descartável.

## A sessão de mesclagem

O feedback em um `.docx` deve voltar para o `.tex` manualmente. Trate isso como uma tarefa agendada em vez de uma tarefa contínua: colete as alterações rastreadas do coautor, abra o arquivo Word e o código-fonte LaTeX lado a lado e aplique as edições aceitas uma por uma, comprometendo-se com o Git conforme você avança, de modo que cada rodada de feedback seja um commit. Uma regra mantém isso viável: cada rodada de revisão começa com uma nova exportação da fonte atual. Nunca deixe o mesmo arquivo do Word durar várias rodadas, porque ele bifurca o papel silenciosamente.

## Quando o rascunho começa no Word

Às vezes o fluxo se inverte: o coautor escreve o primeiro rascunho no Word e você assume a composição tipográfica. Converta-o uma vez, com antecedência. Oleafly importa `.docx` para um projeto LaTeX e pandoc faz o mesmo na linha de comando. A partir desse ponto, o `.tex` é canônico e a rotina acima se aplica. Para conhecer o backbone de controle de versão que torna tudo isso recuperável, consulte [Coloque o documento no GitHub](/learn/sync-with-github/).