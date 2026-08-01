---

title: "標題本身編號"
description: "逐段、加星號的表格、secnum深度。"
category: "paper-bones"
order: 2
level: "beginner"
tags: ["structure"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Sections check'
  questions:
    - prompt: 'What does \section{Introduction} mainly do?'
      choices:
        - 'Only bold the next paragraph'
        - 'Print a numbered heading and register it for the TOC / PDF outline'
        - 'Start a new PDF file'
        - 'Insert a citation'
      answer: 'B'
      level: beginner
    - prompt: 'How do you get an unnumbered section heading?'
      choices:
        - '\section*{...}'
        - '\section[none]{...}'
        - '\unnumber{\section{...}}'
        - 'Just write \textbf{...}'
      answer: 'A'
      level: beginner
    - prompt: 'Why use real heading commands instead of hand-bolded lines?'
      choices:
        - 'Bold is illegal in LaTeX'
        - 'Headings drive numbering, the TOC, and navigation. Fake bold doesn''t.'
        - 'Manual bold compiles faster'
        - 'Sections can''t hold math'
      answer: 'B'
      level: beginner
    - prompt: 'What''s the usual next level under \section?'
      choices:
        - '\chapter (even in article)'
        - '\subsection'
        - '\maketitle'
        - '\bibliography'
      answer: 'B'
      level: beginner
---

# 標題本身編號

在文字處理器中，您需要手動對標題進行編號，並在每次移動標題時手動重新編號。 LaTeX 拒絕讓你這麼做。您可以聲明每個標題是什麼，一個節或一個小節或一個章節，編號會自行處理。在文件中間插入一個新部分，並在下次編譯時重新編號後的所有內容，以及指向它的每個交叉引用和每個目錄條目。

## 層次結構

```latex
\part{...} % book
\chapter{...} % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
```

這些命令形成了一個固定的梯子。 `\section` 是 `article` 類別中的日常主力，`\subsection` 和 `\subsubsection` 嵌套在它下面。 `\chapter` 僅存在於 `report` 和 `book` 類別中，這就是為什麼將論文章節貼到文章範本中會失敗並出現未定義的控制序列的原因。 `\part` 位於章節之上，在長篇書籍之外很少見。 `\paragraph` 是一個奇怪的地方：它在與以下文字相同的行上產生一個粗體插入標題，而不是在自己的行上產生一個標題，這幾乎讓每個人第一次都感到驚訝。

每個命令都採用大括號中的標題文本，以類別選擇的字體和大小列印它，對其進行編號，並記錄它，以便“\tableofcontents”稍後可以找到它。你永远不会内嵌标题样式。如果您想要不同的標題字體，這是在序言中做出的整個文件範圍的決定。

## 抑制數字

有星號的表格會抑制數字：`\section*{致謝}`。星標也使標題完全脫離目錄和編號序列，因此其後面的部分會繼續存在，就好像加星標的部分不存在一樣。這正是您在短論文中想要的致謝、序言或獨立結論。如果加星號的部分仍應出現在目錄中，[目錄課程](/learn/table-of-contents/) 中包含一行修復。

## 控制編號深度

```latex
\setcounter{secnumdepth}{2}
\setcounter{tocdepth}{2}
```

`secnumdepth` 決定編號的深度。在「article」中，章節為等級 1，小節等級為 2，子小節等級為 3，因此將計數器設定為 2 個數字節和小節，但使子小節標題保持未編號，同時保持其格式。 `tocdepth` 與目錄的想法相同：它控制目錄清單的深度，與頁面上的編號無關。這兩行都屬於序言。

一個常見的錯誤是跳過級別，例如從“\section”直接跳到“\subsubsection”，因為您喜歡較小的標題。編號仍然有效，但會產生奇怪的結果，例如“1.0.1”，讀者會忘記結構。選擇標題層級的含義並讓班級處理外觀。如果您不確定文件的骨架如何組合在一起，[文件骨架課程](/learn/document-sculpture/) 將逐步介紹它。