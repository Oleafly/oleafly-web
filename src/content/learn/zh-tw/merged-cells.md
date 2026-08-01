---

title: "跨行或跨列的儲存格"
description: "分組標題下的多列、多行、cmidrule。"
category: "float-surgery"
order: 2
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# 跨行或跨列的儲存格

真實的表格通常需要合併儲存格。位於兩個指標列上方的「分數」等標題會跨列，而適用於兩個結果行的模型名稱會跨行。 LaTeX 使用不同的工具處理兩個方向：`\multicolumn` 是內建的，而 `\multirow` 來自同名套件。這是一個使用兩者的緊湊表格，加上“booktabs”中的部分規則：

```latex
\usepackage{multirow,booktabs}
\begin{tabular}{lcc}
 \toprule
 & \multicolumn{2}{c}{Scores} \\
 \cmidrule(lr){2-3}
 Model & Acc & F1 \\
 \midrule
 \multirow{2}{*}{Ours} & 0.9 & 0.88 \\
 & 0.91 & 0.89 \\
 \bottomrule
\end{tabular}
```

## 跨列

`\multicolumn{2}{c}{Scores}` 將兩個普通單元格替換為一個。第一個參數是要吸收多少列，第二個參數是此單元格的列規範，此處「c」表示居中，第三個參數是內容。請注意其前面的單獨的「&」：該行的第一列故意為空，因此「Scores」從第 2 列開始並覆蓋第 2 列和第 3 列。因為第二個參數在本地覆蓋列類型，所以「\multicolumn{1}{c}{...}」也是將單一標題單元格居中於左對齊列上方的標準技巧。

## 部分規則

`\cmidrule(lr){2-3}` 僅在第 2 列到第 3 列下繪製水平線，這在視覺上將分組標題與其列連結起來。 `(lr)` 選項會稍微修剪規則的左右兩端，因此相鄰的 `\cmidrule` 不會接觸並讀取為單獨的群組標記。這是一個“booktabs”命令，修剪是使這些表格看起來像是排版而不是繪製的細節之一。完整的三規則樣式包含在[三規則表](/learn/booktabs-beautiful/)中。

## 跨行

`\multirow{2}{*}{Ours}` 在 2 行中垂直居中打印“Ours”。第一个参数是行数，第二个参数是单元格宽度，其中“*”表示内容的自然宽度，第三个参数是内容本身。該命令僅保留視覺空間，因此第二行仍必須提供一個空的第一個單元格，這就是為什麼下一行以裸露的「&」開頭。忘記空單元格會將行中的每個值向左移動一列，並且未對齊錯誤訊息指向錯誤的行，因此首先檢查“\multirow”之後的行。

## 實際限制

合併的儲存格最好保留在標題和短行組中。資料儲存格在兩個方向上跨越的表格難以閱讀且難以維護，因為每個新增的行都迫使您重新計算跨度。如果您發現自己將“\multirow”嵌套在“\multicolumn”中，請考慮重組表格。