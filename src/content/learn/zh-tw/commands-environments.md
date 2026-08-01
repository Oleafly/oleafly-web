---

title: "命令還是環境？"
description: "巨集接受參數；環境包裹區域。"
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Commands vs environments'
  questions:
    - prompt: 'What makes something a LaTeX command?'
      choices:
        - 'It always wraps many pages'
        - 'A backslash name that substitutes something in place, often with brace arguments'
        - 'It has to live in a .bib file'
        - 'It can''t take optional arguments'
      answer: 'B'
      level: beginner
    - prompt: 'What defines an environment?'
      choices:
        - 'A matching \begin{name} ... \end{name} pair around a region'
        - 'Any bold text'
        - 'Only math mode'
        - 'A single optional star'
      answer: 'A'
      level: beginner
    - prompt: 'Which of these is an environment?'
      choices:
        - '\textbf{hello}'
        - '\begin{center} ... \end{center}'
        - '\cite{knuth84}'
        - '\frac{a}{b}'
      answer: 'B'
      level: beginner
    - prompt: 'What does \begin{itemize} ended by \end{document} usually mean?'
      choices:
        - 'itemize is banned in article'
        - 'You opened an environment and never closed it'
        - 'You need more RAM'
        - 'The bibliography is empty'
      answer: 'B'
      level: beginner
    - prompt: 'Why write \LaTeX{} is fun instead of \LaTeX is fun?'
      choices:
        - 'Every command needs braces'
        - 'Many commands eat the following space; empty braces keep the space'
        - 'It turns hyperref on'
        - 'It forces math mode'
      answer: 'B'
      level: intermediate
---

# 指令還是環境？

除了純文字之外，您在 LaTeX 中鍵入的所有內容都採用兩種形狀之一：命令或環境。在您遇到第一條錯誤訊息之前，這種區別聽起來很學術。對 LaTeX 的抱怨中有一半是關於其中一種被用在另一種所屬的地方的。了解您正在查看的形狀可以使文件和錯誤都變得可讀。

## 指令

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

指令是一個反斜線後面跟著一個名稱，它在它出現的位置執行替換。 `\textbf{argument}` 將一個參數放在大括號中並將其排版為粗體；效果以大括號開始和結束。指令可以採用多個大括號參數，許多指令也接受前面的方括號中的可選參數，如 `\documentclass[11pt]{article}` 中。

前兩行顯示命令是您可以建立的。 `\newcommand{\foo}{bar}` 定義了一個名為 `\foo` 的新命令，其擴充功能是文字 `​​bar`，從那時起，在任何地方輸入 `\foo` 都會產生 `bar`。這是[自訂巨集](/learn/custom-commands/)背後的機制，也是套件的工作方式：套件主要是命令定義的檔案。

有一個值得儘早了解的怪癖：像“\LaTeX”這樣的命令會吞掉它後面的空格，因此“\LaTeX is fun”會打印出一起運行的單字。寫入“\LaTeX{} is fun”或“\LaTeX\ is”以保留空間。

## 環境

```latex
\begin{center}
 Centered block
\end{center}
```

環境將文件的一個區域包裝在匹配的「\begin{...}」和「\end{...}」對之間，並將其行為應用於內部的所有內容。這裡的「center」環境將區塊的每一行居中。環境可以嵌套，前提是它們以與打開時相反的順序關閉，並且它們也可以接受參數：`\begin{tabular}{ll}` 打開一個表並向其傳遞一個列規範。

因為環境必須平衡，所以它們會以獨特的方式失敗。諸如“\begin{itemize} returned by \end{document}”之類的錯誤意味著環境已開啟且從未關閉。找到缺少的`\end`；不要盯著錯誤名稱行。

## 經驗法則

如果它包含一個具有明確起點和終點的區域，那麼它可能是一個環境。如果它是一個小的替換或開關，那麼它就是一個命令。這兩個形狀甚至重疊：每個環境「foo」在底層都是作為命令對「\foo」和「\endfoo」實現的。要了解您最常遇到的命令和環境，請參閱[每個命令解釋](/learn/every-command-explained/)，或在[現場遊樂場](/live/) 中嘗試這兩種形狀。