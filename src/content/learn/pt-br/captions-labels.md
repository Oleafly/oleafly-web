---

title: "Legendas que correspondem ao número"
description: "Coloque o rótulo após a legenda para que o número fique fixo."
category: "floats-and-ink"
order: 4
level: "beginner"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Legendas que correspondem ao número

Referências cruzadas são uma das coisas que o LaTeX faz melhor que um processador de texto. Você nunca digita "Figura 3" à mão. Em vez disso, você anexa uma etiqueta à figura e deixa o LaTeX preencher o número em todos os lugares onde ele é mencionado, para que os números permaneçam corretos, não importa o quanto você reordene, insira ou exclua. O mecanismo tem uma regra que confunde quase todo mundo pelo menos uma vez: a ordem de `\caption` e `\label` é importante.

## Por que o pedido é importante

O comando `\caption` realiza duas tarefas. Ele imprime o texto da legenda sob sua figura ou tabela e avança no contador, transformando esse número flutuante na Figura 3. O comando `\label` faz algo mais estúpido do que as pessoas esperam: ele registra qualquer número atribuído mais recentemente, seja lá o que for. Não faz ideia que está “dentro de uma figura”. Portanto o rótulo deve vir depois da legenda:

```latex
\caption{A neat diagram.}
\label{fig:neat}
```

Se você colocar `\label` antes de `\caption`, a legenda ainda não pisou o contador de figuras, então o rótulo captura o número mais recente de algum outro lugar, geralmente a seção atual. Seu texto então diz "veja a Figura 2.4" quando a figura é na verdade a Figura 7. Este é o sintoma clássico: referências que apontam para números de seção em vez de números de figura quase sempre significam um rótulo colocado muito cedo. O hábito mais seguro é escrever `\label` na linha imediatamente após `\caption`, sempre, tanto nas figuras quanto nas tabelas.

## Fazendo referência ao rótulo

No seu texto, escreva a referência assim:

```latex
Figure~\ref{fig:neat}
```

`\ref{fig:neat}` se expande para o número simples e você mesmo fornece a palavra "Figura". O `~` entre eles é um espaço inseparável, que evita que o LaTeX termine uma linha após "Figura" e comece a próxima com "3". Prefixos como `fig:`, `tab:`, `sec:` e `eq:` são pura convenção, o LaTeX não os interpreta, mas mantêm seus rótulos legíveis e evitam que uma figura e uma tabela compartilhem acidentalmente um nome.

Observe que `\pageref{fig:neat}` fornece o número da página em que a figura foi parar, útil em documentos longos onde um float pode se afastar de sua menção. Para um tour completo dos comandos de referência, consulte [todos os comandos explicados](/learn/every-command-explained/).

## Compile duas vezes e outras armadilhas

As referências são resolvidas nas execuções do compilador: a primeira passagem grava as posições dos rótulos no arquivo `.aux` e a segunda passagem as lê de volta. Até a segunda passagem, as referências são impressas como pontos de interrogação em negrito, então `??` em seu PDF geralmente significa apenas "compilar novamente", não que algo esteja quebrado. A maioria dos editores, incluindo o Oleafly, executa novamente os passes para você automaticamente. Se `??` sobreviver a compilações repetidas, o rótulo não existe. As causas prováveis ​​são um erro de digitação no nome do rótulo ou uma `\caption` que você excluiu deixando o `\label` para trás.