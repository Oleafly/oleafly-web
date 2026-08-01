---

title: "ギリシャ語と日常のシンボル"
description: "alpha から Omega まで、さらに毎日入力する演算子と関係も含まれます。"
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

# ギリシャ語と日常のシンボル

あなたが毎日入力するほとんどの記号は、ギリシャ文字にいくつかの演算子と関係を加えたものです。これらはすべて同じように機能します。バックスラッシュとシンボル名を組み合わせたものです。ただし、数学モードのみです。このページは日替わりセットです。 [数学記号チートシート](/learn/math-symbols-cheatsheet/) は、より完全なリファレンスです。

## ギリシャ語 (数学モード)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

小文字のコマンドでは、`\alpha`、`\beta`、`\gamma` のように小文字が与えられます。コマンドの最初の文字を大文字にします: `\Gamma`、`\Delta`、`\Omega`。一部のギリシャ大文字はラテン文字と同一であるため、すべての大文字がコマンドとして存在するわけではありません。大文字のアルファは A だけなので、「\Alpha」はありません。同じことが、ベータ、イプシロン、およびその他のいくつかにも当てはまります。代わりにラテン文字を入力してください。

いくつかの文字には、接頭辞「var」が付いた異形があります。 `\epsilon` は月状型、`\varepsilon` は巻き毛型です。 `\theta` と `\vartheta`、 `\phi` と `\varphi`、 `\rho` と `\varrho` も同様に異なります。どちらの形式もより正確というわけではありません。自分の分野で好まれるものを選択し、ドキュメント全体で一貫して使用してください。

これらはすべて数学モードのコマンドであるため、実行中のテキスト内のギリシャ文字は `$\alpha$` と書かれます。テキスト内の裸の `\alpha` は、[Missing $inserted](/learn/missing-dollar/) でカバーされるエラーでコンパイルを停止します。

## 日常の演算子と関係

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

最初の行は算術と比較です。プラスマイナスの場合は `\pm`、乗算のドットの場合は `\cdot`、十字の場合は `\times`、除算の場合は `\div`、次に比較の場合は `\leq`、`\geq`、および `\neq`、近似等価の場合は `\estimate`、恒等または合同の場合は `\equiv` です。 2 行目はセット言語です。メンバーシップの場合は `\in`、包含の場合は `\subset` と `\subseteq`、和集合と交差の場合は `\cup` と `\cap`、空のセットの場合は `\emptyset` です。 3 番目では、矢印と解析について説明します。極限と関数型の単純な矢印の `\to`、要素の移動先の `\mapsto`、含意の `\Rightarrow`、無限の `\infty`、および偏微分と勾配の `\partial` と `\nabla` は、[微分と積分](/learn/derivatives-integrals/) で完全に扱われます。

これらすべての周囲の間隔は自動的に設定されます。 LaTeX は、`\leq` がリレーションであり、`¥cup` がバイナリ演算であることを認識し、それに応じてそれぞれにスペースを配置します。これが、Unicode 記号を貼り付けるのではなくコマンドを使用する十分な理由です。 [ライブ プレイグラウンド](/live/) にいくつかの式を入力し、レンダリングされるのを観察すると、最も早く名前が理解できます。