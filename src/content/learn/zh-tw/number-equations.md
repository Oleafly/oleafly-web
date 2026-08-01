---

title: "方程式的數字和指針"
description: "label、ref、eqref 並僅對您想要的行進行編號。"
category: "equation-craft"
order: 6
level: "beginner"
tags: ["math", "cross-ref"]
featured: false
updated: 2026-07-25
---

# 方程式的數字和指針

對方程式進行編號是一種保證，您稍後會參考它。 LaTeX 處理了該承諾的兩部分：「equation」環境分配數字，而標籤系統允許您從文件中的任何位置指向它，而無需自己鍵入數字。

```latex
\begin{equation}
 \label{eq:bayes}
 p(\theta \mid y) \propto p(y \mid \theta)\, p(\theta)
\end{equation}
As shown in \eqref{eq:bayes}, ...
```

## 標籤和參考文獻

`\begin{equation}` 对显示的行进行编号。 `\label{eq:bayes}` 将名称 `eq:bayes` 附加到该数字。名称由您选择，“eq:”前缀使方程式标签与图形和表格区分开来。引用它，“\ref{eq:bayes}”打印裸數字，而來自“amsmath”的“\eqref{eq:bayes}”將其括在括號中以匹配數字在方程式旁邊的顯示方式。更喜欢使用“\eqref”来表示方程，因此两种风格一致。

因為數字是在一次傳遞中記錄並在下一次傳遞中讀取的，所以新的編譯會顯示“??”，直到下一次運行。 [問號而不是數字](/learn/equations-show-qq/) 涵蓋了這個週期。

如果從未引用過顯示的方程，則不要對其進行編號。使用 `\[ ... \]` 或加星號的 `equation*` 來代替，這樣數字只標記讀者可能需要再次查找的行。

## 對對齊的一些行進行編號

預設情況下，「align」中的多行派生對每行進行編號，這很少是您想要的。有兩個指令調整每行：

```latex
\begin{align}
 a &= b \label{eq:a} \\
 c &= d \notag \\
 e &= f \label{eq:e}
\end{align}
```

`\notag` 抑制其行上的數字，因此這裡中間步驟保持未編號，而第一行和最後一行保留其數字和標籤。將每個“\label”放在它命名的行上“\\”之前，以便它綁定到正確的數字。全有或全無的捷徑是“align*”，它沒有任何數字。 [排列的多線方程式](/learn/align-equations/) 涵蓋了完整的多線環境系列。

常見的錯誤是寫出字面數字，如“參見方程式 3”，當您在其上方插入方程式時，就會中斷。始終檢查標籤並讓 LaTeX 在每次編譯時重新編號。當您在 [playground](/live/) 中新增和刪除 `\notag` 時，您可以即時觀看編號更新。