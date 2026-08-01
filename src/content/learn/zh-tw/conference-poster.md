---

title: "海報位於A0"
description: "tikzposter、beamerposter 或幾何加上 TikZ。"
category: "on-stage"
order: 3
level: "intermediate"
tags: ["poster"]
featured: false
updated: 2026-07-25
---

# A0 的海報

會議海報是單頁，通常是 A0 或 A1，必須在一米半外可讀。 LaTeX 可以很好地處理這種格式，因為海報可以直接重複使用論文的方程式、圖形和參考書目。然而，普通的文件類別不會削減它：字體、邊距和列佈局都需要海報尺寸的版本。三種方法幾乎涵蓋了所有的 LaTeX 海報。

## 三個選項

`tikzposter` 類別是獲得現代學術海報的最直接途徑。它將內容組織成按列排列的彩色區塊，提供幾個完整的主題，並自行處理大紙張尺寸和縮放字體。骨架看起來像這樣：

```latex
\documentclass[25pt, a0paper, portrait]{tikzposter}
\title{Poster Title}
\author{You}
\usetheme{Default}
\begin{document}
\maketitle
\begin{columns}
 \column{0.5}
 \block{Motivation}{Text for the first block.}
 \column{0.5}
 \block{Results}{Text for the second block.}
\end{columns}
\end{document}
```

類別選項設定 25 點基本字體、A0 紙張和縱向方向。每個“\column{0.5}”佔據海報寬度的一小部分，每個“\block{title}{content}”成為一個標題面板。更改“\usetheme”會立即重新設定每個區塊的樣式。

「beamerposter」包將 Beamer 擴展到海報尺寸，因此甲板的主題、顏色和「塊」環境可以轉移到一個巨大的框架中。當您的團隊已經維護 Beamer 樣式並且許多大學海報模板都是基於它構建時，這是自然的選擇。

第三個選項是一個普通文件類，其中包含設定 A0 尺寸的 `geometry` 包，以及用於裝飾的 TikZ。這可以完全控制每一毫米，也是最精心設計的海報的製作方式，但你自己建造柱腳手架，所以要即時預算。

## 實用建議

無論您選擇哪種路線，都從工作模板而不是空白文件開始，例如來自[圖庫](/templates/)的模板，然後逐塊替換內容。在第一天設定紙張尺寸和方向，因為稍後更改它們會破壞每個手動調整的寬度。列印後正文應約為 24 至 32 點；任何低於 20 分的內容都不會被閱讀。更喜歡向量圖。當縮放到海報寬度時，為紙質專欄導出的繪圖會變得糊狀，因此請按照海報大小重新生成圖形，而不是拉伸它們。

最常見的失敗是將海報視為壓縮紙。規劃您第一次起草的大約三分之一的字數，讓數字承載參數，並通過在 A4 上全尺寸打印 PDF 的一塊來檢查結果，以判斷真實的字體大小，然後將文件發送到繪圖儀。