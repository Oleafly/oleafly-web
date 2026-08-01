---

title: "對齊的流程圖框"
description: "定位庫，使列共享優勢。"
category: "draw-in-tex"
order: 2
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# 對齊流程圖框

流程圖看起來很業餘，原因只有一個：方框幾乎對齊。 TikZ 在結構上避免了這個問題，因為每個盒子都是相對於另一個盒子放置的，所以一列盒子通過構造而不是通過目測共享一個軸。第二個成分是命名樣式，因此所有盒子都同意其形狀和最小尺寸。這是一個垂直的三步驟流程：

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[
 box/.style={draw, rounded corners, align=center, minimum width=2.8cm},
 node distance=10mm and 14mm
]
\node[box] (i) {Input};
\node[box, below=of i] (p) {Process};
\node[box, below=of p] (o) {Output};
\draw[-Latex] (i) -- (p);
\draw[-Latex] (p) -- (o);
\end{tikzpicture}
```

## 定義一次樣式

`box/.style={...}` 行建立一個名為 `box` 的可重複使用樣式。它的內容是普通的節點選項：「draw」為節點提供邊框，「圓角」軟化它，「align=center」使多行文字在節點內居中，「minimum width=2.8cm」強制每個框至少達到該寬度，這樣短標籤就不會收縮成小框。從那時起，「\node[box]」會應用整個集合。當您需要填滿顏色或更大的寬度時，請變更一行，整個圖表就會更新。這是您維護的圖表，而不是您重新繪製的圖表。

## 兩個方向的間距

`node distance=10mm and 14mm` 設定 `positioning` 庫所使用的預設間隙：第一個值是垂直距離，第二個值是水平距離。就位後，「below=of i」將處理框放置在輸入框下方 10 毫米處，邊緣到邊緣，並完全居中。第二列將使用“right=of p”並距側面 14 毫米。由於每個放置都會連結一個現有節點，因此插入一個步驟意味著新增一個節點並更新一個「below=of」引用。下游的一切都隨之改變。您也可以覆蓋每個節點的距離，例如“below=15mm of i”。

## 連線步驟

每個“\draw[-Latex] (i) -- (p);”從一個命名節點到下一個命名節點繪製一個箭頭，“-Latex”從目標端的“arrows.meta”庫中選擇一個實心箭頭。箭頭自動在節點邊界處連接。對於決策分支，從特定錨點繪製，例如“(p.east)”從右側離開，一旦圖表需要拐角，就使用“--++(2,0) |-”等彎曲路線。

TikZ 輸出不會在這些頁內預覽中呈現，因此請編譯程式碼片段以查看它。流程圖中的典型錯誤是「僅此一次」放置一些具有絕對座標的方塊：這些方塊在下一次編輯後最終會錯位。保持每個位置的相對性，並參閱[節點和箭頭](/learn/tikz-nodes-arrows/) 以了解底層的放置選項。