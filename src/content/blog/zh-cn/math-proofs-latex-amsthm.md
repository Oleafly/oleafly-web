---

title: "数学学生：保持一致的定理、证明和符号"
description: "amsthm 样式、引理编号、宏观卫生、长推导以及纯粹和应用数学写作的多文件习惯。"
date: 2026-07-12
tags: [mathematics, proofs, math]
---

数学论文是符号加证明结构。 LaTeX 是默认值，因为两者
一旦论证的长度超过一页，Word 中就会感到痛苦。编译器是
这不是最困难的部分。一致性是：当你插入一个时跳动的定理数
引理，字母“V”，表示三种不同的事物，以及留下引理的证明
QED 标记浮动在下一行。

这是课程作业、arXiv 笔记和论文章节的实用设置。
偷你需要的东西；忽略其余的，直到感到疼痛为止。

## amsthm 早期，在第一个引理之前

在发明特设的粗体“定理”之前加载“amsthm”。标题：

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{proposition}[theorem]{Proposition}
\newtheorem{corollary}[theorem]{Corollary}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]
\newtheorem{example}{Example}[section]
\theoremstyle{remark}
\newtheorem*{remark}{Remark}
```

当您在上方插入材料时，按部分编号可以保持引用稳定
结果。为引理和命题共享计数器（“[定理]”）是很常见的
在纯数学中；应用论文有时会独立对所有内容进行编号。选择一个
并在整个文档中坚持使用它。

课程：[定理和证明块](/learn/theorems-proofs/)。

## 干净地结束的证明

使用“proof”环境，使证明结束标记落在正确的位置：

```latex
\begin{proof}
  ...
\end{proof}
```

如果最后一行是显示的方程，则以“\qedhere”结尾，因此该框会显示
以下行不是孤儿。嵌套证明（证明内的声明）有效
具有自己的简短证明的“声明”环境比缩进更好
永远不会结束的散文。

对于教师想要手写步骤的家庭作业，仍然使用 LaTeX
干净的提交 PDF，但将粗略的工作保存在单独的注释文件中，以便您可以
重写时不要删除唯一正确的行。

## 宏观卫生

定义一次符号：

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\eps}{\varepsilon}
\DeclareMathOperator{\Hom}{Hom}
\DeclareMathOperator{\Spec}{Spec}
```

如果两个概念共享一个字母，请使用宏来消除歧义（`\VectSpace` 与
`\RandomVar`) 而不是重复使用具有不同字体的 `V`。共同作者不会
猜猜哪种字体代表哪个对象。当注释表超出屏幕时，
将其放入“notation.tex”和“\input”中，以便每个人都编辑一个文件。

人工智能工具喜欢发明新符号。如果您使用一个，请将宏块粘贴到
提示并要求它只使用定义的名称。同样的纪律适用
没有 AI：新符号 → 添加到工作表 → 然后输入。

## 对齐长导数

`align` 和 `split` 保持多行计算的可读性。只显示你的行号
将用“\eqref”引用。一堵编号方程的墙比一堵墙更难理解
带有两条标记线的简短叙述。

```latex
\begin{align}
  f(x)
  &= g(x) + h(x) \label{eq:decomp} \\
  &= \cdots
\end{align}
```

对于应携带一个数字的单个多线方程，请使用“split”
在“方程”里面。对于案例，“案例”或“对齐”胜过自制数组
管道。

## 重新排序后仍然存在的交叉引用

切勿将“by Theorem 2.3”写为纯文本。使用 `\ref` 或使用 `cleveref`，
`\cref{thm:main}`。标签位于标题或定理标题行之后，而不是
之前。如果两个章节共享“thm:main”等标签，则按章节添加前缀
(`ch3-thm:main`)，否则当您合并文件时，您将得到静默的错误目标。

项目范围内的转到定义和实时损坏引用检查有助于处理多文件
论文。现在这是正常的研究编辑领域，而不是奢侈品。

## 多文件笔记和论文

使用根文件和部分输入，即使是很长的作业也会变得更容易。论文
几乎总是希望每一章都有“\include”，而在起草一章时则需要“\includeonly”
一次章节。将数字保留在“figures/ch3/”下，以便重新排序章节
不打破路径。

完整的论文编译速度很慢。草图模式，外部化重型 TikZ，以及
尽可能只编译您正在编辑的章节。参见
[分割章节文件](/learn/split-chapter-files/) 和
[加速编译](/learn/speed-up-compilation/)。

## 当 PDF 是上交时

课程作业仍然需要无聊的外壳：教学大纲的页边距、页码、
标题，有时是学术诚信的声明。的
[快速参考](/learn/cheatsheet/) 涵盖了这些内容，以便您可以关注
证明。

保留源码。当遇到下一个问题时，没有“.tex”的标记 PDF 是一个死胡同
set 重复使用相同的前导码。具有 Git 历史记录的本地文件夹（或研究
检查点为您编译的编辑器）击败了“final_v3_really.pdf”
桌面。

## 提交之前

确保定理和引理共享一致的编号方案，每个符号都在
主体在宏表中定义，证明使用 `proof` / `\qedhere`
在需要的地方。仅对您引用的方程进行编号。所有交叉引用都应该是
`\ref`/`\cref`，不是硬编码的数字。打开 PDF 一次：字体嵌入、边距
与简介相匹配。

## 家庭作业与纸质论文

对于家庭作业来说，清晰胜过包装巧妙。对于论文或论文章节，
对定理设置和宏表进行一次投资，然后重复使用。不要重建
在项目中期编号，因为一篇博客文章建议了不同的风格。

## 与共同作者分享

发送 PDF 供阅读，发送存储库（或源 zip）供编辑。如果一个
合著者仅返回扫描的标记，在当天应用并提交。陈旧的
纸堆是两个人以不同方式“修复”相同引理的方式。

在完成设置工作之后，LaTeX 基本上消失了，您可以考虑数学。