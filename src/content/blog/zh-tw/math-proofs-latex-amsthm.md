---

title: "數學學生：保持一致的定理、證明和符號"
description: "amsthm 風格、引理編號、宏觀衛生、長推導以及純粹和應用數學寫作的多文件習慣。"
date: 2026-07-12
tags: [mathematics, proofs, math]
---

數學論文是符號加證明結構。 LaTeX 是預設值，因為兩者
一旦論證的長度超過一頁，Word 中就會感到痛苦。編譯器是
這不是最困難的部分。一致性是：當你插入一個時跳動的定理數
引理，字母“V”，表示三種不同的事物，以及留下引理的證明
QED 標記浮動在下一行。

這是課程作業、arXiv 筆記和論文章節的實用設定。
偷你需要的東西；忽略其餘的，直到你感到疼痛為止。

## amsthm 早期，在第一個引理之前

在發明特設的粗體「定理」之前先載入「amsthm」。標題：

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{proposition}[theorem]{Proposition}
\newtheorem{corollary}[theorem]{Corollary}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]
\newtheorem{example}{Example}[section]
\theoremstyle{remark}
\newtheorem*{remark}{Remark}
```

當您在上方插入材料時，按部分編號可以保持引用穩定
結果。為引理和命題共享計數器（“[定理]”）是很常見的
在純數學中；應用論文有時會獨立對所有內容進行編號。選擇一個
并在整个文档中坚持使用它。

課程：[定理和證明區塊](/learn/theorems-proofs/)。

## 乾淨地結束的證明

使用「proof」環境，使證明結束標記落在正確的位置：

```latex
\begin{proof}
  ...
\end{proof}
```

如果最後一行是顯示的方程，則以「\qedhere」結尾，因此該框會顯示
以下行不是孤兒。嵌套證明（證明內的聲明）有效
具有自己的簡短證明的「聲明」環境比縮排更好
永遠不會結束的散文。

對於教師想要手寫步驟的家庭作業，仍然使用 LaTeX
乾淨的提交 PDF，但將粗略的工作保存在單獨的註釋文件中，以便您可以
重寫時不要刪除唯一正確的行。

## 宏觀衛生

定義一次符號：

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\eps}{\varepsilon}
\DeclareMathOperator{\Hom}{Hom}
\DeclareMathOperator{\Spec}{Spec}
```

如果兩個概念共享一個字母，請使用巨集來消除歧義（`\VectSpace` 與
`\RandomVar`) 而不是重複使用具有不同字體的 `V`。共同作者不會
猜猜哪一種字體代表哪個物件。當註釋表超出螢幕時，
將其放入“notation.tex”和“\input”中，以便每個人都編輯一個檔案。

人工智慧工具喜歡發明新符號。如果您使用一個，請將宏塊貼到
提示並要求它只使用定義的名稱。同樣的紀律適用
沒有 AI：新符號 → 新增到工作表 → 然後輸入。

## 對齊長導數

`align` 和 `split` 保持多行計算的可讀性。只顯示你的行號
將用“\eqref”引用。一堵編號方程式的牆比一堵牆更難理解
兩條標記線的簡短敘述。

```latex
\begin{align}
  f(x)
  &= g(x) + h(x) \label{eq:decomp} \\
  &= \cdots
\end{align}
```

對於應攜帶一個數字的單一多線方程，請使用“split”
在「方程式」裡面。對於案例，「案例」或「對齊」勝過自製數組
管道。

## 重新排序後仍然存在的交叉引用

切勿將「by Theorem 2.3」寫成純文字。使用 `\ref` 或使用 `cleveref`，
`\cref{thm:main}`。標籤位於標題或定理標題行之後，而不是
之前。如果兩個章節共用「thm:main」等標籤，則按章節加上前綴
(`ch3-thm:main`)，否則當您合併檔案時，您將得到靜默的錯誤目標。

專案範圍內的轉到定義和即時損壞引用檢查有助於處理多文件
論文。現在這是正常的研究編輯領域，而不是奢侈品。

## 多文件筆記和論文

使用根文件和部分輸入，即使是很長的作業也會變得更容易。論文
幾乎總是希望每一章都有“\include”，而在起草一章時則需要“\includeonly”
一次章節。將數字保留在「figures/ch3/」下，以便重新排序章節
不打破路徑。

完整的論文編譯速度很慢。草圖模式，外部化重型 TikZ，以及
盡可能只編譯您正在編輯的章節。參見
[分割章節檔案](/learn/split-chapter-files/) 和
[加速編譯](/learn/speed-up-compilation/)。

## 當 PDF 是上交時

課程作業仍然需要無聊的外殼：課程大綱的頁邊距、頁碼、
标题，有时是学术诚信的声明。的
[快速參考](/learn/cheatsheet/) 涵蓋了這些內容，以便您可以關注
證明。

保留原始碼。當遇到下一個問題時，沒有「.tex」的標記 PDF 是一個死胡同
set 重複使用相同的前導碼。具有 Git 歷史記錄的本地資料夾（或研究
檢查點為您編譯的編輯器）擊敗了“final_v3_really.pdf”
桌面。

## 提交之前

確保定理和引理共享一致的編號方案，每個符號都在
主體在巨集表中定義，證明使用 `proof` / `\qedhere`
在需要的地方。僅對您引用的方程式進行編號。所有交叉引用都應該是
`\ref`/`\cref`，不是硬編碼的數字。開啟 PDF 一次：字體嵌入、邊距
與簡介相符。

## 家庭作業與紙本論文

對於家庭作業來說，清晰勝過包裝巧妙。對於論文或論文章節，
對定理設定和巨集表進行一次投資，然後重複使用。不要重建
在專案中期編號，因為一篇部落格文章建議了不同的風格。

## 與共同作者分享

發送 PDF 供閱讀，發送儲存庫（或來源 zip）供編輯。如果一個
合著者僅返回掃描的標記，在當天應用並提交。陳舊的
紙堆是兩個人以不同方式「修復」相同引理的方式。

在完成設定工作之後，LaTeX 基本上消失了，您可以考慮數學。