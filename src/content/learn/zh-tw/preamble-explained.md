---

title: "以上一切開始{文件}"
description: "套件、元資料和載入順序：什麼屬於序言，什麼不屬於序言。"
category: "open-the-loop"
order: 3
level: "beginner"
tags: ["basics", "preamble"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Preamble check'
  questions:
    - prompt: 'What is the preamble?'
      choices:
        - 'Everything after \end{document}'
        - 'Everything between \documentclass{...} and \begin{document}'
        - 'Only the bibliography file'
        - 'The PDF outline panel'
      answer: 'B'
      level: beginner
    - prompt: 'Does preamble material print as body text on its own?'
      choices:
        - 'Yes. Every package prints a banner page.'
        - 'No. It configures the run; visible text starts in the body.'
        - 'Only if you use article.'
        - 'Only on the second compile.'
      answer: 'B'
      level: beginner
    - prompt: 'Why is hyperref usually loaded late in the preamble?'
      choices:
        - 'Loading it earlier is illegal.'
        - 'It rewrites a lot of commands, so it wants other packages loaded first.'
        - 'It only works after \maketitle.'
        - 'Loaded early, it disables amsmath.'
      answer: 'B'
      level: intermediate
    - prompt: 'Which of these belongs in the preamble?'
      choices:
        - 'A multi-paragraph introduction'
        - '\usepackage{amsmath} and \title{...}'
        - '\section{Results}'
        - 'The main \includegraphics for a figure'
      answer: 'B'
      level: beginner
    - prompt: 'What do options like 11pt on \documentclass mostly control?'
      choices:
        - 'Journal acceptance rate'
        - 'Global defaults such as base font size (and often paper size)'
        - 'Which OS you compiled on'
        - 'How many figures you''re allowed'
      answer: 'B'
      level: beginner
---

# 以上所有內容開始{document}

`\documentclass{...}` 和 `\begin{document}` 之間的所有內容都是**序言**。它不產生可見文字。它配置運行。字體、邊距、套件、自訂命令和文件元資料都在這裡，這就是為什麼成熟論文的序言通常比簡介長的原因。一旦你知道了每一行的作用，複製的範本就不再那麼神奇了，而是變成了一個清單。

## 解剖學

```latex
\documentclass[11pt,a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx,booktabs}
\usepackage{hyperref} % load late

\title{Title}
\author{You}
\date{\today}
```

`\documentclass` 上的選項設定全域預設值：`11pt` 是其他所有內容縮放的基本字體大小，`a4paper` 宣告紙張大小。這兩個編碼行是歷史上的伴侶：「inputenc」告訴引擎您的原始檔案是 UTF-8，而「fontenc」選擇字體編碼，因此重音字元是真正的字形而不是複合字形。目前的 LaTeX 已經假定 UTF-8 輸入，因此您將看到新文件中省略了這些行，但它們是無害的，並且模板保留它們是為了相容。

中间块加载能力包。 [geometry](/learn/margins-geometry/) 在一個選項中設定邊距，“amsmath”和“amssymb”提供幾乎所有技術文件所需的數學環境和符號，“graphicx”為圖形啟用“\includegraphics”，“booktabs”提供使表格看起來專業的規則。最後，[hyperref](/learn/hyperlinks/) 使參考和引文可點擊，並且故意最後加載，因為它重新定義了許多其他套件的內部結構。

`\title`、`\author` 和 `\date` 行僅儲存元資料。在正文中執行“\maketitle”之前不會列印任何內容，這就是為什麼這些內容可以放在序言中。

## 經驗法則

有些習慣可以讓序言保持健康。每個作業裝載一個包裹，並避免堆疊爭奪同一區域的包裹，例如設定邊距的兩種方式。將 hyperref 保留在最後，並在其後面添加一些記錄的例外情況，例如 Cleveref。將文件範圍的選擇放在類別選項中而不是分散它們，因此「11pt」或「twocolumn」在任何人都可以看到的地方聲明一次。一旦您的[自訂巨集](/learn/custom-commands/) 超出了幾行，請將它們移至「.sty」文件，以便多個文件可以共用一組定義。

最有用的紀律是消極的：如果您不知道為什麼會有序言行，請在您的文件依賴它之前找出答案。複製的前導碼會累積死線，而死線就是包衝突隱藏的地方。另請參閱[文檔骨架](/learn/document-sculpture/) 和[引擎比較](/learn/engines-compared/)。