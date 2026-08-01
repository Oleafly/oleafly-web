---

title: "Denklemler için sayılar ve işaretçiler"
description: "label, ref, eqref ve yalnızca kastettiğin satırları numaralandırma."
category: "equation-craft"
order: 6
level: "beginner"
tags: ["math", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Denklemler için sayılar ve işaretçiler

Bir denklemi numaralandırmak, ona daha sonra başvuracağınıza dair bir sözdür. LaTeX bu sözün her iki yarısını da yerine getirir: "denklem" ortamı numarayı atar ve etiket sistemi, numarayı kendiniz yazmanıza gerek kalmadan belgenin herhangi bir yerinden bu numarayı işaret etmenize olanak tanır.

```latex
\begin{equation}
 \label{eq:bayes}
 p(\theta \mid y) \propto p(y \mid \theta)\, p(\theta)
\end{equation}
As shown in \eqref{eq:bayes}, ...
```

## Etiketler ve referanslar

`\begin{equation}` görüntülenen satırı numaralandırır. `\label{eq:bayes}` bu sayıya `eq:bayes` adını ekler. Ad sizin seçiminizdir ve 'eq:' öneki denklem etiketlerini şekillerden ve tablolardan farklı tutar. Alıntı yapmak gerekirse, `\ref{eq:bayes}` çıplak sayıyı yazdırırken, `amsmath'tan `\eqref{eq:bayes}`, sayının denklemin yanında nasıl göründüğüne uyacak şekilde parantez içine alır. İki stilin aynı fikirde olması için denklemler için "\eqref"i tercih edin.

Sayılar bir geçişte kaydedildiği ve bir sonraki geçişte okunduğu için yeni bir derleme, bir sonraki çalıştırmaya kadar `??` gösterir. [Sayılar yerine soru işaretleri](/learn/equations-show-qq/) bu döngüyü kapsar.

Görüntülenen bir denkleme hiçbir zaman başvurulmuyorsa, onu numaralandırmayın. Bunun yerine "\[ ... \]" veya yıldızlı "denklem*" kullanın; böylece sayılar yalnızca okuyucunun tekrar bulması gerekebilecek satırları işaretler.

## Bazı satırları hizalayarak numaralandırma

'Hizalama'daki çok satırlı türetmeler varsayılan olarak her satırı numaralandırır; bu nadiren istediğiniz şeydir. İki komut bunu satır başına ayarlar:

```latex
\begin{align}
 a &= b \label{eq:a} \\
 c &= d \notag \\
 e &= f \label{eq:e}
\end{align}
```

`\notag' satırındaki sayıyı bastırır, dolayısıyla burada ilk ve son satırlar numaralarını ve etiketlerini korurken ara adım numarasız kalır. Her bir `\etiket`i adlandırdığı satıra, `\\`den önce koyun, böylece doğru numaraya bağlanır. Ya hep ya hiç kısayolu hiçbir şeyi numaralandırmayan 'hizala*'dır. Çok satırlı ortamların tamamı, [sıraya giren çok satırlı denklemler](/learn/align-equations/) kapsamında ele alınmaktadır.

Yaygın hata, "Denklem 3'e bakın" gibi gerçek sayıyı yazmaktır; bu, üstüne bir denklem eklediğiniz anda bozulur. Her zaman bir etiket üzerinden geçin ve LaTeX'in her derlemede yeniden numaralandırmasına izin verin. [Oyun alanında](/live/) `\notag' ekleyip çıkarırken numaralandırma güncellemesini canlı olarak izleyebilirsiniz.