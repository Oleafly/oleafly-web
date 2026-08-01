---

title: "保持符號誠實的宏"
description: "newcommand、NewDocumentCommand、共用巨集檔案。"
category: "runtime"
order: 4
level: "intermediate"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# 保持符號誠實的宏

每篇論文都有重複的符號：實數、期望運算子、帶有適當大小長條的絕對值。如果您在四十處輸入“\mathbb{R}”，並且您的顧問後來更喜歡“\mathbf{R}”，則您需要進行四十次編輯，並且您將錯過其中一項。巨集將該符號轉換為單一命名命令，定義一次。更改定義，整個文件如下。這就是保持符號誠實的方法：來源不能與其自身不同步。

## 使用 newcommand 定義指令

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\E}[1]{\mathbb{E}\left[#1\right]}
\newcommand{\abs}[1]{\left\lvert #1 \right\rvert}
```

第一個定義是最簡單的：「\R」現在是純粹的簡寫，在任何地方鍵入「\R」都會產生「\mathbb{R}」。

第二種形式需要一個參數。名稱後面的「[1]」宣告「\E」接受一個參數，「#1」標記該參數在擴充中的位置。所以 `\E{X}` 變成了 `\mathbb{E}\left[X\right]`。這個定義不僅僅是簡潔：「\left[」和「\right]」對使括號增大以適合內部的內容，因此「\E{\frac{X}{n}}」自動獲得高括號。 `\abs` 巨集與 `\lvert` 和 `\rvert` 執行相同的操作，這是絕對值的正確垂直線對。您最多可以聲明九個參數，並將它們稱為“#1”到“#9”。

如果命令已經存在，「\newcommand」將拒絕重新定義它並因錯誤而停止，這可以防止您默默地破壞某些內容。若要有意取代現有命令，請使用“\renewcommand”。

## 現代介面

目前的 LaTeX 也提供了更豐富的定義指令：

```latex
\NewDocumentCommand{\citepair}{mm}{\cite{#1}, \cite{#2}}
```

`\NewDocumentCommand` 使用參數規範字串而不是計數。這裡「mm」表示兩個強制參數，因此「\citepair{knuth84}{lamport94}」引用了這兩個鍵。規範語言比“\newcommand”更進一步：“o”在方括號中聲明可選參數，“s”檢測星號變體，“O{default}”為可選參數提供預設值。對於簡單替換之外的任何內容，請使用此介面。

## 分享定義

保持跨章節共享的「macros.sty」。將您的定義放入該文件中，使用每個文件中的“\usepackage{macros}”加載它，論文的每一章，加上幻燈片和紙質版本，都在符號上達成一致。當協作者加入時，他們會閱讀一個短文件來了解您的約定，而不是從文本中進行逆向工程。這自然與[多重檔案設定](/learn/split-chapter-files/)配對。

命名技巧：為巨集提供有意義的名稱，如“\abs”或“\norm”，而不是基於外觀的名稱，如“\bigbars”。名稱應該說明符號的含義，因此定義可以自由更改其外觀。並拒絕為您使用兩次的東西定義巨集；第三次使用左右開始回報。