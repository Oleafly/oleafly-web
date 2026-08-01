---

title: "番号が付けられた見出し"
description: "段落のセクション、スター付きフォーム、secnum Depth。"
category: "paper-bones"
order: 2
level: "beginner"
tags: ["structure"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Sections check'
  questions:
    - prompt: 'What does \section{Introduction} mainly do?'
      choices:
        - 'Only bold the next paragraph'
        - 'Print a numbered heading and register it for the TOC / PDF outline'
        - 'Start a new PDF file'
        - 'Insert a citation'
      answer: 'B'
      level: beginner
    - prompt: 'How do you get an unnumbered section heading?'
      choices:
        - '\section*{...}'
        - '\section[none]{...}'
        - '\unnumber{\section{...}}'
        - 'Just write \textbf{...}'
      answer: 'A'
      level: beginner
    - prompt: 'Why use real heading commands instead of hand-bolded lines?'
      choices:
        - 'Bold is illegal in LaTeX'
        - 'Headings drive numbering, the TOC, and navigation. Fake bold doesn''t.'
        - 'Manual bold compiles faster'
        - 'Sections can''t hold math'
      answer: 'B'
      level: beginner
    - prompt: 'What''s the usual next level under \section?'
      choices:
        - '\chapter (even in article)'
        - '\subsection'
        - '\maketitle'
        - '\bibliography'
      answer: 'B'
      level: beginner
---

# 番号が付けられた見出し

ワードプロセッサでは、見出しに手動で番号を付け、移動するたびに手動で番号を付け直します。 LaTeX はそれを許可しません。各見出しがセクション、サブセクション、または章であることを宣言すると、番号付けが自動的に行われます。ドキュメントの中央に新しいセクションを挿入し、次回のコンパイル時に番号が付け直される以降のすべてを、そのセクションを指すすべての相互参照と目次エントリとともに挿入します。

## 階層

```latex
\part{...} % book
\chapter{...} % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
```

これらのコマンドは固定ラダーを形成します。 `\section` は `article` クラスの日常の主力であり、その下に `\subsection` と `\subsubsection` がネストされています。 `\chapter` は `report` クラスと `book` クラスにのみ存在します。そのため、論文の章を記事テンプレートに貼り付けると、制御シーケンスが定義されていないため失敗します。 `\part` は章の上にあり、長い本以外ではまれです。 `\paragraph` は奇妙なものです。これは、単独の行に見出しを作成するのではなく、次のテキストと同じ行に太字の見出しを生成します。これには、ほとんどの人が初めて驚きます。

各コマンドは、中括弧で囲まれた見出しテキストを取得し、クラスが選択したフォントとサイズで印刷し、番号を付けて、`\tableofcontents` が後で見つけられるように記録します。インラインで見出しのスタイルを設定することはありません。異なる見出しフォントが必要な場合は、プリアンブルで文書全体の決定が行われます。

## 数値を抑制する

スター付きフォームでは数字を省略します: `\section*{Acknowledgments}`。また、スターは見出しを目次や番号付けシーケンスから完全に外します。そのため、その後のセクションは、あたかもスター付きセクションが存在しないかのように続きます。これはまさに、短い論文の謝辞、序文、または独立した結論に必要なものです。スター付きセクションが目次に引き続き表示される場合は、[目次レッスン](/learn/table-of-contents/) で説明されている 1 行の修正があります。

## 番号付けの深さの制御

```latex
\setcounter{secnumdepth}{2}
\setcounter{tocdepth}{2}
```

`secnum Depth` は、番号付けの深さを決定します。 「article」では、セクションはレベル 1、サブセクションはレベル 2、サブサブセクションはレベル 3 であるため、カウンタを 2 に設定するとセクションとサブセクションに番号が付けられますが、サブサブセクションの見出しには書式を維持したまま番号が付けられないままになります。 `toc Depth` は目次の考え方と同じです。ページ上で番号が付けられている内容とは関係なく、目次リストの深さを制御します。両方の行はプリアンブルに属します。

よくある間違いは、レベルをスキップすることです。たとえば、小さい見出しが好きだからという理由で、`\section` から直接 `\subsubsection` にジャンプしてしまいます。番号付けはまだ機能しますが、「1.0.1」のような奇妙な結果が生成され、読者は構造を見失ってしまいます。意味を考慮して見出しレベルを選択し、外観はクラスに処理させます。ドキュメントのスケルトンがどのように組み合わされているかがわからない場合は、[ドキュメント スケルトン レッスン](/learn/document-skeleton/) で説明します。