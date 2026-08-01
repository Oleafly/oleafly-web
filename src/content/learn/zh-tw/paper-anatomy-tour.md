---

title: "一張紙，從上到下"
description: "步行遊覽研究論文的每個部分以及每個部分所做的一項工作。"
category: "paper-anatomy"
order: 1
level: "beginner"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# 一張紙，從上到下

研究論文看起來很嚇人，直到您意識到它們每次都是由相同的十幾個零件以大致相同的順序組裝而成。一旦您了解了每個部分的工作，您就可以更快地閱讀和撰寫論文，而無需盯著空白頁。這是遊覽。

## 前面的事情

|部分|這是一份工作 |
|---|---|
|標題 |讓正確的讀者停止滾動。 |
|作者 |說明誰完成了這項工作以及向誰發送電子郵件。 |
|摘要|用 150-250 字出售整篇論文。 |
|關鍵字|幫助搜尋引擎和索引器正確歸檔您。 |

標題和摘要起到了招聘的大部分作用。百分之九十的潛在讀者不會看到其他任何東西，這就是為什麼[摘要有自己的教訓](/learn/write-an-abstract/) 和[標題頁有自己的 LaTeX 機制](/learn/title-page/)。

## 身體

|部分|這是一份工作 |
|---|---|
|簡介 |解釋為什麼問題很重要以及您的貢獻。 |
|相關工作|將您的工作置於先前的所有工作之中。 |
|方法|準確地描述您所做的事情以重現。 |
|實驗/結果 |證明此方法有效。 |
|討論 |誠實地解釋證據，包括證據薄弱的地方。 |
|結論 |重申要點並指出接下來要做什麼。 |

正文是分階段講述的論點：這是一個問題，這是我們的想法，這是它有效的證據，這是它的意義。如果某個部分沒有推進該論點，那麼它就是填充。有關每個內容的更多信息，請參閱[簡介和相關工作](/learn/introduction-and-lated-work/) 和[機房部分](/learn/methods-results-discussion/)。

## 後面的事情

|部分|這是一份工作 |
|---|---|
|致謝 |感謝資助者、幫助者和草稿審查者。 |
|參考文獻 |列出您引用的每個來源，並根據場地規則進行格式化。 |
|附錄|保留校樣、額外的表格和會破壞流程的細節。 |
|補充資料|攜帶不適合 PDF 的程式碼、資料和影片。 |

參考文獻不是裝飾，它們是你的主張所依據的證據。請參閱[註腳、參考文獻和附錄](/learn/footnotes-references-appendix/) 以了解誰閱讀了什麼內容，以及[引文](/learn/add-itations/) 以了解 LaTeX 機制。

## LaTeX 中的骨架

其中大部分直接映射到您已經知道的命令：

```latex
\title{A Catchy but Honest Title}
\author{First Author \and Second Author}
\maketitle
\begin{abstract}
One paragraph that sells everything below.
\end{abstract}
\section{Introduction}
```

分段指令會為您處理編號和目錄，如[章節和架構](/learn/sections/) 所述。

## 下一步要去哪裡

如果您對論文這一類型是全新的，請從[研究論文實際上是什麼](/learn/what-is-a-research-paper/) 開始。如果您打算寫一個，本課程的其餘部分將按順序瀏覽每個部分，從[摘要](/learn/write-an-abstract/)到[您實際需要多少數學](/learn/how-much-math/)。讀你卡住的部分，寫下來，重複。