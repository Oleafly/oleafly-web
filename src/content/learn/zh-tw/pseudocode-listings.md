---

title: "演算法和來源列表"
description: "Algorithm2e 草圖和真實程式碼清單。"
category: "field-kits"
order: 3
level: "intermediate"
tags: ["code"]
featured: false
updated: 2026-07-25
---

# 演算法和來源列表

論文以兩種不同的形式呈現程式碼，而 LaTeX 為每種形式提供了單獨的工具。偽代碼是演算法的理想化草圖，用關鍵字和數學進行排版，「algorithm2e」套件可以處理它。來源清單是以等寬字體逐字複製的真實程式碼，而「listings」套件處理這些。選擇錯誤的工具通常是摩擦的根源，因此了解兩者都會有所幫助。

## 使用演算法2e 的偽代碼

```latex
\usepackage[ruled,vlined]{algorithm2e}
\begin{algorithm}
\caption{Train}
\While{not converged}{
 Update $\theta$\;
}
\end{algorithm}
```

套件選項設定視覺樣式：「ruled」在演算法上方和下方繪製水平規則，並將標題放置在頂部，這是大多數場地所期望的約定，而「vlined」則繪製一條小垂直線，標記每個區塊的範圍，因此嵌套保持可讀，無需大量縮排。 “algorithm”環境是一個浮點數，就像一個數字，因此它帶有“\caption”，為它提供了“\ref”引用的數字。

在內部，`\While{condition}{body}` 使用粗體關鍵字、條件和正文將循環排版為縮排區塊。 `\For`、`\If` 和 `\Return` 遵循相同的模式。語句以“\;”結尾，它會印出行的終止符並開始新行。忘記這一點是典型的初學者錯誤：線條連在一起。因為這是普通的 LaTeX，像 `$\theta$` 這樣的數學是內聯的，這就是偽代碼的用途：用符號而不是任何特定的語言來描述更新規則。

## 帶有清單的真實程式碼

```latex
\usepackage{listings}
\begin{lstlisting}[language=Python]
def f(x):
 return x**2
\end{lstlisting}
```

「lstlisting」環境準確地再現其內容，保留空格並按字面處理特殊字符，因此您可以貼上程式碼而無需轉義任何內容。 `language=Python` 選項開啟該語言的關鍵字突出顯示，並且 `listings` 知道許多其他語言。預設情況下，輸出是普通的。大多數人在序言中添加一次性的“\lstset{basicstyle=\ttfamily\small,numbers=left}”，以獲得帶有行號的合理大小的等寬字體。要直接包含文件而不是貼上，`\lstinputlisting[language=Python]{train.py}` 從磁碟讀取它，這使論文與實際來源保持同步。如果您想要彩色、高保真度突出顯示，「minted」套件是更強大的選擇，但代價是需要外部工具和 shell 轉義。

## 在它們之間做選擇

在論文正文中使用偽代碼來傳達想法，並為需要精確代碼的工件保留逐字列表，例如附錄或工具描述。一個常見的錯誤是將「lstlisting」放置在沒有「[fragile]」選項的Beamer框架內，這會失敗並出現不透明錯誤；同樣的警告出現在[第一個 Beamer 甲板](/learn/beamer-basics/) 中。