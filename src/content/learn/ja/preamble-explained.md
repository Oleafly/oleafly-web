---

title: "上記のすべてが始まります{document}"
description: "パッケージ、メタデータ、ロード順序: プリアンブルに含まれるものと含まれないもの。"
category: "open-the-loop"
order: 3
level: "beginner"
tags: ["basics", "preamble"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Preamble check'
  questions:
    - prompt: 'What is the preamble?'
      choices:
        - 'Everything after \end{document}'
        - 'Everything between \documentclass{...} and \begin{document}'
        - 'Only the bibliography file'
        - 'The PDF outline panel'
      answer: 'B'
      level: beginner
    - prompt: 'Does preamble material print as body text on its own?'
      choices:
        - 'Yes. Every package prints a banner page.'
        - 'No. It configures the run; visible text starts in the body.'
        - 'Only if you use article.'
        - 'Only on the second compile.'
      answer: 'B'
      level: beginner
    - prompt: 'Why is hyperref usually loaded late in the preamble?'
      choices:
        - 'Loading it earlier is illegal.'
        - 'It rewrites a lot of commands, so it wants other packages loaded first.'
        - 'It only works after \maketitle.'
        - 'Loaded early, it disables amsmath.'
      answer: 'B'
      level: intermediate
    - prompt: 'Which of these belongs in the preamble?'
      choices:
        - 'A multi-paragraph introduction'
        - '\usepackage{amsmath} and \title{...}'
        - '\section{Results}'
        - 'The main \includegraphics for a figure'
      answer: 'B'
      level: beginner
    - prompt: 'What do options like 11pt on \documentclass mostly control?'
      choices:
        - 'Journal acceptance rate'
        - 'Global defaults such as base font size (and often paper size)'
        - 'Which OS you compiled on'
        - 'How many figures you''re allowed'
      answer: 'B'
      level: beginner
---

# 上記のすべてが始まります{document}

`\documentclass{...}` と `\begin{document}` の間はすべて **プリアンブル** です。目に見えるテキストは生成されません。実行を構成します。フォント、マージン、パッケージ、カスタム コマンド、ドキュメントのメタデータはすべてここに存在します。これが、成熟した論文の前文が序文より長くなることが多い理由です。各行の動作が分かれば、コピーしたテンプレートは魔法ではなくなり、チェックリストになります。

## 解剖学

```latex
\documentclass[11pt,a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx,booktabs}
\usepackage{hyperref} % load late

\title{Title}
\author{You}
\date{\today}
```

`\documentclass` のオプションはグローバルなデフォルトを設定します。`11pt` は他のすべてのスケールの基本フォント サイズであり、`a4paper` は用紙サイズを宣言します。 2 つのエンコーディング行は歴史的な仲間です。`inputenc` はソース ファイルが UTF-8 であることをエンジンに伝え、`fontenc` はアクセント付き文字が複合文字ではなく実際のグリフになるようにフォント エンコーディングを選択します。現在の LaTeX は既に UTF-8 入力を前提としているため、新しい文書ではこれらの行が省略されていますが、これらの行は無害であり、テンプレートは互換性のためにこれらの行を保持しています。

中央のブロックは機能パッケージをロードします。 [geometry](/learn/margins-geometry/) は 1 つのオプションでマージンを設定し、`amsmath` と `amssymb` はほぼすべての技術文書に必要な数学環境と記号を提供し、`graphicx` は図の `\includegraphics` を有効にし、`booktabs` は表をプロフェッショナルに見せるルールを提供します。最後に、[hyperref](/learn/hyperlinks/) は、他の多くのパッケージの内部を再定義するため、参照と引用をクリック可能にし、意図的に最後にロードされます。

`\title`、`\author`、および `\date` 行にはメタデータのみが保存されます。本文内で `\maketitle` が実行されるまでは何も出力されません。そのため、これらはプリアンブルに含めることができます。

## 経験則

いくつかの習慣によって前文が健全に保たれます。ジョブごとに 1 つのパッケージをロードし、マージンを設定する 2 つの方法など、同じ領域をめぐって競合するパッケージの積み重ねに抵抗します。 hyperref は最後に置いてください。ただし、その後に来る必要があるクレバーレフなどの文書化された例外もいくつかあります。ドキュメント全体の選択肢を分散させるのではなく、クラス オプションに配置します。そのため、`11pt` または `twocolumn` は誰でも確認できる場所で一度宣言されます。 [カスタム マクロ](/learn/custom-commands/) が数行を超えたら、それらを `.sty` ファイルに移動して、複数のドキュメントで 1 つの定義セットを共有できるようにします。

最も役立つ規律は否定的なものです。プリアンブル行が存在する理由がわからない場合は、文書がプリアンブル行に依存する前に調べてください。コピーされたプリアンブルはデッドラインを蓄積し、デッドラインはパッケージの競合が隠れる場所です。 [ドキュメント スケルトン](/learn/document-skeleton/) および [エンジンの比較](/learn/engines-compared/) も参照してください。