---

title: "狄拉克記數法"
description: "用於胸罩、胸罩和矩陣元件的 braket 套件。"
category: "field-kits"
order: 2
level: "intermediate"
tags: ["physics"]
featured: false
updated: 2026-07-25
---

# 狄拉克符號

量子力學將狀態寫成 ket，將它們的對偶寫為 bra，內積寫為括號對。從 `\langle`、`|` 和 `\rangle` 手動建立符號是可行的，但它很乏味，而且分隔符號不會隨著內容而增長。 `braket` 套件提供了組合符號並調整所有內容大小以適合的命令。

```latex
\usepackage{braket}
\braket{\psi|\phi}
\braket{\psi|A|\phi}
\set{\vec{x}|x > 0}
```

## 每個指令的作用

`\braket{\psi|\phi}` 設定完整的內積：外部的尖括號，兩個狀態之間的垂直條，所有高度都匹配。對於兩個條形，`\braket{\psi|A|\phi}` 成為兩個狀態之間算子 A 的矩陣元素，用於期望值和擾動計算的形式。軟體套件也為它們自己的兩半提供了 `\bra{\psi}` 和 `\ket{\phi}`。 Bareket是散文中命名國家的常用方式。

`\set{\vec{x}|x > 0}` 是來自同一個套件的額外好處：帶有大括號和中間條的集合建構器表示法，其用途遠遠超出物理範圍。

尺寸調整是使用該包的真正原因。將分數或總和放入“\braket”內，括號和橫條會拉伸以匹配。手工建造的 `\langle ... \rangle` 在每個分隔符上都需要 `\left` 和 `\right`，並且仍然傾向於不成比例。

## 替代方案和鄰居

“physical”包提供了類似的集合，包括用於期望值的“\bra”、“\ket”、“\ev”和用於矩陣元素的“\mel”，以及導數和換向器的簡寫。這兩個套件都定義了“\bra”和“\ket”，因此每個文件選擇一個而不是同時載入兩者。在無法新增套件的範本中，`\langle \psi | \phi \rangle` 與高內容周圍的 `\left`/`\right` 會產生相同的輸出，但輸入更多。

對於通常位於同一文件中的費曼圖，諸如“tikz-feynman”之類的包構建在 TikZ 上；這是一項單獨的繪圖技能，在精神上更接近[交換圖](/learn/commutative-diagrams/)，而不是本頁上的任何內容。

常見的錯誤是使用鍵盤的角字符輸入“<\psi|\phi>”。這些是小於和大於關係，因此 LaTeX 將它們分開作為比較，並將它們繪製在錯誤的高度。真正的狄拉克括號來自“\langle”和“\rangle”，或者更好的是來自上面的命令。當您在 [live Playground](/live/) 中將兩個表單設定為彼此相鄰時，差異就很明顯了。