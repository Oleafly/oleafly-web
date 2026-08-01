---

title: "a、b、c とラベル付けされたパネル"
description: "1 つのキャプションの下にある複数のパネルの図のサブキャプション。"
category: "float-surgery"
order: 4
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# a、b、c というラベルが付いたパネル

論文には常に複数のパネルの図が必要です。パネル (a) のアーキテクチャ、(b) のトレーニング カーブ、(c) のアブレーションは、すべて 1 つの図番号と 1 つの全体的なキャプションを共有しています。これを構築するきれいな方法は、`subcaption` パッケージです。これは、(a)、(b) レタリング、パネルごとのキャプション、および参照を自動的に処理する `subfigure` 環境を提供します。

## パターン

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{First}\label{fig:p-a}
 \end{subfigure}\hfill
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Second}\label{fig:p-b}
 \end{subfigure}
 \caption{Overall caption}\label{fig:p}
\end{figure}
```

各部分の動作は次のとおりです。外側の `figure` 環境は通常の float で、`[htbp]` は LaTeX が試行する配置を順番にリストします: ここではテキスト内、ページの上部、ページの下部、または専用の float ページです。各 `subfigure` は指定された幅、ここでは `0.48\textwidth` (テキスト幅の 48 パーセント) のボックスです。 0.48 の 2 つのパネルは小さなギャップを残し、パネル間の `\hfill` が伸びてパネルが左右のマージンにぴったりと収まるようになります。各パネル内で、`width=\linewidth` はページ全体ではなくパネルの幅に画像を拡大縮小します。最後の詳細は、人々が最もよく間違える部分です。

`subfigure` 内の `\caption` は、そのパネルの下に小さな「(a) First」スタイル ラベルを生成します。 `figure` の内側で `subfigure` の外側にある最後の `\caption` は、図の番号を伝えるメイン キャプションです。 [キャプションとラベル](/learn/captions-labels/) で説明されているように、ラベルには最後に発行された番号が記録されるため、各 `\label` をその `\caption` の直後に保ってください。

## パネルの参照

上記のラベルを使用すると、`\ref{fig:p}` は図の番号、たとえば 2 を出力し、`\ref{fig:p-a}` は 2a を出力します。文字だけが必要な場合、`\subref{fig:p-a}` は「a」のみを出力します。これは、「パネル (a) および (b)」のような文に便利です。これは、画像の下に「(a)」を手動で入力するよりも「サブキャプション」の本当のメリットです。パネルを追加または並べ替えると、文字の番号が自動的に付け直され、すべての参照が正しいままになります。

## 行、間隔、およびよくある間違い

3 番目のパネルでは、幅を約 `0.31\textwidth` に縮小し、各ペアの間に `\hfill` を使用して別の `subfigure` を追加するか、または subfigure の行の間に空白行を残して新しい行を開始します。ただし、行内の空行は典型的な間違いです。2 つの「サブフィギュア」環境の間に空行があると、新しい段落が始まり、パネルが横に並べるのではなく縦に積み重ねられます。パネルが 1 行に収まらない場合は、最初に迷走している空白行を探します。また、行末の `%` は目に見えない行末スペースをコメントアウトするため、パネルの幅が広すぎてパネルが収まらなくなる可能性があることに注意してください。