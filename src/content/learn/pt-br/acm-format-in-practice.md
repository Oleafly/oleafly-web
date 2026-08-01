---

title: "Formato ACM na prática"
description: "A classe acmart: sigconf, metadados, revisão anônima e surpresas na primeira compilação."
category: "venue-formats"
order: 3
level: "intermediate"
tags: ["venues", "acm"]
featured: false
updated: 2026-07-25
---

# Formato ACM na prática

ACM consolidou todos os seus modelos em uma classe, `acmart`, em 2017. Uma classe, muitas faces: a opção de formato decide se você receberá um artigo de conferência de duas colunas ou um artigo de periódico de uma coluna.

## Escolha sua opção de formato

```latex
% Conference proceedings (SIGCHI, SIGPLAN, most SIGs)
\documentclass[sigconf]{acmart}

% Small journal format (TOCE, TAP, ...)
\documentclass[acmsmall]{acmart}

% Large journal format (TOG, ...)
\documentclass[acmlarge]{acmart}
```

`sigconf` é o que você deseja para quase todas as conferências ACM. O CFP do local indica a opção exata; confie nisso em vez do hábito. Se você ainda está decidindo entre as famílias do local, [ACM, IEEE e amigos](/learn/acm-ieee-and-friends/) as compara.

## Os metadados são obrigatórios

Ao contrário do IEEEtran, o acmart recusa-se a parecer correto (e o editor recusa-se a aceitá-lo) sem os seus blocos de metadados:

```latex
\begin{CCSXML}
... % generated at dl.acm.org/ccs
\end{CCSXML}
\ccsdesc[500]{Software and its engineering~Compilers}

\keywords{compilers, optimization, benchmarks}
```

Os conceitos do CCS vêm de um seletor no site do ACM que gera tanto o XML quanto as linhas `\ccsdesc`. Cole-os literalmente. As palavras-chave vão em `\keywords`, não no abstrato. O bloco de formato de referência ACM (aquela caixa de citação cinza na página um) é gerado automaticamente a partir de `\acmConference`, `\acmYear` e amigos, que o editor preenche ou verifica no momento da câmera.

## Envio duplo-cego

A maioria das conferências ACM são revisadas anonimamente. Uma opção resolve isso:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

`anonymous` oculta autores e afiliações, `review` adiciona números de linha para revisores. Desligue ambos para ficar pronto para a câmera. A classe cuida da mecânica, mas o anonimato é maior que uma bandeira. Consulte [duplo-cego feito corretamente](/learn/anonymization-double-blind/).

## Citações: numeradas ou ano do autor

acmart usa natbib por baixo e suporta ambos os estilos:

| Opção | Resultado |
|---|---|
| padrão | Numerado: [3] |
| `natbib=true` + `\citestyle{acmauthoryear}` | Autor-ano: (Lovelace, 1843) |

Alguns SIGs determinam o ano do autor (historicamente CHI), outros são numerados. Mais uma vez: a PCP decide.

## Surpresas na primeira compilação

acmart está faminto por pacotes. Espere isso em uma nova configuração:

- **Fontes Libertine.** A classe carrega Linux Libertine e Biolinum mais `newtxmath`. Em uma instalação mínima do TeX, eles chegam como downloads na primeira vez que você compila. O mecanismo Tectonic incluído no Oleafly os busca automaticamente no primeiro uso, portanto a compilação inicial leva mais tempo que a segunda. Isso é normal, não é um problema.
- **Regras rígidas de flutuação.** o acmart bloqueia alguns pacotes (como `titlesec`) completamente e irá gerar erros se você carregá-los.
- **`\authorsaddresses{}`** silencia o incômodo do rodapé "endereços dos autores" em rascunhos.

Se um pacote realmente não for resolvido, a correção é a usual: [instale o pacote ausente](/learn/install-missing-package/).

## Onde conseguir

Baixe o modelo oficial nas páginas de autor do acm.org ou no site da sua conferência e mantenha o `acmart.cls` atualizado. O ACM o acelera várias vezes por ano e as verificações da câmera pronta são executadas na versão mais recente.