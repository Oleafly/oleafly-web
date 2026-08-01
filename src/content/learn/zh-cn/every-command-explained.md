---

title: "LaTeX 宇宙中的每个 \\\\ 命令，都有解释"
description: "全球参考：数百个 LaTeX 命令和环境，从内核到 amsmath、hyperref、TikZ、biblatex 和 Beamer，每一条都在一行中进行了解释。"
category: "desk-reference"
order: 0
level: "beginner"
tags: ["reference", "commands"]
featured: true
updated: 2026-07-25
---

# LaTeX 宇宙中的每个 \ 命令，解释

此页面定义了 Oleafly Learn 任何课程中出现的每个 LaTeX 命令和环境，以及您将在实际论文中遇到的更广泛的标准词汇。 Kernel、amsmath、hyperref、graphicx、booktabs、biblatex、TikZ、Beamer 以及研究人员实际加载的软件包。按类别浏览，或使用 Ctrl/Cmd-F 在页面中搜索您刚刚遇到的命令。每个条目都是一行：它的作用以及重要的地方，它来自哪个包。

## 记录类和设置

|命令 |它有什么作用 |
| --- | --- |
| `\documentclass{文章}` |每个文档的第一行：选择整体布局；文章是论文的默认选择。 |
| `\documentclass{报告}` |较长报告的类：添加 `\chapter` 并在其自己的页面上开始摘要。 |
| `\documentclass{book}` |书籍类：章节、双面布局、正面/主要/背面内容。 |
| `\documentclass{字母}` |用于通信的类，带有 `\opening`、`\fitting` 和地址命令。 |
| `\documentclass{beamer}` |从“框架”环境构建的幻灯片演示文稿的类。 |
| `\documentclass[11pt,a4paper]{文章}` |常见的类选项：字体大小（10pt、11pt、12pt）、纸张（a4paper、letterpaper）、“twocolumn”、“twoside”、“landscape”、“draft”、“titlepage”。 |
| `\usepackage{amsmath}` |在序言中加载包以添加功能。 |
| `\usepackage[margin=1in]{几何}` |设置页边距和纸张尺寸（几何形状）。 |
| `\标题{...}` |存储文档标题，稍后由“\maketitle”打印。 |
| `\author{...}` |存储`\maketitle`的作者列表；用“\and”分隔多个作者。 |
| `\ 和` | `\author{...}` 内作者姓名之间的分隔符。 |
| `\日期{...}` |存储`\maketitle`显示的日期； `\date{}` 隐藏它，`\date{\today}` 显示今天。 |
| `\今天` |在编译时打印当前日期。 |
| `\maketitle` |打印“\title”、“\author”和“\date”中的标题栏。 |
| `\谢谢{...}` |将脚注附加到标题或作者姓名，例如获取资金或联系信息。 |
| `\institute{...}` | Beamer 和 Springer LNCS 类使用的作者隶属关系命令。 |
| `\inst{1}` | LNCS 和 Beamer 作者列表中的隶属关系上标标记：“Ada Lovelace\inst{1}”。 |
| `\keywords{...}` |在publisher中打印论文的关键词列表像 acmart 和 llncs 这样的课程。 |
| `\地址{...}` | letter class：存储信头的发件人地址。 |
| `\签名{...}` | letter class：存储结尾处打印的名称。 |
| `\opening{亲爱的...}` | letter class：打印称呼并开始信件正文。 |
| `\close{此致，}` | letter class：打印签字和签名块。 |
| `\LaTeX` |打印带有凸起和凹陷字母的 LaTeX 徽标。 |
| `\TeX` |打印带有降低的 E 的 TeX 徽标。
| `\输入{文件}` |将另一个 .tex 文件粘贴到位，就像您已在其中键入它一样。 |
| `\include{第 1 章}` |输入从新页面开始的章节文件；通过 `\includeonly` 启用部分编译。 |
| `\includeonly{第 1 章，第 3 章}` |限制实际编译哪些 `\include` 文件的前导码列表。 |
| `\hypersetup{...}` |配置超引用选项，例如链接颜色和 PDF 元数据。 |
| `\AtBeginDocument{...}` |在 `\begin{document}` 之后运行代码，对于后期设置很有用。 |
| `\AtEndDocument{...}` |在文档结束之前运行代码。 |
| `\makeatletter` |暂时将“@”设为字母，以便您可以使用或修补内部命令。 |
| `\makeatother` |在“\makeatletter”之后将“@”恢复正常。 |
| `\typeout{...}` |将消息打印到编译日志和终端，方便调试。 |
| `\保护` |在移动参数（如“\caption”或“\section”）中屏蔽脆弱的命令。 |
| `\listfiles` |记录每个加载的文件及其版本的 Preamble 命令，用于错误报告。 |

## 结构和切片

|命令 |它有什么作用 |
| --- | --- |
| `\part{...}` |最高级别的划分，在书籍和报告类中的章节以上。 |
| `\章节{...}` |书籍和报告类中的编号章节标题（而不是文章中）。 |
| `\section{...}` |文章中的顶级标题编号。 |
| `\小节{...}` |编号为“\section”下方一级的标题。 |
| `\subsubsection{...}` |编号为“\subsection”下方一级的标题。 |
| `\段落{...}` |最低级标题：段落开头的插入式粗体标题。 |
| `\subparagraph{...}` | `\paragraph` 下面一级，很少需要。 |
| `\section*{...}` |带星号的部分打印标题，但不带编号或目录条目。 |
| `\附录` |切换编号，以便以下章节成为附录 A、B、C。
| `\appendixpage` |打印单独的“附录”分隔页（附录包）。 |
| `\目录` |打印根据切片命令构建的目录。 |
| `\数字列表` |打印所有图形标题和页码的列表。 |
| `\listoftables` |打印所有表格标题和页码的列表。 |
| `\frontmatter` |预内容页面的书籍级开关：罗马页码、未编号的章节。 |
| `\mainmatter` |书类切换回主要内容：阿拉伯文页码、章节编号。 |
| `\backmatter` |末页的书籍级切换：章节不再编号。 |
| `\addcontentsline{目录}{章节}{...}` |手动将条目添加到目录（或图/表列表）。 |
| `\addtocontents{toc}{...}` |将任意材料（如间距）写入内容文件。 |
| `\setcounter{secnum深度}{3}` |控制切片数字的深度。 |
| `\setcounter{toc深度}{2}` |控制目录的深度。 |

## 定义命令和环境

|命令 |它有什么作用 |
| --- | --- |
| `\newcommand{\R}{\mathbb{R}}` |定义你自己的命令；如果该名称已存在，则会出现错误。 |
| `\renewcommand{...}{...}` |重新定义现有命令；如果不存在则出错。 |
| `\providecommand{...}{...}` |仅当命令尚未定义时才定义该命令；否则默默地什么也不做。 |
| `\NewDocumentCommand` |具有灵活可选参数的现代命令定义（LaTeX3/xparse）。 |
| `\newenvironment{名称}{开始代码}{结束代码}` |使用在“\begin”和“\end”处运行的代码定义您自己的环境。 |
| `\renewenvironment{名称}{...}{...}` |重新定义现有环境。 |
| `\ensuremath{...}` |使宏的数学内容在数学模式内部和外部都有效。 |
| `\DeclareMathOperator{\E}{E}` |定义一个直立的操作员名称；带星号的形式将限制置于以下 (amsmath)。 |
| `\DeclareMathOperator*{\argmin}{arg\,min}` |带星号的形式：运算符在显示数学 (amsmath) 中采用以下限制。 |
| `\newtheorem{引理}{引理}` |声明类似定理的环境 (amsthm)。 |
| `\foo` | `\newcommand` 课程中用户定义的宏的示例名称，而不是真正的 LaTeX 命令。 |
| `\abs{x}` |自定义命令课程中用于排版绝对值条形的示例用户定义宏。 |
| `\mat{A}` |自定义命令课程中用于粗体矩阵符号的用户定义宏示例。 |
| `\vect{v}` |自定义命令课程中用于粗体矢量符号的用户定义宏示例。 |
| `\set{...}` |自定义命令课程中的用户定义宏示例，用于排版大小括号。 |
| `\citepair` |自定义命令课程中的用户定义引用帮助程序宏示例，而不是标准命令。 |
| `\E` |用于期望的用户定义运算符示例，通常定义为`\DeclareMathOperator` 或 `\newcommand`。 |
| `\R` |实数的用户定义宏示例：`\newcommand{\R}{\mathbb{R}}`。 |
| `\argmax`、`\argmin` | arg max / arg min 的运算符名称，在本课程中使用 `\DeclareMathOperator*` 定义，因此下标位于下方。 |

## 计数器和长度

