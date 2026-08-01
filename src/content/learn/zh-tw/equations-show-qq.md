---

title: "問號而不是數字"
description: "標籤需要再次通過；標籤放置在字幕之後。"
category: "log-literacy"
order: 5
level: "beginner"
tags: ["errors", "cross-ref"]
featured: false
updated: 2026-07-25
---

# 用問號代替數字

編譯後，PDF 中應出現數字或方程式編號的位置會顯示「??」。这不是您的来源中的错误。這就是 LaTeX 渲染尚未解析的引用的方式，而修復通常只需再次編譯即可。

## 為什麼一次通過還不夠

LaTeX 一次從上到下讀取您的文件。當遇到`\label`時，將當前數字寫入`.aux`檔案中；當它遇到「\ref」時，它會從上次運行寫入的「.aux」檔案中尋找數字。在新的編譯中，沒有先前的運行，因此每個引用都印為“??”。第二遍讀取完整的“.aux”檔案並填充數字。 Oleafly 的捆綁編譯器會自動重新執行，直到數位穩定下來，但如果您手動驅動“pdflatex”，則第二次編譯就是您的工作。

＃＃ 什麼時候 ？ ？在第二次通過後倖存下來

如果問號仍然存在，請進行三項檢查。首先，逐個字元比較`\ref`和`\label`中的拼字；標籤區分大小寫，並且雜散空格也很重要。其次，检查标签所在的位置。 `\label` 記錄最近步進計數器的值，在浮點數中是 `\caption` 步進計數器，因此標籤必須位於標題之後：

```latex
\begin{figure}
  \centering
  \includegraphics[width=0.7\textwidth]{plot.pdf}
  \caption{Convergence of the estimator.}
  \label{fig:convergence}
\end{figure}

Figure~\ref{fig:convergence} shows the effect.
```

放置在標題之前的標籤可以毫無抱怨地進行編譯，但會獲取錯誤的計數器（通常是當前部分），因此引用會打印一個看似合理但錯誤的數字，而不是“??”。這種變體更糟糕，因為它很容易被錯過。第三，如果‘.aux’檔案在運行中被刪除或編譯中斷，則記錄的標籤可能不完整；從乾淨的狀態重新編譯。

## 閱讀警告

日誌會告訴您屬於哪種情況。 「存在未定義的引用」意味著至少有一個「\ref」什麼也沒找到。 「標籤可能已更改。重新運行以獲得正確的交叉引用」意味著另一遍將修復它。 「標籤多重定義」意味著兩個 `\label` 命令共享一個名稱，並且 LaTeX 默默地使用其中之一，因此重命名直到每個標籤都是唯一的。使用「eq:」、「fig:」和「tab:」前綴的命名約定使得衝突很少發生，且原始程式碼更容易搜尋；標籤工作流程本身包含在[方程式的數字和指標](/learn/number-equations/) 中。