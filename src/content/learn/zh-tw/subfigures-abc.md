---

title: "標示 a、b、c 的面板"
description: "一個標題下的多面板圖的子標題。"
category: "float-surgery"
order: 4
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# 標記為 a、b、c 的面板

論文經常需要多面板圖：面板（a）中的架構​​，（b）中的訓練曲線，（c）中的消融，所有這些共享一個圖號和一個整體標題。建立此內容的簡潔方法是「subcaption」包，它為您提供了一個「subfigure」環境，可以自動處理（a）、（b）字母、每個面板的標題和引用。

## 模式

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

這是每個部分的作用。外部的「figure」環境是一個普通的浮動，「[htbp]」按順序列出了 LaTeX 可能嘗試的位置：文字中、頁面頂部、頁面底部或專用浮動頁面。每個「子圖」都是一個指定寬度的框，此處為「0.48\textwidth」（文字寬度的 48%）。兩個面板在 0.48 處留下一個小間隙，並且它們之間的“\hfill”會拉伸，以便麵板與左右邊距齊平。在每個面板中，「width=\linewidth」將影像縮放到面板的寬度，而不是整個頁面的寬度。最後一個細節是人們最常犯錯的。

`subfigure` 內的 `\caption` 會在該面板下方產生小的「(a) First」樣式標籤。最後的「\caption」位於「figure」內部但在任何「subfigure」外部，是攜帶圖編號的主標題。將每個「\label」保留在其「\caption」之後，因為標籤記錄了最近發布的任何數字，如[標題和標籤](/learn/captions-labels/)中所述。

## 參考面板

使用上面的標籤，「\ref{fig:p}」列印圖形編號，例如 2，而「\ref{fig:p-a}」列印 2a。如果你只想要字母，`\subref{fig:p-a}`只印出“a”，對於“panels (a) and (b)”這樣的句子很方便。這就是「subcaption」相對於在影像下手動輸入「(a)」的真正好處。當您新增或重新排序面板時，字母會自行重新編號，並且每個引用都保持正確。

## 行、間距和常見錯誤

對於第三個面板，可以將寬度縮小到大約“0.31\textwidth”，並在每對之間添加另一個帶有“\hfill”的“subfigure”，或者通過在子圖行之間留一個空行來開始一個新行。然而，行內的空白行是典型的錯誤：兩個「子圖」環境之間的任何空白行都會啟動一個新段落，該段落垂直而不是並排堆疊面板。如果您的面板拒絕排成一行，請先尋找雜散的空白行，並記住行末尾的「%」註解掉了不可見的行尾空間，該空間也可能使面板太寬而無法容納。