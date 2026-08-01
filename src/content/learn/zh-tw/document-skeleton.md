---

title: "可以重複使用的骨架"
description: "類、序言、標題、章節、參考書目：幾乎每篇論文的形式。"
category: "open-the-loop"
order: 7
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Document skeleton check'
  questions:
    - prompt: 'What are the three main parts of a typical LaTeX document?'
      choices:
        - 'Abstract, figures, and appendix only'
        - 'The class line, the preamble, and the body between begin/end{document}'
        - 'Header, footer, and sidebar'
        - 'A .bib file, a style file, and a PDF'
      answer: 'B'
      level: beginner
    - prompt: 'Which class do you usually pick for a short paper or homework?'
      choices:
        - 'beamer'
        - 'article'
        - 'book'
        - 'no class at all'
      answer: 'B'
      level: beginner
    - prompt: 'Why does pasting \chapter into an article often blow up?'
      choices:
        - 'article turns off all numbering'
        - 'article has no \chapter; chapters live in report/book-style classes'
        - 'You forgot graphicx'
        - 'Chapters only work offline'
      answer: 'B'
      level: beginner
    - prompt: 'If you put real text before \begin{document}, what error do you usually see?'
      choices:
        - 'Undefined control sequence for \par'
        - 'Missing \begin{document}'
        - 'Overfull hbox'
        - 'Citation undefined'
      answer: 'B'
      explanation: 'The preamble is for setup only. It shouldn''t print body text.'
      level: beginner
    - prompt: 'What happens to text after \end{document}?'
      choices:
        - 'It becomes a second PDF page'
        - 'LaTeX ignores it'
        - 'It gets moved into the abstract'
        - 'It always fatal-errors'
      answer: 'B'
      level: beginner
---

# 一個可以重複使用的骨架

要除去內容，幾乎每個 LaTeX 文件都有相同的骨架：類別聲明、設定前言以及 `\begin{document}` 和 `\end{document}` 之間的正文。一旦你知道了這個形狀，就可以透過貼上骨架、更改標題和書寫來開始一個新專案。

```latex
\documentclass[11pt]{article}
% preamble: packages, macros, metadata
\title{...}
\author{...}
\begin{document}
\maketitle
% body: sections, figures, bibliography
\end{document}
```

從上到下閱讀：`\documentclass[11pt]{article}` 選擇文件類型並將基本字型大小設為選項。設計中的其他一切都源自於此選擇。類別行和「\begin{document}」之間的區域是[序言](/learn/preamble-explained/)，其中載入套件並儲存「\title」和「\author」等元資料。 `\begin{document}` 標記可見內容的開始位置，`\maketitle` 排版儲存的標題區塊，正文後面是章節、圖表，最後是參考書目。 `\end{document}` 關閉文件。它後面的任何內容都會被默默地忽略，這有時會隱藏有人貼在錯誤位置的一大塊文字。

## 班級選擇

|班級 |使用|
| --- | --- |
| `文章` |論文、作業、筆記 |
| `報告` |包含章節的較長報告 |
| `書` |書籍和許多論文|
| `投影機` |幻燈片|

這個類別不是裝飾性的；它改變了存在的命令。 `article` 沒有 `\chapter`，因此將論文章節貼到其中會立即失敗。 「報告」增加了章節並為標題提供了自己的頁面。 「book」採用雙面列印並在右側頁上開啟章節。 「beamer」重組了幻燈片框架周圍的所有內容。期刊和會議都有自己的類別，當你為某個場所寫作時，它的類別完全取代了這個決定。

大多數骨骼斷裂的原因有兩個。放置在 `\begin{document}` 之前的文字會觸發錯誤“Missing \begin{document}”，因為序言只能配置，而不能列印。缺少“\end{document}”會使編譯器在檔案末尾等待，並顯示有關輸入結束的無用訊息。當出現任何一種情況時，請在懷疑內容之前檢查文件的框架。

骨骼有鱗片。四页纸的注释使正文保持一致；论文将每一章移动到其自己的文件中，并将它们从根中拉入，如[分割章节文件](/learn/split-chapter-files/)所示。他們周圍的框架沒有改變。