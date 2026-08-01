---

title: "希腊语和日常符号"
description: "alpha 到 Omega，加上您每天键入的运算符和关系。"
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

# 希腊语和日常符号

您日常输入的大多数符号都是希腊字母加上一些运算符和关系。它们的工作方式都是相同的：反斜杠加上符号名称，仅在数学模式下。此页为每日集。 [数学符号备忘单](/learn/math-symbols-cheatsheet/) 是更完整的参考。

## 希腊语（数学模式）

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

小写命令给出小写字母：`\alpha`、`\beta`、`\gamma`。命令的第一个字母为大写：`\Gamma`、`\Delta`、`\Omega`。并非每个大写字母都作为命令存在，因为某些希腊字母大写字母与拉丁字母相同。大写的 alpha 就是 A，所以没有 `\Alpha`。 beta、epsilon 和其他几个也是如此。请输入拉丁字母。

一些字母具有带有“var”前缀的变体形式。 `\epsilon` 是月形形状，而 `\varepsilon` 是卷曲形状。 `\theta` 和 `\vartheta`、`\phi` 和 `\varphi`、`\rho` 和 `\varrho` 的区别相同。这两种形式都不更正确。选择您所在领域喜欢的一个，并在整个文档中一致使用它。

所有这些都是数学模式命令，因此运行文本中的希腊字母写作“$\alpha$”。文本中的裸露“\alpha”会停止编译，并出现[插入缺少美元](/learn/missing-dollar/)中涵盖的错误。

## 日常操作员和关系

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

第一行是算术和比较：“\pm”表示加减，“\cdot”表示乘法点，“\times”表示叉，“\div”表示除法，然后“\leq”、“\geq”和“\neq”用于比较，“\approx”表示近似相等，“\equiv”表示恒等或同余。第二行是集合语言：“\in”表示成员资格，“\subset”和“\subseteq”表示包含，“\cup”和“\cap”表示并集和交集，“\emptyset”表示空集。第三部分涵盖了箭头和分析：“\to”表示极限和函数类型中的普通箭头，“\mapsto”表示元素的去向，“\Rightarrow”表示蕴涵，“\infty”表示无穷大，“\partial”和“\nabla”表示偏导数和梯度，这些在[导数和积分](/learn/derivatives-integrals/)中得到了全面的处理。

所有这些周围的间距都是自动的。 LaTeX 知道 '\leq' 是一个关系，而 '\cup' 是一个二元运算，并且它相应地对每个操作进行间隔，这是使用命令而不是粘贴 Unicode 符号的一个很好的理由。通过在[现场操场](/live/) 中输入一些公式并观看它们的渲染，可以最快地理解这些名称。