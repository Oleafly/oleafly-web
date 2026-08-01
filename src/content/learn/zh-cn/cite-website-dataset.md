---

title: "网页、视频、数据集"
description: "脆弱 URL 的杂项/在线条目和访问日期。"
category: "cite-your-sources"
order: 7
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# 网页、视频、数据集

BibTeX 是在 20 世纪 80 年代为期刊、书籍和会议记录而设计的，因此它没有网页、YouTube 视频或 Zenodo 上的数据集的原生概念。您仍然需要不断地引用这些内容，标准的解决方法是“@misc”条目类型，它接受几乎任何字段组合，并让样式合理地打印它们。

## @misc 模式

```bibtex
@misc{oleafly2026,
 author = {{Oleafly Contributors}},
 title = {Oleafly},
 year = {2026},
 howpublished = {\url{https://oleafly.com}},
 note = {Accessed: 2026-07-24}
}
```

这里有三个细节很重要。 `{{Oleafly Contributors}}` 周围的双大括号告诉 BibTeX 将整个字符串视为一个字面名称；如果没有它们，它会将“Contributors”解析为姓氏，并将其余部分缩写为“O. Contributors”。 `howpublished` 字段是经典 BibTeX 中 URL 的常用位置，将地址包装在 `\url{...}` 中会以等宽字体排版，并让它干净地跨行（为此加载 `url` 或 `hyperref` 包）。 “note”字段保存访问日期，这很重要，因为网络内容会发生变化并消失。该日期告诉读者您实际看到的页面版本。

## biblatex 替代方案：@online

如果您的文档使用 biblatex，则有一个专用类型。 “@online”条目采用正确的“url”和“urldate”字段，因此同一源变为“url = {https://oleafly.com}”和“urldate = {2026-07-24}”，并且样式为您格式化访问日期。当参考书目风格支持时，首选“@online”；当您必须与经典的“.bst”文件保持兼容时，请回退到“@misc”。两个系统之间的差异在 [Classic BibTeX 或 biblatex](/learn/bibtex-vs-biblatex/) 中列出。

## 数据集和软件

当 DOI 存在时，数据集和代码发布不仅仅需要一个简单的 URL。像 Zenodo 和 Figshare 这样的存储库会创建 DOI，因此引用可以比任何一种托管设置都更长久。将 DOI 放入“doi”字段中，或者将 DOI 放入“howpublished”中，作为经典样式的“\url{https://doi.org/10.5281/...}”。当工件进行版本控制时，请包含“版本”注释，因为读者在五年内下载的“数据集”可能不是您分析的数据集。许多项目还发布首选引文，通常在存储库的“CITATION.cff”文件中。使用它比自己猜测字段既礼貌又更准确。

## 视频和其他奇怪的来源

对于视频，请将频道或创建者放在“author”中，将视频标题放在“title”中，将平台和 URL 放在“howpublished”中，将上传年份放在“year”中，将您的访问日期放在“note”中。任何不寻常的事物的一般规则都是相同的：捕获它的制作者、它的名称、读者可以在哪里找到它以及您何时查看，并且“@misc”将通过任何样式安全地携带所有这些信息。