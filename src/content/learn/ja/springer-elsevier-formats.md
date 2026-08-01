---

title: "Springer、Elsevier、および LNCS 形式"
description: "llncs、Springer Nature ジャーナル、および elsarticle: 単一列クラスとカメラ対応ソース。"
category: "venue-formats"
order: 4
level: "intermediate"
tags: ["venues", "publishers"]
featured: false
updated: 2026-07-25
---

# Springer、Elsevier、および LNCS 形式

IEEE および ACM エコシステムの外では、Springer (Springer Nature を含む) と Elsevier の 2 つの出版社が独占しています。これらのクラスは 2 列の会議スタイルよりも単純に見えますが、これは仕様によるものです。出版社は最終版を植字します。

## LNCS: 訴訟手続きの主力

カンファレンスがコンピューター サイエンスの講義ノート (またはその兄弟の LNAI および LNBI) で公開されている場合は、`llncs` に次のように記述します。

```latex
\documentclass{llncs}
\usepackage{graphicx}

\title{Contribution Title}
\author{Ada Lovelace\inst{1} \and Charles Babbage\inst{2}}
\institute{University of London \and University of Cambridge}
```

LNCS の論文は 1 列で、著者と研究機関をマッピングするために「\inst{}」 上付き文字を使用し、デフォルトのページ予算が厳しいことで有名です (参考文献を含めて 12 ～ 16 ページであることがよくあります)。このクラスは、デフォルトではすべての TeX ディストリビューションに含まれているわけではありません。 Springer の LNCS ページからオーサー キットをダウンロードします。その参考文献スタイルは `splncs04` です。

```latex
\bibliographystyle{splncs04}
\bibliography{references}
```

## シュプリンガー・ネイチャー誌

Springer ジャーナルは歴史的に `svjour3` を使用していましたが、ジャーナル ファミリごとのスタイル オプション (`sn-mathphys-num`、`sn-basic` など) を備えた新しい `sn-jnl` クラスに移行しています。ジャーナルの「投稿ガイドライン」ページには、正確なクラスとオプションの名前が記載されています。推測しないでください。2 つの Springer ジャーナルが異なるクラスを必要とする場合があります。

## エルゼビア: elsarticle

エルゼビアのジャーナルは 1 つのクラス「elsarticle」を共有します。

```latex
\documentclass[preprint,12pt]{elsarticle}
% later: \documentclass[final,3p,twocolumn]{elsarticle}
```

`preprint` オプションはレビュー用に広々としたダブルスペースの 1 列を提供し、`1p`、`3p`​​、または `5p` を含む `final` はジャーナルの印刷レイアウトを模倣します。参考文献のスタイルは、ジャーナルが使用するものと一致する「elsarticle-num」（番号付き）または「elsarticle-harv」（著者年）です。

## 簡単な比較

|出版社 |クラス |コラム |よだれかけスタイル |
|---|---|---|---|
|スプリンガーLNCS | `llncs` | 1つ | `splncs04` |
|シュプリンガー・ネイチャー・ジャーナル | `sn-jnl` (以前は `svjour3`) | 1つ |ジャーナルごとのオプション |
|エルゼビア | `elsarticle` | 1つ（レビュー） | `elsarticle-num` / `-harv` |

## なぜ単一列なのか?あなたは植字者ではないので

これらのクラスは、最終ページではなく、*原稿*をレンダリングします。出版社の制作チームは、受理された論文をジャーナルのハウス レイアウトに再タイプセットします。これが、ここでの「カメラ対応ソースのアップロード」が特定のことを意味する理由でもあります。つまり、PDF だけでなく、`.tex`、`.bib`、および Figure ファイルをアップロードすることで、制作側が論文を再構築してスタイルを変更できるようになります。実際的な影響:

- ソースをクリーンな状態に保ち、新しいチェックアウトからコンパイルできるようにします。絶対パスや欠落した数値はありません。
- スペースやマージンをハッキングしないでください。いずれにせよ、プロダクションはそれを取り除きます (そして、[フラグが立てられる](/learn/page-limits-without-crimes/))
- 標準パッケージを使用します。エキゾチックなものはプロダクションによって書き換えられるか、ユーザーに返送されます

これらのクラスはかなりの数のパッケージに依存しているため、最小限のインストールでは最初のコンパイル時にいくつかのパッケージがフェッチされる可能性があります。表示を拒否する場合は、[不足しているパッケージのインストール](/learn/install-missing-package/) を参照してください。テンプレートに完全なエラーがある場合は、他の [壊れたテンプレート](/learn/fix-broken-template/) と同様に優先順位を付けてください。