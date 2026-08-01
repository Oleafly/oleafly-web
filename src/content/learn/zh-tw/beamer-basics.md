---

title: "第一個Beamer甲板"
description: "主題、標題框、大綱、一張結果投影片。"
category: "on-stage"
order: 1
level: "intermediate"
tags: ["beamer"]
featured: true
updated: 2026-07-25
---

# 第一個 Beamer 牌組

Beamer 是用於演示的標準 LaTeX 文檔類別。該文件不再產生頁面，而是產生投影片，您已經知道的所有內容都會保留：相同的數學、相同的數字、相同的參考書目命令。論文作者的實際勝利是重用。手稿中的方程式和 TikZ 圖原封不動地貼在演講中。這是一個最小但完整的甲板：

```latex
\documentclass{beamer}
\usetheme{Madrid}
\title{Talk Title}
\author{You}
\begin{document}
\frame{\titlepage}
\begin{frame}{Outline}
 \tableofcontents
\end{frame}
\begin{frame}{Results}
 \begin{itemize}
 \item Finding one
 \item Finding two
 \end{itemize}
\end{frame}
\end{document}
```

## 框架，而不是頁面

核心單元是框架，每個「框架」環境都成為一張投影片。大括號中的可選參數（如“\begin{frame}{Results}”）設定幻燈片的標題。第一張幻燈片使用簡寫“\frame{\titlepage}”，其中“\titlepage”呈現在序言中由“\title”和“\author”聲明的元資料。您也可以新增“\institute”和“\date”，它們會出現在相同佈局中。一個框架所容納的畫布明顯小於一頁，大約為 128 毫米 x 96 毫米的畫布，因此溢出的內容表明將材料分成兩個框架，而不是縮小字體。

## 主題和大綱

`\usetheme{Madrid}` 選擇完整的視覺設計：顏色、頁首和頁尾欄以及框架標題的繪製方式。 Beamer 提供了數十個主題。 “马德里”、“柏林”和故意简单的“默认”是常见的选择，而交换主题只是一行行的更改，可以重新设计整个牌组。許多會議和實驗室都會分發自己的主題。在這種情況下，您可以將其樣式檔案放入專案中並在此處命名。

大綱框架稱為“\tableofcontents”，其中列出了演講的部分結構。有一個問題：它列出了 `\section` 命令，而這個最小的範例沒有任何命令，因此輪廓呈現為空，直到您在幀之間添加像 `\section{Method}` 這樣的行。 Beamer 中的部分不會在投影片上列印標題；它們的存在是為了建立某些主題顯示的大綱和導航元素。

## 投影片上的內容

在框架內，「itemize」的工作方式與在任何文件中一樣，並且每個「\item」都成為一個項目符號。投影片所容納的文字遠少於紙張，因此請盡可能將項目保留在單行中，並將細節轉移到您所說的內容中。圖形、表格和數學也都在框架內工作，儘管 Beamer 輸出不會在這些頁內預覽中呈現，因此請編譯甲板以查看它。

最常見的早期錯誤是逐字內容：`\verb` 和程式碼清單由於框架處理其內容的方式而在普通框架內中斷。修復方法是在任何包含程式碼的框架上使用脆弱選項，寫為「\begin{frame}[fragile]」。起草套牌後，下一個要學習的工具是逐步顯示，[單擊時顯示線條](/learn/beamer-overlays/) 對此進行了介紹。