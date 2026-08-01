---

title: "Parada de emergência e discussão descontrolada"
description: "Abortos fatais devido à falta de extremidades, colchetes ou inclusões incorretas."
category: "log-literacy"
order: 6
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Parada de emergência e argumento descontrolado

## O sintoma

A compilação morre imediatamente. O log termina com `! Parada de emergência.` ou mostra `Argumento de fuga?` seguido por um longo trecho de seu próprio texto, geralmente com uma linha complementar como `Arquivo finalizado durante a verificação do uso de \textbf` ou `Parágrafo finalizado antes de \foo ser concluído`. Ao contrário da maioria dos erros do LaTeX, não há nenhum PDF e o número da linha relatado frequentemente aponta para o final do arquivo, e não para o erro real.

## Por que isso acontece

Ambas as mensagens vêm do mesmo problema: o TeX começou a ler algo que deveria ser fechado e chegou ao final da entrada antes da chegada do token de fechamento. Quando você escreve `\textbf{`, o TeX coleta tudo até o `}` correspondente como argumento. Se essa chave nunca aparecer, o TeX continuará engolindo o texto, através de parágrafos e seções, até que o arquivo acabe. "Argumento em fuga" é o TeX mostrando o que ele engoliu. “Parada de emergência” é a desistência do TeX porque não pode continuar sem a peça que faltava. Um `\end{document}` ausente, um ambiente não fechado ou uma `\input` de um arquivo que não existe produz o mesmo estado terminal.

## Como encontrar a localização real

Não confie no número da linha; marca onde o TeX ficou sem entrada, não onde o desequilíbrio começou. Em vez disso, leia o bloco `Runaway argument?` no log. As primeiras palavras do texto engolido informam onde no documento a fuga começou, e a linha `Arquivo finalizado durante a verificação do uso de ...` nomeia o comando cujo argumento nunca foi fechado. Procure esse comando próximo ao texto citado e conte seus colchetes.

Se o log não for útil, pesquise binariamente o documento. Comente a segunda metade do corpo (ou envolva-a em `\iffalse ... \fi`) e recompile. Se o erro desaparecer, o problema está na metade que você removeu; continue reduzindo pela metade até que o parágrafo defeituoso seja isolado. Isso parece grosseiro, mas em um documento grande ele encontra uma única chave faltando em um punhado de compilações.

## Os suspeitos do costume

Verifique se há `{` sem `}` próximo a negrito, itálico, notas de rodapé e legendas, uma vez que esses comandos usam chaves de argumento que você digita manualmente. Verifique se cada `\begin{...}` tem um `\end{...}` correspondente com o mesmo nome de ambiente. Confirme se o arquivo termina com `\end{document}` e se cada `\input` e `\include` nomeia um arquivo que existe naquele caminho. Os editores ajudam aqui: Oleafly destaca colchetes e pares de ambiente correspondentes conforme você digita, o que captura a maioria deles antes que o compilador os veja.