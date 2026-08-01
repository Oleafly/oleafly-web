---

title: "希臘文和日常符號"
description: "alpha 到 Omega，加上您每天鍵入的運算子和關係。"
category: "equation-craft"
order: 3
level: "beginner"
tags: ["math", "symbols"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Greek letters check'
  questions:
    - prompt: 'How do you get a Greek letter like alpha in math?'
      choices:
        - 'Only Unicode works; backslash names never do.'
        - 'Write a command like $\alpha$ inside math mode.'
        - 'Use \textbf{alpha}.'
        - 'Paste HTML &alpha;.'
      answer: 'B'
      level: beginner
    - prompt: 'How do lowercase and uppercase Greek usually differ in LaTeX?'
      choices:
        - 'There is no capital Greek in math.'
        - 'They are different commands (for example \alpha vs \Gamma).'
        - 'Capitals only work in beamer.'
        - 'Uppercase always needs $$.'
      answer: 'B'
      explanation: 'Plenty of capitals have their own names (\Gamma, \Delta, \Omega). A few just look like Latin letters.'
      level: beginner
    - prompt: 'Where do Greek-letter commands belong?'
      choices:
        - 'Only in the preamble'
        - 'In math mode (inline or display)'
        - 'Only inside \caption'
        - 'Only in the .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'Why load amssymb or amsfonts when you''re writing Greek and relations?'
      choices:
        - 'For color photos'
        - 'Extra symbol fonts and common math symbols that go with the Greek set'
        - 'To replace \section'
        - 'So you only compile once'
      answer: 'B'
      level: beginner
---

# 希臘文和日常符號

您日常輸入的大多數符號都是希臘字母加上一些運算符和關係。它們的工作方式都是相同的：反斜線加上符號名稱，僅在數學模式下。此頁為每日集。 [數學符號備忘單](/learn/math-symbols-cheatsheet/) 是更完整的參考。

## 希臘文（數學模式）

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

小寫指令給小寫字母：`\alpha`、`\beta`、`\gamma`。命令的第一個字母為大寫：`\Gamma`、`\Delta`、`\Omega`。並非每個大寫字母都作為命令存在，因為某些希臘字母大寫字母與拉丁字母相同。大寫的 alpha 就是 A，所以沒有 `\Alpha`。 beta、epsilon 和其他幾個也是如此。請輸入拉丁字母。

一些字母具有帶有“var”前綴的變體形式。 `\epsilon` 是月形形狀，而 `\varepsilon` 是捲曲形狀。 `\theta` 和 `\vartheta`、`\phi` 和 `\varphi`、`\rho` 和 `\varrho` 的區別相同。這兩種形式都不更正確。選擇您所在領域喜歡的一個，並在整個文件中一致使用它。

所有這些都是數學模式命令，因此運行文本中的希臘字母寫作“$\alpha$”。文本中的裸露「\alpha」會停止編譯，並出現[插入缺少美元](/learn/missing-dollar/)中涵蓋的錯誤。

## 日常操作員和關係

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

第一行是算術和比較：「\pm」表示加減，「\cdot」表示乘法點，「\times」表示叉，「\div」表示除法，然後「\leq」、「\geq」和「\neq」用於比較，「\approx」表示近似相等，「\equiv」表示恆等或同餘。第二行是集合語言：「\in」表示成員資格，「\subset」和「\subseteq」表示包含，「\cup」和「\cap」表示並集和交集，「\emptyset」表示空集合。第三部分涵蓋了箭頭和分析：「\to」表示極限和函數類型中的普通箭頭，「\mapsto」表示元素的去向，「\Rightarrow」表示蘊涵，「\infty」表示無窮大，「\partial」和「\nabla」表示偏導數和梯度，這些在[導數和積分](/learn/derivativesbla」中得到了全面處理的全面處理。

所有這些周圍的間距都是自動的。 LaTeX 知道 '\leq' 是一個關係，而 '\cup' 是一個二元運算，並且它相應地對每個操作進行間隔，這是使用命令而不是貼上 Unicode 符號的一個很好的理由。透過在[現場操場](/live/) 中輸入一些公式並觀看它們的渲染，可以最快地理解這些名稱。