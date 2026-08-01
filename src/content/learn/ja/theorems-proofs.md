---

title: "定理と証明ブロック"
description: "amsthm スタイル、共有カウンター、校正終了マーク。"
category: "field-kits"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# 定理と証明ブロック

数学的な記述は、定理、補題、定義などの番号付きのステートメントで実行されます。各ステートメントはテキストから切り離されており、後の証明で引用できるように番号が付けられています。 `amsthm` パッケージは機構を提供します。ドキュメントに必要なブロックの種類をプリアンブルで一度宣言し、それを通常の環境として使用します。

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]

\begin{theorem}[Optional name]
 Statement.
\end{theorem}
\begin{proof}
 Argument. \qedhere
\end{proof}
```

## 環境の宣言

`\newtheorem{theorem}{Theorem}[section]` は `theorem` 環境を作成します。最初の引数は入力する環境名、2 番目の引数は印刷される見出しテキスト、末尾の `[section]` は番号をセクションに結び付けるため、セクション 2 の 3 番目の定理は定理 2.3 となり、新しいセクションごとにカウンターがリセットされます。

`\newtheorem{lemma}[theorem]{Lemma}` は、オプションの引数を別の位置に配置します。これは、別の意味を持ちます。 `[theorem]` は、補題が独自の定理カウンタを保持するのではなく、定理カウンタを共有することを示します。共有カウンターは、定理 2.1 とそれに続く補題 2.2 という単一のシーケンスを生成します。これは、補題 2.1 と定理 2.1 の両方が存在する並列シーケンスよりも理解しやすいです。

`\theoremstyle` は、それに続くすべての宣言の外観を設定します。 「プレーン」スタイルは本文をイタリック体で印刷します。これは、定理、補題、命題の伝統的な扱いです。 「定義」スタイルはボディを直立に保ち、定義と例に適しています。 3 番目のスタイルである「remark」は、さらに軽く、メモや観察に適しています。それぞれが使用するスタイルの下に宣言をグループ化します。

## ブロックの使用

環境のオプションの引数は見出しの後に名前を出力するため、`\begin{theorem}[Optional name]` は定理 2.4 (Fubini) のようなものを生成します。 「プルーフ」環境は、イタリック体のプルーフ見出しを印刷し、プルーフ終了マーク (小さな正方形が右揃えに設定) で閉じます。

`\qedhere` は、証明が通常のテキストで終わらない場合にその正方形の位置を変更します。証明の最後の行が表示された方程式である場合、自動マークはその下の空の行に表示されます。ディスプレイ内に `\qedhere` と書くと、正方形が方程式の独自の行に配置されます。この例のように、証明がプレーン テキストで終わる場合、コマンドは無害ですが不要です。

定理ブロックは他のブロックと同様に番号付きオブジェクトであるため、環境内の `\label{thm:main}` とテキスト内の `Theorem~\ref{thm:main}` は、[方程式の数値とポインター](/learn/number-equations/) で説明されている通常の 2 パス ルールで機能します。よくある宣言の間違いは、すべての環境を `\theoremstyle{plain}` の下に置き、複数段落の定義を斜体で設定することです。定義と例は「定義」スタイルで保持してください。