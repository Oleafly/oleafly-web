---

title: "較大型和較小型"
description: "類別選項（例如 11pt）和不會破壞行距的本地大小開關。"
category: "type-and-shape"
order: 2
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# 更大和更小的類型

LaTeX 中的字體大小設定為兩個層級：在類別選項中選擇一次的文件範圍基本大小，以及需要不同的跨度的本機開關。基本尺寸驅動其他一切。標題、腳註和局部大小都是相對於它定義的。

## 文檔範圍

```latex
\documentclass[11pt]{article} % 10pt, 11pt, 12pt common
```

class 選項設定正文文字的大小。 `10pt` 是預設值，`11pt` 和 `12pt` 是常見的替代方案；標準類別僅支援這三個。更改該選項會按比例重新縮放整個文檔，因為標題大小、腳註大小和行距均源自基礎。如果您需要超過 12pt 的基本尺寸，「extarticle」等類別或 KOMA-Script 類別可以接受更廣泛的選項。

## 本地交換機

```latex
{\large larger} {\Large larger}
{\small smaller} {\footnotesize notes}
{\tiny tiny}
```

這些是聲明而不是帶參數的命令：「\large」從該點更改大小，直到當前組結束，而「{\large Larger}」周圍的大括號限制了其範圍。完整的階梯，從最小到最大，是`\tiny`，`\scriptsize`，`\footnotesize`，`\small`，`\normalsize`，`\large`，`\Large`，`\LARGE`，`\huge`，`\Huge`。每個步驟對應到一個具體大小，取決於類別選項，因此「12pt」下的「\large」比「10pt」下的「\large」大。將開關視為距正文的一步，而不是固定的大小。

行距有一個微妙之處。大小開關僅調整處於活動狀態時結束的段落的基線距離。對於較大尺寸的多段落跨度，請透過在右大括號之前以「\par」結尾來將段落分隔符號保留在群組內，如「{\large ... \par}」。否則，最後一段將在超大字母下保持正常大小的行距，並且行會發生衝突。

## 尺寸與結構

抵制使用大小開關來偽造標題。 `\section` 及其親屬為您設定大小，它們還對標題進行編號，將其添加到目錄中，並建立​​ PDF 書籤。手工建造的 `{\Large \textbf{...}}` 行並沒有提供這些。同樣的想法也適用於強調，在[強調而不與字體對抗](/learn/bold-italic/)中有介紹。保留手動大小開關以滿足真正的本地需求，例如表格下的腳註大小的註釋或標題頁上的一行。如果文件中的每個標題都需要重新設計，請更改類別或使用像「titlesec」這樣的包，而不是手動調整每個標題的大小。