---

title: "樹和簡單的圖表"
description: "子語法和間距旋鈕。"
category: "draw-in-tex"
order: 3
level: "advanced"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# 樹和簡單圖

層次結構不斷出現：解析樹、決策樹、文件版面、分類法。透過「定位」一次繪製一個盒子是可行的，但是用手保持兄弟姐妹均勻分佈和水平均勻分佈是很乏味的。 TikZ `trees` 程式庫可讓您使用嵌套的 `child` 操作來描述層次結構本身，並為您計算佈局：

```latex
\usetikzlibrary{trees}
\begin{tikzpicture}[
 every node/.style={draw, circle, minimum size=7mm},
 level distance=12mm,
 sibling distance=18mm
]
\node{A}
 child{node{B}}
 child{node{C}
 child{node{D}}
 child{node{E}}};
\end{tikzpicture}
```

## 讀取子語法

该图片包含一个声明。它以根“\node{A}”開始，附加到它的每個“child{...}”聲明一個子樹。子級通常包含一個“node{...}”作為自己的標籤，並且可能包含進一步的“child”操作，這就是“C”獲取子級“D”和“E”的方式。大括號的嵌套反映了樹的嵌套，因此您可以直接從縮排讀取結構。 TikZ 將每個關卡放置在前一個等級的下方，並自動繪製連接邊。 one 語句在最後一個大括號後以一個分號結束。結構內部缺失或多餘的分號是導致此處錯誤的常見原因。

## 三個佈局旋鈕

頂部的選項控制外觀和間距。 `every node/.style={draw,circle,minimum size=7mm}` 立即將樣式應用於所有節點：每個節點都有一個繪製的邊框、一個圓形形狀和 7 毫米的最小直徑，因此單個字母會產生統一的圓形。 `level distance=12mm` 設定父級與其子級之間的垂直間隙。 `sibling distance=18mm` 設定同一父級的相鄰子級之間的水平間隙。

兄弟距離是您最常調整的旋鈕。 「trees」函式庫為給定層級的每個子樹保留相同的寬度，因此如果該值太小，寬子樹可能會發生衝突。標準補救措施是加寬頂部附近的間距，其中子樹最寬，並使用每級設置，例如“level 1/.style={sibling distance=36mm}”和“level 2/.style={sibling distance=18mm}”。如果您的標籤寬度差異很大，請透過從共用樣式中刪除「circle」來從圓形切換到矩形。

## 除了小樹之外

邊緣透過“edge fromparent/.style”取得樣式，例如添加箭頭或更粗的線條。對於超過大約十幾個節點的樹，或對於具有循環的一般圖，「trees」庫變得有限。 「forest」包透過自動打包處理大樹。具有“graphdrawing”演算法的“graphs”庫涵蓋任意圖形，儘管該路徑需要 LuaLaTeX。 TikZ 不會在這些頁內預覽中呈現，因此請編譯範例以查看佈局。如果此語法是新的，請從 [您的第一張 TikZ 圖片](/learn/tikz-intro/) 中的基礎知識開始。