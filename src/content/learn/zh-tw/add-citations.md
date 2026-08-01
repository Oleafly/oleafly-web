---

title: "從 .bib 鍵到文字內引用"
description: "通常的 BibTeX 循環帶有引用和參考書目命令。"
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Citations check'
  questions:
    - prompt: 'What''s the usual BibTeX setup?'
      choices:
        - 'A Word comment plus a footnote'
        - 'A .bib entry and a \cite{key} in the document'
        - 'A bare URL in the text'
        - 'A screenshot from Google Scholar'
      answer: 'B'
      level: beginner
    - prompt: 'What has to match between \cite{...} and the .bib file?'
      choices:
        - 'The journal impact factor'
        - 'The citation key, exactly, including capitalization'
        - 'Only the PDF filename'
        - 'The section number'
      answer: 'B'
      level: beginner
    - prompt: 'What do \bibliographystyle and \bibliography usually control?'
      choices:
        - 'Figure placement and image DPI'
        - 'How references look, which .bib file to read, and where the list prints'
        - 'Math delimiters'
        - 'Page margins only'
      answer: 'B'
      level: beginner
    - prompt: 'Why isn''t one LaTeX pass enough for citations?'
      choices:
        - 'Citations need a browser'
        - 'BibTeX or biber, then more LaTeX passes, turn keys into markers and the reference list'
        - 'You have to reboot'
        - '\cite only works offline'
      answer: 'B'
      level: intermediate
    - prompt: 'Citations show as bold question marks. What''s a common cause?'
      choices:
        - 'The title is too long'
        - 'You skipped the bibliography step, or the key isn''t in the .bib file'
        - 'You used article class'
        - 'Math mode is open'
      answer: 'B'
      level: beginner
---

# 從 .bib 鍵到文字引用

在 LaTeX 中引用來源涉及兩個部分：一個對每項作品進行一次描述的純文字資料庫，以及文件中的一個透過關鍵字指向條目的「\cite」命令。 LaTeX 對引文進行編號，格式化參考列表，並在重新排序部分或添加來源時保持所有內容一致。您永遠不會手寫“[12]”，也永遠不會自己重新編號。

## 文檔中的指令

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

`\cite{knuth84}` 在引用所屬的位置插入文字內標記。底部的兩個指令完成其餘的工作：「\bibliographystyle{plain}」選擇引文和參考文獻的格式，「\bibliography{refs}」命名資料庫檔案（不帶「.bib」副檔名）並標記參考文獻清單應列印的位置，通常位於「\end{document}」之前。只有您實際引用的來源才會出現在清單中。

## 資料庫中的條目

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

它位於“refs.bib”中，它是“main.tex”旁邊的一個單獨檔案。 “@”後面的單字是條目類型，“knuth84”是引用鍵，其餘是樣式用於建立格式化參考的欄位。鍵是兩個文件之間的唯一鏈接，因此它必須與“\cite”的參數完全匹配，包括大小寫。您可以使用 [BibTeX 驗證器](/tools/bibtex-validator/) 檢查整個資料庫是否有缺失欄位和格式錯誤的條目。

## 為什麼一次編譯是不夠的

參考書目是由一個單獨的程式建構的。在第一次 LaTeX 傳遞中，文件將引用的鍵列表寫入輔助文件中。然後，「bibtex」程式讀取該列表，從「refs.bib」中提取匹配的條目，並格式化它們。另外兩個 LaTeX 通道將結果折回去並解析文字內標記。 Oleafly 在每次編譯時都會為您執行這個完整的週期。如果您手動建立並跳過中間步驟，引用將顯示為粗體問號；發生這種情況時，請參閱[清除神秘引文標記](/learn/itation-question-mark/)。

## 從這裡到哪裡去

一个“.bib”文件可以满足您撰写的每一篇论文，因此仔细构建它是值得的。 [构建持久的 .bib](/learn/create-bibliography/) 涵盖可保存十年的条目类型、必填字段和键。當場所想要不同的外觀時，您可以更改一行而不是任何條目，如[數字、作者年份、期刊樣式](/learn/change-itation-style/)所述。