---

title: "符号台卡"
description: "一页上有重音符号、大运算符、数字集和弹性分隔符。"
category: "equation-craft"
order: 8
level: "beginner"
tags: ["math", "cheatsheet"]
featured: true
updated: 2026-07-25
---

# 符号台卡

本页是参考卡而不是课程。涵盖大多数日常数学的重音符号、大运算符、数字集和分隔符都集中在一处。这里的每个命令仅在数学模式下工作，并且数字集需要在序言中包含“\usepackage{amssymb}”。有关希腊字母及其基本关系，请参阅[希腊语和日常符号](/learn/greek-letters/)。要了解数学模式本身的工作原理，请从[数学模式基础知识](/learn/math-mode/) 开始。

## 口音

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{xyz}
```

|命令 |呈现为 |常规含义|
| --- | --- | --- |
| `\帽子{x}` | x 带有扬抑符 |估计器、单位向量、运算符 |
| `\bar{x}` | x 带条|样品平均值，复杂缀合物 |
| `\tilde{x}` | x 带波形符 |近似值、变换变量 |
| `\vec{x}` |带箭头的 x |向量|
| `\dot{x}`、`\ddot{x}` |一两个点|一阶和二阶导数 |
| `\widehat{xyz}`、`\overline{xyz}` |拉长口音 |多字母表达式上的重音符号 |

简单的重音适合一个字母； “wide”和“over”变体会拉伸以跨越大括号中的任何内容。

## 大运营商

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint
\lim_{x \to 0} \max_{x} \inf_{x}
```

|命令 |意义|
| --- | --- |
| `\sum_{i=1}^n` |下限和上限总和 |
| `\prod_{i=1}^n` |产品 |
| `\int_a^b` |定积分 |
| `\点` |轮廓积分 |
| `\lim_{x \ 到 0}` |限制|
| `\max_{x}`、`\inf_{x}` |变量的最大值、下确界 |

边界使用普通的下标和上标语法，当长度超过一个字符时用大括号括起来。在显示数学中，总和、乘积和极限将其界限置于符号上方和下方。积分将其放在一边。这是标准约定。

## 数字组

```latex
\mathbb{N} \mathbb{Z} \mathbb{Q} \mathbb{R} \mathbb{C}
```

这些是黑板粗体的自然数、整数、有理数、实数和复数。 `\mathbb` 字母表及其相关内容包含在 [Blackboard, script, Fraktur](/learn/mathbb-mathcal/) 中。

## 分隔符

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
```

`\left` 和 `\right` 将它们的分隔符增长到所包含材料的高度，因此高分数周围的括号将其包裹起来，而不是将其剪切在文本高度处。他们必须成对出现。要仅显示一侧，请用“\right.”关闭，隐形伙伴即可满足配对要求。大括号是特殊字符，因此大括号写作“\{”和“\}”。内积的尖括号是“\langle”和“\rangle”，而不是键盘的小于和大于符号，它们是形状和间距错误的关系符号。

此卡的任何行都可以粘贴到 [live Playground](/live/) 中，以查看源旁边的渲染形式。