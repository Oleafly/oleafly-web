---

title: "當 PowerPoint 無法剪切時，在 TikZ 中研究圖表"
description: "何時在 TeX 中繪製管道、自動機和交換圖，以便它們為日誌重新著色、在列印時保持清晰、並作為儲存庫中的原始程式碼存在。"
date: 2026-07-08
tags: [tikz, figures, research]
---

PowerPoint 圖表在 PDF 中變成模糊矩形。 TikZ 圖保留
向量，匹配文檔字體，並在期刊需要灰度時重新著色
或不同的口音。第一個小時的交易較為陡峭。之後，小
編輯是文本差異，而不是螢幕截圖考古。

您不需要為每個圖形都使用 TikZ。照片、原始顯微鏡框架，以及
matplotlib 中的密集圖通常保留為 PDF/PNG 所包含的內容。使用 TikZ 的時候
圖是結構：管道、自動機、架構框、類別圖、
簡單的樹。

##從小處開始

三節點管道教導此模型：

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.5cm]
  \node[draw] (a) {Data};
  \node[draw,right=of a] (b) {Model};
  \node[draw,right=of b] (c) {Loss};
  \draw[-Latex] (a) -- (b) -- (c);
\end{tikzpicture}
```

名稱節點。使用“--”或明確錨點（“(a.east)”）連接。更喜歡親戚
將（`right=of a`）放置在你永遠不會記得的神奇座標上。
課程：[第一張 TikZ 圖片](/learn/tikz-intro/),
[節點和箭頭](/learn/tikz-nodes-arrows/)。

## 風格勝過一次性選項

定義一次樣式，以便每個框都符合：

```latex
\tikzset{
  block/.style={draw, rounded corners, align=center, minimum height=1cm},
  arr/.style={-Latex}
}
```

當期刊要求加粗線條或單色時，改變風格，而不是
二十個節點。使用命名顏色或小調色板巨集進行著色，以便您可以交換
無需尋找十六進位代碼即可重音。

## CS 和工程：一致的流程圖

使用“positioning”庫（“below=of”、“right=of”）讓盒子共用一個網格。
手動絕對座標是插入一個節點時圖表如何旋轉的方式。保留
文字短；將詳細資訊放在標題中。指南：
[對齊流程圖](/learn/tikz-flowchart/)。

對於神經網路或系統草圖，將「區塊」與「註釋」分開。
註解可以是沒有邊框的較小字體節點，因此主路徑保持不變
以兩列寬度可讀。

## 數學與理論：交換圖

`tikz-cd` 是類別樣式圖的常用路徑，無需放置每個
手動節點：

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
  A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
  C \arrow[r,"k"'] & D
\end{tikzcd}
```

指引：[交換圖](/learn/commutative-diagrams/)。對於樹木和
存在證明理論圖、專門庫；在你之前先從簡單開始
導入一半的 CTAN。

## 外部化和編譯時間

一篇包含 20 個 TikZ 圖的論文會減慢完整編譯的速度。選項：

- 將每個圖形放入自己的文件中並“\input”。
- 使用「外部」庫，使圖片成為快取的 PDF。
- 當您只關心散文時，請使用“\tikzexternaldisable”草稿。

匯出投影片：將「獨立」TikZ 文件編譯為 PDF，轉換為 PNG
僅當套牌工具無法取得 PDF 時。將“.tex”保留為事實來源。

## Canvas 工具 vs 手寫 TikZ

一些研究編輯器包含一個圖表畫布，可以發出可編輯的 TikZ（用於
例如 Oleafly 的圖表編輯器：繪製、調整程式碼、編譯圖表，
插入）。這對於可以拖曳的幾何體非常有用。手寫 TikZ 仍勝出
用於緊密交換圖和高度規則的網格。無論哪種方式，請提交
TikZ 原始碼，不僅僅是 PNG。

## 將圖表保留在儲存庫中

將圖形來源存放在紙張旁邊：

```text
figures/
  pipeline.tex
  pipeline.pdf   % optional build product; often gitignored
```

當期刊需要更粗的線條時，您可以編輯原始碼並重新編譯。當一個
合著者「改進」了幻燈片工具中的螢幕截圖，你失去了唯一的
可編輯版本。

## 常見故障模式

兩列溢出很常見。作為最後的手段使用“\resizebox”進行縮放；
首先重新設計寬度。字體不匹配是另一個原因：更喜歡預設文檔
字體優於 TikZ 內的硬編碼字體系列，除非期刊需要。
檢查演講的對比度，因為投影機上的隱形灰色是經典
陷阱。未標記的箭頭迫使標題解釋每條邊，這意味著
該圖不完整。

## 圖層和疊加

對於共享圖形的演講和論文，請分層建立圖表：基礎
首先是框，然後是箭頭，然後是標籤。調試時註解掉圖層
安置。 Beamer 覆蓋（`\pause`、`\onslide`）可以逐步顯示管道
如果您保持節點名稱穩定，請從相同的 TikZ 來源開始。

## 輔助使用和列印

不要只用紅色和綠色來編碼意義。也使用形狀或線條樣式。
檢查灰階圖。如果讀者是這樣的話，標題仍然應該有意義
色盲或在黑白實驗室印表機上列印。

## 有效的工作流程

在紙上畫三十秒，然後建造最小的 TikZ，顯示
索賠。定义一次样式并重复使用它们。单独编译该图，直到
看起來不錯，把它扔到紙上，然後讓標題來表達這一主張。提交
`.tex`。

PowerPoint 非常適合一次性實驗室會議。對於期刊將列印的 PDF，
您可以重新著色的向量來源擊敗另一輪「您可以發送可編輯的
文件？ 」