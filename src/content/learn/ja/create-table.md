---

title: "紙のテーブルのように見えるテーブル"
description: "表形式、ブックタブ ルール、キャプション、ラベル。"
category: "floats-and-ink"
order: 1
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Tables check'
  questions:
    - prompt: 'Which environment builds the cell grid in a classic LaTeX table?'
      choices:
        - 'figure'
        - 'tabular'
        - 'itemize'
        - 'equation'
      answer: 'B'
      level: beginner
    - prompt: 'What is booktabs mainly for?'
      choices:
        - 'Drawing TikZ trees'
        - 'Clean horizontal rules (top, mid, bottom) instead of a heavy grid'
        - 'Building bibliographies'
        - 'Inline math spacing'
      answer: 'B'
      level: beginner
    - prompt: 'Where do \caption and \label usually go for a table float?'
      choices:
        - 'Only in the preamble'
        - 'Inside the table float, with the label after the caption'
        - 'After \end{document}'
        - 'In a separate .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'In a tabular column spec, what does l mean?'
      choices:
        - 'Landscape page'
        - 'Left-aligned column'
        - 'Large font'
        - 'Equation label column'
      answer: 'B'
      level: beginner
---

# 紙のテーブルに見えるテーブル

LaTeX のテーブルは、異なるジョブを持つ 2 つのネストされた環境を使用します。内側の「表形式」はセルのグリッドを構築します。外側の `table` はそのグリッドを浮動小数点にするので、番号、キャプション、およびラベルを保持できるため、LaTeX はページにスペースがある場所にグリッドを配置できます。水平罫線用の `booktabs` パッケージを追加すると、結果はスプレッドシートのスクリーンショットではなく、出版された論文の表のようになります。

```latex
\usepackage{booktabs}
\begin{table}[htbp]
 \centering
 \caption{Results on the test set.}
 \label{tab:results}
 \begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
 \end{tabular}
\end{table}
```

## 外部環境

`[htbp]` 引数は、LaTeX がフロートを配置できる場所をリストします。テキスト内、ページの上部、下部、またはフロートの別のページです。それらをこの順序で試行し、4 つすべてを許可することでテーブルが遠くに流れてしまうことを防ぎます。仕組みについては、[フロートが実際に着地する場所](/learn/position-figures/) で説明されています。 `\centering` はグリッドを水平方向に中央揃えにします。 `\caption` は番号付きのキャプションを印刷します。慣例により、表のキャプションは表の下に配置される図のキャプションとは異なり、表の上に配置されます。 [キャプションとラベル](/learn/captions-labels/) で説明されているように、ラベルには最後に発行された番号が記録されるため、`\label` は `\caption` の後に来る必要があります。ラベルを配置すると、テキスト内の `Table~\ref{tab:results}` は常に正しい数値を出力します。

## 内側のグリッド

`\begin{tabular}` の後の `{lcc}` は、文字ごとに 1 つの列を宣言します。 `l` は左揃え、`c` は中央揃え、`r` は右揃えになります。 3 文字は 3 列を意味し、各行にはちょうどその数のセルが含まれている必要があります。行内では、「&」でセルが区切られ、「\\」で行が終了します。通常、テキスト列は左揃えで読むのが最適ですが、短い数値列は通常中央に配置されます。

3 つのルールは「booktabs」から来ています。 `\toprule` はテーブルを開き、`\midrule` はヘッダー行をデータから分離し、`\bottomrule` はテーブルを閉じます。これらはプレーンな `\hline` コマンドを置き換えるもので、上下の間隔が正しく調整されています。これが、テーブルが専門的に設定されているように見える主な理由です。垂直線もデータ行間の規則もありません。「booktabs」スタイルでは、両方を意図的に省略しています。推論は [3 つのルール テーブル](/learn/booktabs-Beautiful/) にまとめられています。

## 実践的なメモ

最も頻繁に起こる初心者エラーは、`&` 区切り文字と宣言された列の数の不一致、および行末の `\\` の忘れであり、どちらも次の行を指す混乱を招くエラー メッセージを生成します。手動でセルを数えたくない場合は、[テーブル ジェネレーター](/tools/table-generator/) を使用して視覚的にグリッドを構築し、結果をドキュメントに貼り付けます。