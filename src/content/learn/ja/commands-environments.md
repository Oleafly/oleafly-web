---

title: "コマンドか環境か？"
description: "マクロは引数を取ります。環境は領域をラップします。"
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Commands vs environments'
  questions:
    - prompt: 'What makes something a LaTeX command?'
      choices:
        - 'It always wraps many pages'
        - 'A backslash name that substitutes something in place, often with brace arguments'
        - 'It has to live in a .bib file'
        - 'It can''t take optional arguments'
      answer: 'B'
      level: beginner
    - prompt: 'What defines an environment?'
      choices:
        - 'A matching \begin{name} ... \end{name} pair around a region'
        - 'Any bold text'
        - 'Only math mode'
        - 'A single optional star'
      answer: 'A'
      level: beginner
    - prompt: 'Which of these is an environment?'
      choices:
        - '\textbf{hello}'
        - '\begin{center} ... \end{center}'
        - '\cite{knuth84}'
        - '\frac{a}{b}'
      answer: 'B'
      level: beginner
    - prompt: 'What does \begin{itemize} ended by \end{document} usually mean?'
      choices:
        - 'itemize is banned in article'
        - 'You opened an environment and never closed it'
        - 'You need more RAM'
        - 'The bibliography is empty'
      answer: 'B'
      level: beginner
    - prompt: 'Why write \LaTeX{} is fun instead of \LaTeX is fun?'
      choices:
        - 'Every command needs braces'
        - 'Many commands eat the following space; empty braces keep the space'
        - 'It turns hyperref on'
        - 'It forces math mode'
      answer: 'B'
      level: intermediate
---

# コマンドか環境か?

LaTeX でプレーン テキスト以外に入力するものはすべて、コマンドまたは環境という 2 つの形式のいずれかになります。最初のエラー メッセージが表示されるまでは、この区別は学術的に聞こえます。 LaTeX に関する苦情の半分は、一方が他方に属する場所で使用されていることに関するものです。どの図形を見ているのかを理解することを学ぶと、ドキュメントとエラーの両方が読みやすくなります。

## コマンド

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

コマンドはバックスラッシュの後に名前が続き、その文字が出現した時点で置換を実行します。 `\textbf{argument}` は 1 つの引数を中括弧で囲み、太字でタイプセットします。効果は中括弧で始まり中括弧で終わります。コマンドは複数の中括弧引数を取ることができ、`\documentclass[11pt]{article}` のように、コマンドの前に角括弧で囲まれたオプションの引数も受け入れることができます。

最初の 2 行は、コマンドが作成できるものであることを示しています。 `\newcommand{\foo}{bar}` は、`\foo` という名前の新しいコマンドを定義し、その展開はテキスト `bar` になります。それ以降、どこにでも `\foo` を入力すると `bar` が生成されます。これは [カスタム マクロ](/learn/custom-commands/) の背後にあるメカニズムであり、パッケージの動作方法でもあります。パッケージは主にコマンド定義のファイルです。

早い段階で知っておく価値がある癖が 1 つあります。`\LaTeX` のようなコマンドはその後のスペースを飲み込むので、`\LaTeX is fun` は単語をまとめて出力します。スペースを確保するために「\LaTeX{} は楽しいです」または「\LaTeX\ です」と書いてください。

## 環境

```latex
\begin{center}
 Centered block
\end{center}
```

環境は、一致する `\begin{...}` と `\end{...}` のペアの間のドキュメントの領域をラップし、その動作を内部のすべてに適用します。ここで、「center」環境はブロックの各行を中央に配置します。環境は、開いたときと逆の順序で閉じることを条件として入れ子にすることができ、引数も受け取ることができます。 `\begin{tabular}{ll}` はテーブルを開き、それに列の仕様を渡します。

環境はバランスをとる必要があるため、独特の方法で失敗します。 `\begin{itemize} completed by \end{document}` などのエラーは、環境が開かれていて閉じられていないことを意味します。欠落している `\end` を見つけます。エラー名の行を見つめないでください。

## 経験則

明確な開始と終了を持つ領域をラップする場合、それはおそらく環境です。ちょっとした交代や切り替えであれば、それは命令だ。 2 つの形状は重なっています。すべての環境 `foo` は内部でコマンド ペア `\foo` と `\endfoo` として実装されています。よく遭遇するコマンドと環境のツアーについては、[すべてのコマンドの説明](/learn/every-command-explained/) を参照するか、[ライブ プレイグラウンド](/live/) で両方のシェイプを試してください。