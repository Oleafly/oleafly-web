---

title: "插入的美元缺失"
description: "洩漏到文字模式的下標和數學命令。"
category: "log-literacy"
order: 2
level: "beginner"
tags: ["errors", "math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Missing dollar check'
  questions:
    - prompt: 'What does Missing $ inserted usually mean?'
      choices:
        - 'You need a payment method'
        - 'Math-only syntax showed up in text mode'
        - 'A PDF font license expired'
        - 'You forgot \maketitle'
      answer: 'B'
      level: beginner
    - prompt: 'Which characters often trigger this in text mode?'
      choices:
        - 'Comma and period'
        - 'Underscore _ and caret ^ (and many math commands)'
        - 'Space and tab'
        - 'The @ in every email address'
      answer: 'B'
      level: beginner
    - prompt: 'How do you print a literal underscore in text (say a gene name)?'
      choices:
        - 'DNA_seq unchanged'
        - 'DNA\_seq'
        - 'DNA\&seq'
        - 'DNA\section{seq}'
      answer: 'B'
      level: beginner
    - prompt: 'The flagged line looks fine. What should you check next?'
      choices:
        - 'Printer drivers'
        - 'An earlier unclosed $ or mismatched math delimiters above that line'
        - 'Only the bibliography style'
        - 'Whether the file is named main.tex'
      answer: 'B'
      level: intermediate
    - prompt: 'Why isn''t a successful PDF proof the error was harmless?'
      choices:
        - 'PDFs never show math'
        - 'LaTeX often recovers by inserting $, which leaves wrong italics or spacing'
        - 'Compilers ignore all errors'
        - 'SyncTeX deletes the log'
      answer: 'B'
      level: beginner
---

# 插入缺少的美元

「缺少 $ 插入」是最常見的 LaTeX 錯誤，它的名稱具有誤導性：LaTeX 不是要你花錢，而是告訴你純數學語法出現在文字模式中。它插入“$”本身來恢復，繼續編譯，並且經常在下游留下奇怪的斜體輸出，因此該訊息值得真正修復而不是聳肩。

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

## 是什麼觸發了它

兩個字元和一類命令專門屬於數學模式。底線「_」和脫字符「^」建立下標和上標，「\alpha」、「\frac」和「\leq」等指令產生數學符號。其中任何純文字形式都會引發錯誤。典型的情況是包含底線的標識符，例如檔案名稱或基因名稱：句子中的“DNA_seq”會在“_”上跳動。

修復取決於您的意思。如果底線是文字字符，請將其轉義：`DNA\_seq` 列印帶有真正下劃線的名稱。如果您指的是下標，那麼您指的是數學，因此請包裝表達式： `$x_i$` 用下標 i 設定 x，採用數學斜體並具有正確的間距。需要在文本中轉義的完整字元名冊有[它自己的課程](/learn/special-characters/)，並且數學分隔符本身包含在[數學模式基礎知識](/learn/math-mode/)中。

## 當日誌指向奇怪的地方時

報告的行號是 LaTeX 發現問題的位置，而不一定是您導致問題的位置。通常的罪魁禍首是之前未關閉的“$”：您打開了數學模式並且從未關閉它，因此 LaTeX 繼續在數學模式下運行，直到出現問題（通常是在段落末尾）。顯示數學中的空白行會引發相同的錯誤，因為在數學模式下分段符是非法的。因此，當標記行看起來無害時，向上掃描奇數個美元符號並檢查每個“\[”是否都有匹配的“\]”。

語法突出顯示是發現失控的快速方法：任何 LaTeX 編輯器都會以不同的方式為數學區域著色，因此突然以數學顏色呈現的段落一目了然地指出了未封閉的美元。

最後一個警告：因為 LaTeX 透過插入遺失的 `$` 來恢復，所以 PDF 通常仍然可以建立。不要將 PDF 作為錯誤無害的證據。復原的輸出通常在文字應有的位置有雜散的斜體或損壞的間距，因此請修復來源，直到日誌乾淨為止。