---

title: "狄拉克记数法"
description: "用于胸罩、胸罩和矩阵元件的 braket 套件。"
category: "field-kits"
order: 2
level: "intermediate"
tags: ["physics"]
featured: false
updated: 2026-07-25
---

# 狄拉克符号

量子力学将状态写为 ket，将它们的对偶写为 bra，将内积写为括号对。从 `\langle`、`|` 和 `\rangle` 手动构建符号是可行的，但它很乏味，而且分隔符不会随着内容而增长。 `braket` 包提供了组合符号并调整所有内容大小以适合的命令。

```latex
\usepackage{braket}
\braket{\psi|\phi}
\braket{\psi|A|\phi}
\set{\vec{x}|x > 0}
```

## 每个命令的作用

`\braket{\psi|\phi}` 设置完整的内积：外部的尖括号，两个状态之间的垂直条，所有高度都匹配。对于两个条形，`\braket{\psi|A|\phi}` 成为两个状态之间算子 A 的矩阵元素，用于期望值和扰动计算的形式。该软件包还为它们自己的两半提供了 `\bra{\psi}` 和 `\ket{\phi}`。 Bareket是散文中命名国家的常用方式。

`\set{\vec{x}|x > 0}` 是来自同一个包的额外好处：带有大括号和中间条的集合构建器表示法，其用途远远超出物理范围。

尺寸调整是使用该包的真正原因。将分数或总和放入“\braket”内，括号和横条会拉伸以匹配。手工构建的 `\langle ... \rangle` 在每个分隔符上都需要 `\left` 和 `\right`，并且仍然倾向于不成比例。

## 替代方案和邻居

“physical”包提供了类似的集合，包括用于期望值的“\bra”、“\ket”、“\ev”和用于矩阵元素的“\mel”，以及导数和换向器的简写。这两个包都定义了“\bra”和“\ket”，因此每个文档选择一个而不是同时加载两者。在无法添加包的模板中，`\langle \psi | \phi \rangle` 与高内容周围的 `\left`/`\right` 会产生相同的输出，但输入更多。

对于通常位于同一文档中的费曼图，诸如“tikz-feynman”之类的包构建在 TikZ 上；这是一项单独的绘图技能，在精神上更接近[交换图](/learn/commutative-diagrams/)，而不是本页上的任何内容。

常见的错误是使用键盘的角字符输入“<\psi|\phi>”。这些是小于和大于关系，因此 LaTeX 将它们隔开作为比较，并将它们绘制在错误的高度。真正的狄拉克括号来自“\langle”和“\rangle”，或者更好的是来自上面的命令。当您在 [live Playground](/live/) 中将两个表单设置为彼此相邻时，差异就很明显了。