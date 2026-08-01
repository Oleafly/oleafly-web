---

title: "黑板、劇本、Fraktur"
description: "mathbb、mathcal、mathfrak、mathrm 以及每個字母表出現的時間。"
category: "notation-depth"
order: 6
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# 黑板、腳本、Fraktur

數學使用不只一種字母表。實數得到黑板粗體 R，拉格朗日得到書法 L，李代數得到 Fraktur g，每一個都是 LaTeX 中的不同命令，而不是您打開的字體。如果使用一致，字母表會先告訴讀者一個字母在周圍的句子中表示什麼物件。

```latex
\usepackage{amssymb}

x \in \mathbb{R}^n, \quad
\mathcal{L}(\theta), \quad
\mathfrak{g} = \mathfrak{su}(2), \quad
\int f(x)\,\mathrm{d}x
```

## 四個字母

|指令 |看|典型用途|
| --- | --- | --- |
| `\mathbb{R}` |黑板|號碼組 |
| `\mathcal{L}` |書法|拉格朗日損失 |
| `\mathfrak{g}` |碎片 |李代數 |
| `\mathrm{d}` |直立|差速器、操作員名稱 |

`\mathbb` 產生黑板粗體，雙擊字母幾乎專門用於數字集合：`\mathbb{N}`、`\mathbb{Z}`、`\mathbb{Q}`、`\mathbb{R}`、`\mathbb{C}`。它來自“amssymb”包，僅涵蓋大寫字母。字體沒有小寫字母，因此小寫參數會列印錯誤的字形或沒有任何有用的信息。

`\mathcal` 提供書法大寫字母、拉格朗日量、損失函數和集合族的通常選擇。它還僅涵蓋大寫字母，並且可以在核心 LaTeX 中運行，無需額外的軟體包。

`\mathfrak` 也來自 `amssymb`，是 Fraktur，兩種情況都可用。小寫 Fraktur 命名為李代數，大寫字母出現在代數和集合論中，代表理想和基數等。

`\mathrm` 不是裝飾字母，而是數學中直立羅馬字體的切換。對於任何符號而不是變數來說，它都是正確的工具：「\mathrm{d}x」、單位或文字子標籤（如「x_{\mathrm{max}}」）中的微分。對於 tr 和rank 等命名運算符，有一個更好的機制，在[您發明一次的運算子](/learn/argmin-argmax/) 中介紹。

## 實用筆記

如果“\mathcal”對於您的目的來說看起來太簡單，“mathrsfs”包會添加“\mathscr”，這是一個更華麗的腳本，通常用於滑輪和西格瑪代數。兩者可以共存並在同一篇論文中表示不同的對象。

常見的錯誤是將這些字母視為裝飾。每一個在大多數領域都具有傳統的意義，看到「\mathbb{A}」的讀者會期待一些類似於集合和數字的東西。在分配字母之前檢查您所在領域的約定，分配後，為整個文件的每個物件保留一個字母表。所有四個在 [live Playground](/live/) 中幾秒鐘內並排渲染。