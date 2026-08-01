---

title: "最初のビーマーデッキ"
description: "テーマ、タイトル フレーム、概要、1 つの結果スライド。"
category: "on-stage"
order: 1
level: "intermediate"
tags: ["beamer"]
featured: true
updated: 2026-07-25
---

# 最初のビーマーデッキ

Beamer は、プレゼンテーション用の標準 LaTeX ドキュメント クラスです。文書ではページの代わりにスライドが生成され、同じ計算、同じ図、同じ文献目録コマンドなど、すでに知っているすべてのものが引き継がれます。論文著者にとって実質的な勝利は再利用です。原稿の方程式と TikZ 図は、変更せずにトークに貼り付けられます。以下は最小限だが完全なデッキです:

```latex
\documentclass{beamer}
\usetheme{Madrid}
\title{Talk Title}
\author{You}
\begin{document}
\frame{\titlepage}
\begin{frame}{Outline}
 \tableofcontents
\end{frame}
\begin{frame}{Results}
 \begin{itemize}
 \item Finding one
 \item Finding two
 \end{itemize}
\end{frame}
\end{document}
```

## ページではなくフレームです

コアユニットはフレームであり、各「フレーム」環境が 1 つのスライドになります。 `\begin{frame}{Results}` のように、中括弧で囲まれたオプションの引数は、スライドのタイトルを設定します。最初のスライドでは、短縮形の `\frame{\titlepage}` が使用されています。ここで、 `\titlepage` は、プリアンブルで `\title` と `\author` によって宣言されたメタデータをレンダリングします。 `\institute` と `\date` を追加することもでき、それらは同じレイアウトに表示されます。フレームに保持できるのは 1 ページ (およそ 128 mm x 96 mm のキャンバス) よりもはるかに少ないため、コンテンツがオーバーフローする場合は、フォントを縮小するのではなく、素材を 2 つのフレームに分割する必要があることを示しています。

## テーマと概要

`\usetheme{Madrid}` は、色、ヘッダーとフッターのバー、フレーム タイトルの描画方法など、完全なビジュアル デザインを選択します。 Beamer には数十のテーマが付属しています。 「マドリード」、「ベルリン」、および意図的にプレーンな「デフォルト」が一般的な選択であり、テーマの交換はデッキ全体のスタイルを変更する 1 行の変更です。多くのカンファレンスやラボは独自のテーマを配布しています。その場合は、スタイル ファイルをプロジェクトにドロップし、ここで名前を付けます。

アウトライン フレームは、トークのセクション構造をリストする `\tableofcontents` を呼び出します。 1 つ注意点があります。これには `\section` コマンドがリストされていますが、この最小限の例には何も含まれていないため、フレーム間に `\section{Method}` のような行を追加するまでアウトラインは空になります。 Beamer のセクションでは、スライドに見出しが印刷されません。これらは、一部のテーマが表示するアウトラインとナビゲーション要素を構造化するために存在します。

## スライドのコンテンツ

フレーム内では、`itemize` は他のドキュメントと同様に機能し、各 `\item` が箇条書きになります。スライドでは紙に比べてはるかに少ないテキストを許容できるため、項目は可能な限り 1 行に抑え、発言内容に詳細を盛り込みます。図、表、および数式はすべてフレーム内でも機能しますが、Beamer 出力はこれらのページ内プレビューではレンダリングされないため、デックをコンパイルして表示します。

The most common early mistake is verbatim content: `\verb` and code listings break inside ordinary frames because of how frames process their contents.修正は、コードを含むフレームに「\begin{frame}[fragile]」と書かれた fragile オプションです。デッキがドラフトされたら、[クリックでラインを表示](/learn/beamer-overlays/) で説明されている、ステップバイステップのリビールが次に学ぶべきツールです。