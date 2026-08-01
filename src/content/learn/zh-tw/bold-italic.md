---

title: "強調而不與字體對抗"
description: "textbf、textit、emph、mono，以及為什麼 emph 比硬編碼斜體更好地嵌套。"
category: "type-and-shape"
order: 1
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# 強調而不對抗字體

LaTeX 中的強調來自一小組命令，每個命令都將受影響的文字作為大括號參數。 LaTeX 將大多數文字處理程式合併的兩個想法分開：應用特定的字體，並將跨度標記為強調的。了解哪個命令可以在樣式變更時保持文件一致。

```latex
\textbf{bold}
\textit{italic}
\emph{emphasis} % preferred in running text
\underline{avoid} % rarely used in body text
\texttt{monospace}
\textsc{Small Caps}
```

## 指令

`\textbf` 設定粗體，這是定義中強調強調和詞條的標準處理方式。 `\textit` 直接設定斜體類型。 `\texttt` 切換到等寬打字機字體，這是執行文字中檔案名稱、命令和程式碼識別碼的約定。 `\textsc` 設定小型大寫字母，常見於參考書目中的作者姓名以及否則會主導一行文本的首字母縮略詞。

`\underline` 存在，但在範例中獲得了註釋。底線是打字機時代斜體的替代品，在 LaTeX 中它也有一個機械問題：帶下劃線的文本被放置在一個框中，因此它不能跨行，並且長下劃線的短語會溢出頁邊距。在印刷版式中，斜體起到了底線的作用。

這些命令是嵌套的，因此當字體提供字體時，`\textbf{\textit{bold italic}}` 將兩者結合。

## 為什麼 \emph

`\emph` 標記的是含義而不是外觀：它表示「強調這一點」並讓上下文決定如何強調。在直立文字中，它會列印斜體。在已經是斜體的文字內部，它會翻轉回直立狀態，因此強調中的強調仍然可見。斜體文字內的硬編碼「\textit」只是保持斜體，內部強調消失。標記意圖也會在以後得到回報。類別或套件可以在一個地方重新定義重點，而無需在整個文件中進行編輯。

經驗法則：在散文中使用「\emph」來強調，並保留「\textit」來表示通常為斜體的內容，無論上下文如何，例如書名、外來短語和物種名稱。

## 界限和習慣

這些都是文字模式命令，它們在公式中表現不正常。粗體數學符號需要 `\mathbf` 或 `\boldsymbol`，在 [bold math](/learn/bold-math/) 介紹。抵制堆疊強調，因為當一切都加粗時，就沒有什麼突出的了。從結構命令（如“\section”）建立標題，而不是手動加粗，因為結構也提供目錄和 PDF 書籤。 [較大且較小的類型](/learn/font-size/) 對字體大小提出了相同的論點。