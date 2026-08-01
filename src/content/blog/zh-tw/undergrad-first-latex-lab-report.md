---

title: "你作為本科生的第一份 LaTeX 實驗報告"
description: "從零到編譯報告：模板、方程式、圖形、參考文獻和不需要手動管理 TeX Live 的編譯路徑。"
date: 2026-07-02
tags: [students, beginners, lab-report]
---

您無需掌握 LaTeX 即可完成實驗報告。你需要一個模板，一個
幾個指令，以及一個在第一天就可以使用的編譯按鈕。其他都可以
等到後面的課程要求提供論文類文件。

這是一條優先考慮乾淨 PDF 而非完美排版的捷徑。

## 如果可以的話，跳過多千兆位元組的安裝

帶有捆綁引擎的桌面研究編輯器（例如
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest)) 為您提供 PDF
無需管理 TeX Live。你會得到模板、錯誤卡
損壞了，原始檔案旁邊的 PDF 帶有點擊跳轉功能，並且文件歷史記錄沒有
單獨的 Git 課程。如果您的講師需要特定的分佈或
背面，遵循課程筆記。否則優化啟動。

當課程已經使用雲端編輯器時，它們也很好。目標是 PDF
按時，而不是工具鏈身份。

## 竊取一個骨架，然後刪除一半

從一個簡單的「文章」範本開始：

```latex
\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,graphicx}
\begin{document}
\title{Lab 3: RC circuits}
\author{Your Name \and Lab Partner}
\date{Due date}
\maketitle

\section{Objective}
\section{Method}
\section{Results}
\section{Discussion}
\section{Conclusion}
\end{document}
```

更多詳細資訊：[編譯您的第一個 PDF](/learn/first-document/) 和
[快速參考](/learn/cheatsheet/)。

刪除您的標題不需要的部分。不要複製 40 篇論文
序言“以防萬一”。額外的軟體包是初學者遇到他們無法犯的錯誤的原因
閱讀。

## 實驗室方程式，而非教科書方程式

內嵌：`$F = ma$`。展示：

```latex
\[
  v = v_0 + at
\]
```

僅對稍後以「\eqref」引用的內容進行編號。如果助教詢問不確定性，
把它放在一個句子或一個小表格中，而不是十行的“對齊”，你不這樣做
還明白。分數：`\frac{a}{b}`。平方根：`\sqrt{x}`。

當編譯日誌顯示一些可怕的內容時，只修復第一個錯誤，然後
重新編譯。後來的錯誤通常是第一個錯誤的噪音。

## 一張圖，做得很好

從分析工具中將繪圖匯出為 PDF 或 PNG 格式。將其包含在：

```latex
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.85\textwidth]{plot.pdf}
  \caption{Measured voltage vs time for trial 2.}\label{fig:vr}
\end{figure}
```

文中：「圖~\ref{fig:vr} 顯示...」。圖片下方的說明文字。標籤
在標題之後。如果圖形浮動到錯誤的頁面，請稍微縮小寬度
在你與安置選項鬥爭一個小時之前：
[浮動放置](/learn/figure-wrong-position/)。

## 沒有痛苦的桌子

對於幾行，一個簡單的「表格」就足夠了。在上面添加一个带有“table”的标题
+ `\標題`。对齐数字，以便助教可以扫描它们。你不需要
實驗室 1 上的出版級“booktabs”，但如果可以的話，請避免垂直線湯。

## 沒有博士參考書目工作流程的參考文獻

對於三個引文，手動列表有效：

```latex
\begin{thebibliography}{9}
\bibitem{textbook}
  Author, \emph{Title}, year.
\end{thebibliography}
```

有關更多信息，請從 Google Scholar 或 Zotero 導出“.bib”並清理密鑰，以便
它們簡短易讀。損壞的引用印為“[?]”：
[清除神秘的引文標記](/learn/引用-問號/)。

依照課程要求的方式引用實驗手冊和教科書（IEEE、APA-ish 或
一個簡單的編號清單）。配對標題勝過配對日記。

## 初學者常見錯誤

- 在“\includegraphics”之前忘記“\usepackage{graphicx}”
- 文字中的特殊字元如“%”和“_”無需轉義
- 不符的“$”數學分隔符
- 帶有空格的檔案名稱（「我的plot.pdf」）包含在內
- 編輯與您編譯的資料夾不同的資料夾

慢點，修復第一行日誌，重新編譯。

## 交PDF，保留原始碼

提交 LMS 要求的內容（通常為 PDF）。將“.tex”和數字保存在
課程結束後您仍然擁有的資料夾。將來你會重複使用這個骨架
以便下一次報告。如果你的編輯器自動儲存 Git 歷史記錄，甚至
更好：您可以恢復刪除正確方程式之前的版本。

## 第一節 90 分鐘

如果您今晚開始：

1. 打開模板或貼上上面的骨架。
2. 填寫標題、名稱、章節標題。
3. 增加一個您已知正確的方程式。
4、導出一張圖；包括它；為其添加標題；在結果中引用它。
5. 依照課程要求增加兩個參考文獻。
6. 編譯直到 PDF 看起來像一份報告，而不是一篇空白文章。

當標題被覆蓋時停止。不要在套餐選擇上花費一整晚的時間。

## 當東西壞了的時候

只讀取第一個錯誤。常見修復：缺少「$」、缺少軟體包
圖形，錯誤的檔名，額外的`}`。儲存之前編譯版本的副本
大編輯，這樣你就可以回去了。如果同學的序言適用於該課程，
借用他們使用的最小包，而不是整個論文堆疊。

## 成功是什麼樣的

PDF 打開，頁邊距看起來合理，圖形有標題，方程式是
可读性强，标题标题清晰。对于第一次来说这已经足够了
LaTeX 實驗室報告。排版完美可以等待真正需要的论文
它。