---

title: "符號台卡"
description: "一頁上有重音符號、大運算符、數字集和彈性分隔符號。"
category: "equation-craft"
order: 8
level: "beginner"
tags: ["math", "cheatsheet"]
featured: true
updated: 2026-07-25
---

# 符號台卡

本頁是參考卡而不是課程。涵蓋大多數日常數學的重音符號、大運算符、數字集和分隔符號都集中在一個地方。這裡的每個命令僅在數學模式下工作，並且數字集需要在序言中包含“\usepackage{amssymb}”。有關希臘字母及其基本關係，請參閱[希臘語和日常符號](/learn/greek-letters/)。要了解數學模式本身的工作原理，請從[數學模式基礎](/learn/math-mode/) 開始。

## 口音

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{xyz}
```

|命令 |呈现为 |常规含义|
| --- | --- | --- |
| `\帽子{x}` | x 有揚抑符 |估計器、單位向量、運算子 |
| `\bar{x}` | x 帶條|樣品平均值，複合綴合物 |
| `\tilde{x}` | x 帶波形符 |近似值、變換變數 |
| `\vec{x}` |带箭头的 x |向量|
| `\dot{x}`、`\ddot{x}` |一兩點|一階與二階導數 |
| `\widehat{xyz}`、`\overline{xyz}` |拉長口音 |多字母表達式上的重音符號 |

簡單的重音適合一個字母； “wide”和“over”變體會拉伸以跨越大括號中的任何內容。

## 大營運商

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint
\lim_{x \to 0} \max_{x} \inf_{x}
```

|命令 |意義|
| --- | --- |
| `\sum_{i=1}^n` |下限與上限總和 |
| `\prod_{i=1}^n` |產品 |
| `\int_a^b` |定積分 |
| `\點` |輪廓積分 |
| `\lim_{x \ 到 0}` |限制|
| `\max_{x}`、`\inf_{x}` |變數的最大值、下確界 |

邊界使用普通的下標和上標語法，當長度超過一個字元時用大括號括起來。在顯示數學中，總和、乘積和極限將其界限置於符號上方和下方。積分將其放在一邊。這是標準約定。

## 數位組

```latex
\mathbb{N} \mathbb{Z} \mathbb{Q} \mathbb{R} \mathbb{C}
```

這些是黑板粗體的自然數、整數、有理數、實數和複數。 `\mathbb` 字母表及其相關內容包含在 [Blackboard, script, Fraktur](/learn/mathbb-mathcal/) 中。

## 分隔符

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
```

`\left` 和 `\right` 將它們的分隔符增長到所包含材料的高度，因此高分數周圍的括號將其包裹起來，而不是將其剪切在文本高度處。他們必須成對出現。若要僅顯示一側，請以「\right.」關閉，隱形夥伴即可滿足配對要求。大括號是特殊字符，因此大括號寫作“\{”和“\}”。內積的尖括號是“\langle”和“\rangle”，而不是鍵盤的小於和大於符號，它們是形狀和間距錯誤的關係符號。

此卡的任何行都可以貼上到 [live Playground](/live/) 中，以查看來源旁邊的渲染形式。