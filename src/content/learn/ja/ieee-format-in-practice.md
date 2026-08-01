---

title: "実際のIEEEフォーマット"
description: "IEEEtran カンファレンスおよびジャーナル モード、著者ブロック、および 2 列の注意点。"
category: "venue-formats"
order: 2
level: "intermediate"
tags: ["venues", "ieee"]
featured: false
updated: 2026-07-25
---

# 実際のIEEEフォーマット

小規模なワークショップから主力ジャーナルに至るまで、IEEE の会場は 1 つのクラス ファイル「IEEEtran」を共有します。一度学習すれば、何百もの会場がオープンします。

## 会議モードとジャーナルモード

同じクラスでも、オプションに応じて異なるレイアウトが生成されます。

```latex
% Conference paper
\documentclass[conference]{IEEEtran}

% Journal article
\documentclass[journal]{IEEEtran}
```

会議モードでは、デフォルトで 10pt タイム、2 列、ページ番号なしのクラシックな外観が得られます。ジャーナル モードでは、タイトルのレイアウトが変更され、最後に著者の略歴が追加され、間隔が微調整されます。会場が要求するモードを常に使用してください。これらは互換性がありません。 IEEE と ACM の広範な比較については、[ACM、IEEE、およびフレンズ](/learn/acm-ieee-and-friends/) を参照してください。

## IEEE の方法で作成します

会議モードには独自の作成者マークアップがあります。 `\\` や手動センタリングでこれと戦わないでください。

```latex
\author{
  \IEEEauthorblockN{Ada Lovelace}
  \IEEEauthorblockA{Analytical Engines Lab\\
  University of London\\
  ada@example.edu}
  \and
  \IEEEauthorblockN{Charles Babbage}
  \IEEEauthorblockA{Department of Mathematics\\
  University of Cambridge\\
  cb@example.edu}
}
```

`\IEEEauthorblockN` は名前を保持し、`\IEEEauthorblockA` は所属を保持し、`\and` は著者を列に区切ります。

## 2 つの列で生活する

初めての方は 2 列レイアウトでつまずきます。ルール:

|問題 |修正 |
|---|---|
|広い図または表 | `figure*` / `table*` を使用すると、ページの先頭に表示されます。
|長い方程式がオーバーフローします。それを打ち破り、[1 列または 2](/learn/one-column-or-two/) の 2 列戦略を参照してください。
|最後のページの列が不均一 | `\IEEEtriggeratref` または `balance` パッケージを使用して手動でバランスを調整します。
| URL が余白にはみ出してしまいます | `\usepackage{url}` または `xurl` を使用すると、より適切に分割できます。

スター付きフロート環境は、ワイド コンテンツの場合は交渉の余地がありません。

```latex
\begin{figure*}[t]
  \centering
  \includegraphics[width=\textwidth]{pipeline}
  \caption{Full-width figures need the starred environment.}
\end{figure*}
```

`figure*` は `[h]` の配置を拒否し、常にページの先頭に移動することに注意してください。それと戦うのではなく、そのために計画を立ててください。

## 参考文献

IEEE は、独自の BibTeX スタイルで数値引用を使用します。

```latex
\bibliographystyle{IEEEtran}
\bibliography{references}
```

対応する `IEEEtran.bst` がクラスに付属しています。 `plain` や `ieeetr` を置き換えないでください。レビュー担当者は注意していますが、カメラ対応チェックリストはいずれにせよそれをキャッチします。

## 実際のテンプレートはどこで入手できますか

常に公式のソースから開始してください。ieee.org の IEEE テンプレート セレクター、またはカンファレンス独自の作成者キット ページです。カンファレンスの主催者は、テンプレートにパッチ (著作権表示、追加のフッター) を適用することがあります。そのため、会場のバージョンが一般的なコピーよりも優先されます。 Oleafly の [テンプレート ギャラリー](/templates/) には、バンドルされた Tectonic エンジンですぐにコンパイルできる IEEE スタイルのカンファレンス スターターが含まれており、公式キットを導入する前のドラフトに便利です。

## よくある注意点のチェックリスト

- pdfLaTeX 互換コードでコンパイルします。IEEEtran は fontspec よりも古いもので、クラシック エンジンを想定しています。
- 「ジオメトリ」を追加したりマージンを変更したりしないでください。クラスはそれらを正確に設定します。
- 一部のジャーナル投稿では、「\maketitle」の後に「\IEEEpeerreviewmaketitle」が必要です
- マシン上のテンプレートにエラーがある場合は、[壊れたテンプレート](/learn/fix-broken-template/) と同様に問題を切り分けます。