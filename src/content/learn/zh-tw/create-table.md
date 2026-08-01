---

title: "一張看起來像紙桌的桌子"
description: "表格、書籤規則、標題、標籤。"
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

# 一張看起來像紙桌的桌子

LaTeX 中的表格使用兩個具有不同作業的巢狀環境。內部的「表格」建構了單元格網格。外部的「table」使網格成為浮動的，因此它可以攜帶數字、標題和標籤，因此 LaTeX 可以將其放置在頁面有空間的位置。加上水平線的“booktabs”包，結果看起來像已發表論文中的表格，而不是電子表格螢幕截圖。

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

`[htbp]` 參數列出了 LaTeX 可以放置浮動的位置：在文字中、頁面頂部、底部或單獨的浮動頁面上。它按照這個順序嘗試它們，並授予所有四個可以防止表漂移太遠；其機制在[浮標實際著陸位置](/learn/position-figures/) 中進行了解釋。 `\centering` 使網格水平居中。 `\caption` 列印編號標題，依照慣例，表格標題位於表格上方，與位於下方的圖形標題不同。 `\label` 必須位於 `\caption` 之後，因為標籤記錄了最近發布的編號，如 [標題和標籤](/learn/captions-labels/) 所述。標籤就位後，文字中的「Table~\ref{tab:results}」總是會列印正確的數字。

## 內網格

“\begin{tabular}”後面的“{lcc}”聲明每個字母一列：“l”左對齊，“c”居中，“r”右對齊。三個字母意味著三列，每行必須提供恰好那麼多的單元格。在一行中，「&」分隔儲存格，「\\」結束行。文字列通常左對齊閱讀效果最佳，而短數字列通常居中。

這三個規則來自「booktabs」。 `\toprule` 開啟表格，`\midrule` 將標題行與資料分開，`\bottomrule` 關閉它。它們取代了普通的“\hline”命令，並具有正確調整的上下間距，這就是表格看起來專業設定的主要原因。沒有垂直線，資料行之間也沒有規則：「booktabs」樣式故意忽略了兩者。推理在[三規則表](/learn/booktabs-beautiful/) 中列出。

## 實用筆記

最常見的初學者錯誤是“&”分隔符的數量與聲明的列之間不匹配，以及在行末尾忘記了“\\”，這兩種情況都會產生指向下一行的令人困惑的錯誤訊息。如果您不想手動計算單元格，請使用[表格產生器](/tools/table-generator/) 直觀地建立網格並將結果貼到文件中。