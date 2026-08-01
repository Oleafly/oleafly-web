---

title: "用於機器學習論文的 LaTeX，沒有混亂的符號"
description: "註釋表、消融表、演算法、訓練運行的資料以及從第一份 arXiv 草稿到相機就緒的論文旁邊的 Git。"
date: 2026-06-18
tags: [machine-learning, research, math]
---

大多數 ML 論文在 LaTeX 中都以相同的方式失敗：第三頁的數學很好，
第十二頁不一致。損失在一個部分是“L”，在一個部分中是“\mathcal{L}”
另一種粗體向量只在作者記得時才會出現。審稿人
即使他們不對此發表評論，也要注意。

這是學生撰寫研討會論文、會議的實用指南
與培訓代碼分享 DNA 的提交內容和論文章節。

## 第一天選擇一張註解表

在寫相關工作之前，先寫二十行宏：

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
\DeclareMathOperator*{\argmax}{arg\,max}
\newcommand{\loss}{\mathcal{L}}
\newcommand{\expect}{\mathbb{E}}
\newcommand{\kl}{\mathrm{KL}}
```

將該區塊貼到每個共同作者分支中。當模特兒發明一個新符號時，
首先將其新增至工作表中，然後使用它。的
[AI follow-notation 課程](/learn/ai-follow-notation/) 與
循環中的語言模型：模型必須遵守工作表，而不是發明字型。

研究編輯器中的即時數學預覽可協助您捕捉「\mathcal{L}」和
當您鍵入時，“L”不是同一個物件。

## 適合拍照的桌子

消融表不断增长，直至从页面上脱落。更喜欢没有的“booktabs”
垂直规则，“siunitx”用于对齐小数，以及说明
指标和分割（ImageNet、CIFAR、域内与 OOD）。如果表跨越
页面，尽早使用“longtable”而不是将字体缩小到7pt。

視覺建構器有助於初稿：
[表格產生器](/tools/table-generator/) 在瀏覽器中運作。決賽桌
仍應在標題中命名度量並將 ± 定義為 std 或 se。

如果場地允許，請在附錄表中報告種子和超參數範圍。
主表保持可掃描狀態。

## 演算法和列表

偽代碼屬於“algorithm2e”或“algorithmicx”，而不是等寬字體
段落。真正的訓練片段屬於“listings”或“minted”
語言設置，以便審閱者可以瀏覽。保持主論文簡短；放置完整配置
在附錄或帶有提交雜湊的儲存庫連結中。

```latex
\begin{algorithm}
\caption{Training step}\label{alg:step}
...
\end{algorithm}
```

您引用的數位演算法。不要將五頁 PyTorch 轉儲到 PDF 中。

## 來自 TensorBoard 和 matplotlib 的數據

盡可能匯出 PDF 或 SVG。 300dpi 的光柵 PNG 適合 UI
螢幕截圖，不適用於線圖。裁切 `\includegraphics` 之前的空白。如果一個
浮動逃到下一部分，在與“[H]”戰鬥之前確定大小和位置
一小時：[浮動放置](/learn/figure-wrong-position/)。

多面板消融：使用“subcaption”在 TeX 中構建，或在外部編寫
包括一份 PDF。在各個數字中保持「我們的」顏色一致，以便撇取者
學習一次傳奇。

## 兩列會議類

NeurIPS、ICML、ICLR 和 CVPR 風格的類別會改變邊距和浮動規則。
儘早針對官方類別進行編譯。頁數限制是真實存在的；不要壓碎
字體。當以下情況時，將校樣和額外的刪減移至附錄或補充 PDF：
呼叫允許。

## 相關工作與引用

使用穩定的引用鍵和乾淨的學者導出。驗證`.bib`：
[BibTeX 驗證器](/tools/bibtex-validator/)。引用您的程式碼和資料集
依賴。作者年份與數字取決於地點；使用模板的
風格，而不是混合體。

## 論文旁邊的 Git

每個架構變更都應該是您可以命名的提交。處理紙張並
將程式碼視為同一個項目，沒有兩個單獨備份的習慣。

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest)保留論文
在真正的 Git 儲存庫中，旁邊是具有即時數學預覽的專案感知編輯器，
跨文件參考、引文完成和 SyncTeX PDF。這與 ML 程式碼的方式相符
已經活了。當您忘記時，將其與 [cheatsheet](/learn/cheatsheet/) 配對
截止日期下的語法。

標記與 OpenReview 或 CMT 上傳相符的提交。你會想要它
反駁期間。

## 反駁和上鏡準備

反駁窗口很短。保留一個分支或資料夾用於“反駁實驗”
這樣您就不會污染提交的 PDF 來源。相機就緒通常允許
額外的頁面；使用它是為了清楚起見，而不是為了轉儲每個失敗的運作。

## 更廣泛的影響和限制

即使場地需要簡短的社會影響或限制段落，
用簡單易懂的語言寫出來。 LaTeX 不會保存模糊的段落。放負數
如果主頁限制很緊，您可以在附錄中顯示結果，
並說你在正文中做了，這樣審稿者就不會認為你隱藏了它們。

## 上傳之前

檢查各部分的註釋表是否一致，主要表格是
可讀，具有命名和定義的指標，並引用了演算法和數字
按順序。確認官方類別在頁數限制內編譯無字體
犯罪行為，“.bib”中引用的程式碼和資料是乾淨的，提交哈希是
為上傳的 PDF 進行記錄。

機器學習實驗已經夠吵了。保持符號和表格安靜。