|命令 |它有什么作用 |
| --- | --- |
| `\newcounter{示例}` |创建一个新计数器，可以选择由父级重置：`\newcounter{examples}[section]`。 |
| `\setcounter{页}{1}` |设置计数器的值，此处重新启动页码。 |
| `\addtocounter{示例}{2}` |向计数器添加一个值而不打印任何内容。 |
| `\stepcounter{示例}` |将计数器加一。 |
| `\refstepcounter{示例}` |增加一个计数器并使其成为下一个“\label”的目标。 |
| `\value{示例}` |读取计数器的值以用于算术或比较。 |
| `\阿拉伯语{示例}` |将计数器打印为阿拉伯数字：1、2、3。
| `\roman{示例}`、`\Roman{示例}` |将计数器打印为小写或大写罗马数字。 |
| `\alph{示例}`、`\Alph{示例}` |将计数器打印为小写或大写字母。 |
| `\fnsymbol{脚注}` |将计数器打印为脚注符号：星号、匕首等。 |
| `\newlength{\mygap}` |创建一个新的长度寄存器。 |
| `\setlength{\parskip}{6pt}` |为长度寄存器分配一个值。 |
| `\addtolength{\texheight}{1cm}` |添加到现有长度。 |
| `\settowidth{\mygap}{text}` |将长度设置为某些文本的自然宽度。 |
| `\parindent` |首行段落缩进长度；用 `\setlength{\parindent}{0pt}` 设置。 |
| `\parskip` |段落之间的垂直间隙的长度；用 `\setlength` 设置。 |
| `\线宽` |当前行的长度，方便调整大小：`width=\linewidth`。 |
| `\textwidth` |页面上全文块宽度的长度。 |
| `\textheight` |页面上全文块高度的长度。 |
| `\列宽` |多列布局中一列的宽度。 |
| `\baselineskip` |连续线的基线之间的垂直距离。 |
|`\linespread{1.3}` |缩放整个文档的行距（行距）；需要 `\selectfont` 或 size 命令才能生效。 |

## 段落、换行符和连字符

|命令 |它有什么作用 |
| --- | --- |
| `\\` |结束段落、表格和数组中的当前行。 |
| `\\[6pt]` |换行符后面有额外的垂直空间。 |
| `\换行` |断行而不证明其合理，也不允许分页。 |
| `\换行` |要求在此处进行合理的换行；可选的“[0-4]”设置坚持。 |
| `\nolinebreak` |阻止此时换行。 |
| `\par` |结束段落，与源代码中的空行相同。 |
| `\无缩进` |禁止后续段落的首行缩进。 |
| `\缩进` |强制第一行缩进，否则会被抑制。 |
| `\-` |标记单词内允许的连字符点。 |
| `\连字符{数据集}` |序言列表教 LaTeX 如何连接特定单词。 |
| `\马虎` |放宽间距规则，使线条更容易断裂，避免盒子过满。 |
| `\挑剔` |在“\sloppy”之后恢复严格的间距规则。 |
| `\raggedright` |将以下文本左对齐而不是对齐。 |
| `\raggedleft` |右对齐以下文本。 |
| `\居中` |将当前组中后续的所有内容居中，例如一个人物的图像。 |
| `\同一页面` |阻止当前组内的分页符。 |
| `\enlargethispage{\baselineskip}` |仅使当前页面变高一点，以再挤入一行。 |
| `~` |不间断空格：“Figure~1”将数字保持在同一行。 |

## 间距

|命令 |它有什么作用 |
| --- | --- |
| `\quad` |插入大约大写 M 宽度的水平空间。
| `\qquad` |插入两倍于`\quad`的空间。 |
| `\enspace` |插入半个“\quad”水平空间。 |
| `\hspace{1cm}` |插入水平空间；在换行符处消失。 |
| `\hspace*{1cm}` |即使在换行时也能保留水平空间。 |
| `\vspace{1cm}` |插入给定长度的垂直空间。 |
| `\vspace*{1cm}` |即使在分页时也能保留垂直空间。 |
| `\smallskip` |在段落之间插入一个小的垂直间隙。 |
| `\medskip` |在段落之间插入中等垂直间隙。 |
| `\bigskip` |在段落之间插入较大的垂直间隙。 |
| `\hfill` |有弹性的水平空间将内容分开以填充线条。 |
| `\vfill` |有弹性的垂直空间将内容分开以填充页面。 |
| `\点填充` |用点填充剩余的行，如菜单行或内容行。 |
| `\hrulefill` |用水平线填充剩余的线。 |
| `\拉伸{2}` |具有重量的弹性胶水，用于比例间距：`\hspace{\stretch{2}}`。 |
| `\填充` |单位拉伸长度； `\hspace{\fill}` 是 `\hfill` 扩展后的内容。 |
| `\phantom{文本}` |恰好占据其参数的空间，但不打印任何内容。 |
| `\hphantom{文本}` |仅占据其参数的宽度，高度为零。 |
| `\vphantom{文本}` |仅占据其参数的高度，宽度为零。 |
| `\smash{...}` |打印它的参数，但假装它的高度和深度为零。 |
| `\支柱` |隐形支撑法线的高度，以平衡行高。 |
| `\mathstrut` |数学模式支撑括号的大小，以对齐根数和分数。 |

## 框和规则

|命令 |它有什么作用 |
| --- | --- |
| `\mbox{...}` |牢不可破的卧式盒子；也将其内容保留在一行上。 |
| `\makebox[3cm][r]{...}` |具有选定对齐方式（l、c、r、s）的设定宽度的框。 |
| `\fbox{...}` |在其内容周围绘制一个框架。 |
| `\framebox[3cm][c]{...}` |具有设定宽度和选定对齐方式的框架框。 |
| `\parbox{5cm}{...}` |段落框：给定宽度的迷你文本列。 |
| `\raisebox{2pt}{...}` |将其内容向上移动（或以负长度向下移动）。 |
| `\rule{2cm}{0.4pt}` |绘制一个填充的矩形；定制生产线的主力。 |
| `\colorbox{黄色}{...}` |将文本放在彩色背景框 (xcolor) 上。 |
| `\fcolorbox{红色}{黄色}{...}` |带有彩色框架的彩色框（xcolor）。 |

## 页码、页眉和页眉

|命令 |它有什么作用 |
| --- | --- |
| `\newpage` |结束当前页面并开始新页面。 |
| `\clearpage` |首先刷新所有待处理的图形和表格后开始新页面。 |
| `\cleardoublepage` |与“\clearpage”类似，但也确保下一页是右侧（奇数）页。 |
| `\分页符` |此时请求分页，将页面拉伸至完整高度。 |
| `\nopagebreak` |阻止此时分页。 |
| `\pagenumbering{roman}` |设置页码样式（阿拉伯文、罗马文、罗马文、阿尔夫、阿尔夫），并将计数器重置为 1。
| `\pagestyle{花式}` |设置所有后续页面的运行页眉/页脚样式（plain、empty、headings、myheadings、fancy）。 |
| `\thispagestyle{空}` |仅覆盖当前页面的页眉/页脚样式。 |
| `\页面` |打印当前页码；用于页眉和页脚内部。 |
| `\marginpar{...}` |在当前行旁边的页边距中添加注释。 |
| `\fancyhf{}` |在设置您自己的字段之前清除所有 fancyhdr 页眉和页脚字段。 |
| `\fancyhead[R]{...}` |设置一个 fancyhdr 标头字段，这里是右侧的标头字段。 |
| `\fancyfoot[C]{\thepage}` |设置一个 fancyhdr 页脚字段，这里是居中的页码。 |
| `\headrulewidth` | fancyhdr 宏用于标头规则厚度；更新为 0pt 以删除该行。 |
| `\footrulewidth` | fancyhdr 宏用于页脚规则厚度，默认为 0pt。 |
| `\newgeometry{边距=2cm}` |更改文档中间的页面几何形状（几何形状）。 |
| `\恢复几何` |返回到`\newgeometry`（几何）之后的前导几何。 |

## 特殊字符

十个保留字符以及如何打印它们，以及常见的文本符号。

