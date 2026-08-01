---

title: "標題列和標題頁"
description: "為論文製作標題，為論文和報告製作標題頁。"
category: "paper-bones"
order: 1
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# 標題列和標題頁

一篇論文以標題列開啟：標題、作者、日期，設定在第一頁的頂部。論文以按照大學規範佈置的完整標題頁開始。 LaTeX 將這些視為兩個不同的問題。第一個是由「\maketitle」自動化的，第二個是稱為「titlepage」環境的空白畫布。

## 標題列

```latex
\title{A Study of Examples}
\author{Ada Lovelace\\University of Something}
\date{\today}
\begin{document}
\maketitle
```

前三個指令僅儲存元資料。當它們運行時，PDF 中不會出現任何內容，這就是為什麼它們可以出現在序言中的原因。 `\maketitle` 位於 `\begin{document}` 之後，是儲存區塊排版的時刻。在「\author」內部，「\\」換行（這是在名稱下新增隸屬關係的常用方法），「\and」分隔多個作者，以便將它們並排設定。 `\date{\today}` 列印您編譯的任一天的日期。使用空大括號編寫“\date{}”以完全省略日期行。完全忽略“\date”仍然會列印今天的日期。

在「article」類別中，該區塊位於第一頁的頂部，下面是文字。在“報告”和“書籍”中，它有自己的一頁。期刊和會議類別用它們自己的關係、電子郵件和 ORCID 命令替換了該機制，因此在場所範本內，您應該遵循其範例文件而不是標準命令。

## 手工製作的標題頁

```latex
\begin{titlepage}
 \centering
 \vspace*{2cm}
 {\Large Thesis Title\\[1em]}
 {\large Author Name\\}
 \vfill
 Submitted for the degree of ...\\
 \today
\end{titlepage}
```

「titlepage」環境為您提供了一頁未編號的頁面和完全手動控制，這是論文法規通常要求的。該範例的每一部分都贏得了自己的位置。 `\centering` 將環境中的所有內容置中。 `\vspace*{2cm}` 將標題從頂部邊緣向下推。加星號的形式很重要，因為頁面頂部未加星號的「\vspace」會被丟棄。 `{\Large ...}` 周圍的大括號會改變字體大小，因此它會在組結束的地方結束，而 `\\[1em]` 會在行下方添加一個額外的 em 空間來打破行。 `\vfill` 插入可拉伸的空間，吸收剩餘的高度，因此無論標題有多長，度數聲明和日期都會位於頁面底部。

使用一種機製或另一種機制。將 `\maketitle` 與 `titlepage` 環境結合起來會產生兩個標題頁，而初學者最容易錯過的就是安靜的標題頁：定義 `\title` 和 `\author` 但忘記了 `\maketitle`，因此文檔編譯乾淨，根本沒有標題。 [文件骨架課程](/learn/document-sculpture/) 顯示了區塊在整個文件中的位置。