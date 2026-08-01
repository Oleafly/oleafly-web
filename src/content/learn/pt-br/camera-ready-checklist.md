---

title: "Pronto para câmera sem pânico"
description: "Desanonimize, adicione financiamento, incorpore fontes e atinja o limite de páginas: a lista de verificação da versão final."
category: "ship-your-paper"
order: 5
level: "intermediate"
tags: ["camera-ready", "submission", "checklist"]
featured: false
updated: 2026-07-25
---

# Pronto para câmera sem pânico

Aceito! Depois da celebração chega um último prazo: preparar a câmera. O nome é uma relíquia de quando os editores fotografavam suas páginas para impressão. Hoje significa a versão final que vai para os anais, exatamente como os leitores a verão para sempre. Nenhum editor corrige seus erros de digitação depois disso. Essa parte é com você.

## O que muda entre o envio e a preparação para a câmera

Sua versão enviada foi ajustada para revisores. A câmera pronta é para registro permanente e várias coisas mudam:

| Artigo | Versão enviada | Pronto para câmera |
|---|---|---|
| Nomes dos autores | Oculto (duplo-cego) | Nomes reais, afiliações, e-mails |
| Agradecimentos | Omitido | Financiamento, subsídios, agradecimentos |
| Limite de páginas | Limite de revisão | Frequentemente +1 página, mas exato |
| Bloqueio de direitos autorais | Espaço reservado ou nenhum | Bloco editorial, DOI, ISBN |
| Autocitações | Terceira pessoa ("Smith et al.") | Posso dizer "nosso trabalho anterior" |
| Promessas de refutação | Prometido | Na verdade entregue |

Desanonimizar é mais do que adicionar nomes de volta. Pesquise na fonte cada lugar que você escreveu sobre sua identidade; consulte [anonimização para revisão duplo-cega](/learn/anonymization-double-blind/) para conhecer os esconderijos usuais e, em seguida, inverta todos eles.

## O limite exato de páginas, novamente

Os limites de câmera pronta são impostos pelos editores, não apenas pelos presidentes, e o conteúdo extra (bloqueio do autor, agradecimentos) ocupa espaço. Se de repente você tiver passado seis linhas, faça-o honestamente: restrinja a prosa e os números em vez de abusar dos comandos de espaçamento. As técnicas em [limites de páginas sem crimes](/learn/page-limits-without-crimes/) se aplicam duplamente aqui, porque os editores verificam a formatação.

## As fontes devem ser incorporadas

Este é aquele que morde as pessoas. Os editores executam verificações automatizadas, e o principal motivo de rejeição são as fontes não incorporadas, geralmente contrabandeadas por um PDF de figura exportado de uma ferramenta de plotagem. Verifique com `pdffonts yourpaper.pdf`: cada fonte deve dizer "emb: yes". Caso contrário, o culpado é quase sempre uma figura; reexporte-o com fontes incorporadas ou como um PDF gerado corretamente.

## A revisão final: referências primeiro

As referências são onde a entropia se concentra. Antes de fazer upload:

- [ ] Não "??" citações ou referências indefinidas no log
- [ ] Cada entrada bibliográfica tem local, ano e título corretamente colocado
- [] Nomes de autores escritos corretamente (as pessoas notam seus próprios nomes)
- [] citações somente arXiv atualizadas para versões publicadas onde existirem
- [] URLs em referências ainda resolvem

Em seguida, leia todo o artigo em voz alta uma vez. É lento e funciona.

## Peculiaridades do upload da fonte

A maioria dos editores quer seu código-fonte LaTeX, não apenas o PDF, e seus sistemas de construção são exigentes: inclua o `.bbl`, evite pacotes fora do padrão, siga o layout dos arquivos. Exporte um ZIP de origem limpo (o Oleafly faz isso em uma única etapa) e teste-compile-o do zero em uma pasta vazia antes de fazer o upload. Se ele for compilado apenas por causa de um arquivo perdido em sua máquina, o sistema do editor descobrirá.

## A lista de verificação única

- [ ] Nomes, afiliações, e-mails restaurados e corretos
- [] Agradecimentos e números de financiamento adicionados
- [] Bloqueio de direitos autorais / informações DOI coladas do e-mail do editor
- [] Limite de páginas atingido exatamente
- [] `pdffonts` mostra todas as fontes incorporadas
- [] Referências revisadas
- [] Compilações ZIP de origem limpa do zero
- [] Carregado com um dia de sobra

Então está feito, permanentemente. É hora de pensar em [apresentá-lo](/learn/present-your-paper/).