---

title: "Zotero 转换为 .bib 文件"
description: "更好的 BibTeX、自动导出、机器生存的关键。"
category: "cite-your-sources"
order: 6
level: "intermediate"
tags: ["citations", "zotero"]
featured: false
updated: 2026-07-25
---

# 将 Zotero 转换为 .bib 文件

Zotero 非常擅长收集参考资料：它从浏览器按钮获取元数据和 PDF，并使所有内容都可搜索。另一方面，LaTeX 只读取“.bib”文件。两者之间的桥梁是 Better BibTeX 插件。它将 Zotero 集合转换为保持最新的“.bib”文件，并且同样重要的是，保持引用键稳定，以便您的“\cite”命令永远不会中断。

## 为什么内置导出不够

Zotero 可以自行导出 BibTeX，但它每次都会重新生成引文键，并且从“knuth_literate_1984”更改为“knuth_literate_1984-1”的键会默默地破坏每个使用旧名称的“\cite”。导出也是一次性快照，因此在您添加论文的那一刻文件就会过时。 Better BibTeX 解决了这两个问题：密钥是根据您选择的公式生成的，可以固定，这样它们就不会改变，并且导出可以自动刷新。

## 设置管道

首先，通过 Zotero 的工具、插件对话框从其网站安装 Better BibTeX，然后重新启动 Zotero。其次，在 Better BibTeX 首选项中决定引文关键公式。生成诸如“knuth1984”或“knuth1984literate”之类的键的模式很容易键入并且易于在源代码中识别。第三，右键单击属于您论文的集合，选择导出集合，选择 Better BibTeX 格式，然后勾选“保持更新”，然后将文件保存到项目文件夹中，例如“refs.bib”。从那时起，在 Zotero 中添加或编辑项目会在几秒钟内重写文件。

最后，使用“\bibliography{refs}”或“\addbibresource{refs.bib}”将文档指向导出的文件，就像手写数据库一样。 [从 .bib 键到文本引用](/learn/add-itations/) 中介绍了接线。

## 分工

将 Zotero 视为主数据库，并将“.bib”文件视为存在于论文存储库中的生成工件。将“.bib”与“.tex”一起提交意味着共同作者或另一台机器上的您可以在根本不安装 Zotero 的情况下编译论文。请勿手动编辑导出的文件。下一次自动导出将覆盖您的更改。相反，在 Zotero 中修复元数据，并且更正会继续进行。如果导出后条目看起来仍然错误，请通过 [BibTeX 验证器](/tools/bibtex-validator/) 运行它，以查看样式对哪个字段不满意。

一个习惯可以避免大多数未来的痛苦：一旦手稿中出现某个键，将其固定在 Better BibTeX 中（右键单击该项目，Better BibTeX，固定 BibTeX 键）。固定键可以承受公式更改、机器移动和库重组，而这正是引文键需要做的事情。