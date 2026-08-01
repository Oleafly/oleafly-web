---

title: "保持可读的堆叠比率"
description: "frac、dfrac、tfrac 以及 amsmath 的连分数。"
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

# 保持可读的堆叠比率

分数是 LaTeX 输出的第一个明显优于文字处理程序的地方：一个真正的堆叠分子和分母，它们之间有一个规则，大小适合周围的数学。核心命令是“\frac”。重要的是它的大小如何随上下文变化，以及当自动选择损害可读性时如何覆盖它。

## 压裂、dfrac、tfrac

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

`\frac{a}{b}` 接受两个括号参数，第一个是分子，第二个是分母，并将它们排版在水平规则上。它的大小是上下文相关的。在显示数学中（在 `\[ ... \]` 或 `equation` 环境中），分数被设置为完整大小。在内联数学中（在“$ ... $”内部）它被设置得更小且更紧凑，因此它不会强制段落的行分开。

有时你想覆盖它。来自“amsmath”的“\dfrac”强制显示样式：即使在句子中间也是全尺寸的堆叠分数。谨慎使用它，因为内联的高分数会拉伸其周围的行距。 `\tfrac` 则相反：即使在显示数学中，它也会强制使用小文本样式，这对于简单系数（例如大表达式前面的一半）很方便，在这种情况下，全尺寸堆栈会引起太多注意。

这两个参数都可以保存任意数学，包括其他分数：“\frac{1}{1 + \frac{1}{x}}”嵌套，并且 LaTeX 会自动缩小内部分数。然而，当嵌套变深时，就有更好的工具了。

## 连分数

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

嵌套的“\frac”在每个级别都会缩小，因此到连分数的第三层时，数字几乎难以辨认。 “\cfrac”，也来自“amsmath”，使每个级别保持完整显示尺寸并对齐分子，这是排版连分数的公认方法。您可以传递一个可选位置“\cfrac[l]{1}{...}”，将分子推到左侧而不是使其居中。

## 实际判断

所有 `\dfrac`、`\tfrac` 和 `\cfrac` 都需要在序言中添加 `\usepackage{amsmath}`；普通的 `\frac` 没有它也可以工作。如果您在 `\dfrac` 上看到“未定义的控制序列”，则说明包行丢失。

对于内联文本，有时斜线形式比堆叠分数更具可读性：编写“(a/b)”或“a/b”可以保持行高均匀，并且对于简单的比率来说可读性良好。一个好的经验法则是在显示数学中堆叠分数，其中有垂直空间，并且更喜欢内联斜线，除非分数是句子的要点。在 [live Playground](/live/) 中双向输入一个段落并进行比较；行间距的差异立即可见。如果像“$”和“\[”这样的数学分隔符仍然不熟悉，请从[数学模式基础知识](/learn/math-mode/)开始。