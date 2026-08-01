---

title: "読みやすい積み上げ比率"
description: "frac、dfrac、tfrac、および amsmath による連分数。"
category: "equation-craft"
order: 2
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Fractions check'
  questions:
    - prompt: 'What does \frac{a}{b} produce?'
      choices:
        - 'A footnote labeled a/b'
        - 'A stacked fraction: a on top, b below'
        - 'Bold a over italic b'
        - 'A two-column table'
      answer: 'B'
      level: beginner
    - prompt: 'How does \frac size change inline vs display?'
      choices:
        - 'Same size always'
        - 'Smaller and tighter inline; fuller size in display math'
        - 'Always huge inline'
        - 'It only works in display'
      answer: 'B'
      level: beginner
    - prompt: 'When would you reach for \dfrac?'
      choices:
        - 'To force a full-size (display-style) fraction even in a sentence'
        - 'To draw a chemical diagram'
        - 'To start a chapter'
        - 'To turn amsmath off'
      answer: 'A'
      hint: 'The d is for display style.'
      explanation: 'Use it sparingly in a sentence. Tall fractions push the line spacing around.'
      level: intermediate
    - prompt: 'Why use \cfrac for continued fractions?'
      choices:
        - 'It''s shorter to type than \frac'
        - 'Nested \frac gets tiny each level; \cfrac keeps each level readable'
        - 'It works outside math mode'
        - 'It numbers equations for you'
      answer: 'B'
      level: intermediate
    - prompt: 'If \dfrac is undefined, what''s the usual fix?'
      choices:
        - 'Buy a commercial font'
        - 'Load amsmath in the preamble'
        - 'Switch to \documentclass{book}'
        - 'Delete every dollar sign'
      answer: 'B'
      level: beginner
---

# 読みやすい積み上げ比率

まず第一に、LaTeX の出力は明らかにワード プロセッサを上回るのが分数です。分子と分母を実際に積み上げ、それらの間に規則があり、周囲の数学に適合するサイズに設定されます。中心となるコマンドは「\frac」です。重要なのは、そのサイズがコンテキストに応じてどのように変化するか、そして自動選択によって可読性が損なわれた場合にそれをオーバーライドする方法です。

## frac、dfrac、tfrac

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

`\frac{a}{b}` は 2 つの中括弧付き引数 (最初に分子、2 番目に分母) を受け取り、それらを水平罫線の上に積み重ねてタイプセットします。そのサイズは状況に依存します。表示数学 (`\[ ... \]` または `equation` 環境内) では、分数はフルサイズに設定されます。インライン計算 (`$ ... $` 内) では、より小さくコンパクトに設定されるため、段落の行が強制的に分離されることはありません。

場合によっては、それをオーバーライドしたいことがあります。 `amsmath` の `\dfrac` は、文の途中であっても表示スタイルを強制的にフルサイズの積み上げ分数にします。インラインの長い分数を使用すると周囲の行間隔が広がるため、使用は慎重に行ってください。 `\tfrac` はその逆です。表示数学でも小さなテキスト スタイルを強制します。これは、フルサイズのスタックでは注目が集まりすぎる、大きな式の前の 2 分の 1 などの単純な係数に便利です。

どちらの引数も、他の分数を含む任意の計算を保持できます。`\frac{1}{1 + \frac{1}{x}}` ネストがあり、LaTeX は内側の分数を自動的に縮小します。ただし、ネストが深くなった場合には、より優れたツールがあります。

## 連分数

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

入れ子になった `\frac` はレベルごとに縮小するため、連分数の 3 階までに数字がかろうじて判読できるようになります。同じく `amsmath` からの `\cfrac` は、すべてのレベルをフル表示サイズに保ち、分子を整列させます。これは、連分数をタイプセットするための一般的な方法です。オプションの位置 `\cfrac[l]{1}{...}` を渡すと、分子を中央ではなく左に寄せることができます。

## 実際の判断

`\dfrac`、`\tfrac`、および `\cfrac` のすべてでは、プリアンブルに `\usepackage{amsmath}` が必要です。プレーンな `\frac` はそれなしでも機能します。 `\dfrac` で「未定義の制御シーケンス」が表示された場合は、パッケージ行が欠落しています。

インラインテキストの場合、単純にスラッシュ形式の方が積み上げ分数よりも読みやすい場合があります。`(a/b)` または `a/b` と書くと行の高さが均一に保たれ、単純な比率でも読みやすくなります。経験則としては、垂直方向にスペースがある場合は表示数学で分数を積み重ね、分数が文の要点でない限りインラインにスラッシュを使用することを推奨します。 [ライブ プレイグラウンド](/live/) に双方向で段落を入力し、比較します。行間の違いはすぐにわかります。 `$` や `\[` などの数学区切り文字にまだ慣れていない場合は、[数学モードの基本](/learn/math-mode/) から始めてください。