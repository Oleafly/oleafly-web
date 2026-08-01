---

title: "編譯您的第一個 PDF"
description: "一篇小文章，一次編譯，以及讓您充分利用 LaTeX 的三個想法。"
category: "open-the-loop"
order: 1
level: "beginner"
tags: ["basics", "compile"]
featured: true
updated: 2026-07-25
quiz:
  title: 'First document check'
  questions:
    - prompt: 'What does compiling a LaTeX file actually do?'
      choices:
        - 'Uploads your paper to a journal.'
        - 'Runs a LaTeX engine over your .tex file and writes a PDF.'
        - 'Turns Word formatting into markdown.'
        - 'Only checks grammar; layout is separate.'
      answer: 'B'
      level: beginner
    - prompt: 'What does \documentclass{article} mainly set?'
      choices:
        - 'Only the title font.'
        - 'The document type and the usual defaults for fonts, margins, and headings.'
        - 'Your bibliography style forever.'
        - 'That math mode is off.'
      answer: 'B'
      level: beginner
    - prompt: 'When do title, author, and date show up on the page?'
      choices:
        - 'As soon as you write \title{...} in the preamble.'
        - 'When you call \maketitle in the body.'
        - 'Only after bibtex runs.'
        - 'Never. Titles are only PDF metadata.'
      answer: 'B'
      explanation: '\title, \author, and \date just store values. \maketitle is what prints them.'
      level: beginner
    - prompt: 'Which three ideas cover most of day-to-day LaTeX?'
      choices:
        - 'Themes, clipart, and track changes.'
        - 'Commands (backslash + braces), environments (begin/end), and a preamble before begin{document}.'
        - 'WYSIWYG, stylesheets, and mail merge.'
        - 'HTML, CSS, and JavaScript.'
      answer: 'B'
      level: beginner
    - prompt: 'Where does visible body content start?'
      choices:
        - 'On the first line of the .tex file'
        - 'After \begin{document}'
        - 'Only inside \section{}'
        - 'After \end{document}'
      answer: 'B'
      level: beginner
---

# 編譯你的第一個 PDF

如果您只使用過 Word 或 Google Docs，那麼 LaTeX 會要求您改掉一個習慣。您無需在鍵入時設定文字格式，而是以純文字描述文檔，然後讓程式為您排版。該純文字位於「.tex」文件中：您可以在任何編輯器中開啟的普通文字文件，其中包含您的文字以及「\section{...}」等命令，說明每個部分*是什麼*。編譯將此原始檔轉換為完成的 PDF。 LaTeX 引擎從上到下讀取您的文件，解釋每個命令，佈置頁面並寫入 PDF。您永遠不會直接格式化輸出。您編輯原始程式碼並再次編譯。

## 最小的真實文檔

```latex
\documentclass{article}

\title{My First Document}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
Hello, \LaTeX! Math works inline like $E = mc^2$ or on its own line:
\[
 x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\end{document}
```

從上到下閱讀。 `\documentclass{article}` 告诉引擎这是什么类型的文档，它为字体、边距和标题样式设置了合理的默认值。 `\title`、`\author` 和 `\date` 行仅存储元数据；还没有打印任何内容，“\today”仅表示您编译的日期。 `\begin{document}` 标记实际内容的开始位置。 `\maketitle` 是存储的标题块出现在页面上的时刻。 `\section{Introduction}` 打印一个编号标题并悄悄记录它，以便稍后在目录中找到它。最後幾行顯示了數學的兩個面向：「$...$」在句子中排版公式，而「\[ ... \]」則為其提供了自己的居中顯示線。

## 承載語言的三個想法

1. 指令以反斜線開頭，通常會採用大括號內的參數，因此 `\textbf{hello}` 表示「以粗體排版 hello」。
2. 環境在「\begin{...}」和「\end{...}」之間包裹一個區域，文件的主體本身就是一個大的「文檔」環境。
3. 序言是`\begin{document}`之前的所有內容；它配置文件但從不產生可見文字。

LaTeX 中的幾乎所有其他內容都是這三者的變體。

## 編譯它

在 [Oleafly](/docs/getting-started/) 中，建立一個項目，貼上上面的原始程式碼，然後編譯。 PDF 出現在原始碼旁邊，SyncTeX 連結兩側：按一下 PDF 中的某個位置可跳到符合的原始碼行，反之亦然。當引擎獲取它需要的內容時，專案的第一次編譯可能需要更長的時間；後來的跑步速度更快。

可以預料到的一件事是：編譯遲早會失敗，並顯示錯誤訊息和行號。這是完全正常的，通常意味著命令名稱中有拼字錯誤或缺少右大括號。修復它指向的行並再次編譯。

＃＃ 下一個

繼續[序言，解釋](/learn/preamble-explained/) 查看設定行的真正作用，然後[數學模式](/learn/math-mode/) 查看公式。在編寫第一個真實頁面時，請保持 [cheatsheet](/learn/cheatsheet/) 開啟。