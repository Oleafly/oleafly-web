---

title: "実際の ACM フォーマット"
description: "acmart クラス: sigconf、メタデータ、匿名レビュー、および初回コンパイルのサプライズ。"
category: "venue-formats"
order: 3
level: "intermediate"
tags: ["venues", "acm"]
featured: false
updated: 2026-07-25
---

# 実際の ACM フォーマット

ACM は、2017 年にすべてのテンプレートを 1 つのクラス「acmart」に統合しました。1 つのクラスに多くの顔: フォーマット オプションにより、2 段組みの会議論文を取得するか、1 段組みの雑誌記事を取得するかが決まります。

## 形式オプションを選択してください

```latex
% Conference proceedings (SIGCHI, SIGPLAN, most SIGs)
\documentclass[sigconf]{acmart}

% Small journal format (TOCE, TAP, ...)
\documentclass[acmsmall]{acmart}

% Large journal format (TOG, ...)
\documentclass[acmlarge]{acmart}
```

`sigconf` は、ほぼすべての ACM カンファレンスに必要なものです。会場の CFP が正確なオプションを指定します。習慣よりも信頼してください。どちらの会場ファミリーを選択するか迷っている場合は、[ACM、IEEE、およびその友人](/learn/acm-ieee-and-friends/) がそれらを比較します。

## メタデータは必須です

IEEEtran とは異なり、acmart はメタデータ ブロックがなければ正しく表示することを拒否します (そして発行者はそれを受け入れることを拒否します)。

```latex
\begin{CCSXML}
... % generated at dl.acm.org/ccs
\end{CCSXML}
\ccsdesc[500]{Software and its engineering~Compilers}

\keywords{compilers, optimization, benchmarks}
```

CCS の概念は、XML 行と `\ccsdesc` 行の両方を生成する ACM Web サイト上のピッカーから来ています。それらをそのまま貼り付けます。キーワードは、要約ではなく `\keywords` に入れられます。 ACM 参照フォーマット ブロック (ページ 1 の灰色の引用ボックス) は、`\acmConference`、`\acmyear`、およびフレンドから自動的に生成され、発行者はカメラの準備が整った時点でこれに入力または検証します。

## 二重盲検を提出する

ほとんどの ACM カンファレンスは匿名で審査されます。 1 つのオプションでそれを処理できます。

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

「anonymous」は著者と所属を非表示にし、「review」は査読者の行番号を追加します。両方をオフにしてカメラの準備をします。このクラスはメカニズムを処理しますが、匿名化はフラグよりも重要です。 [二重盲検は正しく行われています](/learn/anonymization-double-blind/) を参照してください。

## 引用文献: 番号付きまたは著者年

acmart はその下で natbib を使用し、両方のスタイルをサポートします。

|オプション |結果 |
|---|---|
|デフォルト |番号: [3] |
| `natbib=true` + `\citestyle{acmauthoryear}` |著者年: (ラブレス、1843) |

一部の SIG では著者年 (歴史的には CHI) を義務付けていますが、その他の SIG では番号を付けています。繰り返しになりますが、CFP が決定します。

## 最初のコンパイルで驚くべきこと

acmart はパッケージに飢えています。新しいセットアップでは次のことが予想されます。

- **Libertine フォント。** このクラスは、Linux Libertine と Biolinum に加えて `newtxmath` をロードします。最小限の TeX インストールでは、これらは最初にコンパイルしたときにダウンロードとして到着します。 Oleafly にバンドルされている Tectonic エンジンは、最初の使用時にそれらを自動的に取得するため、最初のコンパイルは 2 回目よりも時間がかかります。それは正常なことであり、ハングではありません。
- **厳密な float ルール。** acmart は一部のパッケージ (`titlesec` など) を完全にブロックし、それらをロードするとエラーが発生します。
- **`\authorsaddresses{}`** は、下書き内の「著者のアドレス」フッターのしつこい音を抑制します。

パッケージが実際に解決できない場合、修正は通常の方法で行われます: [不足しているパッケージをインストールする](/learn/install-missing-package/)。

## どこで入手できますか

acm.org の作成者ページまたはカンファレンスのサイトから公式テンプレートをダウンロードし、「acmart.cls」を最新の状態に保ちます。 ACM は年に数回バージョンを更新し、最新バージョンに対してカメラ対応チェックが実行されます。