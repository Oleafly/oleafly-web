---

title: "文の中に（または単独で）含まれる数学"
description: "インライン計算、表示計算、数式環境、および番号付けが価値のある場合。"
category: "equation-craft"
order: 1
level: "beginner"
tags: ["math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Math mode check'
  questions:
    - prompt: 'What''s the real difference between inline math ($...$) and display math (\[ ... \])?'
      choices:
        - 'Inline is for Greek letters; display is only for fractions.'
        - 'Inline sits in a sentence; display is centered on its own line.'
        - 'Inline is for the article class; display is for books.'
        - 'You need display math whenever a formula has an exponent.'
      answer: 'B'
      hint: 'Where does the formula sit on the page?'
      explanation: 'Inline math stays in the paragraph. Display math gets its own centered line (and can be numbered).'
      level: beginner
      tags: [math, delimiters]
    - prompt: 'For unnumbered display math today, which form should you use?'
      choices:
        - '$$ ... $$'
        - '\[ ... \]'
        - '\begin{center} ... \end{center}'
        - '\textbf{...}'
      answer: 'B'
      explanation: 'Prefer \[ ... \]. The old $$ ... $$ form is plain TeX and can mess up vertical spacing a bit.'
      level: beginner
    - prompt: 'How do you name a numbered equation so you can point back to it later?'
      choices:
        - 'Put the equation under a section with that name.'
        - 'Add \label{...} inside the equation environment.'
        - 'Type the equation number by hand in the source.'
        - 'Load graphicx and name an image.'
      answer: 'B'
      explanation: '\label stores the number. After another compile, \ref or \eqref prints it.'
      level: beginner
    - prompt: 'Why do most technical papers load amsmath (often with amssymb and amsfonts)?'
      choices:
        - 'Without it, LaTeX won''t print any text.'
        - 'You get the common math environments, symbols, and helpers like \eqref.'
        - 'It replaces the document class.'
        - 'It turns off dollar-sign math mode.'
      answer: 'B'
      level: beginner
    - prompt: 'What happens if you type something like DNA_seq in ordinary text mode?'
      choices:
        - 'LaTeX ignores the underscore.'
        - 'You get a Missing $ inserted error: math syntax showed up outside math mode.'
        - 'The PDF never builds, no recovery at all.'
        - 'It becomes a hyperlink.'
      answer: 'B'
      explanation: 'Underscore and caret are for math. For a real underscore write \_. For a subscript, wrap the math in $...$.'
      level: beginner
---

# 文内にある (または単独で) 数学

LaTeX は、数学を独自のフォントと間隔ルールを持つ別個のモードとして扱います。すべての変数、式、記号は、文中の単独の n であっても、完全な方程式であっても、数学モード内に存在する必要があります。 2 種類あります。1 つは段落内のインライン数学フローで、もう 1 つは数値の有無にかかわらず、独自の行の中央に配置される表示数学です。

```latex
Inline: $E=mc^2$ or \(E=mc^2\)

Display (unnumbered):
\[
 \int_0^1 x^2 \, dx = \frac{1}{3}
\]

Display (numbered):
\begin{equation}
 \label{eq:energy}
 E = mc^2
\end{equation}
```

## インライン計算

`$E=mc^2$` のように、ドル記号のペアは、行内のテキスト サイズで数式を設定します。文字は数学斜体で表示され、等号の周囲のスペースが自動的に処理されます。 `\(E=mc^2\)` は同等の LaTeX ネイティブ形式です。これは同一の出力を生成しますが、開始区切り文字と終了区切り文字が異なるため、閉じられていない区切り文字の方が明確なエラー メッセージが表示されます。単一の変数名に対してもインライン計算を使用して、散文内の n が方程式内の n と一致するようにします。

## 計算式を表示する

`\[ ... \]` は、数式を数値なしで独自の中心線上に配置します。これは、二度と参照することのない 1 回限りの方程式に最適です。古い `$$ ... $$` 形式は避けてください。これは LaTeX ではなくプレーン TeX であり、場合によっては垂直方向の間隔がわずかに間違っています。

## 番号付きの方程式

「equation」環境では、マージンに数字が付いた数式が表示されます。 `\label{eq:energy}` はその数値に名前を付け、他の場所には `Equation~\ref{eq:energy}` を書くか、`amsmath` がロードされている状態で `\eqref{eq:energy}` と書き、括弧自体を追加します。 「~」は改行しないスペースなので、単語と数字は 1 行に残ります。参照は 2 回目のコンパイルで解決されます。出力に「??」が表示される場合は、[数字の代わりに疑問符](/learn/equations-show-qq/) を参照してください。

## ロードするパッケージ

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

ほぼすべての数学文書はこれら 3 つをロードします。 `amsmath` は、`align` や `\eqref` など、これらのレッスンのほとんどが想定する環境とコマンドを提供します。 `amssymb` と `amsfonts` は、記号フォントと `\mathbb` などの追加のアルファベットを追加します。この行を前文に一度入れて、それは忘れてください。

典型的な初心者エラーは、数学モード外の数学構文です。プレーン テキスト内のアンダースコアは、「Missing $inserted」でコンパイルを停止します。これには、[独自の教訓](/learn/missing-dollar/) があります。 2 つのモードの感触を得るには、[ライブ プレイグラウンド](/live/) の `$x_i$` インラインと同じ数式を `\[ ... \]` 内に含む文を入力し、それぞれがページ上でどのように表示されるかを比較してください。