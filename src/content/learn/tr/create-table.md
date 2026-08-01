---

title: "Kağıt masaya benzeyen bir masa"
description: "tablo, kitap sekmeleri kuralları, resim yazısı, etiket."
category: "floats-and-ink"
order: 1
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Tables check'
  questions:
    - prompt: 'Which environment builds the cell grid in a classic LaTeX table?'
      choices:
        - 'figure'
        - 'tabular'
        - 'itemize'
        - 'equation'
      answer: 'B'
      level: beginner
    - prompt: 'What is booktabs mainly for?'
      choices:
        - 'Drawing TikZ trees'
        - 'Clean horizontal rules (top, mid, bottom) instead of a heavy grid'
        - 'Building bibliographies'
        - 'Inline math spacing'
      answer: 'B'
      level: beginner
    - prompt: 'Where do \caption and \label usually go for a table float?'
      choices:
        - 'Only in the preamble'
        - 'Inside the table float, with the label after the caption'
        - 'After \end{document}'
        - 'In a separate .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'In a tabular column spec, what does l mean?'
      choices:
        - 'Landscape page'
        - 'Left-aligned column'
        - 'Large font'
        - 'Equation label column'
      answer: 'B'
      level: beginner
---

# Kağıt masaya benzeyen bir masa

LaTeX'teki tablolar, farklı işlere sahip iki iç içe ortam kullanır. İçteki 'tablo' hücrelerin ızgarasını oluşturur. Dıştaki "tablo" bu ızgarayı kayan bir hale getirir, böylece bir sayı, bir başlık ve bir etiket taşıyabilir ve böylece LaTeX onu sayfada boş olan yere yerleştirebilir. Yatay kurallar için "booktabs" paketini eklediğinizde sonuç, elektronik tablo ekran görüntüsü değil, yayınlanmış bir makaleden alınan bir tablo gibi görünecektir.

```latex
\usepackage{booktabs}
\begin{table}[htbp]
 \centering
 \caption{Results on the test set.}
 \label{tab:results}
 \begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
 \end{tabular}
\end{table}
```

## Dış ortam

`[htbp]` bağımsız değişkeni, LaTeX'in kayan noktayı nereye yerleştirebileceğini listeler: buraya metinde, sayfanın üst kısmına, altına veya ayrı bir kayan nokta sayfasına. Bunları bu sırayla dener ve dördünü de kabul ederek masanın uzaklaşmasını önler; mekanizmalar [yüzen cisimlerin gerçekte nereye indiği](/learn/position-figures/) bölümünde açıklanmaktadır. `\merkezleme' ızgarayı yatay olarak ortalar. '\Başlık' numaralı başlığı yazdırır ve geleneksel olarak tablo başlıkları, aşağıya doğru giden şekil başlıklarının aksine tablonun üstüne çıkar. Bir etiket, [altyazılar ve etiketler](/learn/captions-labels/) kapsamına göre en son verilen numarayı kaydettiği için "\label", "\caption"dan sonra gelmelidir. Etiket yerinde olduğunda, metninizdeki 'Tablo~\ref{tab:results}' her zaman doğru sayıyı yazdırır.

## İç ızgara

`\begin{tabular}`dan sonraki `{lcc}`, harf başına bir sütun bildirir: `l` sola hizalanır, `c` ortalanır ve `r` sağa hizalanır. Üç harf, üç sütun anlamına gelir ve her satırda tam olarak bu kadar hücre bulunmalıdır. Bir satır içinde `&` hücreleri ayırır ve `\\` satırı bitirir. Metin sütunları genellikle en iyi sola hizalanmış şekilde okunurken, kısa sayısal sütunlar genellikle ortalanır.

Üç kural 'kitap sekmelerinden' gelir. `\toprule` tabloyu açar, `\midrule` başlık satırını verilerden ayırır ve `\bottomrule` onu kapatır. Bunlar, düz '\hline' komutunun yerini alır ve üstte ve altta doğru ayarlanmış boşluklarla birlikte gelir; tablonun profesyonelce ayarlanmış görünmesinin büyük bir kısmı da budur. Dikey çizgiler yok ve veri satırları arasında kural yok: 'booktabs' stili her ikisini de bilerek dışarıda bırakıyor. Bunun gerekçesi [üç kurallı tablolarda](/learn/booktabs-beautiful/) açıklanmıştır.

## Pratik notlar

Yeni başlayanların en sık yaptığı hatalar, '&' ayırıcılarının sayısı ile bildirilen sütunlar arasındaki uyumsuzluk ve satırın sonunda unutulan bir '\\'dir; bunların her ikisi de bir sonraki satırı işaret eden kafa karıştırıcı hata mesajları üretir. Hücreleri elle saymak istemiyorsanız, [tablo oluşturucuyu](/tools/table-generator/) kullanarak ızgarayı görsel olarak oluşturun ve sonucu belgenize yapıştırın.