|命令 |它有什么作用 |
| --- | --- |
| `\%` |打印百分号（仅用“%”开始注释）。 |
| `\&` |打印一个 & 符号（裸露的“&”是表列分隔符）。 |
| `\#` |打印哈希值（裸露的“#”标记宏参数）。 |
| `\_` |打印下划线（裸露的“_”是数学下标）。 |
| `\{` 和 `\}` |打印大括号（裸大括号组）。 |
| `\$` |打印一个美元符号（裸露的“$”切换数学模式）。 |
| `\textbackslash` |在文本中打印反斜杠。 |
| `\textasciitilde` |在文本中打印波形符（裸露的“~”是不间断空格）。 |
| `\textasciicircum` |在文本中打印插入符号（裸露的“^”是数学上标）。 |
| `\文本栏` |在文本中打印竖线。 |
| `\textless`、`\textgreater` |在文本模式下正确打印 < 和 >。 |
| `\ldots`、`\dots` |具有正确间距的省略号； `\dots` 适应数学模式 (amsmath)。 |
| `\textellipsis` | `\dots` 在数学之外使用的文本模式省略号。 |
| `\textemdash`、`\textendash` | em 和 en dash 的命名命令（与“---”和“--”相同的输出）。 |
| `\textquotedblleft`、`\textquotedblright` |卷曲双引号（通常键入反引号对和撇号对）。 |
| `\guillemetleft`, `\guillemetright` |法式角引号（旧拼写：`\guillemotleft`/`\guillemotright`）。 |
| `\dag`、`\ddag` |文本中的匕首和双匕首，常见于作者所属单位。 |
| `\S` |章节符号，如法律文件的 S 2.1 中所示。 |
| `\P` |段落（pilcrow）符号。 |
| `\磅` |英镑符号。 |
| `\欧元` |欧元符号（eurosym 包；内核还提供了 `\texteuro`）。 |
| `\版权` |版权标志。 |
| `\textregistered` |注册商标标志。 |
| `\文字商标` |商标标志。 |
| `\textlevel` |度数符号：`25\text Degree C`。 |
| `\textmu` |立式微型表示微米等文本的符号。 |
| `\textperthousand` |每英里标志。 |

## 重音符号和特殊字母

对于 pdfLaTeX 时代的文本重音；使用 XeLaTeX/LuaLaTeX 和 UTF-8 输入，您通常只需键入字符即可。

|命令 |它有什么作用 |
| --- | --- |
| `\'{e}` |尖锐口音：e-acute，就像在咖啡馆里带有口音一样。 |
| `` \``{e} `` |口音严肃。 |
| `\^{o}` |抑扬音。 |
| `\"{u}` | 元音变音/分音符号。 |
| `\~{n}` |波形符重音，如西班牙语 n-波形符。 |
| `\c{c}` |变音符号，如法语 c-变音符号。 |
| `\v{s}` | Caron (hacek)，常见于捷克和克罗地亚名字。 |
| `\H{o}` |匈牙利双锐口音。 |
| `\k{a}` | Ogonek，波兰语 a-ogonek。 |
| `\b{o}` |酒吧下口音。 |
| `\d{u}` |点下重音，用于音译。 |
| `\r{a}` |环重音，如斯堪的纳维亚 A 形环。 |
| `\u{o}` |布雷夫口音。 |
| `\.{o}` |点式口音。 |
| `\t{oo}` |连接两个字母的领带重音。 |
| `\i`、`\j` |无点 i 和 j，用于堆叠重音符号：`\'{\i}`。 |
| `\ae`、`\AE` | ae 连字，小写和大写。 |
| `\oe`、`\OE` | oe 连字，如法国作品。 |
| `\ss` |德语升号 s (eszett)。 |
| `\o`、`\O` |斜线 o，如丹麦语和挪威语名字。 |
| `\l`、`\L` |波兰语削减l。 |
| `\aa`、`\AA` | A 形环作为一个独立的字母，正如 Angstrom 的名字一样。 |

## 字体和大小

|命令 |它有什么作用 |
| --- | --- |
| `\textbf{...}` |粗体文字。 |
| `\textit{...}` |斜体文本。 |
| `\emph{...}` |适应上下文的强调：直立文本中的斜体，斜体文本中的直立。 |
| `\textsc{...}` |小写字母文本。 |
| `\texttt{...}` |打字机（等宽）文本，适合代码和文件名。 |
| `\textrm{...}` |罗马（衬线）系列文本。 |
| `\textsf{...}` |无衬线字体系列文本。 |
| `\textmd{...}` |中等（正常）重量，撤消粗体。 |
| `\textup{...}` |直立形状，取消斜体或倾斜。 |
| `\textsl{...}` |倾斜（倾斜）形状，与真正的斜体不同。 |
| `\textnormal{...}` |一步重置为文档的默认字体。 |
| `\下划线{...}` |为文本添加下划线；谨慎使用，强调通常是“\emph”。 |
| `\rmfamily`、`\sffamily`、`\ttfamily` |声明切换字体系列（serif、sans、mono）直到组结束。 |
| `\bfseries`、`\mdseries` |声明切换为粗体或返回中等粗细。 |
| `\itshape`、`\slshape`、`\scshape`、`\upshape` |声明切换形状：斜体、倾斜、小型大写字母、直立。 |
| `\普通字体` |将族、系列和形状重置为默认值的声明。 |
| `\em` | `\emph` 的声明形式：`{\em like this}`。 |
| `\微小` |十个尺寸命令中最小的一个。 |
| `\scriptsize` |第二小的尺寸，大致为下标尺寸。 |
| `\脚注大小` |用于脚注的尺寸。 |
| `\小` |比正常的稍微小一点。 |
| `\正常大小` |文档的基本尺寸。 |
| `\large`、`\Large`、`\LARGE` |比平常大一、两、三步。 |
| `\巨大`, `\巨大` |两个最大的标准尺寸。 |
| `\fontsize{14}{17}\selectfont` |设置任意字体大小和基线跳过，然后激活它。 |
| `\选择字体` |激活待处理的字体属性变化（NFSS）。 |
| `\textsuperscript{...}` |凸起的小文本，如第一个或脚注样式标记。 |
| `\textsubscript{...}` |在文本模式下降低了小文本。 |
| `\familydefault` |保存默认字体系列的宏；更新它以更改整个文档的字体。 |
| `\sfdefault` |宏命名无衬线家族； `\renewcommand{\familydefault}{\sfdefault}` 使文档变为无字体。 |
| `\setmainfont{...}` |根据 XeLaTeX 或 LuaLaTeX (fontspec) 下的名称设置主体字体。 |
| `\setsansfont{...}` |根据 XeLaTeX 或 LuaLaTeX (fontspec) 下的名称设置无衬线字体。 |
| `\setmonofont{...}` |根据 XeLaTeX 或 LuaLaTeX (fontspec) 下的名称设置等宽字体。 |

## 颜色（x颜色）

|命令 |它有什么作用 |
| --- | --- |
| `\textcolor{红色}{...}` |为一段文本着色。 |
| `\颜色{蓝色}` |声明表：为所有内容着色，直到小组结束。 |
| `\definecolor{品牌}{HTML}{2F6F4F}` |定义命名颜色供以后使用。 |
| `\pagecolor{灰色！10}` |设置整个页面的背景颜色。 |
| `\rowcolor{灰色！20}` |为表格行着色（使用“table”选项的 xcolor，通过 colortbl）。 |
| `\cellcolor{灰色！20}` |为一个表格单元格着色 (colortbl)。 |
| `\rowcolors{2}{灰色！10}{白色}` |从给定行开始交替行颜色（xcolor `table` 选项）。 |

## 图形 (graphicx)

|命令 |它有什么作用 |
| --- | --- |
| `\includegraphics[width=\linewidth]{plot.pdf}` |插入图像文件；关键选项：“宽度”、“高度”、“比例”、“角度”、“修剪”+“剪辑”、“页面”。 |
| `\graphicspath{{figures/}}` |告诉 LaTeX 在哪些文件夹中搜索图像文件。 |
| `\rotatebox[origin=c]{90}{...}` |将其内容旋转一个角度。 |
| `\scalebox{0.8}{...}` |按一个因子缩放其内容。 |
| `\resizebox{5cm}{!}{...}` |将内容大小调整为目标宽度和/或高度； `!` 保持纵横比。 |
| `\reflectbox{...}` |水平镜像其内容。 |
| `\includepdf[pages=-]{paper.pdf}` |插入另一个 PDF 中的整页 (pdfpages)。 |

## 进入数学模式

|命令 |它有什么作用 |
| --- | --- |
| `$...$` |句子中的内联数学。 |
| `\(...\)` | LaTeX 的官方内联数学分隔符，相当于“$...$”。 |
| `\[...\]` |未编号的方程在其自己的行上显示。 |
| `$$...$$` | Plain TeX 显示数学；在 LaTeX 中不鼓励，请使用 `\[...\]` 代替。 |
| `x^2`、`x_i` | `^` 为上标，`_` 为下标；大括号多字符脚本：`x^{10}`。 |

## 数学：希腊字母

所有这些仅在数学模式下有效。当希腊首都与拉丁首都不同时，存在大写形式。

