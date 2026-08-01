---

title: "Beyond LaTeX Workshop：您机器上的研究编辑器"
description: "专门构建的研究编辑器，具有项目范围的智能、SyncTeX、离线校对、捆绑编译器、真正的 Git 和引文。 VS Code + LaTeX Workshop 仍然拥有配方、远程和扩展市场。"
date: 2026-07-31
tags: [latex-workshop, migration, local-first, research-workspace, editor]
---

VS Code 中的 [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) 非常棒。免费，麻省理工学院，精心维护。如果您的一周运行在自由格式编译食谱、texdoc、Docker/WSL/remote、Live Share 或完整扩展市场上，请保留该堆栈。它是为那种生活而建造的。

这篇文章适合当您想要一个文档优先的应用程序时：多文件论文、编译器、PDF、Git、引文、图表和校对已经连接在一起。免费且开源 (AGPL)。 LaTeX、Typst、Markdown。普通文件夹。没有帐户。

功能图和快捷方式：[来自 LaTeX Workshop](https://github.com/Oleafly/Oleafly/blob/main/docs/ComingFromLatexWorkshop.md)。

## 编辑器

CodeMirror 6 具有跨 LaTeX、Typst、Markdown 和 BibTeX 的项目范围索引。

你每天实际得到的：

- 转到定义、查找引用、重命名标签和宏（冲突警告）
- 实时检查损坏的引用、错误的引用、缺失的内容（`\cref`、`\eqref`、范围引用等）
- 本地+项目结构视图；过滤和跳转
- 项目定义的键、路径和宏的完成（`\newcommand`、xparse 参数形状）
- `.tex`、`.ltx`、`.sty`、`.cls` 支持；论证片段；环境检查
- TexLab for LaTeX（选择加入设置）； Tinymist 为 Typst 发货
- 统一诊断：语法、编译、语言服务、参考文献、引用、拼写、语法
- 实时 KaTeX 数学预览；源保持可编辑
- Harper + Hunspell 仅在散文上离线（命令和数学被屏蔽）
- 常见结构的可视化模式；维姆；斜线命令；多文件选项卡
- 接下来是来自大型语料库的包感知命令完成（LaTeX Workshop 的 MIT 数据，附有归属信息）

PDF 工作区：连续滚动、跨页、搜索、大纲、可拆卸窗口。跨章节文件的双向 SyncTeX。当重建待定时，映射仍然有效。最后一个好的 PDF 保持不变。撤消已编译的源集，预览可以变为当前状态，而无需完全重新编译。

书籍规模的 CI：约 6,200 行手稿、多科数学、章节、引用、校对、滚动/键入/粘贴/撤消/完成/重新编译/SyncTeX 的性能预算。

LaTeX Workshop 是通用 IDE 的强大扩展。 Oleafly 提供的这个文档循环已经组装好了，因此您不需要每个学期从设置和市场选择中连接相同的堆栈。

## 应用程序中的编译器

Tectonic (LaTeX) 和 Typst 随该应用程序一起提供。当您需要时，通过托管 Pandoc 进行 Markdown。首先编译缓存包；之后，缓存的构建可以离线工作。离线模式可以将编译器锁定到缓存。

自动编译（去抖、可取消、最新胜利）。 `Cmd/Ctrl-Enter` 重新编译。停止按钮。人性化的错误卡上线。当较新的版本运行时，最后一个好的 PDF。

配方、latexmk 链、shell 转义和自定义“.latexmkrc”保留在 LaTeX Workshop 的驾驶室中。大多数论文和论文只需要一个可靠的监督引擎。

模板：23 个捆绑入门模板（IEEE、ACM、Elsevier、Beamer、论文、简历、Typst 空白等）以及 99 个可下载包。将任何项目保存为模板。设置模型时可选的 AI 模板生成。

## 库、Git、研究工具

项目如书籍：封面颜色、引擎徽章、fork 谱系、最后一个 PDF 页面的悬停预览、书签、“/docs”搜索每个文档。 Fork 会在提交副本旁边保留完整的 Git 历史记录，以便进行有风险的重写。

从第一天开始就是真正的 Git。暂存、并排差异（工作树可编辑）、丢弃、恢复。成功编译和空闲编辑后的自动检查点； AI 在第一次写入之前运行检查点。 GitHub 可选（PAT 或设备流 OAuth）。终端 `git log` 与应用程序匹配。

粘贴 DOI / arXiv / title → 重复数据删除 → `.bib` → `\cite`。批量导入BibTeX、RIS、EndNote、Zotero RDF。跨 arXiv、Semantic Sc​​holar、Crossref、PubMed、OpenAlex 的引文检索。图表编辑器到可编辑的 TikZ。验证器、表格、方程、实验室搜索、截止日期、PDF 到 LaTeX、图像到 LaTeX 以及视觉模型。

## 可选人工智能

关闭直到您配置它。 OpenAI、Anthropic、Z.AI、Groq、OpenRouter、DeepSeek、Mistral、xAI、Ollama。密钥在磁盘上加密。请求将发送至您选择的提供商。

助手编辑、编译、读取日志、提取PDF文本、搜索文献、保存计划。写入是批准差异。删除需要单独确认。针对选择的内联 Ask-AI。用于 Claude Code、Cursor 和朋友的 Loopback MCP。关闭 AI 后，编辑器、编译、Git 和引用仍然可以工作。

## 预检、导出、隐私

预检：结构、未定义的引用、重复标签、解析器式提取预览、面向屏幕阅读器的结果。每个风险标记都带有足够的上下文，您可以自己检查，而不是相信黑盒分数。

导出：始终为 PDF； DOCX/HTML/Markdown（当 Pandoc 可用时）；演示文稿的 PowerPoint； EPUB 书籍；用于切换的源 ZIP。

没有 Oleafly 帐户。无产品遥测。崩溃报告会打开您审阅的预填 GitHub 问题。包、模板、托管 AI、引用、更新、GitHub 网络。编辑、缓存编译、语法、拼写检查和本地 Git 可以离线工作。

## 当 LaTeX Workshop 仍然适合时

- 自由格式的食谱、latexmk、shell-escape、`.latexmkrc`
- 编辑器中的 texdoc
- Docker、WSL、远程开发
- 实时共享和实时多用户编辑
- 在 VS Code 市场中进行非文档工作

Oleafly 是公开测试版。重型出版商类文件仍然可能会绊倒 Tectonic；报告他们。

## 尝试一下

1. 从以下位置下载
   [发布页面](https://github.com/Oleafly/Oleafly/releases/latest)
   （macOS 已签名/公证；Windows 可能会 SmartScreen 一次）。
2. 导入“.tex”、“.bib”和图形（或从模板开始）。
3.编译一次，然后在真实的纸上写一天。

保持 VS Code 安装。相同的文件在任一应用程序中都可以使用。如果在 Oleafly 上真正的论文上的一天进展顺利，则可以将更多项目转移到其他地方；如果配方和遥控器对于给定的树仍然获胜，则将该树留在创意工坊中。