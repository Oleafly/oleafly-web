---

title: "指向 PDF 的其他部分"
description: "label 和 ref，以及用於自動名稱的 Cleveref。"
category: "paper-bones"
order: 5
level: "beginner"
tags: ["structure", "cross-ref"]
featured: false
updated: 2026-07-25
---

# 指向 PDF 的其他部分

手动输入“参见图 3”是您无法兑现的承诺。在论文前面添加一个数字，并在错误之后添加每个手写数字。 LaTeX 透過兩部分機制解決了這個問題：「\label」將您選擇的名稱附加到編號的事物上，「\ref」列印該事物最終的任何數字。您引用名称，编译器会保持数字的真实性。

## 標籤和參考

```latex
\section{Methods}\label{sec:methods}
\begin{equation}\label{eq:main} ... \end{equation}
\begin{figure}
 ...
 \caption{...}\label{fig:pipeline}
\end{figure}

See Section~\ref{sec:methods}, Eq.~\eqref{eq:main}, and Figure~\ref{fig:pipeline}.
```

`\label{sec:methods}` 記錄了鍵 `sec:methods` 下最近分配的編號，這裡是節的編號。稍後， `\ref{sec:methods}` 列印該數字，而 `\eqref` 是 amsmath 變體，為方程式加上括號約定，印出「(1)」而不是「1」。

這個例子中的兩個細節非常重要。首先，在圖形內部，標籤必須位於「\caption」之後，因為標題是圖形計數器的步驟；放置在其前面的標籤會默默地選取目前的節號。其次，「Figure~\ref{...}」中的「~」是一個不間斷空格，它將單字及其編號保持在同一行，而不是讓「Figure」結束一行，「3」開始下一行。

`sec:`、`fig:` 和 `eq:` 前綴是純粹的約定。 LaTeX 不需要它們，但它們使按鍵可讀，並讓編輯器自動完成按類型對標籤進行分組。

## 為什麼你會看到？

在新增標籤後的第一次編譯中，「\ref」印出「??」。數字是透過上次執行時寫入的「.aux」檔案解析的，因此新標籤需要再編譯一次才能出現； [為什麼要編譯多次](/learn/compile-to-pdf/) 解釋了其中的機制。在兩次連續編譯中倖存的“??”幾乎總是意味著“\ref”中的鍵與“\label”中的鍵不匹配。

## smartef 為你寫下這個詞

使用 smartef （在 hyperref 之後加載）：

```latex
\usepackage{cleveref}
\cref{fig:pipeline}
```

`\cref{fig:pipeline}` 列印“圖 3”，包括類型名稱，如果標籤變成表格或方程，則進行調整。 `\Cref` 將句子開頭大寫，而 `\cref{eq:a,eq:b,eq:c}` 將列表壓縮為一個範圍。請注意載入順序：cleveref 是必須位於 [hyperref](/learn/hyperlinks/) 之後的少數幾個套件之一，與通常的規則相反。儘早採用。將 `\cref` 改造為充滿手寫「Figure~\ref」短語的論文是乏味的。