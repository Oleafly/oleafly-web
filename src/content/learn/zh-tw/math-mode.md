---

title: "位於句子中（或單獨）的數學"
description: "內聯數學、顯示數學、方程式環境、何時值得編號。"
category: "equation-craft"
order: 1
level: "beginner"
tags: ["math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Math mode check'
  questions:
    - prompt: 'What''s the real difference between inline math ($...$) and display math (\[ ... \])?'
      choices:
        - 'Inline is for Greek letters; display is only for fractions.'
        - 'Inline sits in a sentence; display is centered on its own line.'
        - 'Inline is for the article class; display is for books.'
        - 'You need display math whenever a formula has an exponent.'
      answer: 'B'
      hint: 'Where does the formula sit on the page?'
      explanation: 'Inline math stays in the paragraph. Display math gets its own centered line (and can be numbered).'
      level: beginner
      tags: [math, delimiters]
    - prompt: 'For unnumbered display math today, which form should you use?'
      choices:
        - '$$ ... $$'
        - '\[ ... \]'
        - '\begin{center} ... \end{center}'
        - '\textbf{...}'
      answer: 'B'
      explanation: 'Prefer \[ ... \]. The old $$ ... $$ form is plain TeX and can mess up vertical spacing a bit.'
      level: beginner
    - prompt: 'How do you name a numbered equation so you can point back to it later?'
      choices:
        - 'Put the equation under a section with that name.'
        - 'Add \label{...} inside the equation environment.'
        - 'Type the equation number by hand in the source.'
        - 'Load graphicx and name an image.'
      answer: 'B'
      explanation: '\label stores the number. After another compile, \ref or \eqref prints it.'
      level: beginner
    - prompt: 'Why do most technical papers load amsmath (often with amssymb and amsfonts)?'
      choices:
        - 'Without it, LaTeX won''t print any text.'
        - 'You get the common math environments, symbols, and helpers like \eqref.'
        - 'It replaces the document class.'
        - 'It turns off dollar-sign math mode.'
      answer: 'B'
      level: beginner
    - prompt: 'What happens if you type something like DNA_seq in ordinary text mode?'
      choices:
        - 'LaTeX ignores the underscore.'
        - 'You get a Missing $ inserted error: math syntax showed up outside math mode.'
        - 'The PDF never builds, no recovery at all.'
        - 'It becomes a hyperlink.'
      answer: 'B'
      explanation: 'Underscore and caret are for math. For a real underscore write \_. For a subscript, wrap the math in $...$.'
      level: beginner
---

# 位於句子中（或單獨）的數學

LaTeX 將數學視為一種獨立的模式，具有自己的字體和間距規則。每個變數、公式和符號都必須存在於數學模式中，無論是句子中的單一 n 或完整的方程式。有兩種類型：段落內的內聯數學流，以及顯示數學位於其自己的行的中心，帶或不帶數字。

```latex
Inline: $E=mc^2$ or \(E=mc^2\)

Display (unnumbered):
\[
 \int_0^1 x^2 \, dx = \frac{1}{3}
\]

Display (numbered):
\begin{equation}
 \label{eq:energy}
 E = mc^2
\end{equation}
```

## 內聯數學

一對美元符號，如“$E=mc^2$”，將公式設為行內的文字大小。這些字母以數學斜體顯示，等號周圍的間距已為您處理。 `\(E=mc^2\)` 是等效的 LaTeX 原生形式。它產生相同的輸出，並且由於其開始和結束分隔符號不同，未閉合的輸出會給出更清晰的錯誤訊息。即使對於單一變數名稱也可以使用內聯數學，因此散文中的 n 與方程式中的 n 相符。

## 顯示數學

`\[ ... \]` 將公式放在自己的中心線上，不帶數字。對於您永遠不會參考的一次性方程式來說，這是正確的選擇。避免使用舊的“$$ ... $$”形式。它是純 TeX 而不是 LaTeX，並且在某些情況下會產生稍微錯誤的垂直間距。

## 編號方程

“equation”環境顯示公式，並在邊緣顯示一個數字。 `\label{eq:energy}` 為該數字附加一個名稱，在其他地方編寫 `Equation~\ref{eq:energy}` ，或者在加載了 `amsmath` 的情況下，`\eqref{eq:energy}` ，它會添加括號本身。 「~」是一個不間斷的空格，因此單字和數字保留在一行上。引用在第二次編譯時解析。如果您在輸出中看到“??”，請參閱[問號而不是數字](/learn/equations-show-qq/)。

## 要載入的套件

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

幾乎每個數學文檔都會載入這三個內容。 `amsmath` 提供了大多數課程假設的環境和指令，包括 `align` 和 `\eqref`。 `amssymb` 和 `amsfonts` 增加符號字體和額外的字母，例如 `\mathbb`。將這句話放在序言中一次，然後就忘記它。

典型的初學者錯誤是數學模式之外的數學語法：純文本中的下劃線會停止編譯並顯示“插入了缺失的$”，這有[它自己的教訓](/learn/missing-dollar/)。要感受這兩種模式，請在 [live Playground](/live/) 中鍵入一個內聯的帶有 `$x_i$` 的句子，並在 `\[ ... \]` 中輸入相同的公式，然後比較每種模式在頁面上的位置。