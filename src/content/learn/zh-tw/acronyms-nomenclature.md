---

title: "首字母縮寫和符號列表"
description: "詞彙表-額外的草圖，或當足夠時手工構建的清單。"
category: "long-form"
order: 4
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# 首字母縮寫和符號列表

長文檔會累積縮寫，並且圍繞它們的約定很嚴格。首字母縮寫在第一次使用時會完整拼寫，然後縮寫，論文通常需要在前面列出縮寫詞列表。手動維護會以可預見的方式失敗。您重新排序了兩章，第一個使用移動，突然“ML”出現在“機器學習 (ML)”之前三頁。 `glossaries-extra` 套件會追蹤您的首次使用情況。

## 自動路線

```latex
\usepackage[acronym]{glossaries-extra}
\makeglossaries
\newacronym{ml}{ML}{machine learning}
```

`acronym` 選項啟用首字母縮略詞支持，並且 `\makeglossaries` 打開在編譯期間收集條目的機制。每個「\newacronym」都有三個參數：您將在文字中鍵入的鍵、短形式和長形式。在序言中或在「\input」的單獨檔案中定義所有它們，因此它們位於一個位置。

在正文中，您永遠不會輸入首字母縮寫本身：

```latex
\gls{ml} on first use expands; later uses stay short.
\printglossaries
```

文件中的第一個 `\gls{ml}` 列印“機器學習 (ML)”，後面的每個都只列印“ML”。由於套件追蹤使用情況而不是在來源中的位置，因此無論您的重組將其移動到何處，擴充都會跟隨第一次使用。 `\printglossaries` 會列印收集的縮寫列表，無論您將其放在何處，通常位於目錄之後。相關指令涵蓋了與此相關的語法：「\glspl」表示複數，「\Gls」表示大寫的句子開頭。

問題在於建構。在 LaTeX 傳遞之間，必須執行 `makeglossaries` 幫助程式來對條目進行排序和格式化，否則 `\printglossaries` 不會產生任何結果。完整的 Latexmk 设置会自动处理这个问题。更简单的管道可能不会，而词汇表额外为它们提供了后备。如果您的列表顽固地拒绝出现，则缺少的帮助程序运行是第一个嫌疑人，远远早于文档中的错误。

## 手工建造的路線

對於簡單的符號列表，手動維護的「描述」環境通常就足夠了：

```latex
\section*{Notation}
\begin{description}
 \item[$\eta$] learning rate
 \item[$\theta$] model parameters
\end{description}
```

每個 `\item[...]` 將其括號參數列印為粗體標籤，並附有以下說明，這正是符號清單的形狀。沒有首次使用跟踪，但交易品種列表很少需要任何跟踪；不管怎樣，符號都是在數學中第一次出現的地方定義的。

誠實的建議是將工具與規模相匹配。具有五個首字母縮略詞的論文更容易手動管理。一篇 200 頁、有 40 頁的論文則不然，而且該軟體包的設定成本要高出好幾倍。 [列表課程](/learn/lists/) 更詳細地介紹了「描述」環境。