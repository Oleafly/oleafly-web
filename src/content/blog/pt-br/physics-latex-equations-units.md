---

title: "Teses de física: equações, unidades e sanidade de vários arquivos"
description: "Notação, siunitx, projetos de vários capítulos, armadilhas de diário de duas colunas e hábitos de compilação offline para estudantes de física e astronomia."
date: 2026-06-20
tags: [physics, thesis, math]
---

Manuscritos de física carregam mais matemática por página do que a maioria das áreas. Isso é bom
até que um capítulo incompleto quebre toda a compilação porque um rótulo foi movido,
ou até que cada co-autor invente uma convenção diferente de vetor em negrito.

Esta é uma configuração prática para capítulos de mestrado/doutorado, notas de colaboração e periódicos.
envios que ainda desejam duas colunas.

## Vários arquivos desde o início

Mesmo uma tese curta se beneficia de um arquivo raiz e o capítulo inclui:

```latex
\documentclass{report} % or the university class
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

Use `\includeonly{chapters/methods}` enquanto você rascunha para não reconstruir
três capítulos para corrigir uma equação. Detalhes:
[um arquivo raiz, muitos capítulos](/learn/split-chapter-files/).

Mantenha as figuras em `figures/ch2/` e nomeie as equações com rótulos sensíveis ao capítulo
(`eq:ch2-hamiltonian`) para que as mesclagens não colidam.

## Unidades não são texto

Escreva `$v = 3.0\,\mathrm{m\,s^{-1}}$` manualmente, se necessário, ou carregue `siunitx`
e use `\qty{3.0}{m.s^{-1}}`. Os periódicos diferem quanto ao espaçamento e espaços finos; escolher
um caminho de pacote e cumpra-o. Estilos mistos parecem dois autores que nunca
conheci.

Para tabelas de valores, os tipos de coluna `siunitx` alinham decimais e mantêm a unidade
cabeçalhos consistentes. Não misture `m/s` e `ms^{-1}` no mesmo papel sem
razão declarada nos métodos.

## Dirac, vetores e convenções em negrito

Grupos quânticos e de matéria condensada geralmente precisam da notação de Dirac. Pacotes como
`física` ou macros dedicadas para `\ket`, `\bra`, `\braket` batem ad-hoc
combinações de ângulos. Grupos de mecânica clássica discutem sobre negrito versus flecha
vetores. Documente a convenção no preâmbulo e recuse exceções ad hoc
meio do capítulo.

Consulte [notação Dirac](/learn/physics-braket/) e [bold math](/learn/bold-math/).

Defina operadores uma vez (`\DeclareMathOperator`) para que operadores diferenciais e
funções nomeadas não variam na fonte.

## Numeração e referências cruzadas

Equações numéricas que você citará; deixe o resto sem numeração. Uma página de
`(1)(2)(3)...` é mais difícil de ler do que uma narrativa curta com duas linhas marcadas.
Use `\eqref` para equações e rótulos estáveis. Verificação de referência em todo o projeto
captura um rótulo excluído antes do orientador.

Teoremas e lemas (se você usá-los) devem compartilhar um esquema de numeração claro com
o resto do modelo de departamento. Veja também
[teoremas e provas](/learn/theorems-proofs/).

## Armadilhas de diário de duas colunas

APS, IOP e classes semelhantes alteram o comportamento de flutuação. Uma figura que parecia bem
no `artigo` pode recusar-se a ficar ao lado do parágrafo que o cita. Compilar
contra a classe real mais cedo, não no fim de semana antes da finalização.

Padrões que ajudam:

- largura da figura em torno de `0,45\textwidth` ou `\columnwidth` em duas colunas
- figuras largas como `figura*` (geralmente apenas no topo da página)
- derivações longas em `multline` / `split`, ou movidas para um apêndice

Não reduza a fonte da equação até que fique ilegível. Os revisores notam.

## Figuras: gráficos e esquemas

Exporte gráficos como PDF de matplotlib/gnuplot/Root quando puder. PNGs rasterizados são
para fotografias e imagens de detector, com dpi suficiente. Os esquemas podem ser TikZ ou
arte vetorial externa; mantenha a fonte no repositório. Cortar espaços em branco antes
`\includegraphics`.

## Offline quando a rede do laboratório morre

Linhas de luz e salas limpas não são conhecidas por terem Wi-Fi estável.
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) envia o
compiladores e mantém o SyncTeX, o espaço de trabalho do PDF e a visualização matemática local. Cada
projeto é Git real com pontos de verificação automáticos, então uma edição de equação ruim é uma delas
restaurar. O PDF ainda é compilado quando um editor do navegador não carrega.

Você pode montar uma pilha offline semelhante com TeX Live, um visualizador de PDF e Git por
mão. De qualquer forma, a tese não deveria depender de um portal cativo para recompilar
capítulo três.

## Colaboração

Próprios capítulos por autor, quando possível. Compartilhe uma folha de anotações. Execute o documento completo
compila semanalmente para que as referências entre capítulos falhem antecipadamente. Git remoto privado para
resultados não publicados; público somente quando a política de colaboração permitir.

## Apêndices e material suplementar

Derivações longas e gráficos extras devem ser incluídos em um apêndice ou suplemento separado
PDF quando o diário tem duas colunas e é limitado por páginas. Referência cruzada explicitamente
("ver Apêndice B") com rótulos reais. Não presuma que o árbitro abrirá um zip
de figuras soltas sem legendas.

## Quando o orientador edita no papel

Aplique a marcação à fonte TeX no mesmo dia, se puder. As pilhas de papel ficam velhas.
Se dois orientadores marcarem notações conflitantes, atualize a folha de preâmbulo e envie uma mensagem
PDF com notação de uma página para que o argumento não seja litigado novamente a cada rascunho.

## Pré-envio

Folha de notação completa, vetores e bras/kets consistentes, unidades através de um sistema
(`siunitx` ou um estilo manual acordado). Os capítulos devem incluir de forma clara com
resolução `\ref`/`\eqref`. Compile o diário real ou a aula de tese sem fonte
surpresas. As figuras atendem às regras de dpi e cores; as legendas são independentes. Arquivo
fonte e PDF com um hash de commit para a versão enviada.

Escrever física já é bastante difícil. O conjunto de ferramentas deve continuar enfadonho.