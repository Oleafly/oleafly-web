---

title: "互相争斗的软件包"
description: "hyperref 最后，cleveref 之后，过时的对，最小的例子。"
category: "runtime"
order: 5
level: "advanced"
tags: ["packages", "errors"]
featured: false
updated: 2026-07-25
---

# 互相争斗的包

LaTeX 包可以自由地重新定义彼此的命令，并且许多包是故意这样做的。这就是“hyperref”将每个交叉引用变成链接的方式。这也意味着两个包可以各自用不兼容的假设修补相同的命令，结果范围从像“命令\脚注已定义”或“包 xcolor 的选项冲突”这样的彻底错误到默默错误的输出。在将包添加到之前工作的序言中后，冲突几乎总是会立即出现，这也是最大的线索。

## 加载顺序是成功的一半

许多冲突纯粹是通过顺序来解决的，因为后来加载的包拥有最后的决定权。最重要的规则：在序言末尾附近加载“hyperref”。它重写了 LaTeX 交叉引用机制的大部分，并且在它之后加载的包可能会撤消这些补丁。一个简短的例外列表必须稍后出现，而您实际遇到的例外是“cleveref”，它被设计为位于“hyperref”之上，并且必须在其之后加载：

```latex
\usepackage{graphicx}
\usepackage{amsmath}
% ... everything else ...
\usepackage{hyperref}
\usepackage{cleveref} % after hyperref, by design
```

当一个包的文档指定相对于另一个包的位置时，请相信它。这些注释的存在是因为有人已经遇到了你即将遇到的冲突。

## 过时的软件包及其替代品

有些冲突是由于在其后继包旁边加载死包而引起的。不要将 `epsfig` 与 `graphicx`、`subfigure` 与 `subcaption` 或旧的 `times` 和 `mathptmx` 垫片与现代字体包（如 `newtxtext`）结合起来。旧模板是通常的来源：它们加载编写模板时当前的任何内容，然后在顶部添加现代等效内容。拆下旧的并保留替换的。 `nag` 包可以在编译时为您标记过时的用法。

## 选项冲突

“包 X 的选项冲突”意味着该包使用不同的选项加载了两次，通常一次是由您的文档类在背后加载的。您无法使用新选项再次加载它，但您可以在任何人加载它之前注入选项：将 `\PassOptionsToPackage{table}{xcolor}` 放在 `\documentclass` 之前，选项将合并到先加载的位置。

## 用一个最小的例子来隔离

当原因不明显时，构建一个最小的工作示例：一个仅包含“\documentclass”的文档、两个可疑包以及一个只有一行文本的“\begin{document}...\end{document}”。如果错误再次出现，请切换加载顺序和选项，直到错误不再出现为止。如果它没有重现，请将其他包分成两半添加回去，直到它返回。这种二分搜索会在几次编译中收敛，并为您提供清晰的搜索对。同样的技术可以挽救继承的前导码，如[无法编译的大学类文件](/learn/fix-broken-template/)中所述。