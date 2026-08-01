---

title: "頁碼開啟或關閉"
description: "簡單、空洞、羅馬文與阿拉伯文，抑制標題頁上的數字。"
category: "type-and-shape"
order: 5
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# 開啟或關閉頁碼

頁碼預設出現在「article」：標準類別使用「plain」頁面樣式，將頁碼置於每頁底部的中心。通常這很好，你從來不會考慮它。您確實需要考慮的三種情況是在標題頁上隱藏編號、完全關閉編號以及在較長的文檔中在羅馬數字和阿拉伯數字之間切換。

## 隱藏扉頁上的號碼

扉頁底部有一個孤獨的“1”，看起來還沒有完成。修復方法是在標題設定後放置一行：

```latex
\maketitle
\thispagestyle{empty}
```

`\thispagestyle{empty}` 僅更改目前頁面的頁面樣式，而 `empty` 是在頁首或頁尾中不列印任何內容的內建樣式。順序很重要：它必須位於同一頁面上的 `\maketitle` 之後，因為 `\maketitle` 本身會重設頁面樣式。請注意，頁面仍然很重要；下一頁的編號將是 2。如果您使用 `\begin{titlepage}...\end{titlepage}` 而不是 `\maketitle`，則編號會被隱藏，下一頁從 1 開始。

## 樣式和編號系統

```latex
\pagestyle{plain} % number at bottom
\pagestyle{empty} % nothing
\pagenumbering{roman}
\pagenumbering{arabic}
```

這兩對命令控制不同的東西，將它們混合起來就是典型的錯誤。 `\pagestyle{...}` 控制數字出現的位置及其周圍的內容：`plain` 給出居中的頁腳編號，`empty` 將從該點開始的每個頁面中刪除頁眉和頁腳。它沒有說明這個數字是什麼樣的。

`\pagenumbering{...}` 控制數字的書寫方式：`roman` 產生 i, ii, iii，而 `arabic` 產生 1, 2, 3。還有用於 I、II、III 的 `Roman` 和用於 a、b、c 的 `alph`，儘管您很少需要它們。 `\pagenumbering` 也將頁計數器重設為 1。這種重置是一個功能，而不是一個錯誤：它可以讓論文透過 vi 將其前言編號為 i，然後從第 1 頁開始第一章。

如果您想要完全控制放置，例如角落中的數字或與運行標題配對，那麼這是 fancyhdr 包的工作，而不是這些內建程式的工作。請參閱[運行頭和腳](/learn/headers-footers/)。

## 常見錯誤

當您的意思是「\thispagestyle{empty}」時，寫入「\pagestyle{empty}」會默默地從整個文件中刪除編號，並且您可能不會注意到，直到審閱者詢問為什麼您的頁面沒有編號。請記住規則：「\thispagestyle」是單頁例外，「\pagestyle」是文件範圍的開關。

論文前言：[羅馬/阿拉伯語指南](/learn/front-matter-page-numbers/)。