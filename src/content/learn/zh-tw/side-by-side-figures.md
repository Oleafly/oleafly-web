---

title: "兩個面板排成一排"
description: "迷你頁面並排，沒有打包戰爭。"
category: "floats-and-ink"
order: 5
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# 兩個面板排成一排

有時您需要兩張相鄰的圖像，每張圖像都有自己的標題和圖號。您不需要為此提供特殊的包。單一「figure」環境中的普通「minipage」方塊可以完成這項工作，並且因為兩個圖像都位於一個浮動中，所以 LaTeX 永遠無法將它們分離到不同的頁面上。

## 模式

```latex
\begin{figure}[htbp]
 \centering
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{Left}
 \end{minipage}\hfill
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Right}
 \end{minipage}
\end{figure}
```

「minipage」是一個行為類似於微型頁面的盒子：它具有您選擇的固定寬度，並且其內容在該寬度內包裹和堆疊。這裡每個迷你頁採用“0.48\textwidth”，即文字寬度的 48%。這故意留下了 4% 無人認領的空間，兩個盒子之間的“\hfill”是可拉伸的空間，可以擴展以填充它，將一個面板推到左邊距，另一個面板推到右邊距。如果將兩個寬度都設為“0.5\textwidth”，它們將精確地合計行寬，沒有任何分隔空間，第二個框將落在下一行上，這是並排佈局神秘地垂直堆疊的最常見原因。

在每個小頁面內，「width=\linewidth」會將圖像縮放到周圍框的寬度，而不是整個頁面的寬度。使用 `\textwidth` 會出現一個常見的錯誤，即使每個影像與全文區塊一樣寬，從而保證溢出。

注意標題的位置：每個小頁內。這為每個面板提供了完整的標題和自己的編號，因此該圖生成的圖 3 和圖 4 排成一排。外部的「[htbp]」放置選項告訴 LaTeX 它可以將浮動元素按優先順序放置在此處、頁面頂部、底部或浮動頁面上。

## 對齊頂部並混合內容

如果兩個影像的高度不同，它們的垂直對齊方式可能會出現偏差，因為預設情況下小型頁面會在其中心對齊。編寫 `\begin{minipage}[t]{0.48\textwidth}` 將它們放在頂部對齊。迷你頁也不關心它們包含什麼，因此相同的佈局在表格旁邊放置一個圖形，或者在解釋性文字段落旁邊放置一個圖像，而子圖樣式包不是為此設計的。

## 何時使用子圖

此模式無法為您提供的一件事是在單一共享標題和單個圖號下標記為 (a) 和 (b) 的面板。當您想要「圖 5(a)」而不是兩個獨立的圖形時，請切換到 [subfigures](/learn/subfigures-abc/)。經驗法則：迷你頁適用於剛好是鄰居的人物，而子人物則適用於剛好有零件的人物。