---

title: "最初の PDF をコンパイルする"
description: "LaTeX を最大限に理解するための小さな記事、1 つのコンパイル、および 3 つのアイデア。"
category: "open-the-loop"
order: 1
level: "beginner"
tags: ["basics", "compile"]
featured: true
updated: 2026-07-25
quiz:
  title: 'First document check'
  questions:
    - prompt: 'What does compiling a LaTeX file actually do?'
      choices:
        - 'Uploads your paper to a journal.'
        - 'Runs a LaTeX engine over your .tex file and writes a PDF.'
        - 'Turns Word formatting into markdown.'
        - 'Only checks grammar; layout is separate.'
      answer: 'B'
      level: beginner
    - prompt: 'What does \documentclass{article} mainly set?'
      choices:
        - 'Only the title font.'
        - 'The document type and the usual defaults for fonts, margins, and headings.'
        - 'Your bibliography style forever.'
        - 'That math mode is off.'
      answer: 'B'
      level: beginner
    - prompt: 'When do title, author, and date show up on the page?'
      choices:
        - 'As soon as you write \title{...} in the preamble.'
        - 'When you call \maketitle in the body.'
        - 'Only after bibtex runs.'
        - 'Never. Titles are only PDF metadata.'
      answer: 'B'
      explanation: '\title, \author, and \date just store values. \maketitle is what prints them.'
      level: beginner
    - prompt: 'Which three ideas cover most of day-to-day LaTeX?'
      choices:
        - 'Themes, clipart, and track changes.'
        - 'Commands (backslash + braces), environments (begin/end), and a preamble before begin{document}.'
        - 'WYSIWYG, stylesheets, and mail merge.'
        - 'HTML, CSS, and JavaScript.'
      answer: 'B'
      level: beginner
    - prompt: 'Where does visible body content start?'
      choices:
        - 'On the first line of the .tex file'
        - 'After \begin{document}'
        - 'Only inside \section{}'
        - 'After \end{document}'
      answer: 'B'
      level: beginner
---

# 最初の PDF をコンパイルする

Word または Google Docs でしか書いたことがない場合、LaTeX は習慣を 1 つ変えるように求めます。入力時にテキストの書式を設定するのではなく、文書をプレーン テキストで記述し、プログラムにタイプセットしてもらいます。そのプレーン テキストは `.tex` ファイル内にあります。これは、任意のエディタで開くことができる通常のテキスト ファイルであり、各部分が * 何か * を示す `\section{...}` のようなコマンドと、あなたの言葉が含まれています。コンパイルすると、このソースが完成した PDF になります。 LaTeX エンジンはファイルを上から下に読み取り、すべてのコマンドを解釈し、ページをレイアウトして PDF を書き込みます。出力を直接フォーマットすることはありません。ソースを編集して再度コンパイルします。

## 最小の実ドキュメント

```latex
\documentclass{article}

\title{My First Document}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
Hello, \LaTeX! Math works inline like $E = mc^2$ or on its own line:
\[
 x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\end{document}
```

上から下まで読んでください。 `\documentclass{article}` は、これがどのような種類のドキュメントであるかをエンジンに伝え、フォント、マージン、見出しスタイルの適切なデフォルトを設定します。 `\title`、`\author`、および `\date` 行にはメタデータのみが格納されます。まだ何も出力されておらず、「\today」は単にコンパイルした日の日付を意味します。 `\begin{document}` は、実際のコンテンツの開始位置をマークします。 `\maketitle` は、保存されている表題欄がページ上に表示される瞬間です。 `\section{ Introduction}` は番号付きの見出しを印刷し、後で目次で見つけられるように静かに記録します。最後の行は数学の 2 つの側面を示しています。`$...$` は文内に数式を植字しますが、`\[ ... \]` は独自の中央表示行を与えます。

## 言語を伝える 3 つのアイデア

1. コマンドはバックスラッシュで始まり、通常は中括弧で囲まれた引数を取るため、`\textbf{hello}` は「hello を太字でタイプセットする」ことを意味します。
2. 環境は `\begin{...}` と `\end{...}` の間の領域をラップし、ファイルの本文自体が 1 つの大きな `ドキュメント` 環境になります。
3. プリアンブルは `\begin{document}` より前のすべてです。ドキュメントを構成しますが、表示されるテキストは生成されません。

LaTeX の他のほとんどすべては、これら 3 つのバリエーションです。

## コンパイルしてください

[Oleafly](/docs/getting-started/) でプロジェクトを作成し、上記のソースを貼り付けてコンパイルします。 PDF はソースの横に表示され、SyncTeX がその 2 つの側面をリンクします。PDF 内のスポットをクリックすると、一致するソース行にジャンプするか、その逆を行います。プロジェクトの最初のコンパイルでは、エンジンが必要なものを取得するまでに少し時間がかかることがあります。後の実行は速くなります。

予想されることが 1 つあります。遅かれ早かれコンパイルは失敗し、エラー メッセージと行番号が表示されます。これはまったく正常であり、通常はコマンド名のタイプミス、または右中括弧の欠落を意味します。それが指す行を修正し、再度コンパイルします。

＃＃ 次

[プリアンブル、説明](/learn/preamble-explained/) に進み、セットアップ行が実際に何をするのかを確認してから、[数学モード](/learn/math-mode/) で数式を確認します。最初の実際のページを作成する間、[チートシート](/learn/cheatsheet/) を開いたままにしてください。