---

title: "Publicando sua primeira pré-impressão do arXiv"
description: "Endosso, categorias, limpeza de fontes, licenças e ciclo de anúncios."
category: "ship-your-paper"
order: 3
level: "intermediate"
tags: ["arxiv", "preprint", "publishing"]
featured: false
updated: 2026-07-25
---

# Publicando sua primeira pré-impressão do arXiv

Postar no arXiv torna seu trabalho público, citável e com carimbo de data/hora. O processo tem algumas peculiaridades que surpreendem a todos na primeira vez. Se você ainda não leu [o que é arXiv](/learn/what-is-arxiv/), comece por aí e depois volte.

## Endosso: o segurança na porta

Novos inscritos na maioria das categorias precisam do endosso de um autor arXiv estabelecido. Se sua conta usa um e-mail acadêmico e você tem coautores com histórico de arXiv, isso geralmente é automático ou rápido. Caso contrário, pergunte ao seu orientador ou coautor; o sistema fornece um código de endosso para enviá-los. Resolva isso dias antes de planejar a postagem, não na noite seguinte.

## Escolha suas categorias

arXiv é organizado em categorias moderadas como `cs.LG` (aprendizado de máquina), `cs.CL` (computação e linguagem), `math.OC` (otimização), `stat.ML`. Você escolhe uma categoria primária e, opcionalmente, algumas secundárias. Procure onde estão os artigos que você cita e siga-os. A categoria principal determina qual lista de discussão anuncia seu artigo, portanto decide quem o verá primeiro.

## arXiv quer sua fonte, não seu PDF

Este é o grande problema. Se o seu artigo foi produzido com LaTeX, o arXiv requer a fonte LaTeX, não apenas um PDF. Seu sistema AutoTeX o compila em seus servidores, e essa compilação é o que os leitores baixam. Consequências:

- Todos os arquivos que seu artigo precisa devem estar no upload: figuras, arquivo `.bbl` (arXiv não roda BibTeX para você, então inclua o `.bbl` gerado), arquivos de estilo que não são padrão.
- Se não compilar no sistema deles, você conserta até que isso aconteça.

## Limpe sua fonte primeiro

Seus comentários são enviados com sua fonte e qualquer pessoa pode baixá-los. Aquele rascunho de nota dizendo `% TODO: esta afirmação é mesmo verdadeira?` será público. Antes de enviar:

- [] Tirar comentários. A ferramenta `arxiv-latex-cleaner` automatiza isso e também remove arquivos não utilizados.
- [] Excluir figuras não utilizadas e seções antigas
- [] Verifique nomes de arquivos embaraçosos (`final_v7_ACTUALLY_final.tex`)
- [] Compile a cópia limpa do zero uma vez

Trabalhar a partir de um projeto apoiado pelo Git ajuda aqui: no Oleafly você pode ramificar um ponto de verificação, limpar a fonte e comparar com o original para confirmar que nada de substancial foi alterado antes de exportar o ZIP.

## Licenças

arXiv pede que você escolha uma licença. A licença mínima somente arXiv é o padrão comum e mantém suas opções abertas com diários. CC BY é mais permissivo. Se o artigo for destinado a uma editora específica, verifique sua política de pré-impressão antes de escolher algo irrevogável.

## O ciclo de anúncios e seu folclore

arXiv anuncia novos artigos em lotes, em uma programação fixa de dias úteis com limite de submissão. Os artigos submetidos logo após o corte aparecem no topo da lista seguinte, e uma pequena indústria artesanal de folclore afirma que os artigos no topo da lista recebem mais atenção. Talvez. Não perca o sono por causa disso; um bom resumo é muito mais importante do que a posição na lista.

## Versões: v1, v2 e após aceitação

Sua primeira postagem é v1 e é permanente: você pode adicionar versões, mas nunca excluí-las. Publique a v2 quando você tiver melhorias reais, normalmente a versão aceita após [revisão por pares](/learn/peer-review-explained/). Após a aceitação, atualize a cópia arXiv com o conteúdo pronto para câmera (respeitando a política do editor) e adicione o DOI ou local no campo de referência do periódico. Os leitores vão agradecer por isso.