|命令 |它有什么作用 |
| --- | --- |
| `\alpha` `\beta` `\gamma` `\delta` |希腊字母 alpha、beta、gamma、delta。 |
| `\epsilon` `\zeta` `\eta` `\theta` |希腊字母 epsilon、zeta、eta、theta。 |
| `\iota` `\kappa` `\lambda` `\mu` `\nu` |希腊字母 iota、kappa、lambda、mu、nu。 |
| `\xi` `\pi` `\rho` `\sigma` `\tau` |希腊字母 xi、pi、rho、sigma、tau。 |
| `\upsilon` `\phi` `\chi` `\psi` `\omega` |希腊字母 upsilon、phi、chi、psi、omega。 |
| `\Gamma` `\Delta` `\Theta` `\Lambda` `\Xi` `\Pi` |大写希腊字母 Gamma 到 Pi。 |
| `\Sigma` `\Upsilon` `\Phi` `\Psi` `\Omega` |大写希腊字母 Sigma 到 Omega。 |
| `\varepsilon` `\vartheta` `\varpi` | epsilon（大多数论文使用的卷曲形式）、theta 和 pi 的变体形式。 |
| `\varrho` `\varsigma` `\varphi` | rho、sigma（词尾）和 phi（开放卷曲）的变体形式。 |
| `\varGamma` `\varDelta` `\varTheta` `\varLambda` |斜体大写希腊语变体 (amsmath)。 |
| `\varXi` `\varPi` `\varSigma` `\varUpsilon` `\varPhi` `\varPsi` `\varOmega` |其余的斜体大写希腊语变体 (amsmath)。 |

## 数学：二元运算符

|命令 |它有什么作用 |
| --- | --- |
| `\pm`、`\mp` |加减号和减加号。 |
| `\次` |乘法叉，也用于 3 x 3 等维度。
| `\div` |除法（obelus）标志。 |
| `\cdot` |乘法的中心点。 |
| `\ast`、`\star`、`\bullet`、`\circ` |星号、星号、项目符号和小圆运算符； `\circ` 也是函数组合。 |
| `\oplus`、`\ominus` |带圆圈的加（直接和，异或）和带圆圈的减。 |
| `\otimes`、`\oslash`、`\odot` |带圆圈的时间（张量积）、带圆圈的斜线、带圆圈的点。 |
| `\wedge`、`\vee` |楔形（逻辑与，外积）和 vee（逻辑或，连接）。 |
| `\land`、`\lor` | `\wedge` 和 `\vee` 的别名因其逻辑读法而命名。 |
| `\cap`, `\cup` |设置交叉路口和联合路标。 |
| `\setminus` |设置差异反斜杠：`A \setminus B`。 |
| `\uplus` |带加号的并集，用于多重集或不相交并集。 |
| `\sqcap`、`\sqcup` |方帽和杯，在格子理论中相遇并连接。 |
| `\amlg` |合并（颠倒的产品），用于副产品。 |
| `\dagger`、`\ddagger` |匕首和双匕首作为数学运算符，例如共轭转置`A^\dagger`。 |
| `\bigtriangleup`、`\bigtriangledown` |三角形运算符，例如对称差。 |
| `\triangleleft`、`\triangleright` |横向三角形，例如正态子群关系。 |

## 数学：关系

|命令 |它有什么作用 |
| --- | --- |
| `\leq`、`\le` |小于或等号（`\le` 是短别名）。 |
| `\geq`、`\ge` |大于或等号（`\ge` 是短别名）。 |
| `\neq`、`\ne` |不等号（`\ne` 是短别名）。 |
| `\ll`、`\gg` |远小于和远大于符号。 |
| `\大约` |近似等号。 |
| `\sim` |波形符关系，读作“分布为”或“类似于”。 |
| `\simeq` |渐近等号（波形符大于等号）。 |
| `\丛` |全等符号（两个横杠上的波形符），用于同构。 |
| `\equiv` |相同（三杠）符号，也用于全等。 |
| `\propto` |比例符号。 |
| `\asymp` |渐近等价关系（堆叠曲线）。 |
| `\doteq` |带点的等号，读作“接近”或“定义为”。 |
| `\prec`、`\succ` |前后关系，弯曲的顺序。 |
| `\preceq`、`\succeq` |之前或等于和成功或等于。 |
| `\subset`、`\subseteq` |真子集和子集或等号。 |
| `\supset`、`\supseteq` |真超集和超集或等号。 |
| `\sqsubseteq`、`\sqsupseteq` |平方子集和超集关系，用于信息排序。 |
| `\in`、`\notin` |设置成员资格及其否定：`x \in A`。 |
| `\ni` |反向成员资格：集合包含该元素。 |
| `\vdash`、`\dashv` |十字转门“证明”及其相反。 |
| `\模型` |双闸，语义蕴涵。 |
| `\perp` |垂直/独立关系。 |
| `\并行` |平行条关系。 |
| `\mid` |具有关系间距的垂直条，如集合构建器符号或“分隔”。 |
| `\不` |通过套印斜杠来否定以下关系：`\not\subset`。 |

## 数学：箭头

|命令 |它有什么作用 |
| --- | --- |
| `\to`、`\rightarrow` |右箭头，如函数类型“f: A \to B”并限制“x \to 0”。 |
| `\gets`、`\leftarrow` |左箭头，也用于伪代码中的赋值。 |
| `\leftrightarrow` |双头单箭头。 |
| `\右箭头` |双右箭头，读作“暗示”。 |
| `\向左箭头` |双左箭头，读作“暗示”。 |
| `\左箭头` |双头箭头，读作“当且仅当”。 |
| `\implied`, `\impliedby` |间隔开的“\Rightarrow”和“\Leftarrow”表示逻辑 (amsmath)。 |
| `\iff` |空格“\Leftrightarrow”表示“当且仅当”。 |
| `\mapsto` |带有条形尾部的映射到箭头：`x \mapsto x^2`。 |
| `\longmapsto` | `\mapsto` 的长版本。 |
| `\hookrightarrow` |带钩尾的右箭头，用于包含/嵌入。 |
| `\rightharpoonup` |右鱼叉（半箭），用于弱收敛。 |
| `\rightleftharpoons` |配对的相对鱼叉，处于化学平衡状态。 |
| `\导致` |弯曲的右箭头，“通向”(amssymb)。 |
| `\向上箭头`、`\向下箭头` |向上和向下箭头。 |
| `\updownarrow` |双头垂直箭头。 |
| `\Uparrow`、`\Downarrow`、`\Updownarrow` |双线垂直箭头。 |
| `\narrow`、`\searrow` |东北和东南的对角箭头，例如增加/减少到极限。 |
| `\swarrow`, `\nwarrow` |对角线箭头西南和西北。 |
| `\longrightarrow`、`\longleftarrow` |长单箭头。 |
| `\Longrightarrow`、`\Longleftarrow`、`\Longleftrightarrow` |长双箭头。 |
| `\xrightarrow{f}` |可扩展的右箭头，顶部有一个标签，不断增长以适应 (amsmath)。 |
| `\xleftarrow{f}` |顶部带有标签的可扩展左箭头 (amsmath)。 |

## 数学：大运算符

|命令 |它有什么作用 |
| --- | --- |
| `\sum_{i=1}^{n}` |带极限的求和符号。 |
| `\prod_{i=1}^{n}` |有限制的产品标志。 |
| `\coprod` |余积（颠倒积）符号。 |
| `\int_0^1` |有界的积分符号。 |
| `\iint` |双积分符号 (amsmath)。 |
| `\iiint` |三重积分符号 (amsmath)。 |
| `\点` |轮廓（闭环）积分符号。 |
| `\bigcap`、`\bigcup` |一系列集合上的大交集和并集。 |
| `\bigsqcup` |大方杯（不相交联合）。 |
| `\bigvee`、`\bigwedge` |索引集上的大 OR 和大 AND。 |
| `\bigoplus`、`\bigotimes`、`\bigodot` |大圆圈加号、时间和点用于结构的索引和和乘积。 |
| `\biguplus` |索引集上的大联合加号。 |
| `\限制` |强制以下运算符的子/上标位于上方和下方：`\int\limits_0^1`。 |
| `\nolimits` |强制将下标/上标移至侧面，而不是上方和下方。 |

## 数学：分隔符和大小

|命令 |它有什么作用 |
| --- | --- |
| `\left(...\right)` |自动调整大小的分隔符对会增长以适应其内容。 |
| `\left.` 和 `\right.` |当只需要尺寸对的一侧时，如评估栏中所示，隐形伙伴。 |
| `\middle|` |在“\left”和“\right”之间自动调整大小的中间分隔符（如条件概率）。 |
| `\big( \Big( \bigg( \Bigg(` | 手动调整大小的分隔符，从稍大到很大。 |
| `\bigl(...\bigr)` |具有正确的打开/关闭间距的大小分隔符（还有 `\Bigl`、`\biggl`、`\Biggl`）。 |
| `\lfloor`、`\rfloor` |地板支架。 |
| `\lceil`、`\rceil` |天花板支架。 |
| `\langle`、`\rangle` |左尖括号分隔符和右尖括号分隔符。 |
| `\|` |双竖线分隔符（标准栏）。 |
| `\lvert`、`\rvert` |具有正确分隔符间距的绝对值条形 (amsmath)。 |
| `\lVert`, `\rVert` |双杠表示规范，具有正确的分隔符间距 (amsmath)。 |
| `\反斜杠` |反斜杠作为数学符号或分隔符。 |

