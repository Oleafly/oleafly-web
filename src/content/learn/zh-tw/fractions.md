---

title: "保持可讀的堆疊比率"
description: "frac、dfrac、tfrac 以及 amsmath 的連分。"
category: "equation-craft"
order: 2
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Fractions check'
  questions:
    - prompt: 'What does \frac{a}{b} produce?'
      choices:
        - 'A footnote labeled a/b'
        - 'A stacked fraction: a on top, b below'
        - 'Bold a over italic b'
        - 'A two-column table'
      answer: 'B'
      level: beginner
    - prompt: 'How does \frac size change inline vs display?'
      choices:
        - 'Same size always'
        - 'Smaller and tighter inline; fuller size in display math'
        - 'Always huge inline'
        - 'It only works in display'
      answer: 'B'
      level: beginner
    - prompt: 'When would you reach for \dfrac?'
      choices:
        - 'To force a full-size (display-style) fraction even in a sentence'
        - 'To draw a chemical diagram'
        - 'To start a chapter'
        - 'To turn amsmath off'
      answer: 'A'
      hint: 'The d is for display style.'
      explanation: 'Use it sparingly in a sentence. Tall fractions push the line spacing around.'
      level: intermediate
    - prompt: 'Why use \cfrac for continued fractions?'
      choices:
        - 'It''s shorter to type than \frac'
        - 'Nested \frac gets tiny each level; \cfrac keeps each level readable'
        - 'It works outside math mode'
        - 'It numbers equations for you'
      answer: 'B'
      level: intermediate
    - prompt: 'If \dfrac is undefined, what''s the usual fix?'
      choices:
        - 'Buy a commercial font'
        - 'Load amsmath in the preamble'
        - 'Switch to \documentclass{book}'
        - 'Delete every dollar sign'
      answer: 'B'
      level: beginner
---

# 保持可讀的堆疊比率

分数是 LaTeX 输出的第一个明显优于文字处理程序的地方：一个真正的堆叠分子和分母，它们之间有一个规则，大小适合周围的数学。核心指令是“\frac”。重要的是它的大小如何随上下文变化，以及当自动选择损害可读性时如何覆盖它。

## 壓裂、dfrac、tfrac

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

`\frac{a}{b}` 接受兩個括號參數，第一個是分子，第二個是分母，並將它們排版在水平規則上。它的大小是上下文相關的。在顯示數學中（在 `\[ ... \]` 或 `equation` 環境中），分數被設定為完整大小。在內聯數學中（在“$ ... $”內部）它被設置得更小且更緊湊，因此它不會強制段落的行分開。

有時你想覆蓋它。來自“amsmath”的“\dfrac”強制顯示樣式：即使在句子中間也是全尺寸的堆疊分數。謹慎使用它，因為內聯的高分數會拉伸其周圍的行距。 `\tfrac` 則相反：即使在顯示數學中，它也會強制使用小文字樣式，這對於簡單係數（例如大表達式前面的一半）很方便，在這種情況下，全尺寸堆疊會引起太多注意。

這兩個參數都可以保存任意數學，包括其他分數：“\frac{1}{1 + \frac{1}{x}}”嵌套，並且 LaTeX 會自動縮小內部分數。然而，當嵌套變深時，就有更好的工具了。

## 連分數

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

嵌套的“\frac”在每個級別都會縮小，因此到連分數的第三層時，數字幾乎難以辨認。 “\cfrac”，也來自“amsmath”，使每個等級保持完整顯示尺寸並對齊分子，這是排版連分數的公認方法。您可以傳遞一個可選位置“\cfrac[l]{1}{...}”，將分子推到左側而不是使其居中。

## 實際判斷

所有 `\dfrac`、`\tfrac` 和 `\cfrac` 都需要在序言中加入 `\usepackage{amsmath}`；普通的 `\frac` 沒有它也可以工作。如果您在 `\dfrac` 上看到“未定義的控制序列”，則表示包行遺失。

對於內聯文本，有時斜線形式比堆疊分數更具可讀性：編寫“(a/b)”或“a/b”可以保持行高均勻，並且對於簡單的比率來說可讀性良好。一個好的經驗法則是在顯示數學中堆疊分數，其中有垂直空間，並且更喜歡內聯斜線，除非分數是句子的要點。在 [live Playground](/live/) 中雙向輸入一個段落並進行比較；行間距的差異立即可見。如果像「$」和「\[」這樣的數學分隔符號仍然不熟悉，請從[數學模式基礎知識](/learn/math-mode/)開始。