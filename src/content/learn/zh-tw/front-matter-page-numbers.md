---

title: "羅馬頁面然後是阿拉伯頁面"
description: "委員會仍然期望的頭條編號。"
category: "long-form"
order: 2
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# 羅馬頁面然後是阿拉伯頁面

打開幾乎任何論文或教科書，你都會看到相同的約定：扉頁、摘要、目錄和致謝都用小寫羅馬數字編號為 i、ii、iii，然後第一個真正的章節從第 1 頁開始，用普通阿拉伯數字表示。前面的內容被視為一個單獨的、初步的序列，研究所明確檢查這個慣例。在 LaTeX 中，它只需要兩個指令。

## 模式

```latex
\begin{document}
\pagenumbering{roman}
\maketitle
\tableofcontents
\pagenumbering{arabic}
\chapter{Introduction}
...
\end{document}
```

`\pagenumbering{roman}` 同時做兩件事：它將數字樣式切換為小寫羅馬並將頁計數器重設為 1，因此標題頁變為第 i 頁。放在它後面的所有內容，通常是 `\maketitle`、摘要、[目錄](/learn/table-of-contents/) 以及任何圖形或表格列表，都會編號為 ii、iii、iv 等。

然後，在第一章之前， `\pagenumbering{arabic}` 將樣式切換回來並再次重設計數器，因此 `\chapter{Introduction}` 在新的第 1 頁上開啟。重置就是重點：沒有它，您的介紹將從第 7 頁開始，這不是委員會或引文慣例所期望的。

因為「book」和「report」類別中的「\chapter」總是開始一個新頁面，所以在切換之前不需要明確的「\newpage」。在沒有章節的課程中，您將首先新增“\clearpage”，這樣編號變更就不會落在頁面中間。

## 為你做這件事的課程

一些論文課程提供 `\frontmatter` / `\mainmatter` / `\backmatter`。這些來自“book”類，是表達同一件事的更高層次的方式。 `\frontmatter` 切換到羅馬編號並使章節未編號（因此前言沒有「第 1 章」標籤）。 `\mainmatter` 切換到阿拉伯語並恢復編號的章節。 `\backmatter` 在最後再次關閉類似附錄的資料的章節編號。如果您的大學的模板是基於“book”或“memoir”構建的，則更喜歡這些命令而不是原始的“\pagenumbering”，因為模板可能會將額外的行為附加到它們上，例如前面內容的不同標題。這兩種方法並不衝突，但沒有理由同時使用這兩種方法。

## 一件事要檢查

羅馬編號的頁面應該與您的目錄一致。如果你的摘要在目錄中顯示為“iv”頁，但打印為“2”，通常的原因是在其應該涵蓋的內容之後放置了“\pagenumbering”調用，或者缺少第二次編譯：目錄中的頁碼來自“.aux”文件，因此在判斷編號是否正確之前需要[編譯兩次](/learn/compile-to-pdf/)。編譯，再次編譯，然後將目錄與實際頁面進行比較。