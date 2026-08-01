---

title: "IEEE 格式的實踐"
description: "IEEEtran 會議和期刊模式、作者區塊和兩欄問題。"
category: "venue-formats"
order: 2
level: "intermediate"
tags: ["venues", "ieee"]
featured: false
updated: 2026-07-25
---

# IEEE 格式的實踐

IEEE 場所，從小型研討會到旗艦期刊，都分享一個類別文件：「IEEEtran」。學一次，數百個場地就開放了。

## 會議 vs 期刊模式

同一類根據選項產生不同的佈局：

```latex
% Conference paper
\documentclass[conference]{IEEEtran}

% Journal article
\documentclass[journal]{IEEEtran}
```

會議模式為您提供經典的外觀：10pt 時間、兩欄、預設無頁碼。日記模式更改了標題佈局，在末尾添加了作者傳記，並調整了間距。始終使用您場地要求的模式，它們不可互換。有關 IEEE 與 ACM 的更廣泛比較，請參閱 [ACM、IEEE 和朋友](/learn/acm-ieee-and-friends/)。

## 以 IEEE 方式創作

會議模式有自己的作者標記。不要用“\\”和手動居中來對抗它：

```latex
\author{
  \IEEEauthorblockN{Ada Lovelace}
  \IEEEauthorblockA{Analytical Engines Lab\\
  University of London\\
  ada@example.edu}
  \and
  \IEEEauthorblockN{Charles Babbage}
  \IEEEauthorblockA{Department of Mathematics\\
  University of Cambridge\\
  cb@example.edu}
}
```

`\IEEEauthorblockN` 保存名稱，`\IEEEauthorblockA` 保存從屬關係，`\and` 將作者分隔為列。

## 生活有兩列

兩列佈局是新手遇到困難的地方。規則：

|問題 |修復 |
|---|---|
|寬圖或表格|使用`figure*` / `table*`，浮動到頁面頂部 |
|長方程式溢出 |打破它，看[一欄或兩欄](/learn/one-column-or-two/) | 中的兩欄戰術
|最後一頁欄位參差不齊|使用 `\IEEEtriggeratref` 或 `balance` 套件手動平衡它們 |
| URL 進入頁邊距 | `\usepackage{url}` 或 `xurl` 可以更好地打破 |

對於廣泛的內容來說，加星號的浮動環境是不可協商的：

```latex
\begin{figure*}[t]
  \centering
  \includegraphics[width=\textwidth]{pipeline}
  \caption{Full-width figures need the starred environment.}
\end{figure*}
```

請注意，「figure*」拒絕「[h]」放置，它始終浮動到頁面頂部。為此做好計劃而不是與之抗爭。

## 參考書目

IEEE 使用其自己的 BibTeX 風格的數位引文：

```latex
\bibliographystyle{IEEEtran}
\bibliography{references}
```

匹配的“IEEEtran.bst”隨該類別一起提供。審閱者註意到，不要替換“plain”或“ieeetr”，並且相機就緒檢查表無論如何都會捕獲它。

## 真正的模板在哪裡獲取

始終從官方來源開始：ieee.org 上的 IEEE 模板選擇器，或會議自己的作者工具包頁面。會議組織者有時會修補範本（版權聲明、額外頁尾），因此會場的版本勝過通用副本。 Oleafly 的[範本庫](/templates/) 包含一個 IEEE 風格的會議啟動器，它可以在捆綁的 Tectonic 引擎上進行開箱即用的編譯，方便您在放入官方套件之前進行起草。

## 常見問題清單

- 使用 pdfLaTeX 相容程式碼進行編譯，IEEEtran 早於 fontspec 並期望經典引擎
- 不要添加“幾何圖形”或更改邊距，類別會準確設定它們
- 在某些期刊提交中，在“\maketitle”之後需要“\IEEEpeerreviewmaketitle”
- 如果您的電腦上的範本出現錯誤，請像任何[損壞的範本](/learn/fix-broken-template/) 一樣對其進行分類