---

title: "向量和粗體符號"
description: "mathbf、boldsymbol 和一致的向量巨集。"
category: "notation-depth"
order: 5
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# 向量和粗體符號

許多欄位將向量和矩陣設為粗體：**x** 表示向量，**A** 表示矩陣，粗體 beta 表示係數向量。在 LaTeX 中，有兩種​​不同的粗體數學指令，而且它們不可互換。知道要選擇哪一個，並將選擇包含在巨集中，可以使整個論文中的符號保持一致。

## 兩個指令

```latex
\mathbf{x} % upright bold (often matrices)
\boldsymbol{\beta} % bold italic Greek (amsmath)
```

`\mathbf` 將其參數切換為直立粗體羅馬字體。它適用於拉丁字母，因此“\mathbf{A}”為您提供了一個實心的直立粗體 A，許多文本都將其用於矩陣。它的限制是它只涵蓋字母和數字：“\mathbf{\beta}”沒有任何用處，因為粗體羅馬字體根本沒有希臘字形，並且 beta 打印不變。

由“amsmath”提供的“\boldsymbol”（技術上是由“amsmath”加載的“amsbsy”中類似“bm”的機制提供的），可以在保持其形狀的同時增強您傳遞給它的任何符號。 `\boldsymbol{\beta}` 生成粗体斜体 beta，而 `\boldsymbol{x}` 生成粗体斜体 x，与普通数学变量的倾斜样式相匹配。如果您的约定是矢量为粗体斜体，那么这就是您想要的命令。

所以實際的分割是：直立粗體拉丁字母，使用`\mathbf`；任何希臘語或應保持斜體的粗體，請使用“\boldsymbol”。

## 定義一次巨集

不要在整個文件中鍵入這些命令，而是在序言中定義語義巨集：

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
```

現在，您可以為向量編寫“\vect{x}”，為矩陣編寫“\mat{A}”。 「[1]」表示每個巨集都有一個參數，「#1」是該參數所在的位置。回報會稍後出現：如果期刊要求向量為直立粗體而不是粗體斜體，您可以編輯一行，以便“\vect”包裹“\mathbf”，並且論文中的每個向量都會在下一次編譯時更新。這勝過在 200 個方程中進行搜尋和取代。

巨集也使原始碼中的意圖可讀。六個月後，「\vect{w}」告訴您 w 是向量；裸露的「\boldsymbol{w}」只告訴您它是粗體。

## 一個常見錯誤

不要在数学中使用“\textbf”伪造粗体希腊语，也不要使用“\mathbf”并假设它有效。编译并仔细查看：粗体相邻的未粗体测试版在屏幕上很容易被忽略，但在打印中很明显。如果您想快速找到候選者，請將「\boldsymbol{\beta} \mathbf{\beta} \beta」之類的行貼上到 [live Playground](/live/) 中，然後並排比較三者。要加粗整個方程，包括像“\sum”這樣的符號，請查看“bm”包的“\bm”命令，它比“\boldsymbol”處理更多的符號類。

運行文本中的粗體是具有不同命令的不同主題；請參閱[文本中的強調](/learn/bold-italic/)。