## 数学：重音和装饰

|命令 |它有什么作用 |
| --- | --- |
| `\帽子{x}` |一个符号上带有小帽子口音。 |
| `\检查{x}` |卡隆（倒置帽子）口音。 |
| `\breve{x}` |短音（圆角）口音。 |
| `\acute{x}`、`\grave{x}` |数学中的尖锐和严肃的口音。 |
| `\tilde{x}` |一个符号上的波形符重音符号。 |
| `\bar{x}` |一个符号上的短横线。 |
| `\vec{v}` |一个符号上方的小箭头。 |
| `\dot{x}`、`\ddot{x}` |符号上的一两个点，常见于时间导数。 |
| `\dddot{x}` |符号上的三个点 (amsmath)。 |
| `\mathring{x}` |符号上的环重音。 |
| `\widehat{abc}` |宽帽子延伸到多个符号。 |
| `\widetilde{abc}` |跨越多个符号的宽波形符。 |
| `\overrightarrow{AB}` |在表达式上拉伸右箭头，如从 A 到 B 的向量。
| `\overleftarrow{AB}` |将左箭头拉伸到表达式上。 |
| `\overline{x + y}` |在整个表达式上划线。 |
| `\下划线{x + y}` |整个表达式下的线条（也适用于文本）。 |
| `\overbrace{...}^{n}` |表达式上方的水平大括号，顶部有一个可选标签。 |
| `\underbrace{...}_{n}` |表达式下方的水平大括号，下方有一个可选标签。 |
| `\overset{!}{=}` |将一个符号放在另一个符号上方，例如“必须等于”(amsmath)。 |
| `\underset{i}{\max}` |将一个符号放置在另一个符号下方 (amsmath)。 |
| `\stackrel{\text{def}}{=}` |旧的内核命令在关系上堆叠符号。 |
| `\boldsymbol{\beta}` |粗体数学也将希腊字母和符号加粗 (amsmath)。 |
| `\prime` |素数符号； `x'` 是 `x^{\prime}` 的常用简写。 |

## 数学：类似对数的运算符

所有排版均竖直，间距正确；接受极限的人在显示数学中将下标放在下面。

|命令 |它有什么作用 |
| --- | --- |
| `\sin`、`\cos`、`\tan`、`\cot` |基本三角函数。 |
| `\sec`、`\csc` |正割和余割。 |
| `\arcsin`、`\arccos`、`\arctan` |反三角函数。 |
| `\sinh`、`\cosh`、`\tanh`、`\coth` |双曲函数。 |
| `\exp`、`\ln`、`\log`、`\lg` |指数和对数（按照约定，“\lg”是以 2 或 10 为底的对数）。 |
| `\det`、`\dim`、`\ker`、`\deg` |行列式、维数、核、度。 |
| `\gcd`、`\hom`、`\arg`、`\Pr` |最大公约数、hom 集、复数论证、概率。 |
| `\lim_{x \ 到 0}` |极限运算符，与显示数学中的下标垂直。 |
| `\limsup`、`\liminf` |限制优劣。 |
| `\inf`、`\sup` |下确界和上界运算符，垂直排版。 |
| `\min`、`\max` |最小和最大运算符，垂直排版，显示数学中的限制如下。 |
| `\bmod` |具有运算符间距的二元 mod 运算符：`a \bmod n`。 |
| `\pmod{n}` |带括号的尾随“(mod n)”。 |
| `\mod{n}` |尾随“mod n”不带括号 (amsmath)。 |
| `\operatorname{lcm}` |没有序言声明的一次性正直操作员名称 (amsmath)。 |
| `\operatorname*{ess\,sup}` |接受以下限制的一次性运算符 (amsmath)。 |

## 数学：分数、二项式和堆积

|命令 |它有什么作用 |
| --- | --- |
| `\frac{a}{b}` |堆积分数：分子除以分母。 |
| `\dfrac{a}{b}` |分数被迫完全显示大小，甚至内联（amsmath）。 |
| `\tfrac{a}{b}` |即使在显示数学 (amsmath) 中，分数也被迫缩小内联大小。 |
| `\cfrac{a}{b}` |具有全尺寸嵌套级别的连分数 (amsmath)。 |
| `\sqrt{x}`、`\sqrt[3]{x}` |平方根；可选参数给出 n 次方根。 |
| `\binom{n}{k}` |括号中的二项式系数 (amsmath)。 |
| `\dbinom{n}{k}`、`\tbinom{n}{k}` |显示大小和文本大小强​​制二项式 (amsmath)。 |
| `{n \选择 k}` | Plain TeX 二项式原语；在 LaTeX 中不鼓励使用 `\binom`。 |
| `{a \over b}` | Plain TeX 分数原语；在 LaTeX 中不鼓励使用 `\frac`。 |
| `{a \atop b}` |没有栏的 Plain TeX 堆叠原语；如果不鼓励，请使用“\substack”或“\genfrac”。 |
| `\genfrac{(}{)}{0pt}{}{a}{b}` | `\frac`、`\binom` 和朋友 (amsmath) 背后的通用分数生成器。 |
| `\substack{i < n \\ j < m}` |大运算符 (amsmath) 下的多行下标。 |
| `\sideset{_a^b}{_c^d}{\prod}` |将索引附加到大运算符 (amsmath) 的所有四个角。 |
| `\prescript{a}{b}{X}` |左上标/下标，如同位素表示法（数学工具）。 |

## 数学：间距和样式

|命令 |它有什么作用 |
| --- | --- |
| `\,` |薄弱的数学空间，如数字及其单位之间的空间。 |
| `\:` |中等数学空间。 |
| `\;` |厚厚的数学空间。 |
| `\!` |负薄空间，将符号拉得更近。 |
| `\quad`、`\qquad` |数学或文本中的一格和两格空格。 |
| `\显示样式` |强制完全显示数学尺寸，例如内联数学中有很大的限制。 |
| `\textstyle` |在显示数学中强制内联数学调整大小。 |
| `\scriptstyle`、`\scriptscriptstyle` |强制下标和子下标大小调整。 |

## 数学：字母、字母和其他符号

|命令 |它有什么作用 |
| --- | --- |
| `\mathbb{R}` |数字集的黑板粗体字母 (amssymb)。 |
| `\mathbf{x}` |数学中的粗体直立字母，常见于向量和矩阵。 |
| `\mathcal{L}` |书法大写字母，例如损失或拉格朗日。 |
| `\mathfrak{g}` | Fraktur 字母，用于代数和逻辑。 |
| `\mathscr{F}` |脚本大写字母，比 `\mathcal` (mathrsfs) 更卷曲。 |
| `\mathrm{d}x` |数学中的直立（罗马）字母，用于单位和多字母名称。 |
| `\mathit{diff}` |具有类似单词间距的斜体多字母标识符。 |
| `\mathsf{T}`、`\mathtt{x}` |数学中的无衬线字体和打字机字母。 |
| `\bm{\beta}` |粗体数学符号，“\boldsymbol”（bm 包）的替代品。 |
| `\text{如果 } x > 0` |数学中正常的直立文本，具有适当的间距（amsmath）。 |
| `\infty` |无穷大符号。 |
| `\部分` |偏导数（卷曲 d）符号。 |
| `\nabla` |用于梯度和散度的 Nabla (del) 运算符。 |
| `\hbar` |简化的普朗克常数，h 带条。 |
| `\ell` |脚本小写 l，用于避免与数字 1 混淆。
| `\wp` |维尔斯特拉斯 p. |
| `\Re`、`\Im` |实部和虚部符号（Fraktur R 和 I）。 |
| `\aleph` | Aleph，无限基数。 |
| `\emptyset` |空集标志。 |
| `\var没有什么` |许多作者更喜欢舍入空集变体（amssymb）。 |
| `\角度` |角度符号。 |
| `\测量角度` |带圆弧的测量角度符号 (amssymb)。 |
| `\三角形` |三角形符号。 |
| `\square`、`\blacksquare` |空方格和实心方格；填充的通常结束证明（amssymb）。 |
| `\钻石`、`\菱形` |小型钻石经营者；菱形符号（amssymb 代表后者）。 |
| `\top`、`\bot` |顶部（真）和底部（假/未定义）符号。 |
| `\forall`、`\exists` |通用（“对于所有人”）和存在主义（“存在”）量词。 |
| `\n存在` |否定存在量词 (amssymb)。 |
| `\neg` |逻辑非符号。 |
| `\因此`、`\因为` |三点“因此”和“因为”符号 (amssymb)。 |
| `\平`、`\自然`、`\锐` |音乐临时记号，也用于数学记谱法。 |
| `\surd` |没有参数的裸激进符号。 |
| `\复选标记` |复选标记 (amssymb)。 |
| `\cdots` |居中点，位于运算符之间：`x_1 + \cdots + x_n`。 |
| `\vdots`、`\ddots` |垂直和对角点，大多呈矩阵形式。 |
| `\dotsb`、`\dotsc` |语义点：二元运算符之间和逗号之间 (amsmath)。 |

