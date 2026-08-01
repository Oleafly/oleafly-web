---

title: "插入的美元缺失"
description: "泄漏到文本模式的下标和数学命令。"
category: "log-literacy"
order: 2
level: "beginner"
tags: ["errors", "math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Missing dollar check'
  questions:
    - prompt: 'What does Missing $ inserted usually mean?'
      choices:
        - 'You need a payment method'
        - 'Math-only syntax showed up in text mode'
        - 'A PDF font license expired'
        - 'You forgot \maketitle'
      answer: 'B'
      level: beginner
    - prompt: 'Which characters often trigger this in text mode?'
      choices:
        - 'Comma and period'
        - 'Underscore _ and caret ^ (and many math commands)'
        - 'Space and tab'
        - 'The @ in every email address'
      answer: 'B'
      level: beginner
    - prompt: 'How do you print a literal underscore in text (say a gene name)?'
      choices:
        - 'DNA_seq unchanged'
        - 'DNA\_seq'
        - 'DNA\&seq'
        - 'DNA\section{seq}'
      answer: 'B'
      level: beginner
    - prompt: 'The flagged line looks fine. What should you check next?'
      choices:
        - 'Printer drivers'
        - 'An earlier unclosed $ or mismatched math delimiters above that line'
        - 'Only the bibliography style'
        - 'Whether the file is named main.tex'
      answer: 'B'
      level: intermediate
    - prompt: 'Why isn''t a successful PDF proof the error was harmless?'
      choices:
        - 'PDFs never show math'
        - 'LaTeX often recovers by inserting $, which leaves wrong italics or spacing'
        - 'Compilers ignore all errors'
        - 'SyncTeX deletes the log'
      answer: 'B'
      level: beginner
---

# 插入缺失的美元

“缺少 $ 插入”是最常见的 LaTeX 错误，它的名称具有误导性：LaTeX 并不是要你花钱，而是告诉你纯数学语法出现在文本模式中。它插入“$”本身来恢复，继续编译，并且经常在下游留下奇怪的斜体输出，因此该消息值得真正修复而不是耸肩。

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

## 是什么触发了它

两个字符和一类命令专门属于数学模式。下划线“_”和脱字符“^”创建下标和上标，“\alpha”、“\frac”和“\leq”等命令生成数学符号。其中任何纯文本形式都会引发错误。典型的情况是包含下划线的标识符，例如文件名或基因名：句子中的“DNA_seq”会在“_”上跳动。

修复取决于您的意思。如果下划线是文字字符，请将其转义：`DNA\_seq` 打印带有真正下划线的名称。如果您指的是下标，那么您指的是数学，因此请包装表达式： `$x_i$` 用下标 i 设置 x，采用数学斜体并具有正确的间距。需要在文本中转义的完整字符名册有[它自己的课程](/learn/special-characters/)，并且数学分隔符本身包含在[数学模式基础知识](/learn/math-mode/)中。

## 当日志指向奇怪的地方时

报告的行号是 LaTeX 发现问题的位置，而不一定是您导致问题的位置。通常的罪魁祸首是之前未关闭的“$”：您打开了数学模式并且从未关闭它，因此 LaTeX 继续在数学模式下运行，直到出现问题（通常是在段落末尾）。显示数学中的空行会引发相同的错误，因为在数学模式下分段符是非法的。因此，当标记行看起来无害时，向上扫描奇数个美元符号并检查每个“\[”是否都有匹配的“\]”。

语法突出显示是发现失控的快速方法：任何 LaTeX 编辑器都会以不同的方式为数学区域着色，因此突然以数学颜色呈现的段落一目了然地指出了未封闭的美元。

最后一个警告：因为 LaTeX 通过插入丢失的 `$` 来恢复，所以 PDF 通常仍然可以构建。不要将 PDF 作为错误无害的证据。恢复的输出通常在文本应有的位置有杂散的斜体或损坏的间距，因此请修复源，直到日志干净为止。