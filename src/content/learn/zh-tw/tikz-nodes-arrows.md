---

title: "節點和箭頭"
description: "命名節點、相對位置、箭頭提示。"
category: "draw-in-tex"
order: 1
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# 節點和箭頭

幾乎每個 TikZ 圖都簡化為兩種成分。節點是一段定位的內容，通常是一個標籤的方框或圓圈。邊是連接兩個節點的線或箭頭。一旦您可以放置​​節點並連接它們，流程圖、管道和框圖都是不同大小的相同練習。下面的範例放置了兩個命名框並在它們之間繪製了一個帶有標籤的箭頭：

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}
\node[draw] (src) {Source};
\node[draw, right=2cm of src] (dst) {Sink};
\draw[-{Latex}] (src) -- node[above] {edge} (dst);
\end{tikzpicture}
```

## 命名和放置節點

在 `\node[draw] (src) {Source};` 中，括號選項設定節點的樣式，而 `draw` 表示繪製其邊框，沒有邊框您將獲得浮動文字。 “(src)”是节点的名称，“{Source}”是其内容。名称是重要的部分：它让其他命令在不知道其坐标的情况下引用该节点。

第二個節點說明了為什麼這很重要。 `right=2cm of src` 來自 `positioning` 庫，並將 `dst` 放置在 `src` 右側兩厘米處，在它們的邊界之間測量。該庫還提供了“left=of”、“above=of”、“below=of”以及對角線組合，例如“above right=of”。以這種方式建立圖表（每個節點都相對於現有節點），並且當文字大小變化時佈局保持不變。像「\node at (4,2)」這樣的絕對座標仍然有用，但是基於它們建立的圖表需要在每次盒子增長時手動重新編號。

## 繪製箭頭

`\draw (src) -- (dst);` 在兩個命名節點之間繪製一條直線，TikZ 自動在節點邊界而不是節點中心開始和結束該線。 `[-{Latex}]` 選項指定箭頭提示：連字符之前沒有任何內容意味著沒有尾尖，而後面的 `Latex` 從目標的 `arrows.meta` 庫中選擇一個實心箭頭。寫“{Latex}-{Latex}”將給出一個雙頭箭頭。

中間路徑 `node[above] {edge}` 是附加到線本身的標籤。寫入路徑內的節點被放置在路徑的該點（預設為中間），而「above」將其移動到該行的正上方，因此文字不會位於筆畫上。這是註釋轉換和資料流的標準方法。

## 有回報的習慣

命名每個節點，即使在很小的圖中。無法連接未命名的節點，且小圖很少會保持很小。出於同樣的原因，更喜歡“定位”的相對位置而不是絕對座標。每個 TikZ 語句都以分號結尾。遺漏一個是最常見的 TikZ 錯誤，而且這些訊息通常與真正的問題相去甚遠。若要將許多方塊排列成整齊的行和列，請繼續[對齊流程圖框](/learn/tikz-flowchart/)。