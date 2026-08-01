---

title: "跑動的頭和腳"
description: "標題和頁碼的 fancyhdr 模式。"
category: "the-page"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# 跑步的頭和腳

行頭是每頁頂部的文字條，行腳是其底部的對應部分。在書籍或論文中，它們通常帶有章節標題和頁碼。在提交的論文中，它們可能會包含簡短的標題、作者，或什麼也不包含。 LaTeX 的內建頁面樣式（「plain」、「empty」、「headings」）涵蓋了基礎知識，但當您想要特定的組合（例如左側的標題和右側的頁碼）時，您可以使用「fancyhdr」套件。

## 標準配方

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{Short title}
\fancyhead[R]{\thepage}
\renewcommand{\headrulewidth}{0.4pt}
```

這裡的每一行只做一項工作。 `\usepackage{fancyhdr}` 在序言中載入套件。 `\pagestyle{fancy}` 將整個文件切換到 fancyhdr 的可設定樣式。 `\fancyhf{}` 會清除每個頁首和頁尾字段，這很重要，因為 fancyhdr 附帶了預設值（頁碼和節標記），您幾乎永遠不想與自己的預設值混合。從頭開始可以避免意外。

接下來的兩行重新填充字段。 `\fancyhead[L]{Short title}` 將文字文字放入標題的左側槽中，而 `\fancyhead[R]{\thepage}` 將目前頁碼放入右側槽中。 `\thepage` 是一個擴展為頁碼的命令，因此它會在每個頁面上自動更新。如果你想把東西放在底部，有一個匹配的`\fancyfoot[L/C/R]{...}`。

最後，「\headrulewidth」控制標題下的細水平線。將其設為“0.4pt”會繪製細線；將其設為“0pt”以完全刪除規則。 `\footrulewidth` 也存在並且預設為零。

## 雙面文檔

如果您的文件類別使用「twoside」（「book」的預設值），則頁面會在偶數和奇數之間交替，且標題通常會相互鏡像。 fancyhdr 使用偶數/奇數選擇器來處理此問題： `\fancyhead[LE,RO]{\thepage}` 將頁碼放在偶數頁的左側和奇數頁的右側，這是讀者的拇指找到它的位置。您可以將其與保存當前章節標題的“\leftmark”和“\rightmark”結合起來，以重現經典的書籍佈局。

## 章節頁面和空的外觀

章節開頭頁面會忽略您花俏的樣式，因為「\chapter」在幕後呼叫「\thispagestyle{plain}」。這是故意的，大多數設計都保留它。如果您希望這些頁面裸露，請新增「\fancypagestyle{plain}{\fancyhf{}}」來重新定義「plain」的含義。

一個常見的警告是：fancyhdr 可能會抱怨 `\headheight` 太小。修復方法正是訊息所建議的，例如序言中的 `\setlength{\headheight}{14pt}`，或將 `headheight=14pt` 傳遞給 [geometry package](/learn/margins-geometry/)（如果您已使用它）。這是一個佈局保留，而不是一個錯誤，但將其靜音可以使您的日誌保持乾淨，並使基線網格保持誠實。