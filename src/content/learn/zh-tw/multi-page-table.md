---

title: "表格長度超過一頁"
description: "longtable 重複的頁首和頁尾。"
category: "float-surgery"
order: 1
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# 表格長度超過一頁

普通的“table”環境是一個浮動體，並且浮動體必須適合單一頁面。給它 60 行，LaTeX 要么將其推到浮動頁面上並讓它溢出，要么永遠推遲它。解決方案是「longtable」包，它排版一個跨頁表格，並在每一頁上重複其標題，就像電子表格列印輸出的方式一樣。

```latex
\usepackage{longtable,booktabs}
\begin{longtable}{ll}
 \toprule
 Key & Value \\
 \midrule
 \endfirsthead
 \toprule Key & Value \\ \midrule \endhead
 \bottomrule \endfoot
 a & 1 \\
 % ... many rows
\end{longtable}
```

## 標題區塊如何運作

「longtable」在實際資料行之前最多以四個聲明區塊開始。 `\endfirsthead` 上面的所有內容都是在表格的最開頭列印一次的標題。 `\endfirsthead` 和 `\endhead` 之間的所有內容都是在每個後續頁面頂部重複的標題，這就是為什麼相同的「Key & Value」行在範例中出現兩次的原因。以「\endfoot」結尾的區塊印在表格觸及的每個頁面的底部，這裡只是一個結束「\bottomrule」。還有“\endlastfoot”，用於僅出現在最後幾行下方的材料，例如總計行。如果您想要延續提示，常見的模式是腳塊中的“\midrule \multicolumn{2}{r}{continued on next page} \\”以及最後一個腳中的真正的“\bottomrule”。

聲明之後是資料行，其編寫方式與普通“表格”完全相同，單元格之間使用“&”，每行末尾使用“\\”。 「booktabs」規則保持不變。請參閱[三規則表](/learn/booktabs-beautiful/) 以了解它們所取代的內容。

## 不是浮點數，這代表什麼

最重要的行為差異可以用一句話來說明：「longtable」不是浮點數。它從您在原始程式碼中放置的位置開始，在頁面中斷的地方中斷，並且不接受“[htbp]”參數。這也改變了字幕的工作方式。您不會將“longtable”包裝在“table”環境中。相反，將“\caption{...}\\”放在表格本身內，作為第一個頭塊的第一行，它將按照與其他表格相同的順序進行編號。

## 在依賴它之前需要了解兩件事

首先，列寬是全域決定的，因此 LaTeX 可能需要多次編譯才能使列停止移動。繼續編譯直到佈局確定。其次，「longtable」不能在兩列佈局中使用，這在大多數會議模板中都排除了這種情況。在這些文件中，現實的選擇是縮小表格、將其拆分為多個部分或將其移至一列附錄。