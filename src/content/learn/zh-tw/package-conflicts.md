---

title: "互相爭鬥的軟體包"
description: "hyperref 最後，cleveref 之後，過時的對，最小的例子。"
category: "runtime"
order: 5
level: "advanced"
tags: ["packages", "errors"]
featured: false
updated: 2026-07-25
---

# 互相爭鬥的包

LaTeX 套件可以自由地重新定義彼此的命令，並且許多套件是故意這樣做的。這就是“hyperref”將每個交叉引用變成連結的方式。這也意味著兩個套件可以各自用不相容的假設修補相同的命令，結果範圍從像「命令\腳註已定義」或「套件 xcolor 的選項衝突」這樣的徹底錯誤到默默錯誤的輸出。在將包添加到先前工作的序言中後，衝突幾乎總是會立即出現，這也是最大的線索。

## 載入順序是成功的一半

許多衝突純粹是透過順序來解決的，因為後來載入的套件擁有最後的決定權。最重要的規則：在序言末尾附近載入“hyperref”。它重寫了 LaTeX 交叉引用機制的大部分，並且在它之後加載的套件可能會撤消這些補丁。一個簡短的例外清單必須稍後出現，而您實際遇到的例外是“cleveref”，它被設計為位於“hyperref”之上，並且必須在其後加載：

```latex
\usepackage{graphicx}
\usepackage{amsmath}
% ... everything else ...
\usepackage{hyperref}
\usepackage{cleveref} % after hyperref, by design
```

當一個包的文檔指定相對於另一個包的位置時，請相信它。這些註釋的存在是因為有人已經遇到了你即將遇到的衝突。

## 過時的軟體包及其替代品

有些冲突是由于在其后继包旁边加载死包而引起的。不要將 `epsfig` 與 `graphicx`、`subfigure` 與 `subcaption` 或舊的 `times` 和 `mathptmx` 墊片與現代字體包（如 `newtxtext`）結合。旧模板是通常的来源：它们加载编写模板时当前的任何内容，然后在顶部添加现代等效内容。拆下舊的並保留替換的。 `nag` 包可以在编译时为您标记过时的用法。

## 選項衝突

「套件 X 的選項衝突」表示該套件使用不同的選項載入了兩次，通常一次是由您的文件類別在背後載入的。您無法使用新選項再次載入它，但您可以在任何人載入它之前註入選項：將 `\PassOptionsToPackage{table}{xcolor}` 放在 `\documentclass` 之前，選項將合併到先載入的位置。

## 用一個最小的例子來隔離

當原因不明顯時，建立一個最小的工作範例：一個僅包含「\documentclass」的文件、兩個可疑套件以及一個只有一行文字的「\begin{document}...\end{document}」。如果錯誤再次出現，請切換載入順序和選項，直到錯誤不再出現為止。如果它沒有重現，請將其他包分成兩半添加回去，直到它返回。這種二分搜尋會在幾次編譯中收斂，並為您提供清晰的搜尋對。同樣的技術可以挽救繼承的前導碼，如[無法編譯的大學類別檔案](/learn/fix-broken-template/)所述。