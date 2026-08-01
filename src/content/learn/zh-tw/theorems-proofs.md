---

title: "定理和證明塊"
description: "amsthm 樣式、共用計數器、驗證結束標記。"
category: "field-kits"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# 定理和證明塊

數學寫作以編號陳述為基礎：定理、引理和定義，每個陳述都與文本分開並編號，以便以後的證明可以引用它們。 “amsthm”包提供機械。您可以在序言中聲明文件所需的區塊類型，然後將它們用作普通環境。

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]

\begin{theorem}[Optional name]
 Statement.
\end{theorem}
\begin{proof}
 Argument. \qedhere
\end{proof}
```

## 宣告環境

`\newtheorem{theorem}{Theorem}[section]` 建立一個 `theorem` 環境。第一個參數是您要輸入的環境名稱，第二個參數是列印的標題文本，後面的「[section]」將編號與各節聯繫起來，因此第 2 節的第三個定理是定理 2.3，並且計數器會在每個新節處重置。

`\newtheorem{lemma}[theorem]{Lemma}` 將可選參數放在另一個位置，這意味著不同的東西：`[theorem]` 表示引理共享定理計數器而不是保留自己的定理計數器。共享計數器產生單一序列，即定理 2.1 和引理 2.2。這比引理 2.1 和定理 2.1 都存在的平行序列更容易遵循。

`\theoremstyle` 設定其後面的每個聲明的外觀。 「plain」風格以斜體顯示正文，這是定理、引理和命題的傳統處理方式。 「定義」風格使身體保持直立，適合定義和範例。第三種風格，“評論”，更輕鬆，適合筆記和觀察。根據每個聲明應使用的樣式對聲明進行分組。

## 使用區塊

環境的可選參數在標題後面印出一個名稱，因此 `\begin{theorem}[Optional name]` 會產生類似定理 2.4 (Fubini) 的結果。 「校樣」環境列印斜體校樣標題，並以校樣結束標記結束，小方塊設定在右側。

當證明不是以普通文字結束時，`\qedhere` 會重新定位該方塊。如果證明的最後一行是顯示的方程，則自動標記將落在其下方的空白行上。在顯示幕內寫入「\qedhere」會將方塊放在方程式自己的行上。當證明以純文字結尾時（如範例所示），該命令是無害的，但沒有必要。

定理塊與其他對像一樣都是編號對象，因此環境中的“\label{thm:main}”和文本中的“Theorem~\ref{thm:main}”使用[方程式的數字和指針](/learn/number-equations/)中描述的通常的兩遍規則。常見的聲明錯誤是將每個環境放在「\theoremstyle{plain}」下，這將多段落定義設為斜體。將定義和範例保留在「定義」樣式下。