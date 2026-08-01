---

title: "單人、二分之一、雙人"
description: "setspace 用於整個文件或本機區塊。"
category: "the-page"
order: 2
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# 單人、二分之一、雙人

預設情況下，LaTeX 將文字設定為單倍行距，並選擇適合字體的行之間的距離。這就是一本完成的書的樣子，但很多文件都需要更寬鬆：論文規定通常要求半行距或雙倍行距，期刊要求雙倍行距的手稿，以便審稿人有空間進行書寫。使用“setspace”包更改行距。它可以調整正文文本，而不會破壞文件中應保持單倍行距的部分。

## 文檔寬度間距

```latex
\usepackage{setspace}
\onehalfspacing
% \doublespacing
% \singlespacing
```

在序言中載入包，然後發出三個聲明之一。 `\onehalfspacing` 將整個文件設為半行距，`\doublespacing` 將其加倍，`\singlespacing` 返回正常，如果您需要中途切換回來，這非常有用。這些聲明從其出現的地方起生效，因此將聲明放在序言中就涵蓋了所有內容。

使用 setspace 而不是手動擺弄 `\baselinestretch` 或 `\linespread` 的原因是它故意保留的內容：腳註、圖形和表格標題以及浮動保持單倍行距，這正是論文指南和排版約定所期望的。幼稚的全局拉伸也會使腳註的行距加倍，這讀起來很糟糕。

如果您需要快捷方式未涵蓋的因子，「\setstretch{1.25}」接受任何乘數。請注意，文字處理器意義上的「雙倍間距」對應於 LaTeX 術語中大約 1.66 的拉伸，並且「\doublespacing」已經說明了這一點，因此請抵制編寫「\setstretch{2}」的衝動，除非法規確實要求這樣做。

## 僅一個區塊的間距

有時，只有文件的一部分需要不同的間距：長引用、聲明頁或摘要必須是雙倍行距，而其餘部分則不需要。

```latex
\begin{spacing}{1.2}
 ...
\end{spacing}
```

`spacing` 環境將給定的拉伸因子（此處為 1.2）應用於 `\begin` 和 `\end` 之間的文本，然後恢復先前有效的內容。該軟體包還為常見情況提供了現成的“singlespace”和“doublespace”環境。由於變更的範圍受環境影響，因此您不能忘記切換回來，這是在文件中發出裸聲明的常見失敗模式。

## 一句警告

不要使用行間距來達到頁數。拉伸到 1.1 以使論文看起來更長是書中最古老的技巧，並且具有嚴格格式的場所會運行自動檢查來捕獲它。 [頁數限制指南](/learn/page-limits-without-crimes/) 涵蓋了合法的替代方案。儲存 setspace 的用途：滿足明確的間距要求，然後切換回單間距以用於相機就緒版本。