## amsmath 和 mathtools 显示工具

|命令 |它有什么作用 |
| --- | --- |
| `\tag{...}` |用您自己的标签 (amsmath) 替换自动方程编号。 |
| `\tag*{...}` |类似于“\tag”，但没有括号 (amsmath)。 |
| `\notag` |抑制编号环境 (amsmath) 的一行上的方程编号。 |
| `\nonumber` | `\notag` 的旧同义词。 |
| `\numberwithin{方程}{部分}` |每节的数字方程：(2.1)、(2.2) (amsmath)。 |
| `\互文{...}` |用全角文本行中断对齐块，保持对齐 (amsmath)。 |
| `\shortintertext{...}` |就像垂直空间较小的“\intertext”（数学工具）。 |
| `\allowdisplaybreaks` |让多行显示跨页显示 (amsmath)。 |
| `\displaybreak` |请求在显示的此时分页 (amsmath)。 |
| `\smashoperator{\sum_{i=1}^{n}}` |让宽运算符限制悬垂，这样它们就不会将内容分开（数学工具）。 |
| `\mathclap{...}` |零宽度数学内容，用于宽下标/上标（数学工具）。 |
| `\coloneqq` |冒号等于定义符号 := 并具有正确的间距（数学工具）。 |
| `\DeclarePairedDelimiter{\abs}{\lvert}{\rvert}` |使用带星号的自动调整大小形式（mathtools）定义分隔符宏。 |
| `\eqref{eq:loss}` |打印带有括号的方程编号 (amsmath)。 |
| `\qedhere` |将证明末尾的方块移到当前行，例如在显示的方程（amsthm）之后。 |

## 数学环境

|环境 |它有什么作用 |
| --- | --- |
| `方程` |一个显示的、编号的方程。 |
| `方程*` |一个显示的、未编号的方程 (amsmath)。 |
| `对齐` |多个显示的方程在“&”标记处对齐，每个方程都编号（amsmath）。 |
| `对齐*` |没有数字的对齐方程 (amsmath)。 |
| `聚集` |没有对齐的多个中心方程，每个方程都有编号（amsmath）。 |
| `对齐` |通过手动控制列之间的间距（amsmath）对齐方程。 |
| `平齐` |对齐的方程推到左右边缘 (amsmath)。 |
| `分裂` |在“equation”（amsmath）内将一个长方程拆分为一个数字下的对齐线。 |
| `多行` |一个跨行的长方程：第一行向左，最后一行向右（amsmath）。 |
| ‘对齐’、‘聚集’ |对齐/聚集的构建块版本可在另一个显示器 (amsmath) 中使用。 |
| `子方程` |将里面的方程编号为 1a、1b、1c (amsmath)。 |
| `案例` |大括号分组的大小写区别，如分段函数 (amsmath)。 |
| `dcases` |带有显示样式条目的“cases”，因此分数保持完整大小（数学工具）。 |
| `矩阵` |没有分隔符的裸矩阵 (amsmath)。 |
| `pmatrix` |用括号括起来的矩阵 (amsmath)。 |
| `bmatrix` |用方括号括起来的矩阵 (amsmath)。 |
| `Bmatrix` |用花括号括起来的矩阵 (amsmath)。 |
| `vmatrix` |用竖条包裹的矩阵，标准行列式表示法 (amsmath)。 |
| `Vmatrix` |用双条包裹的矩阵 (amsmath)。 |
| `小矩阵` |紧凑的矩阵尺寸适合内联使用（amsmath）。 |
| `数组` |具有每列对齐的数学模式网格，是“表格”的数学表亲。 |
| `eqnarray` |旧的三列方程环境；气馁，它的间距不对，使用`align`。 |

## 交叉引用和链接

|命令 |它有什么作用 |
| --- | --- |
| `\label{图：设置}` |命名一个点（方程、图形、剖面），以便您可以参考。 |
| `\ref{图：设置}` |打印带标签的项目的编号。 |
| `\pageref{图：设置}` |打印标签所在的页码。 |
| `\cref{图：设置}` |自动打印数字及其类型名称：'fig. 1'（聪明）。 |
| `\Cref{图：设置}` |大写的“\cref”作为句子的开头：“图 1”(cleveref)。 |
| `\crefrange{eq:a}{eq:d}` |打印一个范围：'eqs. 1 到 4'（cleveref）。 |
| `\labelcref{图：设置}` |仅以 Cleveref 样式打印标签编号，不显示类型名称 (cleveref)。 |
| `\vref{图：设置}` |需要时参考加上自动“在下一页”短语（varioref）。 |
| `\autoref{fig:setup}` | hyperref 的键入参考：“图 1”，并链接了整个短语。 |
| `\nameref{sec:intro}` |打印引用部分的标题文本 (hyperref)。 |
| `\href{https://example.com}{链接文本}` |使用自定义文本（超级引用）创建可点击的链接。 |
| `\url{https://example.com}` |以打字机类型排版 URL 并使其可单击。 |
| `\hyperref[sec:intro]{该部分}` |使任意文本链接到标签（超级引用）。 |
| `\hypertarget{spot}{...}` |在文档中的任意位置创建命名链接目标（超级引用）。 |
| `\hyperlink{spot}{text}` |链接到“\hypertarget”（hyperref）。 |
| `\phantomsection` |创建一个锚点，以便链接到未编号的标题放置在正确的位置（超级引用）。 |
| `\texorpdfstring{$\alpha$}{alpha}` |为标题中的数学提供纯文本替代方案，以便 PDF 书签保持有效（超级引用）。 |
| `\pdfbookmark[1]{标题}{名称}` |添加手动 PDF 书签条目 (hyperref)。 |

## 引文和参考书目

|命令 |它有什么作用 |
| --- | --- |
| `\cite{knuth1984}` |按关键字引用参考书目条目。 |
| `\nocite{key}` |在参考书目中添加一个条目，但不在文本中引用它； `\nocite{*}` 添加了所有内容。 |
| `\citep{knuth1984}` | natbib 作者年份风格的附加引文“(Knuth, 1984)”。 |
| `\citet{knuth1984}` |文本引用“Knuth (1984)”，采用 natbib 作者年份风格。 |
| `\citeauthor{knuth1984}` |仅打印作者姓名（natbib 和 biblatex）。 |
| `\citeyear{knuth1984}` |仅打印年份（natbib 和 biblatex）。 |
| `\citealp{knuth1984}` | natbib 不带括号的括号引用，用于构建您自己的引用。 |
| `\citealt{knuth1984}` | natbib 全年无括号文本引用。 |
| `\parencite{knuth1984}` | biblatex 的括号引用，类似于 `\citep`。 |
| `\textcite{knuth1984}` | biblatex 的文本引用，类似于 `\citet`。 |
| `\autocite{knuth1984}` | biblatex 引用遵循该风格的首选形式（括号、脚注等）。 |
| `\footcite{knuth1984}` | biblatex 引文放在脚注中。 |
| `\fullcite{knuth1984}` |内联打印条目的完整参考书目文本 (biblatex)。 |
| `\citetitle{knuth1984}` |打印作品的标题 (biblatex)。 |
| `\参考书目{refs}` | BibTeX：打印 .bib 文件中的参考文献列表。 |
| `\bibliographystyle{plainnat}` | BibTeX：选择参考格式；经典样式包括 plain、unsrt、alpha、abbrv、ieeetr、acm、apalike。 |
| `\addbibresource{refs.bib}` | biblatex：在序言中注册一个 .bib 文件。 |
| `\printbibliography` | biblatex：在您放置的位置打印参考列表。 |
| `\bibitem{key}` | “thebibliography”环境中的一篇手写条目。 |
| `参考书目`（环境） |手写当您完全跳过 BibTeX 时使用的参考列表。 |

## 浮点数、数字和表格

