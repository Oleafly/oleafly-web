---

title: "PDF 內的連結"
description: "hyperref、url、href、顏色和 PDF 元資料。"
category: "paper-bones"
order: 6
level: "intermediate"
tags: ["structure", "hyperref"]
featured: false
updated: 2026-07-25
---

# PDF 內的鏈接

PDF 不仅仅是屏幕上的纸张。它可以攜帶即時連結：可點擊的 URL、跳到右圖的交叉引用、跳到參考書目的引用以及根據章節標題構建的側邊欄大綱。在 LaTeX 中，一个包提供了所有这些：“hyperref”。載入它後，文件中的每個「\ref」、「\cite」和目錄條目都會悄悄地變得可點擊，而不會更改原始碼的其餘部分。

## 載入和配置 hyperref

```latex
\usepackage[colorlinks=true,linkcolor=blue,citecolor=blue,urlcolor=blue]{hyperref}
\url{https://oleafly.com}
\href{https://oleafly.com}{Oleafly}
\hypersetup{pdftitle={My Paper}, pdfauthor={You}}
```

方括號中的選項控制連結的外觀。預設情況下，hyperref 在每個連結周圍繪製一個彩色矩形，大多數人覺得它很難看。設定「colorlinks=true」會以彩色文字取代框，三個顏色選項會依連結類型分割：「linkcolor」涵蓋內部跳轉，例如章節和圖形引用，「citecolor」涵蓋引文，「urlcolor」涵蓋網址。將它們分開很重要，因為否則一篇充滿引文的論文可能會變成一堵藍色的牆。

## url 與 href

這兩個連結命令執行不同的工作。 `\url{...}` 以打字機字體列印地址本身並使其可點擊，這就是您在參考書目或腳註中想要的內容，讀者應該在其中看到連結的位置。 `\href{address}{text}` 將地址隱藏在您提供的任何文字後面，例如網頁上的連結。在可能列印的文件中優先使用“\url”，因為“\href”標籤使紙質閱讀器無法輸入地址。

一個實用的好處是：「\url」知道如何跨行分隔長地址，而不插入會破壞地址的連字符，這是普通打字機字體 URL 無法做到的。

## PDF 元數據

`\hypersetup` 允許您在載入後更改任何 hyperref 選項，它也是您設定文件元資料的地方。 `pdftitle` 和 `pdfauthor` 欄位填寫 PDF 閱讀器在其視窗列和檔案屬性中顯示的標題和作者。如果沒有它們，讀者通常會顯示檔案名稱或第一個標題，在您提交或共用的文件中看起來未完成。您可以在序言中的“\usepackage{hyperref}”之後隨時呼叫“\hypersetup”。

## 適合列印的文檔

對於列印友善的文檔，請使用「隱藏連結」。將其作為選項傳遞，“\usepackage[hidelinks]{hyperref}”，使每個連結在螢幕上可點擊，但刪除彩色框和彩色文本，因此列印的頁面看起來完全正常。許多期刊類別都需要這樣。

要避免的一個常見錯誤：hyperref 重新定義了許多內部命令，因此應將其作為序言中最後的套件之一載入。如果您的連結指向錯誤的頁面，或者您從另一個套件中收到奇怪的錯誤，則首先要檢查載入順序。請參閱 [交叉引用](/learn/cross-references/) 以了解 hyperref 使可點選的 `\label` 和 `\ref` 機制。