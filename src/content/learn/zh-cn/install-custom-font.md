---

title: "项目旁边的字体文件"
description: "fontspec 本地 otf 或 ttf 系列的路径。"
category: "typefaces"
order: 2
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# 项目旁边的字体文件

假设您的论文使用的字体并未安装在每台将编译它的计算机上：合著者的笔记本电脑、大学构建服务器或重新安装后您自己的计算机。在每个系统上安装字体都很脆弱，有时是不允许的。将字体文件放在项目文件夹中，并将“fontspec”指向它们，这样文档就有自己的排版。这需要 XeLaTeX 或 LuaLaTeX，因为 `fontspec` 在 pdfLaTeX 下不起作用。 [为什么人们转向 XeLaTeX](/learn/when-use-xelatex/) 中介绍了原因。

```latex
\usepackage{fontspec}
\setmainfont{MyFont}[
 Path = ./fonts/,
 Extension = .otf,
 UprightFont = *-Regular,
 BoldFont = *-Bold,
 ItalicFont = *-Italic
]
```

## 每个键的作用

`\setmainfont{MyFont}` 声明主文本系列并为其提供用于构建文件名的基本名称。 `Path = ./fonts/` 告诉 `fontspec` 在项目内的 `fonts` 文件夹中查找相对于主 `.tex` 文件的文件，而不是询问操作系统。 `Extension = .otf` 一次性指定文件类型，因此不必为每个文件重复。如果您有的话，请使用“.ttf”。

其余的键将字体形状映射到文件。在每个文件中，“*”都会扩展为基本名称，因此“UprightFont = *-Regular”解析为“MyFont-Regular.otf”，同样解析为“MyFont-Bold.otf”和“MyFont-Italic.otf”。这些名称必须与实际文件名完全匹配，包括大小写，因为即使本地系统允许大小写，Linux 服务器上的大小写也很重要。如果该系列有粗体斜体，请添加“BoldItalicFont = *-BoldItalic”。您未映射的形状是文档无法使用的形状：没有“BoldFont”行，“\textbf”没有任何可切换到的内容，并且编译器警告粗体形状未定义。

相同的语法适用于其他系列，因此“\setsansfont”和“\setmonofont”接受本地无衬线或代码字体的相同选项块。

## 许可和可移植性

仅当许可证允许重新分发时才随项目一起发送字体文件。 SIL 开放字体许可证等开放许可证允许这样做，并且 Google Fonts 的字体通常符合资格，但商业字体通常禁止将副本传递给合作者，在这种情况下，每台计算机都需要自己的许可副本，您应该在项目自述文件中记录该要求。

常见的错误是声明的名称和文件之间存在静默不匹配，通常是在重命名文件夹或下载不同名称的权重之后。然后编译停止并显示“无法找到字体‘MyFont-Regular’”。发生这种情况时，将错误的预期文件名与文件夹内容逐个进行比较，并确认“路径”仍然指向文件所在的位置。由于 Oleafly 捆绑的 Tectonic 引擎是基于 XeTeX 的，因此该项目本地模式无需安装系统字体即可工作。