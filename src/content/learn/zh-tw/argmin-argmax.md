---

title: "您發明一次的運算符"
description: "為 argmin、argmax 和類似名稱聲明 MathOperator。"
category: "notation-depth"
order: 3
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# 你發明一次的運算符

LaTeX 附帶了諸如 `\sin`、`\log` 和 `\max` 之類的命名運算符，它們以直立類型列印，周圍有正確的間距。它不附帶 `\argmin` 或 `\argmax`，儘管優化論文經常使用它們。如果您在數學模式下以普通字母形式輸入“argmin”，LaTeX 會將其視為六個變數的乘積：字母以斜體顯示，擠壓在一起，沒有運算符間距。在序言中自己聲明一次運算符。

## 宣告運算符

```latex
\usepackage{amsmath}
\DeclareMathOperator*{\argmin}{arg\,min}
\DeclareMathOperator*{\argmax}{arg\,max}

\[
\theta^\star = \argmin_\theta \mathcal{L}(\theta)
\]
```

这是每个部分的作用。 `\DeclareMathOperator` 來自 `amsmath` 並建立一個新命令，其參數被排版為運算符文字：直立羅馬字母，並且 LaTeX 的間距規則已應用於 `\max` 和 `\lim`。第一個參數是您將鍵入的命令名稱，第二個參數是實際列印的文字。 `arg\,min` 內的 `\,` 在兩個單字之間插入一個細空格，這比將它們放在一起讀起來更好。

`\DeclareMathOperator` 之後的星號很重要。帶有星號的聲明使運算符的行為類似於“\lim”：在顯示數學中，用“_”附加的任何內容都直接位於運算符下方，而不是尾隨其右下角。這正是您想要的“\argmin_\theta”，其中正在最佳化的變數應該會出現在下面。如果沒有星號，下標將保留在一側，這是「\log_2」等運算子的慣例。在內聯數學中，無論哪種方式，下標都位於側面，以避免拉伸行高。

## 重複使用模式

同樣的技術涵蓋了您所在領域使用的 LaTeX 不知道的任何運算符。幾個常見的：

```latex
\DeclareMathOperator{\tr}{tr}
\DeclareMathOperator{\rank}{rank}
\DeclareMathOperator{\diag}{diag}
\DeclareMathOperator*{\esssup}{ess\,sup}
```

請注意，「\tr」、「\rank」和「\diag」未加星號，因為它們的下標（當它們有下標時）屬於旁邊。只有諸如“\esssup”之類的限制式運算子才能獲得星號。

在序言中宣告運算子而不是內聯編寫 `\mathrm{argmin}` 會獲得雙重回報。整個文件中的符號保持一致，如果期刊要求不同的渲染，您可以更改一行，而不是搜尋每個方程式。在 [live Playground](/live/) 中一起嘗試宣告和顯示行，看看加星標的下標放置的行為如何。

一個常見的錯誤：宣告一個名稱與現有指令衝突的運算符，例如「\max」或「\deg」。 LaTeX 將因「已定義」錯誤而停止。選擇一個新名稱，或僅當您確實打算替換原始名稱時才使用“\renewcommand”。