|命令或环境 |它有什么作用 |
| --- | --- |
| ‘人物’（环境）|图像加标题的浮动容器； LaTeX 选择最终位置。 |
| `图*`（环境）|跨越两列文档中两列的图。 |
| `表`（环境）|用于表格加标题的浮动容器； LaTeX 选择最终位置。 |
| `表*`（环境）|跨越两列文档中两列的表格。 |
| `\begin{图}[htbp]` |放置提示：此处、顶部、底部、自己的页面； `!`放宽了规则，`[H]`（浮动包）正是在这里的意思。 |
| `表格`（环境）|行和列的实际网格：单元格由“&”分割，行以“\\”结尾。 |
| `表格*`（环境）|表格拉伸到指定的总宽度。 |
| `tabularx`（环境）|固定宽度的表格，其“X”列共享剩余空间（tabularx）。 |
| `数组`（环境）|具有每列对齐的数学模式网格。 |
| `longtable`（环境）|可以跨页分隔的表格，具有重复的标题（longtable）。 |
| `minipage`（环境）|页面内固定宽度的迷你页面，用于并排放置内容。 |
| `subfigure`（环境）|一个子面板，有自己的标题，如 (a) 和 (b)，位于图形内（子标题）。 |
| `wrapfigure`（环境）|正文文本环绕的图形 (wrapfig)。 |
| `sidewaysfigure`、`sidewaystable`（环境）|浮动旋转 90 度到自己的页面上（旋转）。 |
| “风景”（环境）|将整个页面旋转为横向，同时 PDF 页面自动旋转 (pdflscape)。 |
| `twoparttable`（环境）|包裹表格，使脚注与表格宽度对齐（三部分）。 |
| `tablenotes`（环境）|注释列表位于三部分表下，标有“\tnote{a}”。 |
| `调整框`（环境和 `\adjustbox`) |使用键值选项（调整框）缩放、调整大小或裁剪任何内容。 |
| `\caption{...}` |向图形或表格添加编号标题；在其后面加上“\label”。 |
| `\caption*{...}` |没有数字或列表条目的标题（标题包）。 |
| `\captionsetup{...}` |配置标题字体、标签和间距（标题包）。 |
| `\toprule` |书签表顶部的重标尺。 |
| `\中规则` | booktabs 表的标题和正文之间的中线。 |
| `\bottomrule` |书签表底部的粗尺。 |
| `\cmidrule(lr){2-3}` |跨越选定列（书签）的部分规则。 |
| `\addlinespace` |书签行之间有小的额外垂直空间，而不是规则。 |
| `\hline` |普通表格中的全宽水平线；书签规则通常看起来更好。 |
| `\cline{2-3}` |水平线跨越普通表格中的选定列。 |
| `\vline` |表格行此时的垂直线；列“|”说明符是通常的方式。 |
| `\multicolumn{2}{c}{标题}` |将跨列的单元格合并到一行中。 |
| `\multirow{2}{*}{标签}` |跨行垂直合并单元格（多行）。 |
| `\arraystretch` |表格行高的因素；使用 `\renewcommand{\arraystretch}{1.3}` 设置。 |
| `\tabcolsep` |表格列每侧填充的长度。 |
| `\newcolumntype{C}{>{\centering\arraybackslash}X}` |定义可重用的列说明符（数组包）。 |
| `\endfirsthead` | longtable：标记仅在第一页上显示的标题的结尾。 |
| `\endhead` | longtable：标记在接下来的每一页中重复的标题的结尾。 |
| `\endfoot` | longtable：标记每个分页符处显示的页脚的结尾。 |
| `\endlastfoot` | longtable：标记仅在最后显示的页脚的结尾。 |
|`\FloatBarrier` |阻止浮标漂过该点（placeins）。 |

## 脚注

|命令 |它有什么作用 |
| --- | --- |
| `\脚注{...}` |在页面底部添加注释，并标有自动编号。 |
| `\脚注标记` |对于不允许使用“\footnote”的地方，仅打印脚注标记。 |
| `\footnotetext{...}` |为早期的“\footnotemark”提供文本。 |

## 定理和证明

|命令或环境 |它有什么作用 |
| --- | --- |
| `\newtheorem{引理}{引理}` |声明类似定理的环境 (amsthm)。 |
| `\newtheorem*{备注}{备注}` |声明一个未编号的类定理环境 (amsthm)。 |
| `\theoremstyle{定义}` |设置以下 `\newtheorem` 声明的外观（简单、定义、注释）(amsthm)。 |
| `定理`（环境） |编号定理块，由 `\newtheorem{theorem}{Theorem}` 创建。 |
| “证明”（环境）|打印“Proof”的证明块。并以 QED 方块 (amsthm) 结束。 |

## 逐字记录、代码和清单

|命令或环境 |它有什么作用 |
| --- | --- |
| `\verb|代码|` |内联逐字打印：准确打印您键入的内容，由任何重复字符分隔。 |
| `逐字记录`（环境）|完全按照打字机字体打印的文本块。 |
| `\verbatiminput{file.txt}` |逐字打印整个文件（逐字包）。 |
| `lstlisting`（环境）|带有可选语法突出显示的源代码列表（列表）。 |
| `\lstinline|代码|` |列表样式（列表）中的内联代码片段。 |
| `\lstset{语言=Python}` |配置列表默认值：语言、编号、颜色（列表）。 |
| `\lstinputlisting{script.py}` |将整个源文件排版为列表（列表）。 |
| `minted`（环境）| Pygments 支持的突出显示代码块；在编译时需要“-shell-escape”（已创建）。 |
| `\mintinline{python}|代码|` |内联突出显示的代码（铸造）。 |

## 投影仪（幻灯片）

|命令或环境 |它有什么作用 |
| --- | --- |
| `框架`（环境）|一张 Beamer 幻灯片：“\begin{frame}{幻灯片标题} ... \end{frame}”。 |
| `\frame{...}` | Beamer 的一键幻灯片形式； “frame”环境是通常的方式。 |
| `\frametitle{...}` |从框架内设置幻灯片标题。 |
| `\framesubtitle{...}` |在框架标题下设置较小的副标题。 |
| `\标题页` | Beamer：在框架内，从标题元数据打印标题幻灯片。 |
| `\tableofcontents[当前部分]` |概述幻灯片突出显示您所在的部分。
| `\暂停` | Beamer：在下一个幻灯片步骤中显示框架的其余部分。 |
| `\onslide<2->` |内容从给定的覆盖步骤开始显示。 |
| `\only<2>{...}` |内容仅存在于给定步骤上，不占用其他地方的空间。 |
| `\uncover<2->{...}` |内容在出现之前是不可见的，但始终保留其空间。 |
| `\visible<2->{...}`、`\invisible<2>{...}` |在给定步骤上显示或隐藏内容而不更改布局。 |
| `\警报{...}` |以主题的警报颜色（通常为红色）突出显示文本。 |
| `块`（环境）|采用主题标准颜色的标题框。 |
| `alertblock`（环境）|警告颜色的标题框，用于警告或要点。 |
| `exampleblock`（环境）|标题框采用示例颜色，通常为绿色。 |
| `columns` （环境）和 `\column{0.5\textwidth}` |幻灯片上的并排布局区域。 |
| `\usetheme{马德里}` | Beamer：选择序言中的演示主题。 |
| `\usecolortheme{海马}` |仅交换主题的调色板。 |
| `\usefonttheme{衬线}` |仅交换主题的字体选择。 |
| `\setbeamertemplate{导航符号}{}` |覆盖一个主题元素，此处删除导航图标。 |
|`\setbeamercolor{标题}{fg=黑色}` |覆盖一种主题颜色。 |
| `\注意{...}` |附加到框架的演讲者注释，仅在注释输出中显示。 |

## TikZ 和图表

|命令或环境 |它有什么作用 |
| --- | --- |
| `tikzpicture`（环境）| TikZ 绘图的画布；所有“\draw”和“\node”命令都在其中。 |
| `\tikz` |一次性内联图片：`\tikz \draw (0,0) Circle (2pt);`。 |
| `\draw (0,0) -- (1,1);` | TikZ 路径命令，绘制线条和形状；像“[thick, red, ->]”这样的选项可以设置它的样式。 |
| `\填充` | TikZ 路径命令，填充形状而不是抚摸它。 |
| `\filldraw` | TikZ 路径命令可填充和勾画形状。 |
| `\阴影` | TikZ 填充渐变的路径命令。 |
| `\剪辑` | TikZ 路径，将所有后续绘图限制在其内部。 |
| `\路径` |无需绘图即可计算坐标的 TikZ 路径，例如用于放置节点。 |
| `\node at (0,0) {label};` | TikZ 命令将文本或形状放置在坐标处。 |
| `\坐标 (a) 在 (1,2);` |命名一个点以便在以后的路径中重用。 |
| `\foreach \i in {1,...,5}` |在列表上重复绘制代码的循环 (TikZ/pgffor)。 |
| `\tikzset{mystyle/.style={...}}` |以现代方式定义可重用的 TikZ 样式。 |
| `\tikzstyle` |旧的样式定义语法；已弃用，请使用 `\tikzset`。 |
| `\usetikzlibrary{定位}` |在序言中加载额外的 TikZ 功能。 |
| `\matrix` (TikZ) | tikzpicture 内节点的网格对齐排列。 |
| `tikzcd`（环境）|交换图的网格；单元格被“&”分割（tikz-cd）。 |
| `\arrow[r, "f"]` |在 tikz-cd 交换图中的单元格之间绘制箭头。 |

