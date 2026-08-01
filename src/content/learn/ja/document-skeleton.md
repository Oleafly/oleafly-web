---

title: "再利用できるスケルトン"
description: "クラス、序文、タイトル、セクション、文献目録: ほぼすべての論文の形状。"
category: "open-the-loop"
order: 7
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Document skeleton check'
  questions:
    - prompt: 'What are the three main parts of a typical LaTeX document?'
      choices:
        - 'Abstract, figures, and appendix only'
        - 'The class line, the preamble, and the body between begin/end{document}'
        - 'Header, footer, and sidebar'
        - 'A .bib file, a style file, and a PDF'
      answer: 'B'
      level: beginner
    - prompt: 'Which class do you usually pick for a short paper or homework?'
      choices:
        - 'beamer'
        - 'article'
        - 'book'
        - 'no class at all'
      answer: 'B'
      level: beginner
    - prompt: 'Why does pasting \chapter into an article often blow up?'
      choices:
        - 'article turns off all numbering'
        - 'article has no \chapter; chapters live in report/book-style classes'
        - 'You forgot graphicx'
        - 'Chapters only work offline'
      answer: 'B'
      level: beginner
    - prompt: 'If you put real text before \begin{document}, what error do you usually see?'
      choices:
        - 'Undefined control sequence for \par'
        - 'Missing \begin{document}'
        - 'Overfull hbox'
        - 'Citation undefined'
      answer: 'B'
      explanation: 'The preamble is for setup only. It shouldn''t print body text.'
      level: beginner
    - prompt: 'What happens to text after \end{document}?'
      choices:
        - 'It becomes a second PDF page'
        - 'LaTeX ignores it'
        - 'It gets moved into the abstract'
        - 'It always fatal-errors'
      answer: 'B'
      level: beginner
---

# 再利用できるスケルトン

内容を取り除くと、ほぼすべての LaTeX ドキュメントは同じスケルトン、つまりクラス宣言、セットアップのプリアンブル、および `\begin{document}` と `\end{document}` の間の本体を持ちます。この形がわかったら、スケルトンを貼り付け、タイトルを変更し、書き込みをして新規プロジェクトを開始します。

```latex
\documentclass[11pt]{article}
% preamble: packages, macros, metadata
\title{...}
\author{...}
\begin{document}
\maketitle
% body: sections, figures, bibliography
\end{document}
```

上から下に読むと、`\documentclass[11pt]{article}` はドキュメントの種類を選択し、基本フォント サイズをオプションとして設定します。デザイン内の他のすべてはこの選択に基づいて決まります。クラス行と `\begin{document}` の間の領域は [プリアンブル](/learn/preamble-explained/) で、ここにパッケージがロードされ、`\title` や `\author` などのメタデータが保存されます。 `\begin{document}` は表示されるコンテンツの開始位置をマークし、`\maketitle` は保存されている表題欄を植字し、本文がセクション、図、そして最終的に参考文献として続きます。 `\end{document}` はドキュメントを閉じます。それ以降は何も無視され、誰かが間違った場所に貼り付けたテキストの塊が隠れてしまうことがあります。

## クラスの選択

|クラス |使用 |
| --- | --- |
| `記事` |レポート、宿題、メモ |
| `レポート` |章を含む長いレポート |
| `本` |書籍と多くの論文 |
| `ビーマー` |スライド |

このクラスは表面的なものではありません。どのコマンドが存在するかが変わります。 `article` には `\chapter` がないため、論文の章を貼り付けるとすぐに失敗します。 「report」は章を追加し、タイトルに独自のページを与えます。 「book」は両面印刷を前提としており、右側のページで章が開きます。 「beamer」はスライドのフレーム周りのすべてを再構築します。ジャーナルやカンファレンスには独自のクラスが用意されており、会場に向けて執筆する場合、そのクラスがこの決定を完全に置き換えます。

スケルトンが壊れる原因のほとんどは 2 つの間違いです。 `\begin{document}` の前にテキストを配置すると、プリアンブルは設定のみで印刷されないため、「\begin{document} が見つかりません」というエラーが発生します。また、`\end{document}` が欠落していると、コンパイラはファイルの最後で入力の終了に関する役に立たないメッセージを表示して待機したままになります。いずれかが表示された場合は、内容を疑う前に文書のフレームを確認してください。

骨格はスケールします。 4 ページのメモは本文をインラインに保ちます。 [章ファイルの分割](/learn/split-chapter-files/) に示すように、論文では各章を独自のファイルに移動し、ルートから取り込みます。周囲の枠は変わりません。