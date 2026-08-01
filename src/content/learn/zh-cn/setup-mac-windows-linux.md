---

title: "在任何操作系统上获取可运行的 TeX"
description: "Oleafly 带有捆绑引擎，或完整的 TeX Live / MiKTeX 安装。"
category: "local-studio"
order: 2
level: "beginner"
tags: ["setup"]
featured: false
updated: 2026-07-25
---

# 获得一个可以在任何操作系统上运行的 TeX

本地编写 LaTeX 需要 TeX 系统：编译源代码的引擎以及文档所依赖的数千个包。有两种明智的方法可以获取其中之一。一种是内置引擎的应用程序，可以让您在几分钟内完成编译。另一个是完整的 TeX 发行版，它安装任何编辑器都可以使用的完整命令行工具链。两条路径都在同一位置结束：“.tex”文件在您的计算机上转换为 PDF。

## 路径 A：包含引擎的应用程序

下载适用于 Mac、Windows 或 Linux 的 [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest)。它捆绑了 Tectonic 引擎，因此无需管理单独的 TeX 安装：您打开应用程序，创建项目并编译。当文档使用不存在的包时，Tectonic 会按需获取它，这需要在第一次使用给定包时进行网络连接，此后不需要任何连接。此路径适合任何想要撰写论文而不是管理 TeX 安装的人，并且它将普通的“.tex”和“.bib”文件保留在磁盘上，任何其他工具都可以读取。

## 路径 B：完整的 TeX 发行版

安装发行版会为您提供“pdflatex”、“xelatex”、“lualatex”和包管理器作为系统命令。在 Mac 上，安装 MacTeX，这是为 macOS 打包的 TeX Live；如果不欢迎数 GB 的下载，BasicTeX 是一个小核心，您可以根据需要通过 TeX Live Utility 进行扩展。在 Windows 上，MiKTeX 是常见的选择，可以在编译过程中即时安装缺少的软件包，而 TeX Live 也同样出色。在 Linux 上，从包管理器中一次性安装“texlive-full”，或者安装较小的方案，例如“texlive-latex-extra”以及用于稍后添加包的“tlmgr”工具。预计完整安装需要一段时间和几 GB 的磁盘空间。

## 验证安装

打开终端并向引擎询问其版本：

```bash
pdflatex --version
# or
xelatex --version
```

版本横幅意味着工具链已在您的路径上并准备就绪。提示未找到命令的错误通常意味着安装程序对 PATH 的更改尚未生效；重新启动终端，或在 Windows 上注销并重新登录即可解决此问题。

## 选择哪条路

如果您刚刚开始或只是想要以最短的路径生成已编译的 PDF，请选择该应用程序。如果您需要特定引擎、命令行构建或与现有编辑器集成，请选择完整的发行版。两者共存，不会发生冲突，因此从路径 A 开始，然后添加路径 B 不需要任何成本。无论哪种方式，下一步都是相同的：编译[您的第一个文档](/learn/first-document/)。