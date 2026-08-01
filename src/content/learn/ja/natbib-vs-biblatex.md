---

title: "natbib 習慣と biblatex コマンド"
description: "括弧内および本文の引用、およびそれらを置き換える名前。"
category: "cite-your-sources"
order: 8
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# natbib 習慣と biblatex コマンド

著者年の引用には 2 種類の cite コマンドが必要です。 「Knuth (1984) は読み書き可能なプログラミングを導入しました」のように、著者が文章の一部である場合もあります。 「読み書き可能なプログラミングにはコードと散文が混在する (Knuth, 1984)」のように、引用が括弧付きの余談である場合もあります。単純な `\cite` ではその区別ができません。これが `natbib` パッケージが存在する理由であり、biblatex が同じアイデアに対して独自の名前セットを提供している理由です。一方を学習し、もう一方を使用するテンプレートを渡された場合、このページが変換表になります。

## natbib コマンド

```latex
\usepackage{natbib}
\citet{knuth84}  % Knuth (1984)
\citep{knuth84}  % (Knuth, 1984)
\citep*{knuth84} % (Knuth, Lamport, and Mittelbach, 1984): full author list
```

ニーモニックでは、`\citet` は文の一部として読み取られる *テキスト* 引用であり、一方 `\citep` は括弧で囲まれた *括弧付き* 引用です。星付きのバリエーションでは、「他」の代わりに完全な著者リストが印刷されます。これは、初めて作品を引用するときに必要になる場合があります。 natbib は、名前のみの `\citeauthor`、年のみの `\citeyear`、およびページ番号のオプションの引数 (`\citep[p.~42]{knuth84}` のように) も提供します。 natbib はプリプロセッサ時代のパッケージです。古典的な BibTeX と、`plainnat` や `apalike` などの互換性のある `.bst` スタイルで動作します。

## biblatex に相当するもの

biblatex は、異なる名前で同じ分野をカバーしています。 `\textcite{knuth84}` はテキスト形式「Knuth (1984)」を生成し、`\parencite{knuth84}` は括弧付きの「(Knuth, 1984)」を生成し、プレーンな `\cite{knuth84}` は読み込まれたスタイルに応じて正確な外観が異なる裸の引用を生成します。残りの部分にも直接類似したものがあります: `\citeauthor`、`\citeyear`、およびページ番号などの前注と後注、`\parencite[see][p.~42]{knuth84}` と書かれています。筋肉の記憶が問題である場合、biblatex には `\citet` と `\citep` をエイリアスとして定義する `natbib=true` パッケージ オプションもあります。これにより、移行がほとんど苦痛なく行われます。

## natbib から biblatex へのドキュメントの移行

`.bib` ファイルはまったく変更する必要がありません。両方のシステムが同じデータベースを読み取ります。移行はプリアンブルとビルドのみに影響します。 `\usepackage{natbib}` と `\bibliographystyle` 行を削除してから、`\usepackage[backend=biber,style=authoryear]{biblatex}` をロードし、`\addbibresource{refs.bib}` でデータベースをポイントします。文書末尾の `\bibliography{refs}` を `\printbibliography` に置き換えます。最後に、ビルドが「bibtex」ではなく「biber」を実行していることを確認します。これは、biblatex はデータを別の形式で保存し、古いバックエンドは黙って何も生成しないためです。本文に触れたくない場合は、互換性オプションを使用して natbib コマンド名を保持し、プリアンブルのみを変更します。

## どれを選ぶか

ジャーナル テンプレートがすでに natbib をロードしている場合は、そのまま使用してください。クラスファイルと戦うことに価値があることはほとんどありません。新しいドキュメントを選択した場合、biblatex はより柔軟で、Unicode をより適切に処理します。より広範な比較は [Classic BibTeX または biblatex](/learn/bibtex-vs-biblatex/) にあり、その後のスタイルの切り替えについては [数値、著者年、雑誌スタイル](/learn/change-citation-style/) で説明されています。