---

title: "PDF の他の部分をポイントします"
description: "label と ref、および自動名用の cleveref。"
category: "paper-bones"
order: 5
level: "beginner"
tags: ["structure", "cross-ref"]
featured: false
updated: 2026-07-25
---

# PDF の他の部分をポイントします

「図 3 を参照」と手で入力することは、守れない約束です。紙の前半に数字を 1 つ追加し、間違っている数字の後に手書きで入力したすべての数字を追加します。 LaTeX はこれを 2 つの部分のメカニズムで解決します。 `\label` は番号が付けられたものに選択した名前を付け、 `\ref` はそのものの最終的な番号を出力します。名前を参照すると、コンパイラーは数値を正確に保ちます。

## ラベルと参照

```latex
\section{Methods}\label{sec:methods}
\begin{equation}\label{eq:main} ... \end{equation}
\begin{figure}
 ...
 \caption{...}\label{fig:pipeline}
\end{figure}

See Section~\ref{sec:methods}, Eq.~\eqref{eq:main}, and Figure~\ref{fig:pipeline}.
```

`\label{sec:methods}` は、最後に割り当てられた番号 (ここではセクション) をキー `sec:methods` の下に記録します。後で、`\ref{sec:methods}` がその数値を出力します。また、`\eqref` は方程式に括弧規則を追加する amsmath のバリアントで、「1」ではなく「(1)」を出力します。

この例では 2 つの詳細が非常に重要です。まず、図の内部では、ラベルは `\caption` の後に来る必要があります。これは、キャプションが図のカウンターのステップとなるためです。代わりに、現在のセクション番号を黙って取得する前にラベルが配置されます。次に、`Figure~\ref{...}` の `~` は非改行スペースであり、「Figure」で 1 行を終了し、「3」で次の行を開始するのではなく、単語とその番号を同じ行に保持します。

`sec:`、`fig:`、および `eq:` 接頭辞は純粋な慣例です。 LaTeX はこれらを必要としませんが、キーを読み取れるようにし、エディターのオートコンプリートでラベルを種類ごとにグループ化できるようにします。

## なぜ見えるのですか??

ラベルを追加した後の最初のコンパイルでは、`\ref` は `??` を出力します。数値は前回の実行中に書き込まれた `.aux` ファイルを通じて解決されるため、新しいラベルを表示するにはもう一度コンパイルする必要があります。 [なぜ複数回コンパイルするのか](/learn/compile-to-pdf/) でメカニ​​ズムが説明されています。 2 回連続してコンパイルしても生き残る `??` は、ほとんどの場合、`\ref` のキーが `\label` のキーと一致しないことを意味します。

## クレバーレフがあなたの代わりに言葉を書きます

クレバーレフの場合 (ハイパーリファレンスの後にロード):

```latex
\usepackage{cleveref}
\cref{fig:pipeline}
```

`\cref{fig:pipeline}` は、タイプ名を含む「図 3」を出力し、ラベルがテーブルまたは方程式であることが判明した場合に適応します。 `\Cref` は文の先頭を大文字にし、`\cref{eq:a,eq:b,eq:c}` はリストを範囲に圧縮します。ロード順序に注意してください。liveref は、[hyperref](/learn/hyperlinks/) の後に配置する必要がある数少ないパッケージの 1 つであり、通常のルールとは逆です。早めに採用しましょう。手書きの "Figure~\ref" というフレーズでいっぱいの紙に `\cref' を組み込むのは面倒です。