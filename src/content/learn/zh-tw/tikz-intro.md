---

title: "你的第一張 TikZ 圖片"
description: "節點、邊、保持向量的三盒管道。"
category: "floats-and-ink"
order: 6
level: "intermediate"
tags: ["tikz", "figures"]
featured: false
updated: 2026-07-25
---

# 你的第一張 TikZ 圖片

TikZ 是一種存在於 LaTeX 文件中的繪圖語言。您無需導入從其他工具匯出的圖表，而是用文字描述它，然後編譯器繪製它。好處是輸出是使用文件自己的字體的向量圖形，因此標籤與周圍的文字完全匹配，並在任何縮放下中保持清晰。代價是您需要編寫座標和選項，而不是拖曳框框。對於由方框和箭頭建立的圖表，這種權衡通常是值得的。這是一個三盒管道，規範的第一張圖片：

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[node distance=1.5cm]
 \node[draw, rounded corners] (a) {Input};
 \node[draw, rounded corners, right=of a] (b) {Model};
 \node[draw, rounded corners, right=of b] (c) {Output};
 \draw[-Latex] (a) -- (b);
 \draw[-Latex] (b) -- (c);
\end{tikzpicture}
```

## 節點

節點是一段內容，通常是文本，放置在某個位置，可以選擇在其周圍繪製形狀。在 `\node[draw, roundedcorns] (a) {Input};` 中，方括號中的選項表示繪製節點的邊框並將其圓角，`(a)` 為節點提供了稍後可以引用的名稱，而 `{Input}` 是裡面的文本。第二個節點使用“positioning”庫中的“right=of a”，將其放置在節點“a”的右側，距離由環境選項中的“node distance=1.5cm”設定。將節點相對放置，而不是放置在絕對座標上，當一個標籤變長時，整個圖表就會調整。

## 邊緣

邊是連接兩點的線。因為節點已命名，所以可以透過名稱連接它們：「\draw (a) -- (b);」從節點「a」到節點「b」繪製一條直線。 TikZ 在節點邊界而不是節點中心開始和結束線條。 `[-Latex]` 選項設定 `arrows.meta` 庫中的箭頭樣式，為此行在其目的地提供一個實心箭頭。該提示在每個路徑的末尾適用一次，這就是該範例使用兩個“\draw”命令的原因。單一「(a) -- (b) -- (c)」路徑只會在「c」處放置箭頭。

## 下一步要去哪裡

當需要標題和數字時，將“tikzpicture”包裝在“figure”環境中，就像圖像一樣。 TikZ 程式碼不會在這些頁內預覽中呈現，因此請在專案中編譯程式碼片段以查看結果。在 Oleafly 中，Diagram Composer 還可以產生可編輯的 TikZ 作為起點。初學者最常見的錯誤是忘記每個 TikZ 命令結尾的分號，這會產生很長的令人困惑的錯誤。當圖表超過三個方塊時，繼續使用[節點和箭頭](/learn/tikz-nodes-arrows/) 和[對齊的流程圖框](/learn/tikz-flowchart/)。