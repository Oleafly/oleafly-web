---

title: "Estudantes de engenharia: modelos IEEE e ACM sem dor de fim de semana"
description: "Comece a partir do arquivo de classe real, sobreviva a flutuações e equações de duas colunas, obtenha as referências corretas e faça a versão do artigo antes de prepará-lo para a câmera."
date: 2026-06-28
tags: [engineering, templates, ieee]
---

Os modelos IEEE e ACM não são decoração opcional. Eles são a submissão
formato. Começar com um zip aleatório que alguém reenviou há três anos é como
você passa a noite anterior ao prazo renomeando fontes e perseguindo
`sequência de controle indefinida` em uma classe que você nunca quis editar.

Isto é para projetos de cursos, trabalhos de design sênior e primeiras conferências
submissões.

## Comece pela aula oficial

Baixe a aula e o exemplo do site da sociedade ou da conferência para
*este ano*. Coloque o `.cls`, qualquer `.bst` e o exemplo `.tex` em seu projeto
raiz. Compile uma vez antes de escrever uma única frase original para saber o
ambiente funciona.

A [galeria de modelos](/templates/) do Oleafly e os pacotes gratuitos de instalação de aplicativos que
rastreie locais comuns (IEEE, ACM e amigos) e, em seguida, compile com o pacote
motor e pegue referências e citações quebradas no editor do projeto antes
pronto para câmera. Ainda verifique a chamada de trabalhos daquele ano: coluna
contagem, limite de páginas e mudança de estilo da bibliografia.

Se a conferência enviar uma classe modificada, use a classe deles, não uma IEEEtran genérica
da memória.

## Regras flutuantes de duas colunas

No modo de duas colunas, figuras largas usam `figure*` e muitas vezes só aparecem no
topo de uma página. Coloque o flutuador próximo à primeira referência e defina as larguras como
`\columnwidth` ou `\textwidth` de propósito. Subfiguras lado a lado precisam de cuidado
larguras ou transbordam para a margem.

```latex
\begin{figure}[t]
  \centering
  \includegraphics[width=\columnwidth]{block.pdf}
  \caption{System overview.}\label{fig:sys}
\end{figure}
```

Se um carro alegórico fugir três páginas, encolha-o ou divida os painéis antes de lutar
`[H]` por uma hora: [colocação flutuante](/learn/figure-wrong-position/).

## Equações em colunas estreitas

Derivações longas quebram em `\columnwidth`. Use `multline` ou `split`, ou mova
a derivação para um apêndice. Não reduza a fonte da equação até a linha
é ilegível; os revisores notam. Numere apenas as equações que você realmente cita.

Algoritmos pertencem a ambientes `algoritmos` / `algorítmicos` dimensionados para o
coluna, não capturas de tela de um IDE.

## Referências

Os estilos numéricos IEEE e os estilos ACM discordam nos detalhes. Utilize a bibliografia
estilize o modelo com o qual o modelo é enviado. Não invente um híbrido de autor-ano e
números entre colchetes.

Valide o `.bib` para campos ausentes antes de preparar a câmera:
[validador BibTeX](/tools/bibtex-validator/). As exportações acadêmicas são confusas; limpar
chaves (`autor:ano:palavra-chave`) e corrigir títulos que chegaram em MAIÚSCULAS.

Cite conjuntos de dados e software quando o local espera. Um DOI ausente é mais fácil
para corrigir agora do que na janela "atualização da câmera pronta" do portal.

## Limites de páginas sem crimes

Os limites de páginas são reais. Não esmague as margens abaixo do modelo, defina
`\scriptsize` para toda a seção de resultados ou oculte o texto dentro de números enormes.
Corte o conteúdo. Mova provas e gráficos extras para um suplemento ou arXiv estendido
versão se a chamada permitir. Mantenha o envio legível. Lista de verificação mais longa:
[limites de páginas sem crimes](/learn/limites de páginas-sem-crimes/).

## O controle de versão agora faz parte do relatório do laboratório

Artigos de design sênior e de conferências se beneficiam de commits após cada
compilação bem-sucedida. Um editor de pesquisa como
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) mantém o Git real
ao lado do PDF, SyncTeX e diagnóstico ao vivo para que você não envie zip
arquivos chamados `submission_really_final.zip`. Os controles remotos privados permanecem inéditos
trabalhe fora do GitHub público até que a política permita.

Marque ou envie uma mensagem com o commit exato que você carregou no portal.

## Fluxos de trabalho da equipe

Seções próprias por aluno. Uma pessoa possui o `.bib` e o arquivo de classe. Mesclar
por meio de solicitações pull se o grupo for grande o suficiente. Compile o PDF completo em um
agende para que a integração não seja só na noite anterior.

Se um colega de equipe apenas edita Word, exporte para ele e mantenha o TeX como fonte:
[coautores que falam apenas Word](/learn/collaborator-uses-word/).

## Semana de preparação para a câmera

As instruções prontas para a câmera geralmente diferem do formato de revisão, então baixe novamente
eles. Atualize o bloco de autor, financiamento e formulários de direitos autorais IEEE/ACM conforme
necessário. Recompile com as opções finais da classe (muitas vezes diferentes de
revisão). Verifique cada figura quanto a dpi e fontes; incorporar fontes no PDF se o
portal exige isso. Carregue o PDF e qualquer fonte compactada que o portal exija e, em seguida,
arquivar ambos.

## Bloco de autor e afiliações

Os blocos de autor IEEE/ACM são meticulosos: marcas de contribuição iguais, múltiplas
afiliações, graças a agências de financiamento. Copie o autor do arquivo de exemplo
marcação e substitua o texto com cuidado. Inventar sua própria pilha de `\thanks` é uma tarefa
fonte comum de caixas cheias e vírgulas faltando no PDF.

## Revisão cega

Se a chamada for duplo-cega, retire os nomes, o financiamento que identifica o laboratório e
autocitações que dizem "em nosso trabalho anterior". Reative-os para ficarem prontos para a câmera.
Mantenha uma opção de classe `cega` ou um pequeno arquivo de alternância para não editar manualmente
identidade em seis lugares.

## Resultado final

Comece pela classe oficial, respeite o layout de duas colunas e combine o
estilo de bibliografia com o qual o modelo é enviado. Versão tudo. O
o conteúdo de engenharia já é difícil o suficiente sem um modelo falsificado de 2019.