## 单位 (siunitx)

|命令 |它有什么作用 |
| --- | --- |
| `\num{12345.678}` |使用正确的数字分组和小数点标记格式化数字。 |
| `\qty{9.8}{\米\每\秒\平方}` |带单位的数字，间隔正确（siunitx v3 名称）。 |
| `\单位{\公斤\克}` |单独的单元（siunitx v3 名称）。 |
| `\SI{9.8}{\米\每\秒\平方}` | `\qty` 的 v2 名称；至今仍广泛见于报刊。 |
| `\si{\公斤\克}` | `\unit` 的 v2 名称。 |
| `\sisetup{...}` |全局 siunitx 配置。 |
| `\DeclareSIUnit{\parsec}{pc}` |定义自定义单位 (siunitx)。 |

## 术语表和缩略语

|命令 |它有什么作用 |
| --- | --- |
| `\gls{svm}` |打印术语表或首字母缩略词条目，并在首次使用时对其进行扩展（术语表）。 |
| `\Gls{svm}` |句子开头的大写形式（词汇表）。 |
| `\glspl{svm}` |条目的复数形式（词汇表）。 |
| `\newglossaryentry{tree}{name=tree, 描述={...}}` |声明词汇表术语（词汇表）。 |
| `\newacronym{svm}{SVM}{支持向量机}` |声明具有短形式和长形式的首字母缩略词（术语表）。 |
| `\acrshort{svm}`、`\acrlong{svm}` |无论首次使用如何，都强制使用短格式或长格式（词汇表）。 |
| `\makeglossaries` |激活术语表/首字母缩略词处理（术语表）的序言命令。 |
| `\printglossary` |在您放置的位置打印一份术语表列表（术语表）。 |
| `\printglossaries` |打印您放置的术语表和首字母缩略词列表（术语表）。 |

## 算法和伪代码

关键字命令来自algpseudocode (algorithmicx)； `algorithm` 浮动体包裹着它们。

|命令或环境 |它有什么作用 |
| --- | --- |
| `算法`（环境）|伪代码的浮动容器，带有标题和数字（算法）。 |
| `算法`（环境）|伪代码主体本身，包含关键字命令（algpseudocode）。 |
| `\状态` |一行伪代码的语句。 |
| `\If{...}`、`\ElsIf{...}`、`\Else`、`\EndIf` |条件块关键字。 |
| `\For{...}`、`\ForAll{...}`、`\EndFor` |在一个范围或一组上循环关键字。 |
| `\While{...}`、`\EndWhile` | While 循环关键字。 |
| `\Function{名称}{args}`、`\EndFunction` |函数定义块。 |
| `\Procedure{名称}{args}`、`\EndProcedure` |过程定义块。 |
| `\返回` |返回关键字。 |
| `\评论{...}` |伪代码行上的右对齐注释。 |
| `\要求`、`\确保` |前置条件和后置条件位于算法顶部。 |

## 语言、引用和编辑包

|命令 |它有什么作用 |
| --- | --- |
| `\selectlanguage{德语}` |切换活动语言：连字符、标题、日期（babel）。 |
| `\外语{法语}{...}` |根据另一种语言的规则（babel）排版短文。 |
| `\enquote{...}` |正确嵌套和本地化的上下文感知引号 (csquotes)。 |
| `\todo{修复这个}` |边注标记了要做的工作 (todonotes)。 |
| `\listoftodos` |打印所有待办事项注释 (todonotes) 的列表。 |
| `\missingfigure{...}` |您尚未制作的图形的占位符框 (todonotes)。 |
| `\xspace` |在宏末尾添加一个空格，除非后面跟有标点符号 (xspace)。 |
| `\patchcmd{\cmd}{查找}{替换}{成功}{失败}` |就地修补现有宏的定义 (etoolbox)。 |
| `\apptocmd`、`\pretocmd` |将代码附加或添加到现有宏 (etoolbox)。 |
| `\newtoggle{草稿}`、`\toggletrue{草稿}`、`\iftoggle{草稿}{...}{...}` |轻量级布尔标志（etoolbox）。 |

## 布局和排版包在一行中

|包或命令|它有什么作用 |
| --- | --- |
| `\setstretch{1.25}` |设置精确的行间距系数 (setspace)。 |
| `\双倍行距` |切换到双倍行距 (setspace)。 |
| `\onehalfspacing` |切换到半行距 (setspace)。 |
| `\单行距` |切换回单行间距 (setspace)。 |
| `间距`（环境）|为其内容设置自定义行间距系数 (setspace)。 |
| `\titleformat{\section}{...}{...}{...}{...}` |重新设计分段标题的外观（titlesec）。 |
| `\titlespacing{\section}{0pt}{12pt}{6pt}` |调整标题周围的空间 (titlesec)。 |
| `\setlist[itemize]{noitemsep}` |全局或按级别（enumitem）配置列表间距和标签。 |
| `parskip`（包）|将文档切换为块段落：之间有空格，无缩进。 |
| `microtype`（包）|微妙的突出和扩展，提高了合理性；只需加载它即可。 |
| `multicols`（环境）|平衡的多列文本，没有双列类选项 (multicol)。 |

## 化学、物理和领域符号

|命令 |它有什么作用 |
| --- | --- |
| `\ce{H2O}` |排版化学式或反应 (mhchem)。 |
| `\chemfig{...}` |绘制化学结构图（chemfig）。 |
| `\braket{\phi|\psi}` |排版 Dirac bra-ket 符号，带有自动调整大小的条（括号）。 |

## 发布者类命令

|命令或环境 |它有什么作用 |
| --- | --- |
| `\IEEEauthorblockN{...}` | IEEEtran：格式化 IEEE 会议标题区域中的作者姓名块。 |
| `\IEEEauthorblockA{...}` | IEEEtran：在 IEEE 会议标题区域格式化作者隶属关系块。 |
| `\ccsdesc[500]{...}` | acmart：声明一个用于论文分类的 ACM CCS 概念。 |
| `CCSXML`（环境）| acmart：保存来自 ACM 分类工具的机器可读的 ACM CCS 概念 XML。 |
| `\大学{...}` |论文模板中看到的特定于类的元数据命令，而不是标准 LaTeX。 |

## 一般环境

环境是一个用“\begin{name}”打开并用“\end{name}”关闭的区域；两者之间的一切都会受到该环境的行为影响。完整的故事在[命令与环境](/learn/commands-environments/)中。通用的：

|环境 |它有什么作用 |
| --- | --- |
| `文档` |每个文档的正文都位于“\begin{document}”和“\end{document}”之间。 |
| `摘要` |使用班级的标准标题和布局打印论文摘要。 |
| `扉页` |包装一个手工制作的完整扉页；该页未编号。 |
| `中心` |将其内容水平居中。 |
| `左齐平` |其内容左对齐，右对齐。 |
| `齐平右` |其内容右对齐，左对齐。 |
| `逐项列出` |项目符号列表；每个条目都以“\item”开头。 |
| `枚举` |编号列表；每个条目都以“\item”开头。 |
| `描述` |带标签的列表；条目以“\item[Label]”开头。 |
| `\item` |在逐项列出、枚举或描述列表中开始一项。 |
| `引用` |简短引文的缩进块，没有段落缩进。 |
| `报价` |较长引文的缩进块，带有段落缩进。 |
| `诗句` |诗歌的缩进块，每节诗行以“\\”结尾。 |
| `马虎` |段落排版采用宽松的换行，环境形式为“\sloppy”。 |
| `列表` |定义 itemize 和 Friends 的通用列表构建器。 |
| `琐事列表` |没有标签或边距的简单列表，在宏定义内使用。 |
| `文件内容` |在编译时将其主体写入文件，例如在 .tex 中发送 .bib。 |
| `附录` |包装附录章节，启用“\appendixpage”和每个附录工具（附录包）。 |

## 下一步去哪里

此页是词典。课程是语法。对于可粘贴的单页阅读器，请保持[备忘单](/learn/cheatsheet/) 打开。有关 `\command{...}` 和 `\begin{...}` 块之间的区别，请阅读 [命令与环境](/learn/commands-environments/)。对于可以画出图像但无法命名的符号，请使用[数学符号](/learn/math-symbols-cheatsheet/)。要查看任何数学模式命令的外观，请将其粘贴到[实时预览](/live/) 并观看其渲染。