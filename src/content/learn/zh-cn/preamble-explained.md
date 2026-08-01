---

title: "以上一切开始{文档}"
description: "包、元数据和加载顺序：什么属于序言，什么不属于序言。"
category: "open-the-loop"
order: 3
level: "beginner"
tags: ["basics", "preamble"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Preamble check'
  questions:
    - prompt: 'What is the preamble?'
      choices:
        - 'Everything after \end{document}'
        - 'Everything between \documentclass{...} and \begin{document}'
        - 'Only the bibliography file'
        - 'The PDF outline panel'
      answer: 'B'
      level: beginner
    - prompt: 'Does preamble material print as body text on its own?'
      choices:
        - 'Yes. Every package prints a banner page.'
        - 'No. It configures the run; visible text starts in the body.'
        - 'Only if you use article.'
        - 'Only on the second compile.'
      answer: 'B'
      level: beginner
    - prompt: 'Why is hyperref usually loaded late in the preamble?'
      choices:
        - 'Loading it earlier is illegal.'
        - 'It rewrites a lot of commands, so it wants other packages loaded first.'
        - 'It only works after \maketitle.'
        - 'Loaded early, it disables amsmath.'
      answer: 'B'
      level: intermediate
    - prompt: 'Which of these belongs in the preamble?'
      choices:
        - 'A multi-paragraph introduction'
        - '\usepackage{amsmath} and \title{...}'
        - '\section{Results}'
        - 'The main \includegraphics for a figure'
      answer: 'B'
      level: beginner
    - prompt: 'What do options like 11pt on \documentclass mostly control?'
      choices:
        - 'Journal acceptance rate'
        - 'Global defaults such as base font size (and often paper size)'
        - 'Which OS you compiled on'
        - 'How many figures you''re allowed'
      answer: 'B'
      level: beginner
---

# 以上所有内容开始{document}

`\documentclass{...}` 和 `\begin{document}` 之间的所有内容都是**序言**。它不产生可见文本。它配置运行。字体、边距、包、自定义命令和文档元数据都在这里，这就是为什么成熟论文的序言通常比简介长的原因。一旦你知道了每一行的作用，复制的模板就不再那么神奇了，而变成了一个清单。

## 解剖学

```latex
\documentclass[11pt,a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx,booktabs}
\usepackage{hyperref} % load late

\title{Title}
\author{You}
\date{\today}
```

`\documentclass` 上的选项设置全局默认值：`11pt` 是其他所有内容缩放的基本字体大小，`a4paper` 声明纸张大小。这两条编码行是历史上的伴侣：“inputenc”告诉引擎您的源文件是 UTF-8，而“fontenc”选择字体编码，因此重音字符是真正的字形而不是复合字形。当前的 LaTeX 已经假定 UTF-8 输入，因此您将看到新文档中省略了这些行，但它们是无害的，并且模板保留它们是为了兼容。

中间块加载能力包。 [geometry](/learn/margins-geometry/) 在一个选项中设置边距，“amsmath”和“amssymb”提供几乎所有技术文档所需的数学环境和符号，“graphicx”为图形启用“\includegraphics”，“booktabs”提供使表格看起来专业的规则。最后，[hyperref](/learn/hyperlinks/) 使参考和引文可点击，并且故意最后加载，因为它重新定义了许多其他包的内部结构。

`\title`、`\author` 和 `\date` 行仅存储元数据。在正文中运行“\maketitle”之前不会打印任何内容，这就是为什么这些内容可以放在序言中。

## 经验法则

一些习惯可以使序言保持健康。每个作业装载一个包裹，并避免堆叠争夺同一区域的包裹，例如设置边距的两种方式。将 hyperref 保留在最后，并在其后面添加一些记录的例外情况，例如 Cleveref。将文档范围的选择放在类选项中而不是分散它们，因此“11pt”或“twocolumn”在任何人都可以看到的地方声明一次。一旦您的[自定义宏](/learn/custom-commands/) 超出了几行，请将它们移至“.sty”文件，以便多个文档可以共享一组定义。

最有用的纪律是消极的：如果您不知道为什么会有序言行，请在您的文档依赖它之前找出答案。复制的前导码会累积死线，而死线就是包冲突隐藏的地方。另请参阅[文档骨架](/learn/document-sculpture/) 和[引擎比较](/learn/engines-compared/)。